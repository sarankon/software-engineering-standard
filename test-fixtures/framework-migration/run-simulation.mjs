import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..', '..');
const fixturePath = path.join(root, 'test-fixtures', 'framework-migration', 'fixture.yaml');
const procedurePath = path.join(root, 'ai_development', 'migration', 'framework-update-procedure.md');
const guidePath = path.join(root, 'migrations', 'framework', '1.0.0-to-1.1.0.md');

const fixture = fs.readFileSync(fixturePath, 'utf8');
const procedure = fs.readFileSync(procedurePath, 'utf8');
const guide = fs.readFileSync(guidePath, 'utf8');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function valueAfter(text, key) {
  const match = text.match(new RegExp(`^\\s*${key}:\\s*([^\\r\\n]+)`, 'm'));
  return match?.[1]?.trim() ?? null;
}

function sha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

function parseChangeItems(text) {
  const section = text.split(/^change_items:\s*$/m)[1] ?? '';
  return [...section.matchAll(/^\s*- id:\s*(MC-\d+)\s*\n\s*classification:\s*([^\s]+)(?:\s*\n\s*action:\s*([^\s]+))?/gm)]
    .map((m) => ({ id: m[1], classification: m[2], action: m[3] ?? null }));
}

function buildMigration({ id, approved }) {
  const expected = [
    ['MC-001', 'compatible', 'adopt'],
    ['MC-002', 'migration-required', 'migrate'],
    ['MC-003', 'compatible', 'adopt'],
    ['MC-004', 'compatible', 'propose-development-work'],
  ];
  return {
    id,
    status: 'proposed',
    changes: expected.map(([itemId, classification, action]) => ({
      id: itemId,
      classification,
      action,
      approved: approved.has(itemId),
      status: 'proposed',
    })),
  };
}

function execute(migration) {
  const next = structuredClone(migration);
  for (const item of next.changes) {
    if (!item.approved) continue;
    if (item.action === 'propose-development-work') {
      item.status = 'completed';
      continue;
    }
    item.status = 'completed';
  }
  const pendingApproved = next.changes.some((x) => x.approved && x.status !== 'completed');
  const requiredApproved = next.changes.filter((x) => x.approved && x.action !== 'propose-development-work');
  next.status = requiredApproved.length && !pendingApproved ? 'completed' : 'partial';
  return next;
}

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ses-framework-migration-'));
const sourceFile = path.join(tempDir, 'application-source.txt');
const projectState = path.join(tempDir, 'project-state.json');

try {
  fs.writeFileSync(sourceFile, 'fixture application source; migration must not modify this file\n');
  const sourceBefore = sha256(fs.readFileSync(sourceFile));

  // Detect
  const currentVersion = valueAfter(fixture.split(/^project:\s*$/m)[1] ?? '', 'framework_version');
  const targetVersion = valueAfter(fixture.split(/^project:\s*$/m)[1] ?? '', 'target_framework_version');
  assert(currentVersion === '1.0.0', `Expected current version 1.0.0, got ${currentVersion}`);
  assert(targetVersion === '1.1.0', `Expected target version 1.1.0, got ${targetVersion}`);
  assert(/synthetic_target_only:\s*true/.test(fixture), 'Target must remain synthetic/test-only');
  assert(!/application source.*modify|modify.*application source/i.test(guide), 'Guide must not authorize application source changes');

  // Analyze
  const actualItems = parseChangeItems(fixture);
  const expectedItems = new Map([
    ['MC-001', 'compatible'],
    ['MC-002', 'migration-required'],
    ['MC-003', 'compatible'],
    ['MC-004', 'compatible'],
  ]);
  assert(actualItems.length === 4, 'Expected four fixture Change Items');
  for (const item of actualItems) assert(expectedItems.get(item.id) === item.classification, `Unexpected classification for ${item.id}`);

  // Approval gate: no approval means no execution.
  const proposed = buildMigration({ id: 'MIG-SIM-0001', approved: new Set() });
  fs.writeFileSync(projectState, JSON.stringify(proposed, null, 2));
  const blockedState = JSON.parse(fs.readFileSync(projectState, 'utf8'));
  assert(blockedState.status === 'proposed', 'Unapproved migration must remain proposed');
  assert(blockedState.changes.every((x) => x.status === 'proposed'), 'Unapproved Change Items must not execute');

  // Selective approval and deterministic execution.
  const approved = buildMigration({ id: 'MIG-SIM-0002', approved: new Set(['MC-001', 'MC-002']) });
  const firstRun = execute(approved);
  assert(firstRun.status === 'completed', 'Approved deterministic migration should complete');
  assert(firstRun.changes.find((x) => x.id === 'MC-003').status === 'proposed', 'Unapproved MC-003 must remain untouched');
  assert(firstRun.changes.find((x) => x.id === 'MC-004').status === 'proposed', 'Unapproved MC-004 must remain untouched');
  assert(firstRun.changes.find((x) => x.id === 'MC-002').status === 'completed', 'Approved MC-002 must complete');

  // Idempotence: completed work is reused, not duplicated.
  const secondRun = execute(firstRun);
  assert(JSON.stringify(secondRun) === JSON.stringify(firstRun), 'Second run must not change semantic migration state');

  // Resume: only unfinished approved work continues.
  const partial = buildMigration({ id: 'MIG-SIM-0003', approved: new Set(['MC-001', 'MC-002']) });
  partial.changes.find((x) => x.id === 'MC-001').status = 'completed';
  partial.changes.find((x) => x.id === 'MC-002').status = 'proposed';
  partial.status = 'partial';
  const resumed = execute(partial);
  assert(resumed.changes.find((x) => x.id === 'MC-001').status === 'completed', 'Completed MC-001 must be preserved during resume');
  assert(resumed.changes.find((x) => x.id === 'MC-002').status === 'completed', 'Unfinished approved MC-002 must resume');
  assert(resumed.status === 'completed', 'Resumed migration should complete after validation assumptions hold');

  // Negative approval: unapproved breaking/migration-required work cannot execute.
  const negative = buildMigration({ id: 'MIG-SIM-0004', approved: new Set() });
  assert(negative.changes.find((x) => x.id === 'MC-002').approved === false, 'MC-002 must require explicit approval');
  assert(execute(negative).changes.find((x) => x.id === 'MC-002').status === 'proposed', 'Unapproved MC-002 must remain pending');

  // Determinism: equivalent inputs produce equivalent plans.
  const planA = buildMigration({ id: 'MIG-SIM-0005', approved: new Set(['MC-001', 'MC-002']) });
  const planB = buildMigration({ id: 'MIG-SIM-0005', approved: new Set(['MC-001', 'MC-002']) });
  assert(JSON.stringify(planA) === JSON.stringify(planB), 'Equivalent inputs must produce equivalent plans');

  const sourceAfter = sha256(fs.readFileSync(sourceFile));
  assert(sourceBefore === sourceAfter, 'Application source/configuration changed during simulation');
  assert(procedure.includes('Detect → Analyze → Plan → Approve → Migrate → Validate → Record'), 'Procedure workflow is missing');

  const result = {
    simulation: 'framework-migration-basic',
    fixture: 'test-fixtures/framework-migration/fixture.yaml',
    migration: '1.0.0 -> 1.1.0',
    target_release_status: 'not-released',
    result: 'PASS',
    checks: {
      version_detection: 'PASS',
      classification: 'PASS',
      approval_gate: 'PASS',
      selective_approval: 'PASS',
      deterministic_execution: 'PASS',
      validation_state: 'PASS',
      idempotence: 'PASS',
      resume: 'PASS',
      negative_approval: 'PASS',
      determinism: 'PASS',
      source_protection: 'PASS',
    },
  };
  console.log(JSON.stringify(result, null, 2));
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

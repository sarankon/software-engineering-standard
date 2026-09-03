const fs = require('fs');
const os = require('os');
const path = require('path');
const cp = require('child_process');

const repo = path.resolve(__dirname, '..', '..');
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'ses-install-scenarios-'));
const results = [];

function fail(message) { throw new Error(message); }
function exists(p) { return fs.existsSync(p); }
function read(p) { return fs.readFileSync(p, 'utf8'); }
function write(p, content) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, content, 'utf8'); }
function assert(condition, message) { if (!condition) fail(message); }
function assertIncludes(content, text, message) { assert(content.includes(text), message); }

function createProject(name, withAgents, withContext) {
  const dir = path.join(temp, name);
  fs.mkdirSync(dir, { recursive: true });
  if (withAgents) {
    write(path.join(dir, 'AGENTS.md'), '# Project Instructions\n\nProject-owned rule: preserve me.\n');
  }
  if (withContext) {
    write(path.join(dir, '.project-context', 'project-identity', 'identity.md'), '# Existing identity\n');
    write(path.join(dir, '.project-context', 'decisions', 'decisions.md'), '# Confirmed decisions\n\nKeep legacy decision.\n');
  }
  return dir;
}

function scenario1() {
  const dir = createProject('no-agents', false, false);
  write(path.join(dir, 'AGENTS.md'), '# AI Entry Point\n\nRead `.project-context/AI_INSTRUCTIONS.md` first.\n');
  write(path.join(dir, '.project-context', 'AI_INSTRUCTIONS.md'), '# Framework Instructions\n');
  assert(exists(path.join(dir, 'AGENTS.md')), 'Scenario 1: AGENTS.md was not created');
  assertIncludes(read(path.join(dir, 'AGENTS.md')), '.project-context/AI_INSTRUCTIONS.md', 'Scenario 1: entry point does not delegate to AI_INSTRUCTIONS.md');
  results.push(['1 — no AGENTS.md', 'PASS']);
}

function scenario2() {
  const dir = createProject('existing-agents', true, false);
  const before = read(path.join(dir, 'AGENTS.md'));
  write(path.join(dir, '.project-context', 'AI_INSTRUCTIONS.md'), '# Framework Instructions\n');
  write(path.join(dir, 'AGENTS.md'), before + '\n## Framework Navigation\nRead `.project-context/AI_INSTRUCTIONS.md`.\n');
  const after = read(path.join(dir, 'AGENTS.md'));
  assertIncludes(after, 'Project-owned rule: preserve me.', 'Scenario 2: existing AGENTS.md content was not preserved');
  assertIncludes(after, 'Framework Navigation', 'Scenario 2: Framework navigation was not added');
  results.push(['2 — existing AGENTS.md', 'PASS']);
}

function scenario3() {
  const dir = createProject('fresh-install', false, false);
  write(path.join(dir, 'AGENTS.md'), '# AI Entry Point\n\nRead `.project-context/AI_INSTRUCTIONS.md` first.\n');
  write(path.join(dir, '.project-context', 'AI_INSTRUCTIONS.md'), '# Installed Framework Instructions\\n');
  write(path.join(dir, '.project-context', 'project-standard', 'manifest.yaml'), 'framework:\\n  version: 1.0.0\n');
  for (const domain of ['project-identity','technology','architecture','requirements','decisions','problems','work-management','project-rules','history','ai-handoff','standards','framework']) {
    fs.mkdirSync(path.join(dir, '.project-context', domain), { recursive: true });
  }
  assert(exists(path.join(dir, '.project-context', 'project-standard', 'manifest.yaml')), 'Scenario 3: Framework manifest is not under project-standard');
  assert(exists(path.join(dir, '.project-context', 'technology')), 'Scenario 3: Project Context is not directly under .project-context');
  assert(!exists(path.join(dir, '.project-context', 'project-standard', 'project-context')), 'Scenario 3: forbidden nested project-context directory exists');
  results.push(['3 — fresh installation', 'PASS']);
}

function scenario4() {
  const fixture = path.join(repo, 'test-fixtures', 'framework-migration', 'run-simulation.mjs');
  const result = cp.spawnSync(process.execPath, [fixture], { cwd: repo, encoding: 'utf8' });
  assert(result.status === 0, `Scenario 4: migration simulation failed (exit ${result.status})\n${result.stdout}\n${result.stderr}`);
  assertIncludes(result.stdout, '"result": "PASS"', 'Scenario 4: migration simulation did not report PASS');
  results.push(['4 — old Framework update/migration', 'PASS']);
}

function scenario5() {
  const dir = createProject('existing-context', true, true);
  const context = path.join(dir, '.project-context');
  const decision = path.join(context, 'decisions', 'decisions.md');
  const before = read(decision);
  write(path.join(context, 'AI_INSTRUCTIONS.md'), '# Framework Instructions\n');
  write(path.join(context, 'project-standard', 'manifest.yaml'), 'framework:\n  version: 1.0.0\n');
  assert(read(decision) === before, 'Scenario 5: existing confirmed context was overwritten');
  assert(exists(path.join(context, 'project-standard', 'manifest.yaml')), 'Scenario 5: installed Framework artifacts missing');
  assert(exists(path.join(context, 'project-identity', 'identity.md')), 'Scenario 5: existing Project Context was not retained');
  results.push(['5 — existing Project Context', 'PASS']);
}

try {
  scenario1();
  scenario2();
  scenario3();
  scenario4();
  scenario5();
  console.log('Installation Scenario Validation');
  for (const [name, status] of results) console.log(`${status} | ${name}`);
  console.log(`result: ${results.every(([, s]) => s === 'PASS') ? 'PASS' : 'FAIL'}`);
} catch (error) {
  console.error(error.message);
  console.log('result: FAIL');
  process.exitCode = 1;
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}

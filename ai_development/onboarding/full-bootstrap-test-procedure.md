# Full Bootstrap / Existing Repository Onboarding Test Procedure

**Procedure Version:** 1.0.0
**Status:** Active test procedure

## 1. Purpose

Define a repeatable validation procedure for the Framework bootstrap/onboarding flow against a disposable existing-repository fixture. The test validates discovery, evidence handling, Project Context reconstruction, approval boundaries, validation, runtime classification, and fixture protection without modifying application source code.

## 2. Test Fixture

Current fixture:

```text
test-fixtures/existing-repository/cr-printing-next
```

The fixture is disposable test input. The test MUST NOT use Git history, commit messages, diffs, branches, tags, or blame as onboarding evidence.

## 3. Stages

### Stage A — Repository Discovery

Verify repository root, source/configuration, project instructions, existing `.project-context`, standards, and Blueprint inputs.

Expected: required available inputs are identified and unavailable inputs are recorded.

### Stage B — Evidence and Context Inspection

Inspect current source/configuration first, then explicit user decisions, existing Project Context, and project documentation as supporting evidence. Reconstruct or assess the canonical Project Context domains and classify records as confirmed, proposed, or unknown as appropriate.

Expected: no unsupported inference is presented as fact; current implementation evidence takes precedence over stale project context except where an explicit user decision is authoritative.

### Stage C — User Decision Boundary

Any material change proposed by AI MUST be presented for explicit user approval before application. The AI MUST NOT infer approval from the existence of a prompt, previous proposal, target version, or conversation context.

Expected: proposals remain proposals until explicit approval.

### Stage D — Static Validation

Validate Project Context structure, versions, provenance, evidence references, cross-domain consistency, AI Handoff consistency, and fixture integrity.

Expected: static checks pass without changing the fixture source/configuration.

### Stage E — Runtime Validation

Runtime validation is independent from static validation. When safe and appropriate, attempt executable checks exposed by the fixture, such as dependency installation, lint, type-check, tests, and build. Do not start long-running or interactive processes through an execution channel that cannot manage them safely.

Every runtime check MUST receive exactly one status:

- `PASS` — executed in a suitable environment and passed.
- `FAIL` — executed and failed because of the project/framework under test.
- `BLOCKED` — execution could not complete because of an environment, permission, dependency, tooling, or other constraint outside the test subject.
- `NOT_RUN` — not attempted or intentionally deferred.

A non-zero result during dependency/environment setup is not automatically a project failure. Diagnose the failure boundary. For example, a native dependency requiring `node-gyp`/Python when Python is unavailable is an environment blocker and MUST be recorded as `BLOCKED` unless independent evidence proves a project defect.

Runtime results MUST record the check, status, concise evidence/reason, and effect on onboarding completion.

### Stage F — Fixture Protection

After testing, verify that application source/configuration and fixture-owned Project Context were not changed unless a change was explicitly part of an approved disposable test scenario.

Expected: the prepared `cr-printing-next` fixture remains clean and unchanged for the current onboarding test.

## 4. Current Runtime Blocker Test Case

The fixture currently exposes a known environment-sensitive scenario:

```text
pnpm install
  -> better-sqlite3 native install
  -> node-gyp
  -> Python unavailable in execution environment
```

Expected classification: `BLOCKED`.

This test case proves that the framework distinguishes an environment/toolchain blocker from a project failure. `BLOCKED` MUST NOT be downgraded or reported as `FAIL` merely because the command returns a non-zero status during environment setup.

## 5. Acceptance Matrix

| Area | Acceptance |
|---|---|
| Discovery | repository/context inputs identified |
| Evidence | source/config has priority; Git evidence excluded |
| Context | canonical domains assessed/reconstructed |
| Unknowns | insufficient evidence remains `unknown` |
| Decisions | explicit user decisions remain authoritative |
| Approval | no unapproved change is applied |
| Static validation | structure/version/provenance/traceability checks pass |
| Runtime PASS | only actual successful execution is `PASS` |
| Runtime FAIL | only actual project/runtime defect is `FAIL` |
| Runtime BLOCKED | environment/tooling blocker is `BLOCKED` |
| Runtime NOT_RUN | deferred/unattempted checks are `NOT_RUN` |
| Fixture protection | application fixture remains unchanged |

## 6. Test Result Record

A completed run SHOULD record:

- test ID;
- fixture path/identifier;
- Framework/Blueprint/Standard versions;
- evidence sources and limitations;
- Project Context assessment/reconstruction result;
- proposal/approval result;
- static validation result;
- runtime checks and their four-state statuses;
- fixture protection result;
- unresolved findings;
- final overall status.

The overall test MUST NOT be marked fully passed when required validation remains `BLOCKED` or `NOT_RUN`; the limitation must remain explicit.

## 7. Runtime Architecture Boundary

This test validates the AI execution model. The target project does not require a separate Automated Bootstrap Runner or Framework Runtime Runner. AI performs the operational steps directly according to the authoritative procedures and approval/state rules. Any executable runner used in a test is test tooling only and is not a target-project runtime component.

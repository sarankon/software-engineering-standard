# Framework Migration Simulation Test Procedure v1.0.0

## 1. Purpose

Define a deterministic test procedure for proving that Framework Update / Migration behavior is safe before a Framework version is released. This procedure exercises the migration workflow against a disposable fixture and does not modify real application source code.

The simulation validates:

- version detection;
- Change Item classification;
- explicit approval gating;
- deterministic approved transformations;
- idempotent rerun;
- resume from partial migration;
- validation and completion;
- preservation of application source/configuration.

The synthetic `1.0.0 → 1.1.0` transition used by the current fixture is a test target only. It does not declare Framework `1.1.0` released.

## 2. Test principle

The simulation must prove behavior, not merely inspect documentation.

Use a disposable copy of `test-fixtures/framework-migration`. Never execute migration transformations directly against the framework repository or a user's real project during this test.

The simulation must be deterministic: the same fixture, target version, and approval decisions produce the same migration plan and resulting project state.

## 3. Inputs

Required inputs:

1. `test-fixtures/framework-migration/fixture.yaml`
2. `schemas/framework-update/README.md`
3. `ai_development/migration/framework-update-procedure.md`
4. applicable version-specific migration guide under `migrations/framework/`
5. a disposable project copy containing the minimum project-owned framework metadata needed by the fixture.

The simulation may inspect current files and configuration. It MUST NOT use Git history, commit messages, diffs, branches, tags, or blame as evidence.

## 4. Test stages

### Stage A — Detect

Read the fixture's current Framework version and target Framework version.

Expected result:

- current version = `1.0.0`;
- target version = `1.1.0`;
- target is marked synthetic/test-only;
- no application source files are selected for migration.

Failure conditions:

- version cannot be established without guessing;
- target is treated as released when the fixture says test-only;
- application source is included in Framework migration scope.

### Stage B — Analyze

Generate Change Items from the fixture and applicable migration guide.

Expected classifications:

| Change Item | Classification | Expected action |
|---|---|---|
| MC-001 | compatible | adopt |
| MC-002 | migration-required | migrate |
| MC-003 | compatible | adopt |
| MC-004 | compatible | propose-development-work |

Every Change Item must contain evidence, impact, approval requirement, and a proposal.

### Stage C — Approval Gate

Run the simulation once with all Change Items unapproved.

Expected result:

- no migration transformation is applied;
- migration remains `proposed`;
- approved flags remain false;
- source/configuration remains byte-for-byte unchanged.

Then run an approved scenario with only the selected deterministic Change Items approved.

The simulator MUST demonstrate that an unapproved Change Item is not executed even when another Change Item is approved.

### Stage D — Execute

Apply only approved migration actions in the documented execution order.

For the synthetic scenario, framework-level transformations may update project-owned metadata and schema-shaped artifacts required by the migration guide. `propose-development-work` must remain a proposal and MUST NOT edit application source, database, API, UI, or infrastructure.

Record the outcome for every Change Item.

### Stage E — Validate

Validation must check:

1. migration status is consistent with Change Item results;
2. exact target versions are recorded where adoption/migration completed;
3. schema/structure is valid;
4. references remain valid;
5. Project Context remains consistent;
6. relevant Standard Profile/Assessment references remain consistent;
7. no unexpected application source/configuration change occurred;
8. the Migration ID and Change Item IDs remain traceable.

A migration cannot be marked `completed` unless all required approved work is complete and validation passes.

## 5. Idempotence test

After a successful migration, execute the same migration request again using the same Migration ID.

Expected result:

- completed Change Items are recognized;
- no duplicate records are created;
- no transformation is applied twice;
- final project state is unchanged by the second run;
- migration remains `completed`.

The test should compare relevant project-owned files/records before and after the second run.

## 6. Resume test

Create a disposable scenario in which:

- the Migration exists;
- some approved Change Items are `completed`;
- at least one approved Change Item remains unfinished;
- the Migration is `partial` or `blocked`.

Resume using the same Migration ID.

Expected result:

- completed Change Items are skipped;
- unfinished approved Change Items continue;
- rejected/deferred/unapproved Change Items remain untouched;
- the Migration reaches `completed` only if validation passes.

A resumed run must not restart already-completed transformations or create a second Migration ID for the same operation.

## 7. Negative approval test

Attempt to execute an unapproved `migration-required` or `breaking` Change Item.

Expected result: execution is refused or the Change Item remains pending; the simulator must not silently infer approval from a target version, previous proposal, or conversation context.

## 8. Source protection test

Capture a manifest/checksum of application source and relevant application configuration before migration.

After every simulation stage, compare the manifest.

Expected result: Framework migration produces no application source/configuration changes. If application development work is implied, it is represented only as a proposal/reference.

## 9. Determinism test

Run the analysis and planning stages twice from equivalent disposable fixture states with the same target version.

Expected result:

- same Change Item IDs;
- same classifications;
- same required actions;
- equivalent evidence and plan structure;
- no duplicate Migration records.

Any non-deterministic result must be treated as a test failure until explained by an explicit timestamp or generated execution metadata that is not part of semantic migration state.

## 10. Acceptance matrix

| Test | Pass condition |
|---|---|
| Version detection | `1.0.0 → 1.1.0` detected and target remains test-only |
| Classification | MC-001..MC-004 match fixture expectations |
| Approval gate | unapproved changes are never executed |
| Selective approval | only explicitly approved Change Items execute |
| Deterministic execution | approved transformations produce expected state |
| Validation | all required checks pass before `completed` |
| Idempotence | second run produces no additional semantic changes |
| Resume | completed work is skipped and unfinished approved work continues |
| Negative approval | unapproved migration is refused/preserved |
| Source protection | application source/configuration remains unchanged |
| Determinism | equivalent inputs produce equivalent plans |

## 11. Test result record

A simulation run should record:

- simulation ID;
- fixture identifier/version;
- current and target Framework versions;
- Migration ID;
- approval scenario;
- Change Item results;
- validation results;
- idempotence result;
- resume result;
- source protection result;
- final status;
- unresolved failures.

Recommended project/repository location for test records:

```text
test-fixtures/framework-migration/results/<simulation-id>.yaml
```

Test results are evidence for Framework development/release readiness. They do not by themselves release a Framework version.

## 12. Release boundary

The simulation must pass before a candidate Framework version is treated as releasable. Passing this procedure does not itself publish or adopt the target version.

For the current synthetic scenario, the expected outcome is a successful simulation of migration behavior while `1.1.0` remains explicitly unreleased.

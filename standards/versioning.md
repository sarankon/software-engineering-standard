# Software Engineering Standard Versioning

**Version:** 1.0.0

## Purpose

This document defines how Framework, Blueprint, Schema, Procedure, and individual Software Standard versions are identified and recorded by projects.

## Version Layers

The framework has independently identifiable version layers:

1. **Framework Version** — overall Software Engineering Standard release.
2. **Blueprint Version** — structure and semantics of a Project Context Blueprint.
3. **Schema Version** — normative data/schema definition used by a Blueprint.
4. **Procedure Version** — onboarding, installation, migration, or operational procedure.
5. **Standard Version** — an individual normative Software Standard or rule collection.

Each applicable layer SHOULD expose an explicit semantic version using `MAJOR.MINOR.PATCH`.

## Project Recording

A Project Context that follows the framework SHOULD record the exact versions it was built or validated against:

```yaml
framework:
  name: Software Engineering Standard
  version: 1.0.0
blueprint:
  name: Project Context Blueprint
  version: 1.0.0
schemas:
  project-context:
    version: 1.0.0
procedures:
  onboarding:
    version: 1.0.0
standards:
  - id: SES-DB
    name: Database Standard
    version: 0.1.0
```

## Change Rules

- A version MUST NOT be inferred from a filename alone.
- A project MUST distinguish Framework version from Blueprint and Standard versions.
- A breaking semantic change SHOULD increment MAJOR.
- A backward-compatible structural or normative addition SHOULD increment MINOR.
- A clarification with no semantic change SHOULD increment PATCH.
- During pre-production design/testing, project-specific policy may freeze version identifiers until real-world adoption is complete; such a policy MUST be documented.
- A released version MUST remain reproducible: the project must be able to identify the exact framework artifacts used.

## Migration

When a Blueprint or Standard changes, migration guidance SHOULD identify:

- affected version range;
- whether migration is automatic, assisted, or manual;
- records that may change;
- compatibility expectations;
- validation required after migration.

## Runtime Validation Status

Runtime validation MUST use one of four statuses: `PASS`, `FAIL`, `BLOCKED`, or `NOT_RUN`.

- `PASS`: the target runtime check was actually executed in a suitable environment and passed.
- `FAIL`: the target runtime check was actually executed and failed due to the project/framework under test.
- `BLOCKED`: execution was attempted or required, but could not be completed because of environment, permission, dependency, tooling, or execution constraints outside the test subject.
- `NOT_RUN`: runtime execution has not been attempted or was intentionally deferred.

`BLOCKED` MUST NOT be interpreted as `FAIL`. The test report MUST record the blocked reason and, when applicable, the exact command/check that could not be completed. Runtime status MUST NOT be inferred from static inspection alone.

## Runtime Execution Model

Framework runtime operations are performed by AI according to the applicable procedures and approval/state rules. The Framework does not require a separate Automated Bootstrap Runner or Framework Runtime Runner. Any executable runner used to test Framework procedures is test tooling only and is not a target-project runtime component.

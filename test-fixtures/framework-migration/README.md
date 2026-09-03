# Framework Migration Simulation Fixture

## Purpose

Disposable acceptance fixture for testing the Framework Update / Migration workflow without changing application source code.

## Current scenario

- Framework: `1.0.0` → synthetic target `1.1.0`
- Target `1.1.0` is **not released**.
- Application source/configuration changes are prohibited.

## Automated simulation

Run from the repository root:

```text
node test-fixtures/framework-migration/run-simulation.mjs
```

The simulation is dependency-free and uses only Node.js built-ins. It validates version detection, Change Item classification, approval gating, selective approval, deterministic execution, validation state, idempotence, resume, negative approval, determinism, and application-source protection.

Expected result: `result: PASS` with all checks marked `PASS`.

## Acceptance checks

1. Current Framework version is detected.
2. Target Framework version is detected and remains explicitly test-only.
3. Change Items are classified as expected.
4. Migration Plan requires explicit approval.
5. Unapproved changes are not executed.
6. Approved deterministic transformations complete.
7. Rerunning a completed migration is idempotent.
8. A partial migration can resume without repeating completed work.
9. Validation is required before completion.
10. Application source/configuration is unchanged.
11. Equivalent inputs produce equivalent plans.
12. Simulation results are recorded without implying Framework release.

## Test result

The current baseline result is recorded at:

```text
test-fixtures/framework-migration/results/MIG-SIM-2026-0001.yaml
```

## Boundaries

This fixture tests migration orchestration and safety properties. It does not perform a real Framework `1.0.0 → 1.1.0` release, and it does not authorize or modify application source code, database, API, UI, or infrastructure.

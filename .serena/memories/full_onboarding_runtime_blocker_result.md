## Full Bootstrap Runtime Diagnosis

Date: 2026-09-03

During the Full Bootstrap/Onboarding Test of `test-fixtures/existing-repository/cr-printing-next`, runtime execution was investigated after the initial runtime result was ambiguous.

Findings:
- The fixture repository remained clean and unchanged.
- Static inspection passed.
- Runtime dependency setup is blocked by the environment: `better-sqlite3` invokes `node-gyp`, which requires Python, and the execution environment reports `Could not find any Python installation to use`.
- Therefore `pnpm install` cannot complete successfully in the current environment.
- `pnpm lint` and `pnpm build` cannot be treated as application/source-code failures while the dependency environment is incomplete.
- Under the Runtime Validation Policy, these checks must be reported as `BLOCKED`, not `FAIL`.

Test interpretation:
`Static inspection = PASS`; `Runtime = BLOCKED (environment dependency blocker)`; `Fixture integrity = PASS`.

Framework test implication:
This case should be represented as an explicit Full Bootstrap/Onboarding test case. Agents must distinguish project/runtime failures from environment blockers and report `BLOCKED` with the concrete blocker and affected command(s). `BLOCKED` must not be converted to `FAIL` merely because a command exits non-zero during environment setup.

Next recommended work: formalize this scenario in the Full Bootstrap/Onboarding Test Procedure, without modifying the fixture source code.
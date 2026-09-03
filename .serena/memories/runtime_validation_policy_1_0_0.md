## Runtime Validation Policy Update

Date: 2026-09-03

The framework Runtime Validation policy was clarified before continuing the `cr-printing-next` onboarding/full bootstrap test.

Runtime validation now has exactly four statuses:
- `PASS`: runtime check was actually executed in a suitable environment and passed.
- `FAIL`: runtime check was actually executed and failed due to the project/framework under test.
- `BLOCKED`: execution was attempted or required but could not complete because of environment, permission, dependency, tooling, or other execution constraints outside the test subject.
- `NOT_RUN`: runtime execution has not been attempted or was intentionally deferred.

`BLOCKED` must not be interpreted as `FAIL`. A blocked result must record the reason and, when applicable, the exact command/check that could not be completed. Runtime status must not be inferred from static inspection alone.

Current test implication for `test-fixtures/existing-repository/cr-printing-next`: static inspection and fixture integrity passed; runtime execution through the available Serena environment was blocked, so it must be reported as `BLOCKED`, not `FAIL`.

Next step: apply this policy consistently to the Full Bootstrap/Onboarding Test while leaving the fixture source code unchanged.
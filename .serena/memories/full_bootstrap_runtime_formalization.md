## Full Bootstrap Runtime Formalization

Date: 2026-09-03

Formalized Runtime Validation in the existing-repository onboarding flow.

Changes:
- `blueprints/project_context/ONBOARDING.md` now has a dedicated Runtime Validation section with four required statuses: `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`.
- Runtime validation is explicitly separated from static validation.
- Environment/dependency setup errors must be diagnosed before classifying them as project failures; native dependency toolchain gaps are `BLOCKED` when outside the test subject.
- Onboarding completion records now retain runtime results and `BLOCKED`/`NOT_RUN` limitations.
- Added `ai_development/onboarding/full-bootstrap-test-procedure.md` version 1.0.0 to formalize the Full Bootstrap/Existing Repository Onboarding test, including the current `cr-printing-next` runtime blocker case.

Current fixture result remains: static validation PASS, runtime BLOCKED because `better-sqlite3`/`node-gyp` requires Python unavailable in the execution environment, fixture integrity PASS.

Commit: `f7ab169` (`test: formalize onboarding runtime validation`).

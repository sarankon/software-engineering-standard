# Full Test v1.2 — Execution Record

## Scope
Run full onboarding validation against `test-fixtures/existing-repository/cr-printing-next` after completing the v1.1 schema gaps.

## Preconditions
- Framework working tree was clean after commit `b9f5af7` before the test.
- Fixture must remain unmodified.
- Git history/commit messages/diffs/branches/tags/blame are excluded from onboarding evidence.

## Structural validation already completed
Passed:
1. Framework discovery.
2. Bootstrap prompt discovery.
3. Blueprint/Schema/Procedure version metadata.
4. Canonical Project Context domains.
5. Common `record_state` presence/semantics.
6. `record_state` vs `work_state` separation.
7. Change Set schema presence and required fields.
8. Work Transition schema presence and required fields.
9. `next` and `backlog` are distinct states.
10. Git-history exclusion policy.
11. Fixture source/configuration evidence presence.
12. Fixture unchanged during structural testing.
13. No legacy top-level `status:` fields in canonical Blueprint.
14. Canonical domain/work files present.

## Important test interpretation
A broad textual scan of the fixture found many strings containing `status:` and `commit`; this is not evidence that Git history was consumed. The onboarding policy forbids Git history as evidence, while source/configuration may legitimately contain status/commit-related code or dependencies.

## Next full-test phases
- Simulate onboarding from source/config/docs without reading Git history.
- Produce/review a reconstructed Project Context against the fixture.
- Verify fact/decision/proposal/unknown classification and evidence references.
- Verify work-state reconstruction and transition records without inventing historical transitions.
- Verify cross-domain Change Set correlation.
- Verify AI handoff and version metadata.
- Run fixture-integrity check before/after.
- Run framework repository tests/lint/validation available in the project.
- Record failures and remediation separately; do not silently alter the fixture.

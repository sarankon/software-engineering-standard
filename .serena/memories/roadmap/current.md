# Current Roadmap

## Status
- Framework architecture: AI is the direct execution engine; no separate target-project Automated Bootstrap Runner / Framework Runtime Runner.
- User is the decision/authorization boundary; AI proposes/explains and waits for explicit approval before material changes.
- Framework-owned components default to 1.0.0 until explicit user decision; Software Standards remain 0.1.0 pre-production.
- Existing-project fixture: `test-fixtures/existing-repository/cr-printing-next`.
- Runtime dependency/lint/build checks are currently BLOCKED by native `better-sqlite3`/`node-gyp` Python environment failure; BLOCKED is not FAIL.

## Next work
1. **Final Framework Consistency Review — COMPLETE / PASS**
   - Reviewed core repository docs, schemas, procedures, standards, versioning, evidence/provenance, approval gates, and state transitions.
   - Confirmed no actionable conflict with the AI-as-execution-engine architecture.
   - Confirmed material project changes require explicit user approval.
   - Confirmed runner references are intentional (architecture prohibition/test-only simulation) and do not require changes.
   - No repository changes were required for this step; `git diff --check` was clean.
   - Step 1 is closed. Do not reopen unless new evidence appears.

2. **Framework Contract Review**
   - Verify one coherent contract for a new/existing/update project flow.
   - Verify boundaries among Framework, Project Context, Software Standards, Blueprints/Schemas, and Procedures.
   - Verify an independent AI agent can understand and continue work from Repository artifacts without relying on external memory.

3. **Full Bootstrap / Onboarding Validation**
   - Continue non-runtime checks against the existing-project fixture.
   - Validate Project Context reconstruction/completeness, evidence/provenance, confirmed/proposed/unknown handling, proposal/approval boundary, validation/traceability, and final result recording.
   - Preserve fixture integrity; use a disposable copy for generated-context/apply simulation when needed.
   - Runtime checks remain PASS/FAIL/BLOCKED/NOT_RUN; do not convert environment BLOCKED into project FAIL.

4. **Pilot Project**
   - After steps 1-3 are satisfactory, apply the Framework to one real project end-to-end: discover → inspect → reconstruct context → assess → propose → explicit user approval → apply → validate → record.
   - Use the Pilot to identify real-world gaps before formalizing/reviewing Standards further.

## Execution rule
- At each major step: inspect evidence → summarize findings → propose changes → wait for explicit user decision → apply approved changes → validate → record.
- Do not independently change settled architecture, version policy, or user decisions.

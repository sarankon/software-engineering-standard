# Roadmap Status

## Completed
1. Final Framework Consistency Review — COMPLETE / PASS; commit `ea776f9`.
2. Framework Contract Review — COMPLETE / PASS on 2026-09-03; commit `16d2fba`.
3. Full Bootstrap / Existing Repository Onboarding Validation — COMPLETE WITH LIMITATION / PARTIAL-BLOCKED on 2026-09-03; fixture discovery/evidence/decision boundary/static validation/protection passed; runtime validation `BLOCKED`, not `FAIL`, due missing Python for native `better-sqlite3`/`node-gyp`. Commit `9095e7e`.

## Current Architecture Follow-up
4. Formalize Project AI Entry/Installation Architecture — NEXT. User approved: root `AGENTS.md` is the single project AI entry point; `.project-context/` is the project-owned home; `.project-context/AI_INSTRUCTIONS.md` is the Framework-installed instruction entry; `.project-context/project-standard/` contains installed Framework artifacts (`blueprints/`, `procedures/`, `standards/`, `manifest.yaml`); Project Context domains remain directly under `.project-context/`. Do not create nested `.project-context/project-standard/project-context/`. Existing `AGENTS.md` content must be preserved; integration is additive and traceable. Future vendor-specific instruction files should point to `AGENTS.md` where supported.
5. Update Bootstrap / Installation Contract — define deterministic creation/integration of `AGENTS.md`, installation layout, AI instruction entry, manifest/version recording, and non-destructive behavior.
6. Update Framework Update/Migration Contract — define how installed Project Standard artifacts and the `AGENTS.md` navigation contract are upgraded without overwriting project-owned instructions; preserve traceability, approval, idempotence, and resumability.
7. Update Existing Repository Onboarding — reconcile old `.project-context` and existing `AGENTS.md` with the new canonical installation layout; preserve confirmed decisions and current implementation evidence.
8. Add/Update Tests — cover no `AGENTS.md`, existing `AGENTS.md`, installed Framework, future update, and existing-project migration scenarios; validate AI can follow the entry chain in a fresh session.
9. Re-run validation and record result, then commit the completed architecture/contract/test changes.

## Later
10. Pilot Project — apply the Framework end-to-end to one real project after the installation/entry-point contract is validated. Runtime blocker remains an explicit validation limitation and must not be treated as a project failure.

## Fixed Decisions
- AI is the direct Framework execution engine; no separate target-project Automated Bootstrap Runner / Framework Runtime Runner.
- User is the decision/authorization boundary; material changes require explicit approval.
- Framework-owned components remain version 1.0.0 until explicit user-approved change.
- Software Standards remain 0.1.0 pre-production until serious review/real-project adoption.
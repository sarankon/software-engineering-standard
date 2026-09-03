# Roadmap Status

## Completed
1. Final Framework Consistency Review — COMPLETE / PASS; commit `ea776f9`.
2. Framework Contract Review — COMPLETE / PASS on 2026-09-03; commit `16d2fba`.
3. Full Bootstrap / Existing Repository Onboarding Validation — COMPLETE WITH LIMITATION / PARTIAL-BLOCKED on 2026-09-03; fixture discovery/evidence/decision boundary/static validation/protection passed; runtime validation `BLOCKED`, not `FAIL`, due missing Python for native `better-sqlite3`/`node-gyp`. Commit `9095e7e`.

## Current Architecture Follow-up
4. Formalize Project AI Entry/Installation Architecture — FORMALIZED / IN PROGRESS. User approved root `AGENTS.md` as the single project AI entry point; `.project-context/` as the project-owned home; `.project-context/AI_INSTRUCTIONS.md` as the Framework-installed instruction entry; `.project-context/project-standard/` for installed Framework artifacts (`blueprints/`, `procedures/`, `standards/`, `manifest.yaml`); Project Context domains remain directly under `.project-context/`. Do not create nested `.project-context/project-standard/project-context/`. Existing `AGENTS.md` content must be preserved; integration is additive and traceable. Architecture is documented in `architecture/ai-entry-installation.md`; installation procedure has been updated accordingly. Changes are not yet committed.
5. Consistency Review — verify Bootstrap, Installation, Update/Migration, Existing Repository Onboarding, Blueprints, and related docs agree with the new entry/install contract.
6. Resolve Conflicts — apply only corrections within the already-approved architecture; escalate genuinely new material decisions to the user.
7. Validation — test no AGENTS.md, existing AGENTS.md, installed Framework, old Framework update/migration, and existing Project Context scenarios.
8. Commit — commit formalization + consistency corrections and record validation outcome.
9. Pilot Project — apply Framework end-to-end to one real old project after installation/entry-point validation.

## Fixed Decisions
- AI is the direct Framework execution engine; no separate target-project Automated Bootstrap Runner / Framework Runtime Runner.
- User is the decision/authorization boundary; material changes require explicit approval.
- Framework-owned components remain version 1.0.0 until explicit user-approved change.
- Software Standards remain 0.1.0 pre-production until serious review/real-project adoption.
- Validation statuses include `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`, `UNKNOWN`; `BLOCKED != FAIL`.

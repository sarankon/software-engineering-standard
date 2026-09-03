# Current Project State

## Current Position
- Framework consistency review: complete / PASS. Commit `ea776f9`.
- Framework contract review: complete / PASS. Commit `16d2fba`.
- Full Bootstrap / Existing Repository Onboarding validation: complete with limitation / PARTIAL-BLOCKED. Commit `9095e7e`; runtime blocker remains native `better-sqlite3` / `node-gyp` requiring Python; classify as `BLOCKED`, not `FAIL`.
- Framework architecture remains AI-as-execution-engine; no target-project runtime runner.
- Approved Project AI Entry/Installation architecture has now been formally documented in `architecture/ai-entry-installation.md` and reflected in `ai_development/bootstrap/installation-procedure.md`; these edits are currently uncommitted and are the subject of the next consistency review.

## Latest User Decisions
- For current Framework usage, assume the AI agent can access GitHub, read the Framework repository, and download/clone it. Do not add fallback mechanisms for access limitations now; adapt only if a real agent limitation is reported.
- User calls the overall system `Framework` in conversation.
- Canonical bootstrap prompt is `ai_development/bootstrap-prompt.md`; it contains the Framework repository reference and discovery instructions. User copies it from the Framework repo and pastes it into the AI agent in the target project.
- User approved the architecture direction: use `.project-context/` as the project-owned home for Project Context and installed Project Standard artifacts. Use a single project AI entry point at root `AGENTS.md`.
- Approved navigation chain: `AGENTS.md` → `.project-context/AI_INSTRUCTIONS.md` → `.project-context/project-standard/` for installed Framework artifacts, with project-specific context domains alongside it under `.project-context/`.
- Do not use `.project-context/project-standard/project-context/`; keep Project Context domains directly under `.project-context/`.
- Future vendor-specific instruction files should point back to `AGENTS.md` where possible instead of duplicating Framework instructions.
- Existing `AGENTS.md` content must not be overwritten; Framework integration should be additive and traceable.

## Intended Pilot Workflow
1. Clone one old project as a disposable/controlled Pilot.
2. Copy `ai_development/bootstrap-prompt.md` from Framework and paste it into the AI agent working in the Pilot.
3. AI accesses the Framework repository, reads `AI_BOOTSTRAP.md`, discovers applicable Procedures, Blueprints, Software Standards, and versions.
4. AI inspects the existing project and reconstructs/updates Project Context according to Existing Project Onboarding.
5. AI proposes material changes and waits for explicit user approval.
6. AI applies only approved changes, validates, and records results.

## Current Next Work
1. Review all Framework documents that reference installation paths, Project Context locations, AGENTS.md, bootstrap entry behavior, and Framework update/migration so they agree with the newly formalized architecture.
2. Resolve documentation/contract conflicts within the already-approved architecture; ask the user only if a genuinely new material architecture decision is required.
3. Validate installation scenarios: no AGENTS.md, existing project-owned AGENTS.md, old Framework installation, Framework update/migration, and existing Project Context.
4. Commit the formalization and consistency corrections.
5. Re-run validation and record the result.
6. Pilot on one real old project.

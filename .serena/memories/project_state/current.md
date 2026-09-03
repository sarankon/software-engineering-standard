# Current Project State

## Current Position
- Framework consistency review: complete / PASS.
- Framework contract review: complete / PASS.
- Full Bootstrap / Existing Repository Onboarding validation: complete with limitation / PARTIAL-BLOCKED.
- Runtime blocker remains the known native `better-sqlite3` / `node-gyp` / unavailable Python environment issue; classify as `BLOCKED`, not `FAIL`.
- Framework architecture remains AI-as-execution-engine; no target-project runtime runner.

## Latest User Decision
- For current Framework usage, assume the AI agent can access GitHub, read the Framework repository, and download/clone it. Do not add fallback mechanisms for access limitations now; adapt only if a real agent limitation is reported.
- User will call the overall system simply `Framework` in conversation.
- The canonical bootstrap prompt is already in `ai_development/bootstrap-prompt.md`; it contains the Framework repository reference and discovery instructions. User workflow is to copy that prompt from the Framework repo and paste it into the AI agent in the target project.

## Intended Pilot Workflow
1. Clone one old project as a disposable/controlled Pilot.
2. Copy `ai_development/bootstrap-prompt.md` from Framework and paste it into the AI agent working in the Pilot.
3. AI accesses the Framework repository, reads `AI_BOOTSTRAP.md`, discovers applicable Procedures, Blueprints, Software Standards, and versions.
4. AI inspects the existing project and reconstructs/updates Project Context according to the Existing Project Onboarding procedure.
5. AI proposes material changes and waits for explicit user approval.
6. AI applies only approved changes, validates, and records results.

Do not treat the earlier assistant-generated abbreviated prompt as the canonical prompt; the repository prompt is authoritative for this workflow.

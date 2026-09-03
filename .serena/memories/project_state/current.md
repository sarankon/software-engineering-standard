# Current Project State

- Framework: `software-engineering-standard`, branch `main`.
- Framework baseline: 1.0.0; Project Context Blueprint: 1.0.0; Software Standards: 0.1.0 pre-production.
- Architecture: AI is the direct Framework execution engine; no separate target-project runtime/bootstrap runner. User is the authorization boundary; material changes require explicit approval.
- Project AI entry: root `AGENTS.md` → `.project-context/AI_INSTRUCTIONS.md` → installed Framework artifacts under `.project-context/project-standard/`; project-specific Context domains remain directly under `.project-context/`.
- Existing `AGENTS.md` must be preserved; Framework integration is additive and traceable.
- Existing-repository onboarding: current implementation uses `ai_development/bootstrap-prompt.md` and stable discovery entry `AI_BOOTSTRAP.md`.
- Evidence priority: current source/configuration > explicit user decisions > project docs/context > AI inference. Git history, commits, diffs, branches, tags, and blame are not onboarding evidence.
- Project Context records distinguish `confirmed | proposed | unknown | deprecated`; work items separately use `completed | in-progress | next | backlog | blocked`.
- Runtime validation statuses: `PASS | FAIL | BLOCKED | NOT_RUN`; `BLOCKED != FAIL` and runtime status must be based on actual execution.
- Final Full Bootstrap / Existing Repository Onboarding validation completed 2026-09-03: PASS WITH WARNING. Install, lint, TypeScript/build, static/context/evidence/approval/fixture-protection checks passed; lint had one non-blocking warning. The final fixture scenario intentionally used `allowBuilds.better-sqlite3: false`.
- Current mode: begin real Pilot usage; do not over-engineer before evidence from actual use. Update Framework when Pilot reveals a real defect, missing contract, recurring ambiguity, or new requirement.
- Preserve the existing validation result as repository history; future work should focus on Pilot findings rather than redoing completed validation without a reason.
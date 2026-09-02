# Bootstrap Prompt Decisions

- Copy-ready user prompt: `ai_development/bootstrap-prompt.md`.
- Default framework source: https://github.com/sarankon/software-engineering-standard.git
- `AI_BOOTSTRAP.md` is the stable root AI entry point. The prompt tells AI to read it first, then discover applicable AI Development instructions, Blueprints, Standards, Procedures, and versions.
- Users should not need to know internal framework filenames beyond the root entry point.
- `.serena/` is framework-development workspace and is not distributed downstream.
- Bootstrap preserves facts/decisions/inferences/unknown, provenance/evidence, decision protection, current-vs-historical reconciliation, explicit versions, and validation.
- After bootstrap, AI uses Project Context and AI Handoff to continue work; user decisions are requested when needed.
- Root README documents the bootstrap flow and current Project Context model.
- Keep framework identifiers at 1.0.0 until real-world adoption; test before version increments.
- Next: end-to-end bootstrap/onboarding test against `test-fixtures/existing-repository/cr-printing-next` without modifying fixture source.

## New Project Installation Procedure

The End-to-End Bootstrap test identified a missing framework-level new-project installation procedure. Added `ai_development/bootstrap/installation-procedure.md` version 1.0.0 and bootstrap README. The procedure defines discovery, context creation, evidence/provenance, version recording, validation, user-decision boundaries, source-code boundary, and separation from existing-repository onboarding.

The default physical Project Context location is `.project-context/`, while a documented project-specific location remains allowed. Framework `.serena/` is never distributable.

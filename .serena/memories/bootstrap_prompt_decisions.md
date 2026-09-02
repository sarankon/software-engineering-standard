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

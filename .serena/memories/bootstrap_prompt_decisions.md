# Bootstrap Prompt Decisions

- The framework must provide a copy-ready user prompt for installing Software Engineering Standard into another project.
- The intended user workflow is: open the framework repository, copy the prompt, paste it into the AI agent working in the target project, and let the AI discover the framework's authoritative instructions/procedures itself.
- The default framework source is the public repository: https://github.com/sarankon/software-engineering-standard.git
- The bootstrap prompt must instruct AI to read the framework repository, discover AI/Bootstrap/Installation instructions, inspect Blueprint/Standards/Procedures/versions, inspect the target project, create or reconstruct Project Context, preserve facts/decisions/inferences/unknown distinctions, record provenance/evidence, protect confirmed user decisions, validate, and then continue working unless user decisions are required.
- The prompt should not require users to know internal framework file names or detailed procedures.
- `ai_development/bootstrap-prompt.md` is the copy-ready artifact; `ai_development/README.md` explains how to use it.
- This is a user-facing bootstrap workflow, separate from the framework's internal `.serena/` workspace. `.serena/` is not distributed to downstream projects.
- Next design consideration: add a root `AI_BOOTSTRAP.md` as the framework repository's self-describing AI entry point, then test the end-to-end bootstrap workflow against an existing Git project such as `test-fixtures/existing-repository/cr-printing-next` without modifying the fixture source code.
- Version policy remains: keep framework identifiers at 1.0.0 until real-world adoption; test changes before any version increment.

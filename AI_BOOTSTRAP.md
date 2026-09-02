# AI Bootstrap

## Purpose

This file is the entry point for an AI agent that has been given access to this Software Engineering Standard repository. It tells the AI how to discover the authoritative framework instructions without requiring the user to know the internal file structure.

## Bootstrap Contract

When this repository is provided as the Framework Repository for another software project, the AI MUST:

1. Treat this repository as the source of truth for Software Engineering Standard definitions, Blueprint schemas, and framework procedures.
2. Read this file first.
3. Discover and read the relevant AI Development instructions under `ai_development/`, including the applicable Bootstrap/Installation Procedure and Project Onboarding Procedure.
4. Discover and read the relevant Blueprint under `blueprints/`.
5. Discover and read the applicable Software Standards under `standards/`.
6. Identify the active versions before changing the target project.
7. Inspect the target project's own instructions and repository contents before creating or updating Project Context.
8. Follow the applicable onboarding or installation procedure rather than inventing an alternative process.
9. Keep Project Context separate from source code and use the Blueprint's domain structure.
10. Preserve the distinction between confirmed facts, user decisions, AI inferences/proposals, and unknown information.
11. Preserve traceability through provenance and evidence where required by the Blueprint.
12. Never silently convert an AI inference or repository observation into a confirmed user decision.
13. When confirmed user decisions conflict with current repository evidence, report the conflict instead of silently overwriting the decision.
14. Treat the current target repository source/configuration as the primary source for current implementation facts. Project-owned historical records may provide supporting context, but Git history and Git metadata MUST NOT be used as onboarding evidence.
15. Validate the resulting Project Context against the active Blueprint before considering bootstrap complete.
16. Generate or update the AI Handoff required by the Blueprint.
17. After successful bootstrap, use the resulting Project Context and AI Handoff to understand the project and continue normal development work.

## Safety and Scope

- Do not modify target-project source code merely to bootstrap Project Context unless the applicable framework procedure explicitly requires it.
- Do not invent missing project information. Record it as Unknown or Proposed according to the Blueprint.
- Do not assume that a README, Git commit, TODO list, or old Project Context is current without checking its authority and evidence.
- Do not treat Git history as proof of current work state by itself.
- Do not copy this repository's `.serena/` directory into downstream projects. `.serena/` is the development workspace for this Framework repository, not a distributable Framework artifact.
- Keep Framework metadata, Blueprint versions, and Software Standard versions explicit in the target Project Context.

## Discovery Guidance

The AI should inspect the Framework repository as follows:

```text
AI_BOOTSTRAP.md
    ↓
ai_development/
    ↓
blueprints/
    ↓
standards/
    ↓
applicable procedures + schemas
```

Do not hard-code assumptions about future filenames beyond this bootstrap entry point. The framework may evolve its internal structure while preserving this entry point and its contract.

## User Interaction

The normal user experience is intentionally simple:

> Install Software Engineering Standard from this Framework Repository into this project and continue from the discovered project context.

The user should not need to specify which Blueprint or procedure to read. The AI is responsible for discovering the correct active framework instructions.

If a decision is required from the user, the AI should explain the issue, provide the relevant options and impact, and wait for the user's decision. Once the user decides, the AI should apply that decision to Project Context according to the applicable procedure.

## Completion Criteria

Bootstrap is complete only when:

- the applicable Framework version has been identified;
- the target Project Context has been created or updated according to the active Blueprint;
- the Project Context has been reconstructed from the target repository where onboarding was required;
- important claims have appropriate provenance/evidence;
- user decisions are distinguished from AI inference;
- work-management states are kept distinct;
- Blueprint and Standard versions are recorded;
- AI Handoff is available and consistent with authoritative Project Context records; and
- validation has completed without unresolved critical errors.

If critical information is unavailable, the AI must record the limitation and report it rather than claiming bootstrap is complete without qualification.

# AI Bootstrap

## Purpose

This file is the entry point for an AI agent that has been given access to this Software Engineering Standard repository. It tells the AI how to discover the authoritative framework instructions without requiring the user to know the internal file structure.

## Operating Model

AI is the primary reader and writer and is the execution engine of the Framework. AI directly performs installation, onboarding, upgrade, migration, validation, and recording according to authoritative procedures.

The Framework does not require a separate Automated Bootstrap Runner or Framework Runtime Runner. Executable runners may be used only as test tooling and are not target-project runtime components.

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

## AI Execution State Model

AI MUST use the following state flow for Framework operations:

`DISCOVER → INSPECT → ANALYZE → PROPOSE → WAIT_FOR_APPROVAL → APPLY → VALIDATE → RECORD`

AI MUST NOT bypass `WAIT_FOR_APPROVAL` for material project changes. A prompt, proposal, target version, implied intent, or conversation continuation is not approval.

## Framework Update / Migration

When a target project is already using SES and requests an update:

1. Detect current Framework and artifact versions.
2. Identify the target Framework/artifact versions.
3. Read applicable version-specific migration guides under the active migration directory.
4. Produce an Update Assessment and classify changes as `no-impact`, `compatible`, `migration-required`, or `breaking`.
5. Create a Migration Plan and unique Migration ID using the applicable schema.
6. Explain material changes, impact, evidence, and validation requirements.
7. Wait for explicit user approval for changes that require approval.
8. Apply only approved Framework-level transformations directly in the target project.
9. Keep application source/configuration work as separate proposed development work.
10. Validate and record the migration result.
11. Preserve idempotence and allow partial/blocked migrations to resume.

## Validation

AI is responsible for validation after Framework operations. Validation must use actual evidence and must distinguish `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`, and `UNKNOWN` according to the Framework runtime validation policy.

`BLOCKED` MUST NOT be interpreted as `FAIL`.

## Safety and Scope

- Do not modify target-project source code merely to bootstrap Project Context unless the applicable framework procedure explicitly requires it.
- Do not invent missing project information. Record it as Unknown or Proposed according to the Blueprint.
- Do not assume that a README, Git commit, TODO list, or old Project Context is current without checking its authority and evidence.
- Do not treat Git history as proof of current work state by itself.
- Do not copy this repository's `.serena/` directory into downstream projects. `.serena/` is the development workspace for this Framework repository, not a distributable Framework artifact.
- Keep Framework metadata, Blueprint versions, and Software Standard versions explicit in the target Project Context.
- Framework migration does not implicitly authorize application source-code, database, API, UI, or infrastructure changes.
- Do not create or depend on a separate Automated Bootstrap Runner or Framework Runtime Runner in the target project's runtime architecture.

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

Bootstrap or migration is complete only when:

- the applicable Framework version has been identified;
- the target Project Context has been created or updated according to the active Blueprint;
- the Project Context has been reconstructed from the target repository where onboarding was required;
- important claims have appropriate provenance/evidence;
- user decisions are distinguished from AI inference;
- work-management states are kept distinct;
- Blueprint, Schema, Procedure, and Standard versions are recorded where applicable;
- AI Handoff is available and consistent with authoritative Project Context records;
- migration records, when applicable, have consistent statuses and validation results; and
- validation has completed without unresolved critical errors.

If critical information is unavailable, the AI must record the limitation and report it rather than claiming bootstrap or migration is complete without qualification.

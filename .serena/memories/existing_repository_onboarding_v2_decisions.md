# Existing Repository Onboarding v2 — Decisions

## User-approved operating model
For an existing project, the old `.project-context` is disposable migration input; the new Blueprint is the canonical target.

Workflow: user removes old `.project-context` → prompts AI to initialize from the new Blueprint → AI reads source/config/docs/dependencies → reconstructs Project Context → project continues with the new Context. Later Blueprint/Standard changes are explicit version upgrades.

## Test fixture
`cr-printing-next` is the primary full onboarding test. It has Git history, source/database schema, existing `.project-context`, `CLAUDE.md`, `AGENTS.md`, existing standards/blueprints, and substantial history. Do not modify it during analysis.

## Evidence priority
- Current repository/source/configuration = strongest current implementation evidence.
- Explicit user decisions = authoritative decisions; conflicts must be surfaced.
- Project-owned documentation and existing `.project-context` = supporting migration/context evidence; potentially stale and must be reconciled against current implementation.
- AI inference = proposed/low-confidence unless confirmed.
- Git history, commit messages, diffs, branches, tags, and blame are explicitly excluded from onboarding evidence.

## Test objective
Validate reconstruction of project identity, technology, architecture, requirements, decisions, problems, completed/in-progress/next/backlog/blocked work, project rules, history, and AI handoff, with provenance and no false confirmation.

## Bootstrap design
The onboarding workflow has `ai_development/bootstrap-prompt.md` as the copy-ready user prompt and `AI_BOOTSTRAP.md` as the stable root AI discovery entry point. The prompt directs AI to discover authoritative framework instructions instead of requiring users to know internal filenames. Internal framework structure may evolve behind the stable bootstrap contract. Version metadata must be recorded in generated Project Context.

## Version policy
Before real-world adoption, Blueprint/Schema/Procedure/Evidence identifiers remain `1.0.0`. After real usage begins, changes must be implemented and tested before version increments.

## Current validation status
Onboarding v1.0/v1.1 identified gaps in Work Transition History, Cross-Domain Change Set, and explicit version layering. Those design gaps were addressed by adding normative `blueprints/project_context/change-set-schema.md` and `blueprints/project_context/work-transition-schema.md`, plus `standards/versioning.md`.

## Current schema decisions
- Common Project Context records use `record_state`: `confirmed | proposed | unknown | deprecated`.
- Work items use separate `work_state`: `completed | in-progress | next | backlog | blocked`.
- Work-state files carry both `record_state` and `work_state`.
- Change Sets use `change_set_state` in addition to `record_state`.
- Work Transition records use `from_state` and `to_state` in addition to `record_state`.
- `Next` is not synonymous with `Backlog`.

## Onboarding v1.2 test plan
1. Validate required framework discovery and version metadata.
2. Validate all Project Context domains and required common fields.
3. Validate separation of `record_state` and `work_state`.
4. Validate Change Set normative schema and cross-domain references.
5. Validate Work Transition normative schema and state semantics.
6. Validate version-layer metadata.
7. Validate evidence traceability and user-decision protection.
8. Run negative checks proving Git history/commit data is not used as onboarding evidence.
9. Do not modify the `cr-printing-next` fixture during the test.

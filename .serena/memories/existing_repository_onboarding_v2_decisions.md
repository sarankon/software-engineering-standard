# Existing Repository Onboarding v2 — Decisions

## User-approved operating model
For an existing project, the old `.project-context` is disposable migration input; the new Blueprint is the canonical target.

Workflow: user removes old `.project-context` → prompts AI to initialize from the new Blueprint → AI reads source/config/docs/dependencies/Git history → reconstructs Project Context → project continues with the new Context. Later Blueprint/Standard changes are explicit version upgrades.

## Test fixture
`cr-printing-next` is the primary full onboarding test. It has Git history, source/database schema, existing `.project-context`, `CLAUDE.md`, `AGENTS.md`, existing standards/blueprints, and substantial history. Do not modify it during analysis.

## Evidence priority
- Current repository/source/configuration = strongest current implementation evidence.
- Explicit user decisions = authoritative decisions; conflicts must be surfaced.
- Git history = historical evidence, not automatically current truth.
- Existing `.project-context` = useful but potentially stale input to reconciliation.
- AI inference = proposed/low-confidence unless confirmed.

## Test objective
Validate reconstruction of project identity, technology, architecture, requirements, decisions, problems, completed/in-progress/next/backlog/blocked work, project rules, history, and AI handoff, with provenance and no false confirmation.

## Bootstrap design
The onboarding workflow now has `ai_development/bootstrap-prompt.md` as the copy-ready user prompt and `AI_BOOTSTRAP.md` as the stable root AI discovery entry point. The prompt directs AI to discover authoritative framework instructions instead of requiring users to know internal filenames. Internal framework structure may evolve behind the stable bootstrap contract. Version metadata must be recorded in generated Project Context.

## Version policy
Before real-world adoption, Blueprint/Schema/Procedure/Evidence identifiers remain `1.0.0`. After real usage begins, changes must be implemented and tested before version increments.

## Current status
Repository discovery and formal onboarding/evidence validation for `cr-printing-next` PASS conceptually. No fixture changes. Remaining validation: full domain-by-domain generated Project Context output and the Work Transition History / Cross-Domain Change Set design gaps.

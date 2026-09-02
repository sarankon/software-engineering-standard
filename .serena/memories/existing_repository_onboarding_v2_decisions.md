# Existing Repository Onboarding v2 — Decisions

## User-approved operating model
For an existing project, the old `.project-context` is intentionally treated as disposable migration input, not something the new Blueprint must preserve as the physical structure.

The target workflow is:
1. Finish the new Project Context Blueprint and Software Standards in `software-engineering-standard`.
2. In an existing project, the user removes the old `.project-context` directory.
3. User prompts AI to initialize a new Project Context from the new Blueprint.
4. AI reads the repository (source/config/docs/dependencies/Git history as available) and reconstructs the project's knowledge into the new Project Context structure.
5. The project continues operating using the new Project Context.
6. When Blueprint or Standard versions change later, the user prompts AI to update the project's existing structure/content to the requested/latest version and continue working.

## Important consequence
We do NOT need to design the new Blueprint around one-to-one compatibility with the old `.project-context` folder layout. Compatibility means the AI can reconstruct the project's useful knowledge from the old repository/context during onboarding when that information is still available; the new physical structure is the canonical target.

The migration problem is therefore primarily **knowledge reconstruction + schema/version upgrade**, not preservation of legacy filenames/directories.

## Existing Repository Test: cr-printing-next
Use `cr-printing-next` as the primary full onboarding test case because it has:
- a real `.git` repository with recent history,
- source code and database schema,
- an existing `.project-context`,
- `CLAUDE.md` and `AGENTS.md`,
- existing standards/blueprints,
- substantial historical decisions/changelog.

Do not modify the fixture during analysis unless a later test explicitly requires it. The fixture is test input.

## Evidence priority for reconstruction
The target Project Context should distinguish evidence rather than blindly merge it:
- Current repository/source/configuration = strongest evidence for current implementation facts.
- Explicit user decisions = authoritative for project decisions, even if current code has not caught up; surface discrepancy instead of silently changing the decision.
- Git history = evidence for historical changes and evolution, not automatically current truth.
- Existing `.project-context` = valuable project knowledge and decision/history input, but may be stale and must be reconciled against current repository evidence.
- AI inference = proposed/low-confidence unless confirmed by evidence or user.

## Test objective
The next onboarding test should validate that the Blueprint can reconstruct:
- project identity
- technology
- architecture
- requirements
- decisions
- problems
- completed/in-progress/next/backlog/blocked work
- project-specific rules
- history
- AI handoff
while preserving provenance and avoiding false confirmation.

## Design implications discovered so far
- Old context migration does not require preserving legacy `.project-context` structure.
- Need a clear onboarding procedure/prompt eventually: initialize from Blueprint → inspect repo → inspect available legacy context if present → reconcile evidence → write new canonical Project Context → record provenance/version.
- Version metadata for the applied Blueprint/Standards should be recorded in the generated Project Context.
- Future Blueprint/Standard updates should be handled as explicit version upgrades, not ad-hoc edits.
- Version policy before real-world adoption: keep all Blueprint/Schema/Procedure/Evidence version identifiers at `1.0.0`. Do not increment versions during prototype design/testing. After real usage begins, changes must be implemented and tested first, then the version is incremented according to the established versioning policy.

## Current status
Repository discovery for `cr-printing-next`: PASS.
Deep reconstruction/reconciliation is the next validation step.
No changes have been made to `cr-printing-next` by the framework test so far.

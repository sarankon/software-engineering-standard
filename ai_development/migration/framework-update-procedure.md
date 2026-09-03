# Framework Update / Migration Procedure v1.0.0

## 1. Purpose

Define the deterministic workflow for AI to detect, assess, plan, execute, validate, and record Framework upgrades in an existing project.

**Flow:** `Detect → Analyze → Plan → Approve → Migrate → Validate → Record`

**Execution model:** AI is the execution engine. No separate Automated Bootstrap Runner or Framework Runtime Runner is required.

## 2. Scope

This procedure applies when an existing project changes the Framework, Project Context Blueprint, or applicable Software Standard version and project-owned artifacts may require update or migration.

It does not authorize unrelated application development work.

## 3. Inputs

AI must inspect:

1. Current Framework version recorded by the project.
2. Target Framework repository/version requested or discovered.
3. Current project source and configuration.
4. Current project-owned `.project-context`.
5. Applicable Blueprint and Software Standard versions.
6. Applicable version-specific migration guidance.

Current source/configuration is primary evidence for current implementation facts. Existing project-owned records are supporting evidence and user-confirmed decisions remain authoritative. Git history and Git metadata MUST NOT be used as onboarding or migration evidence.

## 4. Version Detection

AI must identify current and target versions before planning migration. If the target version cannot be determined reliably, AI must report the uncertainty and request clarification rather than guessing.

## 5. Detect and Classify Changes

AI must classify relevant changes, including:

- `documentation`: documentation-only change.
- `compatible`: change that can be applied without transforming existing project-owned data.
- `migration-required`: existing project-owned artifacts must be transformed.
- `breaking`: semantics or compatibility change requiring explicit user approval and migration planning.

Each change receives a stable Change Item ID such as `MC-001`.

## 6. Update Assessment

AI must assess:

- affected Framework artifacts;
- affected Project Context domains;
- affected Standards or profiles;
- required transformations;
- source/configuration impact;
- unresolved mappings or uncertainty;
- validation requirements;
- rollback considerations.

## 7. Migration Plan

The plan must separate Framework-level migration from application development work. If a Framework change implies source-code, database, API, UI, or infrastructure changes, record those as `propose-development-work` rather than applying them as part of the Framework migration.

For every material Change Item, AI must explain the proposed transformation, evidence, expected impact, and validation method.

## 8. Approval Gate

AI must wait for explicit user approval before applying changes that require approval. The user may approve all changes, approve selected Change Items, reject changes, defer changes, or request a revised plan.

AI must never interpret a proposal, conversation, or presence of a target version as approval.

## 9. Execute Approved Changes

After approval, AI executes approved changes directly in the target repository.

AI must:

1. Verify the current state has not unexpectedly changed.
2. Apply the smallest deterministic transformation.
3. Preserve existing knowledge and traceability.
4. Record the result against the Migration ID.
5. Do not duplicate completed work when rerunning.
6. Avoid blind overwrite.

No separate runtime Runner is required or expected.

## 10. Preserve and Handle Uncertainty

If a mapping cannot be established reliably, preserve the uncertainty using `unknown` or `proposed` record state. AI must not manufacture facts to make a migration pass.

Confirmed user decisions must not be silently downgraded or replaced. Conflicts must be reported.

## 11. Validation

After execution, validate:

- Framework artifact versions;
- schema and structural validity;
- Project Context domains;
- provenance and evidence;
- references and cross-links;
- work-state separation;
- AI Handoff consistency;
- migration result and changed artifacts;
- runtime checks where applicable.

Runtime statuses must be based on actual execution evidence. Use `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`, or `UNKNOWN` as defined by the Framework. `BLOCKED` must not be interpreted as `FAIL`.

## 12. Idempotence and Resume

AI must detect already-applied Change Items and avoid duplicating completed work. If execution stops partway through, AI must record completed and remaining Change Items and resume from the known state.

## 13. Rollback

Before material migration, AI should identify rollback/recovery options appropriate to the repository and change type. AI must not claim rollback capability that has not been verified.

## 14. Completion Record

AI must record:

- Migration ID;
- current and target versions;
- approved Change Items;
- applied changes;
- rejected/deferred changes;
- validation results;
- evidence and limitations;
- unresolved unknowns/proposals;
- completion state.

## 15. Version-Specific Guides

Version-specific migration guidance, when present, is authoritative for that transition and must be read before applying the corresponding migration.

## 16. Runtime Architecture Boundary

The Framework intentionally uses AI as its execution engine for installation, upgrade, migration, and validation. Executable runners may exist solely as test tooling for validating Framework procedures and are not target-project runtime components.

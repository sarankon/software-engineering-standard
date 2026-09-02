# Framework Update / Migration Procedure v1.0.0

## 1. Purpose

Provide a deterministic procedure for updating an existing project's installed Framework artifacts while preserving project-owned knowledge and keeping the user as the authorization boundary.

Framework Update is not file overwrite. It is a controlled process:

**Detect → Analyze → Plan → Approve → Migrate → Validate → Record**

## 2. Scope

This procedure applies when a project:

- updates to a newer Framework version;
- updates selected Framework artifacts such as Blueprint, Schema, Procedure, or Software Standard;
- migrates an existing project from an older Framework structure;
- resumes a previously partial or blocked migration.

It complements Existing Repository Onboarding. Onboarding reconstructs missing project knowledge; Migration transforms an already identified project state toward a target Framework state.

## 3. Inputs

AI must inspect:

1. Current project source and configuration.
2. Current project-owned `.project-context`.
3. Installed Framework version metadata, if present.
4. Project Standard Profile and relevant Standard Assessments.
5. Current target Framework Repository artifacts.
6. Applicable version-specific migration guides.
7. Existing migration records.

Current source/configuration is primary evidence for current implementation facts. Existing project-owned records are supporting evidence and user-confirmed decisions remain authoritative. Git history and Git metadata MUST NOT be used as onboarding or migration evidence.

## 4. Version detection

Identify versions independently for Framework, Blueprint, Schema, Procedure, Software Standard, and Project Context. If a version cannot be established reliably, record `unknown`; do not infer it from Git history or timestamps.

## 5. Detect and classify changes

Compare the current project state with the target Framework and classify every relevant change:

- `no-impact`: no project transformation is needed.
- `compatible`: backward-compatible change; adoption may require metadata update but no structural migration.
- `migration-required`: existing project-owned artifacts must be transformed.
- `breaking`: semantics or compatibility change requiring explicit user approval and migration planning.

Each change receives a stable Change Item ID such as `MC-001`.

## 6. Update Assessment

Before making changes, produce an Update Assessment containing:

- current and target versions;
- changed Framework artifacts and rules;
- classification for each change;
- impacted Project Context domains/records;
- affected Standard Profile and Assessments;
- required migrations;
- application source/configuration impact;
- risks and unresolved questions;
- evidence and confidence;
- recommended action.

Do not change the project during this stage.

## 7. Migration Plan

Create a project-owned Migration record using the Framework Update schema. Assign a unique Migration ID.

The plan must separate Framework-level migration from application development work. If a Framework change implies source-code, database, API, UI, or infrastructure changes, record those as `propose-development-work` rather than applying them as part of the Framework migration.

## 8. Approval gate

AI must wait for explicit user approval before applying changes that require approval. The user may approve all changes, approve selected Change Items, reject changes, defer changes, or request a revised plan.

AI must never interpret a proposal, conversation, or presence of a target version as approval.

## 9. Execute approved changes

For each approved Change Item:

1. Verify the current state has not unexpectedly changed.
2. Apply the smallest deterministic transformation.
3. Preserve existing knowledge and traceability.
4. Record the result against the Migration ID.
5. Do not duplicate completed work when rerunning.

Recommended execution order:

1. Framework version metadata.
2. Project Context/schema transformations.
3. Framework instructions/procedures.
4. Project Standard Profile changes, if approved.
5. Affected Standard Assessment reruns.
6. AI Handoff regeneration.
7. Separate development-work proposals for application changes.

If an operation cannot be completed safely, mark the Change Item `blocked` or the Migration `partial`; do not claim completion.

## 10. Preserve and handle uncertainty

Do not destructively overwrite records when a mapping can be retained. Preserve old-to-new traceability through the Migration ID and Change Item ID.

If a mapping cannot be established reliably, preserve the uncertainty using `unknown` or `proposed` record state. AI must not manufacture facts to make a migration pass.

## 11. Validation

After execution, validate:

- Framework artifact versions;
- schema and structural validity;
- references and cross-domain consistency;
- Project Context integrity;
- Project Standard Profile version references;
- affected Standard Assessments;
- AI Handoff consistency;
- absence of unexpected application source/configuration changes;
- Migration and Change Item status consistency.

Record validation as `pass`, `fail`, `partial`, or `unknown`.

A Migration may be `completed` only when all required approved Change Items are completed and validation passes. Otherwise use `partial` or `blocked` as appropriate.

## 12. Idempotence and resume

A Migration is resumable. Re-running the procedure must identify an existing Migration ID and completed Change Items, skip already-completed transformations, and continue only unfinished approved work.

Do not create duplicate Project Context records, duplicate profile entries, or duplicate assessments merely because the procedure was rerun.

## 13. Rollback

Framework metadata and Project Context transformations should remain traceable and reversible where practical. Avoid destructive rollback that discards newer knowledge.

Application rollback is outside this procedure and belongs to the application's normal engineering workflow.

## 14. Completion record

On completion, update the project-owned Migration record with:

- final status;
- completed Change Items;
- validation results;
- final Framework/artifact versions;
- unresolved items and deferred development work;
- completion timestamp;
- references to the updated Project Context and Handoff.

The resulting Project Context must state the exact Framework and artifact versions now adopted.

## 15. Version-specific guides

Generic procedure logic belongs here. Version-specific transformations belong under `migrations/framework/<from>-to-<to>.md`. A version-specific guide should describe only the concrete differences, mappings, validation requirements, and known compatibility risks for that transition.

# Framework Update / Migration Schema v1.0.0

## Purpose

Defines the project-owned record used to plan, approve, execute, and validate a Framework Update / Migration. This schema records decisions and execution state; it does not replace the Framework Update Procedure or version-specific migration guides.

## Core model

```yaml
migration:
  id: MIG-YYYY-NNNN
  framework:
    from_version: 1.0.0
    to_version: 1.1.0
  status: proposed
  record_state: proposed
  requested_at: 2026-01-01T00:00:00Z

changes:
  - id: MC-001
    artifact: project-context-schema
    from_version: 1.0.0
    to_version: 1.1.0
    classification: migration-required
    status: proposed
    impact: medium
    approval_required: true
    approved: false
    action: migrate
    evidence: []
    risks: []
    proposal: "..."

validation:
  status: unknown
  checks: []
```

## Required concepts

### Migration

- `id`: stable migration identifier within the project.
- `framework.from_version` / `framework.to_version`: framework versions being compared.
- `status`: `proposed | approved | in-progress | completed | partial | blocked | rejected | cancelled | superseded`.
- `record_state`: `confirmed | proposed | unknown | deprecated`.
- `requested_at`: timestamp when the migration request was created.
- `approved_at`: optional timestamp of approval.
- `completed_at`: optional completion timestamp.
- `requested_by`: optional actor/reference; do not store secrets or credentials.

### Change Item

Each detected change is independently represented so the user can approve or reject individual changes.

- `id`: stable identifier such as `MC-001`.
- `artifact`: affected Framework artifact or domain.
- `from_version` / `to_version`: artifact versions.
- `classification`: `no-impact | compatible | migration-required | breaking`.
- `status`: same lifecycle values as Migration, scoped to the change item.
- `impact`: `low | medium | high | unknown`.
- `approval_required`: boolean.
- `approved`: boolean; approval is explicit and must not be inferred from status.
- `action`: `skip | adopt | migrate | replace | defer | propose-development-work`.
- `evidence`: references supporting the finding.
- `risks`: known risks.
- `proposal`: AI-generated recommendation.
- `development_work`: optional reference to application changes that must be handled separately.

### Evidence

Evidence should use stable project references such as repository-relative paths, document sections, configuration keys, database objects, source symbols, Project Context records, or user-confirmed decisions.

Git history, commit messages, diffs, branches, tags, and blame MUST NOT be used as onboarding or migration evidence.

### Validation

Validation is recorded after execution and should include:

- schema/structure validation
- reference integrity
- exact version metadata
- Project Context consistency
- affected Standard Assessment rerun
- AI Handoff consistency
- unexpected source/configuration change check

Validation status: `pass | fail | partial | unknown`.

## Approval boundary

AI may detect, analyze, plan, and propose. It may execute only changes explicitly approved by the user. Framework migration does not implicitly authorize application source-code, database, API, UI, or infrastructure changes.

## Idempotence and resumability

A migration must be safe to re-run. Existing Migration IDs and completed Change Items are reused rather than duplicated. A `partial` or `blocked` migration can resume from unfinished approved Change Items.

## Preservation

Migration should preserve existing project-owned knowledge and traceability. Do not destructively overwrite records when a mapping can be retained. If a mapping cannot be established reliably, use `unknown` or `proposed` rather than guessing.

## Rollback

Rollback is traceable and reversible where practical. Framework metadata and Project Context should retain migration references. Application rollback remains a separate development concern.

## Versioning

This schema is versioned independently from Framework, Blueprint, Procedure, and Software Standard versions. A schema change that is incompatible with existing migration records requires a migration guide.

## Recommended project location

```text
.project-context/framework/version.yaml
.project-context/framework/migrations/<migration-id>.yaml
```

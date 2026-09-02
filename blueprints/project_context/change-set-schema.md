
**Schema Version:** 1.0.0
**Status:** Active

# Change Set Schema

## Purpose

A Change Set is a correlation record for one coherent change that affects multiple Project Context domains. It does not replace canonical domain records and does not by itself imply user approval or implementation completion.

## Required Fields

| Field | Required | Meaning |
|---|---|---|
| `id` | YES | Stable unique Change Set identifier |
| `title` | YES | Short description of the coherent change |
| `record_state` | YES | Common Project Context record state: `confirmed \| proposed \| unknown \| deprecated` |
| `change_set_state` | YES | Change Set lifecycle: `proposed \| approved \| applied \| superseded \| cancelled` |
| `source` | YES | Provenance of the Change Set |
| `confidence` | YES | Confidence in the record |
| `summary` | YES | Concise description of the change |
| `related_records` | YES | References to affected Project Context records |
| `created_at` | YES | Creation timestamp |
| `updated_at` | YES | Last substantive update timestamp |

## Provenance

Recommended `source` values are `user_decision`, `repository_reconstruction`, `framework_migration`, and `ai_inference`.

A Change Set sourced from `user_decision` MUST NOT be treated as an approved decision solely because its source is a user decision. Approval is represented by `change_set_state`.

## Related Records

Each related record SHOULD identify a stable Project Context record ID and MAY specify a relationship:

```yaml
related_records:
  - record: decisions/decision-001
    relation: primary
  - record: architecture/architecture-001
    relation: affected
  - record: work-management/work-001
    relation: implementation
```

Recommended relation values:

- `primary`
- `affected`
- `implementation`
- `evidence`
- `supersedes`

## Rules

1. A Change Set MUST NOT duplicate the canonical content of affected domain records.
2. `record_state` describes the acceptance/lifecycle state of the Change Set record; `change_set_state` describes the workflow state of the change itself.
3. `change_set_state: approved` does not mean implementation is complete.
4. `change_set_state: applied` means the coherent change has been applied to the relevant Project Context records; it does not mean all linked software work is complete.
5. Historical Change Sets MUST be supported by project-owned documentation or explicit user confirmation; Git history MUST NOT be used as evidence.
6. A superseded or cancelled Change Set MUST remain traceable rather than being silently deleted.

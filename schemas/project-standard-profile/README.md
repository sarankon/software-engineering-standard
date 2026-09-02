# Project Standard Profile Schema

Schema Version: 1.0.0

The Project Standard Profile declares which Software Standards a project adopts and how project-specific applicability is handled. It does not modify the global Standard.

## Required Fields

- `id` — stable profile identifier.
- `project_id` — project identifier.
- `profile_version` — profile revision.
- `record_state` — `confirmed | proposed | unknown | deprecated`.
- `standards` — selected Standard entries.
- `created_at`
- `updated_at`

## Standard Entry

Each entry MUST contain:

- `standard_id` — e.g. `SES-SEC`.
- `version` — exact Standard version adopted or evaluated.
- `mode` — `adopt | override | extend | exclude`.
- `record_state` — `confirmed | proposed | unknown | deprecated`.
- `applicability` — project-specific applicability decision.
- `reason` — required for `override` and `exclude`; recommended for `extend`.
- `source` — decision/evidence source.
- `confidence` — `high | medium | low` when AI-derived.

## Rules

1. The global Standard remains unchanged by a project profile.
2. `adopt` means the project follows the selected Standard version as published.
3. `override` means a project-specific rule differs from the Standard and MUST document the affected scope and reason.
4. `extend` means the project adds stricter or additional project rules without weakening the selected Standard.
5. `exclude` means the Standard is not applicable to the project or declared scope and MUST document the reason.
6. Project-specific decisions MUST NOT be silently inferred as confirmed; AI proposals remain `proposed` until user confirmation.
7. Exact Standard versions MUST be recorded so assessment is reproducible.
8. A profile entry does not by itself prove compliance; compliance is determined by Standard Assessment.
9. User approval is required before AI applies a profile change to a project.

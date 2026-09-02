# Standard Assessment Schema

Schema Version: 1.0.0

The Standard Assessment records an evaluation of a project against the exact Software Standard version selected by the Project Standard Profile.

## Required Fields

- `id` — stable assessment identifier.
- `project_id` — assessed project.
- `profile_id` — Project Standard Profile used.
- `standard_id` — Standard being assessed.
- `standard_version` — exact version assessed.
- `status` — `pass | fail | partial | unknown | not-applicable`.
- `record_state` — `confirmed | proposed | unknown | deprecated`.
- `findings` — rule-level assessment results.
- `assessed_at` — assessment timestamp.

## Rule Finding

Each finding MUST contain:

- `rule_id` — stable Standard Rule ID.
- `standard_id`
- `standard_version`
- `status`
- `evidence` — one or more project-relative or Project Context references when available.
- `confidence` — `high | medium | low`.
- `finding` — concise explanation of the result.
- `assessed_at`
- `record_state`

Optional:

- `related_records`
- `recommendation`
- `exception_reference`

## Status Semantics

- `pass` — available evidence demonstrates the requirement is satisfied.
- `fail` — available evidence demonstrates the requirement is not satisfied.
- `partial` — some aspects are satisfied, but the requirement is not fully demonstrated.
- `unknown` — evidence is insufficient to determine compliance.
- `not-applicable` — the requirement does not apply under the confirmed Project Standard Profile or rule applicability.

## Rules

1. Assessment MUST evaluate against the exact Standard version recorded in the Project Standard Profile.
2. Every assessed normative Rule ID MUST be traceable to its Standard and version.
3. Evidence SHOULD point to concrete project artifacts or Project Context records.
4. AI inference MUST NOT be presented as confirmed evidence; use confidence and `record_state` appropriately.
5. An assessment MUST NOT modify the Standard or Project Standard Profile.
6. A failed or partial finding MAY produce a remediation proposal, but applying project changes requires user approval.
7. `unknown` MUST be used when evidence is insufficient rather than guessing.
8. `not-applicable` MUST have an applicability basis when the reason is not obvious from the profile.
9. Assessments are point-in-time evaluations and SHOULD retain their assessment timestamp.
10. Git history, commit messages, diffs, branches, tags, and blame MUST NOT be used as Project Context onboarding evidence.

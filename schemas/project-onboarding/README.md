# Project Onboarding Schema

Schema Version: 1.0.0

The Project Onboarding record captures a point-in-time onboarding or re-onboarding run and its decisions, findings, and validation state. It does not replace Project Context, Project Standard Profile, or Standard Assessment.

## Required Fields

- `id` — stable onboarding run identifier.
- `project_id` — target project.
- `mode` — `new | existing | update`.
- `framework_version` — exact Framework version used.
- `record_state` — `confirmed | proposed | unknown | deprecated`.
- `status` — `proposed | awaiting-approval | applied | completed | blocked | failed`.
- `evidence_policy` — reference to the onboarding evidence policy/version.
- `started_at`
- `updated_at`

## Recommended Fields

- `target_repository` — project repository identifier/path without credentials.
- `project_context_version`
- `profile_id`
- `assessment_ids`
- `findings`
- `proposals`
- `approval`
- `validation`
- `completed_at`

## Finding

A finding SHOULD contain:

- `id`
- `type` — `fact | conflict | unknown | recommendation | validation-error`.
- `summary`
- `evidence`
- `confidence` — `high | medium | low`.
- `record_state`
- optional `related_records`

## Proposal

A proposal SHOULD contain:

- `id`
- `target` — Project Context, Profile, Standard exception, source/configuration, or other project artifact.
- `summary`
- `reason`
- `impact`
- `status` — `proposed | approved | rejected | applied`.
- `related_records`

## Approval

Approval MUST identify the user decision that authorizes application. AI MUST NOT mark a proposal as `approved` without an explicit user decision.

## Validation

Validation SHOULD record Project Context structural validation, Profile consistency, Assessment consistency, and unresolved critical issues.

Validation status: `pass | fail | partial | unknown`.

## Rules

1. Onboarding MUST use the exact Framework and Standard versions it reports.
2. Git history, commit messages, diffs, branches, tags, and blame MUST NOT be used as onboarding evidence.
3. Unknown information MUST remain unknown until supported by evidence or user decision.
4. AI inference MUST NOT be represented as a confirmed user decision.
5. Existing Project Context MUST NOT be blindly overwritten.
6. User approval MUST precede application of proposals that change the target project or its confirmed project-level decisions.
7. An onboarding record MUST remain traceable to the Project Context, Profile, and Assessment records it created or updated.
8. Re-running onboarding SHOULD be idempotent and preserve valid existing records.

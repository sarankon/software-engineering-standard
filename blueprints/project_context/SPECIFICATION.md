# Project Context Schema Specification

**Schema Version:** 1.0.0
**Status:** Active

## 1. Purpose

This specification defines the common metadata model and rules used by Project Context domains.

The schema is designed for AI-maintained project knowledge that remains readable by humans and portable across AI agents and development environments.

## 2. Core Record Model

A Project Context record SHOULD use the following conceptual fields when applicable:

| Field | Required | Meaning |
|---|---|---|
| `id` | YES | Stable identifier within the domain |
| `title` | YES | Human-readable name |
| `content` | YES | The actual context information |
| `status` | YES | Lifecycle/confidence state |
| `source` | YES | Origin/provenance category |
| `confidence` | RECOMMENDED | AI confidence when the information is inferred or discovered |
| `created_at` | RECOMMENDED | Creation timestamp |
| `updated_at` | RECOMMENDED | Last update timestamp |
| `related_to` | OPTIONAL | References to related context records |

The physical representation MAY be Markdown, YAML front matter, JSON, or another format defined by the Blueprint implementation. The conceptual fields and semantics MUST remain consistent.

## 3. Status

The following statuses are defined:

- `confirmed` — accepted as project truth.
- `proposed` — suggested or inferred and awaiting confirmation.
- `unknown` — not currently known or insufficient evidence exists.
- `deprecated` — previously valid but no longer applicable.

AI MUST NOT silently convert `proposed` or `unknown` information into `confirmed` information.

## 4. Provenance

The following source categories are defined:

- `user_decision` — explicitly decided or supplied by the user.
- `repository_analysis` — directly observed from repository/source/configuration evidence.
- `ai_inference` — derived by AI from available evidence but not explicitly confirmed.
- `external_reference` — derived from an explicitly recorded external reference.

When provenance is material to interpreting the record, it MUST be recorded.

## 5. Confidence

When `source` is `ai_inference`, AI SHOULD record a confidence level:

- `high`
- `medium`
- `low`

Confidence expresses confidence in the inference, not importance.

## 6. Facts and Decisions

Project Context MUST distinguish observable facts from decisions.

- A fact describes what exists or is observed.
- A decision describes what the project has chosen to do and why.

A repository observation MUST NOT be rewritten as a decision merely because it is currently implemented.

## 7. User Decision Protection

Information with `source: user_decision` and `status: confirmed` is protected project knowledge.

AI MUST NOT change or remove it merely because repository evidence differs. AI SHOULD surface the discrepancy and ask for a decision, unless the user has explicitly instructed the change.

## 8. Domain Separation

Each record belongs to a conceptual domain. AI SHOULD update the narrowest relevant domain and SHOULD NOT duplicate the same authoritative fact across multiple domains unless a deliberate summary is needed.

When duplication is necessary, one location SHOULD be treated as authoritative and the other as a reference/summary.

## 9. References

Cross-domain references SHOULD use stable IDs rather than relying only on titles or file paths.

References SHOULD be updated when a record is intentionally renamed or moved.

Broken references SHOULD be treated as a Project Context maintenance issue.

## 10. Timestamps

Timestamps SHOULD use an unambiguous machine-readable representation such as ISO 8601 with timezone information.

`updated_at` SHOULD change whenever the substantive meaning of a record changes.

## 11. AI Maintenance Rules

AI SHOULD:

- read relevant Project Context before making project-level decisions;
- update context after meaningful architectural, technical, requirement, or work-state changes;
- preserve confirmed user decisions;
- record uncertainty instead of inventing missing information;
- remove stale duplication where a canonical record exists;
- keep related domains consistent;
- avoid storing source code in Project Context.

AI MUST NOT:

- fabricate project facts;
- treat inference as confirmed without evidence or user confirmation;
- overwrite confirmed user decisions without explicit instruction;
- use Project Context as a substitute for the actual repository when repository evidence is available.

## 12. Versioning

Schema versions use semantic versioning.

- PATCH: clarifications or non-structural corrections.
- MINOR: backward-compatible fields or capabilities.
- MAJOR: incompatible structural or semantic changes.

A Blueprint upgrade MUST define how existing Project Context is preserved or transformed.


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
| `evidence` | RECOMMENDED | Concrete references supporting important records |

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

## 6. Evidence References

An `evidence` collection MAY be attached to a record to provide traceability to concrete supporting material.

Evidence references SHOULD be used for important reconstructed facts and SHOULD be specific enough for another AI agent to locate the supporting material again. Examples include repository-relative files, document sections, configuration keys, database objects, source symbols, and Git commit IDs.

Evidence does not change the meaning of `source`, `status`, or `confidence`. In particular, evidence supporting an AI inference does not make that inference confirmed.

See [`evidence-schema.md`](./evidence-schema.md) for the normative evidence reference model.

## 7. Facts and Decisions

Project Context MUST distinguish observable facts from decisions.

- A fact describes what exists or is observed.
- A decision describes what the project has chosen to do and why.

A repository observation MUST NOT be rewritten as a decision merely because it is currently implemented.

## 8. User Decision Protection

Information with `source: user_decision` and `status: confirmed` is protected project knowledge.

AI MUST NOT change or remove it merely because repository evidence differs. AI SHOULD surface the discrepancy and ask for a decision, unless the user has explicitly instructed the change.

## 9. Domain Separation

Each record belongs to a conceptual domain. AI SHOULD update the narrowest relevant domain and SHOULD NOT duplicate the same authoritative fact across multiple domains unless a deliberate summary is needed.

When duplication is necessary, one location SHOULD be treated as authoritative and the other as a reference/summary.

## 10. References

Cross-domain references SHOULD use stable IDs rather than relying only on titles or file paths.

References SHOULD be updated when a record is intentionally renamed or moved.

Broken references SHOULD be treated as a Project Context maintenance issue.

## 11. Timestamps

Timestamps SHOULD use an unambiguous machine-readable representation such as ISO 8601 with timezone information.

`updated_at` SHOULD change whenever the substantive meaning of a record changes.

## 12. AI Maintenance Rules

AI SHOULD:

- read relevant Project Context before making project-level decisions;
- update context after meaningful architectural, technical, requirement, or work-state changes;
- preserve confirmed user decisions;
- record uncertainty instead of inventing missing information;
- remove stale duplication where a canonical record exists;
- keep related domains consistent;
- preserve traceability for important reconstructed information;
- avoid storing source code in Project Context.

AI MUST NOT:

- fabricate project facts;
- treat inference as confirmed without evidence or user confirmation;
- overwrite confirmed user decisions without explicit instruction;
- use Project Context as a substitute for the actual repository when repository evidence is available.

## 13. Existing Repository Onboarding

The normative onboarding workflow is defined in [`ONBOARDING.md`](./ONBOARDING.md).

AI MUST follow that procedure when constructing a new canonical Project Context from an existing repository unless the user explicitly requests a narrower operation.

Onboarding MUST distinguish current implementation evidence from historical evidence and MUST preserve confirmed user decisions when sources conflict.

## 14. Versioning

Schema versions use semantic versioning.

- PATCH: clarifications or non-structural corrections.
- MINOR: backward-compatible fields or capabilities.
- MAJOR: incompatible structural or semantic changes.

A Blueprint upgrade MUST define how existing Project Context is preserved or transformed.

Schema 1.0.0 adds optional/recommended evidence references and formalizes the existing-repository onboarding procedure. Existing 1.0.x records remain structurally usable because `evidence` is additive and optional.

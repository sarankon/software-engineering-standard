# Software Standard Specification

**Specification Version:** 1.0.0  
**Status:** Draft

This document is the canonical specification for the Software Engineering Standard (SES). It combines the Standard-level governance model, normative Rule model, applicability and validation model, project consumption model, and relationships among Standards.

The goal is to provide one source of truth that AI agents can read consistently when creating, evaluating, updating, or migrating Software Standards and project-specific Standard Profiles.

## 1. Purpose and Scope

A Software Standard defines reusable engineering policy and guidance for software projects. It is not source code.

This specification defines:

- Standard identity and governance metadata;
- Standard and Rule versioning;
- normative Rule identity and structure;
- lifecycle and record certainty;
- normative levels;
- applicability and compliance evaluation;
- verification and evidence;
- exceptions and migration;
- project consumption and project-specific extensions;
- relationships, ownership, dependencies, and conflict resolution among Standards; and
- the operating boundary between AI recommendation and user authorization.

Concrete normative rules belong to domain-specific Standard documents or requirement sets that conform to this specification.

## 2. Standard Record

A Software Standard MUST define the following metadata:

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Stable machine-readable identifier for the Standard. MUST remain stable across compatible revisions. |
| `name` | Yes | Human-readable Standard name. |
| `version` | Yes | Semantic Version of the Standard collection. |
| `record_state` | Yes | Knowledge/governance certainty of the Standard record. |
| `lifecycle_state` | Yes | Publication/normative lifecycle of the Standard. |
| `purpose` | Yes | Why the Standard exists and what outcome it protects. |
| `scope` | Yes | Systems, projects, technologies, or domains to which it may apply. |
| `owner` | Yes | Logical owner responsible for maintaining the Standard. |
| `requirements` | Yes | Normative Rules defined by the Standard. |
| `applicability` | Yes | Conditions used to determine whether the Standard applies. |
| `validation` | Yes | How compliance can be evaluated. |
| `exceptions` | Yes | How justified deviations are represented and governed. |
| `created_at` | Yes | Creation timestamp. |
| `updated_at` | Yes | Last modification timestamp. |

Optional fields MAY include `description`, `tags`, `references`, `examples`, and `change_history`.

### 2.1 Record State

`record_state` describes the certainty/governance state of the Standard record:

- `confirmed` — established and authoritative within its governing scope;
- `proposed` — suggested but not yet confirmed;
- `unknown` — insufficient information to establish the record confidently;
- `deprecated` — retained for traceability but no longer intended for new adoption.

`record_state` MUST NOT be used to describe project compliance.

### 2.2 Lifecycle State

`lifecycle_state` describes the publication and normative lifecycle of the Standard:

- `draft` — under development;
- `proposed` — ready for review but not yet normative;
- `active` — normative and available for adoption;
- `deprecated` — retained temporarily but should no longer be newly adopted;
- `removed` — no longer part of the active Standard set.

`record_state` and `lifecycle_state` are intentionally separate. A record may be `confirmed` while its lifecycle is `draft`, for example when the existence and ownership of a draft Standard are confirmed but the Standard is not yet normative.

## 3. Versioning

Software Standards use Semantic Versioning:

- **MAJOR** — incompatible changes to interpretation, structure, or mandatory behavior;
- **MINOR** — backward-compatible additions or clarifications;
- **PATCH** — backward-compatible corrections that do not change intended behavior.

A project adoption MUST identify the exact Standard version it uses.

Pre-production Standards SHOULD remain at `1.0.0` until they have been exercised against real projects.

Rule IDs are independent of the Standard collection version and MUST remain stable when the semantic meaning of a Rule remains unchanged.

## 4. Rule Identity

Every normative Rule MUST have a stable Rule ID.

Format:

```text
SES-{CATEGORY}-{NUMBER}
```

Examples:

```text
SES-DB-001
SES-API-001
SES-SEC-001
```

Rule IDs MUST remain stable when wording is refined without changing the semantic meaning of the Rule. A materially new Rule MUST receive a new ID rather than silently changing the meaning of an existing Rule.

The Rule ID is the canonical identity used for cross-reference, compliance findings, exceptions, migration, and project-specific overrides or extensions.

## 5. Rule Metadata

Each normative Rule SHOULD declare:

```yaml
id: SES-DB-001
lifecycle_state: active
level: MUST
category: database
applicability:
  - relational-database
```

`record_state` MAY also be present when the Rule is being managed as a structured knowledge record.

The legacy field name `status` is not the canonical field in the current specification; use `lifecycle_state` for publication lifecycle.

### 5.1 Normative Level

The normative vocabulary is intentionally preserved from the original Standard model:

- `MUST` — mandatory when applicable;
- `MUST NOT` — prohibited when applicable;
- `SHOULD` — recommended and normally expected when applicable;
- `SHOULD NOT` — generally discouraged and requires justification when applicable;
- `MAY` — optional.

`SHOULD NOT` MUST NOT be collapsed into `MUST NOT`. A discouraged practice and a prohibited practice have different compliance and exception semantics.

## 6. Standard Scope

`scope` SHOULD identify applicable dimensions such as:

- application type;
- technology/platform;
- deployment model;
- data sensitivity;
- environment; and
- organizational or project boundary.

Scope defines where a Standard may apply; it does not itself prove applicability.

## 7. Applicability

Applicability MUST be expressed as explicit conditions where practical. Conditions MAY refer to Project Context facts, technology choices, architecture characteristics, deployment model, data sensitivity, or project decisions.

A Rule MUST NOT be treated as universally applicable when its scope is conditional.

AI SHOULD determine applicability from available evidence and MUST report uncertainty rather than silently assuming applicability.

Applicability and compliance are separate concepts:

```text
Standard / Rule
   │
   ├── Is it applicable?
   │          │
   │          └── yes / no / unknown
   │
   └── If applicable, is it satisfied?
              │
              └── pass / fail / partial / unknown / not-applicable
```

AI MUST NOT report a compliance failure for a Rule that is clearly not applicable.

## 8. Canonical Rule Structure

A Rule SHOULD follow this structure:

```markdown
# SES-DB-001 — Primary Key

Lifecycle State: Active
Level: MUST
Category: Database
Applicability: Relational Database

## Requirement

...

## Rationale

...

## Good Example

...

## Bad Example

...

## Verification

...

## Exceptions

...

## Migration

...
```

### 8.1 Requirement

The normative statement. It MUST be precise enough to determine whether an implementation complies.

Avoid vague requirements such as `code should be clean` unless the term is explicitly defined.

### 8.2 Rationale

Explains why the requirement exists. Rationale informs human decision-making but does not replace the normative requirement.

### 8.3 Examples

Good and bad examples SHOULD be provided when they materially reduce ambiguity.

### 8.4 Verification

Every meaningful normative Rule SHOULD define a practical verification method. Verification MAY be automated, manual, review-based, or a combination.

A validation definition SHOULD identify:

- what evidence is required;
- where evidence may be found;
- what constitutes pass/fail/partial/unknown;
- whether validation can be automated; and
- limitations of the check.

Validation is an assessment mechanism. It does not authorize AI to modify source code.

### 8.5 Exceptions

Projects MAY require justified deviations. An exception MUST be explicitly documented in the project's Project Context and SHOULD reference:

- affected Rule ID;
- reason;
- impact;
- approval or decision source;
- scope of the exception;
- review conditions;
- effective period when relevant; and
- compensating control when relevant.

An exception does not modify the global Standard itself.

### 8.6 Migration

A Rule change that can affect existing projects SHOULD document how an existing implementation can become compliant.

Breaking changes MUST have explicit migration guidance.

## 9. Validation and Evidence

Validation results SHOULD use the following vocabulary:

- `pass` — evidence demonstrates compliance;
- `fail` — evidence demonstrates non-compliance;
- `partial` — some applicable conditions are satisfied but the Rule is not fully satisfied;
- `unknown` — available evidence is insufficient to determine compliance;
- `not-applicable` — the Rule does not apply to the evaluated project/context.

Evidence SHOULD identify concrete sources such as:

- repository-relative file or directory;
- configuration key or value location;
- database object or schema definition;
- source symbol or implementation location;
- Project Context record; or
- user-confirmed project decision.

AI SHOULD report evidence and confidence with compliance findings. AI MUST distinguish observed evidence from inference.

## 10. Project Consumption

A project SHOULD consume a Global Standard through a project-owned Standard Profile rather than copying and editing the Global Standard.

The profile MAY declare:

- `adopt` — use the Standard as published;
- `override` — replace an applicable project interpretation with an explicitly approved project rule;
- `extend` — add project-specific requirements without changing the Global Standard; and
- `exclude` — declare a Standard or Rule not applicable with documented justification.

Project-specific decisions MUST remain project-owned and MUST NOT silently alter the Global Standard.

Project overrides and extensions SHOULD reference the canonical Rule ID instead of copying the original Rule unnecessarily.

The exact Standard Profile schema is a separate implementation concern and MUST NOT create a second source of truth for the normative Rule itself.

## 11. Standard Relationships

Each Standard SHOULD have a clearly defined responsibility and SHOULD avoid defining requirements that primarily belong to another Standard.

Standards MAY depend on concepts established by lower-level or foundational Standards, but higher-level Standards SHOULD NOT redefine foundational concepts without a deliberate reason.

The relationship model defines conceptual dependency and authority. It does not prescribe a physical repository structure or implementation technology.

### 11.1 Standard Layers

SES uses the following conceptual layers:

```text
Principles
    ↓
Foundation
    ↓
Architecture
    ↓
Domain / Engineering Practices
    ↓
Quality / Operations / Maintenance
```

The exact dependency between individual Standards MAY cross these layers when necessary, but the hierarchy SHOULD remain understandable.

### 11.2 Responsibility Categories

The Standard set MAY use the following responsibility categories:

- **Principles** — broad engineering principles and objectives;
- **Foundation** — repository, project structure, dependencies, environment, documentation, configuration, and AI entry-point responsibilities;
- **Architecture** — system structure, boundaries, interfaces, and dependencies;
- **Development** — implementation and change practices;
- **Presentation** — UI, interaction, accessibility, frontend behavior, and presentation architecture;
- **Data** — data modeling, persistence, lifecycle, integrity, auditability, and related concerns;
- **Integration** — APIs, protocols, messaging, external systems, and interoperability;
- **Security** — security requirements across the software lifecycle and system boundaries;
- **Quality** — testing, verification, and quality attributes;
- **Operations** — deployment, runtime, observability, recovery, and operational maintenance;
- **Maintenance** — evolution, deprecation, technical debt, upgrades, and lifecycle management.

### 11.3 Cross-standard Ownership

When a concern appears to belong to multiple Standards, ownership SHOULD be assigned to the Standard whose primary responsibility is the concern.

Other Standards MAY reference or constrain that concern without becoming its authoritative owner.

Example:

```text
Configuration
    └── defines configuration responsibility

Environment
    └── defines where configuration is applied

Security
    └── defines security constraints on sensitive configuration
```

No single document should need to repeat the complete requirement from all three perspectives.

Every normative Rule SHOULD have one primary owning Standard.

A Rule MUST NOT be duplicated in multiple Standards merely for convenience when duplication could result in inconsistent future changes.

If multiple Standards need the same outcome, the authoritative Rule SHOULD be defined once and referenced by the others.

### 11.4 Dependency Direction

Standards SHOULD prefer references toward foundational concepts rather than creating circular definitions.

For example:

```text
Architecture
    ↓
Development
    ↓
Quality
    ↓
Operations
```

A cross-cutting concern such as Security MAY influence multiple layers without requiring every layer to redefine Security requirements.

Circular dependencies between Standards SHOULD be avoided. When unavoidable, the relationship and authority MUST be explicit.

### 11.5 Cross-references

Standards SHOULD reference another Standard when its requirements depend materially on that Standard.

Cross-references SHOULD identify the responsibility being referenced rather than copying large sections of text.

When a specific normative Rule is referenced, the stable Rule ID MUST be used when one has been assigned.

## 12. Conflict Resolution

When two Standards appear to define conflicting requirements, the project MUST resolve the conflict explicitly rather than choosing silently.

Resolution SHOULD consider, in order of evaluation:

1. applicability;
2. specificity;
3. normative level;
4. Standard authority;
5. architectural or project constraints; and
6. documented exceptions.

A more specific requirement MAY refine a general requirement when it does not violate the general intent.

A material conflict SHOULD result in an explicit clarification or Rule change in the authoritative Standard.

## 13. Change Rules

When modifying a Rule:

1. Preserve the Rule ID if its semantic meaning remains the same.
2. Create a new Rule ID when the change materially changes the requirement.
3. Update the changelog for released changes.
4. Provide migration guidance when existing projects can be affected.
5. Do not silently change an `active` Rule in a way that creates an undocumented breaking change.

When modifying the Standard relationship model, evaluate:

- duplicate requirements;
- broken cross-references;
- changed ownership;
- dependency direction;
- conflict resolution impact; and
- migration impact on existing projects.

## 14. AI Operating Model

The Software Standard is designed to be read and interpreted primarily by AI agents while remaining understandable to human users.

AI SHOULD follow this sequence when evaluating or applying a Standard:

1. Read the exact Standard version.
2. Read the applicable Standard and Rule metadata.
3. Determine applicability from Project Context and repository/project evidence.
4. Evaluate applicable Rules.
5. Report findings with evidence and confidence.
6. Explain conflicts, exceptions, and migration impact when relevant.
7. Propose remediation, adoption, override, extension, or exception options.
8. Wait for the user's decision before changing the project.
9. After approval, update the appropriate project artifacts and Project Context.
10. Record the resulting decision/change so another AI agent can continue the work.

AI MAY recommend changes, but user decision remains the authorization boundary for project changes.

The Standard itself MUST NOT be treated as permission for AI to modify source code automatically.

## 15. Governance Invariants

The following invariants MUST be preserved:

1. The Global Standard is the authoritative source for its normative Rules.
2. Project-specific deviations belong to the project-owned Standard Profile and Project Context.
3. Stable Rule IDs identify normative Rules across compatible revisions.
4. `record_state` and `lifecycle_state` MUST remain semantically distinct.
5. `SHOULD NOT` and `MUST NOT` MUST remain distinct normative levels.
6. Applicability MUST be evaluated separately from compliance.
7. Evidence and inference MUST be distinguishable in AI-generated assessments.
8. Exceptions MUST be explicit and traceable.
9. Material breaking changes MUST include migration guidance.
10. Standards SHOULD have one primary owner per normative Rule.
11. Circular Standard dependencies SHOULD be avoided.
12. Existing project decisions MUST NOT silently modify the Global Standard.

## 16. Verification and Maintenance

A Standard set SHOULD be reviewed to verify that:

- every Standard has a clear responsibility;
- every normative Rule has a stable Rule ID;
- lifecycle and record certainty are not conflated;
- applicability conditions are explicit;
- validation is practical;
- evidence is identifiable;
- major cross-cutting concerns have identifiable owners;
- unnecessary duplication is avoided;
- dependency direction is understandable;
- cross-references are appropriate;
- apparent conflicts are explicitly resolved;
- exceptions are traceable;
- migration guidance exists for breaking changes; and
- project consumption does not modify the Global Standard silently.

The relationship model SHOULD be reviewed whenever a new Standard category is introduced or when the responsibility of an existing Standard changes materially.

## 17. Compatibility and Existing Material

This specification intentionally preserves the original SES Standard conventions while adding the structured governance model required for AI-assisted use.

The original normative concepts remain authoritative unless explicitly changed in this specification:

- stable Rule IDs using `SES-{CATEGORY}-{NUMBER}`;
- lifecycle states `draft`, `proposed`, `active`, `deprecated`, `removed`;
- normative levels `MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT`, `MAY`;
- canonical Rule sections for Requirement, Rationale, Good Example, Bad Example, Verification, Exceptions, and Migration;
- practical verification;
- explicit exceptions;
- migration guidance for breaking changes;
- Standard ownership and responsibility boundaries;
- dependency direction;
- cross-standard ownership and cross-references; and
- explicit conflict resolution.

The structured additions are layered on top of these conventions rather than replacing them.

## 18. Current Implementation Note

This document is the canonical Software Standard specification for the current design phase.

Concrete Standard Rules such as Database, API, Security, UI, Audit, Logging, and other domain standards SHOULD be defined under the responsibility categories described above and MUST conform to this specification.

The Standard Profile schema, automated compliance engine, and migration tooling MAY be defined in later phases without changing this document into a second implementation-specific source of truth.

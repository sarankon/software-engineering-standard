# Standard Specification

This document defines the canonical structure and metadata for an SES Standard Rule.

## Rule Identity

Every normative rule MUST have a stable Rule ID.

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

Rule IDs MUST remain stable when the wording is refined. A materially new rule should receive a new ID rather than silently changing the meaning of an existing rule.

## Rule Metadata

Each rule SHOULD declare:

```yaml
id: SES-DB-001
status: active
level: MUST
category: database
applicability:
  - relational-database
```

### Status

Allowed lifecycle states:

- `draft` — under development
- `proposed` — ready for review
- `active` — normative and applicable
- `deprecated` — retained temporarily but should no longer be adopted
- `removed` — no longer part of the active Standard

### Level

- `MUST` — mandatory
- `MUST NOT` — prohibited
- `SHOULD` — recommended
- `SHOULD NOT` — generally discouraged
- `MAY` — optional

### Applicability

Applicability identifies the project or technology conditions under which the rule applies. A rule MUST NOT be treated as universally applicable when its scope is conditional.

## Canonical Rule Structure

A rule SHOULD follow this structure:

```markdown
# SES-DB-001 — Primary Key

Status: Active
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

## Requirement

The normative statement. It MUST be precise enough to determine whether an implementation complies.

Avoid vague requirements such as `code should be clean` unless the term is explicitly defined.

## Rationale

Explains why the requirement exists. Rationale informs human decision-making but does not replace the normative requirement.

## Examples

Good and bad examples SHOULD be provided when they materially reduce ambiguity.

## Verification

Every meaningful normative rule SHOULD define a practical verification method. Verification may be automated, manual, review-based, or a combination.

## Exceptions

Projects may require justified deviations. An exception MUST be explicitly documented in the project's project context and SHOULD reference the affected Rule ID, reason, impact, approval, and review conditions.

## Migration

A rule change that can affect existing projects SHOULD document how an existing implementation can become compliant. Breaking changes MUST have explicit migration guidance.

## Change Rules

When modifying a rule:

1. Preserve the Rule ID if its semantic meaning remains the same.
2. Create a new Rule ID when the change materially changes the requirement.
3. Update the changelog for released changes.
4. Provide migration guidance when existing projects can be affected.
5. Do not silently change an `active` rule in a way that creates an undocumented breaking change.

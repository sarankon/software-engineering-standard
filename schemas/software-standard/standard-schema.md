# Software Standard Schema

**Schema Version:** 1.0.0
**Status:** Draft for S1 review

## Purpose

This schema defines the canonical metadata and governance structure of a reusable Software Standard. It complements the existing rule-level specification in [`standards/SPECIFICATION.md`](../../standards/SPECIFICATION.md): this schema describes the Standard as a governed collection, while the rule specification describes the individual normative rule format.

A Standard is policy and guidance, not source code. Concrete rules belong to the Standard's requirement set or to domain-specific standard documents that conform to this schema.

## Standard Record

Each Software Standard MUST define:

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Stable machine-readable identifier. MUST remain stable across compatible revisions. |
| `name` | Yes | Human-readable standard name. |
| `version` | Yes | Semantic version of the Standard collection. |
| `record_state` | Yes | `confirmed`, `proposed`, `unknown`, or `deprecated`. |
| `purpose` | Yes | Why the Standard exists and what outcome it protects. |
| `scope` | Yes | Systems, projects, technologies, or domains to which it may apply. |
| `owner` | Yes | Logical owner responsible for maintaining the Standard. |
| `requirements` | Yes | Normative requirements defined by the Standard. |
| `applicability` | Yes | Conditions used to determine whether the Standard applies. |
| `validation` | Yes | How compliance can be evaluated. |
| `exceptions` | Yes | How justified deviations are represented and governed. |
| `created_at` | Yes | Creation timestamp. |
| `updated_at` | Yes | Last modification timestamp. |

Optional fields MAY include `description`, `tags`, `references`, `examples`, and `change_history`.

## Record State

`record_state` describes the knowledge/governance state of the Standard record:

- `confirmed` — approved and authoritative within its governing scope.
- `proposed` — suggested but not yet authoritative.
- `unknown` — insufficient information to establish the record.
- `deprecated` — retained for traceability but no longer intended for new adoption.

`record_state` MUST NOT be used to describe whether a project complies with the Standard.

The existing rule-level `Status` values in `standards/SPECIFICATION.md` (`draft`, `proposed`, `active`, `deprecated`, `removed`) remain valid for the current Standard corpus. S1 does not silently rewrite those existing rules. A future compatibility migration MAY define a formal mapping between collection-level governance state and rule publication state.

## Versioning

Software Standards use Semantic Versioning:

- **MAJOR** — incompatible changes to interpretation, structure, or mandatory behavior.
- **MINOR** — backward-compatible additions or clarifications.
- **PATCH** — backward-compatible corrections that do not change intended behavior.

A project adoption MUST identify the exact Standard version it uses.

Pre-production Standards SHOULD remain at `1.0.0` until they have been exercised against real projects.

## Scope

`scope` SHOULD identify applicable dimensions such as:

- application type;
- technology/platform;
- deployment model;
- data sensitivity;
- environment;
- organizational/project boundary.

Scope defines where a Standard may apply; it does not itself prove applicability.

## Applicability

Applicability MUST be expressed as explicit conditions where practical. Conditions MAY refer to Project Context facts, technology choices, architecture characteristics, or project decisions.

AI SHOULD determine applicability from evidence and report uncertainty rather than silently assuming applicability.

## Requirement Levels

Each requirement MUST have exactly one level:

| Level | Meaning |
|---|---|
| `mandatory` | Must be satisfied when the requirement applies. |
| `recommended` | Should normally be satisfied; deviation requires explanation. |
| `optional` | Available when useful; absence is not a compliance failure. |
| `forbidden` | Must not be used when the requirement applies. |

The existing rule-level vocabulary (`MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT`, `MAY`) remains supported. S2 should define the canonical mapping between these normative keywords and the requirement levels above before existing rules are migrated.

## Requirement Identity

Each requirement MUST have a stable `id` unique within the Standard version, a human-readable `title`, a `level`, and a normative `rule`.

For the current corpus, Rule IDs such as `SES-DB-001` remain the canonical identifiers. IDs SHOULD remain stable when a requirement is clarified without changing its meaning. A materially new rule SHOULD receive a new ID rather than silently changing an existing rule's meaning.

A requirement SHOULD also define:

- `rationale` — why it exists;
- `applies_when` — applicability condition specific to the requirement;
- `validation` — evidence or checks used to evaluate it;
- `exception_policy` — whether and how deviation may be approved.

## Applicability vs Compliance

These are separate concepts:

```text
Standard
   │
   ├── Is this Standard applicable?
   │          │
   │          └── yes / no / unknown
   │
   └── If applicable, is each requirement satisfied?
              │
              └── pass / fail / partial / unknown / not-applicable
```

AI MUST NOT report a compliance failure for a requirement that is clearly not applicable.

## Validation

Validation definitions SHOULD identify:

- what evidence is required;
- where evidence may be found;
- what constitutes pass/fail/partial/unknown;
- whether validation can be automated;
- limitations of the check.

Validation is an assessment mechanism. It does not authorize AI to modify source code.

## Exceptions

A Standard MAY permit exceptions. An exception MUST record at least:

- affected Standard or requirement ID;
- reason;
- decision/approval source;
- scope of the exception;
- effective period when relevant;
- compensating control when relevant.

An exception does not modify the global Standard itself.

## Project Consumption

A project SHOULD consume a Standard through a project-owned Standard Profile rather than copying and editing the global Standard.

The profile MAY declare:

- `adopt` — use the Standard as published;
- `override` — replace an applicable project interpretation with an explicitly approved project rule;
- `extend` — add project-specific requirements without changing the global Standard;
- `exclude` — declare a Standard or requirement not applicable with documented justification.

Project-specific decisions MUST remain project-owned and MUST NOT silently alter the global Standard.

The exact Standard Profile schema is intentionally deferred to a later design phase.

## AI Operating Rule

AI SHOULD follow this sequence:

1. Read the exact Standard version.
2. Determine applicability from Project Context and evidence.
3. Evaluate applicable requirements.
4. Report findings with evidence and confidence.
5. Propose remediation or an exception where needed.
6. Wait for the user's decision before changing the project.
7. After approval, update the appropriate project artifacts and Project Context.

The Standard is therefore both a policy source and an input to AI-assisted validation, while user decision remains the authorization boundary for project changes.

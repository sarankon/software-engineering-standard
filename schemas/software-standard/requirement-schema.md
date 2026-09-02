# Software Standard Requirement Schema

**Schema Version:** 1.0.0
**Status:** Draft for S1 review

## Purpose

Defines the canonical structure of one normative Software Standard requirement. A requirement is the smallest independently identifiable rule that AI can evaluate and report.

## Requirement Record

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Stable identifier unique within the Standard version. |
| `title` | Yes | Short human-readable name. |
| `level` | Yes | `mandatory`, `recommended`, `optional`, or `forbidden`. |
| `rule` | Yes | Normative statement describing the required or prohibited behavior. |
| `record_state` | Yes | `confirmed`, `proposed`, `unknown`, or `deprecated`. |
| `validation` | Yes | How AI or a reviewer determines compliance. |
| `applies_when` | No | Condition under which this requirement applies. |
| `rationale` | No | Reason for the requirement. |
| `exception_policy` | No | Whether a documented exception is permitted. |
| `references` | No | Supporting references. |

## Requirement Level

Canonical schema levels are:

- `mandatory`: applicable projects must satisfy it.
- `recommended`: the default recommendation; deviation should be explainable.
- `optional`: use is discretionary.
- `forbidden`: applicable projects must not violate it.

The current repository also uses normative keywords `MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT`, and `MAY`. Their canonical mapping is intentionally deferred to S2 so existing rules can remain unchanged during S1.

## Validation Result

A validation process SHOULD normalize each evaluated requirement to one of:

- `pass`
- `fail`
- `partial`
- `unknown`
- `not-applicable`

A validation result is an assessment and is not part of the immutable global requirement record.

## Evidence

Validation SHOULD reference concrete evidence where available, such as:

- repository-relative file;
- configuration key;
- database object;
- source symbol;
- project-owned Project Context record;
- user-confirmed decision.

Git history MUST NOT be used as onboarding evidence for Project Context or Standard compliance reconstruction under the project's established onboarding policy.

## AI Interpretation Rules

AI MUST distinguish:

1. the normative requirement;
2. whether it applies;
3. the observed evidence;
4. the compliance result;
5. the confidence of the assessment;
6. the proposed action.

AI MUST NOT convert an inferred or incomplete observation into a confirmed compliance failure without appropriate evidence.

## Relationship to Project Overrides

A project-specific override or extension references the requirement ID rather than copying the requirement. This preserves traceability when the global Standard evolves.

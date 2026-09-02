# Security Standards

**Standard ID:** `SES-SEC`
**Version:** `1.0.0`
**Record State:** `confirmed`
**Lifecycle State:** `draft`
**Category:** Security
**Applicability:** All SES-enabled applications unless a rule declares narrower applicability.

## Purpose

Define the minimum security responsibilities that every software project must consider across authentication, authorization, secrets, input handling, data protection, transport, dependencies, sessions, and security events.

Security is cross-cutting. This Standard owns security responsibilities; other Standards own their domain-specific behavior and may reference these rules.

## Governance

- Rules use stable `SES-SEC-{NUMBER}` Rule IDs.
- Normative levels use `MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT`, and `MAY`.
- `record_state` describes the certainty/governance state of the record; `lifecycle_state` describes publication state.
- This Standard is technology-neutral. Technology-specific implementation choices belong in Project Context.
- A project MUST NOT weaken a security requirement silently. Deviations require a documented Project Context exception referencing the affected Rule ID.

## Rule Index

| Rule ID | Topic | Level |
|---|---|---|
| `SES-SEC-001` | Security by design | MUST |
| `SES-SEC-002` | Authentication | MUST |
| `SES-SEC-003` | Authorization | MUST |
| `SES-SEC-004` | Secrets and credentials | MUST NOT |
| `SES-SEC-005` | Sensitive data exposure | MUST NOT |
| `SES-SEC-006` | Input validation | MUST |
| `SES-SEC-007` | Output encoding | MUST |
| `SES-SEC-008` | Transport security | MUST |
| `SES-SEC-009` | Session security | MUST |
| `SES-SEC-010` | Dependency security | MUST |
| `SES-SEC-011` | Security event logging | MUST |
| `SES-SEC-012` | Error disclosure | MUST NOT |
| `SES-SEC-013` | Least privilege | SHOULD |
| `SES-SEC-014` | Security verification | MUST |

## Applicability

The Standard applies by default to application code, services, APIs, background jobs, administrative interfaces, data access, deployment configuration, and integrations where the corresponding rule is applicable.

Rules concerning browser behavior, sessions, databases, external integrations, or infrastructure may have narrower applicability. AI MUST determine applicability from Project Context and repository evidence rather than assuming every rule applies to every component.

## Verification

AI should evaluate each applicable rule using repository/configuration evidence, identify confidence and unknowns, and propose remediation. A compliance finding MUST identify the Rule ID and evidence. User approval remains the authorization boundary for project changes.

## Exceptions

Exceptions belong to the consuming project's Project Context. At minimum record the Rule ID, reason, impact, approval source, scope, review condition, and compensating control when applicable.

## Migration

This Standard is a new baseline. Existing projects SHOULD be assessed before adoption. Non-compliant findings SHOULD be prioritized by exploitability, exposure, data sensitivity, and business impact. Breaking changes to an active rule require explicit migration guidance before release.

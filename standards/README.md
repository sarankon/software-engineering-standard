# Software Standards

This directory contains the reusable Software Engineering Standard framework. Normative rules use the canonical model in `SPECIFICATION.md`.

## Standard coverage

| Standard | ID | Baseline | State |
|---|---|---|---|
| Engineering Principles | `SES-PRI` | `principles/principles-baseline.md` | draft |
| Architecture | `SES-ARC` | `architecture/architecture-baseline.md` | draft |
| Foundation | `SES-FND` | `foundation/foundation-baseline.md` | draft |
| Database & Data | `SES-DB` | `data/` | baseline implemented; review pending |
| Development | `SES-DEV` | `development/development-baseline.md` | draft |
| Integration | `SES-INT` | `integration/integration-baseline.md` | draft |
| Presentation | `SES-PRE` | `presentation/presentation-baseline.md` | draft |
| Quality | `SES-QLT` | `quality/quality-baseline.md` | draft |
| Maintenance | `SES-MNT` | `maintenance/maintenance-baseline.md` | draft |
| Operations | `SES-OPS` | `operations/operations-baseline.md` | draft |
| Security | `SES-SEC` | `security/security-baseline.md` | draft |

## Organization

- `principles/` — engineering principles.
- `architecture/` — architecture and boundaries.
- `foundation/` — repository, environment, dependencies, documentation, and AI entry point.
- `data/` — database, identity, audit, logging, configuration, and API key rules.
- `development/` — implementation and error handling.
- `integration/` — system-to-system integration.
- `presentation/` — UI, interaction, and accessibility.
- `quality/` — testing and validation.
- `maintenance/` — lifecycle and maintainability.
- `operations/` — deployment and operational behavior.
- `security/` — security baseline.

Supporting files:

- `SPECIFICATION.md` — canonical normative specification.
- `rule-template.md` — rule definition template.
- `versioning.md` — versioning policy.
- `glossary.md` — shared terminology.

The baseline drafts are intentionally reviewable as a set. They are not final approval and MUST NOT be treated as active merely because a rule uses `MUST`.

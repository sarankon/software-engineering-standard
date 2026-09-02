# Maintenance Standard

**Standard ID:** `SES-MNT`
**Version:** `1.0.0`
**Record State:** `confirmed`
**Lifecycle State:** `draft`
**Category:** Maintenance
**Applicability:** Software projects throughout their supported lifecycle.

## Purpose
Define maintainability, upgrade, deprecation, technical-debt, and lifecycle practices.

## Rules

### SES-MNT-001 — Supported components
**Level:** MUST
Material runtime, framework, library, and infrastructure dependencies MUST have an identified support or maintenance strategy.

### SES-MNT-002 — Obsolescence tracking
**Level:** MUST
Known end-of-life, deprecated, or materially risky components MUST be tracked in Project Context or an approved maintenance system.

### SES-MNT-003 — Upgrade impact
**Level:** MUST
Material dependency upgrades MUST assess compatibility, security, data, and regression impact.

### SES-MNT-004 — Deprecation
**Level:** SHOULD
Deprecated project capabilities SHOULD have a documented replacement or removal plan.

### SES-MNT-005 — Technical debt
**Level:** SHOULD
Material technical debt SHOULD be recorded with impact and a reason to address it.

### SES-MNT-006 — Backward compatibility
**Level:** MUST
Changes claiming compatibility MUST preserve documented contracts or provide explicit migration guidance.

### SES-MNT-007 — Cleanup
**Level:** SHOULD
Obsolete configuration, dependencies, documentation, and code SHOULD be removed when safe.

### SES-MNT-008 — Maintenance evidence
**Level:** MUST
Maintenance decisions MUST retain enough evidence to explain current support assumptions and unresolved risks.

## Verification / Evidence
Use dependency manifests, support documentation, Project Context, migration plans, deprecation records, and validation results.

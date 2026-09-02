# Operations Standard

**Standard ID:** `SES-OPS`
**Version:** `1.0.0`
**Record State:** `confirmed`
**Lifecycle State:** `draft`
**Category:** Operations
**Applicability:** Deployable software and production-like environments.

## Purpose
Define baseline deployment, observability, reliability, recovery, and operational safety practices.

## Rules

### SES-OPS-001 — Deployability
**Level:** MUST
A supported application MUST have a documented and reproducible deployment process appropriate to its environment.

### SES-OPS-002 — Environment separation
**Level:** MUST
Production credentials, data, and configuration MUST be separated from development and test environments.

### SES-OPS-003 — Health visibility
**Level:** MUST
Deployable services MUST expose sufficient health or readiness information for the supported operational environment.

### SES-OPS-004 — Operational logging
**Level:** MUST
Material operational failures MUST be logged with enough structured context to diagnose them without exposing sensitive data.

### SES-OPS-005 — Monitoring
**Level:** SHOULD
Critical user journeys and infrastructure dependencies SHOULD have meaningful monitoring or equivalent operational signals.

### SES-OPS-006 — Backup and recovery
**Level:** MUST
Systems with recoverable state MUST define an appropriate backup, retention, and recovery strategy.

### SES-OPS-007 — Safe deployment
**Level:** MUST
Material deployments MUST have rollback, recovery, or forward-fix procedures appropriate to their risk.

### SES-OPS-008 — Incident readiness
**Level:** SHOULD
Projects SHOULD document ownership, escalation, and basic response procedures for material production incidents.

## Verification / Evidence
Inspect deployment configuration, health checks, logs, monitoring, backup/recovery procedures, and operational runbooks.

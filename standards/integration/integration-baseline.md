# Integration Standard

**Standard ID:** `SES-INT`
**Version:** `0.1.0`
**Record State:** `confirmed`
**Lifecycle State:** `draft`
**Category:** Integration
**Applicability:** APIs, external services, messaging, webhooks, files, and other system-to-system integrations.

## Purpose
Define reliable, secure, observable, and evolvable integration behavior.

## Rules

### SES-INT-001 — Explicit integration contract
**Level:** MUST
Every external integration MUST have an identifiable contract covering data, authentication, errors, and compatibility expectations.

### SES-INT-002 — Timeout and failure policy
**Level:** MUST
Network or remote calls MUST have bounded failure behavior such as timeouts and an explicit failure policy.

### SES-INT-003 — Retry safety
**Level:** MUST
Retries MUST be bounded and MUST NOT create unacceptable duplicate side effects. Idempotency MUST be used where repeated delivery is possible.

### SES-INT-004 — External input trust
**Level:** MUST
Data received from external systems MUST be treated as untrusted until validated.

### SES-INT-005 — Contract compatibility
**Level:** MUST
Breaking integration changes MUST be versioned, migrated, or otherwise coordinated with affected consumers.

### SES-INT-006 — Integration observability
**Level:** MUST
Material integration failures MUST produce sufficient operational evidence to identify the integration and failure class without logging sensitive data.

### SES-INT-007 — Secret isolation
**Level:** MUST
Integration credentials MUST use the Security Standard's secret-management requirements and MUST NOT be embedded in source code.

### SES-INT-008 — Provider coupling
**Level:** SHOULD
Provider-specific behavior SHOULD be isolated so that changing the provider does not unnecessarily affect unrelated application logic.

## Verification / Evidence
Inspect clients, contracts, schemas, retry/timeout settings, webhook handlers, tests, and integration configuration.

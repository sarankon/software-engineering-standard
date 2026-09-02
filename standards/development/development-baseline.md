# Development Standard

**Standard ID:** `SES-DEV`
**Version:** `0.1.0`
**Record State:** `confirmed`
**Lifecycle State:** `draft`
**Category:** Development
**Applicability:** Application and service implementation.

## Purpose
Define implementation, error handling, code quality, and change practices.

## Rules

### SES-DEV-001 — Readable implementation
**Level:** MUST
Production code MUST be understandable without relying on hidden behavior or unexplained conventions.

### SES-DEV-002 — Business logic placement
**Level:** MUST
Business rules MUST be implemented in the appropriate domain/application layer rather than duplicated across presentation, transport, and persistence layers.

### SES-DEV-003 — Error handling
**Level:** MUST
Expected errors MUST be handled explicitly, mapped to an appropriate application outcome, and MUST NOT expose sensitive internal details.

### SES-DEV-004 — No silent failure
**Level:** MUST NOT
The system MUST NOT silently discard failures that can affect correctness, security, data integrity, or user-visible behavior.

### SES-DEV-005 — Input contracts
**Level:** MUST
Functions, services, and handlers receiving external or cross-boundary data MUST validate or otherwise enforce their input contract.

### SES-DEV-006 — Side-effect boundaries
**Level:** SHOULD
Side effects SHOULD be isolated so that core logic can be reasoned about and tested independently where practical.

### SES-DEV-007 — Change-focused testing
**Level:** MUST
Changes MUST include appropriate verification for affected behavior, with depth proportional to risk.

### SES-DEV-008 — Dead code and duplication
**Level:** SHOULD
Projects SHOULD remove obsolete code and avoid material duplication of business rules.

## Verification / Evidence
Use source structure, static analysis, tests, error paths, and relevant Project Context records.

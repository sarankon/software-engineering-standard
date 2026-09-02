# Database Principles

**Standard Version:** 0.1.0

## Purpose

Define technology-neutral database requirements that every application must follow. Project-specific technology choices belong in Project Context; this standard defines required behavior, integrity, security, and baseline capabilities.

## Rules

### SES-DATA-PRINCIPLES-001 — Baseline Provisioning
- **Status:** active
- **Level:** MUST
- **Applicability:** All applications
- Every application MUST provision the Database Standard baseline components from project initialization, even when a component is not immediately used.

### SES-DATA-PRINCIPLES-002 — Technology Neutrality
- **Status:** active
- **Level:** MUST
- **Applicability:** All applications
- Database standards MUST define required behavior independently of a specific database engine, ORM, query builder, or migration framework. Project Context MUST identify the implementation technology.

### SES-DATA-PRINCIPLES-003 — Referential Integrity
- **Status:** active
- **Level:** MUST
- **Applicability:** All relational implementations
- Foreign-key relationships MUST be explicitly represented where referential integrity is required.

## Baseline Components

Every application MUST provide these components:

- Users
- Organizations
- User Organizations
- Roles
- User Roles
- Permissions
- Role Permissions
- Groups
- User Groups
- Role Groups
- Activity Logs
- Application Config Definitions
- Application Config Values
- API Keys

Except for Activity Logs, baseline tables MUST use the Common Audit model.

## Migration Compatibility

Changes to this standard MUST follow the versioning and rule-change requirements in `standards/SPECIFICATION.md`. Material semantic changes require new rule IDs and migration guidance.

# Data Standards

**Database Standard Version:** 0.1.0

Standards for data modeling, databases, data integrity, migrations, and data lifecycle management.

## Structure

- `database-principles.md` — purpose, baseline provisioning, technology neutrality, and referential integrity.
- `common-audit.md` — Common Audit columns, Active/Inactive, Soft Delete, Restore, and Optimistic Concurrency.
- `identity.md` — Users, Organizations, Roles, Permissions, Groups, and their relationships.
- `activity-logging.md` — mandatory Activity Logs and sensitive-data protection requirements.
- `configuration.md` — Application Configuration Definitions and Values.
- `api-keys.md` — API Key generation, storage, validation, and lifecycle.
- `conventions.md` — naming, keys, constraints, indexes, timestamps, and JSON conventions.

## Baseline Components

Every application MUST provision these components from project initialization:

1. Users
2. Organizations
3. User Organizations
4. Roles
5. User Roles
6. Permissions
7. Role Permissions
8. Groups
9. User Groups
10. Role Groups
11. Activity Logs
12. Application Config Definitions
13. Application Config Values
14. API Keys

All baseline tables use the Common Audit model except Activity Logs, which use the dedicated append-only Activity Logging model.

## Design Boundary

This standard defines required behavior and baseline structure. It is intentionally technology-neutral. Database engine, ORM, migration framework, ID implementation, and other project-specific implementation details MUST be documented in Project Context.

## Versioning

This standard follows `standards/SPECIFICATION.md`. Material semantic changes require new rule IDs, changelog entries, and migration guidance where applicable.

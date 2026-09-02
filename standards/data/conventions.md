# Database Conventions

**Standard Version:** 0.1.0

## Naming

Relational identifiers SHOULD use `snake_case`, including table and column names. Foreign-key columns SHOULD use the referenced entity name followed by `_id`.

Examples:

- `user_id`
- `organization_id`
- `created_at`
- `deleted_by_component`

## Primary Keys

Every baseline entity table MUST have a primary key. The exact key type is project-defined; UUID and integer-based strategies are supported. The standard does not require a specific UUID generation implementation.

## Foreign Keys

Foreign-key relationships MUST be explicit where referential integrity is required. Foreign-key columns MUST use the same logical identifier type as the referenced primary key.

## Unique Constraints

Many-to-many relationship tables MUST prevent duplicate relationships. Organization-scoped entities MUST use organization-aware uniqueness where applicable, such as `UNIQUE(organization_id, name)` for Roles.

## Indexes

Indexes MUST support primary keys, unique constraints, foreign-key access patterns, and important application query patterns. Implementations SHOULD index fields used to enforce or efficiently apply Soft Delete filtering when supported by the database engine.

API Key prefixes MUST be indexed or otherwise efficiently searchable because they are used during authentication.

## Timestamps

Application timestamps SHOULD use a consistent timestamp representation and timezone strategy defined in Project Context. Standard timestamp fields represent actual event time, not client-provided arbitrary values.

## JSON Data

JSON/JSONB fields MAY be used where the standard explicitly permits them. Structured relational data SHOULD remain relational when it participates in integrity constraints or frequent relational queries.

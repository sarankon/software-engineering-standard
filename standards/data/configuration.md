# Application Configuration Standard

**Standard Version:** 0.1.0

All configuration tables use the Common Audit model.

## Configuration Definitions

Required fields:

- `id` — primary key.
- `name` — varchar(255), NOT NULL.
- `description` — text, NULL.
- `scope` — configuration scope identifier.
- `requires_restart` — boolean, NOT NULL, default `false`.
- `config_key` — varchar(255), UNIQUE, NOT NULL.
- `value_type` — varchar(30), NOT NULL.
- `default_value` — text/JSON/JSONB or project equivalent, NOT NULL.
- Common Audit columns.

## Configuration Values

Required fields:

- `id` — primary key.
- `definition_id` — FK to `application_config_definitions.id`, NOT NULL.
- `scope_type` — NOT NULL.
- `scope_id` — nullable according to scope.
- `config_value` — text/JSON/JSONB or project equivalent, NOT NULL.
- Common Audit columns.

Baseline scopes are:

- `APPLICATION`
- `ORGANIZATION`
- `USER`

For `APPLICATION`, `scope_id` is NULL. For `ORGANIZATION`, it identifies the organization. For `USER`, it identifies the user.

`value_type` MUST define how the stored value is interpreted. Project implementations MAY use native typed columns where appropriate, provided the behavior remains equivalent.

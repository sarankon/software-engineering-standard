# Activity Logging Standard

**Standard Version:** 0.1.0

## Mandatory Requirement

Activity Logging is a mandatory baseline capability. Every application MUST provision Activity Logs from project initialization and MUST implement logging for required auditable operations.

## Activity Log Fields

| Field | Type | Nullability |
|---|---|---:|
| `id` | UUID/integer/bigint | NOT NULL |
| `user_id` | same type as `users.id` | NULL |
| `user_agent` | text | NULL |
| `ip_address` | varchar(100) | NULL |
| `action` | varchar(100) | NOT NULL |
| `table_name` | varchar(100) | NOT NULL |
| `record_id` | varchar(255) | NOT NULL |
| `old_values` | JSON/JSONB or project equivalent | NULL |
| `new_values` | JSON/JSONB or project equivalent | NULL |
| `created_at` | timestamp | NOT NULL; default current time |

Activity Logs are historical events and are append-only under normal application operation. They do not use the Common Audit model.

## Actions

The baseline action vocabulary includes:

- `CREATE`
- `UPDATE`
- `DELETE`
- `DOWNLOAD`
- `VIEW`
- `RESTORE`

Projects MAY extend the vocabulary when needed, but SHOULD preserve the baseline meanings.

## Event Rules

Applications MUST create Activity Log entries for auditable create, update, delete, restore, download, and view operations where those operations are exposed. The event SHOULD identify the acting user when available, affected table/entity, record identifier, action, and relevant before/after values.

`old_values` and `new_values` MAY be NULL when an action does not have meaningful before/after state.

## Sensitive Data

Activity Logs MUST NOT contain secrets or sensitive credential/payment data. Passwords, password hashes, access tokens, refresh tokens, API key secrets, private keys, and full payment card numbers MUST be omitted or redacted before logging.

Sensitive-data protection is a security requirement and MUST be applied consistently across application components, not left to individual feature developers.

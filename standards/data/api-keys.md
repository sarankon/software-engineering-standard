# API Key Standard

**Standard Version:** 0.1.0

All API Key records use the Common Audit model.

## Required Fields

- `id` — primary key.
- `user_id` — FK to `users.id`, nullable.
- `name` — varchar(255), NOT NULL.
- `prefix` — varchar(30), NOT NULL.
- `key_hash` — varchar(255), NOT NULL.
- `is_active` — provided by Common Audit; default `true`.
- `expires_at` — timestamp, nullable.
- `last_used_at` — timestamp, nullable.
- `revoked_at` — timestamp, nullable.
- `revoked_by` — FK to `users.id`, nullable.
- Common Audit columns.

`expires_at` MAY be NULL, meaning the key has no database-enforced expiration. A Project MAY impose a maximum lifetime through application policy.

## Generation

The secret portion MUST be generated using a cryptographically secure random generator with at least 128 bits of entropy. The complete presented token SHOULD use the baseline form `sk_<prefix>_<secret>`.

The database MUST store the non-secret prefix and a cryptographic hash of the complete key. The secret MUST NOT be stored after issuance.

## Validation

For a presented Bearer token:

1. Extract the key prefix.
2. Locate the API Key record by prefix.
3. Hash the complete presented key using the standard hashing procedure.
4. Compare the result with `key_hash` using a secure comparison.
5. Validate active, revoked, and expiration state.
6. Authorize the associated user/application context.

The complete secret MUST be shown to the user only at issuance time.

## Lifecycle

API Keys MUST support active/inactive state and SHOULD support explicit revocation tracking through `revoked_at` and `revoked_by`. `last_used_at` SHOULD be updated when a key is successfully used, subject to the application's operational and performance requirements.

# Common Audit Standard

**Standard Version:** 1.0.0

## Scope

The Common Audit model is the default audit contract for baseline tables and application data tables that are mutable entities. Activity Logs use their own append-only model.

## Required Columns

| Column | Type | Nullability | Rule |
|---|---|---|---|
| `is_active` | boolean | NOT NULL | Business active/inactive state; default `true` |
| `is_active_before_delete` | boolean | NULL | Previous `is_active` state captured by Soft Delete |
| `version` | integer | NOT NULL | Optimistic concurrency version; starts at `1` |
| `created_at` | timestamp | NOT NULL | Creation timestamp; default current time |
| `created_by` | same type as `users.id` | NULL | User that created the record; FK to `users.id` |
| `created_by_component` | varchar(255) | NULL | Stable component identifier that created the record |
| `updated_at` | timestamp | NOT NULL | Last mutation timestamp; default current time |
| `updated_by` | same type as `users.id` | NULL | User that last updated the record; FK to `users.id` |
| `updated_by_component` | varchar(255) | NULL | Stable component identifier that last updated the record |
| `deleted_at` | timestamp | NULL | Soft-delete timestamp |
| `deleted_by` | same type as `users.id` | NULL | User that performed Soft Delete; FK to `users.id` |
| `deleted_by_component` | varchar(255) | NULL | Stable component identifier that performed Soft Delete |
| `audit_remark` | text | NULL | Audit/business reason; MUST NOT contain secrets |

## Component Identifiers

Component identifiers MUST use a stable logical identifier, such as `user-service`, `admin-api`, or `order-service`. They SHOULD NOT use implementation-specific class names, method names, or line-level identifiers.

## Active / Inactive

`is_active` represents business availability and MUST NOT be interpreted as deletion state. A record may be inactive without being deleted.

## Soft Delete

Soft Delete MUST NOT physically remove the record. It MUST set `is_active` to `false`, copy the current `is_active` value into `is_active_before_delete`, set `deleted_at` to the current time, and record `deleted_by` and `deleted_by_component` when available.

Normal reads MUST exclude Soft Deleted records using the equivalent of `deleted_at IS NULL`.

## Restore

Restore MUST clear `deleted_at`, `deleted_by`, `deleted_by_component`, and `is_active_before_delete`, while restoring `is_active` to the value captured before deletion.

## Optimistic Concurrency

`version` MUST start at `1` and MUST increment on every mutation: update, activate, deactivate, Soft Delete, and Restore. Updates MUST use the expected version as a concurrency check. A mutation that affects zero records because the expected version no longer matches MUST be treated as a concurrency conflict.

## Audit User Identity

`created_by`, `updated_by`, and `deleted_by` MUST use the same data type as `users.id`, MUST reference `users.id`, and MAY be NULL for system-initiated operations.

# Identity and Authorization Baseline

**Standard Version:** 1.0.0

All tables in this section use the Common Audit model.

## Users

Required fields:

- `id` — primary key; type is project-defined.
- `email` — varchar(255), UNIQUE, NOT NULL.
- `password_hash` — varchar(255), NOT NULL; plaintext passwords MUST NOT be stored.
- `first_name` — varchar(100), NULL.
- `last_name` — varchar(100), NULL.
- `is_admin` — boolean, NOT NULL, default `false`.
- Common Audit columns.

`is_admin` MUST NOT replace fine-grained permission checks where permissions are required.

## Organizations

Required fields:

- `id` — primary key.
- `name` — varchar(255), NOT NULL.
- `parent_organization_id` — nullable self-reference to `organizations.id`.
- Common Audit columns.

Organization names MUST be unique within the applicable organization scope defined by the project. A root organization has no parent.

## User Organizations

Required fields:

- `user_id` — FK to `users.id`, NOT NULL.
- `organization_id` — FK to `organizations.id`, NOT NULL.
- Common Audit columns.

Duplicate user/organization relationships MUST be prevented with a uniqueness constraint.

## Roles

Required fields:

- `id` — primary key.
- `organization_id` — FK to `organizations.id`, NOT NULL.
- `name` — varchar(255), NOT NULL.
- Common Audit columns.

Roles are Organization-scoped. Role names MUST be unique within an organization.

## User Roles

Required fields:

- `user_id` — FK to `users.id`, NOT NULL.
- `role_id` — FK to `roles.id`, NOT NULL.
- Common Audit columns.

Duplicate user/role relationships MUST be prevented with a uniqueness constraint.

## Permissions

Required fields:

- `id` — primary key.
- `name` — varchar(255), NOT NULL.
- `action_code` — varchar(255), UNIQUE, NOT NULL.
- Common Audit columns.

`action_code` SHOULD follow `resource.action`, such as `user.create` or `user.delete`.

## Role Permissions

Required fields:

- `role_id` — FK to `roles.id`, NOT NULL.
- `permission_id` — FK to `permissions.id`, NOT NULL.
- Common Audit columns.

Duplicate role/permission relationships MUST be prevented with a uniqueness constraint.

## Groups

Required fields:

- `id` — primary key.
- `organization_id` — FK to `organizations.id`, NOT NULL.
- `name` — varchar(255), NOT NULL.
- Common Audit columns.

Groups belong to an Organization. Group names SHOULD be unique within an organization.

## User Groups

Required fields:

- `user_id` — FK to `users.id`, NOT NULL.
- `group_id` — FK to `groups.id`, NOT NULL.
- Common Audit columns.

Duplicate user/group relationships MUST be prevented with a uniqueness constraint.

## Role Groups

Required fields:

- `role_id` — FK to `roles.id`, NOT NULL.
- `group_id` — FK to `groups.id`, NOT NULL.
- Common Audit columns.

A Role Group relationship grants the Role to members of the Group. Duplicate role/group relationships MUST be prevented with a uniqueness constraint.

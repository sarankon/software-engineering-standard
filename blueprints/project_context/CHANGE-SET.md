# Cross-Domain Change Set

**Schema Version:** 1.0.0

A Change Set groups Project Context records that describe one coherent change affecting multiple domains. It is a correlation mechanism, not a replacement for domain records.

See [`change-set-schema.md`](./change-set-schema.md) for the normative schema.

## When to Use

Create a Change Set when a logical change affects two or more domains, such as a decision that changes requirements, architecture, work items, problems, and history together.

## Rules

- Keep one canonical record in each affected domain.
- Link related records using the stable Change Set ID.
- Do not use Change Sets to infer user approval.
- A Change Set may remain open while implementation is in progress.
- A completed Change Set does not automatically mean all linked work is complete.

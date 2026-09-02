# Work Management Domain

Tracks project work as current state rather than as a historical source-code log.

## States

- `completed` — work that is finished.
- `in-progress` — work currently being performed.
- `next` — the work that should be considered immediately after current work, based on project context.
- `backlog` — valid work that is not currently prioritized for the immediate next step.
- `blocked` — work that cannot proceed until a dependency, decision, or external condition is resolved.

`next` MUST NOT be treated as a synonym for `backlog`.

Each item SHOULD have a stable ID, title, description, status, priority where relevant, provenance, and related context.

AI SHOULD update work state after meaningful development progress and SHOULD preserve user decisions about priorities unless explicitly instructed otherwise.

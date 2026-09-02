# Work Management Domain Schema

Records project work state. Work state is intentionally separated from Requirements and Problems.

## Work Item Record

```yaml
id: <stable-work-item-id>
title: <work item title>
record_state: confirmed | proposed | unknown | deprecated
work_state: completed | in-progress | next | backlog | blocked
source: user_decision | repository_analysis | ai_inference | external_reference
confidence: high | medium | low
type: feature | task | bugfix | refactor | research | migration | documentation | maintenance | other
priority: critical | high | medium | low
summary: <what needs to be done>
reason: <why the work matters>
acceptance_criteria: []
dependencies: []
blocked_by: []
related_to: []
owner: <person/team/AI or null>
created_at: <ISO-8601>
updated_at: <ISO-8601>
completed_at: <ISO-8601 or null>
```

## Record State vs. Work State

- `record_state` describes the knowledge record: `confirmed`, `proposed`, `unknown`, or `deprecated`.
- `work_state` describes execution state: `completed`, `in-progress`, `next`, `backlog`, or `blocked`.
- `completed`: work is finished and accepted as complete.
- `in-progress`: actively being worked on now.
- `next`: the intended next work after current work; not necessarily fully planned.
- `backlog`: valid future work without an immediate execution commitment.
- `blocked`: work cannot proceed because a dependency, decision, resource, or external condition is unresolved.

## Rules

- `next` MUST NOT be treated as synonymous with `backlog`.
- Only the project/user context should establish what is currently in progress; AI MUST NOT invent active work from stale commits.
- Completed work SHOULD retain enough context to understand what changed and why.
- Blocked items SHOULD reference the blocking condition when known.
- Work items SHOULD reference requirements, problems, decisions, or architecture when applicable.

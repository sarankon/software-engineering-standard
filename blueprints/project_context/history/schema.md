# History Domain Schema

Records significant changes to Project Context and project milestones. History is an audit trail, not a replacement for current context.

## Context Change Record

```yaml
id: <stable-history-id>
title: <change title>
change_type: context-update | domain-update | correction | migration | milestone
source: user_decision | repository_analysis | ai_inference | external_reference
summary: <what changed>
reason: <why it changed>
affected_domains: []
related_to: []
actor: user | ai | automated-process
occurred_at: <ISO-8601>
```

## Rules

- History entries SHOULD be append-only once recorded.
- Current truth belongs in the relevant domain; history records how it got there.
- AI SHOULD create a history entry for meaningful changes to confirmed context, especially decisions, standards, architecture, and project state.
- Routine formatting or non-substantive edits MAY be omitted.
- History MUST NOT be used to infer that an old value remains current.

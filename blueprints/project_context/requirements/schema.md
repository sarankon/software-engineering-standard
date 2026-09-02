# Requirements Domain Schema

Records what the project must, should, or may accomplish, including functional and non-functional requirements.

## Requirement Record

```yaml
id: <stable-requirement-id>
title: <requirement>
status: confirmed | proposed | unknown | deprecated
source: user_decision | repository_analysis | ai_inference | external_reference
confidence: high | medium | low
type: functional | non-functional | constraint | business | compliance | technical
priority: critical | high | medium | low
statement: <testable requirement statement>
rationale: <why it is needed>
acceptance_criteria: []
constraints: []
related_to: []
created_at: <ISO-8601>
updated_at: <ISO-8601>
```

## Rules

- Requirements SHOULD be written so that compliance can be evaluated.
- AI MUST NOT infer a business requirement solely from an implementation detail.
- Repository observations about existing behavior MAY be recorded as evidence, but must not automatically become desired requirements.
- `deprecated` means the requirement is no longer applicable to the project.
- Implementation tasks belong in Work Management, not Requirements.

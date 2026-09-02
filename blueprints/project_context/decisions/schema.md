# Decisions Domain Schema

Records decisions that establish project direction. A decision is different from a fact: it explains what the project chose to do and why.

## Decision Record

```yaml
id: <stable-decision-id>
title: <decision title>
record_state: confirmed | proposed | unknown | deprecated
source: user_decision | repository_analysis | ai_inference | external_reference
confidence: high | medium | low
category: architecture | technology | data | security | product | operations | process | other
context: <situation requiring a decision>
problem: <problem or question>
decision: <chosen approach>
rationale: <reason for choosing it>
alternatives:
  - option: <alternative>
    reason_rejected: <reason>
consequences:
  positive: []
  negative: []
  risks: []
review_conditions: []
related_to: []
decided_at: <ISO-8601>
created_at: <ISO-8601>
updated_at: <ISO-8601>
```

## Rules

- A confirmed user decision is protected project knowledge.
- AI MUST NOT replace a confirmed decision because another approach appears preferable; it must surface the conflict and request a new decision.
- `repository_analysis` may establish that a decision is implemented, but implementation alone does not prove why it was chosen.
- A materially changed decision SHOULD receive a new ID unless the project explicitly treats it as an amendment to the same decision.
- Related requirements, architecture, technology, and problems SHOULD be referenced by stable IDs.

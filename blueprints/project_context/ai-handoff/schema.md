# AI Handoff Domain Schema

Provides a compact operational snapshot for a new or returning AI agent. It is a derived summary, not the canonical source of project knowledge.

## Handoff Record

```yaml
id: handoff
status: confirmed | proposed | unknown | deprecated
source: repository_analysis | user_decision | ai_inference
current_understanding: |
  <concise current understanding>
current_focus: <what AI should focus on now>
important_context: []
open_questions: []
recommended_next_actions: []
active_constraints: []
last_reviewed_at: <ISO-8601>
updated_at: <ISO-8601>
related_to: []
```

## Rules

- `ai-handoff` is a navigation and continuity aid; canonical facts MUST remain in their domain records.
- AI MUST NOT treat a handoff summary as authoritative when it conflicts with a confirmed domain record.
- `open_questions` SHOULD contain unresolved decisions or missing information that the next AI should not guess.
- `recommended_next_actions` are recommendations, not user-approved work commitments. Approved work belongs in Work Management.
- AI SHOULD refresh the handoff after substantial project-context changes.

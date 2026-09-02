# Project Rules Domain Schema

Records rules that apply specifically to this project in addition to the global Software Engineering Standard.

## Project Rule Record

```yaml
id: <stable-project-rule-id>
title: <rule title>
record_state: confirmed | proposed | unknown | deprecated
source: user_decision | repository_analysis | ai_inference | external_reference
confidence: high | medium | low
type: convention | constraint | exception | policy | workflow | integration | other
level: MUST | MUST_NOT | SHOULD | SHOULD_NOT | MAY
requirement: <rule statement>
rationale: <why this project needs the rule>
exceptions: []
verification: <how AI can verify compliance>
related_to: []
created_at: <ISO-8601>
updated_at: <ISO-8601>
```

## Rules

- Project Rules MUST NOT silently override the global Software Standard.
- Exceptions to a global standard SHOULD explicitly reference the affected standard rule ID and record rationale.
- Project-specific conventions belong here; reusable organization-wide rules belong in Software Standard.
- AI SHOULD check applicable Project Rules before making implementation recommendations.

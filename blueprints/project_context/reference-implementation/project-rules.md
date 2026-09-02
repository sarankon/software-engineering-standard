# Project Rules

```yaml
id: project-rules/logging
status: confirmed
source: user_decision
confidence: high
content:
  rule: Application logs must include a correlation identifier when a request or operation can cross module or process boundaries.
  exceptions:
    - local one-off diagnostic scripts may omit the identifier.
  rationale: Improve traceability during investigation.
created_at: 2026-09-02T00:00:00Z
updated_at: 2026-09-02T00:00:00Z
related_to:
  - problem/observability-001
```

Project-specific rules supplement the applicable Software Engineering Standard. They do not silently override global MUST rules.

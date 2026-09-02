# Blocked Work

Use this file for work that cannot proceed until a dependency, decision, or external condition is resolved.

```yaml
id: WORK-005
title: <blocked work>
record_state: confirmed
work_state: blocked
source: user_decision | repository_analysis | ai_inference | external_reference
content: |
  <work description>
blocked_by: |
  <dependency, decision, or condition preventing progress>
related_to:
  - <domain>/<id>
```

AI SHOULD state what would unblock the item whenever that is known.

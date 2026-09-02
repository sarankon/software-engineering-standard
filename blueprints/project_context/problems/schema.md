# Problems Domain Schema

Records known problems, technical debt, risks, limitations, and unresolved discrepancies.

## Problem Record

```yaml
id: <stable-problem-id>
title: <problem title>
status: confirmed | proposed | unknown | deprecated
source: user_decision | repository_analysis | ai_inference | external_reference
confidence: high | medium | low
type: defect | technical-debt | risk | limitation | discrepancy | security | performance | operational | other
severity: critical | high | medium | low
summary: <problem description>
impact: <effect on project>
evidence: []
workaround: <known workaround or null>
root_cause: <known cause or null>
resolution: <resolved approach or null>
related_to: []
identified_at: <ISO-8601>
resolved_at: <ISO-8601 or null>
created_at: <ISO-8601>
updated_at: <ISO-8601>
```

## Rules

- `status: confirmed` means the problem itself is established, not necessarily that its root cause is known.
- Unknown root causes MUST remain unknown rather than being fabricated.
- A discrepancy between repository implementation and a confirmed decision SHOULD be recorded here when it needs tracking.
- Resolved problems SHOULD retain their historical record rather than being deleted.
- Work required to resolve a problem belongs in Work Management and SHOULD reference the problem ID.

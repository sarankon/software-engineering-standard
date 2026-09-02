# Problems

```yaml
id: problem/observability-001
status: confirmed
source: repository_analysis
confidence: high
content:
  title: Order processing lacks a consistent correlation identifier in application logs.
  impact: Related log entries are harder to trace across request boundaries.
  severity: medium
  workaround: Use request timestamps and endpoint information during investigation.
  suspected_root_cause: Logging conventions are not applied consistently across modules.
created_at: 2026-09-02T00:00:00Z
updated_at: 2026-09-02T00:00:00Z
related_to:
  - project-rules/logging
```

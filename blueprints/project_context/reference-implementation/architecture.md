# Architecture

```yaml
id: architecture/application
record_state: confirmed
source: repository_analysis
confidence: high
content:
  style: modular_service
  boundaries:
    - api
    - application
    - domain
    - infrastructure

---
id: architecture/order-processing
record_state: confirmed
source: user_decision
confidence: high
content:
  summary: Order creation is handled synchronously by the API in the current release.
  future_direction: Asynchronous processing may be introduced when processing volume requires it.
created_at: 2026-09-02T00:00:00Z
updated_at: 2026-09-02T00:00:00Z
related_to:
  - technology/message-queue
  - requirements/order-processing
```

## Notes

The current synchronous behavior is a fact. The future asynchronous direction is a confirmed decision only because the example explicitly attributes it to a user decision; implementation remains subject to future work.

# Technology

```yaml
id: technology/runtime
record_state: confirmed
source: repository_analysis
confidence: high
content:
  category: runtime
  name: Node.js
  version: "22.x"
  purpose: Application runtime

---
id: technology/database
record_state: confirmed
source: repository_analysis
confidence: high
content:
  category: database
  name: PostgreSQL
  purpose: Primary relational data store

---
id: technology/message-queue
record_state: proposed
source: ai_inference
confidence: medium
content:
  category: messaging
  name: Message queue
  purpose: Candidate mechanism for future asynchronous order processing
created_at: 2026-09-02T00:00:00Z
updated_at: 2026-09-02T00:00:00Z
related_to:
  - architecture/order-processing
  - requirements/order-processing
```

## Notes

The first two records are observed technologies. The message queue is deliberately marked `proposed` because the repository does not establish it as a confirmed technology.

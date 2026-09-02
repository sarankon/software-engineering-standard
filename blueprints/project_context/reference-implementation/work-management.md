# Work Management

## Completed

```yaml
id: work/001
status: confirmed
source: repository_analysis
confidence: high
content:
  title: Implement customer CRUD API
  completed_at: 2026-08-20T00:00:00Z
```

## In Progress

```yaml
id: work/002
status: confirmed
source: user_decision
confidence: high
content:
  title: Complete order lifecycle API
  progress: Implemented create and retrieve; update and cancellation remain.
```

## Next

```yaml
id: work/003
status: confirmed
source: user_decision
confidence: high
content:
  title: Add order cancellation endpoint
  reason: Required to complete the current order lifecycle scope.
```

## Backlog

```yaml
id: work/004
status: proposed
source: ai_inference
confidence: medium
content:
  title: Introduce asynchronous order processing evaluation
  reason: Revisit when order processing volume or latency indicates a need.
```

## Blocked

```yaml
id: work/005
status: confirmed
source: user_decision
confidence: high
content:
  title: Production performance test
  blocker: Production-like dataset is not yet available.
```

## State Rules

`Next` contains work expected to follow the current focus. `Backlog` contains accepted or proposed future work without an immediate commitment. `Blocked` contains work that cannot currently proceed because of an explicit blocker.

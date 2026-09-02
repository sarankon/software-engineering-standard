# Architecture Domain Schema

Records the project's structural architecture, components, boundaries, data flows, and integration relationships without duplicating source code.

## Architecture Record

```yaml
id: <stable-architecture-id>
title: <architecture concept>
record_state: confirmed | proposed | unknown | deprecated
source: user_decision | repository_analysis | ai_inference | external_reference
confidence: high | medium | low
type: system | component | boundary | data-flow | integration | deployment | pattern | constraint | other
summary: <concise description>
responsibilities: []
inputs: []
outputs: []
dependencies: []
constraints: []
related_to: []
created_at: <ISO-8601>
updated_at: <ISO-8601>
```

## Component Extension

For a component, the following MAY be added:

```yaml
component_type: service | module | application | worker | library | infrastructure | other
owned_by: <team or project area>
interface_summary: <high-level interface description>
data_owned: []
```

## Rules

- Architecture records describe responsibilities and relationships, not source-code listings.
- Each major architectural boundary SHOULD have a stable record.
- AI SHOULD distinguish observed architecture from intended architecture.
- If implementation differs from a confirmed architectural decision, record the discrepancy rather than silently rewriting the decision.
- Cross-domain references SHOULD point to technology, decisions, requirements, or problems where appropriate.

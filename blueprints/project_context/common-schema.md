# Project Context Common Schema

This document provides the canonical conceptual shape for a Project Context item. Domains may add domain-specific fields, but SHOULD reuse these common semantics.

```yaml
id: <stable-domain-identifier>
title: <human-readable-title>
status: confirmed | proposed | unknown | deprecated
source: user_decision | repository_analysis | ai_inference | external_reference
confidence: high | medium | low
content: |
  <context information>
created_at: <ISO-8601 timestamp>
updated_at: <ISO-8601 timestamp>
related_to:
  - <domain>/<id>
```

## Field Rules

### `id`

Stable within the domain. Prefer semantic, readable IDs where practical. An ID SHOULD NOT be reused for a different meaning.

### `title`

Short and descriptive. Titles MAY change without changing the semantic identity of the record.

### `status`

Uses the statuses defined by `SPECIFICATION.md`.

### `source`

Identifies where the information originated. For important records, provenance SHOULD be specific enough for AI to explain why the record exists.

### `confidence`

Recommended for AI-generated inference. It is not a replacement for `status`.

### `content`

Contains the domain-specific information. It SHOULD describe facts and decisions clearly and avoid embedding source code unless a short code fragment is essential to explain a concept.

### `related_to`

References other Project Context records using `domain/id` notation where cross-domain relationships are useful.

## Domain Extension

A domain MAY define additional fields. Extensions MUST:

1. have an unambiguous meaning;
2. not redefine the meaning of common fields;
3. document required/optional status;
4. remain readable by AI agents that understand the base schema.

## Recommended AI Record Pattern

```yaml
id: DEC-ARCH-001
title: Use asynchronous processing for report generation
status: confirmed
source: user_decision
content: |
  Report generation runs asynchronously because large reports may exceed
  normal request execution limits.
related_to:
  - architecture/reporting
  - technology/message-queue
```

The example is illustrative only; domain-specific ID conventions may be defined later.

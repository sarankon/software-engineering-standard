# Technology Domain Schema

Records technologies and technical dependencies that materially describe how the project is built or operated.

## Technology Record

```yaml
id: <stable-technology-id>
title: <technology name>
status: confirmed | proposed | unknown | deprecated
source: user_decision | repository_analysis | ai_inference | external_reference
confidence: high | medium | low
category: language | framework | runtime | database | cache | messaging | infrastructure | cloud | library | tool | external-service | other
name: <technology>
version: <version or range>
purpose: <why it is used>
environment: development | test | staging | production | all | unknown
criticality: critical | important | normal | optional
constraints: []
related_to: []
created_at: <ISO-8601>
updated_at: <ISO-8601>
```

## Rules

- Repository analysis SHOULD record versions from authoritative project configuration where available.
- Do not infer an exact version when evidence only establishes a major/minor family.
- `deprecated` means the project no longer intends to use the technology; it does not mean the package is globally deprecated.
- Technology records describe usage and rationale, not package-lock contents.
- Detailed dependency inventories MAY be generated separately later; this schema stores context-level technology knowledge.

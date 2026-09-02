# Software Standard Schemas

These schemas define the structure of reusable Software Standards and individual normative requirements.

## S1 — Standard Schema

- `standard-schema.md` — Standard collection metadata, governance, scope, applicability, validation, exceptions, and project-consumption boundary.
- `requirement-schema.md` — individual requirement structure and assessment semantics.

The existing `standards/SPECIFICATION.md` remains the authoritative rule-format specification for the current standard corpus. S1 intentionally avoids rewriting existing rules.

## Version Policy

Schema versions are currently `1.0.0` and remain pre-production until validated against real projects.

## Design Boundary

S1 defines the canonical Standard data model. It does not yet define concrete Security, Database, UI, API, Audit, or Logging rules, nor the full Project Standard Profile schema.

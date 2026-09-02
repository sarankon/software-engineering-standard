# Engineering Principles Standard

**Standard ID:** `SES-PRI`
**Version:** `0.1.0`
**Record State:** `confirmed`
**Lifecycle State:** `draft`
**Category:** Engineering Principles
**Applicability:** All SES-enabled software projects.

## Purpose
Provide technology-neutral principles that guide decisions when detailed standards do not prescribe an implementation.

## Rules

### SES-PRI-001 — User and business value
**Level:** MUST

Engineering decisions MUST serve an identified user, business, operational, or system need.

### SES-PRI-002 — Simplicity
**Level:** SHOULD

Solutions SHOULD prefer the simplest design that satisfies current requirements and applicable standards.

### SES-PRI-003 — Explicit assumptions
**Level:** MUST

Material assumptions, constraints, and unknowns MUST be made explicit in Project Context or the relevant design artifact.

### SES-PRI-004 — Separation of concerns
**Level:** MUST

Responsibilities with materially different reasons to change MUST be separated sufficiently to preserve maintainability and testability.

### SES-PRI-005 — Single source of truth
**Level:** MUST

A fact or decision MUST have one canonical owner; derived representations MUST reference rather than silently redefine it.

### SES-PRI-006 — Reversible decisions
**Level:** SHOULD

Where practical, decisions SHOULD preserve a reasonable path to change without unnecessary migration cost.

### SES-PRI-007 — Evidence-based decisions
**Level:** SHOULD

Material technical decisions SHOULD be supported by repository evidence, requirements, measurements, or explicitly recorded assumptions.

### SES-PRI-008 — Controlled exceptions
**Level:** MUST

Deviations from a normative Standard MUST be explicit, scoped, justified, and recorded as an exception.

## Verification / Evidence
AI SHOULD identify the applicable principle, decision or artifact, evidence, confidence, and unresolved assumptions.

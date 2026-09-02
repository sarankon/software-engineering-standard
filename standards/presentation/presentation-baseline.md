# Presentation Standard

**Standard ID:** `SES-PRE`
**Version:** `1.0.0`
**Record State:** `confirmed`
**Lifecycle State:** `draft`
**Category:** Presentation
**Applicability:** User-facing web, mobile, desktop, and administrative interfaces.

## Purpose
Define baseline UI, interaction, accessibility, responsiveness, and user feedback behavior.

## Rules

### SES-PRE-001 — Consistent interface
**Level:** MUST
Interfaces MUST use consistent layouts, controls, terminology, and shared patterns where the same interaction exists.

### SES-PRE-002 — Clear states
**Level:** MUST
Interactive views MUST represent relevant loading, empty, success, error, and disabled states.

### SES-PRE-003 — Action clarity
**Level:** MUST
Destructive, irreversible, or materially consequential actions MUST be distinguishable and appropriately confirmed.

### SES-PRE-004 — Form behavior
**Level:** MUST
Forms MUST identify required inputs, validate user input, preserve useful entered data when possible, and present actionable errors.

### SES-PRE-005 — Feedback
**Level:** MUST
User actions that can take noticeable time or change system state MUST provide appropriate feedback.

### SES-PRE-006 — Accessibility
**Level:** MUST
User-facing functionality MUST satisfy the applicable accessibility baseline, including keyboard operation, semantic structure, labels, focus, and meaningful error feedback.

### SES-PRE-007 — Responsive behavior
**Level:** SHOULD
Interfaces SHOULD remain usable across supported viewport sizes and input methods.

### SES-PRE-008 — Presentation/business separation
**Level:** MUST
Presentation code MUST NOT become the authoritative owner of business rules that belong in application or domain logic.

## Verification / Evidence
Use UI source, shared components, interaction tests, accessibility checks, responsive checks, and visual review.

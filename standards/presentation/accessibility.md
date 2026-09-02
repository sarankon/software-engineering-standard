# Accessibility Standard

**Status:** draft

## Purpose

Define principles that enable system presentation to be usable by people with different abilities, limitations, and interaction methods without mandating a specific accessibility standard or tool as universally required.

## Scope

Applies to user-facing interfaces and interactions that are under the system's control.

## Rules

### SES-PRESENTATION-011 — Accessible interaction

**Requirement:** Primary actions MUST be accessible through appropriate interaction methods supported by the system and MUST NOT depend on a single interaction method without a justified reason.

**Rationale:** Users may interact with the system through different input methods and assistive technologies.

### SES-PRESENTATION-012 — Perceivable information

**Requirement:** Important information or states MUST NOT rely on a single perception channel when suitable alternatives are available.

**Rationale:** This reduces barriers for users who cannot perceive information through one particular channel.

### SES-PRESENTATION-013 — Meaningful focus and navigation

**Requirement:** Navigation and focus order MUST align with the structure and meaningful sequence of the user's task.

**Rationale:** Users need to understand their current position and continue their task predictably.

### SES-PRESENTATION-014 — Accessible feedback and errors

**Requirement:** Feedback, validation, and error information necessary to complete a task MUST be perceivable and understandable through the access methods supported by the system.

**Rationale:** Information needed to understand and correct a problem must not be hidden from users because of their access method.

## Verification

Review representative flows using the interaction methods supported by the system. Check focus and navigation, state communication, labels, errors, and the perception of important information.

## Exceptions

Exceptions MUST identify the system constraint, user impact, and clear justification.

## Migration

Prioritize improvements according to flow importance, number of affected users, and severity of the accessibility barrier.

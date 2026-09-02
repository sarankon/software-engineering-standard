# User Interface Standard

Status: Draft

## Purpose

Define technology-independent requirements for user-facing interfaces so that presentation is consistent, understandable, maintainable, and aligned with the system's visual and interaction language.

## Scope

This standard applies to presentation-layer interfaces and other system areas directly visible to or interacted with by users.

## Rules

### SES-PRESENTATION-001 — Interface intent

**Requirement**

User interfaces MUST have a clear purpose and an understandable priority of information and actions.

**Rationale**

Users should be able to understand what the screen is for and what actions matter without unnecessary cognitive effort.

**Good Example**

A form clearly identifies its purpose, required information, primary action, and relevant supporting information.

**Bad Example**

A screen presents multiple actions with similar visual importance even though only one is the primary task.

**Verification**

Review representative screens and user journeys for clear purpose, hierarchy, and action priority.

**Exceptions**

Document cases where domain or operational constraints require a different presentation.

**Migration**

Prioritize screens with high usage, high business impact, or frequent user confusion.

### SES-PRESENTATION-002 — Consistent behavior

**Requirement**

UI elements with the same meaning or purpose MUST behave consistently across the system unless a documented reason requires different behavior.

**Rationale**

Consistent behavior reduces learning effort and prevents users from having to relearn interactions between screens.

**Good Example**

The same type of save action uses the same interaction pattern and feedback throughout the application.

**Bad Example**

Two controls with the same purpose require different interaction steps on different screens without a meaningful reason.

**Verification**

Compare repeated interaction patterns across representative screens and workflows.

**Exceptions**

Different behavior is permitted when the user task, risk, or context materially differs and the difference is justified.

**Migration**

Identify the most frequently repeated patterns and standardize them first.

### SES-PRESENTATION-003 — Shared UI components and patterns

**Requirement**

When the same UI component or interaction pattern is used in more than one location, the system MUST use a shared reusable component or shared presentation pattern rather than independent implementations, unless reuse would create materially inappropriate coupling.

Changes to behavior or presentation that are intentionally shared MUST be maintainable from the shared definition rather than duplicated across consumers.

**Rationale**

Shared components improve consistency, reduce duplication, and allow common behavior or presentation to be changed from a central definition.

**Good Example**

A button, form control, dialog, or other repeated UI pattern is implemented once as a shared component and reused by multiple screens.

**Bad Example**

Multiple screens independently implement visually and behaviorally equivalent controls and require separate changes to maintain consistency.

**Verification**

Review repeated UI patterns and confirm that shared patterns are reused and that shared behavior can be changed centrally.

**Exceptions**

A repeated pattern MAY remain local when sharing would create inappropriate coupling, materially reduce clarity, or introduce unnecessary abstraction. The reason should be documented when the decision is significant.

**Migration**

Prioritize duplicated patterns that are widely used, frequently changed, or visually/behaviorally inconsistent.

### SES-PRESENTATION-004 — Theme-aligned controls

**Requirement**

Browser- or platform-provided default controls that are visible to users MUST be presented consistently with the system's visual language and theme when the system can control their presentation.

**Rationale**

Default controls can introduce inconsistent appearance and interaction cues that make the interface feel fragmented.

**Good Example**

Text inputs, text areas, selects, checkboxes, radio controls, date/time controls, file inputs, and similar controls are styled and presented consistently with the system theme while preserving their intended semantics and usability.

**Bad Example**

A page uses heavily customized buttons and visual components while leaving native form controls with unrelated default styling that visibly conflicts with the system theme.

**Verification**

Review representative native and browser-provided controls for visual consistency, usability, and preservation of expected semantics.

**Exceptions**

Platform constraints, accessibility requirements, or user-agent behavior MAY limit customization. Such constraints should not be bypassed at the expense of usability or accessibility.

**Migration**

Prioritize controls that are widely used or most visibly inconsistent with the system theme.

### SES-PRESENTATION-005 — Clear state

**Requirement**

Important UI states such as loading, success, failure, unavailable, empty, and in-progress states MUST be communicated when they affect user decisions or work.

**Rationale**

Users need to understand what the system is doing and what state their work is in.

**Good Example**

A data-loading state is visible while content is being retrieved, and an empty state explains when there is no data.

**Bad Example**

A user submits an action but the interface gives no indication whether processing has started, completed, or failed.

**Verification**

Review state transitions in representative workflows.

**Exceptions**

Trivial or instantaneous state changes MAY not require explicit presentation when they do not affect user understanding.

**Migration**

Prioritize ambiguous states that can cause duplicate actions, data loss, or user uncertainty.

### SES-PRESENTATION-006 — User feedback

**Requirement**

Significant user actions MUST provide appropriate and timely feedback.

**Rationale**

Feedback confirms that the system received the user's action and communicates the outcome.

**Good Example**

After a successful save, the interface clearly communicates success and the resulting state.

**Bad Example**

The user clicks Save and receives no indication whether the action was accepted.

**Verification**

Review significant actions for acknowledgement, progress, and outcome feedback.

**Exceptions**

No explicit feedback MAY be used when the resulting state is immediate, obvious, and unambiguous.

**Migration**

Prioritize actions that modify data, trigger external effects, or may take noticeable time.

### SES-PRESENTATION-007 — Prevent avoidable errors

**Requirement**

The interface SHOULD prevent or warn about predictable user errors before they cause significant impact.

**Rationale**

Preventing predictable errors is generally safer and more efficient than requiring users to recover from them afterward.

**Good Example**

The interface validates an invalid value before allowing a consequential operation.

**Bad Example**

The interface accepts an obviously invalid value and only reports the problem after an irreversible action.

**Verification**

Review representative workflows for predictable error paths and prevention opportunities.

**Exceptions**

Prevention MAY be limited where it would interfere with legitimate expert workflows or where validation cannot reasonably be performed at that stage.

**Migration**

Prioritize errors that can cause data loss, irreversible actions, security impact, or significant user effort.

### SES-PRESENTATION-008 — Safe destructive actions

**Requirement**

Destructive or difficult-to-reverse actions MUST provide appropriate confirmation or other protective interaction unless the action is demonstrably low-risk and the interaction is intentionally designed for efficient repeated use.

**Rationale**

Users should have an opportunity to avoid consequential mistakes without creating unnecessary friction for low-risk actions.

**Good Example**

Deleting important data requires an explicit confirmation appropriate to the risk.

**Bad Example**

A high-impact destructive action can be triggered accidentally by a single ambiguous click.

**Verification**

Review destructive and difficult-to-reverse workflows according to their impact and reversibility.

**Exceptions**

Documented low-risk, reversible, or high-frequency workflows MAY use a lower-friction interaction when the risk is acceptable.

**Migration**

Prioritize irreversible or high-impact actions.

### SES-PRESENTATION-009 — Responsive presentation

**Requirement**

User interfaces MUST remain usable across the supported context constraints of the system, including relevant screen sizes, input methods, and display modes.

**Rationale**

A usable interface must accommodate the contexts that the system intentionally supports.

**Good Example**

A supported mobile or narrow-screen workflow remains readable and operable without unnecessary horizontal scrolling or inaccessible controls.

**Bad Example**

A supported screen size causes primary actions or important information to become inaccessible.

**Verification**

Review representative workflows across supported contexts and interaction methods.

**Exceptions**

Unsupported contexts MAY be excluded when the system explicitly defines and communicates its supported scope.

**Migration**

Prioritize primary workflows and contexts with significant usage or business impact.

### SES-PRESENTATION-010 — Accessibility

**Requirement**

User interfaces MUST avoid creating preventable accessibility barriers within the system's scope and constraints.

**Rationale**

Accessibility is necessary for equitable and reliable use of the system.

**Good Example**

Primary actions, form controls, status messages, and navigation are usable through supported access methods and have understandable semantics.

**Bad Example**

A critical action is available only through a visual interaction with no supported alternative.

**Verification**

Review representative flows using supported interaction methods and accessibility checks defined by the system.

**Exceptions**

Document genuine technical or domain constraints and the resulting user impact.

**Migration**

Prioritize critical workflows and barriers that prevent task completion.

### SES-PRESENTATION-011 — Content clarity

**Requirement**

User-facing text, labels, instructions, and guidance MUST be clear and MUST match actual system behavior.

**Rationale**

Misleading or ambiguous content creates avoidable errors and reduces trust.

**Good Example**

A button label describes the action that actually occurs when it is selected.

**Bad Example**

A label says an action will save a draft while the system actually publishes the content.

**Verification**

Review representative UI content against actual behavior and user tasks.

**Exceptions**

Domain terminology MAY be used when it is necessary and understandable to the intended users.

**Migration**

Prioritize high-impact actions, errors, and instructions that frequently cause confusion.

### SES-PRESENTATION-012 — Separation from business behavior

**Requirement**

Presentation logic MUST NOT unnecessarily scatter important business rules and SHOULD separate display concerns from domain behavior.

**Rationale**

Keeping business behavior out of presentation-specific implementations improves maintainability, consistency, and testability.

**Good Example**

The UI presents state and invokes domain behavior while important business decisions remain owned by appropriate domain or application logic.

**Bad Example**

Multiple screens independently implement the same business rule in UI event handlers.

**Verification**

Review presentation implementations for duplicated or important business rules that could be centralized elsewhere.

**Exceptions**

Simple presentation-only conditions MAY remain in the presentation layer when they do not represent reusable business behavior.

**Migration**

Prioritize duplicated business rules and logic whose divergence can cause inconsistent outcomes.

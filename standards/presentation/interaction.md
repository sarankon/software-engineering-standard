# Interaction Standard

Status: Draft

## Purpose

Define technology-independent requirements for user interaction behavior, especially forms, data presentation, feedback, and state-dependent actions.

## Scope

This standard applies to user interactions within presentation-layer interfaces, including data-entry forms, tabular data, actions that change state, and user notifications.

## Rules

### SES-PRESENTATION-013 — Paginated tabular data

**Requirement**

User-facing tables or equivalent tabular data views MUST provide pagination when the dataset can exceed a reasonable amount of information for a single view, unless an alternative interaction is explicitly justified.

**Rationale**

Pagination keeps large datasets manageable and prevents overwhelming the user or the interface.

**Good Example**

A table displays a bounded number of rows and provides clear navigation to additional pages.

**Bad Example**

A large dataset is rendered as one continuously growing table with no mechanism to navigate or manage the result set.

**Verification**

Review representative table views with realistic dataset sizes and confirm that users can navigate results effectively.

**Exceptions**

Small, bounded datasets MAY be displayed without pagination. Alternative mechanisms MAY be used when they provide an equivalent or better experience for the task.

**Migration**

Prioritize tables that routinely display large or growing datasets.

### SES-PRESENTATION-014 — In-place form completion

**Requirement**

After successfully creating or updating data from a form, the interface SHOULD retain the user in the current workflow rather than redirecting to another screen when there is no clear task-related reason to navigate away.

The resulting saved state, including the saved date/time when relevant, MUST be communicated in the same workflow.

**Rationale**

Keeping the user in context reduces unnecessary navigation and makes the result of the operation clear.

**Good Example**

After Save, the form remains visible, the saved state is reflected, and the last-saved date/time is shown near the Save/Update action when applicable.

**Bad Example**

After every successful Save, the system redirects to a list screen even though the user is expected to continue editing the same record.

**Verification**

Review create and update workflows and confirm that successful completion, resulting state, and relevant saved time are clear without unnecessary navigation.

**Exceptions**

Navigation MAY occur when the next screen is required to complete the task, when the user explicitly requests it, or when a documented workflow requires it.

**Migration**

Prioritize frequently used create/edit workflows and workflows where users commonly perform repeated edits.

### SES-PRESENTATION-015 — Action availability and form completeness

**Requirement**

Save, Update, or equivalent consequential form-submission actions MUST NOT be enabled when the form has no changes to save or when required information needed for a valid submission has not been provided.

The interface SHOULD communicate what prevents the action when the reason is not already obvious.

**Rationale**

Preventing invalid or meaningless submissions reduces errors and gives users a clear representation of the current form state.

**Good Example**

Update is disabled until a change is made; Save remains unavailable while a required field is incomplete.

**Bad Example**

The Save button remains enabled with an empty required field and only fails after the user submits.

**Verification**

Test unchanged, partially completed, valid, and invalid form states and verify action availability.

**Exceptions**

An action MAY remain enabled when the operation itself performs meaningful work without data changes or when disabling it would prevent a legitimate workflow. The reason should be documented when significant.

**Migration**

Prioritize forms that modify important data or commonly produce validation errors.

### SES-PRESENTATION-016 — Required-field indication

**Requirement**

Required fields MUST have a consistent visual indication, including a red asterisk (`*`) or equivalent clearly visible marker, and MUST also expose the required state through appropriate semantic or accessible information where supported.

The indication MUST be applied consistently across the system.

**Rationale**

Users need to recognize required information before and during data entry, including users who cannot rely on color alone.

**Good Example**

A required field label consistently displays a red `*`, while the field also exposes its required state through appropriate semantics.

**Bad Example**

Some screens use a red asterisk, others use no indication, and others rely only on a color difference.

**Verification**

Review representative forms for consistent visual and semantic required-field indication.

**Exceptions**

A different equivalent visual marker MAY be used when required by the system's design language or accessibility constraints, provided the required state remains clear and consistent.

**Migration**

Prioritize commonly used forms and fields where users frequently miss required information.

### SES-PRESENTATION-017 — User notifications

**Requirement**

The interface MUST provide an appropriate modal, toast, inline message, or equivalent user notification when an action requires explicit user awareness of an important outcome, warning, error, confirmation, or state change.

Notifications MUST be appropriate to the importance and persistence of the information and MUST NOT unnecessarily interrupt the user.

**Rationale**

Users need reliable feedback about important outcomes without being overwhelmed by unnecessary interruptions.

**Good Example**

A successful save uses a concise non-blocking notification, while a high-risk destructive action uses an explicit confirmation dialog.

**Bad Example**

An important failure occurs with no user-visible notification, or every minor interaction opens a blocking modal.

**Verification**

Review significant actions, warnings, errors, confirmations, and state changes for appropriate user-visible notification behavior.

**Exceptions**

A separate modal or toast MAY not be necessary when the resulting state is already immediately and unambiguously visible in context.

**Migration**

Prioritize failures, destructive actions, data-changing operations, and outcomes that users could otherwise miss.

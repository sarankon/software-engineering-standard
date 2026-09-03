# Project Onboarding Procedure

**Procedure Version:** 1.0.0
**Status:** Active

## Purpose

Define the standard workflow for AI to initialize, reconstruct, assess, or update the Software Engineering Standard context of a project.

## Operating Model

AI is the primary reader and writer. AI is also the execution engine for Framework operations, including installation, upgrade, migration, and validation. The user is the decision and authorization boundary.

AI MUST explain proposed project changes and wait for explicit user approval before applying material changes.

No separate Automated Bootstrap Runner or Framework Runtime Runner is required by the Framework.

## Onboarding Flow

`Prompt → Discover Framework → Identify Versions → Inspect Repository → Reconstruct/Update Project Context → Profile → Assessment → Report Findings → Propose Changes → User Decision → Apply → Validate → Generate/Update AI Handoff`

The operational state model is:

`DISCOVER → INSPECT → ANALYZE → PROPOSE → WAIT_FOR_APPROVAL → APPLY → VALIDATE → RECORD`

AI MUST NOT bypass the approval state for material changes.

## Evidence Policy

AI MUST:

1. Inspect current source/configuration first.
2. Treat explicit user decisions as authoritative.
3. Treat existing Project Context as supporting project-owned evidence.
4. Treat AI inference as proposed unless explicitly confirmed.
5. Record unavailable information as unknown rather than guessing.
6. Use concrete evidence references for important claims where available.
7. Never use Git history, commit messages, diffs, branches, tags, or blame as onboarding evidence.

## Existing Project

When `.project-context/` already exists, AI MUST reconcile it with current repository evidence and MUST NOT silently overwrite confirmed user decisions. Current source/configuration is primary evidence for current implementation facts; existing Project Context is supporting project-owned knowledge; explicit user decisions remain authoritative; AI inference is proposed unless confirmed.

Existing project-owned context is input to reconstruction/migration, not an automatic canonical target. The active Blueprint defines the canonical structure.

## New Project

When no canonical Project Context exists, AI MUST use the New Project Bootstrap Installation Procedure. AI must inspect first, propose material project-specific choices, wait for approval, then apply the approved installation and initialize the canonical Project Context.

## Profile and Assessment

AI SHOULD assess the project against applicable Software Standards and record confirmed profile information, gaps, limitations, exceptions, and unresolved decisions. Assessment does not itself authorize remediation.

## Approval Gate

Explicit user approval is required before applying Project Context decisions, Project Standard Profile changes, Standard exceptions, source/configuration remediation, or framework migration changes.

AI MUST NOT interpret a proposal, conversation continuation, target version, or implied intent as approval.

## Execution

After approval, AI performs the approved changes directly in the target repository according to the authoritative procedure. AI MUST apply the smallest appropriate deterministic transformation, preserve traceability, avoid blind overwrite, and record the result.

Test-only simulation runners may be used to validate Framework procedures. They are not runtime components of target projects and are not required for onboarding execution.

## Idempotency and Updates

Repeated execution SHOULD detect the current state and avoid duplicating completed work. Framework updates MUST use the applicable migration procedure, preserve project knowledge, and record version transitions and unresolved uncertainty.

## Completion Criteria

Onboarding is complete when Framework versions are recorded; Project Context is structurally valid; current facts have evidence or are explicitly unknown; user decisions are distinguished from proposals; Profile is confirmed or unresolved decision is reported; applicable Standards have an assessment or a recorded limitation; pending proposals are reported; AI Handoff is generated/updated; and validation has no unresolved critical structural errors.

Runtime validation MUST be classified using actual evidence. `BLOCKED` is not `FAIL`.

## Output

AI MUST report:

1. Framework and artifact versions used.
2. Project Context status and changes.
3. Findings and evidence.
4. Current Work, Next, Backlog, and Blocked states separately.
5. Confirmed decisions, proposed decisions, conflicts, and unknowns.
6. Changes actually applied after approval.
7. Validation results and limitations.
8. Remaining user decisions.
9. AI Handoff status.

# Project Onboarding Procedure

Procedure Version: 1.0.0

## Purpose

Define the repeatable procedure for installing or updating the Software Engineering Standard in a target project and establishing a usable Project Context, Project Standard Profile, and initial Standard Assessment.

## Operating Model

AI is the primary reader and writer. The user is the decision and authorization boundary. AI MUST explain proposed project changes and wait for explicit user approval before applying them.

## Onboarding Flow

```text
Prompt → Discover Framework → Identify Versions → Inspect Repository
→ Reconstruct/Update Project Context → Profile → Assessment
→ Report Findings → Propose Changes → User Decision → Apply
→ Validate → Generate/Update AI Handoff
```

## Evidence Policy

AI MAY inspect source code, application/build configuration, dependency manifests and lockfiles, database schema/migrations, API contracts, deployment/infrastructure configuration, project-owned documentation and existing `.project-context/`, and user-provided information.

AI MUST NOT use Git commit history, commit messages, commit diffs, branches, tags, blame, or other Git history to infer Project Context or onboarding facts.

Missing evidence MUST be recorded as `unknown` rather than guessed.

## Existing Project

When `.project-context/` already exists, AI MUST reconcile it with current repository evidence and MUST NOT silently overwrite confirmed user decisions. Current source/configuration is primary evidence for current implementation facts; existing Project Context is supporting project-owned knowledge; explicit user decisions remain authoritative; AI inference is proposed unless confirmed.

## New Project

For a project without Project Context, AI creates the Blueprint-defined domain structure and records known facts. Missing information is recorded as unknown or proposed.

## Profile and Assessment

AI MUST NOT treat inferred Standard adoption as confirmed. If no confirmed Project Standard Profile exists, AI proposes one for user review. Standard Assessment MUST use the exact Standard versions in the confirmed profile.

## Approval Gate

Explicit user approval is required before applying Project Context decisions, Project Standard Profile changes, Standard exceptions, source/configuration remediation, or framework migration changes.

## Idempotency and Updates

Re-running onboarding MUST be safe. It SHOULD update only records supported by new evidence, preserve unchanged confirmed records, and retain traceability for deprecated or superseded information. It MUST support later Framework version updates without destructive reset.

## Completion Criteria

Onboarding is complete when Framework versions are recorded; Project Context is structurally valid; current facts have evidence or are explicitly unknown; user decisions are distinguished from proposals; Profile is confirmed or unresolved decision is reported; applicable Standards have an assessment or a recorded limitation; pending proposals are reported; AI Handoff is generated/updated; and validation has no unresolved critical structural errors.

## Output

The onboarding result SHOULD be recorded using the Project Onboarding Schema. This record provides operational traceability and does not replace Project Context, Project Standard Profile, or Standard Assessment.

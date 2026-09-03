# Framework Migration Execution & Validation Procedure v1.0.0

## 1. Purpose

Operationalize the Framework Migration Execution & Validation Contract for AI agents.

## 2. Flow

**Preflight → Approval Check → Execute Approved Items → Validate → Complete or Resume**

## 3. Preflight

Read the project-owned Migration record and determine:

- Migration ID and status;
- current/target Framework versions;
- Change Items and explicit approval;
- previously completed items;
- applicable migration guide;
- expected application-source protection boundary.

If the Migration is already `completed`, run validation only unless the user explicitly requests a new migration.

## 4. Approval Check

Build the execution set from Change Items that are explicitly approved. Never execute `proposed`, `deferred`, or rejected work. If no approved work exists, do not modify the project.

## 5. Execute

For each approved unfinished Change Item:

1. Re-check preconditions.
2. Mark the item `in-progress`.
3. Apply its deterministic transformation.
4. Record evidence/outcome.
5. Mark `completed` only after the transformation succeeds.
6. If unsafe or incomplete, mark `blocked` or `partial` and stop the dependent execution path.

Execution must be resumable. A rerun starts by inspecting the Migration record and skips completed items.

## 6. Validate

Run the checks defined by the migration guide and the Execution & Validation Contract. At minimum verify versions, structure, references, state consistency, and application source/configuration protection.

Do not convert `unknown` validation to `pass` without new evidence.

## 7. Completion

Set Migration to `completed` only when the completion gate passes. Record final versions, validation results, deferred work, and timestamps.

If approved work remains unfinished, keep the Migration `partial` or `blocked`.

## 8. Resume

Resolve the blocking condition, preserve the same Migration ID, re-run preflight, and continue only approved unfinished Change Items. Never create a replacement migration merely to bypass a failed state.

## 9. Application development boundary

If execution discovers that application source, database, API, UI, infrastructure, or runtime configuration must change, stop that part of Framework migration and record `propose-development-work`. Wait for a separate user-approved development task.

## 10. Required result

The final execution result should be reproducible and traceable to the Migration ID and Change Item IDs. It should state whether execution completed, was partial/blocked, or was validation-only, and include evidence for every validation check.

# Framework Migration Execution & Validation Procedure v1.0.0

## 1. Purpose

Define the AI procedure for executing and validating an approved Framework migration in an existing project.

AI is the execution engine. No separate Automated Bootstrap Runner or Framework Runtime Runner is required.

## 2. Flow

`Preflight → Approval Check → Execute → Validate → Complete`

## 3. Preflight

AI MUST:

1. Read the applicable Framework migration procedure and version-specific guidance.
2. Confirm current and target versions.
3. Inspect current Project Context and repository state.
4. Verify the approved Change Items and their evidence.
5. Check that the repository has not unexpectedly changed since the plan was approved.

## 4. Approval Check

AI MUST NOT execute material migration changes without explicit user approval. Approval applies only to the identified and presented Change Items. AI must not infer approval from a target version, prompt, or prior conversation.

## 5. Execute

AI executes approved changes directly in the target repository.

AI MUST:

- apply the smallest appropriate deterministic transformation;
- preserve project knowledge and traceability;
- avoid blind overwrite;
- keep Framework migration separate from unrelated application development;
- record each completed Change Item;
- support safe resume without duplicating completed work.

No separate runtime Runner is required.

## 6. Validate

AI MUST validate:

- Framework and Blueprint versions;
- Project Context structure;
- provenance and evidence;
- migration result;
- AI Handoff consistency;
- affected artifacts;
- runtime checks where applicable.

Runtime statuses MUST be based on actual execution evidence and classified as `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`, or `UNKNOWN` according to Framework policy.

## 7. Completion

AI records Migration ID, approved/applied/rejected/deferred Change Items, validation results, limitations, unresolved uncertainty, and final completion state.

## 8. Resume

If execution stops, AI records completed and remaining Change Items and resumes from the known state. Completed work must not be duplicated.

## 9. Application Development Boundary

If a migration requires application source, database, API, UI, or infrastructure changes beyond Framework artifacts, AI must present that work as a separate proposed development task and obtain the approvals required by the project.

## 10. Required Result

The final report MUST identify what AI actually changed, what was validated, what could not be validated, evidence for the result, and any remaining user decisions.

## 11. Runtime Architecture Boundary

The Framework intentionally uses AI as its execution engine for migration and validation. Executable runners may be used only as test tooling for the Framework and are not required runtime components of target projects.

# Framework Migration Execution & Validation Contract v1.0.0

## Purpose

Define the framework-owned contract for safely executing and validating an approved Framework Update / Migration. This contract is implementation guidance for AI agents; it does not authorize application changes.

## Execution contract

Execution MUST receive:

- an existing Migration ID;
- current project Framework/artifact versions;
- the project-owned Migration record;
- the applicable version-specific migration guide;
- explicit approval state for each Change Item being executed.

Before execution AI MUST verify:

1. the Migration exists and is not `rejected`, `cancelled`, or `superseded`;
2. every selected Change Item is explicitly approved when `approval_required: true`;
3. the current project state still matches the recorded migration preconditions;
4. the target Framework version is the intended target;
5. application source/configuration changes are outside the execution scope.

If a precondition fails, execution MUST stop before modifying affected artifacts and record `blocked` or `partial` as appropriate.

## Change Item state machine

```text
proposed -> approved -> in-progress -> completed
                         |\
                         | +-> blocked
                         +----> partial

proposed -> rejected
proposed -> deferred (represented by action/status according to migration schema)
```

A Change Item marked `completed` MUST NOT be executed again during a rerun. An existing completed item is evidence of prior execution, not a request to duplicate it.

## Deterministic execution

Each migration transformation MUST:

- have a defined source state and target state;
- use only declared migration inputs;
- preserve unrelated project-owned records;
- preserve stable identifiers and traceability;
- produce the same target state when run against the same source state;
- record the Migration ID and Change Item ID where the transformation affects project-owned artifacts.

AI MUST NOT infer approval from the target version, a migration proposal, or a previous conversation statement that does not explicitly approve the Change Item.

## Idempotence

A rerun MUST first inspect the existing Migration record and current project state. Completed Change Items MUST be skipped. Already-applied compatible metadata updates MUST not be duplicated. Repeated execution MUST converge to the same target state without duplicate records.

## Resume

A Migration with status `partial` or `blocked` MAY resume after its blocking condition is resolved and approval remains valid. Resume MUST continue from unfinished approved Change Items and MUST revalidate preconditions before continuing.

## Application source protection

Framework migration MUST NOT silently modify application source code, database schema/data, API contracts, UI implementation, infrastructure, or runtime configuration.

If a Framework change requires application development, record it as `propose-development-work` with a traceable reference. Such work is a separate user-approved development task.

## Validation contract

Validation MUST run after execution and MUST include, when applicable:

- exact Framework and artifact version metadata;
- schema/structure validity;
- Project Context/reference integrity;
- Project Standard Profile consistency;
- affected Standard Assessment consistency or rerun result;
- AI Handoff consistency;
- migration and Change Item state consistency;
- detection of unexpected application source/configuration changes.

Each check SHOULD record:

```yaml
validation:
  status: pass | fail | partial | unknown
  checks:
    - id: VAL-001
      status: pass | fail | partial | unknown
      evidence: []
      finding: "..."
```

`unknown` means insufficient evidence and MUST NOT be treated as `pass`.

## Completion gate

Migration status MAY become `completed` only when:

1. all required approved Change Items are `completed`;
2. deferred/rejected items are explicitly recorded;
3. all required validation checks pass;
4. no unexpected application source/configuration changes are detected;
5. final versions are recorded exactly.

Otherwise the Migration remains `partial`, `blocked`, or another applicable non-completed state.

## Failure handling

A failed Change Item MUST NOT be marked completed. The migration record MUST preserve the failure/finding and identify the next safe action. Partial execution MUST remain resumable.

## Traceability

Execution and validation records MUST retain:

- Migration ID;
- Change Item ID;
- source/target artifact versions;
- approval evidence;
- execution outcome;
- validation evidence;
- unresolved/deferred development work.

## Security and privacy

Execution records MUST NOT contain credentials, secrets, access tokens, or unnecessary sensitive data.

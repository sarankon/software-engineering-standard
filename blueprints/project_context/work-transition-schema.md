
**Schema Version:** 1.0.0
**Status:** Active

# Work Transition Schema

## Purpose

A Work Transition records a supported change in the `work_state` of a Project Context work item. It preserves workflow history separately from the item's current state.

## Required Fields

| Field | Required | Meaning |
|---|---|---|
| `id` | YES | Stable unique transition identifier |
| `work_item` | YES | Stable ID of the affected work item |
| `from_state` | YES | Previous `work_state` |
| `to_state` | YES | New `work_state` |
| `source` | YES | Provenance of the transition record |
| `confidence` | YES | Confidence that the transition occurred as recorded |
| `reason` | OPTIONAL | Why the state changed |
| `evidence` | RECOMMENDED | Evidence supporting the transition |
| `occurred_at` | YES | When the transition occurred |
| `record_state` | YES | Common Project Context record state: `confirmed \| proposed \| unknown \| deprecated` |

## Work States

`from_state` and `to_state` MUST use exactly one of:

- `completed`
- `in-progress`
- `next`
- `backlog`
- `blocked`

`next` and `backlog` are distinct: `next` represents work selected for near-term execution, while `backlog` represents work not currently selected for near-term execution.

## Provenance and Onboarding

A transition created by AI during normal Project Context maintenance SHOULD use evidence that identifies the change being applied.

During existing-repository onboarding, historical transitions MUST NOT be reconstructed from Git history, commit messages, diffs, branches, tags, or blame. They MAY be reconstructed from project-owned documentation or explicit user confirmation when the evidence supports the transition.

If the available evidence does not establish the historical sequence, the sequence MUST remain unknown rather than being inferred from the current work state.

## Rules

1. A work item has exactly one current `work_state`.
2. Current state is represented by the canonical work-state files.
3. A transition record does not replace the current work item record.
4. A transition MUST NOT be used to infer user approval unless explicit evidence establishes approval.
5. Transitions are append-oriented historical records and MUST remain traceable after later state changes.
6. `record_state` describes the transition record; it MUST NOT be used as a substitute for `work_state`.

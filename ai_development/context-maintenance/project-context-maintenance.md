# Project Context Maintenance Procedure

**Procedure Version:** 1.0.0  
**Status:** Active  
**Applies To:** Normal development work in SES-enabled projects

## Purpose

Define the mandatory lifecycle for keeping Project Context synchronized with actual project work. Project Context is durable project-owned knowledge and MUST NOT become stale merely because implementation work has completed.

## Core Completion Contract

A development task MUST NOT be considered complete until the AI has evaluated the task's Project Context impact.

When the task creates or changes durable project knowledge or execution state, AI MUST update every affected canonical Project Context domain before reporting the task as complete.

If no Project Context mutation is required, AI MUST explicitly determine that the completed work introduced no durable project knowledge or state change requiring persistence. This determination does not require creating a context record solely to say that nothing changed.

## Required Lifecycle

AI MUST use the following lifecycle for normal development work:

`READ CONTEXT → EXECUTE WORK → VALIDATE → ASSESS CONTEXT IMPACT → RECONCILE CONTEXT → RECONCILE AI HANDOFF → COMPLETE`

### 1. Read Context

Before material work, read the Project Context domains relevant to the task and use them together with current repository evidence.

### 2. Execute Work

Perform only approved material changes and follow applicable Software Engineering Standards and project-specific rules.

### 3. Validate

Validate the implementation using evidence appropriate to the change. A successful implementation validation does not by itself complete the task.

### 4. Assess Project Context Impact

After validation, determine whether the work changed durable project knowledge, including but not limited to:

- work execution state or priority;
- requirements or project scope;
- architecture or system boundaries;
- technology choices or material configuration;
- confirmed decisions;
- known problems, constraints, risks, or unresolved unknowns;
- project-specific rules or exceptions;
- meaningful project history that is required for continuity.

Trivial implementation details, formatting-only edits, typo fixes, and refactors that do not alter durable project knowledge SHOULD NOT create Project Context noise.

### 5. Reconcile Canonical Project Context

When impact exists, update the affected canonical domains using the active Project Context Blueprint and schemas.

AI MUST preserve the distinction between repository facts, confirmed user decisions, AI proposals/inferences, and unknowns. AI MUST NOT invent historical transitions or unsupported facts.

For work-management changes:

- work that begins SHOULD be represented as `in-progress` when the work item is meaningful enough to track;
- changed priorities SHOULD reconcile `next`, `backlog`, or `blocked` as applicable;
- completed tracked work MUST move to `completed`;
- applicable state changes MUST follow the active Work Transition rules;
- related canonical records SHOULD be correlated through a Change Set when the active Blueprint requires one for a coherent cross-domain change.

### 6. Reconcile AI Handoff

After canonical Project Context is updated, AI MUST update/reconcile AI Handoff when the completed work changes information needed by the next AI agent, including current work, next work, blockers, important decisions, or other continuity-critical context.

AI Handoff is derived context and MUST NOT override canonical Project Context.

### 7. Complete

Only after context-impact assessment and all required reconciliation may AI report the development task as complete.

The completion response SHOULD concisely identify meaningful Project Context updates when any were made. It SHOULD NOT claim Project Context was updated when no mutation was required.

## Interrupted Work

If work stops after materially changing the repository but before the intended task is complete, AI SHOULD reconcile durable current state needed for safe continuation, including applicable `in-progress`, `blocked`, problem, decision, and AI Handoff information.

The next AI agent MUST be able to distinguish completed work from remaining work without relying on chat memory.

## Authority

Current repository source/configuration remains primary evidence for current implementation facts. Confirmed user decisions retain their defined authority. Project Context maintenance MUST follow the active Blueprint's provenance, evidence, record-state, work-state, Change Set, and Work Transition rules.

Git history and Git metadata MUST NOT be introduced as Project Context evidence where the active Framework procedures prohibit them.

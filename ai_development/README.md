# AI Development Protocol

AI Development defines how AI agents operate within projects that adopt SES.

## Principles

1. AI MUST understand the applicable project context before making non-trivial changes.
2. AI MUST identify applicable SES rules before implementation.
3. AI SHOULD plan changes before modifying code when the task has meaningful architectural or behavioral impact.
4. AI MUST verify its changes before reporting completion.
5. AI MUST update project context when a change materially affects documented project knowledge, decisions, architecture, flows, constraints, or state.
6. AI MUST NOT invent undocumented project facts when evidence is unavailable.

## Lifecycle

```text
START
  ↓
Read AGENTS.md
  ↓
Load Project Context
  ↓
Identify Applicable Standards
  ↓
Understand Task
  ↓
Plan
  ↓
Implement
  ↓
Verify
  ↓
Update Context
  ↓
Complete
```

Detailed protocols will be defined in separate documents under this directory.

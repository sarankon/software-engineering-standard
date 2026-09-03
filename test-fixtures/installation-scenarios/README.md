# Installation Scenario Validation Fixture

## Purpose

Dependency-free acceptance fixture for the approved Project AI Entry / Framework installation architecture.

## Scenarios

1. Target has no `AGENTS.md`: installation can create the entry point and canonical `.project-context/` chain.
2. Target already has project-owned `AGENTS.md`: Framework navigation is additive and existing content is preserved.
3. Fresh Framework installation: installed artifacts live under `.project-context/project-standard/` and Project Context domains remain directly under `.project-context/`.
4. Existing project has an older Framework version: update is routed through migration planning/approval rather than blind replacement.
5. Existing `.project-context/`: onboarding reconciles current state and preserves project-owned context rather than treating old context as disposable.

## Run

From repository root:

```text
node test-fixtures/installation-scenarios/run-scenarios.cjs
```

The runner uses only Node.js built-ins and temporary directories. It never modifies Framework source files or protected existing-project fixtures.

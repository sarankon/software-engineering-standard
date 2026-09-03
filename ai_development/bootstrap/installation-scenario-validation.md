# Installation Scenario Validation Procedure

**Procedure Version:** 1.0.0
**Status:** Active

## Purpose

Validate the approved Project AI Entry / Framework installation architecture against representative target-project states before pilot adoption.

## Scenarios

1. **No `AGENTS.md`** — AI may create the single project AI entry point and establish `AGENTS.md → .project-context/AI_INSTRUCTIONS.md`.
2. **Existing project-owned `AGENTS.md`** — Framework integration is additive; existing project instructions remain intact.
3. **Fresh Framework installation** — Framework artifacts are installed under `.project-context/project-standard/`; Project Context domains remain directly under `.project-context/`.
4. **Older Framework installation** — Update is routed through the Framework migration procedure, including version detection, classification, approval, selective execution, validation, idempotence, resume, and source protection.
5. **Existing `.project-context/`** — Existing project-owned context is treated as input/supporting evidence and is preserved; installed Framework artifacts are kept separate.

## Validation Boundary

This validation uses disposable temporary projects for installation scenarios and the existing dependency-free Framework migration simulation for scenario 4. It does not modify application source code or require a target-project runtime Runner.

The fixture is test tooling only and is not a target-project runtime component.

## Pass Criteria

All five scenarios must report `PASS`. Any environment limitation affecting runtime execution must be classified using Framework validation status rules; `BLOCKED` is not `FAIL`.

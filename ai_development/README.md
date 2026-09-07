# AI Development Prompts

This directory contains the AI-facing prompts and procedures used to operate the Software Engineering Standard Framework.

## Operating Model

AI is the primary reader and writer and is also the Framework execution engine. The Framework does not require a separate Automated Bootstrap Runner or Framework Runtime Runner.

AI performs installation, onboarding, upgrade, migration, validation, recording, and normal Project Context maintenance by following the authoritative procedures, state flow, evidence rules, and approval gates.

## Recommended usage

1. Start with the bootstrap prompt when initializing a project.
2. Let AI discover the authoritative Framework entry point, procedures, Blueprints, and Standards from the Framework Repository.
3. For material changes, AI must inspect and propose before applying and must wait for explicit user approval.
4. After approval, AI executes the approved operation directly in the target repository.
5. AI validates the result.
6. Before considering normal development work complete, AI MUST follow `context-maintenance/project-context-maintenance.md`: assess Project Context impact, reconcile every affected canonical domain, reconcile applicable work-state transitions, and update AI Handoff when continuity information changed.
7. If no Project Context mutation is required, AI explicitly determines that the work introduced no durable project knowledge or state change requiring persistence.
8. AI records applicable versions, evidence, decisions, changes, limitations, and AI Handoff.

## Available prompts and procedures

- `bootstrap-prompt.md` — user-facing bootstrap prompt.
- `bootstrap/installation-procedure.md` — New Project installation procedure.
- `onboarding/project-onboarding.md` — umbrella onboarding procedure for new and existing projects.
- `context-maintenance/project-context-maintenance.md` — mandatory Project Context reconciliation and completion procedure for normal development work.
- `onboarding/full-bootstrap-test-procedure.md` — repeatable full onboarding test procedure.
- `migration/framework-update-procedure.md` — Framework update/migration procedure.
- `migration/migration-execution-validation-procedure.md` — migration execution and validation procedure.
- `migration/migration-simulation-test-procedure.md` — test-only migration simulation procedure.

Test-only executable tooling, if introduced for Framework testing, is not part of the target-project runtime architecture.

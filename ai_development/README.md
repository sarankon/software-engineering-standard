# AI Development Prompts

This directory contains user-facing prompts and AI development procedures for using Software Engineering Standard with another project.

## Recommended usage

The simplest workflow is:

1. Open the Software Engineering Standard repository.
2. Copy the prompt from [`bootstrap-prompt.md`](./bootstrap-prompt.md).
3. Paste it into the AI agent working in the target project.
4. Replace the Framework Repository URL if using a different fork/version source.
5. Let the AI discover and follow the framework instructions from the repository.

The user prompt intentionally avoids duplicating the framework's detailed procedures. The AI should discover `AI_BOOTSTRAP.md`, then the applicable instructions, Blueprint, Standards, and Procedures.

## Available prompts and procedures

- [`bootstrap-prompt.md`](./bootstrap-prompt.md) — install or initialize the framework in a target project and continue with repository analysis.
- [`bootstrap/installation-procedure.md`](./bootstrap/installation-procedure.md) — normative new-project installation procedure.
- [`onboarding/project-onboarding.md`](./onboarding/project-onboarding.md) — umbrella onboarding procedure for new, existing, and update flows.
- [`migration/framework-update-procedure.md`](./migration/framework-update-procedure.md) — controlled Framework update/migration workflow.
- [`../schemas/project-onboarding/README.md`](../schemas/project-onboarding/README.md) — onboarding run schema.
- [`../schemas/framework-update/README.md`](../schemas/framework-update/README.md) — Framework Update / Migration record schema.
- [`../migrations/framework/README.md`](../migrations/framework/README.md) — version-specific migration guide conventions.

The Framework Update procedure requires an assessment and explicit user approval before applying changes that require approval. Application source-code changes remain separate development work.

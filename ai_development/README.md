# AI Development Prompts

This directory contains the user-facing prompts and procedures for using Software Engineering Standard with another project.

## Recommended usage

The simplest workflow is:

1. Open the Software Engineering Standard repository.
2. Copy the prompt from [`bootstrap-prompt.md`](./bootstrap-prompt.md).
3. Paste it into the AI agent working in the target project.
4. Replace the Framework Repository URL if using a different fork/version source.
5. Let the AI discover and follow the framework instructions from the repository.

The prompt is intentionally short at the user level. Detailed behavior belongs to the framework's procedures, blueprints, and standards rather than being duplicated in every user prompt.

## Available prompts

- [`bootstrap-prompt.md`](./bootstrap-prompt.md) — install or initialize the framework in a target project and continue with repository analysis.

Future prompts may be added for explicit update, migration, or re-onboarding workflows.

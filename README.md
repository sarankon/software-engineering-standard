
Software Engineering Standard (SES) is a versioned engineering system for building software consistently across projects, for both human developers and AI agents.

## Purpose

SES defines reusable engineering rules, AI development protocols, project-context blueprints, and migration guidance. Its goal is to establish a clear engineering baseline while allowing justified project-specific decisions.

## Core Model

```text
Software Engineering Standard
        │
        ├── AI_BOOTSTRAP.md   AI framework entry point
        ├── standards/        Engineering rules
        ├── ai_development/   AI working protocols and copy-ready prompts
        ├── blueprints/       Project Context structures
        └── migrations/       Version upgrade paths
```

A project consumes SES and maintains its own project-specific context:

```text
Global SES
   │ rules + blueprint + procedures
   ▼
Project Context
   │ project-specific knowledge
   ▼
Source Code
```

## Getting Started

### For a user installing SES into another project

1. Open [`ai_development/bootstrap-prompt.md`](./ai_development/bootstrap-prompt.md).
2. Copy the prompt in that file.
3. Paste it into the AI agent working in the target project.
4. The AI uses the Framework Repository URL in the prompt to discover [`AI_BOOTSTRAP.md`](./AI_BOOTSTRAP.md), then follows the applicable Blueprint, Standards, and Procedures.

The user does not need to know the internal framework file structure. The AI is responsible for discovering the authoritative instructions.

Project onboarding is orchestrated by [`ai_development/onboarding/project-onboarding.md`](./ai_development/onboarding/project-onboarding.md) and records its run using [`schemas/project-onboarding/README.md`](./schemas/project-onboarding/README.md).

### For an AI agent receiving this repository as Framework Repository

Start with [`AI_BOOTSTRAP.md`](./AI_BOOTSTRAP.md). It is the stable self-describing entry point for discovering the framework's AI Development instructions, Blueprints, Standards, versions, and applicable procedures.

## What SES Contains

### `standards/`
Reusable engineering standards such as architecture, coding, database, API, security, audit, logging, testing, performance, and deployment.

### `ai_development/`
AI-assisted development procedures and user-facing prompts, including bootstrap/onboarding and controlled framework update/migration workflows.

### `blueprints/`
Blueprints defining the structure of project-owned artifacts. A Blueprint is a specification, not a copy of project data.

### `migrations/`
Explicit migration paths for upgrading existing projects when a Standard or Blueprint changes. Generic orchestration lives in `ai_development/migration/`.

## Project Context

Projects using the current Project Context Blueprint maintain project-specific information in the Blueprint-defined domain structure. The current blueprint separates at least:

```text
project-context/
├── project-identity/
├── technology/
├── architecture/
├── requirements/
├── decisions/
├── problems/
├── work-management/
├── project-rules/
├── history/
└── ai-handoff/
```

Project Context is project-owned knowledge, not source code and not external AI memory.

## Important Boundaries

- Project Context → project knowledge and decisions
- Software Standards → reusable engineering rules
- AI Development → how AI operates on the project
- Blueprints / Schemas → structure of project-owned artifacts
- Actual implementation → source code/configuration
- Historical changes → Git
- Upgrade procedures → SES migration procedures and version-specific migration guides

Each piece of information should have one authoritative location.

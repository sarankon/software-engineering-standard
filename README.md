# Software Engineering Standard

Software Engineering Standard (SES) is a versioned engineering system for building software consistently across projects, for both human developers and AI agents.

## Purpose

SES defines reusable engineering rules, AI development protocols, project-context blueprints, and migration guidance. Its goal is to establish a clear engineering baseline while allowing justified project-specific decisions.

## Core Model

```text
Software Engineering Standard
        │
        ├── standards/       Engineering rules
        ├── ai_development/  AI working protocols
        ├── blueprints/      Project Context structures
        └── migrations/      Version upgrade paths
```

A project consumes SES and maintains its own project-specific context:

```text
Global SES
   │ rules + blueprint
   ▼
Project Context
   │ project-specific knowledge
   ▼
Source Code
```

## What SES Contains

### `standards/`
Reusable engineering standards such as architecture, coding, database, API, security, audit, logging, testing, performance, and deployment.

### `ai_development/`
Protocols for AI-assisted development, including startup, planning, implementation, verification, context maintenance, and standard upgrades.

### `blueprints/`
Blueprints defining the structure of project-owned artifacts. A Blueprint is a specification, not a copy of project data.

### `migrations/`
Explicit migration paths for upgrading existing projects when a Standard or Blueprint changes.

## Project Context

Projects using SES should have a `project_context/` directory for project-specific information.

```text
project_context/
├── development_standard/
├── ai_development/
├── knowledge_base/
├── decisions/
└── state/
```

`AGENTS.md` is the AI entry point and should direct the agent to applicable project context and SES instructions. Project context must not be blindly overwritten when SES or its Blueprint is updated.

## Rule Language

Standards should use precise requirement levels:

- `MUST` — mandatory requirement
- `MUST NOT` — prohibited behavior
- `SHOULD` — recommended practice
- `SHOULD NOT` — generally discouraged practice
- `MAY` — optional practice

Meaningful rules should explain how compliance can be verified.

## Versioning

SES uses Semantic Versioning:

```text
MAJOR.MINOR.PATCH
```

Standard and Project Context Blueprint versions are independent. Changes that can affect existing projects must include appropriate changelog and migration guidance.

## Source of Truth

- Global reusable engineering rules → SES
- Project-specific rules and knowledge → `project_context/`
- Actual implementation → source code
- Historical changes → Git
- Upgrade procedures → `migrations/`

Each piece of information should have one authoritative location.

## Development Approach

```text
Foundation
    ↓
Standard Specification
    ↓
Core Engineering Standards
    ↓
AI Development Protocol
    ↓
Project Context Blueprint
    ↓
Versioning & Migration
    ↓
Real Project Adoption
    ↓
Feedback → Standard Improvement
```

SES should be developed incrementally and validated against real projects rather than attempting to define every rule upfront.

## Current Status

Foundation phase — version `1.0.0`.

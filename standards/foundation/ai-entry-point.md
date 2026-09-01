# AI Entry Point Standard

Status: Draft
Level: MUST / SHOULD / MAY
Category: Foundation
Applicability: All SES-enabled projects that support AI-assisted development

## Purpose

This standard defines the principles for providing AI agents with a clear, discoverable, and maintainable entry point into a project.

The entry point connects the project repository with its Project Context, applicable engineering standards, and AI development guidance.

## Core Principle

An AI-enabled project MUST provide a discoverable entry point that tells an AI agent where to find the information required to understand the project and work within its constraints.

The entry point SHOULD be concise and navigational rather than becoming a duplicate of the project's complete documentation or standards.

SES does not require a specific filename, AI tool, agent framework, or platform. A project MAY use a technology- or platform-specific convention such as `AGENTS.md` when appropriate.

## Entry Point

The project MUST have an authoritative AI entry point when AI agents are expected to modify or operate on the project.

The entry point SHOULD identify or provide navigation to at least:

- the project's purpose and scope;
- applicable Project Context;
- applicable Software Engineering Standards;
- AI-specific development guidance;
- important repository or development constraints; and
- authoritative documentation or instructions needed before making changes.

## Loading Order

The entry point SHOULD define a predictable order for discovering project information.

A suitable conceptual order is:

```text
AI Entry Point
      ↓
Project Context
      ↓
Applicable Standards
      ↓
Relevant Documentation / Decisions
      ↓
Task-specific context
```

The exact loading mechanism MAY depend on the AI tool or platform.

An AI agent SHOULD avoid loading unrelated project information when a narrower context is sufficient for the task.

## Project Context Discovery

The AI entry point MUST make the location of the project's Project Context discoverable when the project uses the SES Project Context Blueprint.

The entry point SHOULD direct the AI agent toward relevant areas such as:

- system and architecture knowledge;
- technology information;
- project conventions;
- decisions;
- current state;
- development standards; and
- AI-specific guidance.

The entry point MUST NOT assume that the AI agent already knows undocumented project context.

## Standards Discovery

The entry point MUST make applicable engineering standards discoverable.

AI agents SHOULD identify the standards relevant to the current task before making material changes.

The entry point SHOULD distinguish global standards from project-specific rules when both exist.

Project-specific rules MAY refine or add constraints to global standards but MUST NOT silently contradict higher-authority requirements.

## Authority and Precedence

Projects MUST define how conflicting instructions or information are resolved when multiple sources apply.

At a conceptual level, higher-authority requirements SHOULD take precedence over lower-authority guidance. A project may define a hierarchy appropriate to its tooling and organizational model.

The hierarchy SHOULD distinguish at least:

- platform or system constraints;
- organization or global engineering standards;
- project-specific standards and context;
- task-specific instructions; and
- examples or informal guidance.

An AI agent SHOULD surface material conflicts rather than silently selecting a convenient interpretation.

## Scope

AI instructions SHOULD have an explicit scope whenever the underlying AI platform supports scoped instructions.

Instructions intended for a repository or project MUST NOT be assumed to apply to unrelated repositories.

When nested or component-specific instructions are supported, their scope and precedence SHOULD be clear.

## Human Readability

The AI entry point MUST be understandable to human developers.

It SHOULD provide useful navigation and concise explanation rather than containing opaque machine-specific configuration when human-readable documentation can serve the same purpose.

AI-specific instructions MAY be present, but the project SHOULD avoid maintaining duplicate human and AI versions of the same authoritative project knowledge without a clear reason.

## Maintenance

The AI entry point MUST be updated when changes make its navigation, referenced locations, or authoritative guidance materially incorrect.

References to removed or renamed files SHOULD be corrected as part of the same change when practical.

The entry point SHOULD remain concise enough that its primary purpose as a navigation and orientation layer is preserved.

## AI Development Boundary

The AI entry point establishes how an AI agent enters the project; it does not define the complete AI development workflow.

Detailed requirements for planning, implementation, verification, context maintenance, and completion belong in the AI Development standards.

## Exceptions

A project MAY use a different entry-point mechanism when its AI platform or development environment provides an equivalent authoritative mechanism.

A deviation from a normative requirement MUST be documented in the project context with its rationale and applicable mitigation.

## Verification

Review the project and verify that an authoritative AI entry point exists when required, its scope is clear, Project Context and applicable standards are discoverable, instruction precedence is understandable, referenced resources are current, and the entry point remains useful to human developers.

## Migration

When adopting this standard in an existing project, identify existing AI instructions and project guidance, establish an authoritative entry point, connect it to Project Context and applicable standards, resolve conflicting instruction sources, and remove or redirect obsolete entry points.

Migration SHOULD preserve useful existing guidance while consolidating duplicate or contradictory instructions.

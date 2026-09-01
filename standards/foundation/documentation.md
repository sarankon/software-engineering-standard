# Documentation Standard

Status: Draft
Level: MUST / SHOULD / MAY
Category: Foundation
Applicability: All SES-enabled projects

## Purpose

This standard defines principles for creating, organizing, maintaining, and consuming software documentation throughout the project lifecycle.

## Core Principle

Documentation that communicates engineering knowledge, system behavior, decisions, constraints, or operational procedures MUST be treated as an engineering artifact and maintained with an appropriate level of version control and review.

Documentation SHOULD help both humans and AI systems understand the project without relying on undocumented knowledge.

SES defines documentation responsibilities and quality requirements rather than prescribing a specific format, tool, directory, or documentation platform.

## Documentation Types

Projects SHOULD distinguish documentation by purpose. Applicable types may include:

- **Project documentation** — project purpose, scope, setup, usage, and development guidance.
- **Architecture documentation** — system structure, boundaries, dependencies, and important technical decisions.
- **Development documentation** — coding practices, workflows, testing, and contribution guidance.
- **Operational documentation** — deployment, configuration, monitoring, troubleshooting, recovery, and maintenance procedures.
- **Decision documentation** — significant decisions, alternatives, rationale, and consequences.
- **Reference documentation** — detailed technical information such as API, schema, or interface references.
- **Project context** — durable context required by humans and AI agents to understand and safely modify the project.

The project SHOULD avoid duplicating the same information across multiple documentation types.

## Ownership

Important documentation MUST have an identifiable owner or responsible area within the project.

Documentation ownership means responsibility for keeping the information accurate, not necessarily that every change requires a specific individual to edit it manually.

AI agents MAY create or update documentation when operating within the project's authorized workflow, provided applicable standards and project rules are followed.

## Discoverability

Important documentation MUST be discoverable from an appropriate project entry point or documentation index.

A developer or AI agent SHOULD be able to determine where to find information about:

- how to understand the project;
- how to develop and validate it;
- how the system is structured;
- how to operate it; and
- where authoritative project context is maintained.

Projects MAY use any suitable entry-point or navigation mechanism.

## Source of Truth

Information that represents a single authoritative fact SHOULD have one clearly identifiable source of truth.

Documentation MUST NOT intentionally maintain conflicting copies of the same authoritative information.

When information must be repeated for usability, the repeated content SHOULD identify or link to its authoritative source where practical.

When documentation conflicts with executable behavior or configuration, the project MUST resolve the inconsistency rather than assuming that documentation is authoritative by default.

## Accuracy and Maintenance

Documentation that is materially affected by a code, architecture, configuration, operational, or process change SHOULD be updated as part of the same change when practical.

Documentation MUST NOT knowingly describe behavior that the project no longer supports.

Outdated documentation SHOULD be corrected, marked as deprecated, or removed when discovered.

Projects SHOULD prefer concise documentation that explains meaningful knowledge over documentation that merely restates obvious implementation details.

## Architecture and Design Documentation

Material architectural structure, boundaries, constraints, and decisions SHOULD be documented when they are not sufficiently obvious from the implementation.

Architecture documentation SHOULD explain the reasoning and constraints that are difficult to recover from source code alone.

Significant design decisions SHOULD record the decision, context, alternatives considered when relevant, and consequences.

Detailed architecture and decision-record requirements MAY be defined by standards in the Architecture category.

## Operational Documentation

Systems that require operational activities SHOULD provide documentation sufficient for authorized operators to perform normal and recovery procedures.

Operational documentation SHOULD cover applicable areas such as deployment, configuration, monitoring, troubleshooting, backup, recovery, and maintenance.

Operational procedures SHOULD identify prerequisites, expected outcomes, and important failure or rollback considerations where applicable.

## Project Context

Project Context MUST be maintained separately as a structured source of durable project knowledge when the project uses the SES Project Context Blueprint.

Project Context SHOULD contain information needed to make safe engineering decisions, including system understanding, technology choices, conventions, decisions, current state, and AI-specific guidance as defined by the Blueprint.

General documentation MUST NOT be used as a substitute for Project Context when information belongs to the Project Context responsibility.

## AI-readable Documentation

Documentation that is expected to be consumed by AI agents MUST use clear, explicit, and predictable structure.

AI-readable documentation SHOULD:

- state requirements and constraints explicitly;
- distinguish facts from examples or recommendations;
- identify authoritative sources where applicable;
- use stable terminology;
- avoid relying solely on visual layout or implicit context; and
- provide references to related standards or project context when useful.

Documentation intended for both humans and AI SHOULD use one shared source when that source can serve both audiences effectively.

## Generated Documentation

Generated documentation MAY be used when it provides reliable value and is derived from an identifiable source.

Generated documentation MUST be distinguishable from manually maintained source documentation when the distinction affects how it should be edited or maintained.

Generated artifacts MUST NOT be treated as manually authoritative when regeneration can overwrite them.

The source and generation process for important generated documentation SHOULD be discoverable.

## Documentation Format and Tooling

SES does not mandate Markdown, a documentation site, wiki, static-site generator, diagramming tool, or documentation platform.

Projects SHOULD use formats and tools that support discoverability, versioning, maintainability, accessibility, and the needs of the intended audience.

Documentation stored with the project source SHOULD use the project's established repository conventions.

## Exceptions

A project MAY use a different documentation model when required by its technology, organizational process, regulatory obligations, or operational constraints.

A deviation from a normative requirement MUST be documented in the project context with its rationale and applicable mitigation.

## Verification

Review the project and verify that important documentation is discoverable, ownership is clear, authoritative information has identifiable sources of truth, material changes are reflected in affected documentation, operational knowledge is available where required, Project Context responsibilities are respected, and AI-readable documentation is structured and explicit where applicable.

## Migration

When adopting this standard in an existing project, inventory important documentation, identify conflicting or duplicated sources, establish ownership and entry points, correct materially outdated information, and distinguish durable Project Context from general documentation.

Migration SHOULD prioritize documentation required for safe development, operation, architecture understanding, and AI-assisted work before lower-value cleanup.

# Project Context Blueprint

The Project Context Blueprint defines the standard structure for project-owned context used by humans and AI agents.

## Purpose

The Blueprint provides a predictable location and format for project-specific engineering knowledge without copying the entire global SES repository into each application.

## Structure

```text
project_context/
├── development_standard/
├── ai_development/
├── knowledge_base/
├── decisions/
└── state/
```

## Responsibilities

| Area | Purpose |
|---|---|
| `development_standard/` | Applicable SES configuration, project rules, and documented exceptions |
| `ai_development/` | Project-specific instructions for AI agents |
| `knowledge_base/` | Architecture, technology, domain, flows, database, integrations, constraints, and conventions |
| `decisions/` | Architecture and important technical decisions, including rationale |
| `state/` | Current work, known issues, blockers, technical debt, and other changing project state |

## Ownership

The Project Context is owned by the project. It is not a generated cache of the global Standard.

Standard or Blueprint upgrades MUST preserve project-specific information.

## AI Entry Point

A project's `AGENTS.md` SHOULD direct AI agents to the applicable Project Context and SES instructions.

## Versioning

The Blueprint has its own version, independent from the SES version. Blueprint changes that require structural changes to existing projects MUST include migration guidance.

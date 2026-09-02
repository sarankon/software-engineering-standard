# Project Context Domain Schema Index

**Schema Version:** 1.0.0

This index defines the canonical domain schemas used by Project Context Blueprint v1.

| Domain | Canonical schema | Primary purpose |
|---|---|---|
| Project Identity | `project-identity/schema.md` | Project identity, purpose, scope, lifecycle |
| Technology | `technology/schema.md` | Technologies, versions, dependencies, services |
| Architecture | `architecture/schema.md` | Components, boundaries, flows, relationships |
| Requirements | `requirements/schema.md` | Functional/non-functional requirements and constraints |
| Decisions | `decisions/schema.md` | Chosen approaches and rationale |
| Problems | `problems/schema.md` | Defects, debt, risks, limitations, discrepancies |
| Work Management | `work-management/schema.md` | Completed, active, next, backlog, blocked work |
| Project Rules | `project-rules/schema.md` | Project-specific rules and standard exceptions |
| History | `history/schema.md` | Significant context changes and milestones |
| AI Handoff | `ai-handoff/schema.md` | Compact continuity snapshot for returning AI agents |

## Domain Boundary Rules

1. Every piece of knowledge SHOULD have one canonical domain.
2. Cross-domain references SHOULD use stable IDs.
3. Summaries MAY repeat information when they improve navigation, but the canonical record remains authoritative.
4. Decisions are not inferred from implementation alone.
5. Requirements describe desired/project-required outcomes; work items describe execution.
6. Problems describe conditions needing attention; work items describe actions to address them.
7. AI Handoff is derived and must never override canonical domain records.

## Common Metadata

All domains inherit the common metadata semantics defined by `common-schema.md` and `SPECIFICATION.md`. Domain schemas may add fields but must not redefine common field meanings.

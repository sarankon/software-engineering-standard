# Core

- Project: `software-engineering-standard`.
- Purpose: develop a versioned Software Engineering Standard (SES) for consistent software development across projects, including AI-assisted development.
- Repository branch: `main`.
- Latest committed milestone: `docs: add engineering standard taxonomy`.
- Global SES is the reusable source of truth; each consuming project owns its `project_context/` and must not be overwritten wholesale during upgrades.
- Major SES areas: `standards/`, `ai_development/`, `blueprints/`, `migrations/`.
- Standard taxonomy selected: `principles/`, `foundation/`, `architecture/`, `development/`, `presentation/`, `data/`, `integration/`, `security/`, `quality/`, `operations/`, `maintenance/`.
- Rule design: stable Rule IDs (`SES-{CATEGORY}-{NUMBER}`), lifecycle (`draft`, `proposed`, `active`, `deprecated`, `removed`), levels (`MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT`, `MAY`), applicability, and sections for Requirement, Rationale, Examples, Verification, Exceptions, and Migration.
- `standards/SPECIFICATION.md` defines the canonical Rule format; `standards/rule-template.md` is the authoring template.
- AI development model: `AGENTS.md` is the project AI entry point; AI should load project context, identify applicable standards, plan, implement, verify, update context, and complete.
- Project Context Blueprint: `project_context/` contains `development_standard/`, `ai_development/`, `knowledge_base/`, `decisions/`, and `state/`; Blueprint is independently versioned and upgrades require migration guidance.
- Foundation files created: `project-structure.md`, `repository.md`, `configuration.md`, `environment.md`, `dependencies.md`, `documentation.md`, `ai-entry-point.md`.
- Foundation principle: SES defines structural responsibilities and boundaries, not a universal physical directory layout. Projects may adapt physical structure to technology and architecture.
- `standards/foundation/project-structure.md` is a substantive Draft covering technology independence, separation of concerns, discoverability, consistency, project-context isolation, no unnecessary structure, required responsibilities, AI discoverability, exceptions, verification, and migration.
- `standards/foundation/repository.md` is now a substantive Draft covering source control, default branch, branching, commits, collaboration/review, repository hygiene, secret exposure remediation, release traceability, repository configuration, exceptions, verification, and migration. SES does not mandate Git Flow, trunk-based development, PR/MR, or a universal workflow; projects select and document an appropriate workflow.
- `standards/presentation/README.md` exists for UI/frontend/presentation-layer standards.
- Current work is documentation/design; no application source implementation exists.

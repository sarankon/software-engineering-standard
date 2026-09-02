# Project Context Blueprint v1 — Locked Decisions

- Domain separation: Project Context is split into domain-based files, not one monolithic file.
- AI is the primary writer/maintainer. User is primarily a reader and decision-maker. Normal flow: user discusses/decides with AI first, then explicitly tells AI to apply the change. User may directly edit when necessary, but AI should remain the main maintainer.
- Work management is separated into Completed, In Progress, Next, Backlog, and Blocked. `Next` is not the same as `Backlog`.

Recommended Project Context domains:
- project-identity
- technology
- architecture
- requirements
- decisions
- problems
- work-management
- project-rules
- history
- ai-handoff

Design principles:
- Project Context stores the AI's structured understanding of the project, not source code.
- Context should distinguish facts, decisions, proposals/inferences, and unknowns.
- Context items should carry provenance where useful (repository analysis, user decision, AI inference) and lifecycle/status such as confirmed, proposed, unknown, deprecated.
- It must support onboarding an existing repository: analyze repository -> extract facts -> identify architecture/technology -> identify decisions/problems/work -> generate Project Context.
- It must record which Software Standard/Database Standard versions the project follows.
- It must support future standard updates and migration workflows without mixing migration tooling into the current Project Context blueprint.
- All Blueprint/Schema/Procedure/Evidence version identifiers remain `1.0.0` during the pre-production design and testing phase. Version changes are deferred until after real-world adoption; subsequent changes must be tested before incrementing the version.
- Domain files should be independently readable/writable by AI while keeping a predictable structure.

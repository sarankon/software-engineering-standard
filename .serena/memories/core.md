# Core

- Project: `software-engineering-standard`.
- Purpose: develop a versioned Software Engineering Standard for consistent software development across projects, including AI-assisted development.
- Current repository content: only Serena project metadata; no Standard artifacts or application source yet.
- Working design: Global Standard is the source of truth; project-specific `project_context/` is an instance containing project knowledge, decisions, state, and applicable standard configuration.
- Planned major areas: `standards/`, `ai_development/`, `blueprints/`, `migrations/`.
- Project Context concept: `AGENTS.md` is the AI entry point; `project_context/` is project-owned and must not be overwritten wholesale by Standard/Blueprint updates.
- Versioning concept: Standard and Project Context Blueprint are independently versioned; upgrades use migration + verification rather than blind copying.

- Read `mem:tech_stack` for current repository/tooling technology facts.
- Read `mem:conventions` for repository conventions once they are established.
- Read `mem:task_completion` for completion/verification requirements once they are established.
- Read `mem:suggested_commands` for Windows-specific project commands once commands are established.
- Serena memory maintenance guidance is in `mem:memory_maintenance`.
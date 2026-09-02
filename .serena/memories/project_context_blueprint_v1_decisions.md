# Project Context Blueprint v1 — Locked Decisions

- Domain separation: Project Context is split into domain-based files, not one monolithic file.
- AI is the primary writer/maintainer. User is primarily a reader and decision-maker. Normal flow: user discusses/decides with AI first, then explicitly tells AI to apply the change. User may directly edit when necessary, but AI should remain the main maintainer.
- Work management is separated into Completed, In Progress, Next, Backlog, and Blocked. `Next` is not the same as `Backlog`.
- Cross-domain logical changes use a Change Set as a correlation mechanism; canonical records remain in their own domains.
- Work-management current state and transition history are separate concerns. Historical transitions must be evidence-supported during onboarding and must not be invented.
- Framework, Blueprint, Schema, Procedure, and individual Standard versions are distinct version layers and should be recorded explicitly in Project Context.
- Onboarding MUST NOT inspect or use Git history, commit messages, commit diffs, branches, tags, or blame as Project Context evidence. Current repository/source/configuration evidence is the primary evidence for current implementation. Project-owned documentation and existing `.project-context` may be supporting migration/context evidence, but must not override current implementation evidence.
- Git commit IDs and Git state are not valid Project Context evidence types for onboarding.

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
- It must support onboarding an existing repository: analyze current repository/source/configuration -> extract facts -> identify architecture/technology -> identify decisions/problems/work -> generate Project Context. Git history is excluded from this flow.
- It must record which Software Standard/Database Standard versions the project follows.
- It must support future standard updates and migration workflows without mixing migration tooling into the current Project Context blueprint.
- All Blueprint/Schema/Procedure/Evidence version identifiers remain `1.0.0` during the pre-production design and testing phase. Version changes are deferred until after real-world adoption; subsequent changes must be tested before incrementing the version.
- Domain files should be independently readable/writable by AI while keeping a predictable structure.

Design additions from E2E onboarding test:
- `blueprints/project_context/CHANGE-SET.md` defines cross-domain Change Set rules; its normative schema file is `blueprints/project_context/change-set-schema.md`.
- `blueprints/project_context/WORK-TRANSITIONS.md` defines work-state transition rules; its normative schema file is `blueprints/project_context/work-transition-schema.md`.
- `standards/versioning.md` defines explicit Framework/Blueprint/Schema/Procedure/Standard version layers.

- `record_state` is the common knowledge-record lifecycle field: `confirmed | proposed | unknown | deprecated`; it is not the execution state of work.
- `work_state` is the work execution field: `completed | in-progress | next | backlog | blocked`; work-state files must carry both `record_state` and `work_state`.
- Normative schemas added: `blueprints/project_context/change-set-schema.md` and `blueprints/project_context/work-transition-schema.md`; Change Sets use `change_set_state`, while Work Transitions use `from_state`/`to_state`.
- The previous E2E onboarding gaps for Change Set schema and Work Transition schema are now addressed; versions remain `1.0.0` during pre-production.

# Current Project State

- Project: `software-engineering-standard`.
- Purpose: reusable, versioned Software Engineering Standard for AI-assisted software development and project continuity across machines/agents.
- AI is primary reader/writer and direct execution engine. User primarily reads, supplies decisions, and authorizes material changes.
- Project Context stores project-specific non-source-code knowledge and state in the project Repository rather than relying on AI Memory.
- Software Standards define normative development constraints (UI, data, security, audit, logging, etc.) separately from Project Context.
- Existing repositories are onboarded from current source/config/docs/context evidence; Git history/metadata is excluded as onboarding evidence.
- Evidence priority: current repository implementation/configuration evidence > explicit user decisions > existing Project Context > AI inference. Missing evidence remains unknown.
- Project Context must distinguish facts from decisions and use record states confirmed/proposed/unknown/deprecated; AI inference must not be silently promoted to confirmed.
- Material changes require explicit user approval; no blind overwrite. Operations should be traceable and idempotent/resumable where applicable.
- Main flow: Discover → Inspect → Analyze → Propose → Wait for Approval → Apply → Validate → Record.
- Runtime statuses: PASS / FAIL / BLOCKED / NOT_RUN. BLOCKED is an environment/tooling limitation, not a project failure.
- Current Framework architecture is documented and aligned; no target-project runtime runner is required. Test-only runners are allowed only for Framework testing.
- Current work is documentation/design and validation; no application source implementation in this Framework repository.
- See `mem:roadmap/current` for the active next-work sequence.

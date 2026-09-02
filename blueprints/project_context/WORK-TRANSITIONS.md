# Work Transition History

**Schema Version:** 1.0.0

Work-management state files represent current state. Transition history records supported changes between states.

See [`work-transition-schema.md`](./work-transition-schema.md) for the normative schema.

## Rules

- A work item has one current state.
- Current state is stored in `completed.md`, `in-progress.md`, `next.md`, `backlog.md`, or `blocked.md`.
- Historical transitions must not be invented from the current state.
- AI should record a transition when it changes a work item's state.
- During existing-repository onboarding, only evidence-supported historical transitions are reconstructed; otherwise the historical sequence remains unknown.

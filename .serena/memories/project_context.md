# Project Context

## Current Status — 2026-09-02

- Framework repository baseline is clean at commit `1f8c785` (`feat: add project context reference implementation`).
- Software Standard v1 and Database Standard v1 are implemented and committed.
- Project Context Blueprint v1, domain schemas, AI Handoff schema, and reference implementation are implemented and committed.
- Conversation validation passed for reading context, decision protection, provenance, work-state distinctions, AI handoff, and cross-domain references.
- Two design gaps remain intentionally open for evidence-driven refinement: standardized Work Item Transition History and formal Cross-Domain Change Set / Impact Analysis.
- Existing Repository Onboarding has NOT yet been validated against a real legacy application repository. The current workspace contains only the framework repository itself, so using it as the onboarding target would be circular and is not considered a valid test.
- Migration tooling/system and real downstream project adoption are not yet implemented/tested.

## Immediate Next Step

Run an Existing Repository Onboarding test before making further Blueprint changes. Preferred approach: use a real existing application repository supplied by the user. If none is available, create a temporary synthetic legacy application fixture solely for testing and do not treat it as a real adoption result.

## Existing Repository Test Goal

Validate whether the current Project Context Blueprint can take an existing repository and produce a useful, traceable, non-invented Project Context. The test should cover repository inventory, technology detection, architecture reconstruction, requirements/behavior extraction, decisions vs facts vs AI inferences, problems, work-management reconstruction with Completed/In Progress/Next/Backlog/Blocked, project-specific rules, history, Software Standard/Blueprint version references, and AI Handoff. It should also verify that unknowns remain unknown, user decisions are not silently overwritten, and important context can be traced back to repository evidence.

## Test Outcome Handling

Do not modify the committed framework merely to make the test pass. Record findings first, distinguish true schema gaps from missing repository evidence, then propose changes. If changes are justified, update the blueprint/memory, re-run conversation validation, and commit separately.

# Roadmap Status

## Current phase
- Framework 1.0.0 / Project Context Blueprint 1.0.0 are the working baseline.
- Software Standards remain 0.1.0 pre-production.
- Full Bootstrap / Existing Repository Onboarding validation is complete: PASS WITH WARNING.
- Next phase is real-world Pilot usage, not broad preemptive framework expansion.

## Pilot strategy
1. Select one controlled/real existing project.
2. Use the canonical bootstrap prompt and AI entry-point workflow.
3. Let AI discover the Framework, reconstruct/update Project Context, propose material changes, obtain explicit approval, execute, validate, and record results.
4. Capture concrete failures, ambiguities, missing evidence, missing contracts, and user-requested behavior changes.
5. Convert only recurring or material Pilot findings into Framework changes.
6. Re-test affected procedures/contracts before changing version identifiers.

## Future development candidates (only when Pilot evidence justifies them)
- Strengthen Project Context contract and Evidence/Provenance.
- Formalize Proposal/Approval contract.
- Strengthen reusable Validation contracts.
- Validate across multiple project types.
- Improve documentation or automation/CLI only when actual usage demonstrates need.

## Fixed invariants
- AI is the execution engine; no separate target-project runtime runner.
- User approval is required for material changes.
- Git history/commits/diffs/branches/tags/blame are not onboarding evidence.
- `BLOCKED` is distinct from `FAIL`.
- Do not increment Framework/Blueprint/Procedure/Evidence versions for speculative changes; test real changes first.
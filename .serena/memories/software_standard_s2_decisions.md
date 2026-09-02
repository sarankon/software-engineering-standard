Software Standard S2 decisions approved by user.

User decisions:
1. Separate record certainty/lifecycle from normative publication lifecycle. Use `record_state` for record certainty (`confirmed`, `proposed`, `unknown`, `deprecated`) and rename the normative lifecycle field to `lifecycle_state` (instead of `status` in the new schema) with the original lifecycle values: `draft`, `proposed`, `active`, `deprecated`, `removed`. Do not discard the original lifecycle model.
2. Keep the original normative levels exactly: `MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT`, `MAY`. Do not replace them with the four-level simplification.
3. Preserve and extend the existing standard relationship model (ownership, dependency direction, cross-reference, conflict resolution, verification/maintenance) for AI-readable governance. Do not discard existing `standards/standard-relationships.md`.
4. Keep the original stable Rule ID approach from `standards/SPECIFICATION.md`, format `SES-{CATEGORY}-{NUMBER}`; Rule ID remains the clear identity of normative rules.
5. Keep the original standard rule structure/content conventions rather than replacing them.
6. Apply the recommended AI-friendly additions without discarding existing material. The new schema should layer structured metadata/governance on top of the original Standard Specification, not replace it.
7. Keep the existing ideas that were not selected for removal; integrate them into one coherent Software Standard specification file to reduce ambiguity and avoid split sources of truth.

Implementation constraint: Before the next implementation step, update memory and commit first, per user instruction. The target is to consolidate Software Standard decisions/specification into one file, while preserving original content and adding the approved schema/governance model.
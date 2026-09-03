# Project Context Blueprint

Project Context is the project-owned, structured knowledge base that allows AI agents to understand and continue developing a software project without relying on external memory.

It stores project understanding and state, not source code.

## Design Goals

- AI is the primary writer and maintainer.
- Users primarily review, discuss, decide, and instruct AI to apply changes.
- Context is organized by domain so AI can read and update only the relevant area.
- Facts, decisions, proposals, and unknowns are distinguishable.
- Important information has provenance and, where useful, concrete evidence references so AI can trace why a record exists.
- The structure can be reconstructed from an existing repository and upgraded across Blueprint versions.

## Project-Owned Structure

```text
.project-context/
├── project-identity/
├── technology/
├── architecture/
├── requirements/
├── decisions/
├── problems/
├── work-management/
│   ├── completed.md
│   ├── in-progress.md
│   ├── next.md
│   ├── backlog.md
│   └── blocked.md
├── project-rules/
├── history/
├── ai-handoff/
├── standards/
└── framework/
```

The exact files under a domain may grow as the Blueprint evolves. Domain names are stable conceptual boundaries, not restrictions on implementation. The `standards/` domain stores project-owned Standard Profile and Assessment records; it does not replace the installed Framework Standards under `.project-context/project-standard/standards/`. The `framework/` domain stores project-owned Framework version and migration records.

## Ownership and Change Flow

1. User and AI discuss a change.
2. User makes or confirms the decision.
3. User instructs AI to apply the change.
4. AI updates the relevant Project Context domain.
5. AI records provenance and status where applicable.
6. AI keeps related domains consistent.

Users MAY directly edit Project Context when necessary, but AI remains the primary maintainer.

## Existing Project Onboarding

The canonical onboarding workflow is defined in [`ONBOARDING.md`](./ONBOARDING.md). It treats an old `.project-context` as supporting migration evidence rather than as the required target structure.

At a high level, AI should:

1. Detect repository, Git, documentation, instructions, standards, and any existing Project Context.
2. Read authoritative project instructions and applicable standards.
3. Analyze the current repository to establish implementation facts.
4. Read historical sources and old context to recover decisions, problems, completed work, and history.
5. Reconstruct all canonical domains using the current Blueprint.
6. Attach concrete evidence references to important reconstructed information.
7. Reconcile conflicts without silently overwriting confirmed user decisions.
8. Record Blueprint/Standard versions and onboarding limitations.
9. Generate the derived AI Handoff.
10. Validate schema, provenance, references, and work-state distinctions.

AI MUST treat current repository evidence as the primary source for current implementation facts, while Git and old context remain important historical/supporting evidence.

## Evidence Traceability

Project Context records may include `evidence` references such as repository-relative files, document sections, configuration keys, database objects, source symbols. See [`evidence-schema.md`](./evidence-schema.md).

Evidence supports traceability but does not change whether a record is confirmed, proposed, unknown, or inferred.

## Standards Relationship

Project Context records which Software Engineering Standard and related standard versions the project follows. It does not copy the global Standard into the project.

Blueprint upgrades MUST preserve project-specific context and MUST provide migration guidance when the structure changes.

## Specification

See [`SPECIFICATION.md`](./SPECIFICATION.md) for the normative Project Context Schema v1 rules.

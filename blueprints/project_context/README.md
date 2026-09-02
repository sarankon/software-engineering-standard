# Project Context Blueprint

Project Context is the project-owned, structured knowledge base that allows AI agents to understand and continue developing a software project without relying on external memory.

It stores project understanding and state, not source code.

## Design Goals

- AI is the primary writer and maintainer.
- Users primarily review, discuss, decide, and instruct AI to apply changes.
- Context is organized by domain so AI can read and update only the relevant area.
- Facts, decisions, proposals, and unknowns are distinguishable.
- Important information has provenance so AI can distinguish repository evidence from user decisions and AI inference.
- The structure can be reconstructed from an existing repository and upgraded across Blueprint versions.

## Project-Owned Structure

```text
project_context/
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
└── ai-handoff/
```

The exact files under a domain may grow as the Blueprint evolves. Domain names are stable conceptual boundaries, not restrictions on implementation.

## Ownership and Change Flow

1. User and AI discuss a change.
2. User makes or confirms the decision.
3. User instructs AI to apply the change.
4. AI updates the relevant Project Context domain.
5. AI records provenance and status where applicable.
6. AI keeps related domains consistent.

Users MAY directly edit Project Context when necessary, but AI remains the primary maintainer.

## Existing Project Onboarding

AI SHOULD be able to build Project Context from an existing repository by:

1. Inspecting repository structure and configuration.
2. Extracting observable facts.
3. Identifying technology and architecture.
4. Identifying requirements, decisions, problems, and current work where evidence exists.
5. Marking uncertain information as proposed or unknown instead of presenting inference as fact.
6. Producing an initial Project Context for user review.

## Standards Relationship

Project Context records which Software Engineering Standard and related standard versions the project follows. It does not copy the global Standard into the project.

Blueprint upgrades MUST preserve project-specific context and MUST provide migration guidance when the structure changes.

## Specification

See [`SPECIFICATION.md`](./SPECIFICATION.md) for the normative Project Context Schema v1 rules.

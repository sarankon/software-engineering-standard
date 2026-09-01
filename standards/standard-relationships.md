# Standard Relationships

Status: Draft
Category: Cross-cutting
Applicability: All SES-enabled projects

## Purpose

This document defines how Software Engineering Standards relate to one another, including scope boundaries, dependency direction, and ownership of cross-cutting concerns.

Its purpose is to prevent duplicated requirements, conflicting rules, and unclear responsibility as SES grows.

## Core Principle

Each Standard SHOULD have a clearly defined responsibility and SHOULD avoid defining requirements that primarily belong to another Standard.

Standards may depend on concepts established by lower-level or foundational standards, but higher-level standards SHOULD NOT redefine foundational concepts without a deliberate reason.

The relationship model defines conceptual dependency and authority. It does not prescribe a physical repository structure or implementation technology.

## Standard Layers

SES uses the following conceptual layers:

```text
Principles
    ↓
Foundation
    ↓
Architecture
    ↓
Domain / Engineering Practices
    ↓
Quality / Operations / Maintenance
```

The exact dependency between individual standards may cross these layers when necessary, but the hierarchy SHOULD remain understandable.

## Principles

`principles/` defines broad engineering principles and objectives that guide the rest of SES.

Principles SHOULD remain technology-independent and SHOULD NOT duplicate detailed implementation requirements that belong in lower-level standards.

## Foundation

`foundation/` defines baseline engineering responsibilities shared across projects.

Current Foundation standards include:

- Project Structure
- Repository
- Configuration
- Environment
- Dependencies
- Documentation
- AI Entry Point

Foundation standards establish common concepts and boundaries that other standards may build upon.

## Architecture

`architecture/` defines how systems are structured and how major components, boundaries, interfaces, and dependencies are organized.

Architecture standards SHOULD build on Foundation concepts without redefining repository, configuration, environment, or documentation responsibilities unnecessarily.

## Development

`development/` defines practices for implementing and changing software.

Development standards SHOULD consume architectural constraints and Foundation requirements rather than redefining them.

## Presentation

`presentation/` defines standards for user-facing presentation concerns such as UI, frontend behavior, interaction, accessibility, and presentation architecture where applicable.

Presentation standards SHOULD not redefine general architecture or development rules unless the requirement is specifically presentation-related.

## Data

`data/` defines standards for data modeling, persistence, lifecycle, integrity, auditability, and related concerns.

Data standards SHOULD own data-specific requirements rather than placing database-specific rules into Foundation merely because a repository or application uses a database.

## Integration

`integration/` defines standards for communication and interaction between systems, services, external providers, and other boundaries.

Integration standards SHOULD own protocol, API, messaging, interoperability, and integration-specific concerns.

## Security

`security/` defines security requirements that apply across the software lifecycle and system boundaries.

Security is cross-cutting and may constrain requirements in other categories. Security standards SHOULD define the security responsibility while other standards define their domain-specific behavior.

For example, a configuration standard may require secrets to be handled safely, while the security standard defines broader secret-management principles and controls.

## Quality

`quality/` defines practices for establishing confidence in software quality, including verification, testing, and quality attributes where applicable.

Quality standards SHOULD verify requirements defined by other standards rather than duplicating those requirements.

## Operations

`operations/` defines requirements for deploying, running, observing, recovering, and maintaining systems in operational environments.

Operations standards SHOULD build on Environment, Configuration, Security, and Architecture concepts where relevant.

## Maintenance

`maintenance/` defines practices for sustaining software over time, including evolution, deprecation, technical debt, upgrades, and lifecycle management.

Maintenance standards SHOULD address changes to existing systems without duplicating the original development requirements.

## Cross-standard Ownership

When a concern appears to belong to multiple standards, ownership SHOULD be assigned to the standard whose primary responsibility is the concern.

Other standards MAY reference or constrain that concern without becoming its authoritative owner.

Example:

```text
Configuration
    └── defines configuration responsibility

Environment
    └── defines where configuration is applied

Security
    └── defines security constraints on sensitive configuration
```

No single document should need to repeat the complete requirement from all three perspectives.

## Dependency Direction

Standards SHOULD prefer references toward foundational concepts rather than creating circular definitions.

For example:

```text
Architecture
    ↓
Development
    ↓
Quality
    ↓
Operations
```

A cross-cutting concern such as Security MAY influence multiple layers without requiring every layer to redefine Security requirements.

Circular dependencies between standards SHOULD be avoided. When unavoidable, the relationship and authority MUST be explicit.

## Conflict Resolution

When two standards appear to define conflicting requirements, the project MUST resolve the conflict explicitly rather than choosing silently.

Resolution SHOULD consider:

1. applicability;
2. specificity;
3. normative level;
4. standard authority;
5. architectural or project constraints; and
6. documented exceptions.

A more specific requirement MAY refine a general requirement when it does not violate the general intent. A material conflict SHOULD result in an explicit clarification or rule change in the authoritative Standard.

## Cross-references

Standards SHOULD reference another Standard when its requirements depend materially on that Standard.

Cross-references SHOULD identify the responsibility being referenced rather than copying large sections of text.

When a specific normative rule is referenced, the stable Rule ID SHOULD be used once that rule has been assigned an ID.

## Rule Ownership

Every normative rule SHOULD have one primary owning Standard.

A rule MUST NOT be duplicated in multiple standards merely for convenience when duplication could result in inconsistent future changes.

If multiple standards need the same outcome, the authoritative rule SHOULD be defined once and referenced by the others.

## Verification

Review the Standard set and verify that each Standard has a clear responsibility, major cross-cutting concerns have identifiable owners, unnecessary duplication is avoided, dependency direction is understandable, cross-references are appropriate, and apparent conflicts are explicitly resolved.

## Maintenance

This relationship model SHOULD be reviewed whenever a new Standard category is introduced or when the responsibility of an existing Standard changes materially.

Changes to Standard relationships SHOULD be evaluated for duplicate requirements, broken references, and migration impact on existing projects.

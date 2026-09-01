# Environment Standard

Status: Draft
Level: MUST / SHOULD / MAY
Category: Foundation
Applicability: All SES-enabled projects

## Purpose

This standard defines principles for identifying, managing, isolating, and operating software environments throughout the project lifecycle.

## Core Principle

An environment is a defined execution context in which an application and its supporting services operate. Environment requirements MUST be based on purpose, risk, and project needs rather than a universal number or naming convention.

SES defines environment responsibilities and boundaries, not a mandatory platform, infrastructure model, environment count, or naming scheme.

## Environment Definition

Each environment created by a project MUST have a clear purpose and identifiable ownership.

The project MUST be able to determine, for each applicable environment:

- its intended purpose;
- what application or services run there;
- what configuration and dependencies it uses;
- what data it may access; and
- who or what is authorized to access it.

Projects MAY use any appropriate environment naming convention.

## Environment Purpose

Projects SHOULD create an environment only when it serves a meaningful engineering, testing, delivery, operational, or user-facing purpose.

Common purposes include:

- **Local** — individual development and experimentation.
- **Development** — shared development or integration.
- **Testing** — automated or manual validation.
- **Staging** — production-like validation before release.
- **Production** — serving real users or production workloads.

These are examples, not a required environment set.

## Lifecycle

The lifecycle of each environment MUST be understood and documented when it materially affects development or delivery.

An environment MAY be permanent, ephemeral, or created on demand depending on project needs.

Temporary environments SHOULD have clear ownership and cleanup rules.

## Isolation

Environments MUST be isolated to a degree appropriate to their risk and purpose.

Production MUST be protected from unintended access or changes originating from non-production environments.

Where applicable, projects SHOULD isolate:

- credentials and secrets;
- databases and persistent storage;
- external service accounts;
- network access;
- deployment permissions; and
- operational resources.

An environment MUST NOT implicitly grant production access merely because a user or process has access to a non-production environment.

## Consistency and Reproducibility

Important environments SHOULD be reproducible from documented configuration, infrastructure, and deployment procedures.

Environment behavior MUST NOT depend on undocumented machine-specific state for normal operation.

Where an environment cannot be fully reproduced, material manual steps and dependencies MUST be documented.

Projects SHOULD minimize unnecessary differences between environments that are intended to validate the same application behavior.

## Environment-specific Configuration

Environment-specific values MAY differ when required by the environment's purpose.

Such differences SHOULD be explicit, predictable, and documented when they materially affect application behavior.

Configuration management requirements are defined by the Configuration Standard.

Environment selection SHOULD NOT be embedded in application logic merely to compensate for undocumented infrastructure differences.

## Data Management

Data MUST be handled according to the environment's purpose and applicable security and privacy requirements.

Production data MUST NOT be copied directly into non-production environments unless the project has an approved process that addresses applicable security, privacy, and access requirements.

When production-derived data is required for non-production use, the project SHOULD use appropriate sanitization, anonymization, masking, or synthetic data processes.

## Access and Security

Access to each environment MUST follow least-privilege principles appropriate to its risk.

Production access SHOULD be more restricted than non-production access.

Environment credentials MUST be managed according to the Security and Configuration Standards and MUST NOT be embedded in application source code.

Projects SHOULD maintain an identifiable record of significant production access and changes where required by project risk or operational policy.

## Local Development

Local development environments SHOULD provide a practical and repeatable way for developers and AI agents to perform the work required by the project.

Local-only configuration MAY exist when it is genuinely specific to the developer's machine, but it MUST NOT become an undocumented dependency for the project as a whole.

## Promotion and Deployment

When a project uses multiple delivery environments, deployed application versions SHOULD be traceable to a known source revision or artifact.

Projects MAY promote artifacts through environments or rebuild them per environment according to their delivery architecture, provided the resulting release is traceable and reproducible to an appropriate degree.

SES does not mandate a specific CI/CD platform or promotion pipeline.

## Exceptions

A project MAY use a non-standard environment model when required by its architecture, technology, regulatory requirements, or operational model.

The project MUST document material deviations from normative requirements in its project context.

## Verification

Review each applicable environment and verify that its purpose and ownership are clear, boundaries are appropriate, configuration is controlled, access is restricted, data handling is appropriate, important environments are reproducible, and deployed versions are traceable when applicable.

## Migration

When adopting this standard in an existing project, inventory the current environments and document their purposes, dependencies, configuration, data, access, and deployment processes.

Consolidate or remove environments that have no meaningful purpose where practical. Introduce missing isolation or access controls according to risk, and document manual steps or environment-specific differences that cannot immediately be eliminated.

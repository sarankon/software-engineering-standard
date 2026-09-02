# Foundation Standard

**Standard ID:** `SES-FND`
**Version:** `1.0.0`
**Record State:** `confirmed`
**Lifecycle State:** `draft`
**Category:** Foundation
**Applicability:** All SES-enabled repositories and deployable software projects.

## Purpose
Define baseline repository, project structure, configuration, environment, dependency, documentation, and AI entry-point practices.

## Rules

### SES-FND-001 — Repository structure
**Level:** MUST
Project-owned files MUST have a predictable structure that separates source code, configuration, documentation, generated artifacts, and Project Context.

### SES-FND-002 — Configuration separation
**Level:** MUST
Environment-specific configuration MUST be separated from source code and secrets MUST NOT be committed as plaintext credentials.

### SES-FND-003 — Environment declaration
**Level:** MUST
Required runtime, build, and development environments MUST be documented sufficiently to reproduce supported workflows.

### SES-FND-004 — Dependency management
**Level:** MUST
Dependencies MUST be declared through the project's supported package/build mechanism and MUST be identifiable by version or an equivalent reproducible constraint.

### SES-FND-005 — Dependency minimization
**Level:** SHOULD
Projects SHOULD avoid unnecessary dependencies and SHOULD remove unused dependencies.

### SES-FND-006 — Project documentation
**Level:** MUST
Required setup, architecture, operation, and project-specific conventions MUST be documented where a maintainer or AI agent needs them to work safely.

### SES-FND-007 — AI entry point
**Level:** SHOULD
Projects SHOULD provide a clear AI entry point that identifies Project Context, applicable Standards, and the expected workflow for AI-assisted changes.

### SES-FND-008 — Generated artifacts
**Level:** MUST
Generated artifacts MUST be identifiable and MUST NOT become an accidental source of truth when their source can be regenerated.

## Verification / Evidence
Inspect repository structure, manifests, configuration templates, environment documentation, and AI entry-point artifacts.

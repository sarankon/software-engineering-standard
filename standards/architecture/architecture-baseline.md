# Architecture Standard

**Standard ID:** `SES-ARC`
**Version:** `0.1.0`
**Record State:** `confirmed`
**Lifecycle State:** `draft`
**Category:** Architecture
**Applicability:** Software systems, services, applications, modules, and integrations.

## Purpose
Define minimum architectural boundaries, dependencies, interfaces, and decision practices.

## Rules

### SES-ARC-001 — Explicit system boundaries
**Level:** MUST

Major system, service, module, and external boundaries MUST be identifiable.

### SES-ARC-002 — Responsibility boundaries
**Level:** MUST

Each major component MUST have an identifiable responsibility and owner.

### SES-ARC-003 — Dependency direction
**Level:** MUST

Dependencies MUST follow the architecture's declared direction and MUST NOT create prohibited cycles across architectural boundaries.

### SES-ARC-004 — Business/domain isolation
**Level:** SHOULD

Business rules SHOULD remain isolated from transport, persistence, presentation, and infrastructure concerns where practical.

### SES-ARC-005 — Stable interfaces
**Level:** MUST

Cross-component contracts MUST be explicit enough for consumers to understand inputs, outputs, errors, and compatibility expectations.

### SES-ARC-006 — External system isolation
**Level:** MUST

External dependencies MUST be isolated behind an appropriate boundary when direct coupling would spread provider-specific behavior through the system.

### SES-ARC-007 — Architecture decisions
**Level:** MUST

Material architecture decisions MUST be recorded in Project Context with rationale and consequences.

### SES-ARC-008 — Architecture change impact
**Level:** MUST

Changes to architectural boundaries MUST identify affected components, contracts, data, security, and migration considerations before implementation.

## Verification / Evidence
Use module structure, dependency declarations, interfaces, architecture records, and tests. Git history MUST NOT be used as onboarding evidence.

# Dependency Standard

Status: Draft
Level: MUST / SHOULD / MAY
Category: Foundation
Applicability: All SES-enabled projects

## Purpose

This standard defines principles for selecting, declaring, maintaining, securing, and removing software dependencies.

## Core Principle

Dependencies are engineering artifacts and MUST be managed throughout their lifecycle. Projects MUST keep dependencies identifiable, maintainable, appropriately secure, and reproducible to a degree appropriate to the project.

SES defines dependency responsibilities and outcomes rather than prescribing a specific language, package manager, registry, or dependency-management tool.

## Dependency Selection

Before introducing a new dependency, the project SHOULD evaluate whether the dependency provides sufficient value relative to its cost and risk.

Evaluation SHOULD consider applicable factors including:

- actual project need;
- existing capabilities that could satisfy the need;
- maintenance activity and project maturity;
- compatibility with the project technology and architecture;
- security history and known vulnerabilities;
- license and compliance requirements;
- ecosystem and community health; and
- operational and maintenance cost.

Projects SHOULD avoid dependencies that provide insignificant value while adding unnecessary complexity or risk.

## Declaration and Versioning

Direct dependencies MUST be explicitly declared through the dependency-management mechanism appropriate to the technology.

Dependency versions or version constraints MUST be sufficiently explicit to make the intended dependency set understandable and reproducible.

Projects SHOULD use a lock or equivalent resolution mechanism when the ecosystem supports it and when doing so materially improves build reproducibility.

SES does not mandate a specific package manager, registry, versioning scheme, or lock-file format.

## Direct and Transitive Dependencies

Projects MUST distinguish between dependencies required directly by application code and dependencies introduced transitively by other dependencies.

Application code SHOULD NOT rely directly on a transitive dependency when that dependency is a required part of the application's own contract. In such cases, it SHOULD be declared as a direct dependency.

Transitive dependencies SHOULD be monitored because changes to them can affect security, compatibility, and reproducibility.

## Dependency Lifecycle

Dependencies SHOULD be managed through an identifiable lifecycle:

```text
Evaluate
   ↓
Select
   ↓
Declare
   ↓
Use
   ↓
Maintain
   ↓
Update / Replace
   ↓
Remove
```

Projects MAY introduce approval or governance steps appropriate to their risk and organizational requirements.

## Updates

Projects SHOULD periodically assess dependencies for available updates, end-of-life status, compatibility changes, and security issues.

Updates SHOULD be evaluated rather than applied blindly. The project SHOULD consider:

- compatibility;
- breaking changes;
- security impact;
- regression risk;
- migration effort; and
- operational impact.

Security-critical updates SHOULD be prioritized according to their assessed risk.

Projects SHOULD avoid unnecessary dependency churn when an update provides no meaningful benefit.

## Security

Projects MUST have a mechanism appropriate to their risk for identifying known dependency vulnerabilities.

When a dependency vulnerability is identified, the project MUST assess its applicability and risk and SHOULD update, replace, remove, or otherwise mitigate the affected dependency as appropriate.

A mitigation decision SHOULD be documented when a known vulnerability cannot reasonably be remediated immediately.

Dependency security checks MAY be performed through automated tooling, manual review, or a combination appropriate to project risk.

## License and Compliance

Dependencies MUST comply with applicable project, organizational, and legal requirements.

Projects SHOULD evaluate dependency licenses before adoption when licensing can materially affect use, distribution, or compliance.

Dependencies with incompatible licensing or compliance implications MUST NOT be introduced without an approved resolution.

## Removal

Unused or unnecessary dependencies SHOULD be removed.

Removing a dependency SHOULD include removal of related configuration, imports, generated metadata, and other artifacts when no longer required.

Projects SHOULD periodically review dependencies for obsolete or unused packages.

## Reproducibility

A project SHOULD be able to resolve and install the intended dependency set consistently across supported environments.

Dependency manifests, lock or equivalent resolution data, and required package-manager configuration MUST be treated as project artifacts when needed to reproduce the supported dependency set.

Build reproducibility SHOULD account for the toolchain and package source assumptions that materially affect dependency resolution.

## Exceptions

A project MAY deviate from a dependency-management practice when its technology ecosystem, deployment model, or operational constraints make the practice inappropriate.

A deviation from a normative requirement MUST be documented in the project context with its rationale and applicable mitigation.

## Verification

Review the project and verify that direct dependencies are explicitly declared, versions are understandable, dependency resolution is reproducible where appropriate, unnecessary dependencies are removed, known vulnerabilities are assessed, licensing requirements are addressed, and dependency-management responsibilities are clear.

## Migration

When adopting this standard in an existing project, inventory direct and transitive dependencies, identify undeclared direct usage, review versions and resolution data, assess known security and licensing risks, and remove dependencies that are no longer needed.

Migration SHOULD prioritize security and reproducibility risks before cosmetic dependency cleanup.

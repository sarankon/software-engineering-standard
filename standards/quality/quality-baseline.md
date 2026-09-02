# Quality Standard

**Standard ID:** `SES-QLT`
**Version:** `0.1.0`
**Record State:** `confirmed`
**Lifecycle State:** `draft`
**Category:** Quality
**Applicability:** All software projects.

## Purpose
Define minimum verification, testing, review, and quality-gate practices.

## Rules

### SES-QLT-001 — Risk-based verification
**Level:** MUST
Every material change MUST receive verification appropriate to its functional, security, data, and operational risk.

### SES-QLT-002 — Automated regression coverage
**Level:** SHOULD
Stable critical behavior SHOULD have automated regression tests.

### SES-QLT-003 — Test determinism
**Level:** MUST
Automated tests used as quality evidence MUST be sufficiently deterministic to distinguish product failures from test instability.

### SES-QLT-004 — Critical path verification
**Level:** MUST
Critical business, authentication, authorization, data-integrity, and security paths MUST have explicit verification.

### SES-QLT-005 — Static and build validation
**Level:** MUST
Projects MUST run applicable build, type, lint, static-analysis, or equivalent validation before declaring a material change verified.

### SES-QLT-006 — Defect traceability
**Level:** MUST
Known quality failures that prevent release or create material risk MUST be represented in Project Context or the project's approved defect system.

### SES-QLT-007 — Review evidence
**Level:** SHOULD
Material changes SHOULD retain concise evidence of what was verified and what remains unknown.

### SES-QLT-008 — No false confidence
**Level:** MUST NOT
A project MUST NOT declare a change compliant when required verification is missing or materially inconclusive.

## Verification / Evidence
Use test results, build output, static analysis, review records, defect records, and explicit unknowns.

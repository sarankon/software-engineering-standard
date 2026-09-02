# Foundation Principles

This document defines the foundational principles of the Software Engineering Standard (SES).

## 1. Purpose

SES provides a consistent, versioned engineering baseline for designing, developing, verifying, deploying, and maintaining software across projects.

## 2. Scope

SES covers engineering practices that can be shared across projects. Project-specific decisions, domain knowledge, and implementation details belong to the project's `project_context/`.

## 3. Standard Hierarchy

Rules should be interpreted in this order:

1. Mandatory requirements (`MUST`, `MUST NOT`)
2. Recommended practices (`SHOULD`, `SHOULD NOT`)
3. Optional practices (`MAY`)
4. Project-specific documented exceptions

A project exception must be explicitly documented and justified.

## 4. Human and AI Development

SES is designed to be usable by both human developers and AI agents. Rules should be explicit, testable, and supported by clear examples where ambiguity is likely.

AI agents use the project's `AGENTS.md` as the entry point and follow applicable `project_context/` instructions and SES rules.

## 5. Source of Truth

Global reusable engineering rules are maintained in SES. Project-specific information is maintained in the project's `project_context/`. Actual behavior is determined by source code and runtime configuration.

Each piece of information should have one authoritative location.

## 6. Versioning

SES uses Semantic Versioning:

```text
MAJOR.MINOR.PATCH
```

Changes that affect existing requirements or require project migration must be explicitly documented.

## 7. Verification

Every meaningful standard should define how compliance can be verified. Rules that cannot reasonably be checked should be clarified or scoped appropriately.

## 8. Evolution

SES evolves through real project usage, recurring engineering problems, lessons learned, and demonstrated improvements. Standard changes must preserve history through versioning and changelog entries, with migration guidance when existing projects can be affected.

## Baseline Draft

`principles-baseline.md` provides the current rule-level draft for comprehensive review. It is draft only and does not replace this foundational guidance until approved.

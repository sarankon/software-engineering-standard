# Evidence Reference Schema

**Schema Version:** 1.0.0
**Status:** Active

## Purpose

Evidence references provide traceability from Project Context records to the concrete information used to create or update them.

A source category such as `repository_analysis` explains the provenance class; an evidence reference identifies the specific supporting material.

## Conceptual Shape

A record MAY contain an `evidence` collection:

```yaml
evidence:
  - type: file
    locator: package.json
    detail: dependencies.next
    observed_at: 2026-09-02T10:00:00+07:00
    note: Current repository configuration
```

## Fields

| Field | Required | Meaning |
|---|---|---|
| `type` | YES | Evidence kind |
| `locator` | YES | Stable or repository-relative location of the evidence |
| `detail` | OPTIONAL | Section, key, symbol, table, heading, commit, or other precise anchor |
| `observed_at` | RECOMMENDED | When AI observed the evidence |
| `note` | OPTIONAL | Short explanation of relevance |

## Evidence Types

The following types are recommended:

- `file` — repository-relative file or directory evidence.
- `document` — documentation, Project Context, standard, or other document.
- `config` — a configuration value or configuration section.
- `database` — database schema/table/column/migration evidence.
- `symbol` — a source-code symbol or named implementation element.
- `external_reference` — an explicitly recorded external source.
- `user_statement` — a direct user-provided statement or decision.

Implementations MAY add evidence types, but MUST preserve the meaning of the common fields.

## Locator Rules

`locator` SHOULD be durable and specific enough for another AI agent to find the evidence again.

Preferred examples:

```text
package.json
.project-context/memories/decisions.md
lib/db/schema.ts
commit:8a0cded
config:database.url
```

When a document contains a relevant section, use `detail` rather than copying the section into Project Context.

For source evidence, prefer a repository-relative path plus a symbol or configuration key when available.

## Traceability Rules

1. `source` and `evidence` have different responsibilities and SHOULD both be recorded when useful.
2. Important confirmed facts reconstructed from a repository SHOULD have at least one concrete evidence reference when such evidence is available.
3. AI inferences SHOULD reference the evidence from which the inference was derived.
4. User decisions SHOULD use `source: user_decision`; a `user_statement` evidence reference MAY identify the originating conversation or decision record when the implementation can persist such a locator.
5. Evidence references do not make an inference confirmed. `status` remains authoritative for lifecycle/acceptance state.
6. Evidence is traceability metadata, not a request to copy source code into Project Context.
7. If evidence is no longer available, the record SHOULD retain the reference and mark the limitation in its status/history as appropriate rather than inventing replacement evidence.

## Current vs. Historical Evidence

Changelogs, old Project Context, and other project-owned historical documentation may describe earlier states or decisions, but they do not by themselves prove current implementation state.

When current and historical evidence differ, current repository/source evidence should describe the current implementation, while historical documentation belongs in history or the relevant decision record. Git history is not an evidence source for Project Context.

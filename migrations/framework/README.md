# Framework Migration Guides

This directory contains version-specific migration guidance for Framework transitions.

## Purpose

The generic orchestration is defined by:

`ai_development/migration/framework-update-procedure.md`

A migration guide in this directory describes the concrete transformation from one Framework version to another.

## Naming

Use:

`<from-version>-to-<to-version>.md`

Example:

`1.0.0-to-1.1.0.md`

## Required guide content

- source and target versions;
- affected artifacts;
- change classification;
- record/data mappings;
- compatibility and breaking changes;
- approval requirements;
- validation requirements;
- known risks;
- application development work that must remain separate.

Do not use Git history, commit messages, branches, tags, diffs, or blame as migration evidence.

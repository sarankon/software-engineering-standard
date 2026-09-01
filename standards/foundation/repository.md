# Repository Standard

Status: Draft
Level: MUST / SHOULD / MAY
Category: Foundation
Applicability: All SES-enabled projects

## Purpose

This standard defines principles for repository integrity, source control, collaboration, security, and traceability. It does not prescribe a universal branching or collaboration workflow.

## Core Principle

SES defines repository responsibilities and integrity requirements, but does not prescribe a universal branching, commit, review, or collaboration workflow. Projects MUST select and document a workflow appropriate to their technology, architecture, team, and delivery model.

## Source Control

- Project source code and engineering artifacts that require history MUST be managed by version control.
- Git SHOULD be used unless a documented project constraint requires another version control system.
- Repository history MUST be preserved according to the project's retention requirements.
- Changes to source and engineering artifacts MUST be traceable to a version-controlled change.

## Default Branch

- Every repository MUST have a clearly identified default/integration branch.
- The default branch name and purpose MUST be documented or discoverable through the repository tooling.
- Projects MAY choose a branch strategy appropriate to their workflow. SES does not mandate Git Flow, trunk-based development, or another specific strategy.

## Branching

- Branches MUST have a clear purpose.
- Branches SHOULD be short-lived when the workflow allows it.
- Project-specific branch naming conventions SHOULD be documented.
- Protected branch rules SHOULD be used where the repository platform supports them and the project risk warrants them.

## Commits

- A commit MUST represent a coherent logical change.
- Commit messages MUST communicate the purpose of the change sufficiently for future maintainers.
- Unrelated changes SHOULD NOT be combined into the same commit.
- Generated, temporary, machine-specific, or local-only files MUST NOT be committed unless they are intentionally part of the project artifact.
- Projects MAY adopt Conventional Commits or another commit convention; if adopted, the convention MUST be documented and applied consistently.

## Collaboration and Review

- Changes entering a shared integration or release branch MUST follow the project's documented review and integration process.
- The review process MUST be appropriate to project risk and team size.
- Projects MAY use pull requests, merge requests, direct integration, or another documented workflow.
- Automated checks SHOULD run before integration when practical.

## Repository Hygiene

Repositories MUST NOT contain secrets, credentials, passwords, private keys, tokens, or other sensitive material unless the material is explicitly designed for repository storage and approved for that purpose.

Projects SHOULD maintain an appropriate ignore configuration such as `.gitignore` to prevent accidental inclusion of local and generated artifacts.

The repository SHOULD avoid unnecessary generated files, build output, caches, temporary files, IDE-specific files, and machine-specific configuration.

## Security Incident: Secret Exposure

If a secret or sensitive credential is committed, removing it from the current working tree is not sufficient. The project MUST assess the exposure and SHOULD rotate or revoke the affected credential as appropriate. History rewriting MAY be required according to the project's incident response process.

## Release and Traceability

When a project has formal releases, each release SHOULD be traceable to a specific repository state such as a commit or tag.

Projects MAY use Git tags, release objects, changelogs, or other mechanisms to establish release traceability.

Release versioning MUST follow the project's documented versioning strategy.

## Repository Configuration

Repository-level configuration MUST be treated as part of the project's engineering artifacts when it affects development, validation, security, or delivery behavior.

Configuration containing secrets MUST be supplied through an approved secret/configuration mechanism rather than committed as plaintext repository content.

## Exceptions

Project-specific repository workflows are not exceptions merely because they differ from SES examples. An exception is required only when a project intentionally does not satisfy a normative SES requirement. Exceptions MUST be documented in the project context.

## Verification

Review the repository and verify that version control is active, the default branch is identifiable, the branching and collaboration workflow is documented, commits are coherent and traceable, sensitive material is absent, repository hygiene rules are applied, and releases are traceable when applicable.

## Migration

When adopting this standard in an existing project, assess the repository before restructuring it. Remove or remediate prohibited content, establish missing conventions, document the existing workflow, and preserve useful history. Secret exposure MUST be handled as a security concern rather than merely a repository-cleanup task.


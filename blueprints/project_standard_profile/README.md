# Project Standard Profile Blueprint

Blueprint Version: 1.0.0

## Purpose

Define the project-owned structure that tells AI which Software Standards apply to a project and what project-specific handling has been approved.

## Recommended Project Location

```text
.project-context/standards/profile.md
```

## Profile Structure

```yaml
profile:
  id: project-standard-profile
  project_id: <project-id>
  profile_version: 1
  record_state: confirmed
  standards:
    - standard_id: SES-SEC
      version: 0.1.0
      mode: adopt
      record_state: confirmed
      applicability: applicable
      source: user-decision
      confidence: high
  created_at: <timestamp>
  updated_at: <timestamp>
```

## AI Workflow

1. Read the available Standards and exact versions.
2. Determine applicability from project evidence.
3. Propose profile entries when the project has no confirmed decision.
4. Present proposed changes to the user.
5. Apply only after user approval.
6. Use the confirmed profile as input to Standard Assessment.

## Source of Truth

The Project Standard Profile is the source of truth for project-level Standard adoption and applicability. The global Standards remain the source of truth for normative rules.

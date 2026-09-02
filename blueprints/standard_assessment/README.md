# Standard Assessment Blueprint

Blueprint Version: 1.0.0

## Purpose

Define the project-owned artifact used by AI to report compliance evaluation against the Software Standard versions selected by the Project Standard Profile.

## Recommended Project Location

```text
.project-context/standards/assessments/
```

A project MAY keep one current assessment per Standard and historical assessments separately.

## Assessment Structure

```yaml
assessment:
  id: assessment-2026-09-03-001
  project_id: <project-id>
  profile_id: project-standard-profile
  standard_id: SES-SEC
  standard_version: 0.1.0
  status: partial
  record_state: proposed
  findings:
    - rule_id: SES-SEC-004
      standard_id: SES-SEC
      standard_version: 0.1.0
      status: fail
      evidence:
        - path: config/example.env
          reference: SECRET_KEY
      confidence: high
      finding: Secret handling does not meet the rule requirement.
      recommendation: Move the credential to the supported secret-management mechanism.
      assessed_at: <timestamp>
      record_state: proposed
  assessed_at: <timestamp>
```

## AI Assessment Workflow

1. Read the confirmed Project Standard Profile.
2. Load the exact Standard version referenced by the profile.
3. Determine applicable rules.
4. Inspect project source, configuration, documentation, and Project Context evidence.
5. Produce one finding per applicable Rule ID.
6. Mark insufficient evidence as `unknown`; do not guess.
7. Record evidence and confidence for each finding.
8. Summarize Standard-level status from rule findings.
9. Propose remediation or exception where appropriate.
10. Wait for user approval before applying project changes.

## Source of Truth

- Global Standard: normative rule definitions.
- Project Standard Profile: project adoption, applicability, and approved project-specific handling.
- Standard Assessment: point-in-time evaluation result.
- Project source/configuration/Project Context: evidence.

## Assessment Summary

The Standard-level `status` is a summary and MUST NOT hide rule-level failures, partial results, or unknown evidence. The rule findings remain the authoritative details of the assessment.

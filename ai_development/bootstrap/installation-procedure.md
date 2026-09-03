# New Project Bootstrap Installation Procedure

**Procedure Version:** 1.0.0  
**Applies To:** New SES-enabled projects without an existing canonical Project Context  
**Status:** Active

## 1. Purpose

This procedure defines the deterministic workflow for AI to install the Software Engineering Standard into a new project and initialize its project-owned Project Context.

The Framework Repository is the source of truth for framework artifacts. The target project remains the source of truth for project-specific facts and decisions. **AI is the execution engine** for this procedure; no separate Automated Bootstrap Runner or Framework Runtime Runner is required.

## 2. Operating Model

AI MUST execute this procedure directly in the target repository using the authoritative Framework procedures, Blueprints, Standards, and version-specific guidance.

AI MUST operate through the following state flow:

`DISCOVER → INSPECT → ANALYZE → PROPOSE → WAIT_FOR_APPROVAL → APPLY → VALIDATE → RECORD`

AI MUST NOT bypass `WAIT_FOR_APPROVAL` for material project changes.

## 3. Preconditions

Before changing the target project, AI MUST:

1. Read `AI_BOOTSTRAP.md`.
2. Identify the Framework Repository revision and active framework artifacts.
3. Read applicable AI Development instructions, Project Context Blueprint, Software Standards, and this procedure.
4. Inspect target-project instructions and repository structure.
5. Confirm that no existing canonical Project Context requires Existing Repository Onboarding instead.
6. Determine whether any material project-specific decisions are required before installation can proceed.

## 4. Installation Rules

### 4.1 Framework artifacts

AI MUST install or reference only the framework artifacts required by the target project. The Framework Repository's `.serena/` directory MUST NOT be copied into the target project.

### 4.2 Project Context location

Project Context is project-owned and MUST be separate from application source code and runtime data. The default physical location for SES installation is `.project-context/`. A project may use another documented location when its tooling or existing convention requires it.

### 4.3 Blueprint structure

AI MUST create the canonical Project Context using the active Blueprint domains. AI MUST NOT copy the framework reference implementation as project data.

### 4.4 Execution

AI performs file and repository operations directly after the required approval gate. A separate executable bootstrap runner is not part of the target project runtime architecture.

## 5. Installation Procedure

1. **Discover framework:** read `AI_BOOTSTRAP.md`, then discover applicable instructions, Blueprint, Standards, and procedures.
2. **Inspect target:** read project instructions and identify purpose, technology, architecture, repository structure, and documentation.
3. **Determine context state:** if a canonical Project Context exists, stop this procedure and use Existing Repository Onboarding or an explicit upgrade procedure.
4. **Analyze and plan:** determine required framework artifacts and project-specific choices; distinguish confirmed facts, decisions, proposals, and unknowns.
5. **Propose:** explain material changes, alternatives, risks, and expected effects to the user.
6. **Wait for approval:** obtain explicit user approval before applying material changes.
7. **Create context:** after approval, create Project Context at the project-defined location using active Blueprint domains.
8. **Populate facts:** record only information supported by repository/configuration/documentation evidence.
9. **Record uncertainty:** use `proposed` for AI inferences and `unknown` where information is unavailable.
10. **Record decisions:** only mark a decision confirmed when supplied or explicitly confirmed by the user or an authoritative project decision record.
11. **Record evidence:** attach concrete evidence references to important facts and inferences where available.
12. **Record versions:** record Framework, Blueprint, and applicable Software Standard versions used.
13. **Generate AI Handoff:** create the derived AI Handoff from authoritative Project Context records.
14. **Validate:** verify domains, metadata, provenance, evidence, references, work-state separation, versions, and Handoff consistency.
15. **Record result:** record what AI changed, validation results, limitations, unresolved decisions, and the resulting state.

## 6. User Decisions

AI MUST NOT invent project-specific decisions during installation. If a material choice is required, AI MUST explain options and impact, then wait for the user's explicit decision.

A prompt, proposal, target version, implied intent, or continuation of the conversation MUST NOT be interpreted as approval for a material change.

## 7. Source Code Boundary

Bootstrap installation MUST NOT modify application source code merely to initialize the framework. Source, configuration, or dependency changes require a separate approved development task or an explicit framework requirement.

## 8. Completion Record

The Project Context SHOULD retain a concise initialization record containing procedure version, Framework revision, Blueprint version, applicable Standard versions, initialization timestamp, inspected sources, limitations, unresolved user decisions, and the validation result.

## 9. Validation

Installation is complete only when the active Blueprint validates, important claims are traceable, no unconfirmed inference is presented as fact or decision, versions are recorded, AI Handoff is consistent, and no critical initialization errors remain.

Runtime validation status MUST use the defined statuses (`PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`, or `UNKNOWN`) according to actual execution evidence. `BLOCKED` MUST NOT be interpreted as `FAIL`.

## 10. Relationship to Project Onboarding

This procedure initializes a new project. The umbrella `ai_development/onboarding/project-onboarding.md` selects the appropriate flow. Existing repositories requiring reconstruction MUST use `blueprints/project_context/ONBOARDING.md`; Git history and other Git metadata are never required as onboarding evidence.

## 11. Runtime Architecture Boundary

The Software Engineering Standard Framework has no required runtime Runner. AI is the execution engine for Framework installation, upgrade, migration, and validation. Any executable runner used in Framework tests is test tooling only and MUST NOT be treated as a required component of the target project.

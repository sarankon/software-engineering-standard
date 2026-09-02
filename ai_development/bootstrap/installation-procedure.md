# New Project Bootstrap Installation Procedure

**Procedure Version:** 1.0.0  
**Applies To:** New SES-enabled projects without an existing canonical Project Context  
**Status:** Active

## 1. Purpose

This procedure defines the deterministic workflow for installing the Software Engineering Standard into a new project and initializing its project-owned Project Context.

The Framework Repository is the source of truth for framework artifacts. The target project remains the source of truth for project-specific facts and decisions.

## 2. Preconditions

Before changing the target project, AI MUST:

1. Read `AI_BOOTSTRAP.md`.
2. Identify the Framework Repository revision and active framework artifacts.
3. Read applicable AI Development instructions, Project Context Blueprint, Software Standards, and this procedure.
4. Inspect target-project instructions and repository structure.
5. Confirm that no existing canonical Project Context requires Existing Repository Onboarding instead.

## 3. Installation Rules

### 3.1 Framework artifacts

AI MUST install or reference only the framework artifacts required by the target project. The Framework Repository's `.serena/` directory MUST NOT be copied into the target project.

### 3.2 Project Context location

Project Context is project-owned and MUST be separate from application source code and runtime data. The default physical location for SES installation is `.project-context/`. A project may use another documented location when its tooling or existing convention requires it.

### 3.3 Blueprint structure

AI MUST create the canonical Project Context using the active Blueprint domains. AI MUST NOT copy the framework reference implementation as project data.

## 4. Installation Procedure

1. **Discover framework:** read `AI_BOOTSTRAP.md`, then discover applicable instructions, Blueprint, Standards, and procedures.
2. **Inspect target:** read project instructions and identify purpose, technology, architecture, repository structure, and documentation.
3. **Determine context state:** if a canonical Project Context exists, stop this procedure and use Existing Repository Onboarding or an explicit upgrade procedure.
4. **Create context:** create Project Context at the project-defined location using active Blueprint domains.
5. **Populate facts:** record only information supported by repository/configuration/documentation evidence.
6. **Record uncertainty:** use `proposed` for AI inferences and `unknown` where information is unavailable.
7. **Record decisions:** only mark a decision confirmed when supplied or explicitly confirmed by the user or an authoritative project decision record.
8. **Record evidence:** attach concrete evidence references to important facts and inferences where available.
9. **Record versions:** record Framework, Blueprint, and applicable Software Standard versions used.
10. **Generate AI Handoff:** create the derived AI Handoff from authoritative Project Context records.
11. **Validate:** verify domains, metadata, provenance, evidence, references, work-state separation, versions, and Handoff consistency.
12. **Continue development:** after successful validation, use Project Context and AI Handoff as the project knowledge base.

## 5. User Decisions

AI MUST NOT invent project-specific decisions during installation. If a material choice is required, AI MUST explain options and impact, then wait for the user's decision.

## 6. Source Code Boundary

Bootstrap installation MUST NOT modify application source code merely to initialize the framework. Source, configuration, or dependency changes require a separate approved development task or an explicit framework requirement.

## 7. Completion Record

The Project Context SHOULD retain a concise initialization record containing procedure version, Framework revision, Blueprint version, applicable Standard versions, initialization timestamp, inspected sources, limitations, and unresolved user decisions.

## 8. Validation

Installation is complete only when the active Blueprint validates, important claims are traceable, no unconfirmed inference is presented as fact or decision, versions are recorded, AI Handoff is consistent, and no critical initialization errors remain.

## 9. Relationship to Project Onboarding\n\nThis procedure initializes a new project. The umbrella `ai_development/onboarding/project-onboarding.md` selects the appropriate flow. Existing repositories requiring reconstruction MUST use `blueprints/project_context/ONBOARDING.md`; Git history and other Git metadata are never required as onboarding evidence.\n
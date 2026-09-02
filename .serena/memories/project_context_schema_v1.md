# Project Context Schema v1

Project Context Blueprint Schema v1.0.0 is active.

Common conceptual record fields:
- id (stable within domain)
- title
- content
- status: confirmed | proposed | unknown | deprecated
- source: user_decision | repository_analysis | ai_inference | external_reference
- confidence: high | medium | low (recommended for AI inference)
- created_at / updated_at
- related_to cross-domain references

Rules:
- Facts and decisions must be distinguishable.
- AI must not silently turn inference/unknown into confirmed information.
- Confirmed user decisions are protected; repository discrepancies should be surfaced for user decision unless explicitly instructed otherwise.
- Domain-specific extensions may add fields but must not redefine common field semantics.
- Project Context stores project understanding, not source code.
- AI is primary maintainer; normal flow is discuss -> user decision -> explicit instruction -> AI update.
- Domain structure is: project-identity, technology, architecture, requirements, decisions, problems, work-management, project-rules, history, ai-handoff.
- Work states are Completed, In Progress, Next, Backlog, Blocked; Next is not Backlog.
- AI Handoff is a derived operational summary, not the authoritative source.
- Blueprint version is independent from Software Engineering Standard version and structural upgrades require migration guidance.

Created blueprint files:
- blueprints/project_context/README.md
- blueprints/project_context/SPECIFICATION.md
- blueprints/project_context/common-schema.md
- domain README files under blueprints/project_context/
- work-management state templates under blueprints/project_context/work-management/

# AI Entry and Project Standard Installation Architecture

**Decision Date:** 2026-09-03  
**Status:** Approved

## Decision

`AGENTS.md` is the single project-level AI entry point. The installed Framework and project-specific AI knowledge are maintained under `.project-context/`.

The canonical navigation flow is:

`AGENTS.md → .project-context/AI_INSTRUCTIONS.md → .project-context/project-standard/ → Project Context`

## Installation Layout

```text
Project/
├── AGENTS.md
└── .project-context/
    ├── AI_INSTRUCTIONS.md
    ├── project-standard/
    │   ├── blueprints/
    │   ├── procedures/
    │   ├── standards/
    │   └── manifest.yaml
    ├── architecture/
    ├── decisions/
    ├── requirements/
    ├── technology/
    ├── work/
    └── history/
```

`AGENTS.md` contains the durable project-level navigation entry and must not duplicate the Framework rules. `AI_INSTRUCTIONS.md` is the installed Framework operational entry point. `project-standard/` contains the installed Framework artifacts required by the project. The remaining Project Context domains contain project-specific knowledge.

## Agent-Specific Files

Framework focuses on `AGENTS.md` only. If another AI platform requires its own instruction file in the future, that file should delegate to `AGENTS.md` rather than becoming another Framework-managed source of truth.

## AGENTS.md Preservation

Installation and update procedures MUST NOT blindly overwrite an existing `AGENTS.md`. If absent, the installation may create it. If present, the Framework must preserve project-owned instructions and add or update only the Framework navigation portion according to an explicit, safe mechanism.

## Versioning and Updates

`.project-context/project-standard/manifest.yaml` records the installed Framework and component versions. Framework updates must use the Framework migration procedure, preserve project-owned Project Context, and avoid destructive replacement of project instructions.

## Rationale

This creates one stable AI entry point, keeps Framework knowledge repository-resident and portable, avoids scattering Framework logic across vendor-specific agent files, and allows future agent integrations to converge on the same project entry point.

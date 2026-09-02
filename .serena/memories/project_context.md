## Project Artifact Boundary

- `.serena/` is Serena's project-local working/configuration area. It **may be committed to this repository** so the AI development workspace/memory can travel with the repository and work can continue after moving machines.
- `.serena/` is **not part of the software-engineering-standard artifact intended to be distributed, downloaded, or propagated to downstream projects**.
- When designing the repository structure, distinguish tooling/workspace metadata (`.serena/`) from the distributable framework artifacts (`standards/`, `blueprints/`, `migrations/`, `ai_development/`, and related root documentation/version files).
- Do not include `.serena/` in migration/update operations for downstream projects unless explicitly requested.
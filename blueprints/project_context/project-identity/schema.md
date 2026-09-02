# Project Identity Schema

Defines the minimum identity and purpose information for a project.

## Record Types

### Project Overview

Required fields:

```yaml
id: project
name: <project name>
record_state: confirmed | proposed | unknown | deprecated
source: user_decision | repository_analysis | ai_inference | external_reference
summary: <one-paragraph description>
purpose: <why the project exists>
scope:
  in: []
  out: []
current_status: active | planning | maintenance | paused | archived | unknown
created_at: <ISO-8601>
updated_at: <ISO-8601>
```

### Project Metadata

Optional fields:

```yaml
repository: <repository reference>
project_type: application | library | service | platform | monorepo | other
owner: <team/person if known>
license: <license if applicable>
environments: []
standards:
  - name: <standard>
    version: <version>
```

## Rules

- `project` is the stable identity record and MUST NOT be reused for another project.
- Purpose and scope SHOULD be user-confirmed when possible.
- Repository-derived identity MAY be proposed when not explicitly known.
- `current_status` describes the project's lifecycle, not an individual work item.
- Project Identity MUST NOT contain detailed architecture, implementation decisions, or task lists; those belong to their respective domains.

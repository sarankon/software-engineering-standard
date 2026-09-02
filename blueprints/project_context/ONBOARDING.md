# Existing Repository Onboarding Procedure

**Procedure Version:** 1.0.0
**Applies To:** Project Context Blueprint Schema 1.x
**Status:** Active

## 1. Purpose

This procedure defines the deterministic workflow for creating a new canonical Project Context from an existing software repository.

The existing `.project-context` is treated as migration input, not as the canonical target structure. The target is generated from the current Blueprint and reconciled against current repository evidence.

## 2. Inputs

AI SHOULD inspect the following inputs when available:

1. The current repository and source/configuration files.
2. Repository documentation and project instructions.
3. Git history and current Git state when Git is available.
4. An existing `.project-context` or equivalent project knowledge, if present.
5. Existing project-specific standards, blueprints, and AI instructions.
6. The target Project Context Blueprint and Software Engineering Standard versions.

Absence of any input MUST be recorded as an unavailable evidence source when it materially limits reconstruction.

## 3. Evidence Priority

When sources disagree, AI MUST use this precedence for current implementation facts:

1. Current repository/source/configuration evidence.
2. Explicit user decisions and instructions.
3. Git history as historical evidence.
4. Existing Project Context as supporting evidence that may be stale.
5. AI inference.

Explicit user decisions remain authoritative even when implementation evidence differs. AI MUST surface the discrepancy rather than silently changing the decision.

## 4. Procedure

### Step 1 — Detect Repository and Context Inputs

Identify the repository root, source/configuration areas, documentation, Git metadata, existing Project Context, project instructions, and applicable standards/blueprints.

Record which inputs were found and which were unavailable.

### Step 2 — Read Project Instructions and Standards

Read project-level AI instructions and applicable project standards before interpreting implementation details. Determine which rules are project-specific and which are inherited from the global Software Engineering Standard.

### Step 3 — Inspect Current Repository Facts

Analyze the current implementation sufficiently to establish observable facts, including as applicable:

- project identity and scope;
- languages, frameworks, runtimes, dependencies, and infrastructure;
- repository structure and major modules/components;
- architecture and integration boundaries;
- database schema, migrations, and persistence patterns;
- API/UI surfaces and major capabilities;
- security, audit, logging, and operational mechanisms;
- test/build/deployment configuration.

Do not infer business intent solely from names or implementation patterns.

### Step 4 — Read Historical and Existing Context

Inspect Git history, changelogs, decision records, todo/work records, old Project Context files, and other historical documentation.

Use these sources to recover decisions, rationale, problems, completed work, and project history. Historical evidence MUST NOT automatically become current state.

### Step 5 — Reconstruct Domains

Generate the canonical Project Context using the current Blueprint domains:

- project-identity
- technology
- architecture
- requirements
- decisions
- problems
- work-management
- project-rules
- history
- ai-handoff

For each record, assign the appropriate status and source. Use `proposed` or `unknown` where evidence is insufficient.

### Step 6 — Record Evidence References

Important reconstructed records SHOULD include concrete evidence references. Prefer stable locators such as repository-relative file paths, document sections, Git commit IDs, configuration keys, schema/table names, or other durable anchors.

Evidence references MUST support traceability without copying large source-code passages into Project Context.

### Step 7 — Reconcile Conflicts

Compare repository facts, user decisions, historical records, and old context. For each material conflict:

- preserve confirmed user decisions;
- update current implementation facts to match current repository evidence;
- preserve historical facts in history where appropriate;
- mark unresolved interpretation as proposed or unknown;
- record the discrepancy when it affects future development.

AI MUST NOT silently resolve a material conflict by guessing.

### Step 8 — Record Versions

Record the Project Context Blueprint version and applicable Software Engineering Standard versions used to create the new context.

The generated context MUST target the current Blueprint structure even if the old Project Context used a different physical layout.

### Step 9 — Generate AI Handoff

Generate `ai-handoff` as a derived snapshot of the reconstructed context. It MUST NOT become a second source of truth.

Important claims in the handoff SHOULD point back to authoritative domain records.

### Step 10 — Validate

Before presenting the result as complete, validate:

- all canonical domains exist;
- required records have valid common fields;
- statuses and provenance are valid;
- important claims have traceable evidence where available;
- confirmed user decisions were preserved;
- proposed/unknown information is not presented as confirmed;
- Next, In Progress, Backlog, Completed, and Blocked remain distinct;
- cross-domain references resolve or are explicitly marked as unresolved;
- the recorded Blueprint/Standard versions are correct.

## 5. Onboarding Completion Record

A completed onboarding SHOULD retain a concise record of:

- procedure version;
- target Blueprint version;
- Software Engineering Standard version(s);
- repository revision/commit when available;
- date/time of onboarding;
- evidence sources inspected;
- unavailable sources or limitations;
- material conflicts discovered;
- unresolved questions requiring user decisions.

This record belongs in Project Context history or another canonical project-owned onboarding record defined by the implementation.

## 6. Upgrade vs. Re-Onboarding

A normal Blueprint version upgrade transforms an existing Project Context according to the version migration guidance.

A project may also intentionally delete an old `.project-context` and run this onboarding procedure again. In that case, the old context is treated as migration evidence and the current repository remains the primary source for current implementation facts.

The procedure does not require the old physical Project Context directory structure to be preserved.

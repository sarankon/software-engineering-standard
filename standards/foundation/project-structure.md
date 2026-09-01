# Project Structure Standard

Status: Draft
Level: MUST / SHOULD / MAY
Category: Foundation
Applicability: All SES-enabled projects

## Purpose

This standard defines principles for organizing a software project without prescribing a universal physical directory structure. Project structure MUST remain adaptable to the technology, architecture, and delivery model selected by the project.

## Core Principle

SES MUST define structural responsibilities and boundaries, not a universal set of directory names or paths. A project MAY adapt its physical structure to its technology and architecture as long as the requirements of this standard remain satisfied.

## Principles

### 1. Technology Independence

The physical project structure MUST be appropriate for the technologies, frameworks, and runtime model used by the project. SES examples MUST NOT be treated as mandatory directory layouts.

### 2. Separation of Concerns

Project structure MUST provide clear boundaries between materially different responsibilities. The physical implementation of those boundaries MAY vary by technology and architecture.

### 3. Discoverability

Developers and AI agents MUST be able to locate important project resources without relying on undocumented knowledge. Project conventions SHOULD be documented when their location is not obvious from the technology or repository conventions.

### 4. Internal Consistency

A project MUST use a consistent structural convention within the same architectural or technological context. Equivalent responsibilities SHOULD be organized consistently across similar modules or components.

### 5. Project Context Isolation

Project-specific engineering knowledge MUST be separated from application runtime code and data. SES-enabled projects MUST maintain their project context in the project-defined `project_context/` location. The contents and internal structure of project context are governed by the Project Context Blueprint.

### 6. No Unnecessary Structure

Projects MUST NOT create files or directories solely to imitate an SES example. A structural element SHOULD exist because it serves a real project responsibility or required engineering practice.

## Required Responsibilities

An SES-enabled project MUST provide an identifiable place for each applicable responsibility below. The physical location is project-defined unless another SES standard explicitly requires a location.

| Responsibility | Requirement |
|---|---|
| Application code | MUST |
| Configuration | MUST |
| Documentation | MUST |
| Project context | MUST |
| Tests | SHOULD; specific requirements are defined by Quality Standards |
| Tooling / scripts | MAY, when needed |

## Physical Structure

SES does not require a universal structure such as `src/`, `tests/`, `docs/`, or any other fixed directory names. A project MAY use those conventions when appropriate.

Examples in SES documentation are illustrative unless a rule explicitly marks a path as normative.

## Technology and Architecture Adaptation

When a technology or architecture has an established project structure, the project SHOULD follow that convention unless there is a documented reason to deviate.

Examples include monoliths, modular applications, monorepos, microservices, serverless applications, libraries, web applications, mobile applications, and other delivery models.

## AI Discoverability

AI agents MUST be able to identify the location of application code, configuration, documentation, tests, and project context before making non-trivial changes. The project `AGENTS.md` SHOULD provide navigation guidance when these locations are not obvious.

## Exceptions

A project does not need an exception merely because its physical structure differs from an SES example. An exception is required only when the project intentionally does not satisfy a normative requirement of SES.

## Verification

Review the project structure and verify that applicable responsibilities have identifiable locations, boundaries are understandable, project context is separated from runtime code and data, and the structure follows the project technology and architecture consistently.

## Migration

When adopting this standard in an existing project, first map existing directories and files to the required responsibilities. Reorganization SHOULD be performed only when it provides a clear engineering benefit. Existing project-specific knowledge MUST be preserved during restructuring.


# Software Engineering Standard Glossary

Status: Draft
Category: Cross-cutting
Applicability: All SES-enabled projects

## Purpose

This glossary defines shared terminology used throughout the Software Engineering Standard (SES). Its purpose is to reduce ambiguity and ensure that the same term has a consistent meaning across standards and project documentation.

## Usage

Terms defined here SHOULD be used consistently throughout SES and Project Context documentation.

A project MAY define additional terminology when required by its domain or technology, but project-specific definitions SHOULD NOT silently redefine an SES term.

When a domain-specific meaning is necessary, the project SHOULD explicitly identify the scope of that meaning.

## Core Terms

### Project

A software initiative and its associated source code, configuration, documentation, infrastructure definitions, operational artifacts, and supporting engineering artifacts.

### System

A complete set of software components, services, data, infrastructure, and external dependencies that together provide a defined capability or set of capabilities.

A Project may contain one System, multiple Systems, or a subset of a larger System.

### Application

A software product or executable software unit that provides functionality to users or other systems.

An Application may consist of multiple services, modules, or deployable components.

### Component

A cohesive part of a system with a defined responsibility and boundary.

A Component may be implemented as a module, package, service, library, process, or another technology-specific construct.

### Module

A cohesive implementation unit within a software system that groups related responsibilities and exposes a defined interface or boundary.

The physical meaning of Module MAY vary by technology.

### Service

A software capability that provides functionality through a defined interface and can be treated as an independently identifiable responsibility within a system.

A Service MAY be independently deployable, but independent deployment is not required by this definition.

### Interface

A defined boundary through which one component, service, system, or actor interacts with another.

An interface may be implemented through an API, function contract, message contract, protocol, event, user interface, or another mechanism.

### Dependency

A software, system, service, library, tool, or other external capability required by a project or component to build, run, test, deploy, or operate correctly.

### Configuration

Data or values that control system behavior or environment-specific operation without being intrinsic implementation logic.

### Environment

A defined execution context in which an application and its supporting services operate.

Examples may include local, development, test, staging, or production contexts, but SES does not require a fixed set.

### Repository

A version-controlled collection containing the project's source and associated engineering artifacts.

### Artifact

A persistent engineering output or input that is created, maintained, or consumed by the development lifecycle.

Examples include source code, configuration, documentation, schemas, build outputs, and deployment definitions.

### Standard

A defined set of engineering requirements, principles, and guidance that establishes expected practices or outcomes.

### Rule

A discrete normative requirement within a Standard, identified and managed independently when the SES rule model requires it.

Rules use normative levels such as `MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT`, and `MAY`.

### Project Context

A structured collection of durable project knowledge used to help humans and AI agents understand the project, make engineering decisions, and modify the system safely.

### AI Agent

An AI-powered software agent that can inspect, reason about, generate, modify, validate, or otherwise interact with a software project within an authorized scope.

### AI Entry Point

The authoritative project-level mechanism that directs an AI agent to the information and instructions required to work safely within the project.

### Decision

A documented choice made about the project that has meaningful technical, architectural, operational, or product consequences.

### Source of Truth

The authoritative location or artifact from which a particular fact, definition, or state is expected to be derived.

### Environment-specific

A property or behavior that intentionally differs according to the execution environment or operational context.

### Direct Dependency

A dependency that is intentionally required by the project or component itself and is explicitly declared as such.

### Transitive Dependency

A dependency introduced through another dependency rather than being directly required and declared by the project or component.

## Normative Language

The following terms have normative meaning throughout SES:

- **MUST** — required for compliance.
- **MUST NOT** — prohibited for compliance.
- **SHOULD** — recommended unless a valid reason exists to deviate.
- **SHOULD NOT** — discouraged unless a valid reason exists to deviate.
- **MAY** — permitted but optional.

## Naming Principle

SES terminology describes responsibilities and concepts rather than requiring a specific physical implementation.

For example, a `Component` does not imply a particular directory, programming-language construct, framework, or deployment model.

## Verification

When introducing or revising a Standard, verify that important terms use existing glossary definitions where applicable and that new terms are defined when their meaning could otherwise be ambiguous.

## Maintenance

The glossary SHOULD be updated when SES introduces a significant cross-cutting concept or when an existing term's meaning changes.

Changes to glossary definitions SHOULD be reviewed for their effect on existing standards and Project Context guidance.

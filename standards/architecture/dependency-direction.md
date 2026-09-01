# Dependency Direction Standard

**Status:** Draft

## 1. Purpose

This Standard defines principles for controlling the direction and meaning of dependencies within a system.

The goal is to prevent accidental coupling, preserve architectural intent, reduce change propagation, and keep dependencies understandable as the system evolves.

This Standard is technology-independent. It does not require a particular programming language, framework, dependency-injection mechanism, build tool, repository layout, or architecture style.

## 2. Scope

This Standard applies to dependencies between components, modules, services, subsystems, libraries, external systems, and other architectural elements.

A dependency includes any relationship in which one element requires knowledge, behavior, data, availability, or a contract from another element in order to operate.

## 3. Principles

### 3.1 Dependency direction MUST be intentional

Every significant dependency MUST have an understood reason and direction.

Dependencies MUST NOT be introduced merely because the implementation makes them convenient.

### 3.2 Dependencies MUST respect architectural boundaries

Dependencies MUST be consistent with the responsibilities and boundaries established by the architecture.

A lower-level implementation detail MUST NOT implicitly become the owner of higher-level business or system responsibility merely because another component depends on it.

### 3.3 Dependencies SHOULD point toward stable responsibilities

Where practical, dependencies SHOULD point toward responsibilities that are less likely to change as a consequence of implementation details.

A component SHOULD NOT be tightly coupled to another component whose internal implementation changes frequently when an appropriate stable contract can isolate that change.

### 3.4 Dependency cycles SHOULD be avoided

Circular dependencies between components SHOULD be avoided because they make ownership, change impact, testing, replacement, and independent evolution more difficult.

When a cycle is necessary, its reason and consequences SHOULD be understood and documented.

### 3.5 Dependency strength SHOULD be appropriate

A dependency SHOULD expose no more knowledge or coupling than is required.

Teams SHOULD distinguish between dependencies on stable contracts and dependencies on unstable implementation details.

### 3.6 Cross-boundary dependencies MUST use intentional contracts

A dependency crossing a meaningful component or system boundary MUST be based on an explicit contract or interface appropriate to that boundary.

Consumers SHOULD NOT depend on private implementation details of another component.

### 3.7 Dependency ownership MUST be understandable

For significant dependencies, it MUST be possible to determine which element provides the dependency and which element consumes it.

Where dependency lifecycle, availability, or compatibility creates material risk, ownership and operational expectations SHOULD be explicit.

### 3.8 Dependencies SHOULD minimize change propagation

An implementation change SHOULD NOT cause unrelated components to change solely because they depend on incidental details.

Dependency design SHOULD isolate likely changes and preserve stable contracts where practical.

### 3.9 Shared dependencies MUST be justified

Shared utilities, libraries, data models, services, or other common dependencies MUST have a clear purpose and ownership.

A shared dependency SHOULD NOT become a catch-all location for unrelated functionality merely to avoid duplication.

### 3.10 Dependency inversion MAY be used when it improves boundaries

A system MAY introduce an abstraction or contract so that a dependency points toward a stable responsibility rather than an unstable implementation.

Such inversion MUST have a meaningful benefit and MUST NOT be introduced as ceremony without architectural value.

### 3.11 External dependencies MUST be treated as architectural dependencies

Dependencies on external systems, vendors, platforms, or infrastructure MUST be considered in architectural decisions when they materially affect behavior, availability, security, data, cost, or changeability.

External dependency details SHOULD be isolated behind appropriate boundaries when doing so reduces risk or coupling.

### 3.12 Dependency direction SHOULD remain evolvable

Dependency relationships SHOULD be reviewed when responsibilities, boundaries, or system constraints change materially.

A dependency direction that was previously valid MUST NOT be assumed to remain appropriate indefinitely.

## 4. Dependency Categories

Teams SHOULD distinguish dependencies where useful, including:

- implementation or code dependencies;
- contract or interface dependencies;
- data dependencies;
- runtime or availability dependencies;
- configuration dependencies;
- external system dependencies;
- development or tooling dependencies.

The category of a dependency MAY affect how it is evaluated, but all significant dependencies should remain intentional and understandable.

## 5. Relationship to Other Standards

This Standard defines the direction and architectural meaning of dependencies.

- **Architecture Principles** defines the higher-level architectural principles.
- **System Boundaries** defines the boundaries that dependencies must respect.
- **Component Boundaries** defines component responsibilities and ownership.
- **Interfaces** defines contracts used to cross boundaries.
- **Foundation / Dependencies** governs dependency selection, declaration, versioning, lifecycle, security, and reproducibility.
- **Data Standards** govern data-specific dependency and ownership concerns.
- **Security Standards** govern security-sensitive dependency relationships and trust boundaries.
- **Operations Standards** govern operational consequences of runtime dependencies.

The Foundation Dependencies Standard governs dependency management as an engineering artifact; this Standard governs dependency direction as an architectural concern.

## 6. Exceptions

An exception MAY be allowed when a dependency cycle, coupling pattern, or direction is required by a justified constraint.

An exception SHOULD document:

- the affected dependency relationship;
- why the preferred direction is not practical;
- the risks and trade-offs;
- mitigation measures;
- conditions for future review.

## 7. Verification

A design or implementation conforms to this Standard when:

- significant dependencies have clear direction and purpose;
- dependencies respect component and system boundaries;
- cross-boundary dependencies use intentional contracts;
- dependency cycles are avoided or justified;
- dependency strength is appropriate to the required relationship;
- ownership of significant dependencies is understandable;
- implementation details do not create unnecessary change propagation;
- shared dependencies have clear purpose and ownership;
- external dependencies are considered where materially relevant.

Verification MAY include dependency graphs, architecture review, static analysis, code review, design review, runtime analysis, or other suitable techniques.

## 8. Migration

When dependency direction does not conform, migration SHOULD be incremental and focused on relationships that create the greatest architectural risk.

Teams SHOULD prioritize dependency cycles, unstable implementation coupling, unclear ownership, and dependencies that cross boundaries inappropriately.

Migration SHOULD introduce transitional contracts or adapters when they reduce risk and allow behavior to remain stable during the transition.

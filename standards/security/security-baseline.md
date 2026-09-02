# Security Baseline

**Standard ID:** `SES-SEC`
**Version:** `1.0.0`
**Record State:** `confirmed`
**Lifecycle State:** `draft`
**Category:** Security
**Applicability:** All SES-enabled applications

## SES-SEC-001 — Security by Design

Status: Draft
Level: MUST
Category: Security
Applicability: All applications

### Requirement

Security considerations MUST be included when designing, implementing, changing, and reviewing application behavior that can affect authentication, authorization, sensitive data, external access, or trust boundaries.

### Rationale

Security defects discovered after implementation are generally more expensive to correct and may already expose users or data.

### Good Example

A feature plan identifies its actors, trust boundary, protected resources, authorization rule, sensitive data, and abuse cases before implementation.

### Bad Example

A new administrative operation is implemented first and authorization is added later without reviewing the operation's trust boundary.

### Verification

Review Project Context decisions and affected source/configuration to determine whether security implications were considered. Unknown evidence must remain unknown.

### Exceptions

See the project-owned exception record for `SES-SEC-001`.

### Migration

For existing projects, assess security-sensitive features and record missing design decisions as findings before making changes.

---

## SES-SEC-002 — Authentication

Status: Draft
Level: MUST
Category: Security
Applicability: Components that authenticate users, services, or other principals

### Requirement

Authentication mechanisms MUST verify the identity of a principal using an established, appropriately secured mechanism. Credentials MUST NOT be accepted or trusted solely from unverified client-controlled identity claims.

### Rationale

Authentication establishes who or what is requesting access and is the foundation for authorization decisions.

### Good Example

A server verifies a session, signed token, or other established credential according to the selected authentication mechanism before establishing an authenticated principal.

### Bad Example

A client submits a user ID and the server treats that ID as the authenticated user without independently validating the credential.

### Verification

Trace authentication entry points and verify that protected operations establish an authenticated principal through server-side verification.

### Exceptions

See the project-owned exception record for `SES-SEC-002`.

### Migration

Identify endpoints or operations that infer identity from untrusted input and migrate them to the project's approved authentication mechanism.

---

## SES-SEC-003 — Authorization

Status: Draft
Level: MUST
Category: Security
Applicability: Operations that access protected resources or privileged behavior

### Requirement

Authorization MUST be enforced server-side for every protected operation. Authorization decisions MUST use the authenticated principal and the resource/action context rather than relying solely on client-side controls.

### Rationale

Client-side restrictions can be bypassed and therefore cannot establish access control.

### Good Example

An API verifies the caller's permission and resource scope before executing an update.

### Bad Example

A button is hidden from unauthorized users, but the underlying endpoint accepts the operation without checking permission.

### Verification

Trace protected operations from entry point to authorization decision and verify that unauthorized requests are rejected before the protected action occurs.

### Exceptions

See the project-owned exception record for `SES-SEC-003`.

### Migration

Inventory protected operations and add missing server-side authorization checks, prioritizing administrative and data-access paths.

---

## SES-SEC-004 — Secrets and Credentials

Status: Draft
Level: MUST NOT
Category: Security
Applicability: All applications

### Requirement

Secrets, private keys, passwords, API credentials, session secrets, and equivalent authentication material MUST NOT be committed to source code, embedded in client-delivered assets, or written to ordinary application logs.

### Rationale

Source repositories, client assets, and logs may be broadly accessible or retained longer than intended.

### Good Example

Application secrets are supplied through an approved secret/configuration mechanism and are excluded from logs and client responses.

### Bad Example

A production API key is hard-coded in a source file or included in a browser bundle.

### Verification

Inspect source/configuration patterns, generated client assets where relevant, and logging paths. Secret scanning MAY supplement manual review.

### Exceptions

No exception may permit exposing a live credential. Temporary test fixtures MUST use non-production credentials or safe placeholders.

### Migration

Rotate exposed credentials first, then remove them from source and configuration artifacts. Removing a secret from the repository alone is insufficient if the credential remains valid.

---

## SES-SEC-005 — Sensitive Data Exposure

Status: Draft
Level: MUST NOT
Category: Security
Applicability: All applications handling sensitive information

### Requirement

Sensitive data MUST NOT be exposed to a caller, component, log, error response, telemetry system, or client asset unless that exposure is explicitly required, authorized, and appropriate for the data classification.

### Rationale

Unnecessary disclosure increases the impact of compromise and can violate privacy or contractual requirements.

### Good Example

An API returns only fields required for the operation and redacts sensitive values from logs.

### Bad Example

A user endpoint returns password hashes, internal credentials, or unrelated sensitive profile fields.

### Verification

Compare data classifications in Project Context with response schemas, serialization, logs, telemetry, and client payloads.

### Exceptions

Document the required disclosure, authorized recipient, purpose, scope, and compensating controls in Project Context.

### Migration

Identify sensitive data flows and remove unnecessary exposure before adopting the Standard as active.

---

## SES-SEC-006 — Input Validation

Status: Draft
Level: MUST
Category: Security
Applicability: All externally influenced input

### Requirement

Externally influenced input MUST be validated at the trust boundary before it is used for security-sensitive, data-modifying, or resource-accessing operations. Validation MUST enforce the expected type, structure, range, length, and allowed values where applicable.

### Rationale

Trusting external input can enable injection, authorization bypass, resource abuse, and data integrity failures.

### Good Example

An API validates an identifier's format and an amount's allowed range before performing a transaction.

### Bad Example

A request parameter is passed directly to a privileged operation because the UI already restricts its format.

### Verification

Trace external inputs into sensitive operations and inspect validation at the server-side trust boundary.

### Exceptions

See the project-owned exception record for `SES-SEC-006`.

### Migration

Prioritize externally reachable inputs that reach database queries, shell/process execution, file paths, authorization decisions, redirects, or resource-intensive operations.

---

## SES-SEC-007 — Output Encoding

Status: Draft
Level: MUST
Category: Security
Applicability: Data rendered into interpreters or output contexts

### Requirement

Data MUST be encoded or safely parameterized for its output context before being interpreted as markup, script, query syntax, command syntax, or another executable/interpreted language.

### Rationale

Validation alone does not safely encode data for every output context.

### Good Example

Database values are bound as parameters and user content is rendered through a framework's safe escaping mechanism unless a deliberately sanitized rich-text path is used.

### Bad Example

Untrusted input is concatenated into executable query, HTML, script, or command text.

### Verification

Inspect data flows into interpreters and verify context-appropriate parameterization or encoding.

### Exceptions

Any intentional raw rendering path MUST document its sanitization and trust assumptions.

### Migration

Replace string concatenation at interpreter boundaries with parameterized APIs or context-appropriate encoding.

---

## SES-SEC-008 — Transport Security

Status: Draft
Level: MUST
Category: Security
Applicability: Network communication carrying sensitive or authenticated information

### Requirement

Sensitive data and authenticated communication MUST use appropriately protected transport. Production systems MUST NOT intentionally transmit credentials or sensitive application data over unprotected transport channels.

### Rationale

Protected transport reduces interception and tampering risks.

### Good Example

Production authenticated traffic uses HTTPS/TLS with certificate validation enabled.

### Bad Example

A production login form submits credentials over plain HTTP.

### Verification

Inspect deployment configuration, application URLs, client configuration, and integration endpoints for protected transport.

### Exceptions

Any non-production exception must be explicitly scoped and MUST NOT expose real credentials or sensitive production data.

### Migration

Identify plaintext endpoints and redirect or migrate them to protected transport. Update integration endpoints and configuration together.

---

## SES-SEC-009 — Session Security

Status: Draft
Level: MUST
Category: Security
Applicability: Applications using user or service sessions

### Requirement

Session credentials MUST be protected against unauthorized disclosure and misuse. Session identifiers MUST be generated using an appropriate secure mechanism and, where cookies are used, security attributes MUST be configured according to the application's threat model.

### Rationale

Compromised session credentials can allow impersonation without recovering the user's primary credential.

### Good Example

Session cookies use appropriate `Secure`, `HttpOnly`, and `SameSite` settings for the deployment and authentication model.

### Bad Example

A long-lived session token is stored in an easily accessible browser location without considering XSS or token theft risks.

### Verification

Inspect session creation, storage, renewal, expiration, revocation, cookie configuration, and logout behavior where applicable.

### Exceptions

Document the session model and compensating controls for architectures where standard cookie controls do not apply.

### Migration

Prioritize authentication sessions with long lifetimes, privileged access, or weak storage/configuration.

---

## SES-SEC-010 — Dependency Security

Status: Draft
Level: MUST
Category: Security
Applicability: Projects using third-party or external software dependencies

### Requirement

Projects MUST maintain a mechanism to identify, review, and remediate security-relevant vulnerabilities in third-party dependencies according to project risk and exposure.

### Rationale

A project inherits security risk from software it executes or distributes.

### Good Example

Dependency manifests and lockfiles are maintained, vulnerability findings are reviewed, and high-risk exposed dependencies are prioritized for remediation.

### Bad Example

Dependencies are copied into the project without identifiable versions or any process for reviewing known vulnerabilities.

### Verification

Inspect dependency manifests, lockfiles, vulnerability scanning or review processes, and Project Context records for accepted risks.

### Exceptions

A known vulnerability may be temporarily accepted only with documented risk, scope, approval, compensating control, and review condition.

### Migration

Establish dependency inventory first, then prioritize externally reachable and high-impact vulnerable components.

---

## SES-SEC-011 — Security Event Logging

Status: Draft
Level: MUST
Category: Security
Applicability: Applications with authenticated users, privileged operations, or security-relevant events

### Requirement

Security-relevant events MUST be recorded in an appropriate audit or security-event mechanism sufficient to investigate important authentication, authorization, privilege, and security-control failures. Logs MUST NOT contain secrets or unnecessary sensitive data.

### Rationale

Security controls are difficult to investigate without trustworthy event evidence.

### Good Example

Authentication failures, privileged changes, and important authorization failures produce structured security events containing actor, action, target, outcome, and correlation information without secrets.

### Bad Example

A failed login event stores the submitted password or an API credential in the log message.

### Verification

Inspect security event definitions, logging paths, retention/configuration, and sensitive-field handling.

### Exceptions

Exceptions must identify the missing event, reason, impact, and compensating investigation control.

### Migration

Start with authentication, authorization, privilege changes, credential lifecycle, and security-control failures.

---

## SES-SEC-012 — Error Disclosure

Status: Draft
Level: MUST NOT
Category: Security
Applicability: All externally visible application errors

### Requirement

Externally visible errors MUST NOT disclose secrets, credentials, security-sensitive configuration, internal stack traces, or unnecessary implementation details.

### Rationale

Detailed internal errors can reveal information useful for exploitation and can directly expose sensitive data.

### Good Example

The client receives a stable error code and safe message while detailed diagnostics remain in protected internal logs.

### Bad Example

An API returns a database connection string and stack trace after an exception.

### Verification

Review error handlers, API responses, UI error messages, and logging separation between internal diagnostics and external responses.

### Exceptions

Development-only diagnostics MUST be isolated from production exposure and MUST NOT use real sensitive data.

### Migration

Inventory externally reachable error paths and remove sensitive details before enabling production exposure.

---

## SES-SEC-013 — Least Privilege

Status: Draft
Level: SHOULD
Category: Security
Applicability: Identities, services, processes, credentials, and infrastructure permissions

### Requirement

Access SHOULD be limited to the minimum permissions required for the principal, component, or operation to perform its intended function.

### Rationale

Least privilege limits the impact of credential compromise, implementation defects, and misuse.

### Good Example

A background worker has permission to access only the resources required for its assigned job.

### Bad Example

Every application component uses a shared administrative credential regardless of its responsibilities.

### Verification

Review roles, service accounts, API keys, database permissions, and infrastructure access against actual responsibilities.

### Exceptions

Document why broader access is necessary and what compensating controls reduce the risk.

### Migration

Prioritize privileged shared credentials and externally reachable components with broad permissions.

---

## SES-SEC-014 — Security Verification

Status: Draft
Level: MUST
Category: Security
Applicability: All security-sensitive changes

### Requirement

Security-sensitive changes MUST include verification appropriate to the affected threat, control, and risk before being considered complete.

### Rationale

A security control that exists in code but is not verified may be ineffective or incorrectly applied.

### Good Example

An authorization change includes tests proving both permitted and denied access paths.

### Bad Example

An authentication change is merged based only on a successful happy-path login test.

### Verification

Evidence MAY include automated tests, security scans, manual review, configuration inspection, or controlled verification. The verification method and limitations should be recorded.

### Exceptions

Document the missing verification, reason, risk, and follow-up condition.

### Migration

For existing projects, identify security controls without verification and add targeted tests or review evidence based on risk.

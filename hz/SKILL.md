---
name: hz
description: 'This skill should be used when the user asks to "/hz", "/hz audit", "/hz plan", or "/hz fix" for a minimal enterprise debt workflow. It routes to a platform-neutral project debt workflow with only three modes: audit, plan, and fix.'
---

# HZ

Run the smallest useful debt pass. Default to `audit` when no mode is given. Treat this as the thin entrypoint for `$enterprise-debt-remediation`.

## Environment Preflight

Detect the host OS before routing. If the host is Windows, apply the UTF-8 session bootstrap first, then continue with the chosen mode.

## Modes

### `audit`
Scan the project and return only the highest-value debt items with evidence, impact, priority, and validation.

### `plan`
Turn the current findings into a short remediation plan with order, owner, and verification.

### `fix`
Apply or draft the smallest safe changes for P0/P1 items only. Stop if scope, evidence, or safety is unclear.

## Routing

Interpret `/hz [mode] [scope]` as:

- mode: `audit`, `plan`, or `fix`
- scope: everything after mode

If mode is missing or unknown, assume `audit` and state the assumption. For complete audits, load `$enterprise-debt-remediation` and follow `references/core-contract.md`.
If the host is Windows, ensure the UTF-8 session bootstrap has been applied before loading the core contract.

## Output

Return only:

- findings
- next_step
- blockers

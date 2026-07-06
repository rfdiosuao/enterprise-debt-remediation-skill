---
name: hz
description: 'Use when the user asks for /hz, /hz audit, /hz plan, /hz fix, /hz goal, technical debt audit/remediation, enterprise debt cleanup, or a Codex /goal command for resolving project debt.'
---

# HZ

Run the smallest useful debt pass. Default to `audit` when no mode is given. Treat this as the thin entrypoint for `$enterprise-debt-remediation`.

**REQUIRED SUB-SKILL:** Use `qiaomu-goal-meta-skill` when generating a debt-remediation `/goal`.

## Environment Preflight

Detect the host OS before routing. If the host is Windows, apply the UTF-8 session bootstrap first, then continue with the chosen mode.

## Modes

### `audit`
Scan the project and return only the highest-value debt items with evidence, impact, priority, and validation.

### `plan`
Turn the current findings into a short remediation plan with order, owner, and verification.

### `fix`
Apply or draft the smallest safe changes for P0/P1 items only. Stop if scope, evidence, or safety is unclear.

### `goal`
Audit the requested scope first, turn the findings into a prioritized debt ledger, then output a copy-ready Codex `/goal` for resolving that ledger. Do not start fixing in `goal` mode unless the user explicitly asks to execute the generated goal.

Treat "all debt" as all evidence-backed findings inside the requested scope. If areas were not inspected or evidence is weak, list them as blockers or pending-evidence items instead of claiming the audit is exhaustive.

## Routing

Interpret `/hz [mode] [scope]` as:

- mode: `audit`, `plan`, `fix`, or `goal`
- scope: everything after mode

If mode is missing or unknown, assume `audit` and state the assumption. For complete audits, load `$enterprise-debt-remediation` and follow `references/core-contract.md`.
If the host is Windows, ensure the UTF-8 session bootstrap has been applied before loading the core contract.

Route these requests to `goal` even if the literal mode is omitted: "find all debt then make a goal", "generate a goal to fix the debt", "debt remediation goal", `audit-goal`, `solve-goal`, or `all-goal`.

For `goal`, first run the complete debt-audit workflow from `$enterprise-debt-remediation`, then apply the `/goal` contract from `qiaomu-goal-meta-skill`:

- Outcome: resolve the audited debt ledger in priority order.
- Verification: use repo-discovered checks, runtime evidence, screenshots/logs when relevant, and per-item validation from the debt ledger.
- Constraints: preserve public behavior, data shape, user data, secrets, default branches, and unrelated systems.
- Boundaries: name allowed write paths and forbidden paths; keep production data, credentials, destructive operations, and unrelated rewrites out of scope.
- Iteration policy: fix one priority batch at a time, rerun checks after meaningful changes, update the ledger, and switch evidence source after repeated failures.
- Stop when: every confirmed debt item is fixed and verified, or explicitly deferred with owner/reason/residual risk, and final checks are reported.
- Pause if: credentials, production data, paid services, destructive operations, legal/compliance decisions, unclear ownership, or scope expansion is required.

## Output

For `audit`, `plan`, and `fix`, return only:

- findings
- next_step
- blockers

For `goal`, return only:

- findings
- remediation_goal
- blockers

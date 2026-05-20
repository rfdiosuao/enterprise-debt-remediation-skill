---
description: Run enterprise debt workflow. Usage: /hz [audit|plan|fix] [scope]
argument-hint: [audit|plan|fix] [scope]
---

Use the HZ core contract from `enterprise-debt-remediation/references/core-contract.md`.

Interpret `$ARGUMENTS` as:

- mode: `audit`, `plan`, or `fix`; default to `audit`
- scope: everything after mode

For `audit`, scan for the highest-value project debt with evidence, impact, priority, and validation.

For `plan`, turn findings into a short remediation plan with order, owner, and verification.

For `fix`, change only P0/P1 items or explicitly named issues. Stop if scope, evidence, or safety is unclear.

Return only:

- findings
- next_step
- blockers

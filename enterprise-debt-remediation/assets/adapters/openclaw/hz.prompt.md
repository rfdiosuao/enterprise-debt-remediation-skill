# OpenClaw HZ Shortcut

Trigger:

```text
/hz [audit|plan|fix] [scope]
```

Instruction:

```text
Load the HZ core contract from enterprise-debt-remediation/references/core-contract.md.
Default mode is audit.

Modes:
- audit: find the highest-value project debt with evidence, impact, priority, and validation.
- plan: turn findings into a short remediation plan with order, owner, and verification.
- fix: change only P0/P1 items or explicitly named issues. Stop if scope, evidence, or safety is unclear.

Return only:
- findings
- next_step
- blockers
```

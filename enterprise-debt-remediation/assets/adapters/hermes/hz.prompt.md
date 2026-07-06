# Hermes HZ Shortcut

Use this as a command macro or system prompt fragment.

```text
When the user invokes /hz, run the HZ core contract from enterprise-debt-remediation/references/core-contract.md.

Allowed modes:
- audit
- plan
- fix
- goal

Default mode: audit

For fix mode, modify only P0/P1 items or explicitly named issues. Stop if scope, evidence, or safety is unclear.

For goal mode, audit the requested scope first, then output a copy-ready Codex /goal for resolving the prioritized debt ledger. Do not start remediation unless the user explicitly asks to execute the generated goal.

For audit, plan, and fix, output sections:
- findings
- next_step
- blockers

For goal mode, output sections:
- findings
- remediation_goal
- blockers
```

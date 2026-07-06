# 平台适配

核心规则只认 `audit`、`plan`、`fix`、`goal`。平台入口只做路由，不复制完整还债逻辑。

## Codex

推荐安装两个技能：

- `$hz`：极简入口，适合 `/hz audit`、`/hz plan`、`/hz fix`、`/hz goal`
- `$enterprise-debt-remediation`：完整审计和整改流程

`$hz` 的 `audit`、`plan`、`fix` 只返回 `findings`、`next_step`、`blockers`。`goal` 返回 `findings`、`remediation_goal`、`blockers`。需要完整台账时切到 `$enterprise-debt-remediation`。

## Claude Code

推荐创建 `.claude/commands/hz.md`，内容保持薄入口：

```md
---
description: Run enterprise debt workflow. Usage: /hz [audit|plan|fix|goal] [scope]
argument-hint: [audit|plan|fix|goal] [scope]
---

Use the HZ core contract.

Interpret `$ARGUMENTS` as:
- mode: audit, plan, fix, or goal; default audit
- scope: everything after mode

Return only:
- findings
- next_step
- blockers

For goal mode, return only:
- findings
- remediation_goal
- blockers
```

如果 Claude Code 支持技能目录，也可以把完整技能放到 `.claude/skills/enterprise-debt-remediation/`。命令入口仍然只负责转发。

可直接复制 `assets/adapters/claude-code/hz.md` 到 `.claude/commands/hz.md`。

## OpenClaw

推荐把 `hz` 做成普通 prompt command 或 workspace skill：

```text
/hz [audit|plan|fix|goal] [scope]

Load the HZ core contract. Default mode is audit. Keep output to findings, next_step, blockers.
For fix mode, modify only P0/P1 items or explicitly named issues, then report validation.
For goal mode, audit first and output findings, remediation_goal, blockers.
```

不要把 OpenClaw 的本地工具名写进核心契约。工具选择留给运行时。

可直接复制 `assets/adapters/openclaw/hz.prompt.md` 到 OpenClaw 的 workspace prompt、command 或 skill 入口。

## Hermes

推荐做成 system prompt 片段或 command macro：

```text
When the user invokes /hz, run the HZ core contract.
Allowed modes: audit, plan, fix, goal.
Use goal when the user asks to generate a debt-remediation /goal.
Default mode: audit.
Output sections: findings, next_step, blockers.
For goal mode, output sections: findings, remediation_goal, blockers.
```

Hermes 如果有工具白名单或模型路由，把这些放在 Hermes 自己的配置里，不写入核心契约。

可直接复制 `assets/adapters/hermes/hz.prompt.md` 到 Hermes 的 command macro 或 system prompt 片段。

## 适配原则

- 核心契约只写行为，不写平台 API。
- 命令入口只解析 mode 和 scope。
- 工具权限、模型选择、沙箱策略、hook 行为留在各平台配置。
- 平台不支持 slash command 时，用自然语言触发同样的四个模式。

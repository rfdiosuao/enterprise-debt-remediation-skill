# Enterprise Debt Remediation Skill

[中文文档：债序天工](README.zh-CN.md)

Enterprise Debt Remediation is a platform-neutral skill for auditing and paying down project debt. It focuses on the debt that blocks an enterprise-grade project: security, architecture, code quality, UI/UX, tests, delivery, observability, data, dependencies, documentation, and governance.

It ships with two Codex skills:

- `enterprise-debt-remediation`: the full audit and remediation workflow.
- `hz`: a short `/hz` style entrypoint with three modes.

## Modes

`/hz` has only three subcommands:

```text
/hz audit [scope]
/hz plan [scope]
/hz fix [scope]
```

- `audit`: find the highest-value debt with evidence, impact, priority, and validation.
- `plan`: turn findings into a short remediation route.
- `fix`: change only P0/P1 items or explicitly named issues.

## Install For Codex

Copy both skill folders into your Codex skills directory:

```powershell
$skills = "$env:USERPROFILE\.codex\skills"
Copy-Item -Recurse -Force .\enterprise-debt-remediation "$skills\enterprise-debt-remediation"
Copy-Item -Recurse -Force .\hz "$skills\hz"
```

Then invoke `$hz` or `$enterprise-debt-remediation` in Codex.

## Adapters

The core workflow is platform-neutral. Thin adapters are included under:

```text
enterprise-debt-remediation/assets/adapters/
```

- Claude Code: copy `claude-code/hz.md` to `.claude/commands/hz.md`.
- OpenClaw: use `openclaw/hz.prompt.md` as a workspace prompt, command, or skill entry.
- Hermes: use `hermes/hz.prompt.md` as a command macro or system prompt fragment.

Keep platform-specific tool names, permissions, hooks, and model routing outside the core contract.

## Validate

Run the built-in validator:

```powershell
python .\enterprise-debt-remediation\scripts\validate_skill.py .\enterprise-debt-remediation
python "$env:USERPROFILE\.codex\skills\.system\skill-creator\scripts\quick_validate.py" .\enterprise-debt-remediation
python "$env:USERPROFILE\.codex\skills\.system\skill-creator\scripts\quick_validate.py" .\hz
```

## Package

The packaged artifacts are `.skill` zip archives:

```powershell
New-Item -ItemType Directory -Force .\dist | Out-Null
Compress-Archive -Path .\enterprise-debt-remediation\* -DestinationPath .\dist\enterprise-debt-remediation.skill -Force
Compress-Archive -Path .\hz\* -DestinationPath .\dist\hz.skill -Force
```

## Layout

```text
enterprise-debt-remediation/
  SKILL.md
  agents/openai.yaml
  references/
  examples/
  assets/adapters/
  scripts/validate_skill.py
hz/
  SKILL.md
  agents/openai.yaml
```

## License

MIT

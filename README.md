<p align="center">
  <img alt="Enterprise Debt Remediation logo" src="assets/readme/debt-to-goal-logo-clean.png" width="280">
</p>

<h1 align="center">Enterprise Debt Remediation Skill</h1>

<p align="center">
  Evidence-first project debt audits for Codex, Claude Code, OpenClaw, and Hermes.
</p>

<p align="center">
  <a href="https://rfdiosuao.github.io/enterprise-debt-remediation-skill/">Documentation</a>
  ·
  <a href="https://rfdiosuao.github.io/enterprise-debt-remediation-skill/changelog.html">Changelog</a>
  ·
  <a href="README.zh-CN.md">中文文档：债序天工</a>
  ·
  <a href="https://github.com/rfdiosuao/enterprise-debt-remediation-skill/tree/main/dist">Download .skill Packages</a>
</p>

<p align="center">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/rfdiosuao/enterprise-debt-remediation-skill?style=for-the-badge&label=Stars">
  <img alt="License" src="https://img.shields.io/github/license/rfdiosuao/enterprise-debt-remediation-skill?style=for-the-badge">
  <img alt="Skill package" src="https://img.shields.io/badge/package-.skill-1F8F6A?style=for-the-badge">
</p>

Enterprise Debt Remediation turns "this project feels risky" into a ranked, evidence-backed debt ledger and a verified remediation path. It focuses on the debt that blocks an enterprise-grade handoff: security, release, rollback, tests, architecture, code quality, UI/UX, observability, data, documentation, and governance.

## Why It Exists

Most cleanup prompts drift into subjective polish. This skill keeps the agent anchored to evidence:

- **Audit first**: record file paths, command output, screenshots, logs, and reproducible facts.
- **Rank before fixing**: P0/P1 risks beat cosmetic cleanup.
- **Repair in safe batches**: preserve public behavior and avoid broad rewrites.
- **Generate executable goals**: turn a debt ledger into a bounded Codex `/goal`.

## Commands

Use `$hz` in Codex and slash commands in adapters that support them:

```text
$hz audit [scope]   # find high-value debt with evidence
$hz plan [scope]    # turn findings into a remediation route
$hz fix [scope]     # fix only P0/P1 or explicitly named issues
$hz goal [scope]    # audit first, then draft a copy-ready /goal
```

Adapter form:

```text
/hz audit [scope]
/hz plan [scope]
/hz fix [scope]
/hz goal [scope]
```

Codex may show only one `$hz` skill entry. That is expected: `goal` is a mode passed to `$hz`, not a separate skill unless you create an alias.

## Star Growth

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=rfdiosuao/enterprise-debt-remediation-skill&type=Date&theme=dark">
    <img alt="Star history chart" src="https://api.star-history.com/svg?repos=rfdiosuao/enterprise-debt-remediation-skill&type=Date" width="720">
  </picture>
</p>

## Install For Codex

Copy both skill folders into your Codex skills directory:

```powershell
$skills = "$env:USERPROFILE\.codex\skills"
Copy-Item -Recurse -Force .\enterprise-debt-remediation "$skills\enterprise-debt-remediation"
Copy-Item -Recurse -Force .\hz "$skills\hz"
```

Then invoke:

```text
$hz goal 当前项目。先找出债务，再生成解决所有债务的 /goal。
```

## Adapters

Thin adapters are included under:

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
$env:PYTHONUTF8 = "1"
python "$env:USERPROFILE\.codex\skills\.system\skill-creator\scripts\quick_validate.py" .\enterprise-debt-remediation
python "$env:USERPROFILE\.codex\skills\.system\skill-creator\scripts\quick_validate.py" .\hz
```

## Package

The repository uses a repeatable package script so both skills are rebuilt the same way every time:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\package-skills.ps1
```

The generated archives live in:

```text
dist/enterprise-debt-remediation.skill
dist/hz.skill
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
scripts/
  package-skills.ps1
```

## License

MIT

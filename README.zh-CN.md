# 债序天工：企业级项目还债流 Skill

`债序天工` 是一个面向智能体的企业级项目还债流 Skill。它不是普通的代码洁癖清单，而是一套“先识别风险，再排序债务，再分阶段偿还”的项目治理流程。

它适合用来审视一个项目距离企业级交付还有多远，并把技术债、UI 债、安全债、测试债、发布债、文档债、治理债等问题整理成可执行的还债路线图。

仓库内包含两个入口：

- `enterprise-debt-remediation`：完整审计与整改流程。
- `hz`：极简快捷入口，支持 `/hz audit`、`/hz plan`、`/hz fix`。

## 核心定位

这个 Skill 解决三个问题：

1. 项目到底欠了哪些债。
2. 哪些债必须先还，哪些可以排队。
3. 怎么把债务还到“企业级可交付”的状态。

它默认优先审视会造成安全、数据、发布、核心业务损失的问题，而不是先追求低风险的样式打磨或局部重构。

## 快速开始

全面审视当前项目：

```text
/hz audit 当前项目。按安全债、数据债、发布债、测试债、架构债、代码债、UI债、性能债、观测债、文档治理债全面审视，输出债务台账、优先级 P0-P3、证据、影响、修复建议、验证方式。
```

生成整改路线图：

```text
/hz plan 基于当前债务台账，生成分阶段还债路线图，按 P0/P1/P2/P3 排序。
```

开始修复高优先级债务：

```text
/hz fix 只处理 P0/P1 债务，优先做最小安全修复，并说明验证方式。
```

完整模式：

```text
使用 $enterprise-debt-remediation 全面审视当前项目债务，并输出债务台账、整改路线图、质量门禁。
```

## 三个子命令

### `/hz audit`

用于审计。默认动作也是 `audit`。

输出重点：

- 项目有哪些关键债务
- 每条债务的证据
- 影响范围
- 优先级 `P0/P1/P2/P3`
- 修复建议
- 验证方式

### `/hz plan`

用于把债务整理成还债路线图。

输出重点：

- 立即止血项
- 短期整改项
- 中期重构项
- 长期治理项
- owner 占位
- 验收门禁

### `/hz fix`

用于进入修复。

默认只处理：

- `P0`：安全、数据、发布事故级风险
- `P1`：核心链路、回滚、测试、稳定性风险
- 用户明确指定的问题

如果证据不足、范围过大、行为不确定，`fix` 模式应该先停止并说明阻塞点。

## 债务优先级

| 等级 | 含义 | 处理方式 |
|---|---|---|
| `P0` | 安全事故、数据损坏、权限绕过、发布阻断、不可恢复状态 | 立即修，不排队 |
| `P1` | 核心链路失败、回滚不可靠、关键测试缺失、高频稳定性问题 | 近期修 |
| `P2` | 维护效率、扩展性、体验一致性、架构清晰度问题 | 纳入治理计划 |
| `P3` | 低风险 polish、局部整理、文档补充 | 排入低优先级池 |

默认排序规则：

1. 先处理安全、数据、发布、回滚风险。
2. 同级里先处理影响面大、修复成本低、证据强的问题。
3. 先止血，再重构。
4. 先补测试和观测，再扩大改动面。

## 审视顺序

默认从高风险到低风险审视：

1. 安全债：认证、授权、密钥、输入校验、越权、依赖漏洞。
2. 数据 / 合规债：敏感数据、迁移、备份、恢复、审计、保留策略。
3. 发布 / 运维债：构建、CI/CD、环境一致性、回滚、迁移。
4. 测试债：核心链路回归、集成测试、E2E、测试稳定性。
5. 架构债：模块边界、依赖方向、状态流、循环引用。
6. 代码债：重复逻辑、复杂度、异常处理、命名、抽象层次。
7. UI / UX 债：一致性、空态、错态、载入态、响应式、可访问性。
8. 性能债：首屏、慢查询、包体、缓存、并发。
9. 观测性债：日志、指标、追踪、告警、SLO。
10. 文档 / 治理债：README、Runbook、ADR、owner、质量门禁。

## 输出格式

`/hz` 快捷入口保持轻量，只输出三块：

```md
## findings

## next_step

## blockers
```

完整审计模式输出三块：

```md
## 债务台账

## 整改路线图

## 质量门禁
```

债务台账建议字段：

| 字段 | 说明 |
|---|---|
| ID | 债务编号 |
| 类别 | 安全债、测试债、UI 债等 |
| 证据 | 文件、日志、截图、测试结果、代码路径 |
| 影响 | 对业务、安全、数据、维护性的影响 |
| 优先级 | `P0/P1/P2/P3` |
| 修复成本 | `S/M/L` |
| Owner | 负责人，不明确时写 `TBD` |
| 验证方式 | 怎么确认问题被修掉 |
| 状态 | `confirmed`、`pending-evidence`、`in-progress`、`done` |

## 安装到 Codex

克隆仓库：

```powershell
git clone https://github.com/rfdiosuao/enterprise-debt-remediation-skill.git
cd enterprise-debt-remediation-skill
```

复制两个 Skill 到 Codex 技能目录：

```powershell
$skills = "$env:USERPROFILE\.codex\skills"
Copy-Item -Recurse -Force .\enterprise-debt-remediation "$skills\enterprise-debt-remediation"
Copy-Item -Recurse -Force .\hz "$skills\hz"
```

然后在 Codex 中使用：

```text
$hz
$enterprise-debt-remediation
```

也可以直接下载 Release 包：

- [enterprise-debt-remediation.skill](https://github.com/rfdiosuao/enterprise-debt-remediation-skill/releases/download/v0.1.0/enterprise-debt-remediation.skill)
- [hz.skill](https://github.com/rfdiosuao/enterprise-debt-remediation-skill/releases/download/v0.1.0/hz.skill)

## 兼容主流智能体

核心流程放在：

```text
enterprise-debt-remediation/references/core-contract.md
```

平台适配文件放在：

```text
enterprise-debt-remediation/assets/adapters/
```

### Claude Code

复制：

```text
enterprise-debt-remediation/assets/adapters/claude-code/hz.md
```

到：

```text
.claude/commands/hz.md
```

然后使用：

```text
/hz audit 当前项目
```

### OpenClaw

使用：

```text
enterprise-debt-remediation/assets/adapters/openclaw/hz.prompt.md
```

作为 workspace prompt、command 或 skill 入口。

### Hermes

使用：

```text
enterprise-debt-remediation/assets/adapters/hermes/hz.prompt.md
```

作为 command macro 或 system prompt 片段。

## 设计原则

### 平台中立

核心契约不写平台私有语法。Codex、Claude Code、OpenClaw、Hermes 只负责解析入口和转发模式。

### 证据优先

所有债务都必须写成可验证事实。证据不足时标为 `pending-evidence`，不要假装已经确认。

### 风险优先

安全、数据、发布、回滚风险优先于视觉 polish 和局部代码整理。

### 最小修复

`fix` 模式先做最小安全改动。大重构必须有明确证据、边界、测试和回滚方案。

### 渐进治理

还债不是一次性“大扫除”。先止血，再补测试和观测，最后做架构和治理。

## 目录结构

```text
enterprise-debt-remediation-skill/
  README.md
  README.zh-CN.md
  LICENSE
  dist/
    enterprise-debt-remediation.skill
    hz.skill
  enterprise-debt-remediation/
    SKILL.md
    agents/openai.yaml
    references/
      core-contract.md
      adapters.md
      audit-playbook.md
      security-baseline.md
      scoring.md
      taxonomy.md
    examples/
      audit-report.example.md
    assets/adapters/
      claude-code/hz.md
      openclaw/hz.prompt.md
      hermes/hz.prompt.md
    scripts/
      validate_skill.py
  hz/
    SKILL.md
    agents/openai.yaml
```

## 验证

运行内置校验：

```powershell
python .\enterprise-debt-remediation\scripts\validate_skill.py .\enterprise-debt-remediation
```

运行 Codex Skill 校验：

```powershell
python "$env:USERPROFILE\.codex\skills\.system\skill-creator\scripts\quick_validate.py" .\enterprise-debt-remediation
python "$env:USERPROFILE\.codex\skills\.system\skill-creator\scripts\quick_validate.py" .\hz
```

检查模板残留：

```powershell
rg -n --hidden --glob '!**/.git/**' 'TODO|\[TODO\]|placeholder|MANUAL MIGRATION REQUIRED' .
```

## 打包

```powershell
New-Item -ItemType Directory -Force .\dist | Out-Null
Compress-Archive -Path .\enterprise-debt-remediation\* -DestinationPath .\dist\enterprise-debt-remediation.skill -Force
Compress-Archive -Path .\hz\* -DestinationPath .\dist\hz.skill -Force
```

`.skill` 本质是 zip 包，包内根层级应直接包含 `SKILL.md`。

## 适合哪些项目

- 前端应用
- 后端服务
- 桌面端应用
- CLI 工具
- SaaS 控制台
- 企业内部系统
- 含多智能体工作流的项目
- 正在从个人项目升级到商业交付的项目

## 不适合什么

- 只想做一次简单代码格式化。
- 不关心证据和优先级，只想让模型随意重构。
- 没有测试、没有运行环境、又要求直接大规模自动修复。
- 想把安全、数据、发布风险排在视觉优化之后。

## 许可证

MIT

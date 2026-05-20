---
name: enterprise-debt-remediation
description: 'This skill should be used when the user asks to "还债流", "技术债审计", "UI 债清理", "安全债清理", "企业级改造", "全量盘点项目债务", "/hz", "Claude Code 还债指令", "OpenClaw 还债流", or "Hermes 还债流". It supports platform-neutral project debt audits and staged remediation across architecture, code, UI, security, tests, delivery, observability, compliance, and documentation.'
---

# 企业级还债流

把项目从“能跑”推进到“可长期维护、可审计、可交付、可防守”的状态。先盘点债务，再按风险和收益排序，再推进修复。保持核心流程平台中立，让 Codex、Claude Code、OpenClaw、Hermes 等智能体只做薄适配。

## 运行前置

先做环境预检，再进入审计、计划或修复。

- 先识别当前系统。
- 如果是 Windows，先运行 `scripts/bootstrap_windows_utf8.ps1`，把当前会话切到 UTF-8。
- 如果不是 Windows，继续使用 UTF-8 读写习惯，仍然显式写文件编码。
- 先检查中文输出是否正常，再开始读仓库内容、跑验证脚本或输出报告。

## 快速入口

把常用操作压成三个动作。默认先跑 `audit`。

- `audit`：快速扫一遍，列出最关键的债务和证据。
- `plan`：把现有发现压成短路线图。
- `fix`：只处理 P0/P1 的最小安全修复。

使用 `references/core-contract.md` 作为跨平台行为契约。使用 `references/adapters.md` 给不同智能体接入口。使用 `references/environment.md` 作为系统检测和 Windows UTF-8 约定。不要把平台专属语法写进核心流程。

## 先定标准

先把“企业级”落成可检查的标准，而不是口号。至少按以下维度判断：

- 安全默认开启
- 核心链路可追踪、可回滚、可恢复
- 发布可重复、环境可复现
- 关键路径有测试门禁
- UI 一致、可访问、可维护
- 日志、指标、告警齐全
- 依赖、权限、数据处理可审计
- 文档足以支持接手和排障

安全、数据、发布、回滚能力不达标时，不要把项目判为企业级。使用 `references/security-baseline.md` 判断 P0/P1 安全门槛。

## 先问清范围

在开始审计前，先确认项目类型、技术栈、部署形态、核心用户路径、合规要求、当前最痛的问题，以及这次还债的目标边界。缺少这些信息时，先把假设写清楚，再继续。

## 按顺序执行

1. 固定审计范围。明确哪些仓库、页面、服务、环境、分支、接口和流程纳入本次审计。
2. 收集证据。按 `references/audit-playbook.md` 查看目录结构、配置、依赖、CI/CD、测试、日志、监控、截图、接口契约、迁移脚本和文档。
3. 分类债务。把发现拆成架构债、代码债、安全债、UI 债、性能债、测试债、交付债、观测债、数据债、文档债、依赖债、治理债。
4. 打分排序。按风险、影响面、复现性、修复成本、证据强度排序，优先处理高风险低成本项。
5. 输出路线图。把债务拆成立即止血、短期整改、中期重构、长期治理四层。
6. 进入修复。先修最小但最关键的变更，再补测试、监控和验收门禁。

## 盘点时重点看什么

先从最容易造成业务损失和安全事故的地方看起，再看可维护性和体验细节。

- 安全：认证授权、密钥管理、输入校验、注入面、越权、审计日志、依赖漏洞、最小权限
- 架构：模块边界、依赖方向、循环引用、状态流、扩展点、领域模型
- 代码：重复逻辑、复杂函数、命名混乱、魔法值、异常处理、错误传播
- UI/UX：视觉一致性、信息层级、表单反馈、空态/错态/载入态、响应式、可访问性
- 性能：首屏、包体、慢查询、缓存、并发、资源加载、无谓重渲染
- 测试：单测、集成、E2E、契约测试、回归覆盖、测试稳定性
- 交付：构建、发布、回滚、迁移、环境差异、版本管理
- 观测：日志、指标、追踪、告警、SLO、故障定位
- 数据：数据模型、迁移、保留、脱敏、权限、质量
- 文档：README、运行手册、接手说明、ADR、接口说明

## 形成结论时要写清楚

每条债务都要写成可验证事实，而不是抽象意见。至少记录这些字段：

- 编号
- 类别
- 证据
- 影响
- 修复建议
- 预估成本
- 优先级
- 验证方式

把“已确认问题”和“待验证假设”分开，不要混写。证据不足时，先标记为待验证，再继续补材料。

## 排序原则

先处理会造成安全、数据、发布和核心业务损失的问题。不要让低风险的视觉打磨，压过高风险的结构性问题。

使用 `references/scoring.md` 给每条债务定级。使用 `references/taxonomy.md` 统一分类和命名。使用 `references/security-baseline.md` 判定安全门槛。使用 `examples/audit-report.example.md` 统一输出格式。

## 输出三件事

最终输出至少包含三部分：

1. 债务台账：列出所有发现、证据、影响和优先级。
2. 整改路线图：按阶段列出先修什么、后修什么、谁来修、如何验收。
3. 质量门禁：列出修完后必须满足的验收条件和残余风险。

## 修复时守住边界

- 先修高风险，再修高频，再修高感知
- 先做能降低风险的最小改动，再做大重构
- 先补测试和监控，再扩大改动面
- 先保留行为一致性，再优化内部实现
- 先记录残余债务，再宣布阶段完成

## 参考资源

- `references/core-contract.md`：跨平台核心契约
- `references/adapters.md`：Codex、Claude Code、OpenClaw、Hermes 适配方式
- `references/environment.md`：系统检测与 Windows UTF-8 会话约定
- `references/audit-playbook.md`：实际审计步骤
- `references/security-baseline.md`：安全和企业级最低门槛
- `references/taxonomy.md`：债务分类和识别信号
- `references/scoring.md`：优先级评分和分级规则
- `examples/audit-report.example.md`：标准输出示例
- `assets/adapters/`：可复制到 Claude Code、OpenClaw、Hermes 的薄入口文件
- `scripts/bootstrap_windows_utf8.ps1`：Windows UTF-8 会话 bootstrap
- `scripts/validate_skill.py`：本技能的结构和引用校验脚本

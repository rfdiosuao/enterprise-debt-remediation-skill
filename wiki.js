const { createApp, computed, ref } = Vue;

const repoUrl = 'https://github.com/rfdiosuao/enterprise-debt-remediation-skill';
const pagesUrl = 'https://rfdiosuao.github.io/enterprise-debt-remediation-skill/';

createApp({
  setup() {
    const query = ref('');
    const statusMessage = ref('GitHub Pages 已启用，推送 main 即会刷新线上首页。');
    const copiedLabel = ref('');
    const topNav = [
      { id: 'overview', label: '概览' },
      { id: 'modes', label: '命令' },
      { id: 'priority', label: '等级' },
      { id: 'adapters', label: '适配' },
      { id: 'install', label: '安装' },
      { id: 'publish', label: '上线' },
      { id: 'faq', label: 'FAQ' },
    ];

    const chips = [
      { label: 'Skills', value: '2 入口' },
      { label: 'Modes', value: 'audit / plan / fix' },
      { label: 'Adapters', value: 'Codex / Claude / OpenClaw / Hermes' },
      { label: 'Publish', value: 'GitHub Pages' },
    ];

    const quickCommands = {
      audit:
        '/hz audit 当前项目。按安全债、数据债、发布债、测试债、架构债、代码债、UI债、性能债、观测债、文档治理债全面审视，输出债务台账、优先级 P0-P3、证据、影响、修复建议、验证方式。',
      plan:
        '/hz plan 基于当前债务台账，生成分阶段还债路线图，按 P0/P1/P2/P3 排序。',
      fix:
        '/hz fix 只处理 P0/P1 债务，优先做最小安全修复，并说明验证方式。',
    };

    const sections = [
      {
        id: 'overview',
        label: '概览',
        title: '它不是清单，是治理流程',
        lead:
          '债序天工把项目从“能跑”推进到“可长期维护、可审计、可交付、可防守”的状态。它先识别债务，再按风险和收益排序，再推进偿还。',
        points: [
          '先看安全、数据、发布和回滚风险，再看架构、代码和体验。',
          '所有债务都要写成可验证事实，不要只写主观意见。',
          '证据不足时，标为 pending-evidence，不要提前下结论。',
        ],
        quote:
          '目标不是把项目修到“看起来干净”，而是把它修到“可以交给企业级场景长期运行”。',
      },
      {
        id: 'modes',
        label: '命令',
        title: '三个子命令就够了',
        lead:
          '`/hz` 只保留三个动作：`audit`、`plan`、`fix`。默认进入 `audit`。这个入口要尽量薄，复杂逻辑交给核心契约。',
        snippets: [
          { label: '/hz audit', value: quickCommands.audit },
          { label: '/hz plan', value: quickCommands.plan },
          { label: '/hz fix', value: quickCommands.fix },
        ],
        points: [
          'audit：找出最关键的债务、证据、影响和优先级。',
          'plan：把债务整理成短路线图，明确先后顺序和验证方式。',
          'fix：只改 P0/P1 或用户明确指定的问题，避免大范围误伤。',
        ],
      },
      {
        id: 'priority',
        label: '等级',
        title: 'P0 到 P3 的排序方式',
        lead:
          '优先级不是看“谁最丑”，而是看“谁最容易造成损失”。排序时先处理安全、数据、发布和核心业务，再处理维护和体验。',
        table: {
          headers: ['等级', '含义', '处理方式'],
          rows: [
            ['P0', '安全事故、数据损坏、权限绕过、发布阻断、不可恢复状态', '立即修，不排队'],
            ['P1', '核心链路失败、回滚不可靠、关键测试缺失、高频稳定性问题', '近期修'],
            ['P2', '维护效率、扩展性、体验一致性、架构清晰度问题', '纳入治理计划'],
            ['P3', '低风险 polish、局部整理、文档补充', '排入低优先级池'],
          ],
        },
        points: [
          '同级里先处理影响面大、修复成本低、证据强的问题。',
          '先止血，再重构。',
          '先补测试和观测，再扩大改动面。',
        ],
      },
      {
        id: 'sequence',
        label: '顺序',
        title: '默认从高风险到低风险审视',
        lead:
          '审视顺序固定，有助于模型少发散、多聚焦。先把最危险的债务找出来，再慢慢处理 UI、代码和文档。',
        points: [
          '安全债：认证、授权、密钥、输入校验、越权、依赖漏洞。',
          '数据 / 合规债：敏感数据、迁移、备份、恢复、审计、保留策略。',
          '发布 / 运维债：构建、CI/CD、环境一致性、回滚、迁移。',
          '测试债：核心链路回归、集成测试、E2E、测试稳定性。',
          '架构、代码、UI、性能、观测和治理债依次处理。',
        ],
      },
      {
        id: 'adapters',
        label: '适配',
        title: '核心契约平台中立，入口只做薄适配',
        lead:
          'Codex、Claude Code、OpenClaw、Hermes 可以共用同一份核心契约。不同平台只负责把入口翻译成 `audit`、`plan`、`fix` 三种模式。',
        snippets: [
          {
            label: 'Claude Code',
            value:
              'enterprise-debt-remediation/assets/adapters/claude-code/hz.md -> .claude/commands/hz.md',
          },
          {
            label: 'OpenClaw',
            value:
              'enterprise-debt-remediation/assets/adapters/openclaw/hz.prompt.md',
          },
          {
            label: 'Hermes',
            value:
              'enterprise-debt-remediation/assets/adapters/hermes/hz.prompt.md',
          },
        ],
        points: [
          '不要把平台私有语法写进核心契约。',
          '工具权限、模型路由、hook 行为留在各平台配置。',
          '平台不支持 slash command 时，用自然语言触发同样的三种模式。',
        ],
      },
      {
        id: 'install',
        label: '安装',
        title: '如何装进 Codex',
        lead:
          '仓库已经包含两个可直接使用的 Codex 技能：完整版 `enterprise-debt-remediation` 和极简版 `hz`。',
        snippets: [
          {
            label: '复制技能',
            value:
              '$skills = "$env:USERPROFILE\\.codex\\skills"\nCopy-Item -Recurse -Force .\\enterprise-debt-remediation "$skills\\enterprise-debt-remediation"\nCopy-Item -Recurse -Force .\\hz "$skills\\hz"',
          },
          {
            label: '使用方式',
            value: '$hz\n$enterprise-debt-remediation',
          },
        ],
        points: [
          '完整版适合全面审计和整改。',
          '极简版适合快速 triage 和短反馈循环。',
          '两者都已经带有 agents/openai.yaml 和验证脚本。',
        ],
      },
      {
        id: 'publish',
        label: '上线',
        title: 'GitHub Pages 已经接上',
        lead:
          '这个仓库已经开启 GitHub Pages，根目录的 `index.html` 就是在线首页。推送到 `main` 后，Pages 会自动刷新。',
        points: [
          '线上首页：债序天工 Wiki。',
          '仓库 README 负责入口和说明，Pages 负责体验和浏览。',
          'Release 里保留 `.skill` 包，方便直接下载。',
        ],
        snippets: [
          { label: '在线地址', value: pagesUrl },
          { label: '仓库地址', value: repoUrl },
        ],
      },
      {
        id: 'validate',
        label: '验证',
        title: '校验与打包都已经标准化',
        lead:
          '为了避免技能内容和文档越写越散，仓库里有自检脚本、Codex 校验和 `.skill` 打包包。',
        snippets: [
          {
            label: '校验',
            value:
              'python .\\enterprise-debt-remediation\\scripts\\validate_skill.py .\\enterprise-debt-remediation\npython "$env:USERPROFILE\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py" .\\enterprise-debt-remediation\npython "$env:USERPROFILE\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py" .\\hz',
          },
          {
            label: '打包',
            value:
              'Compress-Archive -Path .\\enterprise-debt-remediation\\* -DestinationPath .\\dist\\enterprise-debt-remediation.skill -Force\nCompress-Archive -Path .\\hz\\* -DestinationPath .\\dist\\hz.skill -Force',
          },
        ],
      },
      {
        id: 'structure',
        label: '结构',
        title: '仓库结构一眼能看懂',
        lead:
          '结构清楚，后面审视和维护就少一半摩擦。Skill 本体、适配文件、验证脚本、文档、发行包都分层放置。',
        snippets: [
          {
            label: '目录结构',
            value:
              'enterprise-debt-remediation/\n  SKILL.md\n  agents/openai.yaml\n  references/\n  examples/\n  assets/adapters/\n  scripts/validate_skill.py\nhz/\n  SKILL.md\n  agents/openai.yaml\nindex.html\nwiki.css\nwiki.js',
          },
        ],
        points: [
          'README 说清楚怎么用，Wiki 负责更好的视觉和浏览体验。',
          'Skill 本体避免塞进无关的过程文档。',
          '适配文件只做薄入口，不重复核心逻辑。',
        ],
      },
      {
        id: 'faq',
        label: 'FAQ',
        title: '几个常见问题',
        lead: '如果你在审视一个项目时不知道从哪下手，先从高风险债开始，不要先看表面好不好看。',
        points: [
          '问：这个项目从哪类债开始审视？答：先安全、数据、发布，再测试、架构、代码、UI。',
          '问：哪个指令可以全面审视？答：`/hz audit`，或者直接用完整模式 `$enterprise-debt-remediation`。',
          '问：能不能让不同智能体共用？答：可以，核心契约中立，入口做薄适配。',
        ],
      },
    ];

    const visibleSections = computed(() => {
      const q = query.value.trim().toLowerCase();
      if (!q) return sections;

      return sections.filter((section) => {
        const text = [
          section.label,
          section.title,
          section.lead,
          section.quote,
          ...(section.points || []),
          ...(section.snippets || []).map((snippet) => `${snippet.label} ${snippet.value}`),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return text.includes(q);
      });
    });

    async function copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
        copiedLabel.value = '已复制到剪贴板';
      } catch {
        copiedLabel.value = '复制失败，请手动复制';
      }

      statusMessage.value = copiedLabel.value;
      window.clearTimeout(copyText.timer);
      copyText.timer = window.setTimeout(() => {
        statusMessage.value = 'GitHub Pages 已启用，推送 main 即会刷新线上首页。';
      }, 1800);
    }

    return {
      repoUrl,
      pagesUrl,
      topNav,
      chips,
      quickCommands,
      query,
      statusMessage,
      copiedLabel,
      visibleSections,
      copyText,
    };
  },
}).mount('#app');

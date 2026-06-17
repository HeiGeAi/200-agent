# Canonical Agent 格式规范

每个 agent 是 `agents/<slug>.md` 一个文件,这是**唯一真相**。三套工具产物由 `build/build.mjs` 转译生成,不要手改 `dist/`。

## Frontmatter 字段

| 字段 | 类型 | 说明 |
|---|---|---|
| `name` | string | 全局唯一 slug(kebab-case),即各工具的调用名 / 文件名 |
| `nameZh` | string | 中文名,贴合中国岗位口语 |
| `nameEn` | string | 英文名 |
| `domain` | string | 所属域 id(14 个之一,见 `build/lib.mjs`) |
| `color` | string | 展示色(blue/green/cyan/purple/orange/pink/red/yellow) |
| `description` | string | 中文一句话能力,自然含核心触发词。Claude Code 靠它自动路由 |
| `audience` | list | 主要受众 |
| `triggers_zh` | list | 中文 skill 式触发词 |
| `triggers_en` | list | 英文触发词 |
| `when_to_use` | string | 何时用 |
| `when_not_to_use` | string | 何时改用别的 agent |
| `merged_from` | list | 继承自原 The Agency 的哪些 agent slug(血缘 / 审计用) |

约定:frontmatter 的值里**不要出现半角冒号 `:`**(解析器按首个冒号切分);列表写 `[a, b, c]`。

## 正文

`---` 之后是中文为主的 system prompt,结构建议:角色定位 → 核心能力 → 工作方法 → 中国本土约束与合规红线 → 输出规范 → 触发与边界。

## 转译映射

| 工具 | 产物 | 触发承载 |
|---|---|---|
| Claude Code | `dist/claude-code/agents/<slug>.md` | `name` + `description`(触发词已折入) |
| Codex | `dist/codex/prompts/<slug>.md` + `AGENTS.md` | 提示文件头部触发词,`/<slug>` 调用 |
| OpenClaw | `dist/openclaw/agents/<slug>.md` | 独立 `triggers` 字段 |

> Codex / OpenClaw 的精确字段以各自版本为准,适配层集中在 `build/build.mjs`,改一处即可。

<div align="center">

# 200 Agent

**200 个专家级 AI 角色,让你手里的 AI 工具发挥到行业专家水平**

200 expert AI personas that turn your AI tools into world-class specialists · single source · Claude Code · Codex · OpenClaw

[![agents](https://img.shields.io/badge/agents-200-brightgreen)](./ROUTER.md)
[![domains](https://img.shields.io/badge/domains-14-blue)](./ROUTER.md)
[![license](https://img.shields.io/badge/license-MIT-black)](./LICENSE)
[![tools](https://img.shields.io/badge/Claude%20Code%20·%20Codex%20·%20OpenClaw-ready-orange)](./docs/SCHEMA.md)

[路由总表 ROUTER](./ROUTER.md) · [格式规范 SCHEMA](./docs/SCHEMA.md)

**简体中文** · [English](./README.en.md)

</div>

---

## 这是什么

一套 **200 个专家级 AI 角色**,装进 Claude Code / Codex / OpenClaw。你在用 AI 写代码、做架构、出图出视频、写内容、做分析、跑增长、搞研究时,它让 AI 表现得像请了一位行业资深专家在旁边带着干。

为**重度使用 AI 工具的人**而建:开发者、创作者、营销人、分析师、创业者、研究者、专业顾问。每个角色都是为「人 + AI 工具协作」设计的。

名字图好记,就叫 **200 Agent**。

设计原则:

- **AI 原生**:每个角色都假设你正在用 AI 工具,负责把 AI 的输出拉到专家水准。重点覆盖软件工程、AI 工程、AI 视觉创作(各家图像视频模型的提示词导演 + 审美把关的艺术总监)、写作、数据、产品、营销、商业、研究、专业顾问。
- **资深不灌水**:正文带可直接抄用的硬资产(模板、公式、清单、数值红线、提示词骨架),拿来就能用。
- **一份源,多端转译**:每个 agent 只维护一个 `agents/<slug>.md`,`npm run build` 转译出 Claude Code / Codex / OpenClaw 三套产物。
- **中文为主 + 中英双触发**:正文中文,触发词中英双写,自动路由更易命中。
- **数量硬卡 200**:CI 守门,`slug` 全局唯一。

## 14 个域

| 域 | 数量 | 谁在用 |
|---|---|---|
| 软件工程 | 26 | 工程师 / 架构师 |
| AI 工程与智能体 | 16 | AI 应用 / Agent 开发者 |
| AI 视觉创作 | 18 | 设计师 / 创作者(MJ / 即梦 / Sora) |
| 设计与体验 | 12 | UI / UX / 产品设计 |
| 写作与内容 | 18 | 作者 / 编剧 / 内容人 |
| 数据与分析 | 12 | 分析师 / 数据岗 |
| 产品与增长 | 12 | 产品经理 / 增长 |
| 营销与品牌 | 16 | 营销人 / 品牌 / 投放 |
| 商业与战略 | 14 | 创始人 / 战略 / 咨询 |
| 研究与学习 | 12 | 研究者 / 学习者 |
| 专业领域顾问 | 16 | 法务 / 财税 / 医疗 / HR |
| 职业与个人效能 | 12 | 职场人 / 求职者 |
| 运营·项目·销售 | 12 | 项目 / 运营 / 销售 |
| 行业垂直 | 4 | 游戏 / 跨境 / Web3 / GIS |

## 怎么调用(看一眼就会)

装好之后(见下方[快速开始](#快速开始)),不用记 slug。直接说人话,工具按描述和触发词自动挂上对的 agent;想精确点名也行。三个例子:

**例 1 · Claude Code 自动路由。** 你在 Claude Code 里直接说:

> 帮我把这个 PR 审一遍,盯正确性和安全。

Claude Code 按描述和触发词自动挂上**代码审查官**(`code-reviewer`),它会按正确性、安全、可维护性、性能逐条给可执行意见,而不是泛泛夸两句。

**例 2 · Codex 点名调用。** 把 agent 装进 `~/.codex/prompts/` 后,用 `/<slug>` 点名:

> /midjourney-prompt-engineer 把"赛博朋克风的城市夜景"写成能出片的咒语

**Midjourney 提示词工程师**接管,带上 sref 风格参考和 stylize/chaos 参数,直接给能复现的提示词。

**例 3 · OpenClaw 触发词命中。** 你说:

> 这条慢查询卡了 3 秒,帮我调一下。

触发词「慢查询 / SQL 优化」命中**数据库与 SQL 优化专家**(`database-sql-optimizer`),它先看执行计划,再给索引和改写方案。

> 不确定用哪个?直接描述你要做的事,工具自动匹配;想精确点名,去 [ROUTER.md](./ROUTER.md) 拿 slug。

## 全部 200 个 agent

按 14 域分组,点开看每个 agent 的中文名、调用 slug 和能力。机读索引见 [catalog.json](./catalog.json),纯表格版见 [ROUTER.md](./ROUTER.md)。

<!-- AGENT-LIST:START -->

<details>
<summary><b>软件工程</b>（26）</summary>

| Agent | slug | 能力 |
|---|---|---|
| API 设计架构师 | `api-design-architect` | 设计 REST/GraphQL/gRPC 的接口契约与版本策略，把分页、鉴权、错误码、幂等和限流定成可演进规范，让 API 设计稳、好用、对外可长期兼容。 |
| 应用安全与安全编码工程师 | `appsec-secure-code-engineer` | 在你写代码和提交前就把安全前置，扫密钥泄露、做威胁建模、跑安全代码审查和 SAST/DAST 集成，把鉴权、注入、CORS 这类坑堵在合并之前。 |
| 后端架构师 | `backend-architect` | 做系统架构与领域建模，定 API 设计、数据流和分层架构，给可落地的技术选型，兜底移动端架构和嵌入式固件的系统级设计 |
| Bug 修复最小改动工程师 | `bug-fix-minimal-change-engineer` | 定位根因、复现 bug、给最小可行修复，只改该改的，拒绝顺手扩大范围把修 bug 变成重构灾难 |
| 代码审查官 | `code-reviewer` | 对 PR 做代码审查，盯正确性、安全、可维护性和性能给可执行反馈，把真问题揪出来再放行，不纠结代码风格。 |
| 祖传代码向导 | `codebase-onboarding-guide` | 接手没人懂的老项目时，读源码、理调用链、画模块边界，帮你看懂这个项目、半天上手祖传代码。 |
| 数据管道工程师 | `data-pipeline-engineer` | 建可靠的 ETL/ELT 和湖仓管道，搞定 Spark、dbt、流处理和数据质量，把杂乱原始数据变成可信可分析的资产。 |
| 数据库与 SQL 优化专家 | `database-sql-optimizer` | 治慢查询、设索引、调 schema 和分库分表，看执行计划做数据库调优，把卡死的 SQL 一条条拆开。 |
| DevOps 与 CI/CD 工程师 | `devops-cicd-engineer` | 搭 CI/CD 流水线、容器化与 K8s、IaC 和云运维，做信创私有化与离网交付，把部署做到一键可重复 |
| 嵌入式固件工程师 | `embedded-firmware-engineer` | 写裸机与 RTOS 生产级固件，做嵌入式开发、单片机驱动和 RTOS 任务架构，覆盖 STM32/ESP32/Nordic 全栈，让跑在硬件上的代码稳定不崩、时序可控、内存可算。 |
| 前端工程专家 | `frontend-engineer` | 深耕现代前端的资深工程专家，从 React/Vue/Angular 组件、管理后台到落地页一把梭，把前端性能、可访问性和工程化全栈做到工业级。 |
| 全栈快速交付工程师 | `fullstack-rapid-builder` | 一个人从想法到能跑的产品全栈打通，前后端、数据库、部署一条龙，用 AI 把 MVP 和快速原型做到生产可用的速度。 |
| Git 工作流大师 | `git-workflow-master` | 帮团队捋顺 Git 工作流，定分支策略、规范提交、做 rebase 和 worktree 并行，把冲突解决和合流变得干净可追溯。 |
| Go/Rust 系统工程师 | `go-rust-systems-engineer` | 用 Go 和 Rust 写高性能系统级服务，吃透并发编程、内存安全和高性能服务的吞吐与延迟极限。 |
| 移动端开发工程师 | `mobile-app-engineer` | iOS/Android 原生加 Flutter/React Native 跨端开发，搞定 App开发 的生命周期、性能、上架审核和原生能力桥接。 |
| Node.js 后端工程师 | `node-backend-engineer` | 用 Node 和 TypeScript 搭服务端，做 Express/NestJS 服务、事件循环调优和 BFF 层，把 JS 全栈的后端做扎实。 |
| 渗透测试与红队官 | `penetration-tester` | 做授权渗透测试和红队演练，针对 Web、API、网络和云做漏洞利用与攻击链复现，把孤立漏洞串成能打到业务核心的完整链路，再配上能落地的整改报告和复测验证。 |
| 性能调优工程师 | `performance-tuning-engineer` | 做性能压测和剖析，定位 CPU/内存/IO 热点，调并发缓存和算法复杂度，用基准数据证明优化前后的真实提升。 |
| Python 工程专家 | `python-engineering-expert` | 用 Python 写工程化代码，做 FastAPI/Django 服务、异步并发、类型注解和打包测试，把能跑就行的脚本流升级成可维护的生产工程。 |
| React 技术栈专家 | `react-stack-specialist` | 深耕 React 技术栈把项目调到工业级，专攻 React 优化、Next.js、Hooks、状态管理、服务端渲染和 React 性能。 |
| 重构与技术债治理工程师 | `refactor-tech-debt-engineer` | 识别坏味道、拆大函数、解耦模块、补测试护网，做有节制不破坏行为的重构，把技术债按优先级一点点还清。 |
| 智能合约工程与审计官 | `smart-contract-engineer-auditor` | 写 Solidity/EVM 合约做 gas 优化和可升级代理，再独立做安全审计，漏洞检测、形式化验证和攻击复现，出审计报告 |
| 资深软件架构师 | `software-architect` | 做系统设计与领域驱动建模，定分层、边界和技术选型，给可落地、抗演进的架构决策和取舍依据，专治架构选型、领域建模和技术决策。 |
| SRE 稳定性与事故指挥官 | `sre-incident-commander` | 守 SLO 做可观测，线上炸了当事故指挥官拉应急、控节奏、定止损措施，事后跑无追责复盘，再给系统加自动护栏（熔断、回滚、成本闸门），把稳定性做成可度量的工程能力，让线上少炸、炸了能快速止血。 |
| 技术文档与 API 文档官 | `tech-docs-api-writer` | 写 README、API 参考、架构说明和上手教程，把复杂工程概念讲成开发者真会读会用的文档，每段代码示例都跑得通。 |
| 测试 QA 与自动化工程师 | `test-qa-automation-engineer` | 给你设计测试策略、写单元集成端到端用例和接口契约测试，做覆盖率与测试结果分析，默认挑刺要实证才放行。 |

</details>

<details>
<summary><b>AI工程与智能体</b>（16）</summary>

| Agent | slug | 能力 |
|---|---|---|
| Agent 架构设计师 | `agent-architecture-designer` | 为单体 agent 设计规划-工具调用-反思循环、状态机和失败恢复，配 agent 状态机、人类介入闸门和工具调用循环，把会乱跑的 agent 收成稳定可控的执行体。 |
| Agent 工作流自动化工程师 | `agentic-workflow-automation-engineer` | 用 agent 把重复业务流封装成自动化工作流，先做工作流自动化的价值与流程风险评估，再上自动化护栏和人审节点，n8n 式编排让活自动化又不失控。 |
| AI 应用架构师 | `ai-app-architect` | 把 LLM 能力落进生产系统的端到端架构，做模型网关、流式输出和降级兜底，把 demo 级 AI 功能架成扛得住量的服务。 |
| AI 成本优化工程师 | `ai-cost-optimization-engineer` | 拆 token 账单做模型路由分级、提示词压缩与缓存命中，在效果不掉的前提下做 AI 成本优化、推理降本，并给失控前的成本护栏。 |
| AI 产品工程师 | `ai-product-engineer` | 把模型能力翻译成用户用得爽的功能，做 AI 产品化、AI 功能设计、人机交互与流式体验，专治模型很强但产品很难用。 |
| AI 安全红队工程师 | `ai-redteam-safety-engineer` | 对 LLM 应用做对抗测试和 AI 红队，专攻提示词注入、越狱攻击、数据外泄防护，给出输入输出防护栏和兜底策略，把 AI 攻击面系统性堵上。 |
| 上下文工程专家 | `context-engineering-specialist` | 为长任务设计上下文窗口预算、记忆分层、压缩裁剪和动态拼装策略，专治上下文超限、中段遗忘和提示词注入污染。 |
| 数据标注与策管负责人 | `data-annotation-curation-lead` | 为微调和评测建标注规范、做数据清洗去重和标注一致性校验，把脏乱语料策展成口径不漂、质量可审计的训练集与评测语料。 |
| 大模型评测与质检官 | `llm-eval-qa-engineer` | 为 LLM 应用搭可复现的评测体系，做模型评测集、LLM-as-judge 打分和效果回归，把上线前质检从拍脑袋变成有数据的判断。 |
| 大模型选型顾问 | `llm-selection-advisor` | 按任务场景、效果基准、上下文长度、合规与成本给大模型选型矩阵，对比闭源开源国内外模型，给主选加兜底的模型组合而非单押一家。 |
| MCP 服务开发专家 | `mcp-server-builder` | 设计、实现并测试 Model Context Protocol 服务，把外部工具、资源和数据源封装成 agent 能稳定调用的 MCP 能力，含鉴权、错误契约和兼容性测试。 |
| 模型微调训练工程师 | `model-finetuning-engineer` | 做 SFT/LoRA/DPO 微调全流程，从训练数据配比、超参调优到过拟合诊断，先帮你判断该微调还是该改提示词，别白烧卡。 |
| 多 Agent 编排与自动化治理架构师 | `multi-agent-orchestration-architect` | 设计多 agent 拓扑与上下文流转、做 agent 编排和工作流设计，治理 agent 身份信任与身份图谱，n8n 式自动化先审价值风险再上护栏落地。 |
| 提示词工程架构师 | `prompt-engineering-architect` | 把模糊指令打磨成可量化、抗漂移的生产级系统提示词，建提示词版本库、评测集和回归用例，专治 prompt 优化里输出不稳、指令跑偏、换模型就崩。 |
| RAG 检索增强工程师 | `rag-pipeline-engineer` | 搭检索增强生成全链路，做文档切块、混合检索、重排序和引用归因，专治检索召不准、答非所问和瞎编引用。 |
| 向量检索与嵌入工程师 | `vector-retrieval-engineer` | 选嵌入模型、调向量数据库索引、做召回评测，把语义检索的精度、延迟和成本同时压到达标线。 |

</details>

<details>
<summary><b>AI视觉创作</b>（18）</summary>

| Agent | slug | 能力 |
|---|---|---|
| AI 3D 与动效设计师 | `ai-3d-motion-designer` | 用 AI 工具做 3D 渲染风、C4D 质感和图标动效，定材质灯光参数、等距小场景和动效节奏，把扁平内容做出立体动起来的高级感。 |
| AI 艺术总监 | `ai-art-director` | 替你把审美关，定视觉调性、从一堆 AI 出图里选出最对的那张、点出哪里塑料感哪里廉价，把零散素材统一成有品的成套作品 |
| AI 品牌视觉系统设计师 | `ai-brand-visual-system-designer` | 用 AI 工具搭一套能复用的品牌视觉系统，定调色板和字体气质、锁图像风格和 sref 种子，让全平台出图都像出自同一个品牌。 |
| AI 角色与概念设计师 | `ai-character-concept-designer` | 用 AI 工具做角色概念设计与人设三视图，保住角色一致性，产出可迭代的设定集和概念图 |
| AI 色彩与字体策划师 | `ai-color-typography-curator` | 按情绪和场景给你定调色板、搭字体组合、调对比和视觉层级，把 AI 出图和版面的颜色字体调到既好看又传达对情绪，专治配色方案、字体气质、色彩情绪。 |
| AI 插画与漫画师 | `ai-illustration-comic-artist` | 用 AI 做插画和分格漫画，定画风、保人物一致性、排格子和分镜、配对白气泡，把一个故事或知识点画成成套的图。 |
| AI 摄影指导 | `ai-photography-director` | 用摄影师的语言写 AI 出图，把布光方案、镜头焦段、胶片质感翻译成提示词，让生成图有真实相机感。 |
| AI 海报与信息图设计师 | `ai-poster-infographic-designer` | 用 AI 出海报和信息图，定版式层级、做文字精准上图、把数据和流程视觉化，给排版网格和配色方案，出能直接用的高密度信息大图。 |
| AI 产品场景图与换装造型师 | `ai-product-staging-tryon-stylist` | 用图生图做电商产品场景图和 AI 换装，保住产品和人物主体不变形，换背景换模特换服装，出能直接挂链接的电商主图与产品摆拍图 |
| AI 视觉叙事分镜导演 | `ai-visual-storyboard-director` | 把一个想法拆成有节奏的视觉故事，写分镜脚本、设计镜头序列和情绪曲线，再落成连贯的生图与生视频提示词。 |
| GPT-Image / Nano Banana 编辑工程师 | `gpt-image-nano-banana-engineer` | 专精对话式生图与图生图，吃透 GPT-Image 与 Gemini Nano Banana 的指令编辑、多图融合、局部重绘和文字精准上图，把改图说清楚一次到位。 |
| 即梦提示词导演 | `jimeng-prompt-director` | 专攻即梦/Dreamina 出图，吃透中文语义模型脾气、参考图权重和分区描述，把国风、电商、人像写成能复现的中文生图咒语。 |
| 可灵视频提示词导演 | `kling-video-director` | 专攻可灵 Kling 视频，懂首尾帧控制、运镜语言和运动幅度，把分镜写成能跑出连贯运动和镜头感的视频提示词。 |
| Midjourney 提示词工程师 | `midjourney-prompt-engineer` | 把脑子里的画面翻译成 Midjourney 能听懂的精准咒语，吃透 sref 风格参考、cref 角色一致和 stylize/chaos 参数，帮你稳定出片、控住风格一致性。 |
| Runway 动态视效导演 | `runway-motion-director` | 玩透 Runway 的运动笔刷、镜头控制和视频特效合成，把静图变动态、做转场和视觉特效，给可直接套用的参数和分镜方案。 |
| Seedance 视频提示词导演 | `seedance-video-director` | 专精即梦 Seedance 2.0 视频生成，按短剧、广告、口播节奏写时间戳分镜提示词，懂视频延长、镜头衔接和带货素材的爆点设计。 |
| Seedream 出图架构师 | `seedream-image-architect` | 玩透 Seedream 的高分辨率出图、长文本理解和组图一致性，把品牌大片、系列视觉、成套海报做成风格统一可复现的成套作品。 |
| Sora 视频提示词导演 | `sora-video-director` | 用电影语言写 Sora 提示词的资深导演，吃透场景调度、物理一致性、长镜头与多镜头叙事，把一句创意拍成有导演感的 AI 短片。 |

</details>

<details>
<summary><b>设计与体验</b>（12）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 无障碍设计专家 | `dux-accessibility-specialist` | 对照 WCAG 2.2 和信创无障碍标准做无障碍设计审计，查对比度、焦点管理、读屏适配和键盘可达，给能直接改的整改清单和验收标准。 |
| AI 原生体验设计专家 | `dux-ai-native-experience-designer` | 为对话、agent 和生成式产品做 AI 原生体验设计，吃透流式输出体验、不确定性设计和人机协作信任，把模型很强但产品难用的功能调成用户敢用、能纠错的交互。 |
| 设计评审主审官 | `dux-design-critic-reviewer` | 用层级、对齐、间距、可读性和一致性做系统化设计评审，逐条给问题、原因和改法，把含糊点评变成可执行批注，专治设计走查没标准、改稿建议说不清 |
| 设计系统架构师 | `dux-design-system-architect` | 从 design token、组件 API 到主题与暗色模式，搭一套跨端可治理、能让 AI 直接生成组件的设计系统底座 |
| 信息架构专家 | `dux-information-architect` | 梳理内容分类、导航结构和命名体系,用卡片分类和树测试验证,让用户一眼找得到、产品扩展不塌方。 |
| 交互设计专家 | `dux-interaction-designer` | 把复杂流程拆成顺手的状态、转场和微交互，定义手势、反馈与空态边界态，让每一步操作都有清晰因果。涵盖交互设计、微交互、状态设计。 |
| 画像走查体验官 | `dux-persona-walkthrough-specialist` | 以设定画像的心智视角逐屏走查页面，结合转化心理学做页面体验诊断，记录情绪反应，输出可执行的 CRO 报告。 |
| 产品设计专家 | `dux-product-designer` | 从需求到上线全程操盘产品体验，把功能需求设计成可发布方案，平衡商业目标、用户价值和实现成本，专攻产品设计、0到1设计、端到端设计 |
| 高保真原型工程师 | `dux-prototyping-engineer` | 用代码和 AI 工具快速搭可交互高保真原型，带真实数据和动效，把模糊想法变成能点能测的验证物，专治高保真原型、原型验证、代码原型卡在静态稿走不到能用。 |
| 用户旅程策略师 | `dux-user-journey-strategist` | 画全链路用户旅程图和服务蓝图，标出情绪曲线、关键时刻和痛点，把断点连成可优化的完整体验链路。 |
| UX 研究专家 | `dux-ux-researcher` | 设计用户访谈脚本和可用性测试，跑定性定量混合研究，把行为数据炼成可决策的研究洞察和优先级。 |
| Web 体验设计专家 | `dux-web-experience-designer` | 设计响应式落地页和营销站，统管排版网格、滚动叙事和性能感知，把品牌官网做到各端都好看、好用、加载快。 |

</details>

<details>
<summary><b>写作与内容</b>（18）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 学术写作精修教练 | `wc-academic-writing-coach` | 辅导学术写作，搭论文论证结构、改摘要与文献综述、调学术语体和引用规范，把口语化或松散的论述改成严谨清晰的学术表达 |
| 成书合著与书稿统筹官 | `wc-book-coauthor-manuscript-lead` | 把零散的语音、片段和定位攒成一本可出版的书，搭章节大纲、统一全书声音、逐章成稿并管控篇幅与一致性，从想法走到完整书稿。 |
| 内容策略与选题总监 | `wc-content-strategy-director` | 做内容战略，定内容支柱和受众分层、排编辑日历、设计选题矩阵和复用链路，把零散更新整成有方向能复利的内容体系。 |
| 资深商业文案匠人 | `wc-copywriting-craftsman` | 写转化型商业文案，从落地页、卖点提炼到 slogan 和广告语，把卖点写成让人下单的理由。 |
| 降AI味人味改写师 | `wc-deai-humanizer-rewriter` | 把一眼AI的稿子改成有人味，专攻降AI味、去模板腔、人机感改写，拆对仗删废话还原真实语感。 |
| 结构与逐句双层编辑 | `wc-developmental-line-editor` | 做两层改稿，上层重排结构补逻辑断点调叙事节奏，下层逐句润色去赘词，把烂稿改成能直接发的好稿并讲清每处为什么改 |
| GEO/AEO 内容被引官 | `wc-geo-aeo-content-strategist` | 让你的内容被 AI 引擎引用，做 GEO 优化和答案引擎优化，审计 ChatGPT、Claude、豆包、Kimi、DeepSeek 里的 AI 搜索可见度，写 llms.txt 和被引格式 |
| 代笔与口吻克隆师 | `wc-ghostwriter-voice-cloner` | 以第一人称替你或客户代笔，先扒清楚目标对象的语感、节奏、口头禅和价值观，再写成读者认不出是代笔的稿子，专治模仿口吻和克隆文风。 |
| 标题与开篇钩子专家 | `wc-headline-hook-specialist` | 批量产标题和开篇钩子，卖收益、埋好奇、玩反差，按平台调性出多版本测款，把点击率和完读率从第一行抓起来。 |
| 长文随笔写作大家 | `wc-longform-essayist` | 操刀深度长文和随笔，搭得起几千字的论证骨架，铺得开叙事张力，把一个观点写到既有思想密度又读得下去 |
| 叙事故事架构师 | `wc-narrative-story-architect` | 用经典叙事学框架搭故事，把控人物弧光、冲突升级和情绪曲线，给品牌故事、案例、纪实内容注入让人读下去的张力 |
| Newsletter 主理架构师 | `wc-newsletter-architect` | 策划并撰写邮件 newsletter，定栏目定位、设计开信钩子和邮件序列，把订阅做成高打开率的长期内容资产。 |
| 播客脚本与对谈构稿官 | `wc-podcast-script-writer` | 写播客脚本和对谈大纲，设计开场钩子、问题链和章节节奏，把口语内容写成既自然又有信息密度的可录制脚本 |
| 短视频短剧编剧 | `wc-screenwriting-scriptwriter` | 写短视频口播脚本和微短剧剧本，把3秒钩子、分镜、分集反转、情绪节奏一次写到位，让脚本既留得住人又拍得出来。 |
| SEO内容写作策略师 | `wc-seo-content-writer` | 做关键词意图研究、内容布局和搜索友好的成稿，把搜索意图翻译成既排得上又读得顺的长尾内容，专攻SEO内容、关键词布局和自然流量内容。 |
| 演讲稿撰稿人 | `wc-speechwriter` | 写演讲稿和发言稿，开场抓人、中段立论、收尾点燃，设计停顿排比金句节奏，按演讲者口吻和场合把稿子写成听得进记得住的现场表达。 |
| 技术文档与开发者写作官 | `wc-technical-documentation-writer` | 写开发者文档、API 参考、教程和 README，把复杂工程概念讲成开发者照着就跑通的清晰文档，核心触发词包括写技术文档、API文档、README。 |
| 翻译与本地化专家 | `wc-translation-localization-expert` | 做多语种精翻和本地化，统一术语表、贴合目标语境的语气和文化梗，把直译腔改成母语者读着自然的地道表达。 |

</details>

<details>
<summary><b>数据与分析</b>（12）</summary>

| Agent | slug | 能力 |
|---|---|---|
| AB 实验科学家 | `da-ab-experiment-scientist` | 帮你把 AB 测试做得能信能复现，从 AB实验设计、样本量估算到显著性判读和效应量解读，专治偷看数据提前停、被新奇效应骗、护栏指标失守。 |
| 分析工程师 | `da-analytics-engineer` | 用 dbt、Spark、Airflow 搭 ETL/ELT 管道和数仓分层，建可复用的指标模型，把数据质量校验、调度和血缘做成产线级资产。 |
| 应用统计学家 | `da-applied-statistician` | 帮你选对统计方法、把假设检验和置信区间算明白，做回归分析和方差分析，防住 p-hacking 和样本偏差，把不确定性说清楚。 |
| BI 看板架构师 | `da-bi-dashboard-architect` | 从业务目标倒推看板结构、维度度量和钻取路径，建语义层和数据模型，对接 Tableau、Power BI、Superset、Metabase 落成能自助分析的看板。 |
| 数据叙事顾问 | `da-data-storyteller` | 把分析结论包装成决策者听得进的故事，用金字塔结构、一图一结论和 So-What 提炼，产出能直接讲的数据汇报和洞察叙事。 |
| 数据可视化设计师 | `da-data-viz-designer` | 按数据关系和受众选对图表类型，避开误导性视觉，把配色、坐标轴、标注调到一眼看懂，可出 echarts、plotly、matplotlib 代码。 |
| 数据清洗整理专家 | `da-data-wrangler` | 把脏乱数据收拾成分析就绪的干净数据集，专攻缺失值处理、数据去重和实体对齐，用 pandas/Polars/OpenRefine 出可复现的清洗管道。 |
| 预测建模专家 | `da-forecasting-modeler` | 帮你做时间序列预测和销量需求预测，按场景在 ARIMA、Prophet、XGBoost 之间选型，处理季节性和节假日，交付带置信区间的预测和回测评估。 |
| 指标体系架构师 | `da-metrics-system-architect` | 用 OSM、北极星、UJM 方法搭一二三级指标体系，统一指标口径，建指标字典，把全公司看数从各算各的治成一套可信口径。 |
| 资深数据分析顾问 | `da-senior-data-analyst` | 拿到一坨数据先帮你把问题问对，再用拆解、对比、归因、漏斗、留存这套分析框架给出能落地的结论和下一步动作。 |
| 表格函数大师 | `da-spreadsheet-grandmaster` | 专治表格疑难杂症的资深专家，复杂嵌套公式、数组与 LAMBDA、Power Query 清洗、数据透视、VBA 与 Apps Script 自动化一把抓，把 Excel、Google Sheets、飞书表格用到极致。 |
| SQL 查询大师 | `da-sql-query-master` | 把模糊的取数需求翻成精准 SQL，窗口函数、复杂JOIN、CTE子查询信手拈来，再读执行计划把慢查询优化调快。 |

</details>

<details>
<summary><b>产品与增长</b>（12）</summary>

| Agent | slug | 能力 |
|---|---|---|
| AB 实验设计官 | `pg-ab-experiment-designer` | 把增长假设变成严谨可上线的 AB 实验，专做样本量计算、统计显著判定和上线还是回滚的明确决策。 |
| AI 产品趋势侦察官 | `pg-ai-product-trend-scout` | 扫 AI 赛道的新模型、新形态和竞品动向，拆解谁在做什么、机会窗口在哪，给资深产品人一份能据此调方向的 AI产品趋势 与 机会窗口 简报，专做竞品拆解与前沿模型动向追踪。 |
| 用户反馈综合官 | `pg-feedback-synthesizer` | 把应用商店评价、社群吐槽、客服工单和访谈记录批量做反馈聚类与痛点提炼，转成产品能直接排进迭代的需求池，专攻评价分析和 VOC。 |
| 增长黑客操盘手 | `pg-growth-hacker` | 用 AARRR 海盗指标拆增长杠杆、排实验优先级、设计病毒环，把一次单点爆发做成能复制的增长引擎。 |
| GTM 上市发布官 | `pg-gtm-launch-strategist` | 做新品和新功能的 GTM 全案，定目标人群和价值主张、排发布节奏、配渠道与上市定价钩子、写发布脚本，把上市做成一次有声量的增长事件。 |
| PRD 需求文档官 | `pg-prd-spec-author` | 把一句话想法写成工程能直接开工的 PRD，专做目标、用户故事、验收标准、边界与非目标、埋点口径，一份说明书改完不返工。 |
| 产品数据分析官 | `pg-product-analytics-analyst` | 帮你搭埋点体系、建漏斗和留存看板、定指标口径，从行为数据里挖出为什么涨为什么掉，给一张能直接决策的产品数据结论。 |
| 产品战略主理官 | `pg-product-strategy-lead` | AI 原生产品的战略推演官，帮你定愿景、切赛道、画护城河、立北极星，把模糊的产品方向逼成一句话押注和取舍清单。 |
| 留存生命周期策略官 | `pg-retention-lifecycle-strategist` | 盯次留周留和流失节点，设计激活上手、习惯养成、召回唤醒的全生命周期触达，用行为科学把一次性用户变成长期留存。 |
| 路线图优先级官 | `pg-roadmap-prioritization-lead` | 用 RICE/Kano/价值复杂度框架做需求优先级，把一堆要做的事排成季度路线图，讲清为什么先做这个、砍掉那个有理有据。 |
| 迭代排期协调官 | `pg-sprint-delivery-coordinator` | 把路线图拆成能按时发版的迭代，做迭代排期、工时估点、范围管控、跨职能对齐和阻塞跟踪，把每个 sprint 推到准点交付。 |
| 用户研究访谈官 | `pg-user-research-interviewer` | 做用户访谈、问卷与可用性测试的研究官，设计不诱导的访谈脚本，把质性原话提炼成可执行洞察和用户画像，专治需求验证全靠拍脑袋 |

</details>

<details>
<summary><b>营销与品牌</b>（16）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 广告创意与测试策略师 | `mb-ad-creative-testing-strategist` | 做投放端广告创意与测试，写钩子和卖点、设计素材脚本和RSA响应式资产、搭创意测试与迭代框架，用数据反推哪条素材该上量、哪条该砍。 |
| 品牌战略与定位架构师 | `mb-brand-strategy-positioning-architect` | 给你定品牌定位与差异化，把模糊的"我们是谁"锤成可执行的品牌战略、价值主张和品牌叙事，管住全渠道品牌一致性。 |
| 社群与私域运营策略师 | `mb-community-private-domain-strategist` | 搭企微SCRM和社群分层、设计用户生命周期和裂变机制、做内容化运营和复购召回，把公域流量转成可反复触达的高价值私域资产。 |
| AI搜索品牌被引策略师（GEO/AEO） | `mb-geo-aeo-brand-visibility-strategist` | 做品牌在 AI 引擎里的可见度，审计你在 ChatGPT、Claude、豆包、Kimi、Perplexity 里被不被引用、被谁抢，诊断竞品为什么被推荐，设计 GEO 被引策略和 agent 可完成任务的站点就绪度。 |
| 海外社媒增长策略师 | `mb-global-social-strategist` | 统筹 LinkedIn、X、Instagram、TikTok、Threads 五平台自然增长，按各平台算法和文化做海外社媒策略、个人品牌和 thought leadership，把账号做成获客和影响力资产 |
| 增长黑客与实验策略师 | `mb-growth-experimentation-strategist` | 帮你做数据驱动增长，搭获客转化留存全漏斗、设计 AB 测试和增长实验、找可规模化渠道和病毒裂变循环，把增长从拍脑袋变成可复盘的实验体系。 |
| 达人KOL投放与合作策略师 | `mb-kol-influencer-partnership-strategist` | 做达人营销全链路，从达人画像组合、商单报价谈判、种草brief到投后ROI复盘，把KOL投放和达人合作做成可量化增长 |
| 生命周期CRM与营销自动化策略师 | `mb-lifecycle-crm-automation-strategist` | 设计生命周期营销和CRM自动化，做人群分层、培育序列和召回挽回，把邮件短信push微信多通道触达搭成自动跑的留存复购引擎。 |
| 营销数据归因与度量官 | `mb-marketing-analytics-attribution-lead` | 搭营销度量体系，做转化追踪和归因建模，把 GA4、广告平台、CRM 数据打通成能指导预算分配的 ROI 看板，专治数据各报各的、口径打架、钱花了说不清效果。 |
| 付费搜索与购物广告策略师 | `mb-paid-search-shopping-strategist` | 搭账户架构、做关键词意图与否定词体系、按 ROI 分预算定出价，专治 SEM投放 跑量不赚钱、搜索词分析 找不到漏点、购物广告 和 Performance Max 黑盒难控。 |
| 付费社媒与程序化投放官 | `mb-paid-social-programmatic-buyer` | 操盘 Meta/TikTok/巨量信息流和程序化展示投放，做全漏斗人群与重定向、版位预算策略、媒体采买，把社媒和展示流量买成可规模化转化。 |
| 公关传播与危机应对官 | `mb-pr-crisis-communications-lead` | 做公关传播全盘，从新闻稿、媒体口径到危机公关一手抓，主动设置叙事、舆情应对把损失控到最小。 |
| SEO与ASO可发现性策略师 | `mb-seo-aso-discoverability-strategist` | 做搜索和应用商店的可发现性，统筹技术SEO、百度SEO双引擎排名和ASO优化，把自然搜索与应用市场流量做成稳定获客通道。 |
| 视频与播客增长策略师 | `mb-video-podcast-growth-strategist` | 做长视频和播客的增长策略，专攻视频留存优化、YouTube增长、播客增长、节目定位和音视频分发，把长内容做成复利型受众资产。 |
| 公众号知乎B站内容生态策略师 | `mb-wechat-knowledge-platform-strategist` | 给知识型品牌做公众号、知乎、B站、视频号的长内容生态策略，定栏目和分发节奏，跑各平台算法与社区调性，用专业度沉淀品牌信任和私域转化。 |
| 小红书抖音增长策略师 | `mb-xhs-douyin-growth-strategist` | 操盘小红书种草和抖音爆款增长，定赛道人设、拆推流算法逻辑、设计内容矩阵和起号节奏，把平台流量做成可复制、可持续的增长曲线。 |

</details>

<details>
<summary><b>商业与战略</b>（14）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 董事会高管汇报官 | `bs-board-exec-briefing-officer` | 把经营数据和战略议题揉成董事会和高管秒懂的一页纸，结论先行、风险透明、决策点清晰，配高管摘要、决策汇报和问答预案 |
| 商业模式设计师 | `bs-business-model-designer` | 用商业模式画布和单位经济拆收入、成本、护城河与增长飞轮，设计并压测盈利模式，找出现金流跑通的路径和可规模化的引擎，专治模式跑不通。 |
| 竞品情报分析师 | `bs-competitive-intelligence-analyst` | 系统扒竞品的定位产品定价渠道打法，建对标矩阵和能力差距表，识别对手战略意图与软肋，给出差异化卡位与反制策略，覆盖竞品分析、竞争格局、反制策略 |
| 创始人参谋长 | `bs-founder-chief-of-staff` | 替创始人过滤噪音、梳理决策清单、推动跨部门对齐和承诺跟踪，把战略意图翻译成可执行节奏，盯关键议题不掉球，当老板的左右脑。 |
| 融资BP与路演军师 | `bs-fundraising-pitch-strategist` | 帮你搭融资故事线、做财务预测和估值锚点、防御投资人Q&A，把市场模式数据团队讲成投资人买账的pitch deck。 |
| 并购整合操盘手 | `bs-ma-deal-integration-strategist` | 给并购做战略论证、标的筛选与尽调要点、估值与协同测算，再排 Day1 和百日整合方案，盯协同兑现和文化磨合。 |
| 市场与赛道研究员 | `bs-market-sizing-researcher` | 做市场规模 TAM/SAM/SOM 测算、赛道结构与趋势研判、需求供给侧扫描，把碎信息聚成有判断的赛道情报，回答这个市场值不值得进。 |
| OKR与战略落地教练 | `bs-okr-strategy-execution-coach` | 把战略目标拆成可衡量的 OKR 和关键举措，校准 O 的野心和 KR 的可量化，建复盘节奏和对齐机制，专治目标拆解落不了地。 |
| 定价与盈利模型师 | `bs-pricing-monetization-modeler` | 基于成本结构、支付意愿和竞品锚点设计定价模型与套餐分层，做价格弹性测算、毛利敏感性和涨价路径，把定价从拍脑袋变成可算账的增长杠杆。 |
| 战略红蓝对抗官 | `bs-redblue-strategy-duelist` | 用博弈论和三十六计对你的战略方案做红蓝军推演，红军扮演最狠的对手模拟反击，蓝军逼你出应招，反复对打到把一厢情愿的计划压成能扛住真实对抗的方案。专治假设压测、对手反制模拟、盲点暴露。 |
| 单点胜负手军师 | `bs-single-leverage-point-strategist` | 不做面面俱到的规划，只逼出那个做到极致就能撬动全局的单点胜负手，从终局倒推砍掉次要项，给 all in 级别的强判断和押注理由。专治战略聚焦、第一优先级、该押什么。 |
| 商业战略总顾问 | `bs-strategy-chief-advisor` | 用麦肯锡式假设驱动拆商业问题，做战略诊断、市场进入和增长路径分析，给出有取舍能落地的战略主张。 |
| 结构化咨询表达官 | `bs-structured-consulting-communicator` | 用 SCQA、金字塔原理和 MECE 把杂乱信息搭成结论先行、逻辑互斥穷尽的论证结构，专做咨询级故事线、议题树和一页纸主张，让方案一眼讲得清 |
| 0到1创业顾问 | `bs-zero-to-one-startup-advisor` | 陪早期创始人验真问题、找 PMF、设最小验证实验，判断该 all in 还是该转向，给敢拍板的强判断 |

</details>

<details>
<summary><b>研究与学习</b>（12）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 读书拆解官 | `book-deconstruction-analyst` | 按主题阅读法把一本书拆成核心命题、论证骨架和可迁移模型，做跨书互参与批判，产出能内化也能讲出去的读书笔记 |
| 概念拆解讲解员 | `concept-explainer-tutor` | 把硬核概念按你的水平分层讲透，用类比、第一性原理和苏格拉底提问带你从直觉到本质，专治似懂非懂和听过就忘。 |
| 深度研究主理人 | `deep-research-lead` | 把一个模糊问题拆成可检索的子问题，扇出多源检索、交叉验证、再合成一份带引用和置信度的研究报告，全程留证据链。 |
| 提炼总结分析师 | `distill-summarize-analyst` | 把长文、报告、论文、会议长稿做分层摘要，抽核心论点、证据和反方，按金字塔结构给你能直接复用的要点和金句。触发词包括提炼总结、长文摘要、核心论点、论文速读、抽要点。 |
| 备考学习教练 | `exam-prep-study-coach` | 帮考研考公备考党拆解大纲、排每日计划、做错题复盘和背诵规划，把长周期复习变成可执行的节奏。 |
| 事实核查校验官 | `fact-check-verifier` | 把文稿或一组断言逐条拆成可核验声明，做溯源出处、断言核验和防AI幻觉，标可信度、给反证、出可追溯的核查报告。 |
| 语言习得陪练教练 | `language-acquisition-tutor` | 用可理解输入、影子跟读和间隔复习把学外语变成有方法的长期训练，做听说读写陪练、地道表达纠错和写作批改。 |
| 学习策略教练 | `learning-strategy-coach` | 用主动回忆、间隔重复、费曼讲解和刻意练习帮你设计学习路径，做学情诊断、排复习节奏、把任何技能拆成可执行的进阶阶梯 |
| 文献综述整合官 | `literature-review-synthesizer` | 围绕一个主题系统检索文献、梳理研究脉络、做主题矩阵和分歧点对比，产出可投稿质量的综述骨架与引文表。 |
| 研究问题与方法设计师 | `research-question-designer` | 把宽泛兴趣收敛成可研究的好问题，定研究框架、变量假设和方法路线，开题前帮你把研究问题问对、把方法论坑提前避开。 |
| 留学申请策略军师 | `study-abroad-application-strategist` | 做留学申请的选校定位、套磁导师和文书叙事，把零散背景拼成一条招生官记得住的故事，给可落地的申请策略和项目匹配判断。 |
| 卡片盒知识管家 | `zettelkasten-knowledge-steward` | 按卢曼卡片盒方法帮你把碎片输入炼成原子笔记、建双链和索引、长成可生长的知识网络，让笔记从仓库变成会思考的第二大脑。 |

</details>

<details>
<summary><b>专业领域顾问</b>（16）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 会计记账底稿管家 | `pa-bookkeeping-workpaper-agent` | 从票据、银行流水、工资表抽数据自动套科目、编记账凭证、做银行对账和底稿勾稽，把代账记账从录入苦力解放出来。 |
| 合同审查法务顾问 | `pa-contract-review-counsel` | 逐条审采购销售劳动投融资各类合同，标红风险条款、补缺漏、对照对赌违约赔付管辖条款给修改建议，签字前帮你把坑挑出来。只做合同审查与条款风险标注，不当诉讼代理。 |
| 数据合规与个保等保顾问 | `pa-data-compliance-officer` | 对照个保法、数据安全法和等保2.0，做数据分类分级、权限梳理、隐私政策审查和整改清单，把合规要求翻译成业务能落地的动作 |
| 健康报告解读与就医导航顾问 | `pa-health-report-navigator` | 把体检报告的箭头指标和检查单讲成人话，理清该挂哪个科、问医生哪些问题、慢病复查吃药怎么安排，给科普和就医动线指引，明确不做诊断、危急值即提醒就医。 |
| HR用工与劳动合规顾问 | `pa-hr-employment-compliance` | 做入职到离职全周期的用工管理、劳动合同与规章制度合规自查、社保公积金和考勤薪酬口径核对、劳动争议风险预判，给合规边界和处理思路。 |
| 保险保障诊断顾问 | `pa-insurance-coverage-diagnostic` | 从中立视角诊断家庭保障缺口，按预算出重疾医疗意外寿险配置思路，逐条对比产品条款和免责，帮你看懂拒赔逻辑和理赔要点，不卖保险也不替你投保 |
| 知识产权与商标策略顾问 | `pa-ip-trademark-strategist` | 做商标布局、专利策略和版权保护的护城河顾问，帮你跑近似检索、研判侵权风险、理清维权取证思路，把品牌和原创的法律保护提前圈出来 |
| 律师工时计费顾问 | `pa-legal-billing-time-counsel` | 帮律师和咨询师做工时记录、计费账单生成、账单说明撰写、应收催收和分润测算，把专业人士的时间精准换成现金流。 |
| 并购财务与估值顾问 | `pa-ma-deal-finance-advisor` | 做并购财务尽调要点、估值建模与协同测算，排 Day1 和百日整合财务方案、盯协同兑现，把买了又消化不了的财务坑提前堵上，不替你拍板交易。 |
| 财务月结与财务规划分析师 | `pa-month-end-close-controller` | 帮你跑通月结对账勾稽、做预算编制和滚动预测、把预实差异归因成经营结论，AI 加速取数与分析。 |
| 中立投资理财顾问 | `pa-neutral-wealth-advisor` | 从不卖产品的中立视角帮你做资产配置、基金定投和风险测评，拆穿销售话术、讲透复利与回撤，给框架和取舍判断。 |
| 个人法律维权助手 | `pa-personal-legal-rights-helper` | 把离婚、劳动仲裁、欠款、消费维权讲成你听得懂的步骤，帮你算清诉讼时效、判断管辖、列齐材料清单、写好申请书初稿，只做流程指引，不当诉讼代理也不替代律师。 |
| 房产交易与房贷测算顾问 | `pa-real-estate-deal-advisor` | 帮你算清首付月供税费过户成本、对比商贷公积金组合贷方案、查限购限贷政策、理清买卖与过户流程和合同要点，给测算和决策框架，不当中介也不荐盘。 |
| 招聘与人才甄选顾问 | `pa-recruiting-talent-advisor` | 写精准 JD、设结构化面试题和评分维度、做简历打标初筛和人才画像匹配，理清渠道与薪酬带宽，把招对人这件事用 AI 变成有标准的筛选。 |
| 税务申报调度官 | `pa-tax-filing-scheduler` | 帮代账和企业财务把多主体申报排成不漏报的日历，盯增值税申报、个税申报、社保申报各节点，自动催收客户资料并对账金税四期。 |
| 财税政策答疑顾问 | `pa-tax-policy-qa-advisor` | 把能不能开专票、核定还是查账、小微优惠怎么用足、金税四期怎么落地用大白话讲清楚，给可执行口径和申报节点，专治财税政策看不懂、不敢做主、踩雷怕罚。 |

</details>

<details>
<summary><b>职业与个人效能</b>（12）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 职业战略教练 | `cp-career-strategist` | 把你的职业卡点摊开做盘点，专攻职业规划、跳槽时机和晋升答辩，逼出该押哪一步的强判断而非鸡汤。 |
| 重大决策分析参谋 | `cp-decision-analysis-advisor` | 把人生和职业的岔路口拆成可比较的决策矩阵，估概率收益、做预判和复盘日志，逼出该不该跳槽这类重大决策的取舍而不替你拍板 |
| 习惯养成行为教练 | `cp-habit-formation-coach` | 用行为科学的提示-惯例-奖赏和习惯堆叠，把你想立的习惯拆成最小可行动作，设触发、追打卡、防破戒，靠系统而非意志力坚持下来。 |
| 高阶面试陪练官 | `cp-interview-rehearsal-coach` | 陪你跑模拟面试，带追问、打分和逐题反馈，把高光经历压成可复用的答题框架，专治行为面、案例面和高管终面。 |
| 职场写作助手 | `cp-knowledge-worker-writing-aide` | 把邮件、汇报、提案、述职和复盘从草稿改成结论先行、逻辑清晰的专业文本，控住语气和篇幅，让你的表达配得上你的判断。擅长结论先行改写、文档润色、述职报告搭骨架。 |
| 心智模型思考搭子 | `cp-mental-models-thinking-partner` | 用第一性原理、逆向思维、机会成本和多元心智模型陪你拆复杂问题、识破认知偏差，把模糊直觉逼成可执行的清晰结构 |
| 薪酬谈判军师 | `cp-offer-negotiation-strategist` | 拆 Offer 结构和市场分位、设你的 BATNA 和让步边界，给逐句谈薪话术和多 Offer 博弈策略，帮你把总包谈到顶。 |
| 个人品牌架构师 | `cp-personal-brand-architect` | 提炼你的专业定位与差异化叙事，规划领英脉脉公众号的内容支柱和人设主线，把专业积累攒成会带来机会的影响力资产。 |
| 效率系统设计官 | `cp-productivity-system-designer` | 用 GTD、PARA、看板和周回顾给你搭一套真正跑得起来的个人生产力系统，清空大脑、理顺收件箱、把每条承诺都变成可执行的下一步行动。 |
| 简历ATS优化师 | `cp-resume-ats-optimizer` | 按目标JD重写简历的关键词匹配、成就量化和STAR句式，做ATS解析自检和投递版本管理，让机器筛得过、HR看得中。 |
| 专业副业操盘参谋 | `cp-solopreneur-side-venture-strategist` | 帮你把专业技能变现成咨询、知识产品或一人公司，先验证需求再设计 offer 定价，规划副业转全职的过渡节奏，只押杠杆最大的那条路。 |
| 时间精力管理官 | `cp-time-energy-manager` | 用时间块、深度工作和精力曲线帮你重排日程，砍掉低价值会议和切换损耗，把硬活排进精力高峰，专治日程被会议切碎、时间管理失控、深度工作做不出来。 |

</details>

<details>
<summary><b>运营·项目·销售</b>（12）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 流程自动化治理与变革落地架构师 | `ops-automation-change-enablement-architect` | 先审价值、风险、可维护性再做流程自动化编排，给工作流加治理护栏，再用 ADKAR 和 Kotter 推变革落地、化解阻力、做采纳培训，专治上了系统没人用、改了流程就反弹。 |
| 业务运营卓越官 | `ops-business-operations-excellence-lead` | 用精益和六西格玛做流程优化、瓶颈诊断、产能规划和 KPI 治理，把混乱的业务运营拆成可重复、可度量、能持续提效的体系。 |
| 客户成功经理 | `ops-customer-success-manager` | 从客户入职启动、健康分预警到 QBR 复盘和续约保住，用客户成功打法把成交单做成长期续费的净收入留存 |
| 销售发现式访谈教练 | `ops-discovery-call-coach` | 教你把发现式提问问出真买点，做需求挖掘、现状差距分析和痛点量化，把客户的隐性诉求逼成可衡量的购买动机。 |
| 事故指挥与复盘官 | `ops-incident-command-lead` | 线上故障一键拉起结构化应急，做事故指挥、升级机制、SLO 守护与无指责复盘，把混乱收成可控、把同类事故堵死。 |
| 复杂大单谈判军师（MEDDPICC） | `ops-meddpicc-deal-strategist` | 用 MEDDPICC 给复杂大单赢单计划打分定级，做决策链梳理和竞争卡位，专杀一厢情愿的乐观漏斗。 |
| 主动拓客与销售管道架构师 | `ops-outbound-pipeline-architect` | 帮你定 ICP 与触发信号、设计多渠道触达序列和高个性化开场，把陌生拓客从拼数量改成基于信号的精准撬动，搭出可复制可预测的获客管道。 |
| 售前方案工程师 | `ops-presales-solution-engineer` | 做技术发现、Demo 设计与 POC 范围、写竞品对抗手册，把产品能力翻译成客户业务结果，拿下技术决策让单子往前推。 |
| 项目集与 PMO 治理架构师 | `ops-program-pmo-architect` | 帮你把一堆零散项目理成有统一节奏的项目集，建立 PMO 治理、立项门禁和项目组合优先级，做资源分配和复盘机制，让管理层能向上看清全局。 |
| 项目交付牧羊人 | `ops-project-delivery-shepherd` | 把项目从立项推到交付，做关键路径排程、风险与依赖识别、干系人对齐，专盯跨部门掉球和延期预警。 |
| 方案标书赢单军师 | `ops-proposal-rfp-win-strategist` | 拆 RFP 招标需求建符合性矩阵，提炼赢单主题和价值主张，把投标响应从逐条应付写成有故事线、能说服评审的赢单标书。 |
| 收入运营与预测分析官 | `ops-revenue-operations-analyst` | 诊断管道健康、算成交速度、校准预测准度，把 CRM 和 Excel 里的销售数据变成能在季度落空前就预警的收入运营情报。命中收入运营、管道健康诊断、预测准度等场景时启用。 |

</details>

<details>
<summary><b>行业垂直</b>（4）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 跨境电商运营操盘手 | `cn-cross-border-ecommerce-operator` | 帮工厂和卖家把货卖到亚马逊、Temu、TikTok Shop 和独立站，做跨境运营的选品测款、Listing 本地化、广告投放节奏和海外仓物流合规一肩挑，触发词含跨境运营、亚马逊运营、TikTok Shop。 |
| 手游与微信小游戏开发 | `cn-game-minigame-developer` | 用 Unity、Cocos 做手游和微信小游戏的全链路开发，从玩法数值、关卡叙事到游戏音频一手包，懂买量包体和小游戏平台规则 |
| GIS测绘与空间分析专家 | `cn-gis-mapping-specialist` | 做国土规划制图、空间分析、WebGIS开发与无人机测绘成果处理，从数据清洗到成果出图全流程上手 |
| Web3 智能合约工程师 | `cn-web3-smartcontract-engineer` | 用 Solidity 写 EVM 智能合约，做 DeFi 协议架构、Gas优化、可升级代理模式，再自审重入和权限漏洞出安全审计结论，覆盖以太坊和各 L2 |

</details>

<!-- AGENT-LIST:END -->

## 快速开始

```bash
npm run validate   # 校验:硬卡 200、slug 唯一、字段齐全
npm run build      # 转译出 dist/ 三套产物 + catalog.json + ROUTER.md
```

安装到对应工具:

```bash
bash scripts/install.sh claude-code   # 复制到 ~/.claude/agents/
bash scripts/install.sh codex         # 复制到 ~/.codex/prompts/,用 /<slug> 调用
bash scripts/install.sh openclaw      # 复制到 ~/.openclaw/agents/
```

## 目录结构

```
agents/             200 个 canonical 源文件(唯一真相)
build/              转译器与校验器(零依赖 Node)
dist/               构建产物(三套工具,gitignore,运行 build 生成)
docs/SCHEMA.md      canonical 格式规范
catalog.json        机器可读索引
ROUTER.md           人读路由表(按域分组)
```

## 贡献

改 agent 只动 `agents/<slug>.md`,提交前跑 `npm run check`。新增 agent 需同步合并一个旧的以维持 200 总数(CI 会拦)。格式见 [docs/SCHEMA.md](./docs/SCHEMA.md)。

## License

[MIT](./LICENSE) © HeiGeAi(黑哥AI)

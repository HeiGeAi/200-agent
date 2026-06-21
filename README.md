<div align="center">

# 200 Agent

**200 个专家级 AI 角色,让你手里的 AI 工具发挥到行业专家水平**

200 expert AI personas that turn your AI tools into world-class specialists · single source · Claude Code · Codex · OpenClaw

[![agents](https://img.shields.io/badge/agents-200-brightgreen)](./ROUTER.md)
[![domains](https://img.shields.io/badge/domains-14-blue)](./ROUTER.md)
[![license](https://img.shields.io/badge/license-MIT-black)](./LICENSE)
[![tools](https://img.shields.io/badge/Claude%20Code%20·%20Codex%20·%20OpenClaw-ready-orange)](./docs/SCHEMA.md)

[路由总表 ROUTER](./ROUTER.md) · [格式规范 SCHEMA](./docs/SCHEMA.md)

</div>

---

<details>
<summary><b>🌐 English</b> · click to expand the full README in English / 点击展开英文版</summary>

<br>

## What is this

A set of **200 expert-level AI personas** for Claude Code, Codex and OpenClaw. When you use AI to write code, design architecture, generate images and video, write content, run analysis, drive growth or do research, they make the AI perform like a senior specialist sitting next to you.

Built for **heavy AI-tool users**: developers, creators, marketers, analysts, founders, researchers and professional advisors. Every persona is designed for human-plus-AI collaboration.

The name is just easy to remember: **200 Agent**.

Design principles:

- **AI-native**: every persona assumes you are using AI tools and pulls the AI's output up to expert level. Heavy coverage of software engineering, AI engineering, AI visual creation (prompt directors for each image and video model plus art directors who guard taste), writing, data, product, marketing, business, research and professional advisory.
- **Senior, not filler**: each body carries copy-paste-ready hard assets (templates, formulas, checklists, numeric red lines, prompt skeletons), ready to use.
- **One source, transpiled everywhere**: each agent lives in a single `agents/<slug>.md`; `npm run build` transpiles Claude Code, Codex and OpenClaw outputs.
- **Chinese-first with bilingual triggers**: bodies are in Chinese, triggers in both languages so auto-routing hits more often.
- **Hard-capped at 200**: enforced by CI, with globally unique `slug`s.

## 14 domains

| Domain | Count | Who it's for |
|---|---|---|
| Software Engineering | 26 | Engineers / architects |
| AI Engineering & Agents | 16 | AI app / agent developers |
| AI Visual Creation | 18 | Designers / creators (MJ / Jimeng / Sora) |
| Design & UX | 12 | UI / UX / product design |
| Writing & Content | 18 | Writers / scriptwriters / content people |
| Data & Analytics | 12 | Analysts / data roles |
| Product & Growth | 12 | PMs / growth |
| Marketing & Brand | 16 | Marketers / brand / paid media |
| Business & Strategy | 14 | Founders / strategy / consulting |
| Research & Learning | 12 | Researchers / learners |
| Professional Advisors | 16 | Legal / finance / medical / HR |
| Career & Productivity | 12 | Professionals / job seekers |
| Ops · PM · Sales | 12 | Project / ops / sales |
| Vertical Industries | 4 | Games / cross-border / Web3 / GIS |

## How to call it (clear at a glance)

Once installed (see Quick start below), you don't need to memorize slugs. Describe what you want in plain language and the tool auto-routes to the right agent, or call one by name. Three examples:

**Example 1 · Claude Code, auto-routing.** In Claude Code you just say:

> Review this PR, focus on correctness and security.

Claude Code auto-attaches **Code Reviewer** (`code-reviewer`) from its description and triggers, and gives actionable feedback on correctness, security, maintainability and performance instead of vague praise.

**Example 2 · Codex, call by name.** After copying agents into `~/.codex/prompts/`, invoke with `/<slug>`:

> /midjourney-prompt-engineer turn "a cyberpunk city at night" into a prompt that renders well

**Midjourney Prompt Engineer** takes over with sref style reference and stylize/chaos params, handing back a reproducible prompt.

**Example 3 · OpenClaw, trigger match.** You say:

> This slow query takes 3 seconds, help me tune it.

The triggers "slow query / SQL optimization" match **Database & SQL Optimizer** (`database-sql-optimizer`), which reads the execution plan first, then proposes indexes and rewrites.

> Not sure which one? Just describe the task and the tool matches it. To call one precisely, grab the slug from [ROUTER.md](./ROUTER.md).

## All 200 agents

Grouped by the 14 domains. Machine-readable index in [catalog.json](./catalog.json).

<!-- AGENT-LIST-EN:START -->

<details>
<summary><b>Software Engineering</b> (26)</summary>

| Agent | slug | What it does |
|---|---|---|
| API Design Architect | `api-design-architect` | Design REST/GraphQL/gRPC contracts and versioning, turning pagination, auth, error codes, idempotency and rate limits into evolvable specs that stay stable and backward-compatible |
| AppSec & Secure-Code Engineer | `appsec-secure-code-engineer` | Shift security left before you commit, scanning for leaked secrets, threat modeling, and running secure code review and SAST/DAST so auth, injection and CORS bugs get caught before merge |
| Backend Architect | `backend-architect` | System architecture and domain modeling, defining API design, data flow and layered architecture with practical tech choices, also covering mobile and embedded firmware system design |
| Bug-Fix & Minimal-Change Engineer | `bug-fix-minimal-change-engineer` | Find the root cause, reproduce the bug and ship the smallest viable fix, changing only what is needed and refusing to let a bug fix sprawl into a refactor disaster |
| Code Reviewer | `code-reviewer` | Review PRs for correctness, security, maintainability and performance with actionable feedback, surfacing real issues before approval without nitpicking style |
| Codebase Onboarding Guide | `codebase-onboarding-guide` | Inherit a project nobody understands, read the source, trace call paths and map module boundaries to help you grasp it and get productive on legacy code in half a day |
| Data Pipeline Engineer | `data-pipeline-engineer` | Build reliable ETL/ELT and lakehouse pipelines with Spark, dbt, streaming and data quality, turning messy raw data into trustworthy, analysis-ready assets |
| Database & SQL Optimizer | `database-sql-optimizer` | Fix slow queries, design indexes, tune schemas and sharding, and read execution plans to speed up databases and untangle stuck SQL one statement at a time |
| DevOps & CI/CD Engineer | `devops-cicd-engineer` | Build CI/CD pipelines, containerization and K8s, IaC and cloud ops, handle on-prem and air-gapped delivery, and make deploys one-click and repeatable |
| Embedded Firmware Engineer | `embedded-firmware-engineer` | Write production bare-metal and RTOS firmware across STM32/ESP32/Nordic, covering drivers and task architecture so code on hardware stays stable with controlled timing and predictable memory |
| Frontend Engineer | `frontend-engineer` | Senior modern-frontend engineer spanning React/Vue/Angular components, admin dashboards and landing pages, taking performance, accessibility and tooling to production grade |
| Full-Stack Rapid Builder | `fullstack-rapid-builder` | Take an idea to a running product solo across frontend, backend, database and deploy, using AI to ship MVPs and prototypes at production-ready speed |
| Git Workflow Master | `git-workflow-master` | Straighten out team Git workflows, defining branching strategy, commit conventions, rebase and parallel worktrees so conflict resolution and merges stay clean and traceable |
| Go & Rust Systems Engineer | `go-rust-systems-engineer` | Write high-performance systems services in Go and Rust, mastering concurrency, memory safety and the throughput and latency limits of high-performance services |
| Mobile App Engineer | `mobile-app-engineer` | Native iOS/Android plus Flutter/React Native cross-platform development, handling the app lifecycle, performance, store review and native capability bridging |
| Node.js Backend Engineer | `node-backend-engineer` | Build server-side with Node and TypeScript, shipping Express/NestJS services, event-loop tuning and BFF layers to make the JS full-stack backend solid |
| Penetration Tester & Red Teamer | `penetration-tester` | Run authorized penetration tests and red-team exercises across web, API, network and cloud, chaining isolated vulnerabilities into full attack paths to the business core, with actionable remediation and retest reports |
| Performance Tuning Engineer | `performance-tuning-engineer` | Run load tests and profiling, locate CPU/memory/IO hotspots, tune concurrency, caching and algorithmic complexity, and prove real gains with benchmark data |
| Python Engineering Expert | `python-engineering-expert` | Write engineered Python with FastAPI/Django services, async concurrency, type hints, packaging and tests, upgrading throwaway scripts into maintainable production code |
| React Stack Specialist | `react-stack-specialist` | Take React projects to production grade, specializing in React optimization, Next.js, Hooks, state management, server-side rendering and React performance |
| Refactor & Tech-Debt Engineer | `refactor-tech-debt-engineer` | Spot code smells, break up large functions, decouple modules and add test safety nets, doing measured behavior-preserving refactors that pay down tech debt by priority |
| Smart Contract Engineer & Auditor | `smart-contract-engineer-auditor` | Write Solidity/EVM contracts with gas optimization and upgradeable proxies, then run independent security audits with vulnerability detection, formal verification and exploit reproduction, delivering audit reports |
| Software Architect | `software-architect` | System design and domain-driven modeling, defining layers, boundaries and tech choices with practical, evolution-resistant architecture decisions and trade-off rationale |
| SRE & Incident Commander | `sre-incident-commander` | Hold SLOs and observability, command incidents when production breaks, run blameless postmortems, and add automatic guardrails like circuit breakers, rollback and cost limits to make reliability a measurable engineering capability |
| Tech Docs & API Doc Writer | `tech-docs-api-writer` | Write READMEs, API references, architecture notes and tutorials, turning complex engineering concepts into docs developers actually read and use, with every code sample runnable |
| Test QA & Automation Engineer | `test-qa-automation-engineer` | Design test strategy, write unit, integration, end-to-end and API contract tests, analyze coverage and results, and default to demanding evidence before sign-off |

</details>

<details>
<summary><b>AI Engineering & Agents</b> (16)</summary>

| Agent | slug | What it does |
|---|---|---|
| Agent Architecture Designer | `agent-architecture-designer` | Design plan-act-reflect loops, state machines and failure recovery for single agents, adding human-in-the-loop gates and tool-call loops to turn runaway agents into stable, controllable executors |
| Agentic Workflow Automation Engineer | `agentic-workflow-automation-engineer` | Wrap repetitive business processes into agent-driven automations, first assessing value and process risk, then adding guardrails and human-review nodes for n8n-style orchestration that automates without losing control |
| AI Application Architect | `ai-app-architect` | End-to-end architecture for putting LLM capabilities into production, building model gateways, streaming output and graceful degradation to turn demo-grade AI features into services that handle scale |
| AI Cost Optimization Engineer | `ai-cost-optimization-engineer` | Break down token bills with model routing tiers, prompt compression and cache hits, cutting AI and inference cost without hurting quality, plus cost guardrails before things spiral |
| AI Product Engineer | `ai-product-engineer` | Translate model capabilities into features users enjoy, handling AI productization, feature design, interaction and streaming experience, fixing the strong-model-but-unusable-product problem |
| AI Red-Team & Safety Engineer | `ai-redteam-safety-engineer` | Run adversarial testing and AI red-teaming on LLM apps, focused on prompt injection, jailbreaks and data exfiltration defense, delivering input/output guardrails and fallback strategies to close the AI attack surface |
| Context Engineering Specialist | `context-engineering-specialist` | Design context-window budgets, memory tiers, compression and dynamic assembly for long tasks, fixing context overflow, mid-context forgetting and prompt-injection contamination |
| Data Annotation & Curation Lead | `data-annotation-curation-lead` | Set annotation specs for fine-tuning and evaluation, run data cleaning, dedup and inter-annotator consistency checks, curating messy corpora into auditable training and eval sets |
| LLM Evaluation & QA Engineer | `llm-eval-qa-engineer` | Build reproducible evaluation systems for LLM apps with eval sets, LLM-as-judge scoring and regression testing, turning pre-launch QA from guesswork into data-backed judgment |
| LLM Selection Advisor | `llm-selection-advisor` | Build a model selection matrix by task, benchmark, context length, compliance and cost, comparing closed and open, domestic and overseas models, recommending a primary-plus-fallback mix instead of betting on one |
| MCP Server Builder | `mcp-server-builder` | Design, build and test Model Context Protocol servers, wrapping external tools, resources and data sources into MCP capabilities agents can call reliably, with auth, error contracts and compatibility tests |
| Model Fine-Tuning Engineer | `model-finetuning-engineer` | Run the full SFT/LoRA/DPO fine-tuning workflow from data mix and hyperparameter tuning to overfitting diagnosis, first judging whether to fine-tune or fix the prompt so you do not burn GPUs |
| Multi-Agent Orchestration & Automation Governance Architect | `multi-agent-orchestration-architect` | Design multi-agent topology and context flow, handle agent orchestration and workflow design, govern agent identity, trust and identity graphs, and assess value and risk before adding n8n-style automation guardrails |
| Prompt Engineering Architect | `prompt-engineering-architect` | Polish vague instructions into measurable, drift-resistant production system prompts, building prompt version libraries, eval sets and regression cases to fix unstable output, instruction drift and model-swap breakage |
| RAG Pipeline Engineer | `rag-pipeline-engineer` | Build the full retrieval-augmented generation pipeline with chunking, hybrid retrieval, reranking and citation attribution, fixing poor recall, off-topic answers and fabricated citations |
| Vector Retrieval & Embedding Engineer | `vector-retrieval-engineer` | Pick embedding models, tune vector database indexes and run recall evaluation, driving semantic retrieval precision, latency and cost to target at the same time |

</details>

<details>
<summary><b>AI Visual Creation</b> (18)</summary>

| Agent | slug | What it does |
|---|---|---|
| AI 3D & Motion Designer | `ai-3d-motion-designer` | Use AI tools for 3D-render looks, C4D textures and icon motion, setting material and lighting params, isometric scenes and motion pacing to give flat content a dimensional, animated polish |
| AI Art Director | `ai-art-director` | Be your taste filter, setting visual tone, picking the right shot from a pile of AI outputs, calling out what looks plastic or cheap, and unifying scattered assets into a polished set |
| AI Brand Visual System Designer | `ai-brand-visual-system-designer` | Build a reusable brand visual system with AI tools, defining palettes and type personality and locking image style and sref seeds so output across every platform looks like one brand |
| AI Character & Concept Designer | `ai-character-concept-designer` | Use AI tools for character concept design and three-view turnarounds, holding character consistency and producing iterable setting bibles and concept art |
| AI Color & Typography Curator | `ai-color-typography-curator` | Set palettes by mood and context, pair typefaces and tune contrast and hierarchy so AI output and layouts read well and convey the right emotion, covering color schemes, type personality and color mood |
| AI Illustration & Comic Artist | `ai-illustration-comic-artist` | Make illustrations and paneled comics with AI, setting art style, holding character consistency, laying out panels and storyboards and adding dialogue bubbles to draw a story or concept as a full set |
| AI Photography Director | `ai-photography-director` | Write AI image prompts in a photographer's language, translating lighting setups, lens focal lengths and film texture into prompts so generated images feel like real camera shots |
| AI Poster & Infographic Designer | `ai-poster-infographic-designer` | Make posters and infographics with AI, setting layout hierarchy, placing text precisely, visualizing data and flows, and giving grids and palettes to output ready-to-use high-density visuals |
| AI Product Staging & Virtual Try-On Stylist | `ai-product-staging-tryon-stylist` | Use image-to-image for e-commerce product staging and AI try-on, keeping product and model subjects undistorted while swapping backgrounds, models and outfits for listing-ready hero and product shots |
| AI Visual Storyboard Director | `ai-visual-storyboard-director` | Break an idea into a paced visual story, writing storyboard scripts, designing shot sequences and emotion arcs, then landing them as coherent image and video prompts |
| GPT-Image & Nano Banana Editing Engineer | `gpt-image-nano-banana-engineer` | Specialize in conversational and image-to-image generation, mastering GPT-Image and Gemini Nano Banana for instruction edits, multi-image fusion, inpainting and precise text rendering, getting edits right in one pass |
| Jimeng (Dreamina) Prompt Director | `jimeng-prompt-director` | Specialize in Jimeng (Dreamina) generation, mastering its Chinese-semantics model, reference-image weighting and regional prompts to write reproducible prompts for guofeng, e-commerce and portraits |
| Kling Video Prompt Director | `kling-video-director` | Specialize in Kling video, mastering first and last-frame control, camera language and motion range to turn storyboards into prompts that produce coherent movement and cinematic feel |
| Midjourney Prompt Engineer | `midjourney-prompt-engineer` | Translate the image in your head into precise Midjourney prompts, mastering sref style reference, cref character consistency and stylize/chaos params for stable output and consistent style |
| Runway Motion & VFX Director | `runway-motion-director` | Master Runway's motion brush, camera control and video VFX compositing, turning stills into motion, building transitions and effects, with ready-to-use params and shot plans |
| Seedance Video Prompt Director | `seedance-video-director` | Specialize in Jimeng Seedance 2.0 video, writing timestamped storyboard prompts for short dramas, ads and voiceover pacing, with video extension, shot continuity and commerce-hook design |
| Seedream Image Architect | `seedream-image-architect` | Master Seedream's high-resolution output, long-text understanding and set consistency to produce brand campaigns, visual series and poster sets that stay style-consistent and reproducible |
| Sora Video Prompt Director | `sora-video-director` | Senior director writing Sora prompts in film language, mastering scene blocking, physical consistency, long takes and multi-shot narrative to turn one idea into a director-grade AI short |

</details>

<details>
<summary><b>Design & UX</b> (12)</summary>

| Agent | slug | What it does |
|---|---|---|
| Accessibility Specialist | `dux-accessibility-specialist` | Audit accessibility against WCAG 2.2 and domestic standards, checking contrast, focus management, screen-reader support and keyboard reach, with a ready-to-fix remediation list and acceptance criteria |
| AI-Native Experience Designer | `dux-ai-native-experience-designer` | Design AI-native experiences for chat, agent and generative products, mastering streaming-output UX, uncertainty design and human-AI trust to make strong-but-unusable features into interactions users dare to use and can correct |
| Design Critique Reviewer | `dux-design-critic-reviewer` | Run systematic design reviews on hierarchy, alignment, spacing, readability and consistency, giving issue, cause and fix per item to turn vague critique into actionable annotations |
| Design System Architect | `dux-design-system-architect` | Build a governable, cross-platform design system foundation from design tokens and component APIs to theming and dark mode, ready for AI to generate components directly |
| Information Architect | `dux-information-architect` | Organize content taxonomy, navigation structure and naming, validated with card sorting and tree testing so users find things at a glance and the product scales without collapsing |
| Interaction Designer | `dux-interaction-designer` | Break complex flows into smooth states, transitions and microinteractions, defining gestures, feedback and empty and edge states so every action has clear cause and effect, covering interaction design, microinteractions and state design |
| Persona Walkthrough Specialist | `dux-persona-walkthrough-specialist` | Walk through a page screen by screen from a defined persona's mindset, diagnosing experience with conversion psychology, logging emotional reactions and delivering an actionable CRO report |
| Product Designer | `dux-product-designer` | Own product experience end to end from requirements to launch, designing features into shippable solutions that balance business goals, user value and build cost, covering product design, zero-to-one and end-to-end design |
| Prototyping Engineer | `dux-prototyping-engineer` | Build interactive high-fidelity prototypes fast with code and AI tools, with real data and motion, turning fuzzy ideas into clickable, testable artifacts when prototypes stall at static mockups |
| User Journey Strategist | `dux-user-journey-strategist` | Map end-to-end user journeys and service blueprints, marking emotion curves, key moments and pain points, connecting breakpoints into an optimizable, complete experience path |
| UX Researcher | `dux-ux-researcher` | Design interview scripts and usability tests, run mixed qualitative and quantitative research, and refine behavioral data into decision-ready research insights and priorities |
| Web Experience Designer | `dux-web-experience-designer` | Design responsive landing pages and marketing sites, managing typographic grids, scroll narrative and perceived performance so brand sites look good, work well and load fast on every device |

</details>

<details>
<summary><b>Writing & Content</b> (18)</summary>

| Agent | slug | What it does |
|---|---|---|
| Academic Writing Coach | `wc-academic-writing-coach` | Coach academic writing, structuring paper arguments, editing abstracts and literature reviews and tuning academic register and citation norms, turning loose or colloquial prose into rigorous, clear academic writing |
| Book Co-Author & Manuscript Lead | `wc-book-coauthor-manuscript-lead` | Turn scattered voice notes, fragments and positioning into a publishable book, building chapter outlines, unifying the voice, drafting chapter by chapter and controlling length and consistency from idea to full manuscript |
| Content Strategy Director | `wc-content-strategy-director` | Run content strategy, defining content pillars and audience tiers, scheduling the editorial calendar and designing topic matrices and reuse paths to turn scattered updates into a compounding content system |
| Senior Copywriting Craftsman | `wc-copywriting-craftsman` | Write conversion copy from landing pages and benefit framing to slogans and ad lines, turning selling points into reasons to buy |
| De-AI Humanizer & Rewriter | `wc-deai-humanizer-rewriter` | Rewrite obviously-AI drafts to sound human, specializing in removing AI flavor and template tone, breaking up parallelism, cutting filler and restoring a real voice |
| Developmental & Line Editor | `wc-developmental-line-editor` | Edit at two layers, restructuring and fixing logic gaps and narrative pacing above and polishing line by line and cutting redundancy below, turning rough drafts into publishable ones and explaining every change |
| GEO/AEO Content Strategist | `wc-geo-aeo-content-strategist` | Get your content cited by AI engines, doing GEO and answer-engine optimization, auditing AI-search visibility in ChatGPT, Claude, Doubao, Kimi and DeepSeek and writing llms.txt and citation-friendly formats |
| Ghostwriter & Voice Cloner | `wc-ghostwriter-voice-cloner` | Ghostwrite in first person for you or clients, first studying the target's voice, rhythm, catchphrases and values, then writing drafts readers cannot tell are ghostwritten |
| Headline & Hook Specialist | `wc-headline-hook-specialist` | Mass-produce headlines and opening hooks selling benefits, planting curiosity and playing contrast, shipping multiple versions per platform to grab click-through and completion from the first line |
| Longform Essayist | `wc-longform-essayist` | Write in-depth longform and essays, building thousand-word argument structures and narrative tension to take one idea to both intellectual density and readability |
| Narrative & Story Architect | `wc-narrative-story-architect` | Build stories with classic narratology frameworks, handling character arcs, rising conflict and emotion curves to give brand stories, cases and nonfiction the tension that keeps people reading |
| Newsletter Architect | `wc-newsletter-architect` | Plan and write email newsletters, defining section positioning, designing open hooks and email sequences, turning subscriptions into a high-open-rate long-term content asset |
| Podcast Script Writer | `wc-podcast-script-writer` | Write podcast scripts and interview outlines, designing opening hooks, question chains and chapter pacing, turning spoken content into recordable scripts that stay natural yet information-dense |
| Short-Video & Micro-Drama Scriptwriter | `wc-screenwriting-scriptwriter` | Write short-video voiceover scripts and micro-dramas, nailing the 3-second hook, shot breakdown, per-episode twists and emotional pacing so scripts both hold viewers and can actually be shot |
| SEO Content Writer | `wc-seo-content-writer` | Do keyword intent research, content mapping and search-friendly drafts, turning search intent into long-tail content that ranks and reads well, covering SEO content, keyword mapping and organic-traffic content |
| Speechwriter | `wc-speechwriter` | Write speeches that hook the open, build the argument and land the close, designing pauses, parallelism and quotable lines, fitting the speaker's voice and occasion so the speech sticks |
| Technical Documentation Writer | `wc-technical-documentation-writer` | Write developer docs, API references, tutorials and READMEs, turning complex engineering concepts into clear docs developers can follow and run, with core triggers including technical docs, API docs and README |
| Translation & Localization Expert | `wc-translation-localization-expert` | Do multilingual refined translation and localization, unifying glossaries and fitting target-context tone and cultural references, turning literal translation into natural, native-sounding text |

</details>

<details>
<summary><b>Data & Analytics</b> (12)</summary>

| Agent | slug | What it does |
|---|---|---|
| A/B Experiment Scientist | `da-ab-experiment-scientist` | Make A/B tests trustworthy and reproducible, from design and sample-size estimation to significance reading and effect-size interpretation, guarding against peeking, novelty effects and broken guardrail metrics |
| Analytics Engineer | `da-analytics-engineer` | Build ETL/ELT pipelines and warehouse layers with dbt, Spark and Airflow, building reusable metric models and making data quality checks, scheduling and lineage into production-grade assets |
| Applied Statistician | `da-applied-statistician` | Help you pick the right statistical method, get hypothesis tests and confidence intervals right, run regression and ANOVA, guard against p-hacking and sampling bias and state uncertainty clearly |
| BI Dashboard Architect | `da-bi-dashboard-architect` | Work backward from business goals to dashboard structure, dimensions, measures and drill paths, building semantic layers and data models on Tableau, Power BI, Superset and Metabase for self-serve analysis |
| Data Storyteller | `da-data-storyteller` | Package analysis conclusions into stories decision-makers absorb, using pyramid structure, one-chart-one-conclusion and So-What distillation to produce ready-to-present data briefings and insight narratives |
| Data Visualization Designer | `da-data-viz-designer` | Pick the right chart type for the data relationship and audience, avoid misleading visuals, tune color, axes and labels for instant clarity, and output echarts, plotly or matplotlib code |
| Data Wrangler | `da-data-wrangler` | Clean messy data into analysis-ready datasets, specializing in missing values, dedup and entity resolution, producing reproducible cleaning pipelines with pandas, Polars and OpenRefine |
| Forecasting Modeler | `da-forecasting-modeler` | Do time-series and demand forecasting, choosing among ARIMA, Prophet and XGBoost by scenario, handling seasonality and holidays and delivering forecasts with confidence intervals and backtesting |
| Metrics System Architect | `da-metrics-system-architect` | Build tiered metric systems with OSM, North Star and UJM methods, unify metric definitions and build a metric dictionary to turn everyone-counts-differently into one trusted standard |
| Senior Data Analyst | `da-senior-data-analyst` | Get the question right first, then apply decomposition, comparison, attribution, funnel and retention frameworks to deliver actionable conclusions and next steps from a pile of data |
| Spreadsheet Grandmaster | `da-spreadsheet-grandmaster` | Senior expert for spreadsheet pain, handling complex nested formulas, arrays and LAMBDA, Power Query cleaning, pivots, and VBA and Apps Script automation across Excel, Google Sheets and Feishu Sheets |
| SQL Query Master | `da-sql-query-master` | Turn vague data requests into precise SQL with window functions, complex JOINs and CTE subqueries, then read execution plans to speed up slow queries |

</details>

<details>
<summary><b>Product & Growth</b> (12)</summary>

| Agent | slug | What it does |
|---|---|---|
| A/B Experiment Designer | `pg-ab-experiment-designer` | Turn growth hypotheses into rigorous, launch-ready A/B tests, doing sample-size calculation, significance judgment and a clear ship-or-roll-back decision |
| AI Product Trend Scout | `pg-ai-product-trend-scout` | Scan the AI space for new models, forms and competitor moves, breaking down who is doing what and where the opportunity window is, briefing senior PMs to adjust direction, covering competitor teardowns and frontier-model tracking |
| Feedback Synthesizer | `pg-feedback-synthesizer` | Batch-cluster app store reviews, community gripes, support tickets and interview notes into pain points, turning them into a backlog product can schedule directly, covering review analysis and VOC |
| Growth Hacker | `pg-growth-hacker` | Use AARRR pirate metrics to find growth levers, prioritize experiments and design viral loops, turning a one-off spike into a repeatable growth engine |
| Go-To-Market & Launch Strategist | `pg-gtm-launch-strategist` | Build full GTM plans for new products and features, defining target audience and value proposition, scheduling the launch, configuring channels and pricing hooks and writing the launch script to make launch a high-volume growth event |
| PRD & Spec Author | `pg-prd-spec-author` | Turn a one-line idea into a PRD engineering can build from, covering goals, user stories, acceptance criteria, scope, non-goals and tracking specs, so the spec ships without rework |
| Product Analytics Analyst | `pg-product-analytics-analyst` | Build your tracking system, funnel and retention dashboards and metric definitions, mining behavioral data for why numbers rise and fall and delivering one decision-ready data conclusion |
| Product Strategy Lead | `pg-product-strategy-lead` | Strategy reasoner for AI-native products, helping set vision, pick the lane, draw the moat and set the North Star, forcing a fuzzy product direction into a one-line bet and trade-off list |
| Retention & Lifecycle Strategist | `pg-retention-lifecycle-strategist` | Watch day-2 and weekly retention and churn points, designing full-lifecycle activation, habit-building and win-back outreach, using behavioral science to turn one-time users into long-term retention |
| Roadmap & Prioritization Lead | `pg-roadmap-prioritization-lead` | Prioritize with RICE, Kano and value-complexity frameworks, sequencing a pile of asks into a quarterly roadmap and justifying why this first and that cut |
| Sprint & Delivery Coordinator | `pg-sprint-delivery-coordinator` | Break the roadmap into ship-on-time sprints, handling scheduling, point estimation, scope control, cross-functional alignment and blocker tracking to drive every sprint to on-time delivery |
| User Research Interviewer | `pg-user-research-interviewer` | Research lead for user interviews, surveys and usability tests, designing non-leading scripts and refining verbatim quotes into actionable insights and personas, fixing guesswork-driven requirements |

</details>

<details>
<summary><b>Marketing & Brand</b> (16)</summary>

| Agent | slug | What it does |
|---|---|---|
| Ad Creative & Testing Strategist | `mb-ad-creative-testing-strategist` | Do paid-side ad creative and testing, writing hooks and selling points, designing creative scripts and RSA responsive assets, building creative testing frameworks and using data to decide which asset to scale or cut |
| Brand Strategy & Positioning Architect | `mb-brand-strategy-positioning-architect` | Define brand positioning and differentiation, hammering a vague self-definition into executable brand strategy, value proposition and narrative, and governing cross-channel brand consistency |
| Community & Private-Domain Strategist | `mb-community-private-domain-strategist` | Build WeCom SCRM and community tiers, design user lifecycle and referral loops, do content-driven operations and repurchase recall, turning public traffic into a reusable, high-value private domain |
| GEO/AEO Brand Visibility Strategist | `mb-geo-aeo-brand-visibility-strategist` | Drive brand visibility in AI engines, auditing whether you are cited in ChatGPT, Claude, Doubao, Kimi and Perplexity, diagnosing why competitors get recommended and designing GEO citation strategy and agent task-readiness |
| Global Social Media Strategist | `mb-global-social-strategist` | Coordinate organic growth across LinkedIn, X, Instagram, TikTok and Threads, doing overseas social strategy, personal branding and thought leadership by each platform's algorithm and culture |
| Growth & Experimentation Strategist | `mb-growth-experimentation-strategist` | Do data-driven growth, building the full acquisition-conversion-retention funnel, designing A/B tests and growth experiments and finding scalable channels and viral loops to make growth a reviewable experiment system |
| KOL & Influencer Partnership Strategist | `mb-kol-influencer-partnership-strategist` | Run the full influencer marketing chain from creator profiling and deal negotiation to seeding briefs and post-campaign ROI review, making KOL placement a quantifiable growth channel |
| Lifecycle CRM & Marketing Automation Strategist | `mb-lifecycle-crm-automation-strategist` | Design lifecycle marketing and CRM automation, doing audience segmentation, nurture sequences and win-back, building email, SMS, push and WeChat multichannel outreach into a self-running retention and repurchase engine |
| Marketing Analytics & Attribution Lead | `mb-marketing-analytics-attribution-lead` | Build the marketing measurement system, doing conversion tracking and attribution modeling, connecting GA4, ad platforms and CRM into an ROI dashboard that guides budget allocation |
| Paid Search & Shopping Strategist | `mb-paid-search-shopping-strategist` | Build account structure, keyword-intent and negative-keyword systems and ROI-based budget and bidding, fixing SEM that spends without profit, search-term blind spots and the Shopping and Performance Max black box |
| Paid Social & Programmatic Buyer | `mb-paid-social-programmatic-buyer` | Run Meta, TikTok and Ocean Engine feeds and programmatic display, doing full-funnel audiences and retargeting, placement and budget strategy and media buying to buy social and display traffic into scalable conversion |
| PR & Crisis Communications Lead | `mb-pr-crisis-communications-lead` | Run the full PR and communications play from press releases and media messaging to crisis comms, proactively setting the narrative and managing sentiment to keep damage minimal |
| SEO & ASO Discoverability Strategist | `mb-seo-aso-discoverability-strategist` | Drive search and app-store discoverability, coordinating technical SEO, dual-engine Baidu SEO ranking and ASO to make organic search and app-market traffic a stable acquisition channel |
| Video & Podcast Growth Strategist | `mb-video-podcast-growth-strategist` | Do growth strategy for long video and podcasts, specializing in video retention, YouTube growth, podcast growth, show positioning and AV distribution to make long content a compounding audience asset |
| WeChat, Zhihu & Bilibili Ecosystem Strategist | `mb-wechat-knowledge-platform-strategist` | Do long-content ecosystem strategy on WeChat, Zhihu, Bilibili and Channels for knowledge brands, setting columns and distribution cadence and working each platform's algorithm to build brand trust and private-domain conversion through expertise |
| Xiaohongshu & Douyin Growth Strategist | `mb-xhs-douyin-growth-strategist` | Run Xiaohongshu seeding and Douyin viral growth, defining niche persona, decoding the recommendation algorithm and designing content matrices and account ramp-up to make platform traffic a repeatable, sustainable growth curve |

</details>

<details>
<summary><b>Business & Strategy</b> (14)</summary>

| Agent | slug | What it does |
|---|---|---|
| Board & Executive Briefing Officer | `bs-board-exec-briefing-officer` | Distill operating data and strategic issues into one page boards and execs grasp instantly, conclusion first, risk transparent and decision points clear, with exec summaries, decision briefings and Q&A prep |
| Business Model Designer | `bs-business-model-designer` | Use the business model canvas and unit economics to break down revenue, cost, moat and growth flywheel, designing and stress-testing the profit model and finding the cash-flow path and scalable engine, for when the model will not work |
| Competitive Intelligence Analyst | `bs-competitive-intelligence-analyst` | Systematically dig competitors' positioning, product, pricing, channel and tactics, building benchmark matrices and capability-gap tables, identifying strategic intent and weak spots and giving differentiation and counter-strategy |
| Founder's Chief of Staff | `bs-founder-chief-of-staff` | Filter noise for the founder, organize decision lists, drive cross-team alignment and commitment tracking, translate strategic intent into executable cadence and keep key issues from dropping, as the boss's second brain |
| Fundraising Deck & Pitch Strategist | `bs-fundraising-pitch-strategist` | Build your fundraising storyline, do financial projections and valuation anchors, defend the investor Q&A and turn market, model, data and team into a pitch deck investors buy |
| M&A Deal & Integration Strategist | `bs-ma-deal-integration-strategist` | Make the strategic case for M&A, target screening and due-diligence focus, valuation and synergy modeling, then plan Day 1 and 100-day integration and track synergy capture and cultural fit |
| Market & Sector Researcher | `bs-market-sizing-researcher` | Do TAM/SAM/SOM market sizing, sector structure and trend reads and supply-demand scans, aggregating scattered signals into opinionated sector intel that answers whether a market is worth entering |
| OKR & Strategy Execution Coach | `bs-okr-strategy-execution-coach` | Break strategic goals into measurable OKRs and key initiatives, calibrating ambition in the O and measurability in the KRs, building review cadence and alignment, for when goal-setting never lands |
| Pricing & Monetization Modeler | `bs-pricing-monetization-modeler` | Design pricing models and tiers from cost structure, willingness to pay and competitor anchors, doing price-elasticity, margin-sensitivity and price-increase analysis to make pricing a calculable growth lever |
| Red-Blue Strategy Duelist | `bs-redblue-strategy-duelist` | War-game your strategy with game theory and the 36 stratagems, red team simulating the harshest opponent's counterattack and blue team forcing your response, dueling repeatedly until a wishful plan can withstand real opposition |
| Single Leverage-Point Strategist | `bs-single-leverage-point-strategist` | Skip comprehensive planning and force out the single leverage point that, done to the extreme, moves everything, working back from the endgame to cut secondary items and giving all-in-grade conviction and bet rationale |
| Chief Business Strategist | `bs-strategy-chief-advisor` | Break down business problems with McKinsey-style hypothesis-driven analysis, doing strategy diagnosis, market entry and growth-path analysis and giving trade-off-aware, executable strategy proposals |
| Structured Consulting Communicator | `bs-structured-consulting-communicator` | Use SCQA, the pyramid principle and MECE to build messy information into conclusion-first, mutually-exclusive arguments, producing consulting-grade storylines, issue trees and one-page proposals |
| Zero-to-One Startup Advisor | `bs-zero-to-one-startup-advisor` | Help early founders validate the real problem, find PMF and design minimal validation experiments, judge whether to go all in or pivot and give decisive conviction |

</details>

<details>
<summary><b>Research & Learning</b> (12)</summary>

| Agent | slug | What it does |
|---|---|---|
| Book Deconstruction Analyst | `book-deconstruction-analyst` | Use syntopical reading to break a book into core propositions, argument structure and transferable models, doing cross-book comparison and critique to produce notes you can internalize and teach |
| Concept Explainer Tutor | `concept-explainer-tutor` | Explain hard concepts at your level, using analogy, first principles and Socratic questioning to take you from intuition to essence, for half-understood and quickly-forgotten material |
| Deep Research Lead | `deep-research-lead` | Break a fuzzy question into searchable sub-questions, fan out multi-source retrieval, cross-verify and synthesize a research report with citations and confidence levels, keeping an evidence trail throughout |
| Distill & Summarize Analyst | `distill-summarize-analyst` | Do tiered summaries of long articles, reports, papers and meeting transcripts, extracting core arguments, evidence and counterpoints in pyramid structure for reusable takeaways and quotable lines |
| Exam Prep Study Coach | `exam-prep-study-coach` | Help grad-school and civil-service candidates break down the syllabus, schedule daily plans, review wrong questions and plan memorization, turning a long review cycle into an executable cadence |
| Fact-Check Verifier | `fact-check-verifier` | Break a draft or set of claims into verifiable statements, doing source tracing, claim verification and AI-hallucination defense, marking credibility, giving counter-evidence and producing a traceable check report |
| Language Acquisition Tutor | `language-acquisition-tutor` | Turn language learning into methodical long-term training with comprehensible input, shadowing and spaced repetition, doing listening, speaking, reading and writing practice, idiomatic correction and writing feedback |
| Learning Strategy Coach | `learning-strategy-coach` | Use active recall, spaced repetition, the Feynman technique and deliberate practice to design learning paths, diagnose your level, schedule review and break any skill into an executable progression ladder |
| Literature Review Synthesizer | `literature-review-synthesizer` | Systematically search literature on a topic, map the research thread, build a thematic matrix and contrast points of divergence, producing a submission-quality review skeleton and citation table |
| Research Question & Method Designer | `research-question-designer` | Narrow a broad interest into a researchable question, defining the research framework, variable hypotheses and method path, getting your question right and avoiding methodology pitfalls before the proposal |
| Study Abroad Application Strategist | `study-abroad-application-strategist` | Do school selection, professor outreach and essay narrative for study-abroad applications, stitching scattered background into a story admissions remembers, with executable strategy and program-fit judgment |
| Zettelkasten Knowledge Steward | `zettelkasten-knowledge-steward` | Use Luhmann's Zettelkasten method to refine fragmentary input into atomic notes, build backlinks and indexes and grow a living knowledge network that turns notes into a thinking second brain |

</details>

<details>
<summary><b>Professional Advisors</b> (16)</summary>

| Agent | slug | What it does |
|---|---|---|
| Bookkeeping & Workpaper Agent | `pa-bookkeeping-workpaper-agent` | Pull data from invoices, bank statements and payroll to auto-assign accounts, build journal entries, reconcile banks and tie out workpapers, freeing bookkeeping from data-entry drudgery |
| Contract Review Counsel | `pa-contract-review-counsel` | Review procurement, sales, labor and investment contracts clause by clause, flagging risky terms, filling gaps and giving edits on earnout, breach, indemnity and jurisdiction clauses before you sign, doing review and clause-risk flagging only, not litigation |
| Data Compliance & Privacy Officer | `pa-data-compliance-officer` | Map data classification and grading, permissions, privacy-policy review and remediation against PIPL, the Data Security Law and MLPS 2.0, translating compliance requirements into actions the business can implement |
| Health Report & Care Navigation Advisor | `pa-health-report-navigator` | Explain checkup flags and test orders in plain words, clarify which department to see, what to ask the doctor and how to schedule chronic-disease follow-up and meds, giving education and care-navigation guidance, not diagnosing and flagging critical values for immediate care |
| HR & Employment Compliance Advisor | `pa-hr-employment-compliance` | Do full-cycle employment management from hire to exit, labor-contract and policy compliance self-checks, social-security, attendance and payroll reconciliation and labor-dispute risk forecasting, with compliance boundaries and handling approaches |
| Insurance Coverage Diagnostic Advisor | `pa-insurance-coverage-diagnostic` | Diagnose family coverage gaps from a neutral stance, giving critical-illness, medical, accident and life configuration by budget, comparing policy terms and exclusions clause by clause and explaining denial logic and claim points, without selling or buying for you |
| IP & Trademark Strategist | `pa-ip-trademark-strategist` | Moat advisor for trademark layout, patent strategy and copyright protection, running similarity searches, assessing infringement risk and clarifying enforcement and evidence, staking out legal protection for brand and originals early |
| Legal Billing & Time Counsel | `pa-legal-billing-time-counsel` | Help lawyers and consultants do time tracking, billing generation, invoice narratives, receivables collection and profit-share calculation, turning professionals' time precisely into cash flow |
| M&A Deal & Valuation Advisor | `pa-ma-deal-finance-advisor` | Do M&A financial due-diligence focus, valuation modeling and synergy estimation, plan Day 1 and 100-day finance integration and track synergy capture, plugging the bought-but-cannot-digest financial holes, without making the deal call for you |
| Month-End Close & FP&A Analyst | `pa-month-end-close-controller` | Help you run month-end reconciliation and tie-outs, do budgeting and rolling forecasts and attribute budget-versus-actual variance into business conclusions, with AI accelerating data pull and analysis |
| Neutral Investment & Wealth Advisor | `pa-neutral-wealth-advisor` | From a no-product-selling neutral stance, help with asset allocation, fund SIPs and risk assessment, debunk sales scripts, explain compounding and drawdown and give frameworks and trade-off judgment |
| Personal Legal Rights Helper | `pa-personal-legal-rights-helper` | Explain divorce, labor arbitration, debt and consumer-rights cases in steps you understand, helping you calculate limitation periods, judge jurisdiction, list materials and draft applications, doing process guidance only, not litigation or replacing a lawyer |
| Real Estate Deal & Mortgage Advisor | `pa-real-estate-deal-advisor` | Help you calculate down payment, mortgage, taxes and transfer costs, compare commercial and housing-fund combo loans, check purchase and loan restrictions and clarify transaction, transfer and contract points, giving calculations and decision frameworks, not acting as agent |
| Recruiting & Talent Selection Advisor | `pa-recruiting-talent-advisor` | Write precise JDs, design structured interview questions and scoring dimensions, do resume tagging and talent-profile matching and clarify channels and salary bands, making hiring right a standardized, AI-assisted screen |
| Tax Filing Scheduler | `pa-tax-filing-scheduler` | Help bookkeeping agents and corporate finance schedule multi-entity filings into a no-miss calendar, watching VAT, individual-income-tax and social-security nodes and auto-chasing client documents and reconciling against Golden Tax Phase IV |
| Tax Policy Q&A Advisor | `pa-tax-policy-qa-advisor` | Explain in plain words whether you can issue special invoices, assessed versus audited collection, how to use small-business breaks fully and how to apply Golden Tax Phase IV, with executable guidance and filing nodes, for confusing tax policy |

</details>

<details>
<summary><b>Career & Productivity</b> (12)</summary>

| Agent | slug | What it does |
|---|---|---|
| Career Strategy Coach | `cp-career-strategist` | Lay out your career sticking points and take stock, specializing in career planning, job-change timing and promotion defense, forcing out a decisive call on which step to bet on instead of pep talk |
| Decision Analysis Advisor | `cp-decision-analysis-advisor` | Break life and career crossroads into a comparable decision matrix, estimate probability and payoff, keep a forecast-and-review log and force the trade-off on big decisions like whether to change jobs without making the call for you |
| Habit Formation Behavior Coach | `cp-habit-formation-coach` | Use behavioral-science cue-routine-reward and habit stacking to break a target habit into the smallest viable action, set triggers, track check-ins and prevent relapse, sticking via systems not willpower |
| Senior Interview Rehearsal Coach | `cp-interview-rehearsal-coach` | Run mock interviews with follow-ups, scoring and per-question feedback, compressing highlight experiences into reusable answer frameworks, for behavioral, case and executive final rounds |
| Knowledge-Worker Writing Aide | `cp-knowledge-worker-writing-aide` | Turn emails, reports, proposals, self-reviews and retros from drafts into conclusion-first, clearly structured professional text, controlling tone and length so your writing matches your judgment, strong at conclusion-first rewriting, doc polishing and self-review skeletons |
| Mental Models Thinking Partner | `cp-mental-models-thinking-partner` | Use first principles, inversion, opportunity cost and diverse mental models to break down complex problems and spot cognitive biases, forcing fuzzy intuition into clear, executable structure |
| Offer & Salary Negotiation Strategist | `cp-offer-negotiation-strategist` | Break down offer structure and market percentile, set your BATNA and concession limits and give line-by-line salary-negotiation scripts and multi-offer strategy to help you max total comp |
| Personal Brand Architect | `cp-personal-brand-architect` | Distill your professional positioning and differentiation narrative, plan content pillars and persona on LinkedIn, Maimai and WeChat, turning professional accumulation into an opportunity-bringing influence asset |
| Productivity System Designer | `cp-productivity-system-designer` | Use GTD, PARA, kanban and weekly reviews to build a personal productivity system that actually runs, clearing your mind, sorting the inbox and turning every commitment into an executable next action |
| Resume & ATS Optimizer | `cp-resume-ats-optimizer` | Rewrite resume keyword matching, achievement quantification and STAR phrasing for the target JD, do ATS-parse self-checks and version management so machines pass it and HR picks it |
| Solopreneur & Side-Venture Strategist | `cp-solopreneur-side-venture-strategist` | Help you monetize professional skills into consulting, knowledge products or a one-person company, validating demand before designing offer and pricing, planning the side-to-full-time transition, betting only on the highest-leverage path |
| Time & Energy Manager | `cp-time-energy-manager` | Use time blocks, deep work and energy curves to rearrange your schedule, cut low-value meetings and switching cost and slot hard work into energy peaks, for schedules shredded by meetings and out-of-control time |

</details>

<details>
<summary><b>Ops · PM · Sales</b> (12)</summary>

| Agent | slug | What it does |
|---|---|---|
| Automation Governance & Change Enablement Architect | `ops-automation-change-enablement-architect` | Vet value, risk and maintainability before orchestrating process automation, add governance guardrails, then use ADKAR and Kotter to drive adoption, ease resistance and run training, for systems no one uses and process changes that rebound |
| Business Operations Excellence Lead | `ops-business-operations-excellence-lead` | Use Lean and Six Sigma for process optimization, bottleneck diagnosis, capacity planning and KPI governance, breaking chaotic operations into a repeatable, measurable, continuously improving system |
| Customer Success Manager | `ops-customer-success-manager` | From onboarding and health-score alerts to QBR reviews and renewal saves, use customer-success playbooks to turn closed deals into long-term recurring net revenue retention |
| Sales Discovery Coach | `ops-discovery-call-coach` | Teach you to surface real buying motives through discovery questions, doing needs discovery, current-state gap analysis and pain quantification to force implicit needs into measurable purchase motivation |
| Incident Command & Postmortem Lead | `ops-incident-command-lead` | Spin up structured response for production incidents, doing incident command, escalation, SLO protection and blameless postmortems, turning chaos into control and closing off recurring incidents |
| Complex Deal Strategist (MEDDPICC) | `ops-meddpicc-deal-strategist` | Use MEDDPICC to score and grade win plans for complex large deals, mapping the decision chain and competitive positioning and killing wishful, over-optimistic funnels |
| Outbound Prospecting & Pipeline Architect | `ops-outbound-pipeline-architect` | Help define ICP and trigger signals, design multichannel outreach sequences and high-personalization openers, shifting prospecting from volume to signal-based precision and building a repeatable, predictable acquisition pipeline |
| Pre-Sales Solution Engineer | `ops-presales-solution-engineer` | Do technical discovery, demo design and POC scoping, write competitive battlecards, translate product capabilities into customer business outcomes and win the technical decision to move the deal forward |
| Program & PMO Governance Architect | `ops-program-pmo-architect` | Organize scattered projects into programs with unified cadence, establish PMO governance, stage gates and portfolio prioritization and do resource allocation and review mechanisms so leadership sees the whole picture |
| Project Delivery Shepherd | `ops-project-delivery-shepherd` | Push projects from kickoff to delivery, doing critical-path scheduling, risk and dependency identification and stakeholder alignment, watching for cross-team dropped balls and delay warnings |
| Proposal & RFP Win Strategist | `ops-proposal-rfp-win-strategist` | Break down RFP requirements into compliance matrices, distill win themes and value propositions, turning bid responses from box-ticking into persuasive, story-driven winning proposals |
| Revenue Operations & Forecast Analyst | `ops-revenue-operations-analyst` | Diagnose pipeline health, calculate deal velocity and calibrate forecast accuracy, turning CRM and Excel sales data into revenue-ops intelligence that warns before a quarter is missed |

</details>

<details>
<summary><b>Vertical Industries</b> (4)</summary>

| Agent | slug | What it does |
|---|---|---|
| Cross-Border E-Commerce Operator | `cn-cross-border-ecommerce-operator` | Help factories and sellers sell on Amazon, Temu, TikTok Shop and DTC sites, handling cross-border product selection, listing localization, ad cadence and overseas-warehouse logistics and compliance end to end |
| Game & Mini-Game Developer | `cn-game-minigame-developer` | Build mobile and WeChat mini-games end to end with Unity and Cocos, handling gameplay numbers, level narrative and game audio and understanding user acquisition, package size and mini-game platform rules |
| GIS & Mapping Specialist | `cn-gis-mapping-specialist` | Do land-planning cartography, spatial analysis, WebGIS development and drone-survey processing, hands-on from data cleaning to final map output |
| Web3 Smart Contract Engineer | `cn-web3-smartcontract-engineer` | Write EVM smart contracts in Solidity, do DeFi protocol architecture, gas optimization and upgradeable proxy patterns, then self-audit reentrancy and access-control vulnerabilities, covering Ethereum and L2s |

</details>

<!-- AGENT-LIST-EN:END -->

## Quick start

```bash
npm run validate   # check: hard-cap 200, unique slugs, required fields
npm run build      # transpile dist/ for all three tools + catalog.json + ROUTER.md
```

Install into each tool:

```bash
bash scripts/install.sh claude-code   # copy to ~/.claude/agents/
bash scripts/install.sh codex         # copy to ~/.codex/prompts/, call with /<slug>
bash scripts/install.sh openclaw      # copy to ~/.openclaw/agents/
```

## Contributing

Edit an agent only in `agents/<slug>.md`, then run `npm run check` before committing. Adding an agent means merging an old one to keep the total at 200 (CI enforces it). Format spec in [docs/SCHEMA.md](./docs/SCHEMA.md).

## License

[MIT](./LICENSE) © HeiGeAi

</details>

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

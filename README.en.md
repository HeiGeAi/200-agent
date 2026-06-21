<div align="center">

# 200 Agent

**200 expert-level AI personas that take your AI tools to senior-specialist quality**

200 个专家级 AI 角色,让你手里的 AI 工具发挥到行业专家水平 · single source · Claude Code · Codex · OpenClaw

[![agents](https://img.shields.io/badge/agents-200-brightgreen)](./ROUTER.md)
[![domains](https://img.shields.io/badge/domains-14-blue)](./ROUTER.md)
[![license](https://img.shields.io/badge/license-MIT-black)](./LICENSE)
[![tools](https://img.shields.io/badge/Claude%20Code%20·%20Codex%20·%20OpenClaw-ready-orange)](./docs/SCHEMA.md)

[ROUTER table](./ROUTER.md) · [SCHEMA spec](./docs/SCHEMA.md)

[简体中文](./README.md) · **English**

</div>

---

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

Once installed (see [Quick start](#quick-start) below), you don't need to memorize slugs. Describe what you want in plain language and the tool auto-routes to the right agent, or call one by name. Three examples:

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

Grouped by the 14 domains. Click a domain to expand. Machine-readable index in [catalog.json](./catalog.json), plain-table version in [ROUTER.md](./ROUTER.md).

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

## Project structure

```
agents/             200 canonical source files (single source of truth)
build/              transpiler and validator (zero-dependency Node)
dist/               build outputs (three tools, gitignored, run build to generate)
docs/SCHEMA.md      canonical format spec
catalog.json        machine-readable index
ROUTER.md           human-readable routing table (grouped by domain)
```

## Contributing

Edit an agent only in `agents/<slug>.md`, then run `npm run check` before committing. Adding an agent means merging an old one to keep the total at 200 (CI enforces it). Format spec in [docs/SCHEMA.md](./docs/SCHEMA.md).

## License

[MIT](./LICENSE) © HeiGeAi

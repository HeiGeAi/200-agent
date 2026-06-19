<div align="center">

# 200 agent

**200 个面向中国市场的 AI agent,一份源,三套工具通吃**

200 China-ready AI agents · single source · works on Claude Code, Codex & OpenClaw

[![agents](https://img.shields.io/badge/agents-200-brightgreen)](./ROUTER.md)
[![domains](https://img.shields.io/badge/domains-14-blue)](./ROUTER.md)
[![license](https://img.shields.io/badge/license-MIT-black)](./LICENSE)
[![tools](https://img.shields.io/badge/Claude%20Code%20·%20Codex%20·%20OpenClaw-ready-orange)](./docs/SCHEMA.md)

[路由总表 ROUTER](./ROUTER.md) · [格式规范 SCHEMA](./docs/SCHEMA.md) · [架构设计](./架构设计-v2.md)

</div>

---

## 这是什么

把一套 232 个欧美底盘的专家 agent,**取其能力、按中国国情自下而上重做**成正好 **200 个** agent。覆盖中国市场几乎所有人群:个体户、中小企业主、基础员工、大中型企业职能岗、学校老师、政府机构、内容创作者、专业服务者,到普通人的生活与成长。

名字图好记,就叫 **200 agent**。

设计原则:

- **中国为主**:砍掉在中国受众极低的品类(欧美游戏引擎、XR、专业测绘、欧美社媒与投放),把名额让给中小微企业运营、个体户、私域直播、政务体制内、教师、考公考研、财税、制造外贸、本地生活这些高频场景。能力不丢,全部换壳归入对口域。
- **一份源,多端转译**:每个 agent 只维护一个 `agents/<slug>.md`,`npm run build` 转译出 Claude Code / Codex / OpenClaw 三套产物。
- **中文为主 + 中英双触发**:正文中文,触发词中英双写,自动路由更易命中。
- **数量硬卡 200**:CI 守门,`slug` 全局唯一。

## 14 个域

| 域 | 数量 | 主受众 |
|---|---|---|
| 个体工商户与小微商家 | 14 | 夫妻店 / 网店 / 摊主 |
| 中小企业主与创始人 | 14 | 10-200 人公司老板 |
| 职场基础员工与通用职能 | 15 | 文秘 / 运营 / 客服 |
| 大中型企业职能岗 | 15 | 总监经理级(可私有化) |
| 体制内与政务数字化 | 13 | 机关笔杆子 + 政务乙方 |
| 教育工作者 | 10 | 中小学 / 高校 / 教培 |
| 学生与升学就业 | 14 | 高考 / 考研 / 考公 / 留学 / 求职 |
| 内容创作者与直播电商 | 23 | 多平台创作者 / MCN / 主播 |
| 制造外贸与跨境电商 | 16 | 工厂 / 外贸 / 跨境卖家 |
| 本地生活服务 | 16 | 餐饮 / 零售 / 医美 / 家政 / 汽修 / 宠物 |
| 专业服务·财税法律医疗保险房产 | 16 | C 端最大职业群体 |
| 软件研发与 AI 工程与设计 | 19 | 工程师 / AI / 前后端 / 设计 |
| 农业与县域经济 | 4 | 新农人 / 助农直播 |
| 个人生活与成长 | 11 | 健康 / 亲子 / 副业 / 心理 / 维权 / 理财 |

## 全部 200 个 agent

按 14 域分组,点开看每个 agent 的中文名、调用 slug 和能力。机读索引见 [catalog.json](./catalog.json),纯表格版见 [ROUTER.md](./ROUTER.md)。

<!-- AGENT-LIST:START -->

<details>
<summary><b>个体工商户与小微商家</b>（14）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 零工招人结账员 | `mm-casual-hire-helper` | 帮小店小作坊招零工、写招工启事、谈工资、算工时、当月结清，缺人时快速找到人、把账理清。 |
| 差评安抚补偿师 | `mm-complaint-handler` | 碰上差评投诉别慌，给你软下来又不吃亏的道歉话术和补偿方案，把退款纠纷化成回头客 |
| 跨境小单翻译客服 | `mm-cross-border-translator-cs` | 帮不会外语的小微卖家在速卖通Temu接外国买家小单，做商品翻译和多语言回复，把跨境沟通这道坎踩平 |
| 电商店铺运营师 | `mm-ecommerce-listing-operator` | 帮小店主写商品标题、改详情页、排店铺SEO关键词，让商品在拼多多淘宝抖音店里被搜得到、被点进去、被买走。 |
| 营业执照税务办事向导 | `mm-license-tax-guide` | 帮个体户搞定营业执照年报、定额核定征收、社保缴纳和补贴减免，告诉你去哪办、要带啥、怎么填。 |
| 同城直播带货教练 | `mm-livestream-coach` | 教第一次开播的小老板怎么开播、写直播脚本、发福袋、卡逼单节奏，把同城直播带货从零做到有人下单。 |
| 毛利测算师 | `mm-margin-pricing-calc` | 帮小微商家算清进价加多少卖、折扣套餐到底亏不亏、毛利够不够，定价不再凭感觉 |
| 小程序点单上线助手 | `mm-mini-program-helper` | 帮小店上一个微信小程序点单系统，顾客扫码自助下单，老板自己接单不靠平台抽成 |
| 发圈带货文案手 | `mm-moments-content-hand` | 把你拍的产品图和视频改成一发就有人问的朋友圈文案和短视频脚本，解决你每天不知道发什么、带货文案写不出、图配字没词用的难题。 |
| 巴掌海报台卡设计员 | `mm-poster-tablecard-designer` | 帮不会用设计软件的小店老板做海报、价目表、二维码台卡和开业告示，手机上点几下出一张能直接打印张贴的图。 |
| 私域复购运营官 | `mm-private-domain-operator` | 帮小店老板建客户群、发老顾客优惠、做会员和复购提醒，把回头客攒成自己的私域。 |
| 极简记账对账员 | `mm-simple-bookkeeper` | 帮小摊主小作坊记流水账、月底对账、一眼看清这个月赚了还是亏了，不懂会计也能管好自己的钱。 |
| 进货比价砍价参谋 | `mm-sourcing-bargain-advisor` | 帮小店和摊位老板找供货商、看懂批发报价单、算清账期成本、跟上游砍价，进货不被坑、压低进价 |
| 微信客服回话管家 | `mm-wechat-cs-replier` | 顾客问价问库存问发货退换货时，一键给你现成话术模板，把客服话术、退换货怎么说、回复模板都接住，一个人也能稳稳应付刷屏咨询 |

</details>

<details>
<summary><b>中小企业主与创始人</b>（14）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 现金流账款参谋 | `cashflow-receivables-advisor` | 帮中小企业主盯应收账龄、写催款话术、做现金流预警，提前算清钱什么时候到账、断点在哪天。 |
| 合同法务初审官 | `contract-legal-prereview` | 帮请不起法务的中小企业主做合同审查、风险标注和合规自查，签字前先把采购销售劳动合同里的坑挑出来 |
| 客户成功续费官 | `customer-success-renewal` | 做客户健康度盘点、续费续约谈判、找增购扩张点，把签下来的客户从一次性变成复购增长盘，专治防流失和续约谈判 |
| 飞书微信生态打通工程师 | `feishu-wechat-integration` | 帮没技术班子的小老板搭飞书审批流、配多维表、做机器人，把飞书微信生态打通成不用换屏的自动化办公台。 |
| 老板贴身参谋长 | `founder-chief-of-staff` | 把语音和会议变成待办、起草通知制度、过滤信息理清决策的老板外脑，语音转待办、会议纪要、决策外脑随叫随到。 |
| 政企投标申报顾问 | `gov-bid-advisory` | 帮中小企业主读懂政策、写标书、报专精特新和各类补贴，敲开政企ToG和财政红利的门。自然命中标书撰写、补贴申报、政策解读。 |
| 招聘用工管家 | `hiring-onboarding-manager` | 帮小老板写JD发BOSS直聘、筛简历约面试、办入职手续做用工管理，从招到管一条龙。 |
| 定价毛利胜负手 | `pricing-bet-strategist` | 帮中小企业老板算清毛利、定对价格，再用红蓝对抗逼出该押哪个业务、进哪个市场、跟谁正面打的单点取舍，触发词含定价测算、毛利分析、战略取舍。 |
| 私域获客运营官 | `private-domain-operator` | 帮小老板搭企微SCRM、运营社群朋友圈、写带货文案、做客户分层，把老客盘活、复购召回拉起来。 |
| 流程提效团队治理官 | `process-team-governance` | 帮老板梳流程砍浪费、定KPI治指标、诊团队管人心，把降本提效和带团队两件难事一起落地。 |
| 销售成单操盘手 | `sales-deal-closer` | 陪创始人这个销售一号位从触达打到签单，做线索结构化、报价提案、谈单异议拆解和漏斗成单复盘。 |
| 小微财税合规管家 | `sme-tax-compliance-steward` | 盯增值税小规模、核定征收、金税四期申报节点和社保自查，把小微税收优惠用足又不踩线。 |
| 制度SOP笔杆子 | `sop-training-drafter` | 把老板脑子里的规矩落成新人照着就能上手的制度SOP、培训手册和绩效考核表，制度文档、SOP撰写、员工培训一并接。 |
| 采购供应链寻源官 | `sourcing-supplychain-officer` | 帮亲自管采购的中小老板做供应商开发、比价寻源、账期谈判和质量管控，把进货成本和供货稳定一手拿捏 |

</details>

<details>
<summary><b>职场基础员工与通用职能</b>（15）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 中英商务互译官 | `business-cn-en-translator` | 把邮件、产品资料、海外客户消息做中英互译并本地化语气，专业不生硬，擅长翻译邮件、本地化、外贸翻译 |
| 竞品行业情报员 | `competitor-brief-researcher` | 帮运营市场销售做竞品分析、行业简报、情报搜集，把零散资料整理成能直接用的市场调研简报。 |
| 客户消息应答官 | `customer-reply-composer` | 把客户咨询、客诉、退换货消息批量转成有温度又得体的标准话术，自带升级方案和安抚话术，支持回客户消息、批量回复、退换货回复 |
| 反馈差评分析师 | `feedback-insight-analyst` | 把客户反馈、差评、问卷批量做归类与共性提炼，按优先级排序，产出能直接给上级看的结论。擅长分析差评、问卷分析、反馈归类。 |
| 效率习惯助推官 | `habit-nudge-engine` | 用行为科学帮你把待办拆成微行动、卡好节奏养成习惯，既能做个人效率助推也能设计用户激活的提醒序列 |
| 会议纪要与聊天要点提炼官 | `meeting-notes-four-section` | 把会议录音逐字稿转成决议待办责任人未决问题四段式纪要，也能从长邮件和 IM 聊天里抽诉求要点和待回复事项，多线程沟通不漏球 |
| 公文文书笔杆子 | `official-document-drafter` | 帮你写通知、起草公文、出活动方案和邀请函，按红头格式规范成稿，称谓抬头落款一个不错 |
| 页面走查趣味师 | `page-walkthrough-whimsy` | 站在真实用户视角逐屏走查页面体验，找出看不懂、不敢点、想退出的卡点，再给细节补上趣味文案和人情味彩蛋，让页面既好用又不冷冰冰。会做页面走查、体验检查、细节趣味化。 |
| 项目排期协调官 | `project-timeline-coordinator` | 帮你拆任务、排时间线、跨部门对齐排期，把多方需求理成一张推得动的进度表 |
| 招聘HRBP助手 | `recruiting-hrbp-assistant` | 帮你写JD、做简历初筛打标、出面试问题、起offer话术和入职引导，把招聘到入职全流程跑顺提速 |
| 销售跟单陪练 | `sales-followup-coach` | 帮基层销售整理客户信息、写跟进话术、出报价初稿、应对异议、做成单复盘的顾问式跟单陪练 |
| 新媒体文案私域操盘手 | `social-content-operator` | 帮你写文案改标题、跟热点选题，一份素材分发多平台换不同口吻，再用企微社群朋友圈做用户分层把流量盘成复购 |
| SOP手册沉淀师 | `sop-manual-builder` | 把老员工脑子里的口头流程和经验，沉淀成查得到、用得上的标准操作手册和新人上手指南，触发词写SOP、操作手册、新人指南。 |
| 表格清洗汇总与日报推送师 | `spreadsheet-cleanup-analyst` | 把乱表清洗透视套公式、月度运营数据汇总成能直接讲的结论，再取数建看板、定时把数据日报推送到企微飞书群，覆盖清洗数据、数据汇总、群推日报全链路 |
| 周报月报提炼师 | `work-report-distiller` | 把一周一月的流水账提炼成领导爱看的结构，输出成果、问题、下一步，附汇报PPT大纲，覆盖写周报、写月报、述职等场景 |

</details>

<details>
<summary><b>大中型企业职能岗</b>（15）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 土木结构工程师 | `cn-civil-structural-engineer` | 按国标和抗规做结构计算、施工图技术配合与工程预算造价复核，给设计院、施工企业和造价人员当懂规范的算量助手，专攻结构计算、施工图、工程预算、建筑规范、抗震、造价。 |
| 职能自动化变革官 | `ef-automation-change-enablement-lead` | 把重复职能活封装成带治理护栏的内部 agent，并用变革管理方法推动落地、培训和持续采用，覆盖流程自动化、自动化治理、变革落地三件核心事。 |
| 招投标标书军师 | `ef-bid-proposal-strategist` | 拆解招标需求建响应矩阵、做逐条符合性对照、写出能拿分的标书初稿，懂政企 ToG 打法和废标红线 |
| 经营汇报操盘手 | `ef-board-briefing-strategist` | 把季度经营数据揉成董事会看得懂的战略复盘汇报，自动出 PPT 初稿和高管摘要，专做季度经营分析、战略复盘汇报、董事会材料。 |
| 品牌公关传播官 | `ef-brand-pr-communications-lead` | 替企业把对外发声全口径管起来,写新闻稿、出危机声明、做品牌一致性审查、发官微推文,一句话定调先稳住再回应。 |
| 资本司库并购官 | `ef-capital-treasury-ma-officer` | 一个把资本配置、司库现金、并购整合、ESG披露、应付款执行和投资研究一肩挑的重型财务职能助手，覆盖资本配置、司库管理、并购整合、ESG披露、应付款处理、投资研究 |
| 合同审查法务官 | `ef-contract-review-counsel` | 逐条审查采购供应商劳动等各类合同、标注风险等级并给修改建议，同时记法务计时工时、统计法务工作量 |
| 数据合规等保官 | `ef-data-compliance-mlps-officer` | 对照数据安全法、个人信息保护法和等保2.0，帮你做数据分类分级、权限梳理和整改清单，把合规要求翻译成能落地的控制项。 |
| 数据看板管道工 | `ef-data-pipeline-dashboard-engineer` | 帮企业取数清洗建数据管道、做自动分发的报表看板，顺手把慢查询和库表性能也调优，触发词为数据管道、做看板、慢查询调优。 |
| 行业情报扫描员 | `ef-industry-intel-scanner` | 定期扫竞品动态、追行业政策、抓中标信息，汇成一份能直接发的情报简报；触发词包括竞品扫描、行业政策追踪、中标信息。 |
| IT服务台应急指挥 | `ef-itil-service-incident-commander` | 按ITIL做工单分诊、变更管控和SLA跟踪，故障应急一键拉起应急响应，安全事件来了同步取证溯源 |
| 知识库制度归并官 | `ef-knowledge-sop-steward` | 把散落各处的 SOP、制度、流程文件去重归并、原子化拆分、加索引互链，建成查得到用得上的内部知识库，含知识库整理、制度归并、结构化文档三大本事 |
| 财税月结管家 | `ef-month-end-close-controller` | 帮财务团队跑通月结、对账勾稽、预算编制、滚动预测和预实差异归因，把流水数据揉成能上会的结论 |
| 安全攻防自查官 | `ef-security-redteam-assurance-lead` | 一个把安全架构自查、威胁建模、检测工程、渗透红队、威胁情报和云安全打通的攻防一体专家，帮你做安全合规自查、威胁建模、渗透测试与红队演练。 |
| 寻源比价采购官 | `ef-sourcing-pricing-negotiator` | 帮采购供应商寻源比价、拆成本结构、算议价依据，把采购降本砍到底，覆盖战略寻源与供应商开发全程 |

</details>

<details>
<summary><b>体制内与政务数字化</b>（13）</summary>

| Agent | slug | 能力 |
|---|---|---|
| GIS测绘与空间分析专家 | `cn-gis-mapping-specialist` | 做国土规划制图、空间分析、WebGIS开发与无人机测绘成果处理，从数据清洗到成果出图全流程上手 |
| 政务公开操盘手 | `gov-affairs-publicity` | 把政务公开稿、政务公众号推文、宣传通稿一稿改成多渠道版本，官方口吻不踩线又能让群众读得进去，覆盖政务公开、政务推文、多渠道改写、对外发布全流程 |
| 考核测评设计官 | `gov-appraisal-designer` | 帮你设计绩效考核打分表、做督查测评打分，再把项目申报材料写到对得上申报指南，指标可量化、评分可追溯、申报有据可查 |
| 招投标对标官 | `gov-bid-tender` | 从招标文件编制到投标符合性逐条对照，拆评分项、排废标点、把应答材料对齐评审办法，让你的标书既不被废、又能拿高分。 |
| 公文笔杆子 | `gov-document-drafter` | 按党政机关公文格式套写通知请示报告函纪要，做文种判定、行文规则核对、版头版记一键合规校对的公文写作助手。 |
| 12345工单答复官 | `gov-hotline-responder` | 把12345和信访的群众诉求工单分清职责边界、做出工单分类、写出有温度又留痕的办理回复，触发词包括 12345工单、信访答复、办理回复。 |
| 迎检台账管家 | `gov-inspection-ledger` | 帮机关业务科室和事业单位做台账报表、迎检材料、自查报告，统一口径、多表数据归并核对，一套数字对到底不打架。 |
| 制度SOP起草官 | `gov-institution-sop` | 起草修订制度规章与内部流程SOP，对照上位法和上级规定做合规对照，新老制度衔接不留矛盾条款。 |
| 会议纪要督办员 | `gov-meeting-minutes` | 把专题会督查会的录音草稿整理成规范会议纪要，提炼决策事项、责任人和办结时限，带得动后续督办闭环。 |
| 政策落实拆解官 | `gov-policy-implementer` | 把上级文件读透做本地化政策解读，拆成任务清单、责任分工和时间节点，谁干什么干到哪天一张表说清，支持贯彻落实和督查跟踪。 |
| 政策依据溯源官 | `gov-policy-tracer` | 帮政研法制岗做政策检索、找文件依据、法规问答，每条结论都标依据溯源到原文，把零散文件养成可查可信的内部知识库 |
| 讲话稿代笔 | `gov-speech-ghostwriter` | 帮办公室笔杆子起草领导讲话稿、述职报告、工作总结和工作要点，吃透往年口径接住今年新精神，分场合配文气。 |
| 信创可研论证官 | `gov-xinchuang-feasibility` | 帮你做政务信创项目的可研报告、立项论证、国产化适配评估和采购论证，把变革推行的账算明白。 |

</details>

<details>
<summary><b>教育工作者</b>（10）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 高校论文军师 | `teacher-academic-paper-strategist` | 高校论文润色降重、文献综述与开题思路、基金本子打磨、英文摘要把关，懂学科话语的科研写作军师 |
| 课件讲稿设计师 | `teacher-courseware-deck-designer` | 把教案转成能直接进教室讲的 PPT 课件，逐页配讲稿、动画节奏和配图脚本，专攻课件设计、逐页讲稿、公开课PPT |
| 教研工业化总监 | `teacher-curriculum-industrializer` | 把名师课打散成标准化讲义和课程体系、搭教辅与国际课程、推动多校区可复制可交付的教研工业化总监 |
| 命题组卷官 | `teacher-exam-item-builder` | 按知识点和难度梯度命题组卷，自动配答案解析、错题变式和双向细目表，单元测周练月考一键出。 |
| 成绩分析参谋 | `teacher-grade-analytics-aide` | 帮老师整理班级成绩单、算均分及格率排名波动、揪偏科和临界生，并自动出家长会数据看板。 |
| 批改评语助教 | `teacher-grading-comment-aide` | 批量批改作文周记和主观题，写个性化评语，统计班级共性错误和高频失分点 |
| 评优材料代笔 | `teacher-honors-ghostwriter` | 代写班主任工作总结、教学反思、师德评优、课题申报书与继续教育材料，按评审口径包装成第一人称可读稿 |
| 教案学历案匠人 | `teacher-lesson-plan-architect` | 按课标教材一键出教案、学历案、说课稿，自动套学校模板，补全三维目标、重难点和教学环节。 |
| 家校沟通笔杆子 | `teacher-parent-communication-writer` | 帮老师起草家长群通知、致家长信和敏感家校沟通话术，分寸拿捏不踩雷，缴费活动文案合规可发。 |
| 教培招生操盘手 | `teacher-tutoring-enrollment-operator` | 帮教培机构产出招生文案、小红书种草和抖音引流脚本，做试听转化与续费话术，附定价与方案打包。 |

</details>

<details>
<summary><b>学生与升学就业</b>（14）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 校招信息追踪助手 | `campus-recruiting-tracker` | 帮求职党聚合校招公告、追网申进度和笔试时间，把投递日程排成不漏一场的提醒清单 |
| 行测申论刷题教练 | `civil-exam-drill-coach` | 讲解行测题型解法、带刷题拆错题、按给分点批改申论大作文，国省考都能陪练 |
| 考公职位筛选官 | `civil-service-position-matcher` | 按你的专业、政治面貌、学历、户籍、应届身份硬筛职位表，算竞争比、识别定向条款陷阱，挑出最值得报的岗位 |
| 备考学习教练 | `exam-prep-study-coach` | 帮考研考公备考党拆解大纲、排每日计划、做错题复盘和背诵规划，把长周期复习变成可执行的节奏。 |
| 应届身份政策答疑官 | `fresh-grad-policy-advisor` | 帮应届生讲清三方协议、报到证、档案户口和应届身份政策，识别背调避坑点，把求职签约里的政策红线说明白。 |
| 高考志愿规划师 | `gaokao-application-planner` | 按分数位次和招生计划排冲稳保梯度，逐条扒专业就业和招生章程里的坑，帮你把志愿表填得既不浪费分也不滑档。 |
| 语言考试写作口语陪练 | `language-test-tutor` | 按官方评分标准批改雅思托福写作口语和四六级考研英语作文，逐项打分、定位失分点、给出提分改写和口语陪练。 |
| 学情诊断与备考心态教练 | `learning-diagnosis-mindset-coach` | 给在校生和备考党做学情诊断、出个性化辅导方案、疏导备考焦虑、帮你把学习习惯养起来 |
| 模拟面试陪练教练 | `mock-interview-coach` | 陪你练结构化面试、行为面、技术面和留学套磁，带追问、打分、反馈，连谈薪一起练 |
| 升学路径决策参谋 | `pathway-decision-advisor` | 把保研考研留学秋招几条路摆上桌，算清成本收益和成功概率，逼出毕业去向该押哪条的取舍。 |
| 考研择校参谋 | `postgrad-school-selector` | 对比目标分数、报录比、复试线和参考书，按地域院校梯度算出性价比最高的考研目标，做考研择校与院校梯度规划 |
| 简历ATS改写师 | `resume-ats-rewriter` | 对着JD逐条改简历，量化经历、补ATS关键词、出中英双版，让简历过机器初筛也打动HR |
| 留学文书操盘手 | `study-abroad-essay-coach` | 逐轮打磨留学文书的写作教练，把你的经历提炼成有主线的 PS、SOP、Why School、Diversity Essay 和推荐信，按各申请系统字数定制成稿、做中英本地化润色。 |
| 留学选校进度管家 | `study-abroad-list-manager` | 帮留学党做 reach-match-safety 选校定位、管 deadline 材料清单和签证申请，把整个申请季的进度盯到不掉链子。 |

</details>

<details>
<summary><b>内容创作者与直播电商</b>（23）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 账号数据周报官 | `account-analytics-reporter` | 把抖音小红书视频号的播放完播转化数据拉成能看懂的周报，专做掉量归因、起号复盘和涨粉实验设计。 |
| AI引用优化官（GEO/AEO） | `ai-citation-optimizer` | 让你的内容被豆包、Kimi、DeepSeek、文心引用推荐的GEO优化打法，从被AI引用、AI搜索优化到百度SEO一套搞定。 |
| 录屏语音转写成稿官 | `audio-transcript-to-draft` | 把直播录屏、语音笔记、采访录音转写后整理成可发布成稿，擅长录音转写、口述成文、逐字稿整理 |
| 商单软文报价官 | `brand-deal-copy-strategist` | 帮内容创作者写商单广告稿和软文植入，搭配报价模型和商务对账清单，让恰饭文案既不硬又不亏钱 |
| 知识付费操盘与引流钩子官 | `cn-knowledge-monetization-operator` | 帮你设计卖课训练营、做引流款钩子和lead magnet、用发现式提问把流量转成线索，再用社群陪跑和课程分销跑通转化漏斗。 |
| MCN矩阵养号起号操盘手 | `cn-mcn-matrix-operator` | 多账号矩阵管理与达人撮合商务一把抓,从养号起号到限流自救、起号标签纠正和爆款拆解全程操盘。 |
| 微短剧编剧投流与叙事感染力官 | `cn-microdrama-writer-promoter` | 写微短剧剧本、设计分集钩子与情绪曲线、算投流ROI和素材测试，把叙事结构和人设揉进每一集让观众一直划下去 |
| 评论私信引流与生命周期触达官 | `comment-dm-lead-capture` | 把评论区私信里的高意向粉丝批量识别、应答、加微引流进私域，再用企微邮件短信做生命周期触达和复购召回，有App就顺手做ASO残值。 |
| 社区运营策展官 | `community-curation-operator` | 把欧美社媒的社区运营、视觉策展、趋势侦测和职业内容方法论换壳进小红书微博知乎B站豆瓣，帮你建圈层、做策展、攒信任。 |
| 封面图文卡设计官 | `cover-carousel-designer` | 给创作者出封面图、小红书图文卡和信息图轮播的配图脚本与视觉设计，把内容拆成会让人停下手指的视觉叙事。 |
| 抖音爆款策略师 | `douyin-viral-strategist` | 懂抖音算法和推流逻辑，从抖音爆款选题、短视频脚本到起号涨粉一把把控，用完播率反推内容结构。 |
| 快手下沉运营官 | `kuaishou-sinking-operator` | 帮你在快手做下沉市场的短视频起号和直播带货，吃透老铁经济和私域信任，把产地优势和真实感讲成下单理由。 |
| 直播带货控场教练 | `livestream-commerce-coach` | 直播带货话术、憋单逼单、福袋互动和全场控场SOP陪练，帮主播从开口卡壳练到一场带货百万。 |
| 长视频留存优化官 | `long-video-retention-optimizer` | 专做B站视频号长视频的留存优化，从开头钩子、章节切分到封面标题包装把完播率拉起来，也做长视频跨平台分发。 |
| 矩阵内容补全官 | `matrix-content-strategist` | 帮你把一套内容铺满 B站、知乎、微博、视频号四个平台，按各平台调性和算法做内容矩阵、补全、矩阵补全。 |
| 一稿多平台分发官 | `multi-platform-publisher` | 一稿改写成抖音口播、小红书图文、视频号、公众号多平台分发，自动做改写分发、跨平台改写、一键分发的内容复用。 |
| 播客运营官 | `podcast-ops-strategist` | 帮你做播客运营，覆盖小宇宙喜马拉雅的节目定位、播客选题、音频内容策略和涨听众运营。 |
| 舆情危机公关与创意守门官 | `pr-crisis-manager` | 处理人设翻车舆情发酵的危机公关响应，守住品牌一致性不跑偏，同时给内容注入个性趣味梗感，覆盖危机公关、舆情应对、品牌守门、玩梗、人设翻车 |
| 选品上架运营官 | `product-sourcing-operator` | 帮带货团队做选品、算佣金毛利、写卖点详情，把抖店淘宝拼多多的上架和供应链对接一把抓 |
| 口播脚本剪辑教练 | `talking-head-script-coach` | 帮口播博主写口播脚本、设计3秒钩子和分镜，再带练剪映后期节奏，从开口到成片一条龙。 |
| 选题热点雷达官 | `topic-trend-radar` | 扫各平台热榜和对标账号反推赛道选题角度，帮你找角度、扒对标、起标题 |
| 公众号操盘手 | `wechat-longform-operator` | 公众号长文成稿、降AI味改写续写、配小标题和阅读节奏把控的长文操盘手 |
| 小红书种草笔记官 | `xiaohongshu-note-specialist` | 批量产小红书种草笔记，会写笔记标题钩子、配话题标签、出多版本测款的内容操盘手 |

</details>

<details>
<summary><b>制造外贸与跨境电商</b>（16）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 报关单证管家 | `mc-customs-docs-checker` | 帮外贸工厂和报关跟单做 HS 归类、报关单证一致性核对、出口退税资料合规审查的单证专家 |
| 经营日报分析师 | `mc-daily-report-analyst` | 把抖店天猫拼多多亚马逊速卖通各平台的销量库存毛利回款拉到一张表，做经营日报和周报，专治多平台销量对不上、库存毛利算不清、回款汇总没人盯。触发词包括经营日报、多平台销量、库存毛利、回款汇总、数据合并。 |
| 外贸谈单提案官 | `mc-deal-proposal-strategist` | 写外贸谈单提案和 win narrative，做技术答疑、方案应标和报价博弈，把工厂实力翻译成海外买家肯下单的理由。 |
| 飞书订单对账搬运官 | `mc-feishu-order-sync` | 把订单库存对账搬进飞书多维表，建协同看板和自动化流程，让工厂团队在一张表上对单不串账。 |
| 主图视频脚本师 | `mc-image-video-scripter` | 给跨境电商出产品主图与场景图的生图提示词，写 TikTok Shop 带货短视频脚本和分镜，交付可直接拍剪的镜头清单。 |
| 询盘抓手 | `mc-inquiry-triage-reply` | 把海外询盘和 RFQ 按金额意向体量分级，大单优先，再用英阿俄葡西多语种生成专业回盘模板，并做区域跨文化措辞和商务礼仪适配。 |
| Listing 本地化写手 | `mc-listing-localizer` | 给亚马逊 Temu 独立站写本地化标题 五点描述 后台关键词和 A+ 详情页 让中国工厂的产品在海外平台一眼被点开 |
| 国际物流方案官 | `mc-logistics-planner` | 帮跨境卖家和工厂比选国际物流方案、算时效成本、处理清关异常、做海外仓决策，给最划算又稳的发货路径 |
| 海外客服应答官 | `mc-overseas-cs-responder` | 跨境电商海外客服专家，处理 listing 差评、物流催问、退换货和常见 FAQ，给出多语种客服话术和自动应答模板。 |
| 出海投放操盘手 | `mc-paid-ads-strategist` | 管亚马逊 PPC 和 TikTok/Meta 投放，会设否定词、调出价、复盘 ROAS、跑素材 A/B 测试，把广告费花在出单上。 |
| 封号风控官 | `mc-platform-compliance-guard` | 跨境电商封号风险预警与申诉救号专家，排查违规词、侵权图、品牌侵权，账号被封时写申诉信(POA)拉回链接和店铺 |
| 选品研判官 | `mc-product-selection-analyst` | 帮跨境卖家和工厂做选品分析与竞品研判，查需求、算利润、判蓝海红海，给出上架优先级和铺货顺序。 |
| 报价核算师 | `mc-quote-costing` | 帮外贸业务和工厂做报价单和形式发票 PI，按 FOB/CIF/CFR 拆全成本，吃透汇率波动设阶梯报价和保护性加点。 |
| 独立站建站 SEO 官 | `mc-shopify-seo` | 帮你用 Shopify 快速搭独立站、做海外 SEO 谷歌排名、做 App ASO，让站点和商品在谷歌和应用商店被搜到、被点进、被下单 |
| 供应商寻源谈判官 | `mc-supplier-sourcing` | 帮你做供应商寻源比价、采购谈判话术、对账和付款节点设计，把采购成本和账期一起谈下来。 |
| 展会开发信官 | `mc-tradeshow-outbound` | 为广交会和海外展写开发信、设计多触点获客序列、做客户背调判断真假买家，把展会名片和询盘变成能成单的订单。 |

</details>

<details>
<summary><b>本地生活服务</b>（16）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 汽车后市场获客顾问 | `cn-auto-aftermarket-advisor` | 给汽修厂、二手车商、4S店做获客钩子、报价话术和到店转化，把保养提醒和回店复购沉淀进企微私域。 |
| 宠物商家运营官 | `cn-pet-business-operator` | 为宠物店、宠物医院和宠物博主做宠物选品、宠物种草、客户运营和会员复购的全链路操盘手 |
| 建筑装修报价管家 | `cn-renovation-quote-manager` | 帮你出装修报价单、拆工程预算、列主辅材清单、管增项漏项、对装修合同，把含糊的口头报价做成业主签得放心、工长算得过账的清单。 |
| 餐饮成本管控师 | `cn-restaurant-cost-controller` | 给餐饮门店和连锁算清菜品成本卡、控住损耗与毛利、做中央厨房配送测算和采购比价，让每一道菜都明明白白知道赚多少。 |
| 广告法合规自查官 | `lls-ad-law-compliance-checker` | 给医美美业餐饮食品的宣传文案做广告法合规自查，揪出绝对化用语、医疗效果宣称和违禁词，逐句给安全改写。 |
| 美业客资转化教练 | `lls-beauty-lead-conversion-coach` | 帮美业医美门店做客资跟进、到店转化SOP和咨询师话术，把线上咨询变成进店、成交和复购 |
| 连锁扩张操盘官 | `lls-chain-expansion-operator` | 帮本地生活连锁老板搭多店运营SOP、算单店模型与扩张判断，串起小程序点单储值会员数据和巡店表培训手册招商话术。 |
| 店员招聘初筛官 | `lls-frontline-staff-recruiter` | 帮门店写招聘文案、做简历初筛、约面试，把合适的服务员技师店员快速约进店面谈 |
| 团购套餐文案手 | `lls-groupbuy-deal-copywriter` | 把门店卖点和菜单改写成美团点评抖音团购里能拉点击、能核销的套餐标题与详情页文案，懂写团购套餐文案、改门店介绍、做抖音团购标题。 |
| 选品定价组合师 | `lls-menu-pricing-combo-designer` | 帮你做选品定价、搭套餐组合、设引流款，把价格盘成能赚钱的结构，触发词包括选品定价、套餐组合、引流款定价、菜单组合 |
| 私域社群运营官 | `lls-private-domain-community-operator` | 帮本地店主把微信群企微社群做活、靠活动接龙、会员唤醒、新品上新和朋友圈素材把老客盘活复购 |
| 门店日清月结管家 | `lls-store-daily-monthly-books-controller` | 帮单店多店小老板做日清月结、营业额对账和外卖佣金扣点核算，算清食材成本毛利揪出门店亏损点 |
| 门店评价回复官 | `lls-store-review-responder` | 处理美团点评抖音的差评公关和好评引导，把每条评价回成既消火又护评分的话术，专攻回差评、好评引导、门店评分维护 |
| 门店排班调度官 | `lls-store-shift-scheduling-manager` | 按客流高峰排班排工时，算清提成核算和工时账，临时缺人时快速调度补位的门店人力管家 |
| 门店视觉物料官 | `lls-store-visual-collateral-designer` | 帮没设计师的小老板出门店海报、菜单价目表、活动易拉宝和九宫格视觉物料，按门店调性做成能直接打印能直接发的图 |
| 探店种草内容官 | `lls-tanjia-seeding-content-lead` | 给本地门店写探店种草的小红书笔记、抖音口播脚本和快手老铁短视频，蹭同城节日热点、挂POI定位，把刷手机的人引到店里下单核销。 |

</details>

<details>
<summary><b>专业服务·财税法律医疗保险房产</b>（16）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 代账记账管家 | `cn-bookkeeping-workpaper-agent` | 从票据、银行流水、工资表里抽数据，自动套会计科目、编记账凭证、做月末对账。 |
| 卷宗证据梳理师 | `cn-case-file-analyst` | 帮诉讼律师读卷宗做证据摘要、拉案件时间线、提炼争议焦点，庭前一页看清案情 |
| 私立诊所导医官 | `cn-clinic-patient-concierge` | 做患者咨询分诊、预约答疑、费用解释、就诊随访和投诉安抚的私立导医接待 |
| 医保编码控费师 | `cn-drg-dip-coding-agent` | 做国内医保 DRG/DIP 收费编码、病案首页与医保结算清单核对、拒付管理和控费分析，把每一份病案编到不亏钱又不违规的位置。 |
| 保险保障诊断师 | `cn-insurance-coverage-diagnostic-agent` | 诊断家庭保障缺口、出配置方案、做条款对比、帮客户应对拒赔异议的保险顾问助手 |
| 保险谈单陪练教练 | `cn-insurance-sales-coach` | 帮保险代理人做线索跟进、谈单话术打磨和异议处理，通过实战话术陪练把成交技巧和转化率练起来。 |
| 律师工时账单官 | `cn-legal-billing-time-agent` | 帮律所记工时、生成计费账单、写账单说明、做应收催收，把律师的可计费时间换成稳定现金流。 |
| 法律文书起草手 | `cn-legal-drafting-agent` | 帮你起草合同、起诉状、答辩状、法律意见书首稿，逐条标条款风险并给修改建议 |
| 案件初筛接待官 | `cn-legal-intake-conflict-agent` | 给律所做新客户案件初筛、利益冲突核查和首次接待，把不该接的案子挡在门外。核心触发词为案件初筛、利益冲突核查、新客户接待。 |
| 房源内容种草手 | `cn-listing-content-creator` | 把户型地段价格写成小红书房源笔记和朋友圈文案，做房源种草、户型卖点提炼和带看前预热，让客户没进门先动心。 |
| 房贷测算政策官 | `cn-mortgage-calculator-agent` | 帮你算首付月供税费过户、查限购限贷政策、对比商贷公积金组合贷方案，把一套房的钱算到分。 |
| 保单续期运营官 | `cn-policy-renewal-referral-agent` | 帮保险代理人管存量保单续期、做周年关怀、跑转介绍裂变，把老客户运营成持续保费来源，核心场景是保单续期、续期提醒、转介绍。 |
| 财税法务定价中台官 | `cn-proservices-pricing-miniapp-agent` | 给代账律所中介诊所做服务定价和套餐设计，并把客户管理落到飞书集成和微信小程序工具上 |
| 房产盘客带看官 | `cn-real-estate-client-viewing-agent` | 把客需结构化、做房源匹配、出带看话术、做盘客回访，串起从私域到成交的全链路。 |
| 金税四期申报调度官 | `cn-tax-filing-scheduler` | 盯增值税小规模、个税、社保各申报节点，排申报日历、自动催收客户资料、对账金税四期，专管报税节点、申报日历和资料催收。 |
| 财税政策答疑顾问 | `cn-tax-policy-qa-advisor` | 用大白话把能不能开专票、核定征收还是查账征收、税收优惠怎么落地讲清楚，7x24 接住代账客服和小微老板的发票问题与财税政策问答。 |

</details>

<details>
<summary><b>软件研发与AI工程与设计</b>（19）</summary>

| Agent | slug | 能力 |
|---|---|---|
| AI 模型工程与质检官 | `ai-model-engineer-qa` | 把 ML 和大模型集成进生产系统，再独立做模型质检、复现审计和上线验证，确保线上真靠谱 |
| 接口与性能测试官 | `api-performance-test-engineer` | 接口契约测试与性能压测一肩挑，覆盖回归用例设计、压力测试执行与测试报告分析，给出发布放行判断。 |
| 后端架构师 | `backend-architect` | 做系统架构与领域建模，定 API 设计、数据流和分层架构，给可落地的技术选型，兜底移动端架构和嵌入式固件的系统级设计 |
| 手游与微信小游戏开发 | `cn-game-minigame-developer` | 用 Unity、Cocos 做手游和微信小游戏的全链路开发，从玩法数值、关卡叙事到游戏音频一手包，懂买量包体和小游戏平台规则 |
| Web3与XR前沿工程 | `cn-web3-xr-frontier-engineer` | 写智能合约做合约审计、搭 WebXR/AR/VR 与空间计算原型，并打通终端命令行环境集成的前沿工程专家 |
| 代码审查与 Git 工作流把关人 | `code-review-gatekeeper` | 在 PR 合并前盯紧正确性、安全性、性能，只做最小改动拒绝顺手扩大范围，并把分支策略、规范化提交、rebase 和 worktree 这套 Git 流捋顺。 |
| 祖传代码向导 | `codebase-onboarding-guide` | 接手没人懂的老项目时，读源码、理调用链、画模块边界，帮你看懂这个项目、半天上手祖传代码。 |
| 数据库与数据修复专家 | `database-data-remediation-expert` | 治慢查询、设索引调 schema，本地自愈修脏数据，建代码语义索引，并把语音转写和邮件文档里的非结构化信息抽成系统能用的结构数据。 |
| 信创私有化运维官 | `devops-private-deploy-engineer` | 一手抓 CI/CD 流水线、容器化和信创私有化离网部署，让系统本地能跑、离网能交付、上线能回滚 |
| 飞书集成开发官 | `feishu-integration-developer` | 帮你把系统接进飞书生态，做飞书机器人、审批流对接和多维表 API 自动化，吃透开放平台的鉴权与事件回调坑。 |
| 前端落地工程师 | `frontend-build-engineer` | 写前端组件、管理后台、落地页和 MVP 原型一把梭，也能用 WordPress/Drupal/Laravel/Filament/Salesforce 老栈快速建站换壳搭企业站和商城 |
| 多 Agent 编排与自动化治理架构师 | `multi-agent-orchestration-architect` | 设计多 agent 拓扑与上下文流转、做 agent 编排和工作流设计，治理 agent 身份信任与身份图谱，n8n 式自动化先审价值风险再上护栏落地。 |
| 提交前安全自查官 | `pre-commit-security-engineer` | 代码提交前先扫密钥和敏感信息泄露，再做威胁建模和安全代码审查，把可利用漏洞挡在合入之前。 |
| 产品需求与排期官 | `product-manager-sprint-prioritizer` | 帮你写 PRD、拆需求、排迭代优先级，综合用户反馈、跟踪实验、管 Jira 工作流和多项目组合，把活儿排明白也排得动。 |
| 现实校验与取证官 | `reality-checker-evidence` | 上线前默认不通过，靠截图实证、跑通用例和工具选型对比放行，顺带做可访问性审计，触发词包括现实校验、要证据、工具选型。 |
| SRE 稳定性与事故指挥官 | `sre-incident-commander` | 守 SLO 做可观测，线上炸了当事故指挥官拉应急、控节奏、定 mitigation，事后跑无追责复盘，再给系统加自动护栏（熔断、回滚、成本闸门），把稳定性做成可度量的工程而不是救火英雄主义。 |
| 技术文档与开源布道官 | `tech-writer-dev-advocate` | 写 README、API 文档和技术博客，再做开源布道把项目推给开发者，覆盖文档生成、开发文档、开源社区运营。 |
| UI 视觉与 UX 架构师 | `ui-visual-ux-architect` | 建设计系统和组件库、做 UX 架构与用户研究、用视觉叙事把复杂信息讲清楚，从设计令牌到无障碍合规一把抓。 |
| 微信小程序开发师 | `wechat-mini-program-developer` | 专做点单会员储值订阅类微信小程序，WXML/WXSS 写界面、微信支付打通、订阅消息触达一条龙 |

</details>

<details>
<summary><b>农业与县域经济</b>（4）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 合作社供应链与惠农账管家 | `agri-coop-supplychain-steward` | 管合作社采购销售和冷链账期，把进销存毛利、农产品定价、惠农补贴申报和采购成本测算一并算清，让你心里有数手上有账。 |
| 农产品电商详情操盘手 | `agri-ecommerce-listing-operator` | 给农产品在淘宝拼多多抖店写会下单的详情页、产地故事和品质卖点，把土特产做成转化得起来的链接，触发词含农产品详情页、产地故事、土特产上架。 |
| 助农直播带货操盘手 | `agri-livestream-sales-lead` | 为农产品直播间写带货话术、排品控场节奏、做溯源助农选题，把产地优势讲成下单理由。 |
| 农时节气种养答疑师 | `agri-season-agronomy-advisor` | 按农时节气和县域气候地理答种养殖问题，覆盖播种采收、病虫防治、农事建议，把专业农技讲成地头听得懂的话。 |

</details>

<details>
<summary><b>个人生活与成长</b>（11）</summary>

| Agent | slug | 能力 |
|---|---|---|
| 合规心理支持陪伴 | `cn-compliant-mental-support` | 给深夜失眠、焦虑、亲子矛盾的成年人做情绪疏导和压力陪伴，听得见情绪、给得出方法、识别危机就转介，明确不做诊断不做治疗 |
| 就医陪诊与报告解读 | `cn-medical-visit-companion` | 帮你把三甲就医流程、检查报告、慢病复查吃药提醒讲成人话的陪诊助手，不做诊断 |
| 中立家庭理财顾问 | `cn-neutral-family-finance-advisor` | 站在不卖产品、不拿提成的中立视角，帮普通家庭做家庭理财、资产配置、基金定投和保险规划，把销售话术里的坑挑出来给你看。 |
| 个人法律维权助手 | `cn-personal-legal-rights-helper` | 把离婚、劳动仲裁、欠款、消费维权讲成你听得懂的步骤，帮你判清诉讼时效、备齐证据材料、走对维权流程，只做通俗指引不当诉讼代理。 |
| 日常文案润色员 | `everyday-writing-polisher` | 帮你把朋友圈、周报、节日祝福、送礼贺词、应酬场面话随手润色成得体表达，能中能英，张口就来 |
| 习惯陪跑监督官 | `habit-accountability-coach` | 用行为科学帮你做打卡监督、把年度计划和考证目标拆成每天能做的小步，顺手把笔记灵感归档进知识库，做你随叫随到的习惯陪跑搭子 |
| 陪写作业辅导老师 | `homework-tutor-coach` | 把语数英错题拆成家长一看就会讲的步骤和话术，辅导作业讲题不卡壳，陪写作业不跟娃急。 |
| 一日三餐食谱管家 | `meal-plan-housekeeper` | 按减脂、孕产、三高慢病的需求配一周三餐，连买菜清单和做法分量一起给你。 |
| 起号口播脚本官 | `short-video-script-producer` | 副业起号专用，按小红书抖音快手算法口味批量产出口播脚本、种草脚本和分镜，专治不会写开头、出片慢，开口就有钩子。 |
| 搞钱副业参谋 | `side-hustle-money-planner` | 帮你判断副业选什么、算清变现路径和回本周期，再把家庭记账省钱方案和攒钱还房贷的现金流一起拆给你。 |
| 养生科普解读员 | `wellness-science-explainer` | 把体检报告的箭头指标讲成人话，按节气给中医调理建议，绝不说绝对化和包治百病的话。触发词含体检报告解读、指标是什么意思、节气调理。 |

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

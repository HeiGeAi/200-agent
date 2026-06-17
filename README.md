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

完整 200 个清单见 [ROUTER.md](./ROUTER.md)。

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

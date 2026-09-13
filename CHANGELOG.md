# Changelog

## [0.2.1] - 2026-09-13

### 修复

- 构建器:README / README.en.md 的 AGENT-LIST 标记不成对时报错退出,不再静默漂移。
- `npm test` 先自动构建 dist/,全新克隆直接跑测试不再 ENOENT。
- 校验器:落地格式硬检查(值禁半角冒号+空格、name 与文件名一致、slug 必须 kebab-case、触发词禁逗号/竖线),移除 merged_from 必填死代码。
- 校验器:对账 README 手工维护的 14 域数量表。
- 测试:版本断言改为对照根 package.json,发版 bump 不再误报。

### 安全

- 安装器:逐级检查目标路径祖先目录的符号链接。
- 安装器:files 模式逐文件复制前重查符号链接,收窄 TOCTOU 窗口;staging 改 mktemp + trap 自动清理;源目录无产物时给出可读报错。
- CI:注明 skills-ref 安装的信任边界;新增构建产物漂移守门。

### 文档

- 归档过期的架构设计-v2.md 至 docs/archive/ 并标注历史背景。
- SCHEMA.md 标注必填字段并与校验器 REQUIRED 对齐。

## [0.2.0] - 2026-08-03

### 新功能

- 新增符合 Agent Skills 规范的根入口 `SKILL.md`，按需路由并加载 200 个专家 playbook。
- 构建标准可移植 Skill 包，同时保留 Claude Code、Codex 与 OpenClaw 旧版适配产物。
- 安装器新增通用、Claude Skills、Codex Skills 与 CodeBuddy Skills 目标。

### 安全与兼容

- 标准 Skill 安装使用临时目录与原子替换，冲突时默认拒绝写入。
- 新增四类 Skill 目录沙箱安装、强制替换边界及完整包结构测试。
- CI 增加 Agent Skills 官方 `skills-ref` 规范校验。

## [0.1.1] - 2026-07-31

- 安装前预检同名 agent，默认拒绝冲突且不写入任何文件。
- 需要覆盖时必须显式追加 `--force`。
- 即使使用 `--force`，仍拒绝目标文件、agent 目录或工具目录 symlink。
- 新增安装回归测试、CI 门禁与私密安全报告入口。

# Changelog

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

#!/usr/bin/env bash
# 安装标准 Skill 或旧版客户端适配产物。用法: bash scripts/install.sh [target] [--force]
set -euo pipefail
cd "$(dirname "$0")/.."

[ -d dist ] || { echo "未发现 dist/,先运行: npm run build"; exit 1; }
TARGET="${1:-standard}"
OPTION="${2:-}"
[ -z "${3:-}" ] || { echo "参数过多"; exit 1; }
[ -z "$OPTION" ] || [ "$OPTION" = "--force" ] || { echo "未知选项: $OPTION"; exit 1; }

MODE="skill"
case "$TARGET" in
  standard)
    SRC="dist/agent-skills/200-agent"
    DEST="$HOME/.agents/skills/200-agent"
    ;;
  claude-skill)
    SRC="dist/agent-skills/200-agent"
    DEST="$HOME/.claude/skills/200-agent"
    ;;
  codex-skill)
    SRC="dist/agent-skills/200-agent"
    DEST="$HOME/.codex/skills/200-agent"
    ;;
  codebuddy)
    SRC="dist/agent-skills/200-agent"
    DEST="$HOME/.codebuddy/skills/200-agent"
    ;;
  claude-code)
    MODE="files"
    SRC="dist/claude-code/agents"
    DEST="$HOME/.claude/agents"
    ;;
  codex)
    MODE="files"
    SRC="dist/codex/prompts"
    DEST="$HOME/.codex/prompts"
    ;;
  openclaw)
    MODE="files"
    SRC="dist/openclaw/agents"
    DEST="$HOME/.openclaw/agents"
    ;;
  *)
    echo "未知目标: $TARGET" >&2
    echo "支持: standard | claude-skill | codex-skill | codebuddy | claude-code | codex | openclaw" >&2
    exit 1
    ;;
esac

TOOL_HOME="${DEST%/*}"
if [ -L "$TOOL_HOME" ] || [ -L "$DEST" ]; then
  echo "拒绝写入符号链接目录: $DEST" >&2
  exit 1
fi

# 逐级上溯检查 DEST 的祖先目录,防止中间层是指向外部的符号链接($HOME 本身除外)
ANCESTOR="$TOOL_HOME"
while [ -n "$ANCESTOR" ] && [ "$ANCESTOR" != "$HOME" ] && [ "$ANCESTOR" != "/" ]; do
  if [ -L "$ANCESTOR" ]; then
    echo "拒绝写入符号链接目录: $ANCESTOR" >&2
    exit 1
  fi
  PREV="$ANCESTOR"
  ANCESTOR="${ANCESTOR%/*}"
  [ "$ANCESTOR" != "$PREV" ] || break
done

SOURCE_PARENT="${SRC%/*}"
SOURCE_ROOT="${SOURCE_PARENT%/*}"
if [ -L "$SOURCE_ROOT" ] || [ -L "$SOURCE_PARENT" ] || [ -L "$SRC" ]; then
  echo "拒绝从符号链接源目录复制: $SRC" >&2
  exit 1
fi

if [ "$MODE" = "skill" ]; then
  [ -f "$SRC/SKILL.md" ] || { echo "未发现标准 Skill 产物:$SRC/SKILL.md" >&2; exit 1; }
  if find "$SRC" -type l -print -quit | grep -q .; then
    echo "拒绝复制含符号链接的 Skill:$SRC" >&2
    exit 1
  fi
  if [ -e "$DEST" ] && [ "$OPTION" != "--force" ]; then
    echo "检测到同名 Skill:$DEST" >&2
    echo "未写入任何文件。确认替换时请追加 --force。" >&2
    exit 1
  fi

  mkdir -p "$TOOL_HOME"
  STAGE="${DEST}.tmp.$$"
  mkdir "$STAGE"
  cp -R "$SRC"/. "$STAGE"/
  if [ -e "$DEST" ]; then
    BACKUP="${DEST}.backup.$$"
    mv "$DEST" "$BACKUP"
    if mv "$STAGE" "$DEST"; then
      rm -rf "$BACKUP"
    else
      mv "$BACKUP" "$DEST"
      exit 1
    fi
  else
    mv "$STAGE" "$DEST"
  fi
  echo "已安装标准 200 Agent Skill 到 $DEST"
  exit 0
fi

for SOURCE in "$SRC"/*.md; do
  if [ -L "$SOURCE" ]; then
    echo "拒绝从符号链接源文件复制: $SOURCE" >&2
    exit 1
  fi
done

if [ -d "$DEST" ]; then
  for SOURCE in "$SRC"/*.md; do
    TARGET_PATH="$DEST/${SOURCE##*/}"
    if [ -L "$TARGET_PATH" ]; then
      echo "拒绝写入符号链接: $TARGET_PATH" >&2
      exit 1
    fi
    if [ "$OPTION" != "--force" ] && [ -e "$TARGET_PATH" ]; then
      echo "检测到同名文件冲突: $DEST/${SOURCE##*/}" >&2
      echo "未写入任何文件。确认覆盖时请追加 --force。" >&2
      exit 1
    fi
  done
fi

mkdir -p "$DEST"
# 逐文件复制并在写入前重新做符号链接检查,收窄预检与写入之间的 TOCTOU 窗口
for SOURCE in "$SRC"/*.md; do
  TARGET_PATH="$DEST/${SOURCE##*/}"
  if [ -L "$TARGET_PATH" ]; then
    echo "拒绝写入符号链接: $TARGET_PATH" >&2
    exit 1
  fi
  cp -v "$SOURCE" "$TARGET_PATH"
done
echo "已安装 200 agent 旧版适配产物到 $DEST"

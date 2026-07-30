#!/usr/bin/env bash
# 把构建产物安装到对应工具目录。用法: bash scripts/install.sh [claude-code|codex|openclaw] [--force]
set -euo pipefail
cd "$(dirname "$0")/.."

[ -d dist ] || { echo "未发现 dist/,先运行: npm run build"; exit 1; }
TARGET="${1:-claude-code}"
OPTION="${2:-}"
[ -z "${3:-}" ] || { echo "参数过多"; exit 1; }
[ -z "$OPTION" ] || [ "$OPTION" = "--force" ] || { echo "未知选项: $OPTION"; exit 1; }

case "$TARGET" in
  claude-code)
    SRC="dist/claude-code/agents"
    DEST="$HOME/.claude/agents"
    ;;
  codex)
    SRC="dist/codex/prompts"
    DEST="$HOME/.codex/prompts"
    ;;
  openclaw)
    SRC="dist/openclaw/agents"
    DEST="$HOME/.openclaw/agents"
    ;;
  *)
    echo "未知目标: $TARGET (支持 claude-code | codex | openclaw)"; exit 1 ;;
esac

if [ "$OPTION" != "--force" ] && [ -d "$DEST" ]; then
  for SOURCE in "$SRC"/*.md; do
    if [ -e "$DEST/${SOURCE##*/}" ]; then
      echo "检测到同名文件冲突: $DEST/${SOURCE##*/}" >&2
      echo "未写入任何文件。确认覆盖时请追加 --force。" >&2
      exit 1
    fi
  done
fi

mkdir -p "$DEST"
cp -v "$SRC"/*.md "$DEST"/
echo "已安装 200 agent 到 $DEST"

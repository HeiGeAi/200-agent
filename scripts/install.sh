#!/usr/bin/env bash
# 把构建产物安装到对应工具目录。用法: bash scripts/install.sh [claude-code|codex|openclaw]
set -euo pipefail
cd "$(dirname "$0")/.."

[ -d dist ] || { echo "未发现 dist/,先运行: npm run build"; exit 1; }
TARGET="${1:-claude-code}"

case "$TARGET" in
  claude-code)
    DEST="$HOME/.claude/agents"
    mkdir -p "$DEST"
    cp -v dist/claude-code/agents/*.md "$DEST"/
    echo "已安装 200 agent 到 $DEST"
    ;;
  codex)
    DEST="$HOME/.codex/prompts"
    mkdir -p "$DEST"
    cp -v dist/codex/prompts/*.md "$DEST"/
    echo "已安装到 $DEST,用 /<slug> 调用"
    ;;
  openclaw)
    DEST="$HOME/.openclaw/agents"
    mkdir -p "$DEST"
    cp -v dist/openclaw/agents/*.md "$DEST"/
    echo "已安装到 $DEST"
    ;;
  *)
    echo "未知目标: $TARGET (支持 claude-code | codex | openclaw)"; exit 1 ;;
esac

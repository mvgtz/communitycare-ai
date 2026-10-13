#!/bin/zsh
cd "$(dirname "$0")"
CC_NODE_BIN="$(command -v node)"
if [[ -z "$CC_NODE_BIN" ]]; then
  CC_NODE_BIN='/Users/marianavaldez/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node'
fi
if [[ ! -x "$CC_NODE_BIN" ]]; then
  echo 'Install Node.js and follow the setup instructions in README.md.'
  read -r '?Press Return to close.'
  exit 1
fi
if [[ ! -f out/index.html ]]; then
  echo 'Build the app first. See README.md: pnpm install, then pnpm run build.'
  read -r '?Press Return to close.'
  exit 1
fi
echo 'Open http://127.0.0.1:3000 in your browser. Keep this window open while using the app.'
"$CC_NODE_BIN" scripts/serve.mjs

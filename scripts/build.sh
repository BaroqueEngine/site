#!/usr/bin/env bash
# public/ と games.txt に並んだ各ゲームのビルド結果を _site/ にまとめる。
#
# CI: GAMES_TOKEN を設定して実行すると、各リポジトリの release ブランチを clone してビルドする。
# ローカル: LOCAL_GAMES_DIR=.. を設定すると、隣にある作業コピーをそのままビルドする。
set -euo pipefail

cd "$(dirname "$0")/.."

OWNER="BaroqueEngine"
REF="${GAMES_REF:-release}"
OUT="_site"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

rm -rf "$OUT"
cp -r public "$OUT"

grep -vE '^\s*(#|$)' games.txt | while read -r game; do
  echo "::group::$game"
  if [ -n "${LOCAL_GAMES_DIR:-}" ]; then
    src="$LOCAL_GAMES_DIR/$game"
  else
    src="$WORK/$game"
    git clone --depth 1 --branch "$REF" \
      "https://x-access-token:${GAMES_TOKEN:?GAMES_TOKEN is not set}@github.com/$OWNER/$game.git" "$src"
  fi
  (cd "$src" && npm ci && npm run build)
  cp -r "$src/dist" "$OUT/$game"
  echo "::endgroup::"
done

echo "Built site into $OUT/"

#!/usr/bin/env bash
# Public GitHub repo + GitHub Pages so anyone with the link can view (no login).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
GH="${GH:-gh}"
REPO_NAME="${1:-opus-website-demo}"

if ! "$GH" auth status >/dev/null 2>&1; then
  echo "Run: gh auth login"
  exit 1
fi

OWNER="$("$GH" api user -q .login)"
FULL="$OWNER/$REPO_NAME"

if ! "$GH" repo view "$FULL" >/dev/null 2>&1; then
  "$GH" repo create "$REPO_NAME" --public --source=. --remote=origin --push \
    --description "OPUS website proposal demo (public Pages)"
else
  "$GH" repo edit "$FULL" --visibility public --accept-visibility-change-consequences
  git push -u origin main
fi

"$GH" api -X POST "/repos/$FULL/pages" \
  -f build_type=legacy \
  -f 'source[branch]=main' \
  -f 'source[path]=/' 2>/dev/null \
  || "$GH" api -X PUT "/repos/$FULL/pages" \
  -f build_type=legacy \
  -f 'source[branch]=main' \
  -f 'source[path]=/'

PAGES_URL="https://$OWNER.github.io/$REPO_NAME/"
echo ""
echo "Live demo (no login): $PAGES_URL#home"
echo "Notes mode: ${PAGES_URL}#notes"
echo "Repo is public so Pages can be shared openly. Source code is visible on GitHub."

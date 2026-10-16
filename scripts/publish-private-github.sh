#!/usr/bin/env bash
# Create or update a private GitHub repo for this demo.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
GH="${GH:-gh}"
if ! command -v "$GH" >/dev/null 2>&1; then
  echo "Install GitHub CLI: brew install gh && gh auth login"
  exit 1
fi
if ! "$GH" auth status >/dev/null 2>&1; then
  echo "Run: gh auth login"
  exit 1
fi
REPO_NAME="${1:-opus-website-demo}"
if "$GH" repo view "$REPO_NAME" >/dev/null 2>&1; then
  echo "Remote repo exists; pushing main..."
  git push -u origin main
else
  "$GH" repo create "$REPO_NAME" --private --source=. --remote=origin --push --description "OPUS website proposal demo (private)"
  echo "Created private repo: $("$GH" repo view "$REPO_NAME" --json url -q .url)"
fi
echo ""
echo "Privacy: repo is private. Add viewers under GitHub → Settings → Collaborators."
echo "Optional Pages: Settings → Pages → branch main, folder / (site visible only to repo collaborators)."

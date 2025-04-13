#!/bin/bash

# ⚠️ Make sure to make this file executable
# chmod +x commit.sh

# Stage all changes
git add .

# Prompt for commit message using VSCode
echo "🤖 Commit message: " >&2
read -e COMMIT_MESSAGE

# Commit changes with the provided message
git commit -m "New commit: $COMMIT_MESSAGE"
echo "New commit message added ✨"

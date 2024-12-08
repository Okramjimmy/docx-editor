#!/bin/bash

# Check if a commit message is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <commit-message>"
  exit 1
fi

# Display the git status
echo "Checking the status..."
git status

# Stage all changes
echo "Staging all changes..."
git add .

# Commit changes with the provided commit message
echo "Committing changes..."
git commit -m "$1"

# Push changes to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "Done!"


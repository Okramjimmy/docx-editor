#!/bin/bash

# Function to handle errors
handle_error() {
  echo "Error on line $1. Exiting."
  exit 1
}

# Enable error handling
set -e

echo "Checking the status... and pulling the update and merging..."

# Stage changes
echo "Staging changes..."
git add . || handle_error $LINENO

# Commit changes
echo "Committing changes..."
git commit -m "local commit changes before merging" || handle_error $LINENO

# Pull changes with rebase
echo "Pulling changes from the remote repository..."
git pull origin main --rebase || handle_error $LINENO

echo "Merging done..."

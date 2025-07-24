#!/bin/bash

set -e

# Function to display error and exit
function error_exit {
    echo "❌ Error: $1"
    exit 1
}

echo "📦 Cloning GamerLab repository..."
git clone https://github.com/phantomtax-ai/GamerLab.git || error_exit "Failed to clone repository. Please check the URL or your internet connection."
cd GamerLab || error_exit "Failed to enter the GamerLab directory. Repository may not have cloned correctly."

echo "🔧 Installing dependencies with npm..."
command -v npm >/dev/null 2>&1 || error_exit "npm is not installed. Please install Node.js and npm before proceeding."
npm install || error_exit "npm installation failed. Please check the project’s package.json for issues."

echo "✅ Installation complete. You're ready to go!"

#!/bin/bash

# Stop on error
set -e

echo "Detected Environment Issue: You are using Windows Node.js inside WSL."
echo "Installing Linux native Node.js to fix 'UNC path' and 'cmd.exe' errors..."

# 1. Update package lists
echo "Updating package lists..."
sudo apt-get update

# 2. Install curl if missing
if ! command -v curl &> /dev/null; then
    echo "Installing curl..."
    sudo apt-get install -y curl
fi

# 3. Setup NodeSource repository for Node.js 20.x (LTS)
echo "Setting up NodeSource repository..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# 4. Install Node.js
echo "Installing Node.js..."
sudo apt-get install -y nodejs

# 5. Verify installation
echo "Verifying installation..."
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

echo "--------------------------------------------------------"
echo "✅ Node.js installed successfully in WSL!"
echo "You can now go to the frontend directory and run:"
echo "  cd frontend"
echo "  npm install"
echo "  npm run dev"
echo "--------------------------------------------------------"

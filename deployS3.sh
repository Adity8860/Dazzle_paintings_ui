#!/bin/bash

# Set variables
REPO_URL="git@github.com:Adity8860/Dazzle_paintings_ui.git"
PROJECT_DIR="Dazzle_paintings_ui"  # Change to your project folder name
BUCKET_NAME="dazzle-painting"
DISTRIBUTION_ID="E36EK1PNW20MZ3"

# Clone the latest version from GitHub
if [ -d "$PROJECT_DIR" ]; then
    echo "🔄 Pulling latest changes from GitHub..."
    cd $PROJECT_DIR
    git pull origin main
else
    echo "⬇️ Cloning repository..."
    git clone $REPO_URL $PROJECT_DIR
    cd $PROJECT_DIR
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install  # Change if using Yarn or another package manager

# Build the project
echo "⚙️ Building the project..."
npm run build  # For React/Vite
# ng build --configuration=production  # For Angular

# Deploy build to S3
echo "🚀 Uploading files to S3..."
aws s3 sync ./dist s3://$BUCKET_NAME --delete

# Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "✅ Deployment completed successfully!"

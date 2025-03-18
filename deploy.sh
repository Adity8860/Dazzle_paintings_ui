#!/bin/bash

# Define source and destination directories
SOURCE_DIR="./dist"
DEST_DIR="/usr/share/nginx/html"

# Check if the source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory '$SOURCE_DIR' does not exist!"
    exit 1
fi

# Remove existing files in the destination directory (optional)
sudo rm -rf "$DEST_DIR"/*

# Copy files to the destination
sudo cp -r "$SOURCE_DIR"/* "$DEST_DIR/"

# Set correct permissions (optional)
sudo chmod -R 755 "$DEST_DIR"

# Restart NGINX to apply changes (optional)
sudo systemctl restart nginx

echo "Deployment complete!"

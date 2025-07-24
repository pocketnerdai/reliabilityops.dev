#!/bin/bash

echo "🚀 Setting up Standalone Sanity Studio for ReliabilityOps"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}This script will help you create a standalone Sanity Studio${NC}"
echo "It will create a new folder OUTSIDE of your current project"
echo ""
read -p "Press Enter to continue..."

# Get the parent directory
PARENT_DIR=$(dirname "$PWD")
STUDIO_DIR="$PARENT_DIR/studio-reliabilityops"

echo ""
echo -e "${GREEN}Step 1: Creating Sanity Studio${NC}"
echo "Location: $STUDIO_DIR"
echo ""

# Change to parent directory
cd "$PARENT_DIR"

# Create the studio with existing project ID
echo "Creating studio with your existing project ID: 1xy15psx"
npm create sanity@latest -- \
  --project 1xy15psx \
  --dataset production \
  --template clean \
  --typescript \
  --output-path ./studio-reliabilityops

# Check if studio was created
if [ -d "$STUDIO_DIR" ]; then
    echo ""
    echo -e "${GREEN}✅ Studio created successfully!${NC}"
    
    # Copy schemas
    echo ""
    echo -e "${GREEN}Step 2: Copying your schemas${NC}"
    
    # Create schemas directory if it doesn't exist
    mkdir -p "$STUDIO_DIR/schemas"
    
    # Copy all schema files
    cp -r "$PWD/reliabilityops.dev/src/sanity/schemaTypes/"* "$STUDIO_DIR/schemas/"
    
    echo "✅ Schemas copied!"
    
    echo ""
    echo -e "${GREEN}Step 3: Next steps${NC}"
    echo "1. cd $STUDIO_DIR"
    echo "2. npm run dev (to test locally)"
    echo "3. npm run deploy (to deploy to Sanity)"
    echo ""
    echo "Your studio will be available at: https://1xy15psx.sanity.studio"
else
    echo ""
    echo "❌ Studio creation failed. Please run the command manually:"
    echo "npm create sanity@latest"
fi
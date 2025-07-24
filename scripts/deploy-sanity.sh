#!/bin/bash

echo "🚀 Deploying Sanity Studio Configuration"
echo "Project ID: 1xy15psx"
echo ""

# Deploy the studio configuration
echo "📦 Deploying schemas to Sanity..."
npx sanity deploy --no-browse

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🎉 Your studio is now available at:"
echo "   https://1xy15psx.sanity.studio"
echo ""
echo "📝 Next steps:"
echo "1. Visit the studio URL above"
echo "2. Log in with your Sanity account"
echo "3. Start creating content!"
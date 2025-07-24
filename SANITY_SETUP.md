# Sanity CMS Setup Guide

## Quick Setup (Recommended)

### Option 1: Create Project via Sanity.io Website

1. **Go to Sanity.io**
   - Visit [https://www.sanity.io/manage](https://www.sanity.io/manage)
   - Log in with your account

2. **Create New Project**
   - Click "Create new project"
   - Name it "ReliabilityOps" 
   - Select the free plan
   - Note down the **Project ID** that's generated

3. **Update Your Configuration**
   Run the setup script:
   ```bash
   node scripts/init-sanity.js
   ```
   Choose option 2 and enter your project ID.

### Option 2: Initialize via CLI

Run this command in your project root:
```bash
npx sanity@latest init
```

When prompted:
- Project name: `ReliabilityOps`
- Use default dataset: `Yes` (production)
- Project output path: Press enter (current directory)
- Schema: Select "Clean project"

## Manual Configuration

If you prefer to update manually:

1. **Update `.env`**:
   ```
   PUBLIC_SANITY_PROJECT_ID=your-project-id-here
   PUBLIC_SANITY_DATASET=production
   ```

2. **Update `astro.config.mjs`**:
   - Change `projectId: '1xy15psx'` to your actual project ID

3. **Update `sanity.config.ts`**:
   - Change `projectId: '1xy15psx'` to your actual project ID

4. **Update `src/pages/studio.astro`**:
   - Change the redirect URL to `https://YOUR-PROJECT-ID.sanity.studio`

## Verify Setup

1. **Check API Connection**:
   Visit: `https://reliabilityops.dev/api/sanity-test.json`

2. **Access Studio**:
   - Via redirect: `https://reliabilityops.dev/studio`
   - Direct: `https://YOUR-PROJECT-ID.sanity.studio`

## Add Environment Variables to Cloudflare

In your Cloudflare Pages dashboard:
1. Go to Settings → Environment variables
2. Add:
   - `PUBLIC_SANITY_PROJECT_ID` = your-project-id
   - `PUBLIC_SANITY_DATASET` = production

## Troubleshooting

- **"Studio not found"**: Project ID doesn't exist - create project first
- **"Unauthorized"**: Check your environment variables
- **Build errors**: Run `npm run build` after configuration changes
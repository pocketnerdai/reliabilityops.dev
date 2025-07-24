# Create Standalone Sanity Studio

This guide will help you create a proper standalone Sanity Studio for ReliabilityOps.

## Step 1: Create the Studio

**Go to your parent directory** (outside of reliabilityops.dev):

```bash
cd ..
```

**Create a new Sanity Studio**:

```bash
npm create sanity@latest -- --project 1xy15psx --dataset production
```

When prompted:
- Project name: `ReliabilityOps Studio` (or similar)
- Use TypeScript: `Yes`
- Package manager: Your preference (npm/yarn/pnpm)
- Project template: `Clean project with no predefined schemas`
- Project output path: `./studio-reliabilityops` (or your preferred name)

## Step 2: Copy Your Schemas

After the studio is created:

```bash
cd studio-reliabilityops
```

Copy the schemas we already created:

```bash
# Copy schema files
cp -r ../reliabilityops.dev/src/sanity/schemaTypes/* ./schemas/

# Update the imports in schema/index.ts to match the new structure
```

## Step 3: Deploy the Studio

```bash
npm run deploy
```

When prompted for studio hostname, you can:
- Press enter to accept default (1xy15psx)
- Or choose a custom name

## Step 4: Update Your Astro Site

Your Astro site at reliabilityops.dev is already configured to fetch from project ID `1xy15psx`, so it will automatically work with your new studio!

## Directory Structure

You'll end up with:
```
├── reliabilityops.dev/      # Your Astro website
└── studio-reliabilityops/   # Your Sanity Studio
```

## Benefits of This Approach

✅ Cleaner separation of concerns
✅ Easier to manage and deploy
✅ Studio updates don't affect your site
✅ Follows Sanity best practices
✅ No SSR issues with Cloudflare

## Access Your Content

- **Studio**: https://1xy15psx.sanity.studio
- **Website**: https://reliabilityops.dev

Your website will automatically fetch content from Sanity!
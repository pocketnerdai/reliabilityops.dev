# Deploy Your Sanity Studio

Your Sanity project already exists! Now we just need to deploy the schemas.

## Quick Deploy (One Command)

Run this in your terminal:

```bash
npm run sanity:deploy
```

Or:

```bash
npx sanity deploy
```

## What This Does

1. Uploads your content schemas (blog posts, authors, etc.)
2. Configures your studio interface
3. Makes everything ready to use

## After Deployment

1. **Access Your Studio**
   - Go to: https://1xy15psx.sanity.studio
   - Log in with your Sanity account

2. **Start Creating Content**
   - Click on "Posts" to create blog posts
   - Add authors, categories, etc.

3. **Your Site Will Automatically Use the Content**
   - The blog pages are already configured to fetch from Sanity
   - Just create content and it will appear!

## Troubleshooting

If you get any errors:

- **"Not authenticated"**: Run `npx sanity login` first
- **"Dataset not found"**: The deploy command will create it automatically
- **"Project not found"**: Make sure you're logged into the right account

## That's It!

No initialization needed - just deploy and start using your studio!
# Sanity Deployment Steps

Now that we have all the necessary files, follow these steps:

## 1. Login to Sanity (if not already logged in)

```bash
npx sanity login
```

Choose your preferred login method (Google, GitHub, or Email).

## 2. Deploy the Studio

```bash
npx sanity deploy
```

When prompted:
- Studio hostname: Press enter to use default (1xy15psx)
- Or choose a custom name if you prefer

## 3. Access Your Studio

After deployment, your studio will be available at:
- https://1xy15psx.sanity.studio (default)
- Or https://YOUR-CUSTOM-NAME.sanity.studio (if you chose a custom name)

## 4. Create Your First Content

1. Go to your studio URL
2. You'll see all your content types:
   - Posts (for blog posts)
   - Authors
   - Categories
   - Case Studies
   - Tools

3. Start by creating:
   - An Author (you!)
   - A Category or two
   - Your first blog post

## Troubleshooting

If deployment fails:

### "Dataset not found"
The deploy command should create it automatically, but if not:
```bash
npx sanity dataset create production
```

### "Not authorized"
Make sure you're logged into the correct account that owns project ID `1xy15psx`

### Build Errors
If you get TypeScript errors, they can usually be ignored for deployment.

## Success!

Once deployed and you've created some content, your blog at https://reliabilityops.dev/blog will automatically show your Sanity content!
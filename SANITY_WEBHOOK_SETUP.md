# Sanity Webhook Setup for Auto-Deployment

## 1. Get your Cloudflare Pages Deploy Hook URL

1. Go to your Cloudflare Pages project
2. Settings → Builds & deployments → Deploy hooks
3. Click "Add deploy hook"
4. Name it "Sanity CMS Update"
5. Copy the webhook URL

## 2. Add Webhook to Sanity

1. Go to https://www.sanity.io/manage
2. Select your project (1xy15psx)
3. Go to API → Webhooks
4. Click "Create webhook"
5. Configure:
   - **Name**: Deploy to Cloudflare Pages
   - **URL**: [Paste your Cloudflare deploy hook URL]
   - **Trigger on**: Create, Update, Delete
   - **Filter**: Leave empty to trigger on all content changes
   - **HTTP method**: POST
6. Save the webhook

## 3. How it Works

Now when you:
- Publish a new blog post
- Update existing content
- Delete content

Sanity will automatically trigger a new deployment on Cloudflare Pages!

## Alternative: Real-time Updates (No Deploy Needed)

Since you're using SSR (server-side rendering), your site already fetches fresh content on each request. The blog page should show new posts immediately without redeployment.

If it's not updating, you might need to:
1. Clear Cloudflare cache
2. Add cache headers to prevent stale content

## Cache Control for Fresh Content

Add this to your blog pages:

```astro
---
// In your blog index.astro
Astro.response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
---
```

This ensures visitors always see the latest content from Sanity.
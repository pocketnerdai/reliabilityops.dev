# Scheduled Publishing & Cache Management Setup

## What's Already Done ✅

1. **Date Filtering**: Posts with future `publishedAt` dates are now hidden until their time arrives
2. **Smart Caching**: Blog pages cache for 5 minutes (instead of no-cache)
3. **Cache Purge API**: Webhook endpoint at `/api/purge-cache` to clear cache on demand

## Three Ways to Handle Scheduled Publishing

### Option 1: Manual Cache Refresh (Simplest)
When a scheduled post's time arrives:
1. Go to Cloudflare dashboard → Caching → Configuration
2. Click "Purge Everything" or purge specific URLs
3. Your scheduled posts will appear

**Pros**: No setup needed
**Cons**: Manual process

### Option 2: Sanity Webhook + Cloudflare (Recommended)

#### Step 1: Get Cloudflare API Credentials
1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Create token with "Zone:Cache Purge" permission
3. Copy your Zone ID from domain overview page

#### Step 2: Add Environment Variables to Cloudflare Pages
```
CLOUDFLARE_API_TOKEN=your-api-token
CLOUDFLARE_ZONE_ID=your-zone-id
SANITY_WEBHOOK_SECRET=generate-a-random-secret
```

#### Step 3: Configure Sanity Webhook
1. Go to https://www.sanity.io/manage → Your Project → API → Webhooks
2. Create new webhook:
   - **Name**: Cache Purge
   - **URL**: https://reliabilityops.dev/api/purge-cache
   - **Trigger on**: Create, Update, Delete
   - **HTTP Headers**: Add `sanity-webhook-signature: your-secret`
   - **Filter** (for posts only): `_type == "post"`

Now when you publish/update content, cache auto-clears!

### Option 3: External Cron Service (For True Scheduling)

Since Cloudflare doesn't have built-in cron, use an external service:

#### Using GitHub Actions (Free)
Create `.github/workflows/scheduled-publish.yml`:
```yaml
name: Check Scheduled Posts
on:
  schedule:
    - cron: '*/15 * * * *' # Every 15 minutes
  workflow_dispatch: # Manual trigger

jobs:
  purge-cache:
    runs-on: ubuntu-latest
    steps:
      - name: Purge Cloudflare Cache
        run: |
          curl -X POST https://reliabilityops.dev/api/purge-cache \
            -H "sanity-webhook-signature: ${{ secrets.SANITY_WEBHOOK_SECRET }}"
```

#### Using Cron-job.org (Free)
1. Sign up at https://cron-job.org
2. Create new cron job:
   - **URL**: https://reliabilityops.dev/api/purge-cache
   - **Schedule**: Every 15 minutes
   - **HTTP Method**: POST
   - **HTTP Headers**: `sanity-webhook-signature: your-secret`

#### Using Cloudflare Workers Cron (Paid - Business plan)
```javascript
// If you upgrade to Cloudflare Business plan
export default {
  async scheduled(event, env, ctx) {
    await fetch('https://reliabilityops.dev/api/purge-cache', {
      method: 'POST',
      headers: {
        'sanity-webhook-signature': env.SANITY_WEBHOOK_SECRET
      }
    });
  },
};
```

## How Scheduled Publishing Works Now

1. **Create Post**: Set `publishedAt` to future date/time
2. **Post Hidden**: Won't appear on site until that time
3. **Time Arrives**: Post is ready but cache needs clearing
4. **Cache Clears**: Via webhook, cron, or manual purge
5. **Post Appears**: Visitors see the new content

## Quick Manual Refresh Options

1. **Cloudflare Dashboard**: Caching → Configuration → Purge Everything
2. **Using cURL**:
```bash
curl -X POST https://api.cloudflare.com/client/v4/zones/YOUR_ZONE_ID/purge_cache \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'
```
3. **Via Webhook**:
```bash
curl -X POST https://reliabilityops.dev/api/purge-cache \
  -H "sanity-webhook-signature: your-secret"
```

## Recommendation

Start with **Option 2** (Sanity Webhook). It gives you:
- Instant updates when you publish
- No manual work for immediate posts
- Only scheduled posts need manual/cron refresh

Then add **Option 3** (Cron) if you frequently use scheduled posts.
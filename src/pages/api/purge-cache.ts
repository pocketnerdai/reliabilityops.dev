import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  // Verify webhook secret (set this in environment variables)
  const webhookSecret = import.meta.env.SANITY_WEBHOOK_SECRET;
  const signature = request.headers.get('sanity-webhook-signature');
  
  // Basic security check
  if (webhookSecret && signature !== webhookSecret) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    // Parse the webhook payload
    const payload = await request.json();
    
    // Cloudflare API credentials (set in environment variables)
    const zoneId = import.meta.env.CLOUDFLARE_ZONE_ID;
    const apiToken = import.meta.env.CLOUDFLARE_API_TOKEN;
    
    if (!zoneId || !apiToken) {
      console.log('Cache purge skipped - Cloudflare credentials not configured');
      return new Response('OK - Cache purge skipped', { status: 200 });
    }

    // Purge specific URLs based on the content type
    const urlsToPurge = ['https://reliabilityops.dev/blog/'];
    
    // If it's a specific post update, also purge that post's URL
    if (payload._type === 'post' && payload.slug?.current) {
      urlsToPurge.push(`https://reliabilityops.dev/blog/${payload.slug.current}/`);
    }

    // Purge Cloudflare cache
    const purgeResponse = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ files: urlsToPurge }),
      }
    );

    if (!purgeResponse.ok) {
      throw new Error(`Cloudflare API error: ${purgeResponse.status}`);
    }

    console.log('Cache purged successfully for:', urlsToPurge);
    return new Response('Cache purged', { status: 200 });
    
  } catch (error) {
    console.error('Cache purge error:', error);
    return new Response('Error purging cache', { status: 500 });
  }
};
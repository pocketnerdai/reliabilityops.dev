# Sanity CMS Integration

This site uses Sanity as a headless CMS for content management.

## Architecture

- **Website**: ReliabilityOps.dev (this repository) - Astro static site
- **Studio**: Standalone Sanity Studio (separate repository) - Content management

## Studio Access

- **Direct URL**: https://1xy15psx.sanity.studio
- **Site Redirect**: https://reliabilityops.dev/studio

## Content Structure

The Sanity project includes these content types:
- **Posts**: Blog articles with rich text content
- **Authors**: Content creator profiles
- **Categories**: Content organization
- **Case Studies**: Client success stories
- **Tools**: AIOps utilities documentation

## Development

### Local Development
```bash
npm run dev
# Site runs at http://localhost:4321
```

### Environment Variables
Required in `.env` and Cloudflare Pages:
```
PUBLIC_SANITY_PROJECT_ID=1xy15psx
PUBLIC_SANITY_DATASET=production
```

### CORS Origins
These origins must be added in Sanity project settings:
- https://reliabilityops.dev
- https://reliabilityops-dev.pages.dev
- http://localhost:4321

## How It Works

1. Content editors use the Sanity Studio to create/edit content
2. The Astro site fetches content via Sanity's API
3. Pages are statically generated at build time
4. Content updates trigger rebuilds via webhooks (optional)

## File Structure

```
src/
├── sanity/
│   └── lib/
│       ├── client.ts    # Sanity client configuration
│       ├── queries.ts   # GROQ queries
│       └── image.ts     # Image URL builder
└── pages/
    ├── blog/
    │   ├── index-sanity.astro  # Blog listing (Sanity)
    │   └── [slug].astro        # Individual posts (Sanity)
    └── studio.astro            # Redirect to external studio
```

## Testing

- **API Status**: https://reliabilityops.dev/api/sanity-test.json
- **Test Page**: https://reliabilityops.dev/test-sanity

## Deployment

The site automatically deploys via Cloudflare Pages when changes are pushed to the main branch. Content changes in Sanity are reflected after the next build.
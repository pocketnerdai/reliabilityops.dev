# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production to ./dist/
npm run preview      # Preview production build locally

# Deployment (automatic on push to main)
git push origin main # Triggers Cloudflare Pages deployment
```

## Project Architecture

### Technology Stack
- **Framework**: Astro 5.x with SSR (Server-Side Rendering)
- **Deployment**: Cloudflare Pages with Workers (edge computing)
- **CMS**: Sanity (headless) - project ID: 1xy15psx
- **Styling**: Tailwind CSS with custom dark theme
- **Content**: Hybrid approach - local Markdown and Sanity CMS

### Critical Integration Points

1. **Sanity CMS Integration**
   - Client config: `src/sanity/lib/client.ts`
   - GROQ queries: `src/sanity/lib/queries.ts`
   - Image handling: `src/sanity/lib/image.ts`
   - Studio URL: https://1xy15psx.sanity.studio
   - Site redirect: `/studio` → Sanity Studio

2. **Cloudflare Workers Compatibility**
   - Many Node.js libraries incompatible with Workers runtime
   - React SSR removed due to MessageChannel issues
   - Use `set:html` carefully - can cause runtime errors
   - Always test builds before deploying

3. **Content Rendering**
   - Blog posts use custom Portable Text renderer in `src/pages/blog/[slug].astro`
   - Handles: paragraphs, headings, lists, images, links, code blocks
   - Images require asset._ref to exist
   - List items must be grouped (bullet/number)

### Environment Variables

```bash
# Required for Sanity
PUBLIC_SANITY_PROJECT_ID=1xy15psx
PUBLIC_SANITY_DATASET=production

# Optional (for previews)
SANITY_API_READ_TOKEN=

# Cache purging webhook
SANITY_WEBHOOK_SECRET=
CLOUDFLARE_ZONE_ID=
CLOUDFLARE_API_TOKEN=
```

### Key Routes and Their Purpose

- `/` - Homepage with hero, services, testimonials
- `/blog` - Blog listing (fetches from Sanity)
- `/blog/[slug]` - Individual blog posts (Sanity content)
- `/services` - Service offerings
- `/about` - About page
- `/contact` - Contact form
- `/ai-lab` - AI tools showcase
- `/tools/yaml-validator` - YAML validation tool
- `/api/purge-cache` - Webhook endpoint for cache invalidation
- `/api/sanity-status` - Health check for Sanity integration

### Cache Management

1. **Cache Headers**
   - Blog posts: `Cache-Control: public, max-age=3600, stale-while-revalidate=300`
   - Blog index: Currently no-cache for debugging
   
2. **Cache Purging**
   - Webhook from Sanity triggers `/api/purge-cache`
   - Requires `SANITY_WEBHOOK_SECRET` for authentication
   - Purges specific URLs based on content type

### Common Issues and Solutions

1. **Blog posts show blank content**
   - Check Portable Text renderer for unhandled block types
   - Verify image blocks have asset._ref
   - Look for console errors in rendering

2. **500 errors on Cloudflare**
   - Usually library incompatibility with Workers
   - Check for React SSR usage (removed)
   - Wrap renders in try-catch blocks

3. **Blog list requires refresh**
   - SSR cache issue - check cache headers
   - May need CDN-Cache-Control headers

### Deployment Flow

1. **Main Site** (reliabilityops.dev)
   - Push to `main` branch → Auto-deploy via Cloudflare Pages
   - Build command: `npm run build`
   - Output directory: `dist`

2. **Sanity Studio** (studio-reliabilityops)
   - Separate repo with GitHub Actions
   - Auto-deploys on push to main
   - Webhook notifies main site of content changes

### Testing Approach

Currently no automated tests. Manual testing process:
1. Run `npm run build` to check for build errors
2. Test locally with `npm run dev`
3. Preview production build with `npm run preview`
4. Deploy and verify on Cloudflare Pages

### Performance Considerations

- Images optimized with Sharp during build
- Fonts preloaded (Atkinson)
- GROQ queries limit fields for efficiency
- Edge computing via Cloudflare Workers
- CDN caching for static assets

### Content Structure

1. **Local Content** (`src/content/blog/`)
   - Legacy blog posts in Markdown
   - Not actively used (migrated to Sanity)

2. **Sanity Content Types**
   - `post`: Blog articles with Portable Text body
   - `author`: Content creators
   - `category`: Content categorization
   - `caseStudy`: Client success stories
   - `tool`: AI/Ops tools documentation

### Portable Text Rendering

The custom renderer in `src/pages/blog/[slug].astro` handles:
- Block types: normal, h1-h4, blockquote
- List items: bullet, number (with grouping)
- Marks: strong, em, code, links
- Images: with error handling for missing assets
- Code blocks: with syntax highlighting

Always wrap rendering in try-catch to prevent 500 errors.
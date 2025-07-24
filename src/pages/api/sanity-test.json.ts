import type { APIRoute } from 'astro';
import { client } from '../../sanity/lib/client';

export const GET: APIRoute = async () => {
  try {
    // Test basic queries
    const [posts, authors, categories, tools, caseStudies] = await Promise.all([
      client.fetch(`count(*[_type == "post"])`),
      client.fetch(`count(*[_type == "author"])`),
      client.fetch(`count(*[_type == "category"])`),
      client.fetch(`count(*[_type == "tool"])`),
      client.fetch(`count(*[_type == "caseStudy"])`),
    ]);

    return new Response(
      JSON.stringify({
        success: true,
        counts: {
          posts,
          authors,
          categories,
          tools,
          caseStudies,
        },
        studio: {
          url: 'https://reliabilityops.dev/studio',
          alternativeUrl: 'https://reliabilityops-dev.pages.dev/studio',
        }
      }, null, 2),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        studio: {
          url: 'https://reliabilityops.dev/studio',
          alternativeUrl: 'https://reliabilityops-dev.pages.dev/studio',
          help: 'Please visit the Studio URL to set up your content',
        }
      }, null, 2),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
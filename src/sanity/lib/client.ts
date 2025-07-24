import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-24',
  useCdn: true,
  // Only include token if it exists (for preview mode)
  token: import.meta.env.SANITY_API_READ_TOKEN,
});
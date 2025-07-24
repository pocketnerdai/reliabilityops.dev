import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'reliabilityops',
  title: 'ReliabilityOps Content',
  
  projectId: '1xy15psx',
  dataset: 'production',
  
  plugins: [
    structureTool(),
    visionTool() // Useful for testing GROQ queries
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  // Studio configuration
  basePath: '/studio',
});
import { author } from './author';
import { post } from './post';
import { category } from './category';
import { blockContent } from './blockContent';
import { caseStudy } from './caseStudy';
import { tool } from './tool';

export const schemaTypes = [
  // Document types
  post,
  author,
  category,
  caseStudy,
  tool,
  // Object types
  blockContent,
];
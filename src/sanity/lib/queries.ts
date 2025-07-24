import groq from 'groq';

// Post queries
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "author": author->name,
    "categories": categories[]->title,
    heroImage
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    body,
    heroImage,
    "author": author->{
      name,
      bio,
      image,
      social
    },
    "categories": categories[]->{
      title,
      slug,
      color
    },
    seo
  }
`;

export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "author": author->name,
    "categories": categories[]->title,
    heroImage
  }
`;

// Case Study queries
export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    logo,
    industry,
    challenge,
    results,
    technologies,
    publishedAt,
    featured
  }
`;

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    logo,
    industry,
    challenge,
    solution,
    results,
    technologies,
    testimonial,
    publishedAt
  }
`;

// Tool queries
export const toolsQuery = groq`
  *[_type == "tool" && active == true] | order(order asc, title asc) {
    _id,
    title,
    slug,
    description,
    icon,
    category,
    features,
    externalUrl,
    githubUrl
  }
`;

export const toolBySlugQuery = groq`
  *[_type == "tool" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    icon,
    category,
    features,
    howToUse,
    codeExample,
    externalUrl,
    githubUrl
  }
`;

// Category queries
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color
  }
`;

// Author queries
export const authorsQuery = groq`
  *[_type == "author"] {
    _id,
    name,
    slug,
    image,
    bio,
    social
  }
`;
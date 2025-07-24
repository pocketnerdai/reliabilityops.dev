import { defineField, defineType } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Client Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 4,
      description: 'Brief description of the problem',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'blockContent',
      description: 'Detailed explanation of the solution',
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'metric', type: 'string', title: 'Metric'},
          {name: 'value', type: 'string', title: 'Value'},
          {name: 'description', type: 'string', title: 'Description'},
        ],
      }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        {name: 'quote', type: 'text', title: 'Quote'},
        {name: 'author', type: 'string', title: 'Author Name'},
        {name: 'role', type: 'string', title: 'Author Role'},
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Case Study',
      type: 'boolean',
      description: 'Feature this case study on the homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'logo',
    },
    prepare(selection) {
      const {title, client} = selection;
      return {
        ...selection,
        subtitle: client,
      };
    },
  },
});
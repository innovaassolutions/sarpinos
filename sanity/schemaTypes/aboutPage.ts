import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'ℹ️ About Us Page',
  type: 'document',
  description: 'Tell your brand story and what makes you special',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Heading',
      type: 'string',
      description: 'The main heading at the top of your About page',
      placeholder: 'About Sarpino\'s Pizza',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: '✍️ Opening Paragraph',
      type: 'text',
      description: 'A brief intro that hooks readers - who you are and what you do',
      placeholder: 'Welcome to Sarpino\'s Pizza, where authentic Italian flavors meet Singapore...',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'headerImage',
      title: '📸 Top Banner Image',
      type: 'image',
      description: 'Eye-catching image for the About page (Recommended: 1200x600px)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ourStory',
      title: '📖 Your Full Story',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Tell your complete story here. You can use bold, italics, headings, and lists.',
    }),
    defineField({
      name: 'values',
      title: '⭐ What You Stand For',
      type: 'array',
      description: 'Your core values or what makes you different (Quality, Service, Authenticity, etc.)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'valueTitle',
              title: 'Value Name',
              type: 'string',
              placeholder: 'Quality Ingredients',
            },
            {
              name: 'valueDescription',
              title: 'Why It Matters',
              type: 'text',
              rows: 3,
              placeholder: 'We source only the freshest ingredients...',
            },
          ],
          preview: {
            select: {
              title: 'valueTitle',
              subtitle: 'valueDescription',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
      media: 'headerImage',
    },
  },
})

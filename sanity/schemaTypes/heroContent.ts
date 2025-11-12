import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroContent',
  title: '🏠 Homepage Banner',
  type: 'document',
  description: 'The big banner section at the top of your homepage',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Headline',
      type: 'string',
      description: 'The big text visitors see first - make it catchy!',
      placeholder: 'Fresh. Authentic. Delicious.',
      validation: (Rule) => Rule.required().max(60).warning('Keep it short and punchy'),
    }),
    defineField({
      name: 'subtitle',
      title: 'Supporting Text',
      type: 'string',
      description: 'Smaller text that appears below the headline',
      placeholder: 'Experience authentic Italian pizza crafted with passion',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'backgroundImage',
      title: '📸 Background Image',
      type: 'image',
      description: 'Large hero image (use high quality! Recommended: 1920x1080px)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: '🔘 Button Text',
      type: 'string',
      description: 'What should the button say?',
      placeholder: 'Order Now',
      validation: (Rule) => Rule.required().max(20),
    }),
    defineField({
      name: 'ctaLink',
      title: 'Button Destination',
      type: 'string',
      description: 'Where does the button take customers? (page name like "order.html" or full URL)',
      placeholder: 'order.html',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'backgroundImage',
    },
  },
})

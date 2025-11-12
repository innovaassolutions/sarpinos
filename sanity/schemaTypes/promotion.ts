import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'promotion',
  title: '🎯 Promotion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Promotion Name',
      type: 'string',
      description: 'Give this promotion a name (only you will see this)',
      placeholder: '2-for-1 Pizza Deal - March 2025',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: '📸 Promotion Banner',
      type: 'image',
      description: 'Upload your promotion image. Make it eye-catching!',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Image Description',
      type: 'string',
      description: 'Briefly describe what\'s in the image (helps with accessibility)',
      placeholder: 'Buy one pizza get one free promotion banner',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: '🔗 Click Destination',
      type: 'url',
      description: 'Where should customers go when they click this promotion?',
      placeholder: 'https://order.sarpinos.com.sg/promotion',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'size',
      title: '📐 Size on Website',
      type: 'string',
      description: 'How big should this appear?',
      options: {
        list: [
          {title: '⬜ Large (takes full width)', value: 'large'},
          {title: '◽ Medium (half width)', value: 'medium'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'large',
    }),
    defineField({
      name: 'order',
      title: '🔢 Display Order',
      type: 'number',
      description: 'What position should this appear? (1 = first, 2 = second, etc.)',
      placeholder: 1,
      validation: (Rule) => Rule.required().min(1).integer(),
      initialValue: 1,
    }),
    defineField({
      name: 'active',
      title: '✅ Show on Website',
      type: 'boolean',
      description: 'Turn this OFF to hide the promotion without deleting it',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      order: 'order',
      active: 'active',
    },
    prepare(selection) {
      const {title, media, order, active} = selection
      return {
        title: title,
        subtitle: `Order: ${order} • ${active ? 'Active' : 'Inactive'}`,
        media: media,
      }
    },
  },
})

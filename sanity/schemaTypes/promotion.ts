import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'promotion',
  title: 'Promotion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal title for this promotion',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Promotion Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Describe the image for accessibility',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link URL',
      type: 'url',
      description: 'Where this promotion should link to',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Display Size',
      type: 'string',
      options: {
        list: [
          {title: 'Large', value: 'large'},
          {title: 'Medium', value: 'medium'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Show this promotion on the website',
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

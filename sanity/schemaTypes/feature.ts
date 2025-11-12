import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feature',
  title: '⭐ Feature',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'What Makes You Special',
      type: 'string',
      description: 'Highlight one of your unique selling points',
      placeholder: 'Fresh Dough Made Daily',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'description',
      title: 'Explain Why It Matters',
      type: 'text',
      rows: 3,
      description: 'Tell customers why this feature is important',
      placeholder: 'Our dough is handmade fresh every morning using authentic Italian recipes...',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'icon',
      title: '🎨 Icon or Image',
      type: 'image',
      description: 'Optional visual to represent this feature (small icon works best)',
    }),
    defineField({
      name: 'order',
      title: '🔢 Display Order',
      type: 'number',
      description: 'Position on the page (1 = first, 2 = second, etc.)',
      placeholder: 1,
      validation: (Rule) => Rule.required().min(1).integer(),
      initialValue: 1,
    }),
    defineField({
      name: 'active',
      title: '✅ Show on Website',
      type: 'boolean',
      description: 'Turn OFF to hide without deleting',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      order: 'order',
      active: 'active',
    },
    prepare(selection) {
      const {title, subtitle, order, active} = selection
      return {
        title: title,
        subtitle: `Order: ${order} • ${active ? 'Active' : 'Inactive'}`,
      }
    },
  },
})

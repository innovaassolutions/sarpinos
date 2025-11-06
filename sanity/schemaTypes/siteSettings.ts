import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Main phone number for orders',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderLink',
      title: 'Order Now Link',
      type: 'url',
      description: 'URL for online ordering',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Main Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'paymentMethods',
      title: 'Payment Methods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Payment Method Name',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'halalCertified',
      title: 'Halal Certified',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'halalBadge',
      title: 'Halal Badge Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'phoneNumber',
    },
  },
})

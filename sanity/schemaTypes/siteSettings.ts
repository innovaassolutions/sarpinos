import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: '⚙️ Website Settings',
  type: 'document',
  description: 'Global settings that appear throughout your website',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Website Name',
      type: 'string',
      description: 'The name of your restaurant (appears in browser tabs and search results)',
      placeholder: 'Sarpino\'s Pizza Singapore',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phoneNumber',
      title: '📞 Main Phone Number',
      type: 'string',
      description: 'This number appears in the header and throughout the site',
      placeholder: '+65 1234 5678',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderLink',
      title: '🛒 Online Ordering Link',
      type: 'url',
      description: 'Where customers go when they click "Order Now" buttons',
      placeholder: 'https://order.sarpinos.com.sg',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: '🎨 Main Logo (Header)',
      type: 'image',
      description: 'Your logo that appears at the top of every page. Recommended size: 200x80px',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerLogo',
      title: '🎨 Footer Logo',
      type: 'image',
      description: 'Logo shown at the bottom of pages. Can be the same as main logo or different.',
    }),
    defineField({
      name: 'socialMedia',
      title: '📱 Social Media Links',
      type: 'object',
      description: 'Your social media profiles - leave blank if you don\'t use that platform',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
          placeholder: 'https://instagram.com/sarpinos',
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
          placeholder: 'https://facebook.com/sarpinos',
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
          placeholder: 'https://youtube.com/@sarpinos',
        },
      ],
    }),
    defineField({
      name: 'paymentMethods',
      title: '💳 Accepted Payment Methods',
      type: 'array',
      description: 'Add logos of payment methods you accept (Visa, Mastercard, PayPal, etc.)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              placeholder: 'Visa',
            },
            {
              name: 'icon',
              title: 'Logo',
              type: 'image',
            },
          ],
          preview: {
            select: {
              title: 'name',
              media: 'icon',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'halalCertified',
      title: '✅ Halal Certified',
      type: 'boolean',
      description: 'Turn this on to display the Halal badge on your website',
      initialValue: true,
    }),
    defineField({
      name: 'halalBadge',
      title: 'Halal Certification Badge',
      type: 'image',
      description: 'Upload your official Halal certification logo',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'phoneNumber',
    },
  },
})

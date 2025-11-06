import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        list: [
          {title: 'East, North East', value: 'east-north-east'},
          {title: 'Central Areas', value: 'central'},
          {title: 'West', value: 'west'},
          {title: 'North', value: 'north'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'operatingHours',
      title: 'Operating Hours',
      type: 'string',
      description: 'e.g. "Open 10am - 10pm daily"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Optional phone number for this location',
    }),
    defineField({
      name: 'mapIcon',
      title: 'Map Icon',
      type: 'image',
      description: 'Screenshot of the location on a map',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order within the region (lower numbers appear first)',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Show this location on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'address',
      region: 'region',
      active: 'active',
    },
    prepare(selection) {
      const {title, subtitle, region, active} = selection
      return {
        title: title,
        subtitle: `${region} • ${active ? 'Active' : 'Inactive'}`,
      }
    },
  },
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: '📍 Restaurant Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      description: 'Name of this restaurant location',
      placeholder: 'Sarpino\'s Marina Bay',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: '🏢 Full Address',
      type: 'text',
      rows: 2,
      placeholder: '123 Marina Boulevard\n#01-45 Marina Bay\nSingapore 018936',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'region',
      title: '🗺️ Area of Singapore',
      type: 'string',
      description: 'Which region is this location in?',
      options: {
        list: [
          {title: '🌅 East & North East', value: 'east-north-east'},
          {title: '🏙️ Central', value: 'central'},
          {title: '🌆 West', value: 'west'},
          {title: '🌲 North', value: 'north'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'operatingHours',
      title: '🕐 Opening Hours',
      type: 'string',
      description: 'When are you open?',
      placeholder: 'Open 10am - 10pm daily',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: '📞 Phone Number',
      type: 'string',
      description: 'Contact number for THIS location (optional if same as main number)',
      placeholder: '+65 6123 4567',
    }),
    defineField({
      name: 'mapIcon',
      title: '🗺️ Map Preview',
      type: 'image',
      description: 'Screenshot showing this location on a map (optional but helpful)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: '🔢 Display Order',
      type: 'number',
      description: 'Position within your region (1 = first, 2 = second, etc.)',
      placeholder: 1,
      validation: (Rule) => Rule.required().min(1).integer(),
      initialValue: 1,
    }),
    defineField({
      name: 'active',
      title: '✅ Show on Website',
      type: 'boolean',
      description: 'Turn OFF to hide this location temporarily',
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

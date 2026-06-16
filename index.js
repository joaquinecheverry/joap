import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'column',
      title: 'Column',
      type: 'string',
      options: {
        list: [
          { title: 'Web Design', value: '1' },
          { title: 'Graphic Design', value: '2' },
          { title: 'Multimedia', value: '3' },
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'images',
      title: 'Images / Videos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true }
        },
        {
          type: 'file',
          title: 'Video',
          options: { accept: 'video/*' },
          fields: [
            defineField({
              name: 'mediaType',
              title: 'Media Type',
              type: 'string',
              initialValue: 'video',
              hidden: true,
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'order',
      title: 'Order (lower = higher up)',
      type: 'number',
      initialValue: 0
    }),
  ]
})

export default [project]

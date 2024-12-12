import type { CollectionConfig } from 'payload'

export const Relation: CollectionConfig = {
  slug: 'relation',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'relation',
      type: 'relationship',
      relationTo: 'join',
    },
  ],
}

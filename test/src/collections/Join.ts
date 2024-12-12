import { CollectionConfig } from 'payload'

export const Join: CollectionConfig = {
  slug: 'join',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'noAccess',
      type: 'text',
      access: {
        read: ({ req: { user } }) => Boolean(user?.id),
      },
    },
    {
      name: 'join',
      type: 'join',
      collection: 'relation',
      on: 'relation',
      access: {
        read: ({ req: { user } }) => Boolean(user?.id),
      },
    },
  ],
}

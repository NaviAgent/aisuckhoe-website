import type { CollectionConfig } from 'payload'

export const MediaWithPrefix: CollectionConfig = {
  slug: 'media-with-prefix',
  access: {
    admin({ req }) {
      return false
    },
  },
  upload: {
    disableLocalStorage: false,
  },
  fields: [],
}

import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '2m2lkhvo',
  dataset: 'production',
  apiVersion: `1`,
  useCdn: true,
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})
const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}
import { getBlogPosts } from '@/components/mdx/utils' // Ensure this path is correct
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const baseUrl = process.env.NEXT_PUBLIC_URL;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: post.metadata.publishedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}

import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://grifn.dev';

  const servicePages = [
    'web-design-cebu',
    'web-development-philippines',
    'ecommerce-philippines',
    'seo-cebu',
    'ui-ux-design',
    'mobile-optimization',
  ];

  const blogSlugs = getAllSlugs();

  return [
    // Core pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Service pages
    ...servicePages.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Portfolio pages
    {
      url: `${baseUrl}/portfolio/cebu-artisan-collective`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/mactan-logistics-pro`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/metro-cebu-real-estate`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Blog posts
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}

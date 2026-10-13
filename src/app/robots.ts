import type { MetadataRoute } from 'next';
import { deployment } from '@/lib/deployment.mjs';
export default function robots(): MetadataRoute.Robots { return deployment.isPublic ? { rules: { userAgent: '*', allow: '/' }, sitemap: `${deployment.siteUrl}/sitemap.xml` } : { rules: { userAgent: '*', disallow: '/' } }; }

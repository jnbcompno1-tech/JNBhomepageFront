import type { MetadataRoute } from 'next';
import { navigation } from '@/data/site';
import { deployment } from '@/lib/deployment.mjs';
export default function sitemap(): MetadataRoute.Sitemap { return deployment.isPublic ? navigation.map(item => ({ url: new URL(item.href, deployment.siteUrl).href })) : []; }

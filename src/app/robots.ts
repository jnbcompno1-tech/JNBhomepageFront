import type { MetadataRoute } from 'next';
import { deployment } from '@/lib/deployment.mjs';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', ...(deployment.isPublic ? { allow: '/' } : { disallow: '/' }) } }; }

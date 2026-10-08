import { deployment } from './src/lib/deployment.mjs';
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return deployment.isPublic ? [] : [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }] }];
  },
};
export default nextConfig;

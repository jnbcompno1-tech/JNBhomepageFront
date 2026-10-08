export const officialUrl = 'https://www.jnbcompany.co.kr';
export function deploymentConfig(env) {
  const isPublic = env.SITE_PUBLIC === 'true' && env.VERCEL_ENV !== 'preview' && env.NODE_ENV === 'production';
  const deploymentUrl = env.VERCEL_URL ? `https://${env.VERCEL_URL}` : 'http://localhost:3000';
  const siteUrl = isPublic ? env.SITE_URL || officialUrl : deploymentUrl;
  const parsed = new URL(siteUrl);
  if (!['https:', 'http:'].includes(parsed.protocol)) throw new Error('SITE_URL must be an HTTP(S) URL');
  return { isPublic, deploymentUrl, siteUrl, officialUrl };
}
export const deployment = deploymentConfig(process.env);

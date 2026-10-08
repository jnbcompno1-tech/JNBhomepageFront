import { test } from 'node:test';
import assert from 'node:assert/strict';
import { deploymentConfig, officialUrl } from '../src/lib/deployment.mjs';
test('test deployments never use the unconnected official domain or permit indexing', () => {
  const config = deploymentConfig({ VERCEL_URL: 'jnb-test.vercel.app' });
  assert.equal(config.isPublic, false);
  assert.equal(config.siteUrl, 'https://jnb-test.vercel.app');
  assert.equal(deploymentConfig({ SITE_PUBLIC: 'true', VERCEL_ENV: 'preview', NODE_ENV: 'production' }).isPublic, false);
});
test('explicit production release switches to official domain', () => {
  assert.equal(deploymentConfig({ SITE_PUBLIC: 'true', NODE_ENV: 'production' }).siteUrl, officialUrl);
  assert.throws(() => deploymentConfig({ SITE_PUBLIC: 'true', NODE_ENV: 'production', SITE_URL: 'javascript:alert(1)' }));
});

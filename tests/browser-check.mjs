import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.CHECK_URL || 'http://localhost:3000';
const browser = await chromium.launch({ channel: 'msedge' });
const results = [];
await mkdir('output/screenshots', { recursive: true });
try {
  for (const width of [360, 768, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const route of ['/', '/about', '/services', '/portfolio', '/contact']) {
      const response = await page.goto(base + route, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, route);
      assert.equal((await page.reload({ waitUntil: 'networkidle' })).status(), 200, `${route} reload`);
      assert.match(await page.locator('meta[name=robots]').getAttribute('content'), /noindex/);
      assert.match(response.headers()['x-robots-tag'], /noindex/);
      assert.equal(await page.locator('h1').count(), 1);
      if (route === '/') {
        assert.equal(await page.getByRole('link', { name: '수행 업무 보기' }).count(), 3);
        await page.getByRole('link', { name: '수행 업무 보기' }).first().click();
        await page.waitForURL(base + '/portfolio#medical-equipment');
        await page.getByRole('heading', { name: '의료기기용 태블릿·부품 및 장비' }).waitFor();
        await page.goto(base + route, { waitUntil: 'networkidle' });
      }
      if (route === '/portfolio') {
        assert.equal(await page.locator('main article').count(), 5);
        assert.equal(await page.locator('main article li').count(), 31);
        await page.getByText('외형 케이스 사출 견적', { exact: true }).waitFor();
        await page.getByText('신규 거치대 디자인 콘셉트 제안', { exact: true }).waitFor();
        await page.getByText('광케이블 제조업체 샘플 개발', { exact: true }).waitFor();
        assert.doesNotMatch(await page.locator('main').innerText(), /아이에스엠|새온|신가몰|아림사이언스|이편한자동화기술|사례 자료 정리 중/);
      }
      if (route === '/services') {
        await page.getByRole('term').filter({ hasText: '목업제작' }).waitFor();
        await page.getByRole('term').filter({ hasText: '커넥터·케이블' }).waitFor();
        assert.equal(await page.locator('#design ol li').count(), 6);
      }
      if (route === '/contact') {
        await page.getByRole('link', { name: '위치 안내 보기' }).click();
        await page.waitForURL(base + '/contact#location');
        assert.equal(await page.locator('#location address').innerText(), '대전광역시 유성구 배울1로 277, 3동');
        const mapLink = page.getByRole('link', { name: 'Google 지도에서 보기' });
        const mapUrl = new URL(await mapLink.getAttribute('href'));
        assert.equal(mapUrl.hostname, 'www.google.com');
        assert.equal(mapUrl.searchParams.get('query'), '대전광역시 유성구 배울1로 277');
        const map = page.locator('iframe[title="제이앤비컴퍼니 사무실 위치 지도"]');
        const embedUrl = new URL(await map.getAttribute('src'));
        assert.equal(embedUrl.searchParams.get('q'), mapUrl.searchParams.get('query'));
        assert.equal(embedUrl.searchParams.get('output'), 'embed');
        assert.equal(await page.getByRole('link', { name: '방문 문의 010-4657-3241' }).getAttribute('href'), 'tel:010-4657-3241');
      }
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${route} overflow at ${width}`);
      for (const image of await page.locator('img').all()) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate(element => element.decode());
      }
      assert.equal(await page.locator('img').evaluateAll(images => images.every(image => image.complete && image.naturalWidth > 0)), true);
      await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
      if (width === 360) {
        const toggle = page.getByRole('button', { name: '메뉴 열기' });
        await toggle.focus();
        await page.keyboard.press('Enter');
        await page.keyboard.press('Escape');
        assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
        assert.equal(await toggle.evaluate(element => element === document.activeElement), true);
        await toggle.click();
        await page.getByRole('navigation', { name: '주 메뉴', exact: true }).getByRole('link', { name: '회사소개', exact: true }).click();
        assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
        await page.goto(base + route, { waitUntil: 'networkidle' });
      }
      await page.screenshot({ path: `output/screenshots/${width}-${route === '/' ? 'home' : route.slice(1)}.png`, fullPage: true });
      results.push({ width, route, status: 'pass' });
    }
    const missing = await page.goto(base + '/missing-page-check');
    assert.equal(missing.status(), 404);
    await page.getByRole('link', { name: '홈으로 이동' }).click();
    await page.waitForURL(base + '/');
    await page.reload();
    assert.equal(new URL(page.url()).pathname, '/');
    assert.deepEqual(errors, []);
    const mail = await page.locator('footer a[href^="mailto:"]').first().getAttribute('href');
    assert.equal(mail, 'mailto:comdj@naver.com');
    await page.close();
  }
  const response = await fetch(base + '/robots.txt');
  assert.match(await response.text(), /Disallow: \//);
  await writeFile('output/browser-results.json', JSON.stringify({ base, results }, null, 2));
  console.log(`${results.length} route/viewport checks passed; menu, Escape, focus, 404, images, noindex and robots verified.`);
} finally { await browser.close(); }

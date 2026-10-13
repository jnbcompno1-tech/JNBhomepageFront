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
        const search = page.locator('#component-search');
        const query = page.getByLabel('부품명·종류 검색');
        assert.equal(await search.locator('li').count(), 11);
        await query.fill('거리센서');
        assert.equal(await search.locator('li').count(), 1);
        const partEmail = new URL(await search.getByRole('link', { name: '이 품목 이메일 문의' }).getAttribute('href'));
        assert.match(partEmail.searchParams.get('body'), /광학 센서 · 거리 센서/);
        await query.fill('DISPLAY');
        assert.equal(await search.locator('li').count(), 1);
        await search.getByRole('button', { name: '전원', exact: true }).click();
        assert.equal(await search.locator('li').count(), 0);
        await search.getByRole('heading', { name: '등록된 자료에서 찾지 못했습니다.' }).waitFor();
        await search.getByRole('button', { name: '전체 품목 보기' }).click();
        assert.equal(await search.locator('li').count(), 11);
        await query.fill('미등록 ABC#123');
        const missingEmail = new URL(await search.getByRole('link', { name: '찾는 부품 이메일 문의' }).getAttribute('href'));
        assert.match(missingEmail.searchParams.get('body'), /미등록 ABC#123/);
        await search.getByRole('button', { name: '검색어 지우기' }).click();
        assert.equal(await search.locator('li').count(), 11);
        assert.equal(await page.getByRole('link', { name: '부품·원가 상담하기' }).getAttribute('href'), '/contact');
        await page.getByRole('heading', { name: '기존 부품의 원가 개선', exact: true }).waitFor();
        await page.getByRole('img', { name: 'JNB 취급 소형 DC 모터의 실물 사진' }).waitFor();
        assert.equal(await page.locator('main figure').count(), 4);
        await page.getByRole('img', { name: '태블릿 위탁 개발·양산 관련 제품 사진' }).waitFor();
        await page.getByRole('img', { name: '센서와 전원 부품을 공급한 교육용 코딩 제품의 구성도' }).waitFor();
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
        assert.equal(await page.getByRole('link', { name: '전화로 상담하기' }).getAttribute('href'), 'tel:010-4657-3241');
        const inquiryUrl = new URL(await page.getByRole('link', { name: '상담 내용 작성하기' }).getAttribute('href'));
        assert.equal(inquiryUrl.protocol, 'mailto:');
        assert.equal(inquiryUrl.pathname, 'comdj@naver.com');
        assert.equal(inquiryUrl.searchParams.get('subject'), 'JNB 부품 공급 상담');
        assert.match(inquiryUrl.searchParams.get('body'), /부품명 \/ 품번:/);
        assert.match(inquiryUrl.searchParams.get('body'), /예상 구매 수량 \/ 반복 발주 여부:/);
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

import test from 'node:test';
import assert from 'node:assert/strict';
import { components, findComponents, componentInquiry } from '../src/data/components.mjs';

test('component search supports spacing, case, aliases and categories', () => {
  assert.equal(findComponents('').length, components.length);
  assert.match(findComponents('거리센서')[0].name, /거리 센서/);
  assert.match(findComponents('DC 모터')[0].name, /모터/);
  assert.match(findComponents('직류')[0].name, /모터/);
  assert.match(findComponents('DISPLAY')[0].name, /LCD/);
  assert.equal(findComponents('LCD', '전원').length, 0);
  assert.ok(findComponents('', '전원').every(item => item.category === '전원'));
  assert.equal(findComponents('알수없는부품').length, 0);
});

test('inquiry preserves the requested part in email subject and body', () => {
  const url = new URL(componentInquiry('test@example.com', '거리 센서 & ABC#123'));
  assert.equal(url.searchParams.get('subject'), 'JNB 부품 공급 상담: 거리 센서 & ABC#123');
  assert.ok(url.searchParams.get('body').includes('찾는 부품 / 품번: 거리 센서 & ABC#123'));
});

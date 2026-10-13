'use client';

import { useState } from 'react';
import { company } from '@/data/site';
import s from './Site.module.css';

// 메일 앱이 없는 방문자를 위한 주소 복사. 결과는 실제 클립보드 동작에 따라 안내한다.
export default function CopyEmail() {
  const [message, setMessage] = useState('');
  async function copy() {
    try { await navigator.clipboard.writeText(company.email); setMessage('이메일 주소를 복사했습니다.'); }
    catch { setMessage(`복사하지 못했습니다. ${company.email} 주소를 직접 입력해 주세요.`); }
  }
  return <><button type="button" className={s.outlineButton} onClick={copy}>이메일 주소 복사</button><span role="status" className={s.note}>{message}</span></>;
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories, findComponents, componentInquiry } from '@/data/components.mjs';
import { company } from '@/data/site';
import s from './Site.module.css';

export default function ComponentSearch() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('전체');
  const results = findComponents(query, category);
  return <section className={s.section} id="component-search" aria-labelledby="component-search-title">
    <div className={s.sectionHeading}><div><p className={s.eyebrow}>FIND YOUR COMPONENT</p><div className={s.componentHeading}><h2 id="component-search-title">주요 취급 부품</h2><p>필요한 부품을 검색해 보세요.<br/>품목에 제한 없이 부품 조달 상담을 받습니다.</p></div></div></div>
    <div className={s.componentFilters}>
      <label htmlFor="component-query">부품명·종류 검색</label>
      <div className={s.componentInput}><input id="component-query" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="예: LCD, 거리 센서, DC 모터, 케이블" autoComplete="off"/>{query && <button type="button" onClick={() => setQuery('')}>검색어 지우기</button>}</div>
      <div className={s.componentCategories} role="group" aria-label="부품 분류">{['전체', ...categories].map(value => <button key={value} type="button" aria-pressed={category === value} onClick={() => setCategory(value)}>{value}</button>)}</div>
    </div>
    <p className={s.note}>기존 공급망을 통해 조달할 수 있는 주요 품목과 공급·개발 경험을 소개합니다. 실제 공급 가능 여부와 최소 주문 수량·납기는 요청하신 품번과 사양을 기준으로 확인합니다.</p>
    <p role="status" className={s.componentCount}>검색 결과 {results.length}개{category !== '전체' && ` · ${category}`}</p>
    {results.length ? <ul className={s.componentResults}>{results.map(item => <li key={item.name}><span className={s.eyebrow}>{item.category}</span><h3>{item.name}</h3><p>{item.scope}</p><a className={s.textLink} href={componentInquiry(company.email, item.name)}>이 품목 이메일 문의 ↗</a></li>)}</ul> : <div className={s.notice}><h3>검색 조건에 맞는 등록 품목이 없습니다.</h3><p>목록에 없는 부품도 조달 상담을 받습니다. 품번·사양서 또는 사진을 보내주시면 공급처와 조달 가능 여부를 확인해 드립니다.</p><div className={s.buttons}><a className={s.button} href={componentInquiry(company.email, query.trim() || category)}>찾는 부품 이메일 문의 ↗</a><button type="button" className={s.outlineButton} onClick={() => { setQuery(''); setCategory('전체'); }}>전체 품목 보기</button></div></div>}
    <p className={s.note}>이메일 문의를 누르면 부품명이 채워진 메일 작성 화면이 열립니다. <Link href="/contact" className={s.textLink}>전화·문의 안내 보기 ↗</Link></p>
  </section>;
}

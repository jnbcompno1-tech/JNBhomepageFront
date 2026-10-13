import Link from 'next/link';
import Image from 'next/image';
import { ContactCTA, Services, Process, Portfolio, s } from '@/components/Site';
import { company, supplyProducts, visibleProjects } from '@/data/site';
export default function Home() { return <>
  <section className={s.hero}><div className={s.container}>
    <div className={s.heroContent}><p className={s.eyebrow}>COMPONENT SOURCING · CHINA OEM / ODM</p><h1>{company.heroTitle}</h1><p className={s.lead}>{company.heroDescription}</p><div className={s.buttons}><Link className={s.button} href="/contact">부품·원가 상담하기 <span aria-hidden="true">↗</span></Link><Link className={s.outlineButton} href={visibleProjects.length ? '/portfolio' : '/services'}>{visibleProjects.length ? '공급 사례 보기' : '사업영역 보기'} <span aria-hidden="true">↗</span></Link></div><p className={s.heroFoot}>LCD · OLED · MOTOR · SENSOR</p></div>
    <div className={s.heroProducts}><p className={s.eyebrow}>주요 취급 품목 · 공급 사례</p><div className={s.productGrid}>{supplyProducts.map(product => <figure key={product.title} className={s.heroProduct}><Image src={product.image} alt={product.alt} width={product.width} height={product.height} sizes="(max-width: 600px) 45vw, (max-width: 800px) 35vw, 20vw" priority/><figcaption><strong>{product.title}</strong><span>{product.detail}</span></figcaption></figure>)}</div><p className={s.note}>사진은 취급 제품과 개발·공급 사례입니다. 공급 사양과 조건은 품목별로 협의합니다.</p><Link className={s.textLink} href="/components">취급 부품 검색 ↗</Link></div>
  </div></section>
  <div className={s.heroBar}><span>중국 제조사와 직접 소통합니다.</span><span>부품 조달부터 생산·납품 대응까지 <b aria-hidden="true">↓</b></span></div>
  <section className={s.section} aria-labelledby="consultation-title">
    <div className={s.sectionHeading}><div><p className={s.eyebrow}>HOW WE CAN HELP</p><h2 id="consultation-title">이런 고민이 있다면<br/>JNB에 문의하세요.</h2></div><p>신규 제품뿐 아니라<br/>이미 생산 중인 제품도 상담할 수 있습니다.</p></div>
    <div className={s.cards}>
      <article className={s.serviceCard}><div className={s.serviceBody}><p className={s.eyebrow}>COST REVIEW</p><h3>기존 부품의 원가 개선</h3><p>현재 사용하는 부품의 사양과 구매량을 바탕으로 대체 공급 가능성과 조달 비용을 비교합니다.</p><Link className={s.textLink} href="/services#sourcing">대체 부품 검토 알아보기 ↗</Link></div></article>
      <article className={s.serviceCard}><div className={s.serviceBody}><p className={s.eyebrow}>COMPONENT SUPPLY</p><h3>제품에 맞는 부품 찾기</h3><p>LCD·OLED·모터·센서부터 전용 케이블과 전원 부품까지, 필요한 사양과 공급 조건을 제조사와 협의합니다.</p><Link className={s.textLink} href="/components">취급 부품 검색 ↗</Link></div></article>
      <article className={s.serviceCard}><div className={s.serviceBody}><p className={s.eyebrow}>FACTORY COMMUNICATION</p><h3>제조사와 품질·납기 조율</h3><p>중국 공장과 생산·출하·배송 일정을 조율하고, 품질 문제가 발생하면 제조사와 원인 확인과 후속 대응을 협의합니다.</p><Link className={s.textLink} href="/services#manufacturing">생산·납품 지원 알아보기 ↗</Link></div></article>
    </div>
  </section>
  {visibleProjects.length > 0 && <section className={s.section}><div className={s.sectionHeading}><div><p className={s.eyebrow}>SELECTED PROJECTS</p><h2>경험이 담긴 프로젝트</h2></div><Link href="/portfolio" className={s.textLink}>전체 사례 보기 ↗</Link></div><Portfolio featured/></section>}
  <section className={s.section}><div className={s.sectionHeading}><div><p className={s.eyebrow}>WHAT WE DO</p><h2>부품 소싱부터<br/>개발과 양산까지.</h2></div><p>필요한 단계부터, 필요한 만큼.<br/>제품에 맞는 실행 방법을 함께 찾습니다.</p></div><Services/><p className={s.note}>직접 수행·협력사 연계와 세부 지원 범위는 개별 상담 후 확인합니다.</p></section>
  <section className={s.processSection}><div className={s.container}><div className={s.sectionHeading}><div><p className={s.eyebrow}>HOW WE WORK</p><h2>상담부터 공급까지,<br/>이렇게 진행합니다.</h2></div><Link href="/about" className={s.textLink}>JNB 알아보기 ↗</Link></div><Process/></div></section><ContactCTA/>
  </>; }

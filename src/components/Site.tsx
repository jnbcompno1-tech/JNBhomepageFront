import Link from 'next/link';
import Image from 'next/image';
import { company, navigation, services, steps, visibleProjects } from '@/data/site';
import s from './Site.module.css';
export function Footer() { return <footer className={s.footer}><div className={s.footerTop}><div><Link href="/" className={s.footerBrand} aria-label={`${company.name} 홈`}><Image src={company.logo} alt="" width={110} height={80}/></Link><p>{company.name}</p><p>{company.intro}</p></div><nav aria-label="하단 메뉴">{navigation.filter(item => item.href !== '/').map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><div><p>CONTACT</p>{company.email ? <a href={`mailto:${company.email}`}>{company.email}</a> : <p>연락처 확인 중</p>}{company.phone && <p><a href={`tel:${company.phone}`}>{company.phone}</a></p>}<small>{company.contactNote}</small></div></div><div className={s.footerBottom}><span>© {new Date().getFullYear()} {company.name}</span><span>DESIGN · SOURCE · MANUFACTURE</span></div></footer>; }
export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <section className={s.pageIntro}><div className={s.container}><p className={s.eyebrow}>{eyebrow}</p><h1>{title}</h1><p className={s.lead}>{text}</p></div></section>; }
export function ContactCTA() { return <section className={s.cta}><div><p className={s.eyebrow}>LET’S WORK TOGETHER</p><h2>다음 단계가 고민이라면,<br/>JNB와 이야기해 보세요.</h2><p>아이디어 단계부터 생산과 공급까지, 필요한 지원을 함께 살펴봅니다.</p></div><Link className={s.whiteButton} href="/contact">문의 안내 보기 <span aria-hidden="true">↗</span></Link></section>; }
export function Services({ detailed = false }: { detailed?: boolean }) {
  return <div className={detailed ? s.serviceDetails : s.cards}>
    {services.map((service, i) => <article id={service.id} key={service.id} className={detailed ? s.serviceDetail : s.serviceCard}>
      <div className={s.cardArt} aria-hidden="true"><span className={s.artShape}/><span className={s.artShape}/><span className={s.artShape}/><b>0{i + 1}</b></div>
      <div className={s.serviceBody}>
        <p className={s.eyebrow}>{service.en}</p><h3>{service.title}</h3>
        <p>{detailed ? service.description : service.summary}</p>
        <ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul>
        {detailed ? <>
          <h4>{service.id === 'sourcing' ? '소싱 상담 품목' : '지원 업무 안내'}</h4>
          <dl className={s.serviceDescriptions}>{service.details.map(detail => <div key={detail.title}><dt>{detail.title}</dt><dd>{detail.text}</dd></div>)}</dl>
          <h4>진행 과정</h4>
          <ol className={s.workflow}>{service.process.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span>{step}</li>)}</ol>
          <p className={s.note}>{service.scope}</p><Link className={s.textLink} href="/contact">이 업무 문의하기 ↗</Link>
        </> : <Link className={s.textLink} href={`/services#${service.id}`}>자세히 보기 <span aria-hidden="true">↗</span></Link>}
      </div>
    </article>)}
  </div>;
}
export function Process() { return <ol className={s.steps}>{steps.map((step, i) => <li key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>; }
export function Portfolio() { return visibleProjects.length ? <div className={s.cards}>{visibleProjects.map(project => <article className={s.project} key={project.id}>{project.image && <Image src={project.image} alt={project.alt} width={640} height={440}/>}<p className={s.eyebrow}>{project.category}</p><h3>{project.title}</h3>{project.review && <p className={s.note}>검토용 사례 · 실제 실적이 아닙니다.</p>}<dl>{[['과제', project.task], ['수행 주체', project.owner], ['역할·범위', project.role], ['결과', project.result]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></article>)}</div> : <div className={s.empty}><div className={s.emptyArt} aria-hidden="true"><span>JNB</span><span>PROJECT ARCHIVE</span></div><div><p className={s.eyebrow}>PORTFOLIO IN PREPARATION</p><h2>사례 자료 정리 중</h2><p>제품과 프로젝트의 수행 주체, 역할, 공개 가능 범위를 확인하고 있습니다. 확인된 자료부터 차례로 소개하겠습니다.</p><p className={s.note}>현재 실제 고객·제품·성과를 표시한 사례는 없습니다.<br/>대표자의 과거 경험과 JNB의 회사 실적을 구분해 게시합니다.</p><Link className={s.textLink} href="/services">먼저 사업영역 살펴보기 ↗</Link></div></div>; }
export { s };

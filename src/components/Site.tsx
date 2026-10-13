import Link from 'next/link';
import Image from 'next/image';
import { company, navigation, services, steps, visibleProjects } from '@/data/site';
import s from './Site.module.css';
export function Footer() { return <footer className={s.footer}><div className={s.footerTop}><div><Link href="/" className={s.footerBrand} aria-label={`${company.name} 홈`}><Image src={company.logo} alt="" width={110} height={80}/></Link><p>{company.name}</p><p>{company.intro}</p></div><nav aria-label="하단 메뉴">{navigation.filter(item => item.href !== '/').map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><div><p>CONTACT</p>{company.email ? <a href={`mailto:${company.email}`}>{company.email}</a> : <p>연락처 확인 중</p>}{company.phone && <p><a href={`tel:${company.phone}`}>{company.phone}</a></p>}<small>{company.contactNote}</small></div></div><div className={s.footerBottom}><span>© {new Date().getFullYear()} {company.name}</span><span>DESIGN · SOURCE · MANUFACTURE</span></div></footer>; }
export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <section className={s.pageIntro}><div className={s.container}><p className={s.eyebrow}>{eyebrow}</p><h1>{title}</h1><p className={s.lead}>{text}</p></div></section>; }
export function ContactCTA() { return <section className={s.cta}><div><p className={s.eyebrow}>TALK TO JNB</p><h2>사용 중인 부품,<br/>더 나은 공급 방법을 찾고 있나요?</h2><p>품번·사진·사양서 중 준비된 자료와 예상 수량을 알려주세요.<br/>신규 부품 소싱과 기존 부품의 대체 가능성을 함께 검토합니다.</p></div><Link className={s.whiteButton} href="/contact">부품 공급 상담하기 <span aria-hidden="true">↗</span></Link></section>; }
export function Services({ detailed = false }: { detailed?: boolean }) {
  return <div className={detailed ? s.serviceDetails : s.cards}>
    {services.map((service, i) => <article id={service.id} key={service.id} className={detailed ? s.serviceDetail : s.serviceCard}>
      <div className={s.cardArt}><Image src={service.image} alt="" fill sizes="(max-width: 600px) 100vw, 400px"/><b aria-hidden="true">0{i + 1}</b></div>
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
export function Portfolio({ featured = false }: { featured?: boolean }) {
  const displayedProjects = featured ? visibleProjects.slice(0, 3) : visibleProjects;
  return displayedProjects.length ? <div className={s.cards}>
    {displayedProjects.map(project => <article className={s.project} id={project.id} key={project.id}>
      <div className={s.projectImage}><Image src={`/images/portfolio/${project.id}.webp`} alt={`${project.title} 관련 제품 사진`} fill sizes="(max-width: 600px) 100vw, 400px"/></div>
      <p className={s.eyebrow}>{project.category}</p><h3>{project.title}</h3>
      <p className={s.projectClient}>{project.client}</p><p className={s.projectSummary}>{project.summary}</p>
      {featured ? <Link className={s.textLink} href={`/portfolio#${project.id}`}>수행 업무 보기 ↗</Link> : <><h4>수행 업무</h4><ul className={s.projectItems}>{project.items.map(item => <li key={item}>{item}</li>)}</ul></>}
    </article>)}
  </div> : <div className={s.empty}><div className={s.emptyArt} aria-hidden="true"><span>JNB</span><span>PROJECT ARCHIVE</span></div><div><p className={s.eyebrow}>PORTFOLIO IN PREPARATION</p><h2>사례 자료 정리 중</h2><p>확인된 프로젝트 자료를 준비하고 있습니다.</p><Link className={s.textLink} href="/services">사업영역 살펴보기 ↗</Link></div></div>;
}

export { s };

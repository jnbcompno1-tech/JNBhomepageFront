'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { company, navigation } from '@/data/site';
import s from './Site.module.css';
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function close(event: KeyboardEvent) { if (event.key === 'Escape') { setOpen(false); button.current?.focus(); } }
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
  return <header className={s.header}><div className={s.headerInner}>
    <Link href="/" className={s.brand} onClick={() => setOpen(false)} aria-label={`${company.name} 홈`}><Image src={company.logo} alt="" width={86} height={63} priority/><span>{company.name}</span></Link>
    <button ref={button} className={s.menuButton} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? '메뉴 닫기 ×' : '메뉴 열기 ☰'}</button>
    <nav id="main-navigation" aria-label="주 메뉴" className={`${s.nav} ${open ? s.navOpen : ''}`}>
      {navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}
    </nav><Link className={s.headerCta} href="/contact">문의하기 <span aria-hidden="true">↗</span></Link>
  </div></header>;
}

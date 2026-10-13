import type { Metadata } from 'next';
import Header from '@/components/Header';
import { Footer, s } from '@/components/Site';
import { company } from '@/data/site';
import { deployment } from '@/lib/deployment.mjs';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(deployment.siteUrl),
  title: { default: `${company.name} | LCD·모터·센서 소싱 · 중국 OEM·ODM`, template: `%s | ${company.name}` },
  description: company.description,
  robots: { index: deployment.isPublic, follow: deployment.isPublic, nocache: !deployment.isPublic },
  openGraph: { title: company.name, description: company.description, locale: 'ko_KR', type: 'website', siteName: company.name },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body><a className="skip" href="#main">본문 바로가기</a>{!deployment.isPublic && <div className={s.preview}><span>TEST PREVIEW</span> 대표님 검토용 초안입니다. 문구와 자료는 확인 후 변경됩니다.</div>}<Header/><main id="main">{children}</main><Footer/></body></html>; }

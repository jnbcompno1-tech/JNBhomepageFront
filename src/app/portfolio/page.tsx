import type { Metadata } from 'next';
import { PageIntro, Portfolio, ContactCTA, s } from '@/components/Site';
export const metadata: Metadata = { title: '포트폴리오', description: 'JNB의 프로젝트 자료와 수행 범위를 정리하고 있습니다.' };
export default function PortfolioPage() { return <><PageIntro eyebrow="OUR PORTFOLIO" title="경험을 담아, 정확하게 소개합니다." text="제품의 과제와 수행 역할을 중심으로 프로젝트를 소개할 공간입니다."/><section className={s.section}><Portfolio/></section><ContactCTA/></>; }

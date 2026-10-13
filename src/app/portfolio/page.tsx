import { pageMetadata } from '@/lib/seo';
import { PageIntro, Portfolio, ContactCTA, s } from '@/components/Site';
export const metadata = pageMetadata('/portfolio', '포트폴리오', '의료기기, 교육용 AI 코딩 제품, 차량용 액세서리, 공기질 측정 제품과 안전장치 관련 JNB 수행 사례입니다.');
export default function PortfolioPage() { return <><PageIntro eyebrow="OUR PORTFOLIO" title="개발부터 부품 공급과 양산까지." text="의료기기부터 교육·차량·환경·안전 분야까지, 제품별로 수행한 업무를 소개합니다."/><section className={s.section}><Portfolio/></section><ContactCTA/></>; }

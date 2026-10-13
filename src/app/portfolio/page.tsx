import { pageMetadata } from '@/lib/seo';
import { PageIntro, Portfolio, ContactCTA, s } from '@/components/Site';
export const metadata = pageMetadata('/portfolio', '포트폴리오', '의료기기, 교육용 AI 코딩 제품, 차량용 액세서리, 공기질 측정 제품과 안전장치 관련 JNB 수행 사례입니다.');
export default function PortfolioPage() { return <><PageIntro eyebrow="OUR PORTFOLIO" title="개발부터 부품 공급과 양산까지." text="의료기기부터 교육·차량·환경·안전 분야까지, 제품별로 수행한 업무를 소개합니다."/><section className={s.section}><p className={s.notice}>고객사는 업종과 익명으로 표기했습니다. 각 사례에는 개발·견적·제안·샘플 제작·양산 등 실제 수행한 업무 범위를 구분해 담았습니다.</p><Portfolio/></section><ContactCTA/></>; }

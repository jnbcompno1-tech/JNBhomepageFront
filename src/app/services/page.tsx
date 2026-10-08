import type { Metadata } from 'next';
import { PageIntro, Services, ContactCTA, s } from '@/components/Site';
export const metadata: Metadata = { title: '사업영역', description: '디자인·개발, 전자부품 소싱·공급, OEM·ODM 양산 지원을 소개합니다.' };
export default function ServicePage() { return <><PageIntro eyebrow="OUR SERVICES" title="지금 필요한 단계부터 함께합니다." text="제품을 만들고 공급하는 과정, 세 가지 사업영역으로 연결합니다."/><section className={s.section}><p className={s.notice}>검토용 사업 소개입니다. 세부 지원 가능 여부와 직접 수행·협력사 연계 범위는 프로젝트별 상담을 통해 확정합니다.</p><Services detailed/></section><ContactCTA/></>; }

import { pageMetadata } from '@/lib/seo';
import { PageIntro, Services, ContactCTA, s } from '@/components/Site';
export const metadata = pageMetadata('/services', '사업영역', 'LCD·모터·센서 등 부품 소싱, 기존 부품 대체와 원가 개선 검토, 중국 제조사와의 OEM·ODM 생산·품질·납품 조율을 소개합니다.');
export default function ServicePage() { return <><PageIntro eyebrow="OUR SERVICES" title="부품 조달과 제조사 소통을 함께합니다." text="필요한 부품을 찾는 일부터 기존 부품의 원가 개선, 중국 공장 생산과 납품 대응까지 상담합니다."/><section className={s.section}><Services detailed/></section><ContactCTA/></>; }

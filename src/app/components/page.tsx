import { pageMetadata } from '@/lib/seo';
import ComponentSearch from '@/components/ComponentSearch';
import { ContactCTA, PageIntro } from '@/components/Site';

export const metadata = pageMetadata('/components', '취급 부품', 'LCD·모터·센서·커넥터·전원 부품 등 JNB의 주요 취급 품목을 검색하세요. 목록에 없는 부품도 조달 상담을 받습니다.');

export default function ComponentsPage() {
  return <><PageIntro eyebrow="COMPONENT SOURCING" title="취급 부품" text="필요한 부품을 찾고, 공급 조건을 상담하세요. 목록에 없는 부품도 품번·사양서·사진으로 문의할 수 있습니다."/><ComponentSearch/><ContactCTA/></>;
}

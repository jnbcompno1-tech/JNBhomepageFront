import type { Metadata } from 'next';
import { company } from '@/data/site';
import { deployment } from '@/lib/deployment.mjs';
// 페이지별 canonical·Open Graph. canonical은 정식 공개 때만 출력해 테스트 호스트를 대표 주소로 알리지 않는다.
// 페이지 openGraph는 상위 설정과 파일 규칙 opengraph-image를 덮어쓰므로 공유 이미지를 직접 지정한다.
export function pageMetadata(path: string, title: string | undefined, description: string): Metadata {
  return {
    ...(title && { title }), description,
    ...(deployment.isPublic && { alternates: { canonical: path } }),
    openGraph: {
      title: title ? `${title} | ${company.name}` : company.name, description, url: path, locale: 'ko_KR', type: 'website', siteName: company.name,
      images: { url: '/opengraph-image.png', width: 1200, height: 630, alt: `${company.name} 로고와 LCD·모터·센서 부품 소싱, 중국 OEM·ODM 안내` },
    },
  };
}

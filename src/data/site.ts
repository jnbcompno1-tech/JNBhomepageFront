export const company = {
  name: '제이앤비컴퍼니', brand: 'JNB', logo: '/images/jnb-logo.webp',
  intro: '디자인부터 양산까지 연결하는 파트너',
  description: '제품의 가능성을 함께 살피고, 개발과 부품 소싱, 생산과 공급에 필요한 과정을 연결합니다.',
  // 과거 홈페이지에 기재된 연락처. 현재 사용 여부를 대표님 검토 시 확인합니다.
  email: 'comdj@naver.com', phone: '070-4148-3241',
  address: '', mapUrl: '',
  contactNote: '기존 홈페이지에 기재된 연락처입니다. 현재 사용 여부를 확인 중입니다.',
  heroTitle: '제품의 아이디어부터\n양산과 공급까지',
  heroDescription: '디자인과 부품 소싱부터 OEM·ODM 생산, 품질·납품 대응까지 함께합니다.',
};
export const navigation = [
  { href: '/', label: '홈' }, { href: '/about', label: '회사소개' },
  { href: '/services', label: '사업영역' }, { href: '/portfolio', label: '포트폴리오' },
  { href: '/contact', label: '문의·오시는 길' },
];
export const services = [
  {
    id: 'design', en: 'DESIGN & DEVELOPMENT', title: '디자인·개발',
    summary: '아이디어를 구체적인 제품으로.',
    description: '사용 목적과 디자인뿐 아니라 부품 구성, 제작 방법과 생산 조건까지 고려합니다. 준비된 스케치·도면·샘플을 바탕으로 필요한 개발 단계를 함께 살펴봅니다.',
    items: ['제품디자인', '기구·회로설계', '목업·시제품'],
    details: [
      { title: '제품디자인', text: '제품의 형태와 사용성, 생산성을 고려한 콘셉트와 디자인을 검토합니다.' },
      { title: '기구설계', text: '제품의 구조와 부품 배치, 금형·가공 조건을 고려해 설계와 보완 방향을 협의합니다.' },
      { title: '회로설계', text: '필요 기능과 부품 선정, PCB 레이아웃 및 테스트·검증 항목을 검토합니다.' },
      { title: '목업제작', text: '형태를 확인하는 디자인 목업과 동작을 살펴보는 워킹 목업 등 목적에 맞는 제작 방식을 상담합니다.' },
      { title: '시제품제작', text: '디자인·기능·부품 간 간섭을 확인하기 위한 시제품을 검토합니다. 3D 프린팅, CNC, 진공주형, 시사출 등 제작 방법은 요구 조건에 따라 협의합니다.' },
    ],
    process: ['문의·자료 전달', '자료 검토·범위 협의', '사전 조사', '콘셉트 설정', '검토·수정·보완', '최종 자료 전달'],
    scope: '기존 홈페이지의 업무 설명을 정리한 소개 초안입니다. 각 단계의 산출물·일정과 직접 수행·전문 협력사 연계 범위는 상담 후 확정합니다.',
  },
  {
    id: 'sourcing', en: 'COMPONENT SOURCING', title: '부품 소싱·공급',
    summary: '제품에 맞는 부품을 찾는 과정.',
    description: '디스플레이와 반도체, 센서 등 전자부품의 사양과 공급 조건을 검토합니다. 필요한 품목과 사용 환경, 수량·일정을 바탕으로 소싱 가능 여부를 상담합니다.',
    items: ['LCD·OLED·터치 디스플레이', '센서·반도체', '커넥터·케이블 및 기타 부품'],
    details: [
      { title: '디스플레이', text: 'LCD, OLED, 터치 디스플레이 등 제품에 맞는 사양과 공급 조건 검토.' },
      { title: '반도체·센서', text: '제품 기능과 사용 환경에 필요한 반도체·센서 부품 소싱 상담.' },
      { title: '커넥터·케이블', text: '부품 간 연결과 제품 구성에 필요한 커넥터·케이블 상담.' },
      { title: 'LED·배터리', text: 'LED, 배터리와 2차전지 관련 품목의 소싱 가능 여부 확인.' },
      { title: '기타 전자부품', text: '태양전지, LIC, 크리스털, 부저, 모터 등 소개서에 기재된 품목 상담.' },
    ],
    process: ['필요 사양 확인', '부품·공급 조건 검토', '샘플·납품 협의'],
    scope: '2026년 회사소개서에 기재된 품목을 정리했습니다. 상시 재고나 공급을 보장하는 목록이 아니며, 현재 취급 여부·납기·공급 가능 범위는 개별 확인이 필요합니다.',
  },
  {
    id: 'manufacturing', en: 'OEM / ODM MANUFACTURING', title: 'OEM·ODM 양산',
    summary: '생산부터 공급까지, 흐름을 연결합니다.',
    description: '고객이 준비한 설계 자료 또는 개발 단계에서 정리한 자료를 바탕으로 중국 OEM·ODM 생산을 상담합니다. 제조사와의 소통부터 생산 일정, 품질·납품 대응까지 필요한 업무를 협의합니다.',
    items: ['생산 조건·원가 검토', '제조사 소통·일정 조율', '품질·납품 대응'],
    details: [
      { title: '생산 준비', text: '제품 사양·설계 자료·예상 수량을 확인하고 제조사 조사와 생산 조건을 검토합니다.' },
      { title: '생산·공정 조율', text: '제조사와 공정·생산 일정을 협의하고 진행 과정의 소통을 지원합니다.' },
      { title: '품질·납품 대응', text: '품질 확인 항목과 납품 조건을 정리하고 문제 발생 시 대응 범위를 협의합니다.' },
    ],
    process: ['제품·설계 자료 확인', '제조사·생산 조건 검토', '샘플·시제품 확인', '생산·품질·납품 조율'],
    scope: '기존 홈페이지 기준 소개 초안입니다. 제조는 협력 제조사와 연계하며, JNB의 관리·지원 범위와 책임은 상담 후 정합니다. 원가 절감률과 무결점 생산을 보장하지 않습니다.',
  },
];
export const steps = [
  { title: '필요한 일을 듣습니다', text: '제품과 현재 단계, 필요한 지원, 희망 일정을 함께 정리합니다.' },
  { title: '실행 방법을 찾습니다', text: '개발·소싱·생산 조건을 살피고 수행 범위와 협력 방식을 협의합니다.' },
  { title: '진행 과정을 연결합니다', text: '합의한 범위에 따라 일정과 품질, 공급 과정의 소통을 이어갑니다.' },
];
export type Project = { id: string; title: string; category: string; task: string; owner: string; role: string; result: string; image?: string; alt: string; review: boolean; visible: boolean };
// 공개 가능한 자료와 수행 주체를 확인한 뒤 추가합니다. 빈 목록은 안내 화면으로 표시합니다.
export const projects: Project[] = [];
export const visibleProjects = projects.filter(project => project.visible);
export const inquiryItems = ['제품 또는 부품과 사용 목적', '필요한 지원 업무', '현재 진행 단계와 준비된 자료', '희망 일정과 예상 수량'];

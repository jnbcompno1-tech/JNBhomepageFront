const officeAddress = '대전광역시 유성구 배울1로 277, 3동';
const mapQuery = encodeURIComponent('대전광역시 유성구 배울1로 277');
export const company = {
  name: '제이앤비컴퍼니', brand: 'JNB', logo: '/images/jnb-logo.webp',
  intro: '중국 제조사와 직접 소통하는 부품 공급 파트너',
  description: 'LCD·모터·센서 등 제품에 필요한 부품을 소싱하고 공급합니다. 중국 제조사와 직접 소통하며 기존 부품의 원가 개선, OEM·ODM 생산과 품질·납품 대응을 돕습니다.',
  // 전화는 2026-10-12 사용자 확인. 이메일은 과거 홈페이지 기재 연락처로 현재 사용 여부 확인 필요.
  email: 'comdj@naver.com', phone: '010-4657-3241',
  address: officeAddress,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  mapEmbedUrl: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
  contactNote: '이메일은 기존 홈페이지에 기재된 주소로, 현재 사용 여부를 확인 중입니다.',
  heroTitle: '부품 원가부터\n공급 문제까지, JNB',
  heroDescription: 'LCD·모터·센서 등 필요한 부품을 찾고, 중국 제조사와 직접 소통합니다. 기존 부품의 대체 공급부터 생산·품질·배송 조율까지 함께합니다.',
};
export const navigation = [
  { href: '/', label: '홈' }, { href: '/about', label: '회사소개' },
  { href: '/services', label: '사업영역' }, { href: '/components', label: '취급 부품' },
  { href: '/portfolio', label: '포트폴리오' },
  { href: '/contact', label: '문의·오시는 길' },
];
export const supplyProducts = [
  { title: '디스플레이·태블릿', detail: 'LCD·OLED·터치 / 태블릿 개발·양산', image: '/images/portfolio/medical-equipment.webp', alt: '태블릿 위탁 개발·양산 관련 제품 사진', width: 235, height: 126 },
  { title: '모터', detail: '조향 모터·소형 DC 모터', image: '/images/sourcing-motor.webp', alt: 'JNB 취급 소형 DC 모터의 실물 사진', width: 732, height: 530 },
  { title: '센서·전원 부품', detail: '광센서·배터리·어댑터', image: '/images/portfolio/coding-robot.webp', alt: '센서와 전원 부품을 공급한 교육용 코딩 제품의 구성도', width: 570, height: 379 },
  { title: '케이블·충전기', detail: '전용 케이블·무선 충전기', image: '/images/portfolio/vehicle-accessories.webp', alt: '무선 충전기 개발·양산 관련 제품 사진', width: 220, height: 150 },
];
export const services = [
  {
    id: 'sourcing', image: '/images/services/sourcing.webp', en: 'COMPONENT SOURCING', title: '부품 소싱·공급',
    summary: '새로운 부품 조달부터 기존 부품의 원가 개선까지.',
    description: '중국 제조사와 직접 소통해 필요한 사양과 공급 조건을 협의합니다. 이미 생산 중인 제품도 현재 부품의 사양·구매량을 기준으로 대체 공급과 원가 개선 가능성을 검토합니다.',
    items: ['LCD·OLED·터치 디스플레이', '모터·센서·반도체', '커넥터·케이블·전원 부품'],
    details: [
      { title: '디스플레이', text: 'LCD, OLED, 터치 디스플레이 등 제품에 맞는 사양과 공급 조건 검토.' },
      { title: '모터', text: '교육용 코딩 제품의 전방 조향 모터·후방 DC 모터 양산 경험을 바탕으로 사용 환경과 요구 사양을 확인합니다.' },
      { title: '반도체·센서', text: '제품 기능과 사용 환경에 필요한 반도체·센서 부품 소싱 상담.' },
      { title: '커넥터·케이블', text: '부품 간 연결과 제품 구성에 필요한 커넥터·케이블 상담.' },
      { title: 'LED·배터리', text: 'LED, 배터리와 2차전지 관련 품목의 소싱 가능 여부 확인.' },
      { title: '기타 전자부품', text: '태양전지, LIC, 크리스털, 부저 등 소개서에 기재된 품목 상담.' },
      { title: '기존 부품 대체 검토', text: '현재 품번·사양·예상 구매량을 바탕으로 대체 후보와 조달 비용을 비교합니다. 적용 전 샘플 검증과 고객의 변경 승인이 필요합니다.' },
    ],
    process: ['필요 사양 확인', '부품·공급 조건 검토', '샘플·납품 협의'],
    scope: '공급 가능 사양·최소 주문량·샘플·납기는 품목별로 협의합니다. 대체품은 요구 성능과 적용 조건을 확인한 뒤 공급하며, 절감 가능 여부는 검토 결과에 따라 달라집니다.',
  },
  {
    id: 'manufacturing', image: '/images/services/manufacturing.webp', en: 'OEM / ODM MANUFACTURING', title: 'OEM·ODM 양산',
    summary: '중국 공장과의 생산·품질·배송 소통을 함께합니다.',
    description: '설계 자료와 예상 수량을 바탕으로 중국 현지 공장 섭외와 OEM·ODM 생산을 상담합니다. 제조사와 생산 조건·일정을 조율하고, 품질 문제 발생 시 원인 확인과 후속 조치를 협의합니다.',
    items: ['생산 조건·원가 검토', '제조사 소통·일정 조율', '품질·납품 대응'],
    details: [
      { title: '생산 준비', text: '제품 사양·설계 자료·예상 수량을 확인하고 제조사 조사와 생산 조건을 검토합니다.' },
      { title: '생산·공정 조율', text: '제조사와 공정·생산 일정을 협의하고 진행 과정의 소통을 지원합니다.' },
      { title: '품질·납품 대응', text: '품질 확인 항목과 출하·배송 일정을 제조사와 협의합니다. 문제가 발생하면 제조사에 확인을 요청하고 후속 대응을 조율합니다.' },
    ],
    process: ['제품·설계 자료 확인', '제조사·생산 조건 검토', '샘플·시제품 확인', '생산·품질·납품 조율'],
    scope: '제조는 협력 제조사와 연계합니다. 검사 기준·배송 조건·문제 발생 시 대응 범위와 책임은 상담 후 정합니다.',
  },
  {
    id: 'design', image: '/images/services/design.webp', en: 'DESIGN & DEVELOPMENT', title: '디자인·개발',
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
    scope: '각 단계의 산출물·일정과 직접 수행·전문 협력사 연계 범위는 상담 후 확정합니다.',
  },
];
export const steps = [
  { title: '부품과 구매 조건 확인', text: '품번·사진·사양서와 예상 수량, 현재 조달의 어려움을 알려주세요. 준비된 자료부터 검토합니다.' },
  { title: '제조사 협의와 샘플 검토', text: '제조사와 사양·가격·공급 조건을 협의합니다. 대체 부품은 샘플 확인과 고객 승인 후 적용합니다.' },
  { title: '생산·납품과 후속 대응', text: '합의한 조건으로 생산·배송 일정을 조율합니다. 품질 문제가 생기면 제조사와 후속 대응을 협의합니다.' },
];
export type Project = { id: string; title: string; category: string; client: string; summary: string; items: string[]; visible: boolean };
// 사용자 제공 포트폴리오 Sheet1, F3:G35. 고객사는 익명 표기하며 견적·제안과 양산을 구분합니다.
// 사진은 같은 엑셀의 삽입 이미지를 브랜드 글자·로고가 안 보이게 잘라 public/images/portfolio/{id}.webp에 둡니다.
export const projects: Project[] = [
  {
    id: 'medical-equipment', title: '의료기기용 태블릿·부품 및 장비', category: 'ODM 양산 · 부품 소싱·공급',
    client: '의료기기 업체 A사', summary: '태블릿 PC 위탁 개발·양산부터 전원 부품, 레이저·광학 관련 장비 업무까지 수행했습니다.', visible: true,
    items: [
      'Windows 10.1인치 태블릿 PC 위탁 개발·양산',
      '의료용 어댑터 개발 및 인증 (12V 2A)',
      '배터리 KC 인증·양산 (7.6V 4,200mAh)',
      '외형 케이스 사출 견적',
      'USB A to Micro B 전용 케이블 제작',
      '레이저 장비 프로그램 개발 지원',
      '레이저 컨트롤 보드 구매',
      '스캐너 장비 소싱',
      '칠러 장비 소싱',
      'Endcap with Fiber 개발·제작',
      '광케이블 제조업체 샘플 개발',
      'SMA 커넥터 개발',
    ],
  },
  {
    id: 'coding-robot', title: '교육용 AI 코딩 제품 부품', category: '부품 소싱·공급',
    client: '교육용 AI 코딩 업체 B사', summary: '전방 조향 모터, 후방 DC 모터, 광센서와 전원 부품의 인증·양산 업무를 수행했습니다.', visible: true,
    items: ['전방 조향 모터 양산', '후방 DC 모터 양산', '광센서 양산', '18650 배터리 인증·양산', '어댑터 인증·양산'],
  },
  {
    id: 'vehicle-accessories', title: '차량용 거치대·무선 충전기', category: 'ODM 양산 · 디자인·개발',
    client: '차량용 거치대 제작·판매 업체 C사', summary: '무선 충전기 개발·양산과 가공 부품, 케이스, 전용 케이블 제작 및 디자인 제안을 수행했습니다.', visible: true,
    items: [
      '오토바이 무선 충전기 개발·양산',
      'SUS 430/420F CNC 가공',
      '외부 케이스 사출 양산',
      'PCB 개발 보드 양산',
      '전용 방수 케이블 제작',
      '신규 거치대 디자인 콘셉트 제안',
      '전용 자석 제작·양산',
      '부스트업 외부 케이블 제작',
    ],
  },
  {
    id: 'air-quality', title: '공기질 측정 제품 부품·외형', category: 'ODM 양산',
    client: '공기질 측정 업체 D사', summary: '강화유리·FND 개발과 PCB 제작, 알루미늄 가공 및 외형 양산 제작을 수행했습니다.', visible: true,
    items: ['강화유리 + FND 개발·양산', 'PCB 제작', '알루미늄 압출·CNC 가공·표면처리', '외형 양산 제작'],
  },
  {
    id: 'forklift-safety', title: '지게차 안전장치 관련 업무', category: '부품 소싱·공급',
    client: '안전장치 개발 업체 E사', summary: '지게차 안전장치의 개발·견적과 AI 카메라, 부저, 전용 케이블 관련 업무를 수행했습니다.', visible: true,
    items: ['지게차 안전장치 4채널 개발·견적', 'AI 카메라·부저·전용 케이블 관련 부품 소싱·공급 업무'],
  },
];
export const visibleProjects = projects.filter(project => project.visible);
export const inquiryItems = ['부품명·품번 또는 제품 사진·사양서', '사용 환경과 현재 겪고 있는 문제', '예상 구매 수량과 반복 발주 여부', '희망 납기와 필요한 지원'];

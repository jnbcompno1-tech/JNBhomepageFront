// 기존 공급망을 통해 조달 가능한 주요 취급 품목. 상담 품목에는 제한이 없으며 실제 공급 조건은 개별 확인합니다.
export const components = [
  { name: 'LCD · OLED · 터치 디스플레이', category: '디스플레이', aliases: '엘씨디 화면 display touch 패널', scope: '사양에 맞는 디스플레이 소싱' },
  { name: 'DC 모터 · 조향 모터', category: '모터·센서', aliases: '직류 motor steering 구동', scope: '코딩 로봇용 모터 양산 공급 경험' },
  { name: '광학 센서 · 거리 센서', category: '모터·센서', aliases: '광센서 optical distance sensor 거리센서', scope: '광학 센서 양산 공급 경험 · 거리 센서 소싱' },
  { name: '배터리 · 18650 배터리', category: '전원', aliases: 'battery 이차전지 리튬 전지', scope: '로봇·의료기기용 배터리 개발·인증·공급 경험' },
  { name: '어댑터 · 전원 공급 부품', category: '전원', aliases: 'adapter 아답터 전원공급장치 power', scope: '어댑터 개발·인증·양산 공급 경험' },
  { name: '커넥터 · SMA 커넥터', category: '연결 부품', aliases: 'connector 콘넥터 연결 단자', scope: 'SMA 커넥터 개발 경험 · 커넥터 소싱' },
  { name: 'USB · 방수 · 전용 케이블', category: '연결 부품', aliases: 'cable usb 마이크로 micro 광케이블 배선', scope: 'USB·방수 케이블 공급 및 광케이블 샘플 개발 경험' },
  { name: '반도체 · LED', category: '기타 전자부품', aliases: 'semiconductor chip 칩 엘이디 발광다이오드', scope: '품번·사양에 따른 소싱' },
  { name: '태양전지 · LIC', category: '전원', aliases: 'solar cell 솔라 리튬이온커패시터 capacitor', scope: '사양에 따른 소싱' },
  { name: '크리스털 · 부저', category: '기타 전자부품', aliases: 'crystal 크리스탈 buzzer 버저 발진자', scope: '크리스털 소싱 · 부저 소싱 경험' },
  { name: 'AI 카메라', category: '모터·센서', aliases: 'camera 카메라 영상', scope: '지게차 안전 시스템용 소싱 경험' },
];

export const categories = [...new Set(components.map(item => item.category))];
const normalize = value => value.toLowerCase().replace(/\s+/g, '');

export function findComponents(query, category = '전체') {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return components.filter(item => (category === '전체' || item.category === category)
    && terms.every(term => normalize(`${item.name} ${item.aliases} ${item.category}`).includes(normalize(term))));
}

export function componentInquiry(email, name) {
  return `mailto:${email}?subject=${encodeURIComponent(`JNB 부품 공급 상담: ${name}`)}&body=${encodeURIComponent(`안녕하세요. 아래 부품의 공급 가능 여부를 문의합니다.\n\n찾는 부품 / 품번: ${name}\n회사명 / 담당자:\n회신 연락처:\n사용 환경 / 필요한 사양:\n예상 구매 수량:\n희망 납기:\n\n사진이나 사양서가 있다면 첨부해 주세요.`)}`;
}

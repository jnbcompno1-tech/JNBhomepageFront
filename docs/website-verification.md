# JNB 테스트 배포 검수

검수일: 2026-10-08

- 테스트 URL: https://jnb-company.vercel.app
- Vercel 프로젝트: `jnb4/jnb-company`
- 최초 배포 ID: `dpl_D3aorMCENtnHRzkin4dnbfVVXLXu`
- 자료 보강 배포 ID: `dpl_4Wpor9zM1wuh8dFApLzNtwL8xkXZ`
- 기술: Next.js 16.4.0, React 19.3.0, TypeScript 5.9 계열, CSS Modules. 모든 소개 페이지 정적 생성.
- 구매 도메인 `jnbcompany.co.kr` 연결·DNS 변경·검색 등록은 수행하지 않음.

| 검수 | 결과 |
| --- | --- |
| 로컬 및 Vercel 빌드 | 통과, 5개 페이지·404·robots 정적 생성 |
| ESLint·TypeScript | 오류·경고 없이 통과 |
| 배포 설정 테스트 | 2건 통과: 기본 검색 제외·preview 강제 제외·정식 URL 전환·잘못된 URL 차단 |
| 실제 브라우저 화면 | Edge Chromium에서 360·768·1440px × 5개 경로, 총 15개 조합 통과. 로컬과 Vercel에서 각각 실행 |
| 경로·메뉴 | 직접 접속·새로고침, 모바일 메뉴 선택 후 닫힘, Enter·Escape 조작 및 초점 복귀, 404와 홈 복귀 확인 |
| 화면·실행 | 가로 넘침·깨진 이미지·브라우저 실행 예외 없음. 홈 데스크톱·모바일, 사업영역 태블릿, 문의 모바일, 회사소개 데스크톱 캡처 육안 확인 |
| 검색 제외 | 페이지 robots meta `noindex`, HTTP `X-Robots-Tag: noindex, nofollow, noarchive`, robots.txt `Disallow: /` 확인 |
| 문의 | 이메일 텍스트와 mailto 일치. 전화 링크 제공. 방문 주소·지도는 미확정으로 숨김. 전송 성공·자동 발송 없음 |
| 빈 자료 | 공개 사례 0건: 홈 사업영역 CTA, 포트폴리오 자료 정리 안내. 미확정 경력·성과·고객명 미게시 |
| 자료 제외 | Vercel dry-run에서 docs·analysis·graphify-out·team-review·원본·환경파일·검수 캡처 제외 확인. 업로드 22개 파일 |
| 보안 점검 | `npm audit --omit=dev` 0건. 전체 audit에서 개발용 린트 의존성 5건 high: braces → micromatch → fast-glob → Next ESLint 의존 경로. 상위 수정판 대기, 런타임 의존성은 영향 없음 |
| 설치 재현 | `npm ci --dry-run --ignore-scripts` 통과. ESLint 10에 대한 일부 플러그인의 peer 범위 경고가 있으나 실제 lint·빌드 통과 |

운영·수정 안내는 [README](../README.md), 자산 출처는 [자료 목록](asset-register.md)을 참고합니다. 화면 캡처와 기계 검수 결과는 로컬 `output/`에 저장하며 웹에는 올리지 않습니다.

## 대표님과 후속 확인

- 주력 사업 순서와 첫 화면 문구, 직접 수행·협력사 연계 범위
- 실적·대표자 경험의 주체와 공개 가능한 사진·사례
- 이메일·전화 현재 사용 여부와 실제 수신·회신, 방문 주소
- 정식 도메인 연결, 비용·계정·수정·문의 담당
- Vercel Hobby의 개인·비상업용 제한과 회사 사이트 운영에 적합한 플랜 확인

이번 검수는 실제 휴대폰 기기·Safari·Firefox 검수, 메일 수신·회신, 대표자 경력·고객 관계·자료 권리의 최종 확인을 포함하지 않습니다. 검색 제외는 비공개 접근 제한을 의미하지 않습니다. 기존 전략 팀 검토를 재실행하지 않았습니다.

## 기존 자료 보강

2026-10-08 추가 반영: 디자인·기구설계·회로설계·목업·시제품의 업무 설명, 제품디자인 6단계 진행 과정, 디스플레이·반도체·센서·커넥터·케이블·LED·배터리·기타 부품 상담 품목, 양산 준비·공정·품질·납품 설명을 추가했습니다. JNB 로고를 헤더·푸터·회사소개에서 공유합니다.

제조사 로고·대리점 관계·절감률·실적·제품 사진은 추가하지 않았습니다. 근거 자료는 `asset-register.md`에 기록했습니다. 추가 반영 후 lint·typecheck·설정 테스트·빌드를 통과했으며, 15개 경로/너비 조합에서 상세 설명·6단계 과정·로고 로딩까지 검수했습니다.

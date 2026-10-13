# 제이앤비컴퍼니 홈페이지

정식 공개 준비와 세션별 작업 배정은 [배포 준비 체크리스트](docs/production-release-checklist.md)를 기준으로 진행합니다.

Next.js App Router · TypeScript · CSS Modules. 한국어 6개 페이지(`/`, `/about`, `/services`, `/components`, `/portfolio`, `/contact`)를 정적 생성합니다. 클라이언트 컴포넌트는 모바일 메뉴(`Header`), 부품 검색(`ComponentSearch`), 이메일 주소 복사(`CopyEmail`)입니다.

## 실행과 검수

Node.js 24 LTS 기준. 정확한 의존성은 `package-lock.json`에 고정합니다.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm start
CHECK_MODE=review node tests/browser-check.mjs
```

화면 검수 스크립트는 설치된 Microsoft Edge를 사용합니다. `CHECK_URL`(기본 `http://localhost:3000`)로 대상을 지정합니다. 결과와 18개 화면 캡처(6개 경로 × 360·768·1440px)는 `output/`에 저장되며 배포하지 않습니다.

`CHECK_MODE`로 검사 기준을 고릅니다. 검사 대상 빌드와 모드가 같아야 합니다.

| 모드 | 대상 빌드 | 확인 내용 |
| --- | --- | --- |
| `review`(기본) | 기본 빌드, Vercel Preview·테스트 배포 | TEST PREVIEW 배너, robots meta·`X-Robots-Tag` noindex, robots.txt `Disallow: /`, canonical 없음, 빈 사이트맵 |
| `public` | `SITE_PUBLIC=true` 정식 빌드 | 배너 없음, index 허용, noindex 헤더 없음, canonical·og:url이 `CHECK_URL` 기준, 사이트맵 6개, robots의 Sitemap 연결 |

로컬에서 정식 모드를 검사할 때는 대표 URL 대신 로컬 주소로 빌드합니다.

```sh
SITE_PUBLIC=true SITE_URL=http://localhost:3000 npm run build
SITE_PUBLIC=true SITE_URL=http://localhost:3000 npm start
CHECK_MODE=public node tests/browser-check.mjs
```

공통으로 직접 접속·새로고침·404, 모바일 메뉴, 이미지, 품목 검색·분류, 메일·전화 링크, 이메일 복사, 아이콘·공유 이미지 응답을 확인합니다. 연락처를 바꾸면 이 스크립트의 고정 기대값(`comdj@naver.com`, `010-4657-3241`, 주소)도 함께 바꿉니다.

## 콘텐츠 수정

- `src/data/site.ts`: 회사명·로고 경로·홈 문구·연락처·사업영역·진행 방식·문의 안내·사례. 사업별 `details`는 상세 지원 업무·소싱 품목, `process`는 순서대로 표시할 진행 단계입니다. 연락처를 빈 문자열로 두면 해당 동작을 숨깁니다. 주소와 지도 URL이 모두 있을 때만 길찾기를 표시합니다.
- `projects`: 공개 가능 범위를 확인한 사례를 표시 순서대로 추가합니다. `client`는 익명 고객·업종, `summary`는 요약, `items`는 수행 업무입니다. 견적·제안·개발·양산 범위를 원문대로 구분합니다. `visible: false`로 숨기며 홈에는 앞의 3개 사례 요약, 포트폴리오에는 전체 업무를 표시합니다. 실제 사례가 없을 때 홈은 사업영역으로 연결합니다.
- `public/images/`: 웹용 공개 자산만 저장합니다. 원본·내부 문서·고객사 자료를 복사하지 않습니다.
- `src/data/components.mjs`: 취급 부품 검색 목록. 항목마다 `name`(표시명), `category`(분류 버튼), `aliases`(검색용 별칭·영문·오타, 화면에 표시 안 함), `scope`(공급 경험 설명)를 둡니다. 분류는 항목의 `category`에서 자동으로 만들어집니다. 수정 후 `npm test`의 검색 테스트와 브라우저 검사의 품목 수(현재 11개) 기대값을 확인합니다.
- `src/lib/seo.ts`: 페이지별 제목·설명·canonical·공유 정보. 새 페이지는 `export const metadata = pageMetadata('/경로', '제목', '설명')`로 추가하고 `navigation`에 넣으면 사이트맵에도 포함됩니다.
- `src/app/icon.png`, `src/app/apple-icon.png`, `public/opengraph-image.png`: 파비콘과 링크 공유 이미지(1200×630). 로고 `public/images/jnb-logo.webp`에서 만들었습니다.
- `src/components/Site.module.css`: 공통 레이아웃과 반응형 스타일.
- `docs/asset-register.md`: 출처와 사용 여부 기록. 웹 배포 대상에서 제외합니다.

## 운영 정보

- Vercel 프로젝트: `jnb4/jnb-company`. 테스트 URL `https://jnb-company.vercel.app`은 Production 별칭입니다. 정식 대표 URL은 `https://www.jnbcompany.co.kr`(도메인 연결 전).
- 문의: `comdj@naver.com`(2026-10-13 수신 확인), 전화 `010-4657-3241`. 홈페이지는 문의를 저장·자동 발송하지 않습니다. 방문자가 메일 앱이나 전화로 직접 연락하므로 위 메일함과 전화를 확인합니다. 회신 담당자는 미정입니다.
- 환경변수: `SITE_PUBLIC`(`true`일 때만 정식 공개, Preview는 항상 비공개), `SITE_URL`(정식 대표 URL). 빌드 시점에 반영되므로 **환경변수를 바꾼 뒤에는 반드시 재배포**해야 합니다. 비밀번호·토큰은 저장소와 문서에 적지 않습니다.
- 대표님 검토: 공개 전에는 테스트 URL에서 봅니다. 공개 후 검토용 Preview 배포의 접근 방식(Vercel 로그인 보호 유지 또는 공유 링크)은 미정입니다. Preview가 401이면 Vercel 보호 우회 방법을 사용하고 값은 기록하지 않습니다.

## Vercel 테스트 재배포

```sh
npx vercel login
npx vercel link --project jnb-company
npx vercel deploy --prod --build-env SITE_PUBLIC=false
```

`--prod`는 Vercel 기본 프로젝트 URL을 갱신하는 옵션입니다. 사이트는 `SITE_PUBLIC=false`인 테스트 상태를 유지합니다. `SITE_PUBLIC` 기본값도 false이며 preview 환경은 true를 지정해도 검색 제외됩니다. `.vercelignore`로 원본·검토 자료·문서·화면 캡처를 업로드에서 제외합니다. `noindex`, `X-Robots-Tag`, robots.txt를 적용하지만 접근 제한 기능은 아닙니다.

## 정식 공개 절차

설정 기준은 `src/lib/deployment.mjs`입니다. 공개 모드에서만 canonical·사이트맵·robots 허용이 출력됩니다. **도메인 HTTPS 확인 전에 `SITE_PUBLIC=true`를 켜지 않습니다.** 먼저 켜면 `*.vercel.app`이 색인 허용되고 canonical은 열리지 않은 주소를 가리킵니다.

1. 검수한 커밋 SHA를 정하고 현재 Production 배포 ID를 복구용으로 기록합니다(`npx vercel ls --prod`).
2. Vercel 프로젝트에 `www.jnbcompany.co.kr`, `jnbcompany.co.kr`을 추가합니다(`npx vercel domains add`). 대표는 www, 루트 도메인은 www로 이동하게 합니다.
3. 메일플러그(mailplug) 관리 화면에서 Vercel이 안내한 DNS 값으로 변경합니다. 네임서버는 `ns.mailplug.com`·`ns2.mailplug.com`이며, 현재 두 주소는 메일플러그 주차 페이지(211.43.12.102)를 가리킵니다. MX 레코드가 없어 도메인 메일에는 영향이 없습니다(2026-10-13 확인). 네임서버는 바꾸지 않고 A·CNAME 레코드만 수정합니다.
4. 두 주소의 HTTPS 접속과 경로 유지 이동을 확인합니다.
5. Production 환경에 `SITE_PUBLIC=true`, `SITE_URL=https://www.jnbcompany.co.kr`을 설정하고 같은 커밋으로 재배포합니다.
6. `CHECK_URL=https://www.jnbcompany.co.kr CHECK_MODE=public node tests/browser-check.mjs`를 통과시킵니다. 실제 휴대폰으로 메뉴·검색·전화·메일·지도를 확인합니다.
7. 검색 등록을 하면 네이버 서치어드바이저·Google Search Console 소유 확인 값을 `src/app/layout.tsx`의 `metadata.verification`에 넣고 재배포·재검수한 뒤 `sitemap.xml`을 제출합니다.

## 롤백

- 코드 문제: `npx vercel rollback <이전 배포 ID 또는 URL>` 또는 Vercel 대시보드의 Instant Rollback. 이후 원인 커밋을 `git revert`해 푸시합니다.
- 공개 설정 문제: Production의 `SITE_PUBLIC`을 `false`로 바꾸고 재배포합니다. 환경변수만 바꾸면 반영되지 않습니다.
- 도메인 문제: 메일플러그 관리 화면에서 DNS를 기존 값(211.43.12.102)으로 되돌립니다. DNS 반영에는 시간이 걸립니다.

회사 사이트의 Vercel Hobby 사용 조건과 실제 계정의 플랜은 운영자가 확인해야 합니다. 이번 테스트가 상업용 서비스 허용 여부의 판정을 대신하지 않습니다.

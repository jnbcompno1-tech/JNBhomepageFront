# 제이앤비컴퍼니 홈페이지

Next.js App Router · TypeScript · CSS Modules. 한국어 5개 페이지의 소개 콘텐츠는 정적 생성합니다. 모바일 메뉴만 클라이언트 컴포넌트입니다.

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
node tests/browser-check.mjs
```

화면 검수 스크립트는 설치된 Microsoft Edge를 사용합니다. `CHECK_URL` 환경변수로 배포 URL을 지정할 수 있습니다. 기본값은 `http://localhost:3000`입니다. 결과와 15개 화면 캡처는 `output/`에 저장되며 배포하지 않습니다.

## 콘텐츠 수정

- `src/data/site.ts`: 회사명·로고 경로·홈 문구·연락처·사업영역·진행 방식·문의 안내·사례. 사업별 `details`는 상세 지원 업무·소싱 품목, `process`는 순서대로 표시할 진행 단계입니다. 연락처를 빈 문자열로 두면 해당 동작을 숨깁니다. 주소와 지도 URL이 모두 있을 때만 길찾기를 표시합니다.
- `projects`: 공개 가능 범위를 확인한 사례를 표시 순서대로 추가합니다. `visible: false`로 숨기며, `review: true`이면 검토용 표시가 붙습니다. 이미지가 없으면 이미지 요소를 만들지 않습니다. 실제 사례가 없을 때 홈은 사업영역으로 연결합니다.
- `public/images/`: 웹용 공개 자산만 저장합니다. 원본·내부 문서·고객사 자료를 복사하지 않습니다.
- `src/components/Site.module.css`: 공통 레이아웃과 반응형 스타일.
- `docs/asset-register.md`: 출처와 사용 여부 기록. 웹 배포 대상에서 제외합니다.

## Vercel 테스트 재배포

```sh
npx vercel login
npx vercel link --project jnb-company
npx vercel deploy --prod --build-env SITE_PUBLIC=false
```

`--prod`는 Vercel 기본 프로젝트 URL을 갱신하는 옵션입니다. 사이트는 `SITE_PUBLIC=false`인 테스트 상태를 유지합니다. `SITE_PUBLIC` 기본값도 false이며 preview 환경은 true를 지정해도 검색 제외됩니다. `.vercelignore`로 원본·검토 자료·문서·화면 캡처를 업로드에서 제외합니다. `noindex`, `X-Robots-Tag`, robots.txt를 적용하지만 접근 제한 기능은 아닙니다.

## 정식 도메인 전환

설정 기준은 `src/lib/deployment.mjs`입니다. 현재 배포 주소는 Vercel의 `VERCEL_URL`에서 가져오고 공식 후보 주소 `https://www.jnbcompany.co.kr`와 분리합니다. 테스트 중에는 canonical이나 자동 도메인 이동을 설정하지 않습니다.

추후 같은 Vercel 프로젝트에 `www.jnbcompany.co.kr`과 `jnbcompany.co.kr`을 연결하고 DNS·HTTPS·www 리다이렉트를 확인합니다. 콘텐츠와 연락처 확정 후 production 환경에 `SITE_PUBLIC=true`, `SITE_URL=https://www.jnbcompany.co.kr`을 설정해 재배포합니다. 정식 공개 시 페이지별 canonical·공유 URL·사이트맵·구조화 데이터를 확정하고 검색 등록을 진행합니다. 이번 구현에는 구매 도메인 연결이나 DNS 변경을 포함하지 않습니다.

회사 사이트의 Vercel Hobby 사용 조건과 실제 계정의 플랜은 운영자가 확인해야 합니다. 이번 테스트가 상업용 서비스 허용 여부의 판정을 대신하지 않습니다.

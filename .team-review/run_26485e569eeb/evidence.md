# 팀장 확인 근거

- 확인일: 2026-10-08
- 대상: `docs/website-strategy.md` 170줄
- 원문 SHA256: `528401EECC2ED8AEA656DA25A90CC25993430B48080EF592DB42EC8E58C96A73`
- Git 기준: `main`, HEAD `4fcba6ba9a26b3d6e0bdbc5956ac89a7e4533190`. 전략 문서는 미추적 작업 파일이며 현재 내용을 검토했다.
- 확인 범위: 전략 원문, 참고 프로젝트의 일부 코드, 공식 기술·운영 문서. 회사 자료 폴더의 전체 조사, 경력·실적·공개 권한 검증, 실제 고객 조사, 빌드·배포·메일 수신 시험은 수행하지 않았다.

## 기술·비용 확인

1. [Next.js 정적 내보내기 공식 문서](https://nextjs.org/docs/app/guides/static-exports): `output: 'export'`는 HTML/CSS/JS를 `out`으로 출력한다. 기본 이미지 최적화, 요청 의존 기능, ISR 등은 지원하지 않는다. 따라서 정적 생성과 정적 내보내기를 구분한 원문 115줄은 타당하다. Vercel에서 정적 생성과 기본 이미지 최적화를 유지하는 방안은 합리적 후보이나, 비용·이미지 수·운영 책임자를 확인하기 전 확정하지 않는다.
2. [Vercel Hobby 공식 문서](https://vercel.com/docs/plans/hobby): 개인·비상업용 제한을 명시한다. 회사 사이트에 무료 Hobby를 전제하지 않은 원문 119줄은 타당하다.
3. [Vercel Pro 공식 문서](https://vercel.com/docs/plans/pro-plan): 확인 시점 기준 기본 플랫폼 요금 월 US$20에 배포 가능 좌석 1개와 월 사용 크레딧 US$20이 포함된다. 추가 배포 좌석은 각각 월 US$20, 추가 사용량과 유료 부가 기능 및 세금은 별도다. 도메인 갱신·메일 서비스·유지보수 비용도 별도 산정해야 한다. 실제 계정의 총액과 계약 조건은 미확인이다. Pro를 정액 총비용으로 해석하면 안 된다.
4. [Vercel 배포 보호 공식 문서](https://vercel.com/docs/deployment-protection), [Google noindex 공식 문서](https://developers.google.com/search/docs/crawling-indexing/block-indexing): 검토 배포의 검색 제외와 접근 제한은 별개다. 미공개 자료가 있는 검토용 사이트는 접근 보호를 검수하고, 검색 제외만으로 비공개가 보장된다고 간주하지 않는다. 원문에 이미 존재하는 공개자료 선별·검토배포 관리 원칙을 구체화하는 권고다.

## 참고 코드와 그래프 확인

- 기존 `graphify-out/.graphify_root`는 `C:/dev/gsplplus/gsplplus-frontend/src`이다. JNB 구현을 분석한 그래프가 아니다.
- 그래프 실제 어휘에서 `portfolio project services contact metadata sitemap`을 골라 BFS 조회했다. `data/projects.ts:L4`, `app/portfolio/page.tsx:L23`, `app/contact/page.tsx:L13` 등에서 데이터·페이지 구조의 재사용 후보를 찾았다. 그래프 경로는 위 참고 프로젝트 `src` 기준이다.
- 원문 확인: 참고 프로젝트 `src/data/projects.ts`는 공용 `Project` 타입과 프로젝트 데이터가 있고, 포트폴리오 페이지에서 사용한다. 이 구조는 JNB 데이터 분리의 참고 근거가 된다. 기존 데이터의 회사 실적을 JNB로 옮길 근거는 아니다.
- 원문 확인: 참고 프로젝트 `src/app/contact/page.tsx`는 이메일 주소를 일반 텍스트로 표시하고, 메타데이터에 ‘1영업일 내 답변’ 문구가 있다. JNB는 전략 17·114줄의 공개 주소와 메일 작성 링크를 별도로 검수하고 회신 약속도 자체 운영 능력에 맞춰 정해야 한다.
- 참고 프로젝트 `next.config.ts`에는 `output: 'export'` 설정이 없었다. 참고 코드가 순수 정적 내보내기를 검증했다고 간주하지 않는다.
- [GSPLPLUS 공개 홈](https://gspls.kr/)에서 소개·서비스·사례·문의 흐름은 확인했다. 문의 성과나 JNB 적합성은 입증하지 않는다.

## 실행 기록

- Orca Run: `run_26485e569eeb`.
- 최초 경로 선택은 저장소가 Orca에 등록되지 않아 Task 생성 전 실패했다. JNB 저장소를 등록했다.
- 이후 `current` 선택자가 실제로 다른 활성 작업공간을 선택했다. 각 검토자에게 JNB 원문과 보고서의 절대경로를 전달하고 다른 저장소 변경을 금지했다. 검토자 전원에게 선호 결론이나 다른 검토자의 의견은 공유하지 않았다.
- 세 검토자의 작업 입력이 작성창에 남아 있어 본문을 재전송하지 않고 Enter 제출만 마무리했다. 이후 실제 작업 상태와 원문 읽기 기록을 확인했다.
- 공급자는 네 역할 모두 설정 기본값 Codex이며 모델·effort를 별도 지정하지 않았다. 공급자 대체는 없다.

## 완료 대조

| 역할 | Task | Dispatch | 산출물·결과 | 정리 |
| --- | --- | --- | --- | --- |
| 비판 | `task_0941f1b9e5b4` | `ctx_7a28331c21ce` | `critic.md`, succeeded·조건부 통과 | released |
| 가능성 | `task_d1c5ca77ffb4` | `ctx_e167c42164c1` | `possibility.md`, succeeded·조건부 통과 | released |
| 외부인 | `task_17834aacbeaf` | `ctx_ba8c015da3d3` | `outsider.md`, succeeded·조건부 통과 | released |
| 확장성 | `task_c68f7dbb4a4a` | `ctx_8fd758f11623` | `scalability.md`, succeeded·조건부 통과 | released |

완료 메시지의 Task·Dispatch·reportPath를 각각 보고서와 대조했다. 네 보고서 모두 원문 줄번호와 근거·추정 구분, 보완 시점, 판단 변경 조건을 포함한다. 모든 완료 메시지를 처리하고 확인했으며 마지막 fleet 조회에서 released 4개, 정리할 세션 0개를 확인했다. 원문 SHA256은 검토 후에도 동일하다. 검토 보고서의 로컬 링크 대상이 모두 존재한다.

종합 결과는 `docs/website-strategy-review.md`에 기록했다. 그래프 탐색 결과와 참고 프로젝트 범위의 한계는 `graphify save-result`로 `graphify-out/memory`에 저장했다. CLI의 이번 샌드박스 시작 오류로 생성된 루트 `debug.log`는 이 실행 폴더의 `orca-startup.log`로 옮겨 보존한다.

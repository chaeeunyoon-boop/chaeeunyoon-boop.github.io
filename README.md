# AX Builder Portfolio — 윤채은 / Chaeeun Yun

현업의 반복 병목을 찾아 규칙화하고, 실제로 돌아가는 AI 워크플로우로 푸는 **AX · 빌더형 문제해결사** 포트폴리오입니다.
빌드 도구 없이 동작하는 정적 사이트(HTML/CSS/JS)라, 파일을 고치고 저장하면 그대로 반영됩니다.

- **Live**: https://chaeeunyoon-boop.github.io/
- **Languages**: 한국어 (KO) · English (EN) · 简体中文 (ZH)
- **Theme**: Dark / Light
- **Stack**: no framework, no build step, no dependencies except a webfont

---

## 1. 파일 구조

```
index.html    화면의 뼈대 (섹션 컨테이너만 있고 내용은 JS가 채웁니다)
styles.css    디자인 토큰(색·간격)과 모든 스타일
app.js        data.js를 읽어 화면을 그리고, KO/EN/ZH·테마 토글을 처리
data.js       ★ 모든 문구·수치가 들어 있는 콘텐츠 파일 (여기만 고치면 됩니다)
README.md     이 문서
```

내용을 바꾸고 싶을 때 `index.html`을 열 이유는 거의 없습니다. **거의 모든 수정은 `data.js`에서** 합니다.

---

## 2. 문구 수정 방법

`data.js`는 `SITE` 객체 하나로 이루어져 있습니다. 모든 문구는 세 언어를 함께 가진 형태입니다.

```js
label: {
  ko: "캠페인 제안서 초안",
  en: "Campaign proposal draft",
  zh: "广告提案初稿"
}
```

- 세 키를 모두 채워 주세요. 하나가 비면 `en` → `ko` 순서로 대신 표시됩니다.
- 숫자·기간도 같은 방식입니다. `{ ko: "2주", en: "2 weeks", zh: "2 周" }`

### 블록별 위치

| 블록 | 화면에서의 위치 |
|---|---|
| `ui` | 헤더 메뉴, 히어로 문장, 섹션 제목·리드문, 버튼 라벨, 푸터 |
| `metrics` | 히어로 오른쪽 임팩트 카드 3개 (Before → After) |
| `cases` | 케이스 스터디 4건 — 각 항목의 `problem` / `rules` / `impact` 세 단계 |
| `layers` | 판단 3층 구조 (모델 / 규칙 / 사람) |
| `principles` | 빌더 원칙 카드 |
| `stack` | 기술 스택 그룹과 항목 |
| `timeline` | 경력 타임라인 (최신순) |
| `contact` | 연락 링크 |

### 케이스 하나를 추가하려면

`cases` 배열에 같은 모양의 객체를 하나 더 넣으면 목록·탭·패널이 자동으로 늘어납니다.

```js
{
  id: "my-case",                       // 고유 id
  no: "05",                            // 목록에 표시될 번호
  tag: { ko: "...", en: "...", zh: "..." },
  title: { ko: "...", en: "...", zh: "..." },
  org: { ko: "...", en: "...", zh: "..." },      // 소속
  role: { ko: "...", en: "...", zh: "..." },     // 역할
  period: { ko: "...", en: "...", zh: "..." },   // 기간
  oneLiner: { ko: "...", en: "...", zh: "..." }, // 한 줄 요약
  problem: { lead: {...}, bullets: [ {...}, {...} ] },
  rules: {
    lead: {...},
    flow: [ { label: {...}, sub: {...}, gate: true } ],  // gate:true → 강조(승인 지점)
    notes: [ {...}, {...} ]                              // 규칙·도구 칩
  },
  impact: {
    lead: {...},
    metrics: [ { before: {...}, after: {...}, label: {...} } ],
    note: {...}
  }
}
```

케이스 순서는 배열 순서를 따릅니다.

---

## 3. 디자인 수정

`styles.css` 맨 위 두 블록이 색을 결정합니다.

```css
html[data-theme="dark"]  { --bg: …; --accent: #3ddc97; … }
html[data-theme="light"] { --bg: …; --accent: #0d9a6c; … }
```

- 강조색: `--accent`
- 배경/카드: `--bg`, `--surface`, `--surface-2`
- 글자: `--text`, `--muted`, `--dim`
- 모서리: `--radius`

레이아웃 폭은 `--wrap`(기본 1160px), 폰트는 `--sans` / `--mono`에서 바꿉니다.

---

## 4. 로컬에서 보기

`index.html`을 브라우저로 바로 열어도 동작합니다. 서버로 보고 싶다면:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

---

## 5. 배포 (GitHub Pages)

이 저장소는 `main` 브랜치 루트를 그대로 배포합니다.

- Settings → Pages → Source: **Deploy from a branch**, Branch: `main` / `/ (root)`
- `main`에 푸시하면 1~2분 뒤 https://chaeeunyoon-boop.github.io/ 에 반영됩니다.
- GitHub Pages는 CSS·JS를 약 10분간 캐시합니다. 수정이 바로 안 보이면 `index.html`의 `?v=2` 숫자를 `?v=3`처럼 올려 푸시하세요(브라우저 캐시를 건너뛰는 가장 확실한 방법).

---

## 6. Claude Code · Kiro Crew로 이어서 작업하기

이 구조는 AI 코딩 도구가 고치기 쉽도록 일부러 단순하게 잡았습니다. 저장소를 열고 이렇게 요청하면 됩니다.

- "`data.js`의 케이스 01 `impact.metrics`에 '승인 게이트 통과율' 항목을 ko/en/zh로 추가해줘"
- "히어로 문장을 더 짧게 다듬어줘. 세 언어 모두. `SITE.ui.heroLine1~3`만 건드려"
- "`styles.css`의 `--accent`를 딥 블루 계열로 바꾸고 대비를 확인해줘"
- "새 케이스(05)를 `cases` 배열에 추가해줘. 형식은 기존 항목과 동일하게, 세 언어 모두 채워서"

수정 후에는 세 언어 토글과 다크/라이트 모드에서 레이아웃이 깨지지 않는지 한 번씩 확인하세요.

---

## 7. 공개 범위 원칙

이 사이트는 **공개 페이지**입니다. 아래는 의도적으로 지킨 경계입니다.

- 회사 내부 시스템·도메인, 비공개 대시보드, 내부 단가·수치는 넣지 않습니다.
- 직함은 실제 직함(`Influencer Marketing Manager @ Onthelook`)을 그대로 두고, 없는 타이틀을 만들지 않습니다.
- 공개 연락 수단은 이메일, LinkedIn, GitHub 세 가지뿐입니다. 전화번호·주소 등 개인정보는 넣지 않습니다.
- 모든 수치는 실제 업무 기록에 근거하며, 측정하지 않은 값은 채우지 않습니다.

문구를 추가할 때도 같은 기준을 유지해 주세요.

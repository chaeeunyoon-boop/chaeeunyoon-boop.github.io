/* =============================================================
   overview.js — 한 페이지 요약 지도(overview.html)
   · 중심(허브) → 6개 갈래 → 세부 노드로 이어지는 지도를 그리고,
     SVG 연결선 위로 빛이 흐르게 합니다.
   · 노드를 누르면 오른쪽 인스펙터(모바일에선 카드 안)에 상세가 열립니다.
   · KO / EN / ZH, 라이트·다크 전환은 기존 포폴(data.js/app.js)과
     같은 저장 키(ax.lang, ax.theme)를 씁니다.
   · 숫자·경력·스택·데모 문구는 data.js의 SITE에서 그대로 읽어 옵니다.
     (data.js를 고치면 이 페이지도 같이 바뀝니다.)
   ============================================================= */

(function () {
  "use strict";

  var LANGS = ["ko", "en", "zh"];
  var LANG_ATTR = { ko: "ko", en: "en", zh: "zh-Hans" };
  var STORE = { lang: "ax.lang", theme: "ax.theme" };
  var NS = "http://www.w3.org/2000/svg";
  var S = typeof SITE !== "undefined" ? SITE : null;
  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var state = {
    lang: pickLang(),
    theme: pickTheme(),
    sel: null,      // null | { kind:"group", g } | { kind:"child", g, i }
    tourId: null,
  };
  var hover = null;
  var wires = [];   // { path, circle, len, off }

  /* ---------------- 저장값 / 언어 ---------------- */
  function pickLang() {
    try {
      var saved = localStorage.getItem(STORE.lang);
      if (saved && LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || "ko").toLowerCase();
    if (nav.indexOf("zh") === 0) return "zh";
    if (nav.indexOf("ko") === 0) return "ko";
    return "en";
  }

  function pickTheme() {
    try {
      var saved = localStorage.getItem(STORE.theme);
      if (saved === "dark" || saved === "light") return saved;
    } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  /* {ko,en,zh} 또는 문자열 → 현재 언어 텍스트 */
  function L(obj, fallback) {
    if (obj == null) return fallback || "";
    if (typeof obj === "string") return obj;
    var v = obj[state.lang];
    if (v != null && v !== "") return v;
    if (obj.en != null && obj.en !== "") return obj.en;
    if (obj.ko != null && obj.ko !== "") return obj.ko;
    return fallback || "";
  }

  function get(fn, fallback) {
    try {
      var v = fn();
      return v == null ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }

  /* ---------------- UI 문구 ---------------- */
  var UI = {
    docTitle: {
      ko: "윤채은 — 한 페이지 요약",
      en: "Chaeeun Yun — one-page overview",
      zh: "Chaeeun Yun — 一页概览",
    },
    skip: { ko: "본문으로 건너뛰기", en: "Skip to content", zh: "跳到正文" },
    brandSub: { ko: "한 페이지 요약", en: "ONE-PAGE OVERVIEW", zh: "一页概览" },
    backMain: { ko: "← 메인 포폴", en: "← Main portfolio", zh: "← 主页作品集" },
    backDemos: { ko: "데모", en: "Demos", zh: "演示" },
    barLabel: { ko: "HUB & SPOKE · 한 페이지 요약", en: "HUB & SPOKE · one-page overview", zh: "HUB & SPOKE · 一页概览" },
    showAll: { ko: "전체 보기", en: "Show all", zh: "查看全部" },
    tour: { ko: "자동 투어", en: "Auto tour", zh: "自动巡览" },
    pause: { ko: "일시정지", en: "Pause", zh: "暂停" },
    hint: { ko: "노드를 눌러 자세히 보기", en: "Click a node for detail", zh: "点节点看详情" },
    foot: {
      ko: "메인 포트폴리오의 공개 내용에서 요약했습니다 · 회사 내부 자료·비공개 데이터는 넣지 않았습니다",
      en: "Summarised from the public portfolio · no company-internal or private data",
      zh: "内容摘自公开的作品集主页 · 不含公司内部资料与非公开数据",
    },
    names: { ko: "윤채은", en: "Chaeeun Yun", zh: "Chaeeun Yun" },
    role: { ko: "AX Builder · Problem Solver", en: "AX Builder · Problem Solver", zh: "AX 构建者 · 问题解决者" },
    hubEyebrow: { ko: "HUB · 중심", en: "HUB · centre", zh: "HUB · 中心" },
    roleHead: { ko: "프로필", en: "Profile", zh: "简介" },
    mapLabel: { ko: "한 페이지 요약 지도", en: "One-page overview map", zh: "一页概览地图" },
    hubAria: { ko: "중심 · 윤채은 요약으로 돌아가기", en: "Centre · back to the Chaeeun Yun summary", zh: "中心 · 回到 Chaeeun Yun 概览" },
    roleValue: {
      ko: "Influencer Marketing Manager @ Onthelook",
      en: "Influencer Marketing Manager @ Onthelook",
      zh: "Influencer Marketing Manager @ Onthelook",
    },
    quickHead: { ko: "바꾸기 전 → 후", en: "Before → after", zh: "之前 → 之后" },
    contactHead: { ko: "연락", en: "Contact", zh: "联系" },
    hubNote: {
      ko: "지도에서 갈래나 노드를 누르면 그 자리에서 자세히 볼 수 있습니다. 가운데 카드를 누르면 이 화면으로 돌아옵니다.",
      en: "Click a branch or a node to read the detail in place. The centre card brings you back here.",
      zh: "点一个分支或节点，就能在这里看到细节。点中间的卡片回到这一页。",
    },
    inThisHead: { ko: "이 안에", en: "Inside", zh: "包含" },
    keyHead: { ko: "핵심", en: "Key", zh: "要点" },
    backAll: { ko: "← 전체 보기", en: "← Show all", zh: "← 查看全部" },
    backGroup: { ko: "← 갈래로", en: "← Back to branch", zh: "← 回到分支" },
    openInSite: { ko: "메인 포폴에서 보기", en: "Open on the main site", zh: "在主页中查看" },
    fictional: { ko: "가상 데이터", en: "Fictional data", zh: "虚构数据" },
    statCareer: { ko: "경력", en: "CAREER", zh: "经历" },
    statCases: { ko: "케이스", en: "CASES", zh: "案例" },
    statDemos: { ko: "데모", en: "DEMOS", zh: "演示" },
  };

  /* ---------------- 지도 내용 ----------------
     group = { id, side, tag, title, lead, link{label,href}, bullets[], chips[],
               children[{ label, lead, bullets[{k,v}], chips[], href, tag }] }
     숫자·문구의 출처는 data.js(SITE). 연출용 짧은 라벨만 여기서 씁니다. */
  function buildGroups() {
    return [gRoles(), gBuilds(), gOps(), gStack(), gImpact(), gNext()];
  }

  function caseOf(i) {
    return get(function () { return S.cases[i]; }, null);
  }
  function firstMetric(c) {
    return get(function () { return c.impact.metrics[0]; }, null);
  }
  function metricPair(c) {
    var m = firstMetric(c);
    if (!m) return { label: L(c && c.title), pair: "", sub: "" };
    return {
      pair: L(m.before) + " → " + L(m.after),
      sub: L(m.label),
      label: L(m.before) + " → " + L(m.after),
    };
  }

  /* 01 · 지금 하는 일 */
  function gRoles() {
    return {
      id: "roles",
      side: "left",
      tag: "01 · ROLES",
      title: { ko: "지금 하는 일", en: "What I do now", zh: "现在做的事" },
      lead: {
        ko: "온더룩 MCN팀에서 크리에이터를 맡으면서, 그 업무 옆에서 AI 도구를 만듭니다.",
        en: "I look after creators on the MCN team at Onthelook, and build AI tools alongside that work.",
        zh: "在 Onthelook 的 MCN 团队负责创作者，同时在这份工作旁边做 AI 工具。",
      },
      link: { href: "./#career", label: { ko: "경력 타임라인", en: "Career timeline", zh: "完整履历" } },
      bullets: [
        { k: { ko: "경력", en: "Experience", zh: "经历" }, v: { ko: "4년 4개월", en: "4 yr 4 mo", zh: "4 年 4 个月" } },
        { k: { ko: "현재", en: "Now", zh: "现在" }, v: { ko: "온더룩 MCN팀 매니저 · 2026.02 –", en: "MCN Team Manager, Onthelook · 2026.02 –", zh: "Onthelook MCN 团队经理 · 2026.02 –" } },
        { k: { ko: "담당", en: "Scope", zh: "负责范围" }, v: { ko: "뷰티·패션 크리에이터 최대 30팀", en: "Up to 30 beauty & fashion creator teams", zh: "最多 30 个美妆·时尚创作者团队" } },
      ],
      children: [
        {
          label: { ko: "크리에이터 마케팅 4년 4개월", en: "4 yr 4 mo in creator marketing", zh: "4 年 4 个月的创作者营销" },
          lead: {
            ko: "샌드박스네트워크에서 크리에이터 12팀 매니지먼트로 시작해, 올투원, 아이스크리에이티브를 거쳐 지금 온더룩 MCN팀까지 크리에이터 마케팅 실무를 이어 왔습니다.",
            en: "It started with managing 12 creator teams at Sandbox Network, then Alltoone and Ice Creative, and now the MCN team at Onthelook.",
            zh: "从 Sandbox Network 管理 12 个创作者团队开始，经过 Alltoone、Ice Creative，到现在 Onthelook 的 MCN 团队，一直在做创作者营销实务。",
          },
          bullets: [
            { k: { ko: "총 경력", en: "Total", zh: "总经历" }, v: { ko: "4년 4개월", en: "4 years 4 months", zh: "4 年 4 个月" } },
            { k: { ko: "지나온 곳", en: "Where", zh: "走过的地方" }, v: { ko: "샌드박스네트워크 → 올투원 → 아이스크리에이티브 → 온더룩", en: "Sandbox Network → Alltoone → Ice Creative → Onthelook", zh: "Sandbox Network → Alltoone → Ice Creative → Onthelook" } },
          ],
          chips: [
            { ko: "크리에이터 매니지먼트", en: "Creator management", zh: "创作者经纪" },
            { ko: "캠페인 운영", en: "Campaign ops", zh: "活动运营" },
            { ko: "섭외 · 정산", en: "Casting · payments", zh: "邀约 · 结算" },
          ],
          href: "./#career",
        },
        {
          label: { ko: "뷰티·패션 크리에이터 최대 30팀", en: "Up to 30 beauty & fashion creators", zh: "最多 30 个美妆·时尚创作者" },
          lead: {
            ko: "유튜버·인플루언서 최대 30팀을 단독으로 운영합니다. 광고 문의, 섭외, 정산, 리포트가 한 사람에게 모이는 구조라 반복되는 일이 생기기 쉬운 자리입니다.",
            en: "I run up to 30 YouTuber and influencer teams on my own. Inquiries, casting, payments and reports all land on one person — the kind of seat where repeated work piles up.",
            zh: "独自运营最多 30 个 YouTuber 和网红团队。广告咨询、邀约、结算、报告都集中在一个人身上，这种位置很容易长出重复的工作。",
          },
          bullets: [
            { k: { ko: "형태", en: "Shape", zh: "形态" }, v: { ko: "유튜버 · 인플루언서 팀 단위 운영", en: "YouTuber and influencer teams", zh: "以 YouTuber、网红团队为单位" } },
          ],
          chips: [
            { ko: "콘텐츠 검수", en: "Content review", zh: "内容审核" },
            { ko: "대금 정산", en: "Payments", zh: "款项结算" },
            { ko: "리포트", en: "Reporting", zh: "报告" },
          ],
        },
        {
          label: { ko: "AI 업무 도우미를 직접 만든다", en: "I build the AI tools myself", zh: "亲手做 AI 工作工具" },
          lead: {
            ko: "반복해서 막히는 일을 판단 기준으로 옮기고, 매일 쓰이는 도구로 만듭니다. 기획서로 끝내지 않고 실제로 돌아가고 다른 사람이 이어받을 수 있는 형태까지 갑니다.",
            en: "I turn the work that keeps getting stuck into criteria, then into a tool that gets used every day — not a proposal, but something that runs and that someone else can take over.",
            zh: "把反复卡住的工作变成判断标准，再做成每天在用的工具。不停在方案上，而是一直做到真正能运行、别人也能接手。",
          },
          bullets: [
            { k: { ko: "결과", en: "Result", zh: "结果" }, v: { ko: "제안서 초안 1시간 → 3~5분", en: "Proposal draft: 1 hr → 3–5 min", zh: "提案初稿：1 小时 → 3~5 分钟" } },
            { k: { ko: "형태", en: "Shape", zh: "形态" }, v: { ko: "판단 기준 12개 문서화", en: "12 criteria written down", zh: "12 条判断标准写成文档" } },
          ],
          chips: [
            { ko: "규칙 설계", en: "Rule design", zh: "规则设计" },
            { ko: "사람 확인 지점", en: "Human checkpoints", zh: "人工确认点" },
          ],
          href: "./#cases",
        },
      ],
    };
  }

  /* 02 · 직접 만든 것 (라이브 데모 3종) */
  function gBuilds() {
    var sim = get(function () { return S.demos.simulator; }, {});
    var dash = get(function () { return S.demos.dashboard; }, {});
    var out = get(function () { return S.demos.outreach; }, {});
    var fic = L(UI.fictional);

    return {
      id: "builds",
      side: "left",
      tag: "02 · BUILDS",
      title: { ko: "직접 만든 것", en: "What I built", zh: "亲手做的东西" },
      lead: {
        ko: "실제 업무에서 만든 방식을 100% 가상 데이터로 옮겨 사이트에 올렸습니다. 아래 데모에서 직접 눌러 볼 수 있습니다.",
        en: "The approach built at work, moved onto this site with 100% fictional data. You can click through all three below.",
        zh: "把工作中做出来的方式，用 100% 虚构数据搬到了网站上。下面三个都能亲手点。",
      },
      link: { href: "./#demos", label: { ko: "라이브 데모 3종", en: "The three live demos", zh: "三个实时演示" } },
      bullets: [
        { k: { ko: "데이터", en: "Data", zh: "数据" }, v: { ko: "모두 가상 · 서버 호출·저장 없음", en: "All fictional · no server calls, no storage", zh: "全部虚构 · 不调用服务器、不保存" } },
        { k: { ko: "지키는 선", en: "The line", zh: "守住的线" }, v: { ko: "금액과 외부 발송은 사람이 확인", en: "Money and outbound sends get a human check", zh: "金额和对外发送必须由人确认" } },
      ],
      chips: [{ ko: "가상 데이터", en: "Fictional data", zh: "虚构数据" }],
      children: [
        {
          label: { ko: "문의 → 12개 기준 → 제안서 초안", en: "Inquiry → 12 checks → proposal draft", zh: "咨询 → 12 项检查 → 提案初稿" },
          lead: L(get(function () { return sim.lead; }, null), ""),
          bullets: [
            { k: { ko: "기준", en: "Checks", zh: "标准" }, v: { ko: "12개 (카테고리·예산·타깃·권리 등)", en: "12 (category, budget, target, rights and more)", zh: "12 项（品类、预算、目标、权利等）" } },
            { k: { ko: "멈추는 곳", en: "Stops at", zh: "停下的地方" }, v: { ko: "2,000만원 초과 금액 · 성과 연동 지급", en: "Amounts over ₩20M · performance-based payment", zh: "超过 2,000 万韩元的金额 · 按效果付款" } },
          ],
          chips: [{ ko: "12개 기준", en: "12 criteria", zh: "12 项标准" }, { ko: "사람 승인", en: "Human approval", zh: "人工审批" }, { ko: fic }],
          href: "./#demos",
          tag: "DEMO 01",
        },
        {
          label: { ko: "광고 건별 진행 현황판", en: "Per-campaign status board", zh: "各广告进度看板" },
          lead: L(get(function () { return dash.lead; }, null), ""),
          bullets: [
            { k: { ko: "단계", en: "Stages", zh: "阶段" }, v: { ko: "신규 문의 → 금액 협의 → 검토 → 승인 대기 → 계약 → 지급 → 완료", en: "New inquiry → amount talks → fit check → awaiting approval → contracting → payment → closed", zh: "新咨询 → 金额协商 → 确认 → 待审批 → 签约 → 付款 → 完成" } },
            { k: { ko: "원칙", en: "Rule", zh: "规则" }, v: { ko: "'승인 대기'는 AI가 보내지 않고 사람에게 넘깁니다", en: "'Awaiting approval' is handed to a person, never sent by AI", zh: "“待审批”不会由 AI 发出，而是交给人" } },
          ],
          chips: [{ ko: "상태 칸반", en: "Status kanban", zh: "状态看板" }, { ko: "숫자 자동 재계산", en: "Auto-recounted KPIs", zh: "数字自动重算" }, { ko: fic }],
          href: "./#demos",
          tag: "DEMO 02",
        },
        {
          label: { ko: "해외 협업 제안 메일 관리판", en: "Overseas outreach mail board", zh: "海外合作邮件看板" },
          lead: L(get(function () { return out.lead; }, null), ""),
          bullets: [
            { k: { ko: "범위", en: "Scope", zh: "范围" }, v: { ko: "해외 파트너 5곳의 진행 단계", en: "Progress across five overseas partners", zh: "5 家海外合作方的进度" } },
            { k: { ko: "언어", en: "Language", zh: "语言" }, v: { ko: "같은 메일을 KO · EN · ZH로 전환", en: "One mail, switched across KO · EN · ZH", zh: "同一封邮件在 KO · EN · ZH 之间切换" } },
          ],
          chips: [{ ko: "3개 언어 템플릿", en: "Templates in 3 languages", zh: "三语模板" }, { ko: "발송 전 검토", en: "Review before sending", zh: "发送前审阅" }, { ko: fic }],
          href: "./#demos",
          tag: "DEMO 03",
        },
      ],
    };
  }

  /* 03 · 판단의 세 층 */
  function gOps() {
    var layers = get(function () { return S.layers; }, []);
    var principles = get(function () { return S.principles; }, []);
    var kids = layers.map(function (ly) {
      return {
        label: L(ly.title),
        lead: L(ly.desc),
        tag: ly.tag,
        bullets: [{ k: { ko: "예", en: "Example", zh: "例子" }, v: L(ly.example) }],
        chips: [],
      };
    });

    return {
      id: "ops",
      side: "left",
      tag: "03 · JUDGMENT",
      title: { ko: "판단의 세 층", en: "Three layers of judgment", zh: "判断的三层" },
      lead: L(get(function () { return S.ui.principlesLead; }, null), ""),
      link: { href: "./#principles", label: { ko: "원칙 5개", en: "The five principles", zh: "五条原则" } },
      bullets: [],
      chips: principles.map(function (p) { return L(p.title); }),
      children: kids,
    };
  }

  /* 04 · 쓰는 도구 */
  function gStack() {
    var stack = get(function () { return S.stack; }, []);
    var leads = [
      { ko: "판단과 초안은 모델에 맡기고, 결과는 제가 낸 최종본과 대조해 검증합니다.", en: "Judgment and drafts go to the model; results are checked against the final drafts I wrote.", zh: "判断和初稿交给模型，结果与我写的最终版对照验证。" },
      { ko: "데이터 수집과 정리는 스크립트가 맡고, 무엇을 볼지는 규칙으로 정해 둡니다.", en: "Scripts collect and tidy the data; what to look at is fixed as a rule.", zh: "数据的采集和整理交给脚本，看什么由规则定。" },
      { ko: "정적 결과물을 S3 · CloudFront와 GitHub Pages로 배포합니다.", en: "Static output is deployed on S3 · CloudFront and GitHub Pages.", zh: "静态成果通过 S3 · CloudFront 和 GitHub Pages 部署。" },
      { ko: "사람이 이미 쓰는 메일·메신저·시트에서 읽어 오고, 새 입력 칸을 만들지 않습니다.", en: "It reads from the mail, messenger and sheets people already use, and never adds new fields.", zh: "从大家本来就在用的邮件、聊天和表格里读取，不新增填写栏位。" },
    ];
    var kids = stack.map(function (row, i) {
      return {
        label: L(row.group),
        lead: leads[i] || "",
        bullets: [],
        chips: (row.items || []).map(function (it) { return L(it); }),
      };
    });

    return {
      id: "stack",
      side: "right",
      tag: "04 · STACK",
      title: { ko: "쓰는 도구", en: "The stack", zh: "在用的工具" },
      lead: L(get(function () { return S.ui.stackNote; }, null), ""),
      bullets: [],
      chips: [],
      children: kids,
    };
  }

  /* 05 · 측정한 숫자 */
  function gImpact() {
    var cases = get(function () { return S.cases; }, []);
    var ev = get(function () { return S.demos.evidence; }, null);
    var kids = cases.map(function (c) {
      var m = firstMetric(c);
      return {
        label: m ? L(m.before) + " → " + L(m.after) : L(c.title),
        lead: L(c.title),
        tag: c.no,
        bullets: [
          { k: { ko: "무엇", en: "What", zh: "对象" }, v: m ? L(m.label) : "" },
          { k: { ko: "소속 · 기간", en: "Where · when", zh: "单位 · 期间" }, v: L(c.org) + " · " + L(c.period) },
        ],
        chips: [],
        href: "./#cases",
      };
    });

    return {
      id: "impact",
      side: "right",
      tag: "05 · IMPACT",
      title: { ko: "측정한 숫자", en: "Measured numbers", zh: "测出来的数字" },
      lead: {
        ko: "실제 업무에서 측정한 값만 넣었습니다. 재보지 않은 값은 채우지 않았습니다.",
        en: "Only what was measured at work. Numbers never measured are left out.",
        zh: "只放工作中实际测量过的数字。没测过的就不填。",
      },
      link: { href: "./#cases", label: { ko: "케이스 4건", en: "The four cases", zh: "四个案例" } },
      bullets: [],
      chips: get(function () {
        return ev.stats.map(function (st) { return st.value + " · " + L(st.label); });
      }, []),
      note: get(function () { return L(ev.note); }, ""),
      children: kids,
    };
  }

  /* 06 · 경력과 다음 */
  function gNext() {
    var tl = get(function () { return S.timeline; }, []);
    var path = tl.map(function (row) {
      return { k: L(row.period), v: L(row.org) + " · " + L(row.role) };
    });

    return {
      id: "next",
      side: "right",
      tag: "06 · NEXT",
      title: { ko: "경력과 다음", en: "Career & what's next", zh: "履历与下一步" },
      lead: {
        ko: "현장에서 배운 것을 다음 현장의 구조로 옮기는 일을 하고 싶습니다.",
        en: "I want to carry what I learned on the ground into the structure of the next one.",
        zh: "我想把现场学到的东西，变成下一个现场的结构。",
      },
      link: { href: "./#contact", label: { ko: "연락하기", en: "Get in touch", zh: "联系我" } },
      bullets: [
        { k: { ko: "지향", en: "Direction", zh: "方向" }, v: { ko: "AX · 빌더형 문제해결사", en: "AX · a builder-style problem solver", zh: "AX · 构建型问题解决者" } },
      ],
      chips: [],
      children: [
        {
          label: { ko: "지나온 길", en: "The path so far", zh: "走过的路" },
          lead: {
            ko: "크리에이터 매니지먼트에서 시작해, 반복해서 막히는 일을 숫자로 보고 구조로 옮기는 쪽으로 옮겨 왔습니다.",
            en: "From creator management, I moved toward seeing the work that kept getting stuck in numbers and turning it into structure.",
            zh: "从创作者经纪开始，逐渐转向把反复卡住的工作看成数字、再变成结构。",
          },
          bullets: path,
          chips: [],
        },
        {
          label: { ko: "지금", en: "Now", zh: "现在" },
          lead: {
            ko: "실무에서 반복되는 판단을 규칙과 자동화로 옮기고, 그 결과를 숫자로 확인하는 일을 하고 있습니다.",
            en: "I move repeated judgment at work into rules and automation, then check the result in numbers.",
            zh: "把工作中重复的判断变成规则和自动化，再用数字确认结果。",
          },
          bullets: [],
          chips: [
            { ko: "규칙화", en: "Rule-making", zh: "规则化" },
            { ko: "자동화", en: "Automation", zh: "自动化" },
            { ko: "측정", en: "Measurement", zh: "测量" },
          ],
        },
        {
          label: { ko: "다음 목표 · 소통 AI 에이전트", en: "Next · a communication AI agent", zh: "下一步 · 沟通型 AI 智能体" },
          lead: {
            ko: "서로 다른 맥락의 사람과 사람을 잇고, 교육·기회의 사각지대를 푸는 '소통' AI 에이전트를 만들고 싶습니다. 지금 하는 일이 그 출발점입니다.",
            en: "I want to build a 'communication' AI agent that connects people from different contexts and closes the blind spots in education and opportunity. The work I do now is where that starts.",
            zh: "我想做一个“沟通型”AI 智能体，把处在不同语境中的人连接起来，补上教育和机会上的盲区。现在做的事就是起点。",
          },
          bullets: [],
          chips: [
            { ko: "소통 AI 에이전트", en: "Communication AI agent", zh: "沟通型 AI 智能体" },
            { ko: "교육 · 기회", en: "Education · opportunity", zh: "教育 · 机会" },
          ],
          href: "./#contact",
        },
      ],
    };
  }

  /* ---------------- DOM ---------------- */
  var mapEl = document.getElementById("ovMap");
  var wiresEl = document.getElementById("ovWires");
  var wingL = document.getElementById("wingLeft");
  var wingR = document.getElementById("wingRight");
  var hubEl = document.getElementById("ovHub");
  var hubStatus = document.getElementById("ovHubStatus");
  var hubStats = document.getElementById("ovHubStats");
  var inspEl = document.getElementById("ovInsp");
  var barHint = document.getElementById("ovHint");
  var btnAll = document.getElementById("btnAll");
  var btnTour = document.getElementById("btnTour");
  var tourLabel = btnTour ? btnTour.querySelector("[data-i18n='tour']") : null;

  var groups = [];

  /* ---------------- 렌더 ---------------- */
  function applyStatic() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (UI[key]) el.textContent = L(UI[key]);
    });
    document.title = L(UI.docTitle);
    document.documentElement.lang = LANG_ATTR[state.lang];
    document.documentElement.setAttribute("data-theme", state.theme);
    document.querySelectorAll(".seg__btn").forEach(function (b) {
      var on = b.getAttribute("data-lang") === state.lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    if (barHint) barHint.textContent = L(UI.hint);
    if (tourLabel) tourLabel.textContent = L(state.tourId ? UI.pause : UI.tour);
  }

  function renderHub() {
    if (!hubEl) return;
    hubEl.querySelector(".ov-hub__name").textContent = L(UI.names);
    hubEl.querySelector(".ov-hub__role").textContent = L(UI.role);
    hubStatus.textContent = L(get(function () { return S.ui.heroStatus; }, null), "");

    hubStats.innerHTML = "";
    var cases = get(function () { return S.cases.length; }, 4);
    var demos = 3;
    [
      { v: L({ ko: "4년 4개월", en: "4y 4mo", zh: "4 年 4 个月" }), l: L(UI.statCareer) },
      { v: String(cases), l: L(UI.statCases) },
      { v: String(demos), l: L(UI.statDemos) },
    ].forEach(function (st) {
      var box = document.createElement("span");
      box.className = "ov-hub__stat";
      var b = document.createElement("b");
      b.textContent = st.v;
      var s = document.createElement("span");
      s.textContent = st.l;
      box.appendChild(b);
      box.appendChild(s);
      hubStats.appendChild(box);
    });
  }

  function groupNode(g) {
    var root = document.createElement("div");
    root.className = "ov-grp";
    root.dataset.group = g.id;

    var head = document.createElement("button");
    head.type = "button";
    head.className = "ov-grp__head";
    head.dataset.group = g.id;
    head.setAttribute("aria-expanded", "false");

    var tag = document.createElement("span");
    tag.className = "ov-grp__tag";
    tag.textContent = g.tag;

    var title = document.createElement("span");
    title.className = "ov-grp__title";
    title.textContent = L(g.title);

    var caret = document.createElement("span");
    caret.className = "ov-grp__caret";
    caret.setAttribute("aria-hidden", "true");
    caret.textContent = "›";

    head.appendChild(tag);
    head.appendChild(title);
    head.appendChild(caret);
    root.appendChild(head);

    var kids = document.createElement("div");
    kids.className = "ov-grp__kids";
    g.children.forEach(function (c, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "ov-kid";
      b.dataset.group = g.id;
      b.dataset.idx = String(i);

      var dot = document.createElement("span");
      dot.className = "ov-kid__bullet";
      dot.setAttribute("aria-hidden", "true");

      var lab = document.createElement("span");
      lab.className = "ov-kid__label";
      lab.textContent = L(c.label);

      b.appendChild(dot);
      b.appendChild(lab);
      kids.appendChild(b);
    });
    root.appendChild(kids);

    var panel = document.createElement("div");
    panel.className = "ov-grp__panel";
    root.appendChild(panel);

    return root;
  }

  function renderMap() {
    groups = buildGroups();
    if (mapEl) mapEl.setAttribute("aria-label", L(UI.mapLabel));
    if (hubEl) hubEl.setAttribute("aria-label", L(UI.hubAria));
    if (wingL) wingL.innerHTML = "";
    if (wingR) wingR.innerHTML = "";
    groups.forEach(function (g) {
      var node = groupNode(g);
      (g.side === "left" ? wingL : wingR).appendChild(node);
    });
    renderHub();
  }

  /* ---------------- 연결선 ---------------- */
  function rectOf(el) {
    var m = mapEl.getBoundingClientRect();
    var r = el.getBoundingClientRect();
    return {
      l: r.left - m.left,
      r: r.right - m.left,
      t: r.top - m.top,
      b: r.bottom - m.top,
      cx: r.left - m.left + r.width / 2,
      cy: r.top - m.top + r.height / 2,
      h: r.height,
    };
  }

  function mkPath(d, cls, key) {
    var p = document.createElementNS(NS, "path");
    p.setAttribute("d", d);
    p.setAttribute("class", cls);
    return p;
  }

  function drawWires() {
    if (!mapEl || !wiresEl) return;
    var m = mapEl.getBoundingClientRect();
    wires.length = 0;
    while (wiresEl.firstChild) wiresEl.removeChild(wiresEl.firstChild);
    if (m.width < 40 || !hubEl) return;

    wiresEl.setAttribute("viewBox", "0 0 " + m.width + " " + m.height);

    var hub = rectOf(hubEl);
    var sides = { left: [], right: [] };
    groups.forEach(function (g) {
      var root = mapEl.querySelector('.ov-grp[data-group="' + g.id + '"]');
      if (!root) return;
      sides[g.side].push({
        g: g,
        head: root.querySelector(".ov-grp__head"),
        kids: Array.prototype.slice.call(root.querySelectorAll(".ov-kid")),
      });
    });

    ["left", "right"].forEach(function (side) {
      var list = sides[side];
      var n = list.length;
      list.forEach(function (item, i) {
        var head = rectOf(item.head);
        var spread = Math.min(30, hub.h * 0.16);
        var offset = n > 1 ? (i - (n - 1) / 2) * spread : 0;
        var x1 = side === "left" ? hub.l - 2 : hub.r + 2;
        var y1 = hub.cy + offset;
        var x2 = side === "left" ? head.r + 2 : head.l - 2;
        var y2 = head.cy;
        var dx = (x2 - x1) * 0.55;
        var d = "M" + x1 + "," + y1 + " C" + (x1 + dx) + "," + y1 + " " + (x2 - dx) + "," + y2 + " " + x2 + "," + y2;

        var key = "g:" + item.g.id;
        var grp = document.createElementNS(NS, "g");
        grp.setAttribute("class", "ov-wire");
        grp.dataset.wire = key;
        grp.appendChild(mkPath(d, "ov-wire__base"));
        grp.appendChild(mkPath(d, "ov-wire__flow"));

        var dot = document.createElementNS(NS, "circle");
        dot.setAttribute("r", "2.6");
        dot.setAttribute("class", "ov-wire__dot");
        grp.appendChild(dot);
        wiresEl.appendChild(grp);

        var flowPath = grp.querySelector(".ov-wire__flow");
        wires.push({
          path: flowPath,
          circle: dot,
          len: 0,
          off: (i * 0.29 + (side === "right" ? 0.5 : 0)) % 1,
        });

        /* 갈래 → 세부 노드: 줄기에서 각 칩으로 짧게 갈라집니다 */
        var trunkX = side === "left" ? head.r : head.l;
        var sgn = side === "left" ? -1 : 1;
        item.kids.forEach(function (kid, ki) {
          var kr = rectOf(kid);
          var edge = side === "left" ? kr.r : kr.l;
          var y = kr.cy;
          var r = Math.min(7, Math.abs(edge - trunkX) / 2);
          var top = Math.min(head.b, y);
          var d2 =
            "M" + trunkX + "," + head.b +
            " V" + (y - r) +
            " Q" + trunkX + "," + y + " " + (trunkX + sgn * r) + "," + y +
            " H" + edge;
          if (top > y - r) d2 = "M" + trunkX + "," + head.b + " L" + edge + "," + y;

          var key2 = "c:" + item.g.id + ":" + ki;
          var grp2 = document.createElementNS(NS, "g");
          grp2.setAttribute("class", "ov-wire ov-wire--kid");
          grp2.dataset.wire = key2;
          grp2.appendChild(mkPath(d2, "ov-wire__base"));
          grp2.appendChild(mkPath(d2, "ov-wire__flow"));
          wiresEl.appendChild(grp2);
        });
      });
    });

    wires.forEach(function (w) {
      try { w.len = w.path.getTotalLength(); } catch (e) { w.len = 0; }
    });
    paint();
  }

  var rafId = null;
  function loop(ts) {
    if (!reduceMotion) {
      wires.forEach(function (w) {
        if (!w.len) return;
        var t = ((ts / 6400 + w.off) % 1) * w.len;
        try {
          var p = w.path.getPointAtLength(t);
          w.circle.setAttribute("cx", p.x.toFixed(1));
          w.circle.setAttribute("cy", p.y.toFixed(1));
        } catch (e) {}
      });
    }
    rafId = requestAnimationFrame(loop);
  }

  /* ---------------- 선택 / 강조 ---------------- */
  function paint() {
    var focus = hover || state.sel;
    document.querySelectorAll(".ov-grp").forEach(function (el) {
      el.classList.toggle("is-active", !!state.sel && state.sel.g === el.dataset.group);
    });
    document.querySelectorAll(".ov-kid").forEach(function (el) {
      el.classList.toggle(
        "is-active",
        !!state.sel && state.sel.kind === "child" && state.sel.g === el.dataset.group && Number(el.dataset.idx) === state.sel.i
      );
    });
    if (hubEl) hubEl.classList.toggle("is-active", !state.sel);

    wiresEl.querySelectorAll(".ov-wire").forEach(function (w) {
      var key = w.dataset.wire || "";
      var parts = key.split(":");
      var hot = false;
      if (focus) {
        if (parts[0] === "g") hot = parts[1] === focus.g;
        else hot = parts[1] === focus.g && (focus.i == null || Number(parts[2]) === focus.i);
      }
      w.classList.toggle("is-hot", !!hot);
      w.classList.toggle("is-dim", !!focus && !hot);
    });
  }

  function isMobile() {
    return window.matchMedia("(max-width: 1080px)").matches;
  }

  function openGroup(id) {
    document.querySelectorAll(".ov-grp").forEach(function (el) {
      var on = el.dataset.group === id;
      el.classList.toggle("is-open", on);
      var h = el.querySelector(".ov-grp__head");
      if (h) h.setAttribute("aria-expanded", on ? "true" : "false");
      if (!on) {
        var p = el.querySelector(".ov-grp__panel");
        if (p) p.innerHTML = "";
      }
    });
  }

  function select(sel, fromTour) {
    if (!fromTour) stopTour();
    state.sel = sel;
    if (isMobile()) {
      if (sel) openGroup(sel.g);
      else document.querySelectorAll(".ov-grp").forEach(function (el) { el.classList.remove("is-open"); });
    }
    paint();
    renderInspector();
    if (isMobile()) fillPanels();
  }

  /* ---------------- 인스펙터 내용 ---------------- */
  function elx(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function eyebrow(tag, extra) {
    var e = elx("p", "ov-insp__eyebrow");
    var t = elx("span", null, tag);
    e.appendChild(t);
    if (extra) e.appendChild(elx("span", null, "·"));
    if (extra) e.appendChild(elx("span", null, extra));
    return e;
  }

  function rows(list) {
    var box = elx("div");
    list.forEach(function (r) {
      var row = elx("div", "ov-row");
      row.appendChild(elx("span", "ov-row__k", r.k));
      row.appendChild(elx("span", "ov-row__v", r.v));
      box.appendChild(row);
    });
    return box;
  }

  function chipBox(list, accent) {
    var box = elx("div", "ov-chips");
    list.forEach(function (c) {
      var s = elx("span", accent ? "is-accent" : null, L(c));
      box.appendChild(s);
    });
    return box;
  }

  function block(headText, node) {
    var b = elx("div", "ov-insp__block");
    if (headText) b.appendChild(elx("p", "ov-insp__blockhead", headText));
    b.appendChild(node);
    return b;
  }

  function linkNode(href, text) {
    var a = elx("a", "ov-insp__link", text);
    a.href = href;
    if (/^https?:/.test(href)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    var arrow = elx("span", null, "→");
    a.appendChild(arrow);
    return a;
  }

  function detailNodes(compact) {
    var out = [];
    var sel = state.sel;
    var g = null;
    if (sel) {
      g = groups.filter(function (x) { return x.id === sel.g; })[0] || null;
    }

    if (!sel) {
      /* 허브 요약 */
      out.push(eyebrow(L(UI.hubEyebrow)));
      var t = elx("h2", "ov-insp__title", L(UI.names));
      out.push(t);
      out.push(elx("p", "ov-insp__lead", L(get(function () { return S.ui.heroSub; }, null), "")));
      out.push(block(L(UI.roleHead), rows([
        { k: "TITLE", v: L(UI.roleValue) },
        { k: L(UI.statCareer), v: L({ ko: "4년 4개월 · 2022.05 –", en: "4 yr 4 mo · 2022.05 –", zh: "4 年 4 个月 · 2022.05 –" }) },
      ])));

      var metrics = get(function () { return S.metrics; }, []);
      if (metrics.length) {
        out.push(block(L(UI.quickHead), rows(metrics.map(function (m) {
          return { k: L(m.label), v: L(m.before) + " → " + L(m.after) };
        }))));
      }

      var contact = get(function () { return S.contact; }, []);
      if (contact.length) {
        var box = elx("div");
        contact.forEach(function (c) {
          var a = elx("a", "ov-row");
          a.href = c.href;
          if (/^https?:/.test(c.href)) { a.target = "_blank"; a.rel = "noopener"; }
          a.appendChild(elx("span", "ov-row__k", c.key));
          a.appendChild(elx("span", "ov-row__v", c.value));
          a.style.textDecoration = "none";
          box.appendChild(a);
        });
        out.push(block(L(UI.contactHead), box));
      }
      out.push(elx("p", "ov-insp__note", L(UI.hubNote)));
      return out;
    }

    if (!g) return out;

    if (sel.kind === "group") {
      if (!compact) {
        var back = elx("button", "ov-insp__back", L(UI.backAll));
        back.type = "button";
        back.addEventListener("click", function () { select(null); });
        out.push(back);
      }
      out.push(eyebrow(g.tag));
      out.push(elx("h2", "ov-insp__title", L(g.title)));
      out.push(elx("p", "ov-insp__lead", L(g.lead)));

      if (g.bullets && g.bullets.length) {
        out.push(block(L(UI.keyHead), rows(g.bullets.map(function (b) {
          return { k: L(b.k), v: L(b.v) };
        }))));
      }

      var jump = elx("div");
      g.children.forEach(function (c, i) {
        var b = elx("button", "ov-jump", L(c.label));
        b.type = "button";
        b.addEventListener("click", function () {
          select({ kind: "child", g: g.id, i: i });
        });
        jump.appendChild(b);
      });
      out.push(block(L(UI.inThisHead), jump));

      if (g.chips && g.chips.length) out.push(block(null, chipBox(g.chips, true)));
      if (g.note) out.push(elx("p", "ov-insp__note", g.note));
      if (g.link) out.push(linkNode(g.link.href, L(g.link.label)));
      return out;
    }

    /* 세부 노드 */
    var c = g.children[sel.i];
    if (!c) return out;
    if (!compact) {
      var backG = elx("button", "ov-insp__back", L(UI.backGroup));
      backG.type = "button";
      backG.addEventListener("click", function () {
        select({ kind: "group", g: g.id });
      });
      out.push(backG);
    }
    out.push(eyebrow(g.tag, L(g.title)));
    out.push(elx("h2", "ov-insp__title", L(c.label)));
    if (c.lead) out.push(elx("p", "ov-insp__lead", L(c.lead)));
    if (c.bullets && c.bullets.length) {
      out.push(block(null, rows(c.bullets.map(function (b) {
        return { k: L(b.k), v: L(b.v) };
      }))));
    }
    if (c.chips && c.chips.length) out.push(block(null, chipBox(c.chips, true)));
    if (c.href) out.push(linkNode(c.href, L(UI.openInSite)));
    return out;
  }

  function renderInspector() {
    if (!inspEl) return;
    var wrap = elx("div", "ov-insp__inner");
    detailNodes(false).forEach(function (n) { wrap.appendChild(n); });
    inspEl.innerHTML = "";
    inspEl.appendChild(wrap);
    inspEl.scrollTop = 0;
  }

  function fillPanels() {
    if (!isMobile()) return;
    document.querySelectorAll(".ov-grp").forEach(function (root) {
      var panel = root.querySelector(".ov-grp__panel");
      if (!panel) return;
      var open = root.classList.contains("is-open");
      panel.innerHTML = "";
      if (!open || !state.sel || state.sel.g !== root.dataset.group) return;
      detailNodes(true).forEach(function (n) { panel.appendChild(n); });
    });
  }

  /* ---------------- 자동 투어 ---------------- */
  function stopTour() {
    if (state.tourId) {
      clearInterval(state.tourId);
      state.tourId = null;
    }
    if (btnTour) {
      btnTour.classList.remove("is-on");
      btnTour.setAttribute("aria-pressed", "false");
    }
    if (tourLabel) tourLabel.textContent = L(UI.tour);
  }

  function startTour() {
    stopTour();
    var ids = groups.map(function (g) { return g.id; });
    if (!ids.length) return;
    var i = 0;
    state.tourId = setInterval(function () {
      select({ kind: "group", g: ids[i % ids.length] }, true);
      i++;
    }, 4200);
    if (btnTour) {
      btnTour.classList.add("is-on");
      btnTour.setAttribute("aria-pressed", "true");
    }
    if (tourLabel) tourLabel.textContent = L(UI.pause);
    select({ kind: "group", g: ids[0] }, true);
    i = 1;
  }

  /* ---------------- 이벤트 ---------------- */
  function bind() {
    document.addEventListener("click", function (e) {
      var t = e.target;
      var kid = t.closest && t.closest(".ov-kid");
      if (kid) {
        select({ kind: "child", g: kid.dataset.group, i: Number(kid.dataset.idx) });
        return;
      }
      var head = t.closest && t.closest(".ov-grp__head");
      if (head) {
        var id = head.dataset.group;
        var root = head.closest(".ov-grp");
        if (isMobile() && root.classList.contains("is-open")) {
          select(null);
          return;
        }
        select({ kind: "group", g: id });
        return;
      }
      if (t.closest && t.closest("#ovHub")) {
        select(null);
        return;
      }
    });

    mapEl.addEventListener("pointerover", function (e) {
      var el = e.target.closest && e.target.closest(".ov-kid, .ov-grp__head");
      if (!el) return;
      hover = el.classList.contains("ov-kid")
        ? { g: el.dataset.group, i: Number(el.dataset.idx) }
        : { g: el.dataset.group };
      paint();
    });
    mapEl.addEventListener("pointerout", function (e) {
      if (!e.relatedTarget || !mapEl.contains(e.relatedTarget)) {
        hover = null;
        paint();
      }
    });

    if (btnAll) btnAll.addEventListener("click", function () { select(null); });
    if (btnTour) {
      btnTour.addEventListener("click", function () {
        if (state.tourId) stopTour();
        else startTour();
      });
    }

    document.querySelectorAll(".seg__btn").forEach(function (b) {
      b.addEventListener("click", function () {
        var lang = b.getAttribute("data-lang");
        if (lang === state.lang) return;
        state.lang = lang;
        save(STORE.lang, lang);
        stopTour();
        renderAll();
      });
    });

    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        state.theme = state.theme === "dark" ? "light" : "dark";
        save(STORE.theme, state.theme);
        document.documentElement.setAttribute("data-theme", state.theme);
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") select(null);
    });

    var t = null;
    window.addEventListener("resize", function () {
      clearTimeout(t);
      t = setTimeout(function () { drawWires(); fillPanels(); }, 140);
    });
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(function () {
        clearTimeout(t);
        t = setTimeout(drawWires, 140);
      });
      ro.observe(mapEl);
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { drawWires(); });
    }
  }

  function renderAll() {
    applyStatic();
    renderMap();
    if (state.sel && !groups.some(function (g) { return g.id === state.sel.g; })) state.sel = null;
    paint();
    renderInspector();
    drawWires();
    fillPanels();
  }

  /* ---------------- 시작 ---------------- */
  document.documentElement.setAttribute("data-theme", state.theme);
  renderAll();
  bind();
  rafId = requestAnimationFrame(loop);
  setTimeout(drawWires, 260);
  setTimeout(drawWires, 900);
  window.addEventListener("beforeunload", function () {
    if (rafId) cancelAnimationFrame(rafId);
  });
})();

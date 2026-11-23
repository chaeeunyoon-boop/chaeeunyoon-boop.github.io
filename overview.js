/* =============================================================
   overview.js — 한 페이지 요약 지도(overview.html)
   · 중심(윤채은)에서 6개 갈래로 뻗는 지도를 그리고, 세부 항목까지
     처음부터 전부 펼쳐 보여 줍니다. 눌러서 열 것이 없습니다.
   · 이야기 구조: 왜 만들었나(내 문제 → 동료 → 조직) →
     개인 병목 → 동료·TF 협업 → 조직 성과 → 안전장치·스택 → 경력·다음.
   · SVG 연결선 위로 빛 점이 흐르고, 마우스를 올린 갈래만 은은하게
     강조됩니다. (클릭·아코디언·자동 투어 없음)
   · KO / EN / ZH, 라이트·다크 전환은 기존 포폴과 같은 저장 키
     (ax.lang, ax.theme)를 씁니다.
   ============================================================= */

(function () {
  "use strict";

  var LANGS = ["ko", "en", "zh"];
  var LANG_ATTR = { ko: "ko", en: "en", zh: "zh-Hans" };
  var STORE = { lang: "ax.lang", theme: "ax.theme" };
  var NS = "http://www.w3.org/2000/svg";
  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var state = { lang: pickLang(), theme: pickTheme() };
  var hover = null;      // 호버 중인 갈래 id
  var wires = [];        // { path, len, off, dot }

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
    backDemos: { ko: "라이브 데모", en: "Live demos", zh: "实时演示" },
    barLabel: {
      ko: "HUB & SPOKE · 한 페이지 요약",
      en: "HUB & SPOKE · one-page overview",
      zh: "HUB & SPOKE · 一页概览",
    },
    barHint: {
      ko: "클릭 없이 한 화면에서 · 01 내 문제 → 02 동료 → 03 조직 순서로 읽으면 됩니다",
      en: "Nothing to click · read 01 my problem → 02 my team → 03 the company",
      zh: "无需点击，一屏读完 · 按 01 我的问题 → 02 同事 → 03 组织 的顺序看",
    },
    zoomHint: {
      ko: "두 손가락으로 확대하면 세부 내용을 읽을 수 있습니다",
      en: "Pinch to zoom in and read the detail",
      zh: "用两指放大即可阅读细节",
    },
    foot: {
      ko: "메인 포트폴리오의 공개 내용에서 요약했습니다 · 회사 내부 자료·비공개 데이터는 넣지 않았습니다 · 데모는 모두 가상 데이터입니다",
      en: "Summarised from the public portfolio · no company-internal or private data · all demos use fictional data",
      zh: "摘要自公开的作品集 · 不含公司内部资料与非公开数据 · 演示均使用虚构数据",
    },
    mapLabel: { ko: "한 페이지 요약 지도", en: "One-page overview map", zh: "一页概览地图" },
    hubAria: { ko: "중심 · 윤채은 요약", en: "Centre · Chaeeun Yun summary", zh: "中心 · Chaeeun Yun 概览" },
    name: { ko: "윤채은", en: "Chaeeun Yun", zh: "Chaeeun Yun" },
    role: {
      ko: "AX 빌더 · 크리에이터 마케팅 매니저",
      en: "AX builder · creator marketing manager",
      zh: "AX 构建者 · 创作者营销经理",
    },
    subtitle: {
      ko: "Influencer Marketing Manager @ Onthelook",
      en: "Influencer Marketing Manager @ Onthelook",
      zh: "Influencer Marketing Manager @ Onthelook",
    },
    pitch: {
      ko: "반복 병목을 발굴해 AI 워크플로우로 바꾸고, 팀이 이어받도록 문서로 남깁니다.",
      en: "I find repeated bottlenecks, turn them into AI workflows, and document them so the team can take over.",
      zh: "识别重复瓶颈并改造成 AI 工作流，留下文档让团队接手。",
    },
    scaleLine: {
      ko: "내 문제 → 동료의 문제 → 조직의 문제",
      en: "my problem → my team's → the company's",
      zh: "我的问题 → 同事的 → 组织的",
    },
    statCareer: { ko: "경력", en: "CAREER", zh: "经历" },
    statProposal: { ko: "광고 제안서", en: "AD PROPOSAL", zh: "广告提案" },
    statContent: { ko: "콘텐츠 제작", en: "CONTENT", zh: "内容制作" },
  };

  /* ---------------- 허브 수치 ---------------- */
  var STATS = [
    { l: UI.statCareer, v: { ko: "4년 4개월", en: "4 yr 4 mo", zh: "4 年 4 个月" } },
    { l: UI.statProposal, v: { ko: "1시간 → 3~5분", en: "1 hr → 3–5 min", zh: "1 小时 → 3~5 分钟" } },
    { l: UI.statContent, v: { ko: "하루 1편 → 30분에 1편", en: "1 a day → 30 min", zh: "一天一条 → 30 分钟" } },
  ];

  /* ---------------- 지도 내용 ----------------
     kid = { step?, label, desc?, chips? }
     · step  : 이야기 단계 배지 (문제 / 해결 / 결과 …)
     · label : 한 줄 제목
     · desc  : 막힌 것 → AI로 푼 방식 → 누가 어떻게 달라졌는지
     처음부터 전부 펼쳐져 있고, 눌러야 열리는 것은 없습니다. */
  var CONTENT = [
    {
      id: "why",
      side: "left",
      tag: "01 · WHY",
      title: { ko: "왜 AI를 만드나", en: "Why I build this", zh: "为什么做 AI 工具" },
      kids: [
        {
          step: { ko: "내 문제", en: "Me", zh: "我的问题" },
          label: {
            ko: "같은 판단을 하루에도 몇 번씩",
            en: "The same call, several times a day",
            zh: "同一种判断一天要做好几次",
          },
          desc: {
            ko: "광고 문의는 매번 형식이 달랐고, 기준은 머릿속에만 있었습니다.",
            en: "Every inquiry came in a different shape; the criteria lived only in my head.",
            zh: "广告咨询每次格式都不同，标准只在脑子里。",
          },
        },
        {
          step: { ko: "동료", en: "Team", zh: "同事" },
          label: {
            ko: "같은 일이 팀의 확인 업무로 커짐",
            en: "The same work grew into the team's checking",
            zh: "同一件事变成团队的确认工作",
          },
          desc: {
            ko: "응대 현황이 카톡·메일에 흩어져 매번 묻고 다시 찾았습니다.",
            en: "Status scattered across chat and mail, so everyone asked and dug it out again.",
            zh: "进度散落在聊天和邮件里，每次都要问一遍、再找一遍。",
          },
        },
        {
          step: { ko: "조직", en: "Company", zh: "组织" },
          label: {
            ko: "회사도 같은 곳에서 반복해서 막힘",
            en: "The company got stuck in the same places",
            zh: "公司也在同样的地方反复卡住",
          },
          desc: {
            ko: "해외 파트너 컨택·콘텐츠 제작처럼 되풀이되는 일도 같은 방식으로 풀렸습니다.",
            en: "Global partner outreach and content production — recurring work solved the same way.",
            zh: "海外合作方联络、内容制作这类反复的事，也用同一种方式解决。",
          },
        },
      ],
    },
    {
      id: "work",
      side: "left",
      tag: "02 · MY WORK",
      title: { ko: "개인·실무 병목 해결", en: "My own bottleneck", zh: "解决个人实务瓶颈" },
      kids: [
        {
          step: { ko: "문제", en: "Problem", zh: "问题" },
          label: {
            ko: "비정형 광고 문의, 제안서 한 건에 1시간",
            en: "Unstructured inquiries — an hour per proposal",
            zh: "格式各异的咨询，一份提案要 1 小时",
          },
          desc: {
            ko: "문의마다 형식이 다르고, 판단 기준도 기록도 없었습니다.",
            en: "Every inquiry was a different shape, with no criteria and no record.",
            zh: "每条咨询格式都不同，既没有标准也没有记录。",
          },
        },
        {
          step: { ko: "해결", en: "Fix", zh: "解决" },
          label: {
            ko: "AS-IS/TO-BE 재설계 → 12개 규칙 → AI 초안",
            en: "AS-IS → TO-BE redesign, 12 rules, AI draft",
            zh: "AS-IS/TO-BE 重构 → 12 条规则 → AI 初稿",
          },
          desc: {
            ko: "머릿속 기준 12개를 운영 기준으로 문서화해 LLM에 연계.",
            en: "The twelve criteria documented as operating rules and wired to the LLM.",
            zh: "把 12 条标准文档化为运营标准并对接 LLM。",
          },
        },
        {
          step: { ko: "결과", en: "Result", zh: "结果" },
          label: {
            ko: "1시간 → 3~5분, 팀 공용 표준으로",
            en: "1 hr → 3–5 min, now a team-wide standard",
            zh: "1 小时 → 3~5 分钟，成为团队统一标准",
          },
          desc: {
            ko: "고액·예외는 사람이 승인 — 운영 기준 표준화까지.",
            en: "A person approves high-value and exception cases; the standard is written down.",
            zh: "大额与例外交人审批——标准写进文档。",
          },
        },
      ],
    },
    {
      id: "team",
      side: "left",
      tag: "03 · TEAM",
      title: { ko: "동료·TF팀 협업 해결", en: "The team's problem", zh: "解决同事·TF 协作问题" },
      kids: [
        {
          step: { ko: "문제", en: "Problem", zh: "问题" },
          label: {
            ko: "현황이 카톡·메일에 흩어져 매번 확인",
            en: "Status scattered across chat and mail",
            zh: "进度散落在聊天和邮件里，每次都要确认",
          },
          desc: {
            ko: "광고주 응대가 어디까지 갔는지 한눈에 볼 수 없었습니다.",
            en: "Nobody could see how far each client conversation had gone.",
            zh: "广告主的沟通进行到哪一步，没人一眼看得到。",
          },
        },
        {
          step: { ko: "해결", en: "Fix", zh: "解决" },
          label: {
            ko: "광고 건별 실시간 운영 대시보드",
            en: "A real-time operations dashboard",
            zh: "每个广告的实时运营看板",
          },
          desc: {
            ko: "문의부터 정산까지 7단계를 한 화면에 모았습니다.",
            en: "Seven stages from inquiry to payment on one screen.",
            zh: "从咨询到结算七个阶段收在一屏。",
          },
        },
        {
          step: { ko: "결과", en: "Result", zh: "结果" },
          label: {
            ko: "묻기 전에 다 보이고, 인수인계는 링크 하나",
            en: "Visible before anyone asks; handover is one link",
            zh: "不用问就看得见，交接只需一个链接",
          },
          desc: {
            ko: "팀과 TF가 같은 화면을 보며 일합니다.",
            en: "Team and task force work from the same screen.",
            zh: "团队与 TF 看同一屏工作。",
          },
        },
      ],
    },
    {
      id: "org",
      side: "right",
      tag: "04 · COMPANY",
      title: { ko: "조직 단위 확장·성과", en: "At the company level", zh: "组织层面的成果" },
      kids: [
        {
          label: {
            ko: "글로벌 파트너 아웃리치 자동화",
            en: "Global partner outreach, automated",
            zh: "全球合作伙伴外联自动化",
          },
          desc: {
            ko: "KO·EN·ZH 전환과 발송 전 검토를 AI 워크플로우로.",
            en: "KO · EN · ZH switching plus a check before sending, as one workflow.",
            zh: "KO · EN · ZH 切换和发送前确认，做成一个工作流。",
          },
        },
        {
          label: {
            ko: "콘텐츠 제작 하루 1편 → 30분에 1편",
            en: "Content: 1 a day → 1 every 30 min",
            zh: "内容制作：一天 1 条 → 30 分钟 1 条",
          },
          desc: {
            ko: "서울경제신문 AI 뉴스 영상, 운영 기준을 문서화해 5명에게 인수인계. (올투원)",
            en: "AI news videos for Seoul Economic Daily, handed to five people with the standard written down. (Alltoone)",
            zh: "首尔经济新闻 AI 新闻视频，标准文档化后交接给 5 人。（Alltoone）",
          },
        },
      ],
    },
    {
      id: "safety",
      side: "right",
      tag: "05 · SAFETY",
      title: { ko: "안전장치 · 기술 스택", en: "Safeguards & stack", zh: "安全线与技术栈" },
      kids: [
        {
          label: {
            ko: "AI는 초안과 분류까지만",
            en: "AI drafts and sorts — nothing more",
            zh: "AI 只写初稿、只做分类",
          },
          desc: {
            ko: "최종 판단과 발송은 사람이 합니다.",
            en: "The final call and the send stay with a person.",
            zh: "最终判断和发送都由人来做。",
          },
        },
        {
          label: {
            ko: "12개 규칙 검증 + 예외는 사람 승인",
            en: "12 rules, and a human for exceptions",
            zh: "12 条规则校验 + 例外交人审批",
          },
          desc: {
            ko: "2,000만 원 초과·성과 연동 지급은 사람이 승인.",
            en: "Deals over ₩20M or paid on performance go to a person.",
            zh: "超过 2,000 万韩元、按效果付款由人审批。",
          },
        },
        {
          label: { ko: "기술 스택", en: "Stack", zh: "技术栈" },
          clusters: [
            {
              name: { ko: "AI · LLM", en: "AI · LLM", zh: "AI · LLM" },
              items: "Claude API · Claude Code · Kiro Crew · 프롬프트 설계",
              itemsEn: "Claude API · Claude Code · Kiro Crew · prompt design",
              itemsZh: "Claude API · Claude Code · Kiro Crew · 提示词设计",
            },
            {
              name: { ko: "데이터 · 개발", en: "Data · build", zh: "数据 · 开发" },
              items: "Python · YouTube Data API · HTML/CSS/JS · Git",
              itemsEn: "Python · YouTube Data API · HTML/CSS/JS · Git",
              itemsZh: "Python · YouTube Data API · HTML/CSS/JS · Git",
            },
            {
              name: { ko: "인프라", en: "Infrastructure", zh: "基础设施" },
              items: "AWS S3 · CloudFront · GitHub Pages",
              itemsEn: "AWS S3 · CloudFront · GitHub Pages",
              itemsZh: "AWS S3 · CloudFront · GitHub Pages",
            },
            {
              name: { ko: "운영", en: "Ops", zh: "运营" },
              items: "Google Workspace · 시트 자동화 · 정기 배치",
              itemsEn: "Google Workspace · sheet automation · scheduled jobs",
              itemsZh: "Google Workspace · 表格自动化 · 定时批处理",
            },
          ],
        },
      ],
    },
    {
      id: "career",
      side: "right",
      tag: "06 · CAREER",
      title: { ko: "경력 & 다음 목표", en: "Career & what's next", zh: "履历与下一步" },
      kids: [
        {
          label: {
            ko: "지나온 길 (2022.05 –)",
            en: "The path so far (2022.05 –)",
            zh: "走过的路（2022.05 –）",
          },
          desc: {
            ko: "샌드박스네트워크 → 올투원 → 아이스크리에이티브 → 온더룩, 4년 4개월.",
            en: "Sandbox Network → Alltoone → Ice Creative → Onthelook, four years four months.",
            zh: "Sandbox Network → Alltoone → Ice Creative → Onthelook，4 年 4 个月。",
          },
        },
        {
          label: {
            ko: "현재 · 온더룩 MCN팀 매니저",
            en: "Now · MCN Team Manager at Onthelook",
            zh: "现在 · Onthelook MCN 团队经理",
          },
          desc: {
            ko: "뷰티·패션 크리에이터 최대 30팀을 맡고 있습니다.",
            en: "I handle up to 30 beauty and fashion creator teams.",
            zh: "负责最多 30 个美妆·时尚创作者团队。",
          },
        },
        {
          label: {
            ko: "다음 목표 · 소통 AI 에이전트",
            en: "Next · a communication AI agent",
            zh: "下一步 · 沟通型 AI 智能体",
          },
          desc: {
            ko: "서로 다른 맥락의 사람을 잇고, 교육·기회의 사각지대를 풀고 싶습니다.",
            en: "Connecting people from different contexts, and closing gaps in education and opportunity.",
            zh: "连接处在不同语境中的人，补上教育与机会的盲区。",
          },
        },
      ],
    },
  ];

  /* ---------------- DOM ---------------- */
  var CANVAS_W = 1360;
  var stageWrap = document.getElementById("ovStageWrap");
  var footEl = document.querySelector(".ov-foot");
  var mapEl = document.getElementById("ovMap");
  var wiresEl = document.getElementById("ovWires");
  var wingL = document.getElementById("wingLeft");
  var wingR = document.getElementById("wingRight");
  var hubEl = document.getElementById("ovHub");
  var hubName = document.getElementById("ovHubName");
  var hubRole = document.getElementById("ovHubRole");
  var hubTitle = document.getElementById("ovHubTitle");
  var hubPitch = document.getElementById("ovHubPitch");
  var hubStats = document.getElementById("ovHubStats");

  function elx(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------------- 렌더 ---------------- */
  function applyStatic() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (UI[key]) el.textContent = L(UI[key]);
    });
    document.title = L(UI.docTitle);
    document.documentElement.lang = LANG_ATTR[state.lang];
    document.querySelectorAll(".seg__btn").forEach(function (b) {
      var on = b.getAttribute("data-lang") === state.lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function renderHub() {
    if (!hubEl) return;
    hubName.textContent = L(UI.name);
    hubRole.textContent = L(UI.role);
    hubTitle.textContent = L(UI.subtitle);
    hubPitch.textContent = L(UI.pitch);
    hubEl.setAttribute("aria-label", L(UI.hubAria));

    hubStats.innerHTML = "";
    STATS.forEach(function (st) {
      var row = elx("span", "ov-hub__stat");
      row.appendChild(elx("span", "ov-hub__stat-l", L(st.l)));
      row.appendChild(elx("b", "ov-hub__stat-v", L(st.v)));
      hubStats.appendChild(row);
    });
  }

  function kidRow(k) {
    var row = elx("div", "ov-kid");
    row.appendChild(elx("span", "ov-kid__bullet"));

    var body = elx("div", "ov-kid__body");
    var line = elx("div", "ov-kid__line");
    if (k.step) line.appendChild(elx("span", "ov-kid__step", L(k.step)));
    line.appendChild(elx("span", "ov-kid__label", L(k.label)));
    body.appendChild(line);

    if (k.desc) body.appendChild(elx("p", "ov-kid__desc", L(k.desc)));

    if (k.clusters) {
      var box = elx("div", "ov-clusters");
      k.clusters.forEach(function (c) {
        var item = elx("span", "ov-cluster");
        item.appendChild(elx("b", null, L(c.name)));
        item.appendChild(
          elx("span", null, state.lang === "zh" ? c.itemsZh : state.lang === "en" ? c.itemsEn : c.items)
        );
        box.appendChild(item);
      });
      body.appendChild(box);
    }

    row.appendChild(body);
    return row;
  }

  function groupCard(g) {
    var root = elx("article", "ov-grp");
    root.dataset.group = g.id;

    var head = elx("div", "ov-grp__head");
    head.appendChild(elx("span", "ov-grp__tag", g.tag));
    head.appendChild(elx("span", "ov-grp__title", L(g.title)));
    root.appendChild(head);

    var kids = elx("div", "ov-grp__kids");
    g.kids.forEach(function (k) { kids.appendChild(kidRow(k)); });
    root.appendChild(kids);

    return root;
  }

  function renderMap() {
    if (mapEl) mapEl.setAttribute("aria-label", L(UI.mapLabel));
    if (wingL) wingL.innerHTML = "";
    if (wingR) wingR.innerHTML = "";
    CONTENT.forEach(function (g) {
      (g.side === "left" ? wingL : wingR).appendChild(groupCard(g));
    });
    renderHub();
  }

  /* ---------------- 캔버스 맞춤 ----------------
     PC와 모바일이 같은 1360px 캔버스를 보고, 화면 폭·높이에 맞춰
     통째로 비율 축소합니다. 컨테이너 높이도 같은 비율로 줄여
     아래에 빈 여백이 남지 않게 합니다. */
  function fit() {
    if (!mapEl || !stageWrap) return 1;
    var natural = mapEl.offsetHeight || 760;
    var availW = stageWrap.clientWidth;
    var top = stageWrap.getBoundingClientRect().top;
    var footH = footEl ? footEl.getBoundingClientRect().height : 0;
    var availH = window.innerHeight - top - footH - 24;
    var s = Math.min(availW / CANVAS_W, availH > 0 ? availH / natural : 1, 1);
    if (!isFinite(s) || s <= 0) s = 1;
    s = Math.max(s, 0.12);
    mapEl.style.transform = "scale(" + s.toFixed(4) + ")";
    stageWrap.style.height = Math.round(natural * s) + "px";
    return s;
  }

  /* ---------------- 연결선 ---------------- */
  function relRect(el, s, m) {
    var r = el.getBoundingClientRect();
    return {
      l: (r.left - m.left) / s,
      r: (r.right - m.left) / s,
      t: (r.top - m.top) / s,
      b: (r.bottom - m.top) / s,
      cy: (r.top - m.top + r.height / 2) / s,
      h: r.height / s,
    };
  }

  function mkPath(d, cls) {
    var p = document.createElementNS(NS, "path");
    p.setAttribute("d", d);
    p.setAttribute("class", cls);
    return p;
  }

  function drawWires() {
    if (!mapEl || !wiresEl || !hubEl) return;
    var m = mapEl.getBoundingClientRect();
    var w = mapEl.offsetWidth;
    var h = mapEl.offsetHeight;
    var s = w ? m.width / w : 1;
    if (!s) s = 1;
    wires.length = 0;
    while (wiresEl.firstChild) wiresEl.removeChild(wiresEl.firstChild);
    if (w < 40) return;

    wiresEl.setAttribute("viewBox", "0 0 " + w + " " + h);

    var hub = relRect(hubEl, s, m);
    var bySide = { left: [], right: [] };
    CONTENT.forEach(function (g) {
      var card = mapEl.querySelector('.ov-grp[data-group="' + g.id + '"]');
      if (card) bySide[g.side].push(card);
    });

    ["left", "right"].forEach(function (side) {
      var cards = bySide[side];
      var n = cards.length;
      cards.forEach(function (card, i) {
        var head = relRect(card.querySelector(".ov-grp__head"), s, m);
        var spread = Math.min(38, hub.h * 0.22);
        var offset = n > 1 ? (i - (n - 1) / 2) * spread : 0;
        var x1 = side === "left" ? hub.l - 2 : hub.r + 2;
        var y1 = hub.cy + offset;
        var x2 = side === "left" ? head.r + 2 : head.l - 2;
        var y2 = head.cy;
        var dx = Math.abs(x2 - x1) * 0.55;
        var d =
          "M" + x1 + "," + y1 +
          " C" + (x1 + (side === "left" ? -dx : dx)) + "," + y1 + " " +
          (x2 + (side === "left" ? dx : -dx)) + "," + y2 + " " +
          x2 + "," + y2;

        var grp = document.createElementNS(NS, "g");
        grp.setAttribute("class", "ov-wire");
        grp.dataset.wire = "g:" + card.dataset.group;
        grp.appendChild(mkPath(d, "ov-wire__base"));
        var flow = mkPath(d, "ov-wire__flow");
        grp.appendChild(flow);
        var dot = document.createElementNS(NS, "circle");
        dot.setAttribute("r", "2.6");
        dot.setAttribute("class", "ov-wire__dot");
        grp.appendChild(dot);
        wiresEl.appendChild(grp);
        wires.push({ path: flow, dot: dot, len: 0, off: (i * 0.27 + (side === "right" ? 0.45 : 0)) % 1 });

        /* 카드 안쪽 가장자리를 따라 세부 항목으로 갈라지는 짧은 가지 */
        var cardBox = relRect(card, s, m);
        var inner = side === "left" ? cardBox.r : cardBox.l;
        var sgn = side === "left" ? -1 : 1;
        var railX = inner + sgn * 6;
        var kidEls = Array.prototype.slice.call(card.querySelectorAll(".ov-kid"));
        if (!kidEls.length) return;
        var first = relRect(kidEls[0], s, m);
        var last = relRect(kidEls[kidEls.length - 1], s, m);

        var g2 = document.createElementNS(NS, "g");
        g2.setAttribute("class", "ov-wire ov-wire--kid");
        g2.dataset.wire = "c:" + card.dataset.group;
        g2.appendChild(mkPath("M" + railX + "," + first.cy + " V" + last.cy, "ov-wire__rail"));
        kidEls.forEach(function (kid) {
          var kr = relRect(kid, s, m);
          g2.appendChild(mkPath("M" + railX + "," + kr.cy + " H" + (inner + sgn * 0.5), "ov-wire__tick"));
        });
        wiresEl.appendChild(g2);
      });
    });

    wires.forEach(function (w) {
      try { w.len = w.path.getTotalLength(); } catch (e) { w.len = 0; }
    });
    paintWires();
    placeDots();
  }

  var rafId = null;
  function loop(ts) {
    if (!reduceMotion) {
      wires.forEach(function (w) {
        if (!w.len || !w.dot) return;
        var t = ((ts / 6400 + w.off) % 1) * w.len;
        try {
          var p = w.path.getPointAtLength(t);
          w.dot.setAttribute("cx", p.x.toFixed(1));
          w.dot.setAttribute("cy", p.y.toFixed(1));
        } catch (e) {}
      });
    }
    rafId = requestAnimationFrame(loop);
  }

  function placeDots() {
    if (reduceMotion) {
      wires.forEach(function (w) {
        if (!w.len || !w.dot) return;
        try {
          var p = w.path.getPointAtLength(w.len * w.off);
          w.dot.setAttribute("cx", p.x.toFixed(1));
          w.dot.setAttribute("cy", p.y.toFixed(1));
        } catch (e) {}
      });
    }
  }

  function paintWires() {
    if (!wiresEl) return;
    wiresEl.querySelectorAll(".ov-wire").forEach(function (w) {
      var gid = (w.dataset.wire || "").split(":")[1];
      var hot = !!hover && gid === hover;
      w.classList.toggle("is-hot", hot);
      w.classList.toggle("is-dim", !!hover && !hot);
    });
    if (hubEl) hubEl.classList.toggle("is-focus", !!hover);
  }

  /* ---------------- 호버 강조 ---------------- */
  function bind() {
    if (!mapEl) return;

    mapEl.addEventListener("pointerover", function (e) {
      var card = e.target.closest && e.target.closest(".ov-grp");
      var next = card ? card.dataset.group : null;
      if (next === hover) return;
      hover = next;
      document.querySelectorAll(".ov-grp").forEach(function (el) {
        el.classList.toggle("is-hot", el.dataset.group === hover);
      });
      paintWires();
    });

    mapEl.addEventListener("pointerleave", function () {
      hover = null;
      document.querySelectorAll(".ov-grp").forEach(function (el) { el.classList.remove("is-hot"); });
      paintWires();
    });

    document.querySelectorAll(".seg__btn").forEach(function (b) {
      b.addEventListener("click", function () {
        var lang = b.getAttribute("data-lang");
        if (lang === state.lang) return;
        state.lang = lang;
        save(STORE.lang, lang);
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

    var t = null;
    function relayout() {
      clearTimeout(t);
      t = setTimeout(function () { fit(); drawWires(); }, 140);
    }
    window.addEventListener("resize", relayout);
    window.addEventListener("orientationchange", relayout);
    if (window.ResizeObserver) new ResizeObserver(relayout).observe(mapEl);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { fit(); drawWires(); });
    }
  }

  function renderAll() {
    applyStatic();
    renderMap();
    fit();
    drawWires();
  }

  /* ---------------- 시작 ---------------- */
  document.documentElement.setAttribute("data-theme", state.theme);
  renderAll();
  bind();
  if (!reduceMotion) rafId = requestAnimationFrame(loop);
  setTimeout(function () { fit(); drawWires(); }, 260);
  setTimeout(function () { fit(); drawWires(); }, 900);
  window.addEventListener("beforeunload", function () {
    if (rafId) cancelAnimationFrame(rafId);
  });
})();

/* =============================================================
   overview.js — 한 페이지 요약 지도(overview.html)
   · 중심(윤채은)에서 6개 갈래로 뻗는 지도를 그리고, 세부 항목까지
     처음부터 전부 펼쳐 보여 줍니다. 눌러서 열 것이 없습니다.
   · 이야기 구조: 왜 만들었나(내 문제 → 동료 → 조직) →
     동료·TF 협업 → 조직 성과 → 개인 병목 → 안전장치 → 경력·다음.
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
      ko: "내 문제 → 동료 → 조직 순",
      en: "my problem → team → company",
      zh: "我的问题 → 同事 → 组织",
    },
    zoomHint: { ko: "두 손가락으로 확대", en: "Pinch to zoom", zh: "两指放大" },
    foot: {
      ko: "공개 포트폴리오 요약 · 가상 데이터",
      en: "Summary of the public portfolio · fictional data",
      zh: "公开作品集摘要 · 虚构数据",
    },
    mapLabel: { ko: "한 페이지 요약 지도", en: "One-page overview map", zh: "一页概览地图" },
    hubAria: { ko: "중심 · 윤채은 요약", en: "Centre · Chaeeun Yun summary", zh: "中心 · Chaeeun Yun 概览" },
    name: { ko: "윤채은", en: "Chaeeun Yun", zh: "Chaeeun Yun" },
    role: {
      ko: "AX 빌더 · 크리에이터 마케팅",
      en: "AX builder · creator marketing",
      zh: "AX 构建者 · 创作者营销",
    },
    subtitle: {
      ko: "Influencer Marketing Manager @ Onthelook",
      en: "Influencer Marketing Manager @ Onthelook",
      zh: "Influencer Marketing Manager @ Onthelook",
    },
    pitch: {
      ko: "2035 뷰티·패션 도메인 × AI 워크플로우",
      en: "beauty & fashion domain × AI workflow",
      zh: "美妆·时尚领域 × AI 工作流",
    },
    statCareer: { ko: "경력", en: "CAREER", zh: "经历" },
    statProposal: { ko: "제안서", en: "PROPOSAL", zh: "提案" },
    statCreators: { ko: "전속", en: "EXCLUSIVE", zh: "专属" },
  };

  /* ---------------- 허브 수치 ---------------- */
  var STATS = [
    { l: UI.statCareer, v: { ko: "4년 4개월", en: "4 yr 4 mo", zh: "4 年 4 个月" } },
    { l: UI.statProposal, v: { ko: "1시간 → 3~5분", en: "1 hr → 3–5 min", zh: "1 小时 → 3~5 分钟" } },
    { l: UI.statCreators, v: { ko: "최대 30팀", en: "up to 30", zh: "最多 30 团队" } },
  ];

  /* ---------------- 지도 내용 ----------------
     kid = { step?, label }
     · step  : 짧은 라벨 (내 문제 / AS-IS / 해결 / TO-BE …)
     · label : 굵은 핵심어 한 줄 — 서술형 문장은 쓰지 않습니다.
     모든 노드가 처음부터 펼쳐져 있고, 눌러서 열 것은 없습니다. */
  var CONTENT = [
    {
      id: "why",
      side: "left",
      tag: "01 · WHY",
      title: { ko: "왜 AI를 만드나", en: "Why I build", zh: "为什么做 AI" },
      kids: [
        {
          step: { ko: "내 문제", en: "Me", zh: "我的问题" },
          label: { ko: "제안서 기준 머릿속에만 존재", en: "Proposal criteria only in my head", zh: "提案标准只在脑子里" },
        },
        {
          step: { ko: "동료", en: "Team", zh: "同事" },
          label: { ko: "카톡·메일 분산으로 매번 확인", en: "Chat and mail scattered, checked every time", zh: "聊天·邮件分散，每次都要确认" },
        },
        {
          step: { ko: "조직", en: "Company", zh: "组织" },
          label: { ko: "해외 컨택 반복 병목", en: "Global outreach, a recurring bottleneck", zh: "海外联络反复成为瓶颈" },
        },
      ],
    },
    {
      id: "team",
      side: "left",
      tag: "02 · TEAM",
      title: { ko: "동료·TF 협업", en: "Team & task force", zh: "同事·TF 协作" },
      kids: [
        {
          step: { ko: "AS-IS", en: "AS-IS", zh: "AS-IS" },
          label: { ko: "카톡·메일 분산, 진행률 불투명", en: "Chat and mail scattered, progress opaque", zh: "聊天·邮件分散，进度不透明" },
        },
        {
          step: { ko: "해결", en: "Fix", zh: "解决" },
          label: { ko: "7단계 실시간 운영 대시보드", en: "7-stage live operations dashboard", zh: "七阶段实时运营看板" },
        },
        {
          step: { ko: "TO-BE", en: "TO-BE", zh: "TO-BE" },
          label: { ko: "링크 1개 확인 · 인수인계", en: "One link to check, one to hand over", zh: "一个链接确认 · 交接" },
        },
      ],
    },
    {
      id: "org",
      side: "left",
      tag: "03 · COMPANY",
      title: { ko: "조직 확장", en: "Company scale", zh: "组织扩展" },
      kids: [
        {
          step: { ko: "글로벌 아웃리치", en: "Global outreach", zh: "全球外联" },
          label: { ko: "KO·EN·ZH 자동화 + 발송 전 사람 검토", en: "KO·EN·ZH automated + human check before sending", zh: "KO·EN·ZH 自动 + 发送前人工确认" },
        },
      ],
    },
    {
      id: "work",
      side: "right",
      tag: "04 · MY WORK",
      title: { ko: "개인·실무", en: "My own work", zh: "个人实务" },
      kids: [
        {
          step: { ko: "도메인", en: "Domain", zh: "领域" },
          label: { ko: "2035 뷰티·패션(지그재그·무신사·올리브영·MAC) · 12개 기준", en: "Beauty & fashion (Zigzag, Musinsa, Olive Young, MAC) · 12 criteria", zh: "美妆·时尚（Zigzag、Musinsa、Olive Young、MAC）· 12 条标准" },
        },
        {
          step: { ko: "제안서 AI", en: "Proposal AI", zh: "提案 AI" },
          label: { ko: "1시간 → 3~5분 (팀 공용 표준)", en: "1 hr → 3–5 min (team-wide standard)", zh: "1 小时 → 3~5 分钟（团队共用标准）" },
        },
      ],
    },
    {
      id: "safety",
      side: "right",
      tag: "05 · SAFETY",
      title: { ko: "안전장치", en: "Safeguards", zh: "安全线" },
      kids: [
        {
          step: { ko: "AI 범위", en: "AI scope", zh: "AI 范围" },
          label: { ko: "초안 작성 · 조건 분류", en: "Drafting · sorting conditions", zh: "撰写初稿 · 条件分类" },
        },
        {
          step: { ko: "사람 승인", en: "Human approval", zh: "人工审批" },
          label: { ko: "2,000만 원+ · 성과연동 · 최종 발송", en: "₩20M+ · performance pay · final send", zh: "2,000 万韩元以上 · 按效果付款 · 最终发送" },
        },
      ],
    },
    {
      id: "career",
      side: "right",
      tag: "06 · CAREER",
      title: { ko: "경력", en: "Career", zh: "履历" },
      kids: [
        {
          step: { ko: "커리어 흐름", en: "Path", zh: "履历线" },
          label: { ko: "샌드박스(종합 MCN) → 올투원(AI 콘텐츠) → 아이스(뷰티 MCN) → 온더룩(패션·AI 에이전트)", en: "Sandbox (general MCN) → Alltoone (AI content) → Ice (beauty MCN) → Onthelook (fashion · AI agents)", zh: "Sandbox（综合 MCN）→ Alltoone（AI 内容）→ Ice（美妆 MCN）→ Onthelook（时尚 · AI 智能体）" },
        },
        {
          step: { ko: "다음 목표", en: "Next", zh: "下一步" },
          label: { ko: "소통 AI 에이전트", en: "Communication AI agent", zh: "沟通型 AI 智能体" },
        },
      ],
    },
  ];

  /* ---------------- DOM ---------------- */
  var CANVAS_W = 1240;
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
    /* 좁은 화면은 세로 스택(CSS) — 캔버스 축소를 쓰지 않습니다. */
    if (window.innerWidth <= 900) {
      mapEl.style.transform = "";
      stageWrap.style.height = "";
      return 1;
    }
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
    if (window.innerWidth <= 900) {
      wires.length = 0;
      while (wiresEl.firstChild) wiresEl.removeChild(wiresEl.firstChild);
      return;
    }
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

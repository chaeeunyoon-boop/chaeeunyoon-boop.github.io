/* =============================================================
   app.js — 렌더링 + 언어(KO/EN/ZH)·테마 토글
   데이터는 data.js의 SITE 객체 하나만 읽습니다.
   ============================================================= */

(function () {
  "use strict";

  var LANGS = ["ko", "en", "zh"];
  var LANG_ATTR = { ko: "ko", en: "en", zh: "zh-Hans" };
  var STORE = { lang: "ax.lang", theme: "ax.theme", case: "ax.case" };

  var state = {
    lang: pickLang(),
    theme: pickTheme(),
    caseIndex: pickCase(),
    step: 0,
  };

  /* ---------------- utils ---------------- */
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

  function pickCase() {
    try {
      var saved = parseInt(localStorage.getItem(STORE.case), 10);
      if (!isNaN(saved) && saved >= 0 && saved < SITE.cases.length) return saved;
    } catch (e) {}
    return 0;
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  }

  /* 문자열이면 그대로, {ko,en,zh}면 현재 언어 값 (없으면 en → ko) */
  function t(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[state.lang] != null ? value[state.lang] : value.en != null ? value.en : value.ko || "";
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function svgArrow(cls) {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("aria-hidden", "true");
    if (cls) s.setAttribute("class", cls);
    var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", "M4 12h15M13 6l6 6-6 6");
    s.appendChild(p);
    return s;
  }

  /* ---------------- static labels ---------------- */
  function applyLabels() {
    var ui = SITE.ui;
    document.documentElement.lang = LANG_ATTR[state.lang];
    document.title = t(ui.title);
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(ui.desc));
    var og = document.querySelector('meta[property="og:title"]');
    if (og) og.setAttribute("content", t(ui.title));

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (ui[key] != null) node.textContent = t(ui[key]);
    });

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === state.lang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  /* ---------------- hero metrics ---------------- */
  function renderMetrics() {
    var host = document.getElementById("heroMetrics");
    host.textContent = "";
    SITE.metrics.forEach(function (m, i) {
      var li = el("li", "metric");
      var top = el("div", "metric__top");
      top.appendChild(el("span", "metric__label", t(m.label)));
      top.appendChild(el("span", "metric__idx", "0" + (i + 1)));
      var nums = el("div", "metric__nums");
      nums.appendChild(el("span", "metric__before", t(m.before)));
      nums.appendChild(svgArrow("metric__arrow"));
      nums.appendChild(el("span", "metric__after", t(m.after)));
      li.appendChild(top);
      li.appendChild(nums);
      host.appendChild(li);
    });
  }

  /* ---------------- cases ---------------- */
  function renderRail() {
    var rail = document.getElementById("caseRail");
    rail.textContent = "";
    SITE.cases.forEach(function (c, i) {
      var btn = el("button", "railbtn" + (i === state.caseIndex ? " is-active" : ""));
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", i === state.caseIndex ? "true" : "false");
      btn.appendChild(el("span", "railbtn__no", c.no));
      btn.appendChild(el("span", "railbtn__title", t(c.title)));
      btn.addEventListener("click", function () {
        state.caseIndex = i;
        state.step = 0;
        save(STORE.case, String(i));
        renderRail();
        renderPanel();
      });
      btn.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % SITE.cases.length;
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + SITE.cases.length) % SITE.cases.length;
        if (next == null) return;
        e.preventDefault();
        rail.children[next].focus();
      });
      rail.appendChild(btn);
    });
  }

  function renderPanel() {
    var c = SITE.cases[state.caseIndex];
    var host = document.getElementById("casePanel");
    host.textContent = "";

    var meta = el("div", "case__meta");
    meta.appendChild(el("span", "case__tag", t(c.tag)));
    meta.appendChild(el("span", "case__org", t(c.org)));
    meta.appendChild(el("span", "case__period", t(c.period)));
    meta.appendChild(el("span", "case__role", t(c.role)));
    host.appendChild(meta);

    host.appendChild(el("h3", "case__title", t(c.title)));
    host.appendChild(el("p", "case__onliner", t(c.oneLiner)));

    var labels = [SITE.ui.step1, SITE.ui.step2, SITE.ui.step3];
    var steps = el("div", "steps");
    steps.setAttribute("role", "tablist");
    labels.forEach(function (lab, i) {
      var b = el("button", "step" + (i === state.step ? " is-active" : ""));
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", i === state.step ? "true" : "false");
      b.appendChild(el("span", "step__no", "0" + (i + 1)));
      b.appendChild(el("span", "step__label", t(lab).replace(/^\d+\s·\s/, "")));
      b.addEventListener("click", function () {
        state.step = i;
        renderPanel();
      });
      steps.appendChild(b);
    });
    host.appendChild(steps);

    var body = el("div", "stepbody");
    body.setAttribute("role", "tabpanel");

    if (state.step === 0) {
      if (c.problem.lead) body.appendChild(el("p", "stepbody__lead", t(c.problem.lead)));
      var ul = el("ul", "bullets");
      c.problem.bullets.forEach(function (b) {
        ul.appendChild(el("li", null, t(b)));
      });
      body.appendChild(ul);
    } else if (state.step === 1) {
      if (c.rules.lead) body.appendChild(el("p", "stepbody__lead", t(c.rules.lead)));
      // 두 줄로 균등 분할(7칸 → 4+3). 줄 끝 칸은 화살표를 숨깁니다.
      var cols = Math.ceil(c.rules.flow.length / 2);
      var flow = el("div", "flow");
      flow.style.setProperty("--cols", cols);
      c.rules.flow.forEach(function (f, i) {
        var end = (i + 1) % cols === 0;
        var node = el("div", "node" + (f.gate ? " node--gate" : "") + (end ? " node--rowend" : ""));
        node.appendChild(el("span", "node__no mono", (i < 9 ? "0" : "") + (i + 1)));
        node.appendChild(el("span", "node__label", t(f.label)));
        node.appendChild(el("span", "node__sub", t(f.sub)));
        flow.appendChild(node);
      });
      body.appendChild(flow);
      var chips = el("div", "chips");
      c.rules.notes.forEach(function (n) {
        chips.appendChild(el("span", null, t(n)));
      });
      body.appendChild(chips);
    } else {
      if (c.impact.lead) body.appendChild(el("p", "stepbody__lead", t(c.impact.lead)));
      var tiles = el("div", "tiles");
      c.impact.metrics.forEach(function (m) {
        var tile = el("div", "tile");
        tile.appendChild(el("span", "tile__label", t(m.label)));
        var row = el("div", "tile__row");
        row.appendChild(el("span", "tile__before", t(m.before)));
        row.appendChild(svgArrow("tile__arrow"));
        row.appendChild(el("span", "tile__after", t(m.after)));
        tile.appendChild(row);
        tiles.appendChild(tile);
      });
      body.appendChild(tiles);
      if (c.impact.note) body.appendChild(el("p", "case__note", t(c.impact.note)));
    }

    host.appendChild(body);
  }

  /* ---------------- principles / stack / timeline / contact ---------------- */
  function renderLayers() {
    var host = document.getElementById("layers");
    host.textContent = "";
    SITE.layers.forEach(function (l) {
      var card = el("article", "layer");
      card.appendChild(el("span", "layer__tag", l.tag));
      card.appendChild(el("h3", null, t(l.title)));
      card.appendChild(el("p", null, t(l.desc)));
      card.appendChild(el("p", "layer__ex", t(l.example)));
      host.appendChild(card);
    });
  }

  function renderPrinciples() {
    var host = document.getElementById("principlesGrid");
    host.textContent = "";
    SITE.principles.forEach(function (p) {
      var card = el("article", "principle");
      card.appendChild(el("span", "principle__no", p.no));
      card.appendChild(el("h3", null, t(p.title)));
      card.appendChild(el("p", null, t(p.body)));
      host.appendChild(card);
    });
  }

  function renderStack() {
    var host = document.getElementById("stack");
    host.textContent = "";
    SITE.stack.forEach(function (row) {
      var r = el("div", "stackrow");
      r.appendChild(el("span", "stackrow__group", t(row.group)));
      var items = el("div", "stackrow__items");
      row.items.forEach(function (it) {
        items.appendChild(el("span", null, t(it)));
      });
      r.appendChild(items);
      host.appendChild(r);
    });
  }

  function renderTimeline() {
    var host = document.getElementById("timeline");
    host.textContent = "";
    SITE.timeline.forEach(function (item) {
      var li = el("li", "tl");
      var head = el("div", "tl__head");
      head.appendChild(el("span", "tl__period", t(item.period)));
      head.appendChild(el("span", "tl__org", t(item.org)));
      head.appendChild(el("span", "tl__role", t(item.role)));
      li.appendChild(head);
      var ul = el("ul");
      item.bullets.forEach(function (b) {
        ul.appendChild(el("li", null, t(b)));
      });
      li.appendChild(ul);
      host.appendChild(li);
    });
  }

  function renderDomain() {
    var host = document.getElementById("domain");
    if (host) {
      host.textContent = "";
      (SITE.domain || []).forEach(function (d) {
        var card = el("article", "domain__card");
        card.appendChild(el("span", "domain__tag mono", d.tag));
        card.appendChild(el("h4", "domain__title", t(d.title)));
        card.appendChild(el("p", "domain__desc", t(d.desc)));
        host.appendChild(card);
      });
    }
    var link = document.getElementById("domainLink");
    if (link) link.textContent = t(SITE.domainLink);
  }

  function renderContact() {
    var host = document.getElementById("contactLinks");
    host.textContent = "";
    SITE.contact.forEach(function (c) {
      var a = el("a", "clink");
      a.href = c.href;
      if (c.href.indexOf("http") === 0) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      var left = el("span");
      left.appendChild(el("span", "clink__key", c.key));
      left.appendChild(el("span", "clink__val", c.value));
      a.appendChild(left);
      a.appendChild(svgArrow());
      host.appendChild(a);
    });
  }

  /* ---------------- live demos (100% fictional data) ---------------- */
  // tab: 보이는 데모, d1: 데모 1 프리셋 — 첫 화면은 사람 확인이 걸리는 장면(3번)으로 엽니다.
  var demoState = { tab: 0, d1: 2, d2: "all", d2sel: null, d3: 0, d3lang: null };

  function tonePill(tone, label) {
    return el("span", "pill pill--" + tone, label);
  }

  function renderDemos() {
    var host = document.getElementById("demosApp");
    if (!host) return;
    var D = SITE.demos;
    var defs = [
      { key: "simulator", no: "01" },
      { key: "dashboard", no: "02" },
      { key: "outreach", no: "03" },
    ];
    host.textContent = "";

    // 세 데모를 쌓지 않고 탭으로 하나씩 보여 줍니다.
    var tabs = el("div", "demotabs");
    tabs.setAttribute("role", "tablist");
    defs.forEach(function (d, i) {
      var on = demoState.tab === i;
      var b = el("button", "demotab" + (on ? " is-active" : ""));
      b.type = "button";
      b.id = "demoTab-" + d.no;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.setAttribute("aria-controls", "demo-" + d.no);
      b.appendChild(el("span", "demotab__no mono", d.no));
      b.appendChild(el("span", "demotab__label", t(D[d.key].tab)));
      b.addEventListener("click", function () {
        demoState.tab = i;
        renderDemos();
        document.getElementById("demoTab-" + d.no).focus();
      });
      b.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowRight") next = (i + 1) % defs.length;
        if (e.key === "ArrowLeft") next = (i - 1 + defs.length) % defs.length;
        if (next == null) return;
        e.preventDefault();
        tabs.children[next].click();
      });
      tabs.appendChild(b);
    });
    host.appendChild(tabs);

    defs.forEach(function (d, i) {
      var card = el("section", "demo");
      card.id = "demo-" + d.no;
      card.setAttribute("role", "tabpanel");
      card.setAttribute("aria-labelledby", "demoTab-" + d.no);
      card.hidden = demoState.tab !== i;

      var head = el("header", "demo__head");
      var tags = el("div", "demo__tags");
      tags.appendChild(el("span", "demo__no", "DEMO " + d.no));
      tags.appendChild(el("span", "demo__fict", t(D.fictitious)));
      head.appendChild(tags);
      head.appendChild(el("h3", "demo__title", t(D[d.key].title)));
      head.appendChild(el("p", "demo__lead", t(D[d.key].lead)));
      // "여기를 보세요" — 이 데모에서 한 곳만 크게 짚어 줍니다.
      var focus = el("p", "demo__focus");
      focus.appendChild(el("strong", null, t(D.focusLabel)));
      focus.appendChild(el("span", null, t(D[d.key].focus)));
      head.appendChild(focus);
      card.appendChild(head);

      var body = el("div", "demo__body");
      body.id = "demoBody-" + d.no;
      card.appendChild(body);
      host.appendChild(card);
    });

    renderSimulator();
    renderBoard();
    renderOutreach();
    renderEvidence();
  }

  function renderSimulator() {
    var host = document.getElementById("demoBody-01");
    if (!host) return;
    var S = SITE.demos.simulator;
    host.textContent = "";

    var tabs = el("div", "presets");
    tabs.setAttribute("role", "group");
    S.presets.forEach(function (p, i) {
      var on = demoState.d1 === i;
      var b = el("button", "preset" + (on ? " is-active" : ""));
      b.type = "button";
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.appendChild(el("span", "preset__no mono", "0" + (i + 1)));
      b.appendChild(el("span", "preset__name", t(p.name)));
      b.appendChild(el("span", "preset__hint", t(p.hint)));
      b.addEventListener("click", function () {
        demoState.d1 = i;
        renderSimulator();
      });
      tabs.appendChild(b);
    });
    host.appendChild(tabs);

    var p = S.presets[demoState.d1];

    var req = el("div", "reqmsg");
    req.appendChild(el("span", "reqmsg__head mono", t(S.requestHead)));
    req.appendChild(el("p", "reqmsg__text", t(p.request)));
    host.appendChild(req);

    var counts = { pass: 0, warn: 0, halt: 0 };
    p.rules.forEach(function (s) {
      counts[s] = (counts[s] || 0) + 1;
    });

    var grid = el("div", "sim");

    var colA = el("div", "sim__col");
    colA.appendChild(el("h4", "demo__h", t(S.extractHead)));

    var dl = el("dl", "extract");
    S.fields.forEach(function (f, i) {
      var row = el("div", "extract__row");
      row.appendChild(el("dt", "extract__key", t(f.label)));
      var flagged = p.warnFields.indexOf(i) !== -1;
      row.appendChild(el("dd", "extract__val" + (flagged ? " is-warn" : ""), t(p.extracted[i])));
      dl.appendChild(row);
    });
    colA.appendChild(dl);
    grid.appendChild(colA);

    var colB = el("div", "sim__col");
    var headB = el("div", "sim__head");
    headB.appendChild(el("h4", "demo__h", t(S.rulesHead)));
    var sum = el("div", "sim__counts");
    sum.appendChild(tonePill("pass", t(S.status.pass) + " " + counts.pass));
    sum.appendChild(tonePill("warn", t(S.status.warn) + " " + counts.warn));
    sum.appendChild(tonePill("halt", t(S.status.halt) + " " + counts.halt));
    headB.appendChild(sum);
    colB.appendChild(headB);

    // 걸린 규칙(정지 → 경고)은 사유와 함께 위에, 통과한 규칙은 아래에 작게 모읍니다.
    var flagged = [];
    var passed = [];
    S.rules.forEach(function (r, i) {
      (p.rules[i] === "pass" ? passed : flagged).push(i);
    });
    flagged.sort(function (a, b) {
      return (p.rules[a] === "halt" ? 0 : 1) - (p.rules[b] === "halt" ? 0 : 1) || a - b;
    });

    if (flagged.length) {
      var list = el("ul", "rules");
      flagged.forEach(function (i) {
        var r = S.rules[i];
        var st = p.rules[i];
        var li = el("li", "rule rule--" + st);
        var main = el("div", "rule__main");
        var top = el("div", "rule__top");
        top.appendChild(el("span", "rule__id mono", r.id));
        top.appendChild(el("span", "rule__name", t(r.name)));
        main.appendChild(top);
        if (p.notes[i]) main.appendChild(el("span", "rule__note", t(p.notes[i])));
        li.appendChild(main);
        li.appendChild(tonePill(st, t(S.status[st])));
        list.appendChild(li);
      });
      colB.appendChild(list);
    }

    var passList = el("ul", "passrules");
    passed.forEach(function (i) {
      var li = el("li", "passrule");
      li.appendChild(el("span", "rule__id mono", S.rules[i].id));
      li.appendChild(el("span", null, t(S.rules[i].name)));
      passList.appendChild(li);
    });
    colB.appendChild(passList);
    grid.appendChild(colB);
    host.appendChild(grid);

    var draft = el("div", "draft draft--" + p.draft.status);
    var dhead = el("div", "draft__head");
    dhead.appendChild(el("h4", "demo__h", t(S.draftHead)));
    var tone = p.draft.status === "ok" ? "pass" : p.draft.status === "fix" ? "warn" : "halt";
    dhead.appendChild(tonePill(tone, t(S.draftStatus[p.draft.status])));
    draft.appendChild(dhead);
    draft.appendChild(el("p", "draft__title", t(p.draft.title)));
    p.draft.lines.forEach(function (l) {
      var row = el("div", "draft__row");
      row.appendChild(el("span", "draft__k", t(l.k)));
      row.appendChild(el("span", "draft__v", t(l.v)));
      draft.appendChild(row);
    });
    if (p.draft.status === "hold") draft.appendChild(el("p", "draft__gate", t(S.gateNote)));
    host.appendChild(draft);
  }

  function renderBoard() {
    var host = document.getElementById("demoBody-02");
    if (!host) return;
    var S = SITE.demos.dashboard;
    host.textContent = "";

    var statusOf = {};
    S.statuses.forEach(function (s) {
      statusOf[s.id] = s;
    });

    var approve = S.campaigns.filter(function (c) {
      return c.status === "approve";
    }).length;
    var soon = S.campaigns.filter(function (c) {
      return c.dday != null && c.dday <= 3;
    }).length;

    var kpis = el("div", "kpis");
    [
      [String(S.campaigns.length), S.kpiTotal],
      [String(approve), S.kpiApprove],
      [String(soon), S.kpiSoon],
    ].forEach(function (k) {
      var box = el("div", "kpi");
      box.appendChild(el("span", "kpi__val", k[0]));
      box.appendChild(el("span", "kpi__label", t(k[1])));
      kpis.appendChild(box);
    });
    host.appendChild(kpis);

    var filters = el("div", "filters");
    filters.setAttribute("role", "group");
    filters.setAttribute("aria-label", t(S.listHead));

    function filterBtn(id, label, n) {
      var on = demoState.d2 === id;
      var b = el("button", "filter" + (on ? " is-active" : ""));
      b.type = "button";
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.appendChild(el("span", null, label));
      b.appendChild(el("span", "filter__n mono", String(n)));
      b.addEventListener("click", function () {
        demoState.d2 = id;
        renderBoard();
      });
      return b;
    }

    filters.appendChild(filterBtn("all", t(S.filterAll), S.campaigns.length));
    S.statuses.forEach(function (s) {
      var n = S.campaigns.filter(function (c) {
        return c.status === s.id;
      }).length;
      filters.appendChild(filterBtn(s.id, t(s.label), n));
    });
    host.appendChild(filters);

    var visible = S.campaigns.filter(function (c) {
      return demoState.d2 === "all" || c.status === demoState.d2;
    });

    var selected = null;
    for (var i = 0; i < visible.length; i++) {
      if (visible[i].id === demoState.d2sel) selected = visible[i];
    }
    if (!selected && visible.length) {
      selected = visible[0];
      demoState.d2sel = selected.id;
    }

    var board = el("div", "board");
    var listCol = el("div", "board__list");

    visible.forEach(function (c) {
      var st = statusOf[c.status];
      var on = demoState.d2sel === c.id;
      var row = el("button", "camp" + (on ? " is-active" : ""));
      row.type = "button";
      row.setAttribute("aria-pressed", on ? "true" : "false");

      var top = el("div", "camp__top");
      top.appendChild(el("span", "camp__brand", c.brand));
      top.appendChild(tonePill(st.tone, t(st.label)));
      row.appendChild(top);

      var meta = el("div", "camp__meta");
      meta.appendChild(el("span", null, t(c.creator)));
      meta.appendChild(el("span", "camp__dot", "·"));
      meta.appendChild(el("span", null, t(c.amount)));
      meta.appendChild(el("span", "camp__dot", "·"));
      meta.appendChild(
        el("span", "camp__due" + (c.dday != null && c.dday <= 2 ? " is-urgent" : ""),
          c.dday == null ? t(S.dueNone) : "D-" + c.dday)
      );
      row.appendChild(meta);

      row.appendChild(el("span", "camp__next", t(c.next)));

      row.addEventListener("click", function () {
        demoState.d2sel = c.id;
        renderBoard();
      });
      listCol.appendChild(row);
    });

    board.appendChild(listCol);

    var detail = el("div", "board__detail");
    if (!selected) {
      detail.appendChild(el("p", "board__hint", t(S.selectHint)));
    } else {
      var sst = statusOf[selected.status];
      var dTop = el("div", "detail__top");
      dTop.appendChild(el("h4", "detail__brand", selected.brand));
      dTop.appendChild(tonePill(sst.tone, t(sst.label)));
      detail.appendChild(dTop);

      var kv = el("div", "detail__kv");
      [
        [S.creatorLabel, t(selected.creator)],
        [S.amountLabel, t(selected.amount)],
        [S.dueLabel, selected.dday == null ? t(S.dueNone) : "D-" + selected.dday],
      ].forEach(function (r) {
        var line = el("div", "detail__kvrow");
        line.appendChild(el("span", "detail__k", t(r[0])));
        line.appendChild(el("span", "detail__v", r[1]));
        kv.appendChild(line);
      });
      detail.appendChild(kv);

      detail.appendChild(el("p", "detail__summary", t(selected.summary)));

      var next = el("div", "detail__next");
      next.appendChild(el("span", "detail__nextlabel mono", t(S.nextLabel)));
      next.appendChild(el("p", null, t(selected.next)));
      detail.appendChild(next);

      detail.appendChild(el("h5", "detail__h mono", t(S.historyLabel)));
      var hist = el("ul", "detail__hist");
      selected.history.forEach(function (h) {
        hist.appendChild(el("li", null, t(h)));
      });
      detail.appendChild(hist);
    }
    board.appendChild(detail);
    host.appendChild(board);
  }

  function renderOutreach() {
    var host = document.getElementById("demoBody-03");
    if (!host) return;
    var S = SITE.demos.outreach;
    host.textContent = "";

    var stageIndex = {};
    S.stages.forEach(function (s, i) {
      stageIndex[s.id] = i;
    });

    var sent = S.partners.filter(function (p) {
      return stageIndex[p.stage] >= 1;
    }).length;
    var replied = S.partners.filter(function (p) {
      return stageIndex[p.stage] >= 3;
    }).length;
    var meeting = S.partners.filter(function (p) {
      return p.stage === "meeting";
    }).length;

    var kpis = el("div", "kpis");
    [
      [sent + "/" + S.partners.length, S.kpiSent],
      [replied + "/" + S.partners.length, S.kpiReplied],
      [String(meeting), S.kpiMeeting],
    ].forEach(function (k) {
      var box = el("div", "kpi");
      box.appendChild(el("span", "kpi__val", k[0]));
      box.appendChild(el("span", "kpi__label", t(k[1])));
      kpis.appendChild(box);
    });
    host.appendChild(kpis);

    var layout = el("div", "outreach");

    var left = el("div", "outreach__col");
    left.appendChild(el("h4", "demo__h", t(S.partnerHead)));
    // 진행 막대 5칸이 어떤 단계인지 보여 주는 범례
    var key = el("ol", "stagekey");
    S.stages.forEach(function (s) {
      key.appendChild(el("li", null, t(s.label)));
    });
    left.appendChild(key);
    var plist = el("div", "partners");
    S.partners.forEach(function (p, i) {
      var si = stageIndex[p.stage];
      var on = demoState.d3 === i;
      var b = el("button", "partner" + (on ? " is-active" : ""));
      b.type = "button";
      b.setAttribute("aria-pressed", on ? "true" : "false");

      var top = el("div", "partner__top");
      top.appendChild(el("span", "partner__name", p.name));
      top.appendChild(
        tonePill(si === 0 ? "mute" : si === 1 ? "info" : si === 2 ? "warn" : "pass", t(S.stages[si].label))
      );
      b.appendChild(top);
      b.appendChild(el("span", "partner__region", t(p.region)));

      var prog = el("div", "prog");
      S.stages.forEach(function (s, k) {
        prog.appendChild(el("span", "prog__dot" + (k < si ? " is-done" : k === si ? " is-now" : "")));
      });
      b.appendChild(prog);

      b.addEventListener("click", function () {
        demoState.d3 = i;
        renderOutreach();
      });
      plist.appendChild(b);
    });
    left.appendChild(plist);

    var partner = S.partners[demoState.d3];
    var pd = el("div", "pdetail");
    pd.appendChild(el("span", "pdetail__label mono", t(S.nextLabel)));
    pd.appendChild(el("p", "pdetail__text", t(partner.next)));
    left.appendChild(pd);
    layout.appendChild(left);

    var right = el("div", "outreach__col");
    right.appendChild(el("h4", "demo__h", t(S.templateHead)));
    right.appendChild(el("p", "tpl__note", t(S.templateNote)));

    var tl = demoState.d3lang || state.lang;
    var tabs = el("div", "segsm");
    tabs.setAttribute("role", "group");
    tabs.setAttribute("aria-label", t(S.templateHead));
    ["ko", "en", "zh"].forEach(function (l) {
      var on = l === tl;
      var b = el("button", "segsm__btn" + (on ? " is-active" : ""));
      b.type = "button";
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.textContent = l.toUpperCase();
      b.addEventListener("click", function () {
        demoState.d3lang = l;
        renderOutreach();
      });
      tabs.appendChild(b);
    });
    right.appendChild(tabs);

    var tpl = S.templates[tl];
    var box = el("div", "tpl");
    var subj = el("div", "tpl__subject");
    subj.appendChild(el("span", "tpl__k mono", t(S.subjectLabel)));
    subj.appendChild(el("span", "tpl__subjecttext", tpl.subject));
    box.appendChild(subj);
    box.appendChild(el("p", "tpl__body", tpl.body));
    right.appendChild(box);

    layout.appendChild(right);
    host.appendChild(layout);
  }

  function renderEvidence() {
    var host = document.getElementById("demosApp");
    if (!host) return;
    var E = SITE.demos.evidence;
    var card = el("section", "evidence");
    card.appendChild(el("h3", "evidence__title", t(E.title)));
    card.appendChild(el("p", "evidence__lead", t(E.lead)));
    var stats = el("div", "evidence__stats");
    E.stats.forEach(function (s) {
      var box = el("div", "estat" + (s.human ? " estat--human" : ""));
      // 분수는 분자를 크게, 분모를 작게 옆에 둡니다 (9/10 → 9 + /10).
      var val = el("span", "estat__val");
      var cut = s.value.indexOf("/");
      if (cut > 0) {
        val.appendChild(document.createTextNode(s.value.slice(0, cut)));
        val.appendChild(el("span", "estat__den", s.value.slice(cut)));
      } else {
        val.textContent = s.value;
      }
      box.appendChild(val);
      box.appendChild(el("span", "estat__label", t(s.label)));
      box.appendChild(el("span", "estat__sub", t(s.sub)));
      stats.appendChild(box);
    });
    card.appendChild(stats);
    card.appendChild(el("p", "evidence__note", t(E.note)));
    host.appendChild(card);
  }

  /* ---------------- controls ---------------- */
  function bindControls() {
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (LANGS.indexOf(lang) === -1) return;
        var prev = state.lang;
        state.lang = lang;
        if (demoState.d3lang == null || demoState.d3lang === prev) demoState.d3lang = lang;
        save(STORE.lang, lang);
        renderAll();
      });
    });

    var themeBtn = document.getElementById("themeToggle");
    themeBtn.addEventListener("click", function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", state.theme);
      save(STORE.theme, state.theme);
    });
  }

  function renderAll() {
    applyLabels();
    renderMetrics();
    renderRail();
    renderPanel();
    renderDemos();
    renderLayers();
    renderPrinciples();
    renderStack();
    renderDomain();
    renderTimeline();
    renderContact();
  }

  function init() {
    document.documentElement.setAttribute("data-theme", state.theme);
    document.getElementById("year").textContent = String(new Date().getFullYear());
    renderAll();
    bindControls();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

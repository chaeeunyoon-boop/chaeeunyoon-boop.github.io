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
    var head = el("h4", null, t(labels[state.step]));
    body.appendChild(head);

    if (state.step === 0) {
      body.appendChild(el("p", "stepbody__lead", t(c.problem.lead)));
      var ul = el("ul", "bullets");
      c.problem.bullets.forEach(function (b) {
        ul.appendChild(el("li", null, t(b)));
      });
      body.appendChild(ul);
    } else if (state.step === 1) {
      body.appendChild(el("p", "stepbody__lead", t(c.rules.lead)));
      var flow = el("div", "flow");
      c.rules.flow.forEach(function (f) {
        var node = el("div", "node" + (f.gate ? " node--gate" : ""));
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
      body.appendChild(el("p", "stepbody__lead", t(c.impact.lead)));
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
      body.appendChild(el("p", "case__note", t(c.impact.note)));
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
    var host = document.getElementById("principles");
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

  /* ---------------- controls ---------------- */
  function bindControls() {
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (LANGS.indexOf(lang) === -1) return;
        state.lang = lang;
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
    renderLayers();
    renderPrinciples();
    renderStack();
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

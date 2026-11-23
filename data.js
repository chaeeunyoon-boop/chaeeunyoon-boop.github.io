/* =============================================================
   data.js — all editable content lives here.
   언어는 세 가지: ko(한국어) / en(English) / zh(简体中文).
   문구 하나 = { ko: "...", en: "...", zh: "..." }
   구조(metrics, cases, layers, principles, stack, timeline,
   contact)만 고치면 사이트 전체가 바뀝니다.
   ============================================================= */

const SITE = {
  meta: {
    email: "chaeeunyoon@gmail.com",
    linkedin: "https://www.linkedin.com/in/chaeeun-yun-8a4510239/",
    github: "https://github.com/chaeeunyoon-boop",
  },

  /* ---------- UI LABELS (헤더·섹션 제목·버튼) ---------- */
  ui: {
    title: {
      ko: "윤채은 — AX · AI Transformation 빌더 포트폴리오",
      en: "Chaeeun Yun — AX / AI Transformation Builder portfolio",
      zh: "Chaeeun Yun — AX · AI Transformation 构建者作品集",
    },
    desc: {
      ko: "현업의 반복 병목을 발굴해 AS-IS 프로세스를 TO-BE로 재설계하고, AI 에이전트·내부 도구로 구축해 현업에 적용한 뒤 운영 기준으로 문서화해 온 윤채은의 포트폴리오.",
      en: "Chaeeun Yun's portfolio: finding repeated bottlenecks in live operations, redesigning AS-IS processes into TO-BE, building them as AI agents and internal tools, applying them in the field, then documenting the operating standards.",
      zh: "Chaeeun Yun 的作品集：识别现场重复瓶颈，把 AS-IS 流程重构为 TO-BE，用 AI 代理与内部工具搭起来并落地业务，最后整理成运营标准。",
    },
    skip: { ko: "본문으로 건너뛰기", en: "Skip to content", zh: "跳到正文" },
    brandRole: { ko: "AX · 빌더형 문제해결사", en: "AX · Builder-minded problem solver", zh: "AX · 构建型问题解决者" },
    navCases: { ko: "케이스", en: "Cases", zh: "案例" },
    navDemos: { ko: "라이브 데모", en: "Live demos", zh: "实时演示" },
    demosTitle: {
      ko: "직접 눌러보는 데모 3종",
      en: "Three demos you can click through",
      zh: "三个可以亲手点击的演示",
    },
    demosLead: {
      ko: "아래 케이스에서 설명한 방식을 직접 눌러 볼 수 있는 화면으로 옮겼습니다. 데이터는 모두 지어낸 예시라 마음껏 눌러 보셔도 됩니다.",
      en: "The approach from the cases, turned into screens you can click. All data is made up, so click around freely.",
      zh: "把案例里讲的方法做成了可以亲手点击的界面。数据全是虚构的示例，可以随意点。",
    },
    demosFootnote: {
      ko: "모든 브랜드·크리에이터·금액·파트너명은 가상이며, 실제 회사·캠페인·광고 금액과 무관합니다. 서버 호출·저장·실제 발송은 없습니다.",
      en: "Every brand, creator, amount and partner name is fictional — unrelated to any real company, campaign or ad budget. No server calls, no storage, nothing actually sent.",
      zh: "所有品牌、创作者、金额和合作方名称均为虚构，与真实公司、广告活动和广告金额无关。不调用服务器、不保存、也不会真正发送。",
    },
    navPrinciples: { ko: "원칙", en: "Principles", zh: "原则" },
    navCareer: { ko: "경력", en: "Career", zh: "履历" },
    navContact: { ko: "연락", en: "Contact", zh: "联系" },

    heroStatus: {
      ko: "지금은 온더룩 MCN팀(크리에이터 매니지먼트)에서 일하며, 그 업무의 반복 병목을 AI 워크플로우·내부 도구로 바꿉니다",
      en: "Currently on the MCN (creator management) team at Onthelook, turning that team's repeated bottlenecks into AI workflows and internal tools",
      zh: "目前在 Onthelook 的 MCN 团队（创作者经纪）工作，把这份工作中的重复瓶颈改造成 AI 工作流与内部工具",
    },
    heroLine1: { ko: "반복 병목을 발굴해", en: "Find the repeated bottlenecks.", zh: "识别重复出现的瓶颈" },
    heroLine2: { ko: "AS-IS를 TO-BE로 재설계하고", en: "Redesign AS-IS into TO-BE.", zh: "把 AS-IS 重构为 TO-BE" },
    heroLine3: {
      ko: "작동하는 AI 워크플로우로 만듭니다.",
      en: "Build it into AI workflows that actually run.",
      zh: "做成真正运行的 AI 工作流。",
    },
    heroSub: {
      ko: "크리에이터 마케팅을 4년 넘게 운영하며, 그 현장의 반복 병목을 직접 발굴해 AS-IS 프로세스를 TO-BE로 재설계하고 AI 에이전트·내부 도구로 구축해 현업에 적용해 왔습니다. 기획서에서 멈추지 않고, 운영 기준을 문서화해 팀 공용 표준으로 남기는 데까지 갑니다.",
      en: "I have run creator marketing for more than four years. Along the way I found the repeated bottlenecks myself, redesigned the AS-IS processes into TO-BE, and built them as AI agents and internal tools that the team uses in live work. I don't stop at a proposal: the operating criteria get documented and become a team-wide standard.",
      zh: "我做创作者营销四年多，在现场亲手识别重复瓶颈，把 AS-IS 流程重构为 TO-BE，用 AI 代理与内部工具搭起来并落地业务。不止于方案，还把运营标准写成文档，留成团队共用的标准。",
    },
    heroCta1: { ko: "케이스 2건 보기", en: "See the two cases", zh: "查看 2 个案例" },
    heroCta2: { ko: "연락하기", en: "Get in touch", zh: "联系我" },

    metricHead: { ko: "임팩트 · AS-IS → TO-BE", en: "IMPACT · AS-IS → TO-BE", zh: "成效 · AS-IS → TO-BE" },
    metricBadge: { ko: "현업 적용 결과", en: "Applied in live work", zh: "业务落地成果" },
    metricFoot: {
      ko: "* 모두 실제 업무에서 운영한 결과입니다.",
      en: "* Every figure comes from work actually run in production.",
      zh: "* 全部来自实际工作中的运营结果。",
    },

    casesTitle: { ko: "AS-IS 병목 → 재설계 → 임팩트", en: "AS-IS bottleneck → redesign → impact", zh: "AS-IS 瓶颈 → 重构 → 成效" },
    casesLead: {
      ko: "두 건 모두 같은 순서로 읽힙니다. AS-IS에서 무엇이 막혔는지, 어떤 판단을 운영 기준으로 옮겼는지, TO-BE에서 무엇이 달라졌는지.",
      en: "Both read in the same order: what was stuck in the AS-IS, which judgments became operating rules, and what changed in the TO-BE.",
      zh: "两件都按同一顺序阅读：AS-IS 里卡在哪里、哪些判断被写成运营标准、TO-BE 里发生了什么变化。",
    },
    step1: { ko: "01 · 문제 (AS-IS)", en: "01 · Problem (AS-IS)", zh: "01 · 问题（AS-IS）" },
    step2: { ko: "02 · 재설계 · 솔루션", en: "02 · Redesign & solution", zh: "02 · 重构 · 解决方案" },
    step3: { ko: "03 · 결과 (TO-BE)", en: "03 · Result (TO-BE)", zh: "03 · 结果（TO-BE）" },

    principlesTitle: {
      ko: "자동화할 일과 사람이 승인할 일을 먼저 나눕니다.",
      en: "First, I separate what gets automated from what a person approves.",
      zh: "先把要自动化的事与要由人审批的事分开。",
    },
    principlesLead: {
      ko: "AI 에이전트가 판단할 일, 규칙으로 고정할 일, 사람이 승인할 일. AS-IS를 뜯어볼 때도 이 셋을 먼저 나눕니다.",
      en: "What an AI agent judges, what a rule fixes, what a person approves — every AS-IS review starts by splitting these three.",
      zh: "AI 代理判断的、用规则固化的、由人审批的；拆解 AS-IS 时也先分清这三者。",
    },
    stackTitle: { ko: "Stack", en: "Stack", zh: "Stack" },
    stackNote: {
      ko: "실제로 업무에 쓰고 있는 것들",
      en: "What I actually use at work",
      zh: "真正在工作中使用的东西",
    },

    careerTitle: {
      ko: "현장에서 배운 것을, 다음 현장의 구조로.",
      en: "What I learned on the ground, turned into structure for the next one.",
      zh: "把现场学到的东西，变成下一个现场的结构。",
    },
    careerLead: {
      ko: "총 경력 4년 4개월 · 크리에이터 마케팅 운영 → AS-IS 재설계 · AI 워크플로우 구축",
      en: "4 years 4 months · from creator marketing operations to AS-IS redesign and AI workflow building",
      zh: "总经历 4 年 4 个月 · 从创作者营销运营到 AS-IS 重构与 AI 工作流搭建",
    },

    contactTitle: {
      ko: "막힌 현장이 있다면, 그 이야기부터 듣고 싶습니다.",
      en: "If something is stuck where you work, I want to hear about that first.",
      zh: "如果你有卡住的地方，我想先听那段故事。",
    },
    contactLead: {
      ko: "반복 병목을 찾아 AS-IS를 뜯고 TO-BE로 다시 설계하는 일, AI 워크플로우와 내부 도구로 붙이고 운영 기준으로 남기는 일. 그 구조를 함께 만들 팀을 찾고 있습니다.",
      en: "Finding the repeated bottleneck, taking the AS-IS apart and redesigning it as a TO-BE, then building it as an AI workflow or internal tool and leaving operating standards behind — I'm looking for a team to build that with.",
      zh: "找出重复瓶颈，拆解 AS-IS 并重构成 TO-BE，用 AI 工作流与内部工具搭起来，再留下运营标准——我在找一起做这件事的团队。",
    },
    footerNote: { ko: "정적 HTML/CSS/JS · 빌드 없음", en: "Static HTML/CSS/JS · no build step", zh: "静态 HTML/CSS/JS · 无需构建" },
    footerMeta: {
      ko: "모든 수치는 실제 업무 기록 기준이며, 회사 내부 자료·비공개 데이터는 포함하지 않았습니다.",
      en: "All figures are based on actual work records; no company-internal data or private material is included.",
      zh: "所有数字均基于实际工作记录，未包含公司内部资料与非公开数据。",
    },
  },

  /* ---------- HERO IMPACT CARDS ---------- */
  metrics: [
    {
      before: { ko: "1시간", en: "1 hr", zh: "1 小时" },
      after: { ko: "3~5분", en: "3–5 min", zh: "3~5 分钟" },
      label: { ko: "광고 제안서 초안 · AI 워크플로우", en: "Ad proposal draft · AI workflow", zh: "广告提案初稿 · AI 工作流" },
    },
    {
      before: { ko: "하루 1편", en: "1 a day", zh: "一天一条" },
      after: { ko: "30분에 1편", en: "30 min", zh: "30 分钟" },
      label: { ko: "AI 뉴스 영상 제작 · 워크플로우 구축", en: "AI news-video production · workflow built", zh: "AI 新闻视频制作 · 搭建工作流" },
    },
    {
      before: { ko: "카톡·메일", en: "chat & mail", zh: "聊天·邮件" },
      after: { ko: "한 화면", en: "one screen", zh: "一屏" },
      label: { ko: "광고 운영 현황 · 실시간 운영 대시보드", en: "Campaign status · live ops dashboard", zh: "广告运营进度 · 实时看板" },
    },
  ],

  /* ---------- CASE STUDIES ---------- */
  cases: [
    {
      id: "work-agent",
      no: "01",
      tag: {
        ko: "반복 병목 발굴 · AI 워크플로우 구축",
        en: "Bottleneck discovery · AI workflow built",
        zh: "识别重复瓶颈 · 搭建 AI 工作流",
      },
      title: {
        ko: "제각각인 광고 문의를 처리하는 AI 업무 에이전트 (AS-IS → TO-BE)",
        en: "An AI work agent that handles ad inquiries in every shape (AS-IS → TO-BE)",
        zh: "处理各种形式广告咨询的 AI 工作代理（AS-IS → TO-BE）",
      },
      org: { ko: "온더룩 · MCN팀", en: "Onthelook · MCN Team", zh: "Onthelook · MCN 团队" },
      role: { ko: "설계 · 구축 · 검증 (단독)", en: "Design, build, validation (solo)", zh: "设计 · 搭建 · 验证（独立完成）" },
      period: { ko: "2026.02 – 현재", en: "Feb 2026 – Present", zh: "2026.02 – 至今" },
      oneLiner: {
        ko: "광고 문의를 받아 제안서 초안을 쓰는 데 1건에 1시간이 걸렸습니다. AS-IS에는 판단 기준도 기록도 머릿속에만 있었습니다. 12가지 기준을 운영 규칙으로 문서화해 LLM에 연계하고, AI가 판정과 초안을 맡는 TO-BE로 재설계해 제 일은 3~5분 확인으로 줄었습니다.",
        en: "Drafting a proposal for one ad inquiry took an hour — in the AS-IS, the criteria and the record existed only in my head. I documented the twelve criteria as operating rules and wired them to the LLM, redesigning the process into a TO-BE where AI judges and drafts; my part is now a three-to-five minute check.",
        zh: "写一份广告提案初稿要 1 小时——AS-IS 的判断标准和记录都只在脑子里。我把 12 条标准整理成运营规则并对接 LLM，重构成由 AI 判定与起草的 TO-BE，我只需 3~5 分钟审阅。",
      },
      problem: {
        lead: {
          ko: "뷰티·패션 크리에이터(유튜버·인플루언서) 최대 30팀을 혼자 맡고 있었습니다. 광고 문의는 매번 형식이 달랐고, 어떻게 판단해야 하는지는 어디에도 적혀 있지 않았습니다. 제가 가장 먼저 발굴한 반복 병목이었습니다.",
          en: "I was handling up to 30 beauty and fashion creator teams (YouTubers, influencers) on my own. Ad inquiries arrived in a different format every time, and how to judge them was written down nowhere. This was the first repeated bottleneck I found.",
          zh: "我独自负责最多 30 个美妆、时尚创作者团队（YouTuber、网红）。广告咨询每次格式都不一样，而该如何判断，没有任何地方写下来——这是我最早识别出的重复瓶颈。",
        },
        bullets: [
          {
            ko: "요청마다 처음부터 다시 판단 — 같은 판단을 하루에도 여러 번 반복 (AS-IS에는 기준도 기록도 없음)",
            en: "Every request judged from zero — the same call repeated several times a day (no criteria, no record in the AS-IS)",
            zh: "每个请求都从零开始判断——同一种判断一天重复好几次（AS-IS 既无标准也无记录）",
          },
          {
            ko: "광고 제안서 한 건의 초안을 쓰는 데 1시간, 그 뒤 고치는 데 또 한 번",
            en: "Drafting one ad proposal took an hour, then another pass to fix it",
            zh: "写一份广告提案初稿要 1 小时，之后还要再改一遍",
          },
          {
            ko: "AI에 그냥 맡기면 늘 같은 곳에서 틀림 — 판단 기준을 프롬프트·규칙으로 넘긴 적이 없었기 때문",
            en: "Left to AI as-is, it failed at the same spots — the criteria had never been handed over as prompts or rules",
            zh: "直接交给 AI，总在同样的地方出错——因为从没把判断标准以提示词与规则的形式交给它",
          },
          {
            ko: "판단이 한 사람의 기억에 묶여 있어 동료가 대신하기 어려움 — 제 문제가 곧 팀의 협업 병목이 됨",
            en: "The judgment lived in one person's memory, so no teammate could take over — my problem had become the team's collaboration bottleneck",
            zh: "判断绑在一个人的记忆里，同事很难接手——我的问题变成了团队的协作瓶颈",
          },
        ],
      },
      rules: {
        lead: {
          ko: "들어오는 요청을 8가지 업무로 나누고, 판단을 'AI가 할 일 · 규칙으로 정할 일 · 사람이 확인할 일' 세 가지로 나눴습니다. AS-IS를 단계별로 뜯어 다시 그린 TO-BE입니다.",
          en: "I sorted incoming requests into eight kinds of work, then split judgment three ways: what AI does, what a rule decides, and what a person checks. It is the TO-BE I redrew after taking the AS-IS apart step by step.",
          zh: "我把收到的请求分成 8 类工作，再把判断分成三部分：AI 做的、规则决定的、由人确认的。这是拆解 AS-IS 后重画出的 TO-BE。",
        },
        flow: [
          {
            label: { ko: "요청 수신", en: "Intake", zh: "请求进入" },
            sub: { ko: "메신저 · 메일 · 시트", en: "Messenger, mail, sheets", zh: "消息 · 邮件 · 表格" },
          },
          {
            label: { ko: "8가지 업무로 분류", en: "Sort into 8 kinds of work", zh: "分成 8 类工作" },
            sub: { ko: "제안서 · 대금 정산 · 섭외 · 리포트", en: "Proposal, payments, casting, report", zh: "提案 · 款项结算 · 邀约 · 报告" },
          },
          {
            label: { ko: "운영 기준 12개", en: "12 operating rules", zh: "12 条运营规则" },
            sub: { ko: "문서·프롬프트·코드로 고정", en: "Fixed in docs, prompts and code", zh: "固化到文档 · 提示词 · 代码" },
          },
          {
            label: { ko: "자동 실행 5개", en: "5 automatic runs", zh: "5 个自动任务" },
            sub: { ko: "정해진 시간마다 반복", en: "Repeat at fixed times", zh: "按固定时间反复执行" },
          },
          {
            label: { ko: "AI 에이전트 판정 · 초안", en: "AI agent judges & drafts", zh: "AI 代理判定 · 起草" },
            sub: { ko: "LLM 연계", en: "Wired to the LLM", zh: "对接 LLM" },
          },
          {
            label: { ko: "사람 최종 승인", en: "Final human approval", zh: "人工最终审批" },
            sub: { ko: "돈 · 외부 발송은 꼭", en: "Always for money and outbound", zh: "金额 · 对外发送必经" },
            gate: true,
          },
          {
            label: { ko: "발송 · 기록", en: "Send & log", zh: "发送 · 记录" },
            sub: { ko: "기록이 자동으로 쌓임", en: "Records pile up automatically", zh: "记录自动累积" },
          },
        ],
        notes: [
          { ko: "업무를 8가지로 나눔", en: "Work split into 8 kinds", zh: "工作分成 8 类" },
          { ko: "판단 기준 12개를 운영 기준으로 문서화", en: "12 criteria documented as operating rules", zh: "12 条判断标准写成运营规则" },
          { ko: "5개 작업을 정해진 시간에 자동 실행", en: "5 tasks run automatically on schedule", zh: "5 个任务按时自动执行" },
          {
            ko: "AI 판단 / 고정 규칙 / 사람 확인 세 단계로 분리",
            en: "Split into AI judgment / fixed rules / human check",
            zh: "分成 AI 判断 / 固定规则 / 人工确认三步",
          },
          {
            ko: "돈이 걸린 일은 사람이 승인하는 게이트를 제안·설계",
            en: "Proposed and designed an approval gate for anything involving money",
            zh: "提出并设计：涉及金额的事必须经人工审批关卡",
          },
          { ko: "제가 직접 쓴 최종본과 4번 비교 검증", en: "Compared against my own final drafts 4 times", zh: "与我亲手写的最终版对比验证 4 次" },
        ],
      },
      impact: {
        lead: {
          ko: "세 번째로 만든 초안은 고치지 않고 그대로 실제 광고주에게 보냈습니다. 지금은 운영 기준이 문서로 남아 팀 공용 표준이 되었고, 다른 담당자도 같은 기준으로 일합니다.",
          en: "The third draft went to a real advertiser as-is, with no edits. The operating rules are now written down as a team-wide standard, and other owners work from the same criteria.",
          zh: "第三版初稿未经修改，直接发给了真实广告主。运营标准现已写成文档，成为团队共用标准，其他负责人也按同一套标准工作。",
        },
        metrics: [
          {
            before: { ko: "1시간", en: "1 hr", zh: "1 小时" },
            after: { ko: "3~5분", en: "3–5 min", zh: "3~5 分钟" },
            label: { ko: "제안서 초안 1건", en: "One proposal draft", zh: "一份提案初稿" },
          },
          {
            before: { ko: "제 업무", en: "My own work", zh: "我的工作" },
            after: { ko: "팀 공용 표준", en: "Team-wide standard", zh: "团队共用标准" },
            label: { ko: "누가 쓰는가", en: "Who uses it", zh: "谁在用" },
          },
          {
            before: { ko: "한 사람의 기억", en: "One person's memory", zh: "一个人的记忆" },
            after: { ko: "문서화된 운영 기준", en: "Documented operating rules", zh: "写进文档的运营标准" },
            label: { ko: "판단 기준은 어디에", en: "Where the criteria live", zh: "判断标准在哪里" },
          },
        ],
        note: {
          ko: "아직 도입 초기라, 사람이 만든 결과와 계속 비교하며 얼마나 정확한지 확인하고 있습니다.",
          en: "It's still early, so I keep comparing it with human-made results to see how accurate it is.",
          zh: "目前仍处于导入初期，正持续与人工结果对比，确认它有多准确。",
        },
      },
    },

    {
      id: "news-video",
      no: "02",
      tag: { ko: "워크플로우 구축 · 운영 기준 문서화 · 인수인계", en: "Workflow built · operating standards documented · handed over", zh: "搭建工作流 · 文档化运营标准 · 交接" },
      title: {
        ko: "서울경제신문 AI 뉴스 영상 제작 자동화 & 5명에게 인수인계",
        en: "Automating AI news-video production for Seoul Economic Daily & handing it over to five people",
        zh: "首尔经济新闻 AI 新闻视频制作自动化与交接给 5 人",
      },
      org: { ko: "올투원 · 프리랜서", en: "Alltoone · Freelance", zh: "Alltoone · 自由职业" },
      role: {
        ko: "제작 방식 구축 · 운영 인수인계",
        en: "Built the production method · handed over operations",
        zh: "搭建制作方法 · 移交运营",
      },
      period: { ko: "2024.06 – 2024.11", en: "Jun 2024 – Nov 2024", zh: "2024.06 – 2024.11" },
      oneLiner: {
        ko: "기사 한 건을 영상으로 만드는 과정을 AS-IS에서 단계별로 다시 나눠 템플릿과 체크리스트로 문서화하고, 하루 1편이던 제작을 30분에 1편으로 바꿔 그 운영 기준을 5명이 이어받게 했습니다.",
        en: "I re-cut the article-to-video process step by step from the AS-IS and documented it as templates and checklists — production went from one video a day to one every 30 minutes, and five people took the operating standard over.",
        zh: "我把“一篇报道做成一条视频”的过程从 AS-IS 重新拆成步骤，整理成模板与清单：一天一条变成 30 分钟一条，这套运营标准由 5 个人接手。",
      },
      problem: {
        lead: {
          ko: "매번 사람이 처음부터 만들어야 하는 방식으로는 양을 늘릴 수 없었습니다.",
          en: "As long as a person had to build every video from scratch, volume couldn't grow.",
          zh: "只要每条视频都得由人从头制作，产量就无法提升。",
        },
        bullets: [
          {
            ko: "기사 1건 → 영상 1건에 하루 — 하루 한 건이 한계",
            en: "One article to one video took a day — one a day was the ceiling",
            zh: "一篇报道 → 一条视频要一整天——一天一条就是上限",
          },
          {
            ko: "일주일에 1편 정도만 올라가고, 월 조회수는 1~3만에 머묾",
            en: "Only about one video a week went up, and monthly views stayed at 10–30K",
            zh: "一周只能发一条左右，月播放量停在 1~3 万",
          },
          {
            ko: "제작자가 바뀌면 품질과 소요 시간이 매번 달라짐",
            en: "Change the producer and both quality and duration changed",
            zh: "换个人做，质量和耗时每次都不同",
          },
          {
            ko: "AI 이미지·음성을 쓰면서 저작권 기준이 없었음",
            en: "AI images and voice were in use with no rights guideline",
            zh: "用了 AI 图像和语音，却没有版权标准",
          },
        ],
      },
      rules: {
        lead: {
          ko: "기사를 받아 영상을 올리기까지의 단계를 나누고, 단계마다 무엇을 만들어야 하고 어떻게 되면 통과인지 운영 기준으로 문서화했습니다. 사람마다 다르던 AS-IS를 누구나 같은 결과를 내는 TO-BE로 바꾼 것입니다.",
          en: "I split the path from receiving an article to uploading the video into steps and documented, step by step, what each must produce and what counts as passing. The AS-IS depended on who was doing it; the TO-BE gives anyone the same result.",
          zh: "我把从拿到报道到上传视频的过程拆成步骤，并把每一步要产出什么、怎样才算通过，写成运营标准。AS-IS 因人而异，TO-BE 让任何人都得到同样的结果。",
        },
        flow: [
          {
            label: { ko: "기사 고르기", en: "Pick the article", zh: "挑选报道" },
            sub: { ko: "주제 · 사실 확인", en: "Topic, facts", zh: "选题 · 事实核对" },
          },
          {
            label: { ko: "대본", en: "Script", zh: "脚本" },
            sub: { ko: "AI 지시문(프롬프트) 양식", en: "AI instruction (prompt) template", zh: "AI 指令（提示词）模板" },
          },
          {
            label: { ko: "장면 구성", en: "Scene plan", zh: "分镜" },
            sub: { ko: "이미지 · 자막 규칙", en: "Image, caption rules", zh: "图像 · 字幕规则" },
          },
          {
            label: { ko: "음성 · 영상 합치기", en: "Voice & video assembly", zh: "配音 · 合成视频" },
            sub: { ko: "AI 음성 · 편집", en: "AI voice, editing", zh: "AI 配音 · 剪辑" },
          },
          {
            label: { ko: "저작권 확인", en: "Rights check", zh: "版权确认" },
            sub: { ko: "사용 기준표", en: "Usage standards", zh: "使用标准表" },
            gate: true,
          },
          {
            label: { ko: "최종 확인 · 업로드", en: "Final check & upload", zh: "最终确认 · 上传" },
            sub: { ko: "체크리스트", en: "Checklist", zh: "清单" },
          },
          {
            label: { ko: "5명에게 인수인계", en: "Handover to 5 people", zh: "交接给 5 人" },
            sub: { ko: "교육 · 문서", en: "Training, docs", zh: "培训 · 文档" },
          },
        ],
        notes: [
          { ko: "AI 지시문 · 장면 양식", en: "AI instruction and scene templates", zh: "AI 指令 · 分镜模板" },
          { ko: "저작권 기준 마련", en: "Set copyright standards", zh: "制定版权标准" },
          { ko: "최종 확인 체크리스트", en: "Final-check checklist", zh: "最终确认清单" },
          { ko: "5명 교육 · 인수인계 문서", en: "Training and handover docs for 5", zh: "5 人培训与交接文档" },
        ],
      },
      impact: {
        lead: {
          ko: "제가 손을 떼도 같은 품질이 나오도록 운영 기준을 문서로 남기고 팀에 넘겼습니다. 한 사람의 작업이 팀의 표준으로 바뀐 지점입니다.",
          en: "I left the operating standard in writing and handed it to the team, so the output held without me. What had been one person's workflow became the team's standard.",
          zh: "把运营标准留在文档里交给团队，我抽手之后产出质量依然稳定。一个人的工作方式由此变成团队标准。",
        },
        metrics: [
          {
            before: { ko: "하루 1편", en: "1 per day", zh: "一天一条" },
            after: { ko: "30분에 1편", en: "1 per 30 min", zh: "30 分钟一条" },
            label: { ko: "제작 시간", en: "Production time", zh: "制作时间" },
          },
          {
            before: { ko: "주 1편", en: "1 per week", zh: "一周一条" },
            after: { ko: "하루 5편", en: "5 per day", zh: "一天五条" },
            label: { ko: "올리는 양", en: "Videos published", zh: "发布量" },
          },
          {
            before: { ko: "월 1~3만", en: "10–30K", zh: "月 1~3 万" },
            after: { ko: "월 10만", en: "100K", zh: "月 10 万" },
            label: { ko: "월 조회수", en: "Monthly views", zh: "月播放量" },
          },
        ],
        note: {
          ko: "인수인계 뒤에도 같은 기준으로 운영되도록 저작권 기준과 체크리스트를 운영 문서로 함께 넘겼습니다.",
          en: "The copyright standards and checklist went across as operating documents so operations kept the same standard.",
          zh: "交接时一并交付了版权标准与检查清单，作为运营文档让流程维持同一标准。",
        },
      },
    },
  ],

  /* ---------- LIVE DEMOS — 100% 가상 데이터 ---------- */
  demos: {
    fictitious: { ko: "가상 데이터", en: "Fictional data", zh: "虚构数据" },
    focusLabel: { ko: "여기를 보세요", en: "Look here", zh: "看这里" },
    hint: {
      ko: "버튼을 눌러 직접 확인하세요. 서버 호출·저장·실제 발송은 없습니다.",
      en: "Click through it yourself. No server calls, no storage, nothing actually sent.",
      zh: "点一下自己试试。不调用服务器、不保存、也不会真正发送。",
    },

    simulator: {
      tab: { ko: "기준 확인 · 제안서", en: "Rule check · proposal", zh: "规则判定 · 提案" },
      focus: {
        ko: "금액이 2,000만원을 넘자 AI가 초안을 확정하지 않고 '멈춤'을 띄웁니다. 사람이 확인해야 다음 단계로 갑니다.",
        en: "Once the amount passes ₩20M, the AI stops instead of finalizing the draft. It moves on only after a person checks it.",
        zh: "金额一超过 2,000 万韩元，AI 就不再定稿，而是显示“暂停”。只有人工确认后才进入下一步。",
      },
      title: {
        ko: "광고 문의 → 12가지 운영 기준 자동 검증 → 제안서 초안",
        en: "Ad inquiry → 12 operating rules checked → proposal draft",
        zh: "广告咨询 → 12 项运营规则自动校验 → 提案初稿",
      },
      lead: {
        ko: "광고주가 보낸 문의에서 조건을 뽑아 12가지 기준으로 확인하고, 제안서 초안까지 만듭니다. 큰 금액이 걸리면 자동으로 진행하지 않고 사람에게 넘깁니다. 아래 예시 3개를 눌러 보세요.",
        en: "It pulls the terms out of an advertiser's inquiry, checks them against 12 criteria, and writes a proposal draft. When a large amount is involved it doesn't proceed on its own — it hands off to a person. Try the three examples below.",
        zh: "从广告主发来的咨询中抽出条件，用 12 项标准检查，再写出提案初稿。涉及大额时不会自动推进，而是交给人。点一下下面的 3 个示例试试。",
      },
      presetsLabel: { ko: "예시 문의", en: "Example inquiries", zh: "示例咨询" },
      requestHead: { ko: "광고주가 보낸 문의", en: "Inquiry from the advertiser", zh: "广告主发来的咨询" },
      extractHead: { ko: "01 · 문의에서 뽑은 조건", en: "01 · Terms found in the inquiry", zh: "01 · 从咨询中抽出的条件" },
      rulesHead: { ko: "02 · 12가지 기준 확인", en: "02 · 12 criteria checks", zh: "02 · 12 项标准检查" },
      draftHead: { ko: "03 · 제안서 초안", en: "03 · Proposal draft", zh: "03 · 提案初稿" },
      fields: [
        { label: { ko: "카테고리", en: "Category", zh: "品类" } },
        { label: { ko: "예산", en: "Budget", zh: "预算" } },
        { label: { ko: "타깃", en: "Target", zh: "目标受众" } },
        { label: { ko: "일정", en: "Schedule", zh: "排期" } },
      ],
      status: {
        pass: { ko: "통과", en: "Pass", zh: "通过" },
        warn: { ko: "경고", en: "Warn", zh: "警告" },
        halt: { ko: "멈춤", en: "Stop", zh: "暂停" },
      },
      draftStatus: {
        ok: { ko: "검토 후 발송", en: "Ready to review", zh: "待审后发送" },
        fix: { ko: "수정 필요", en: "Needs fixing", zh: "需要修改" },
        hold: { ko: "멈춤 · 사람 확인 필요", en: "Stopped · needs a human check", zh: "暂停 · 需人工确认" },
      },
      gateNote: {
        ko: "금액과 대금 지급 조건은 AI가 자동으로 확정하지 않습니다. 사람이 확인하고 승인해야만 다음 단계로 넘어갑니다.",
        en: "AI never finalizes amounts or payment terms on its own. They move to the next step only after a person checks and approves them.",
        zh: "金额和付款条件，AI 从不自动定案。只有人确认并批准后才进入下一步。",
      },
      rules: [
        { id: "R01", name: { ko: "카테고리 적합성", en: "Category fit", zh: "品类匹配" } },
        { id: "R02", name: { ko: "예산 범위", en: "Budget range", zh: "预算范围" } },
        { id: "R03", name: { ko: "최소 금액", en: "Minimum amount", zh: "最低金额" } },
        { id: "R04", name: { ko: "타깃 시청자", en: "Target viewers", zh: "目标观众" } },
        { id: "R05", name: { ko: "경쟁 브랜드 겹침", en: "Competing brand overlap", zh: "竞品重叠" } },
        { id: "R06", name: { ko: "콘텐츠 포맷", en: "Content format", zh: "内容形式" } },
        { id: "R07", name: { ko: "준비 기간", en: "Prep time", zh: "准备时间" } },
        { id: "R08", name: { ko: "영상 재사용 기간", en: "Video reuse period", zh: "视频再利用期限" } },
        { id: "R09", name: { ko: "광고 표시", en: "Ad disclosure", zh: "广告标注" } },
        { id: "R10", name: { ko: "대금 지급 조건", en: "Payment terms", zh: "付款条件" } },
        { id: "R11", name: { ko: "초상권·동의", en: "Consent", zh: "肖像权与同意" } },
        { id: "R12", name: { ko: "고액 승인", en: "Large-amount approval", zh: "大额审批" } },
      ],
      presets: [
        {
          name: { ko: "정상 매칭 건", en: "Clean match", zh: "正常匹配" },
          hint: { ko: "12개 통과 · 초안 완성", en: "12 pass · draft ready", zh: "12 条通过 · 初稿完成" },
          request: {
            ko: "“안녕하세요! Dalmuri Seoul에서 신제품 세럼 런칭 캠페인 문의드려요. 뷰티 크리에이터 3팀, 4주 캠페인, 예산 1,800만원, 20~30대 여성 타깃이고 3월 2일 주에 첫 업로드 부탁드립니다. 가이드는 다음 주에 공유드릴게요!”",
            en: "“Hi! We're planning a launch campaign for a new serum at Dalmuri Seoul. Three beauty creators, four weeks, budget ₩18M, targeting women in their 20s–30s, with a first upload in the week of March 2. We'll share the guide next week!”",
            zh: "“您好！Dalmuri Seoul 想咨询新品精华的上市推广。三位美妆创作者、为期四周、预算 1,800 万韩元、目标 20~30 岁女性，希望 3 月 2 日那周首发。指南我们下周给到！”",
          },
          extracted: [
            { ko: "뷰티 · 스킨케어", en: "Beauty · Skincare", zh: "美妆 · 护肤" },
            { ko: "1,800만원", en: "₩18,000,000", zh: "1,800 万韩元" },
            { ko: "20~30대 여성", en: "Women 20s–30s", zh: "20~30 岁女性" },
            { ko: "3.2 – 3.29 · 4주", en: "Mar 2 – Mar 29 · 4 weeks", zh: "3.2 – 3.29 · 4 周" },
          ],
          warnFields: [],
          rules: ["pass", "pass", "pass", "pass", "pass", "pass", "pass", "pass", "pass", "pass", "pass", "pass"],
          notes: [null, null, null, null, null, null, null, null, null, null, null, null],
          draft: {
            status: "ok",
            title: { ko: "Dalmuri Seoul 세럼 런칭 캠페인 제안서 v1", en: "Dalmuri Seoul serum launch proposal v1", zh: "Dalmuri Seoul 精华上市提案 v1" },
            lines: [
              { k: { ko: "기간", en: "Period", zh: "周期" }, v: { ko: "3.2 – 3.29 · 4주", en: "Mar 2 – Mar 29 · 4 weeks", zh: "3.2 – 3.29 · 4 周" } },
              { k: { ko: "크리에이터", en: "Creators", zh: "创作者" }, v: { ko: "서하윤 · 민지아 · 루나킴", en: "Seo Hayun · Min Jia · Luna Kim", zh: "徐河允 · 闵智雅 · Luna Kim" } },
              { k: { ko: "예산 배분", en: "Budget split", zh: "预算分配" }, v: { ko: "1,800만원 (크리에이터 1,500 / 제작 200 / 운영 100)", en: "₩18M (creators 15M / production 2M / ops 1M)", zh: "1,800 万（创作者 1,500 / 制作 200 / 运营 100）" } },
              { k: { ko: "만들 콘텐츠", en: "What to create", zh: "要制作的内容" }, v: { ko: "짧은 영상(릴스) 3편 · 게시물 1편 (1인당)", en: "3 short videos (Reels) + 1 post per creator", zh: "每人 3 条短视频（Reels）+ 1 条帖子" } },
              { k: { ko: "추가 조건", en: "Extra terms", zh: "附加条件" }, v: { ko: "영상 재사용 3개월 · 대금은 다음 달 15일 지급", en: "3-month video reuse · paid on the 15th of the next month", zh: "视频再利用 3 个月 · 次月 15 日付款" } },
            ],
          },
        },
        {
          name: { ko: "예산·카테고리 불일치", en: "Budget & category mismatch", zh: "预算与品类不匹配" },
          hint: { ko: "경고 4건 · 수정 필요", en: "4 warnings · needs fixing", zh: "4 条警告 · 需修改" },
          request: {
            ko: "“Bamkkot Living인데요, 홈프래그런스 신제품을 홍보하려고 합니다. 뷰티 인플루언서 5명 섭외 가능할까요? 예산은 400만원이고 다음 주까지 올라가야 합니다. 영상은 저희 채널에도 계속 쓸 수 있게 해주세요.”",
            en: "“This is Bamkkot Living — we'd like to promote a new home fragrance. Can you cast five beauty influencers? Budget is ₩4M and it has to go live next week. We'd also like to keep using the videos on our channels indefinitely.”",
            zh: "“我们是 Bamkkot Living，想推广一款新的家居香氛。能找五位美妆博主吗？预算 400 万韩元，下周就要上线。视频也请允许我们在自家渠道长期使用。”",
          },
          extracted: [
            { ko: "리빙 · 홈프래그런스", en: "Living · Home fragrance", zh: "家居 · 香氛" },
            { ko: "400만원", en: "₩4,000,000", zh: "400 万韩元" },
            { ko: "30~40대 주부", en: "Homemakers 30s–40s", zh: "30~40 岁主妇" },
            { ko: "1주 (요청)", en: "1 week (as requested)", zh: "1 周（客户要求）" },
          ],
          warnFields: [0, 1, 3],
          rules: ["warn", "warn", "pass", "pass", "pass", "pass", "warn", "warn", "pass", "pass", "pass", "pass"],
          notes: [
            { ko: "생활용품 브랜드에 뷰티 크리에이터 요청: 맞는 팀은 1팀뿐", en: "A home-goods brand asking for beauty creators: only one team fits", zh: "生活用品品牌却要美妆创作者：只有 1 个团队合适" },
            { ko: "요청 400만원 / 최소 900만원", en: "Requested ₩4M vs. ₩9M minimum", zh: "需求 400 万 / 最低 900 万" },
            null,
            null,
            null,
            null,
            { ko: "요청 기간 1주 < 필요한 준비 기간 2주", en: "1-week request < 2 weeks of prep needed", zh: "要求 1 周 < 所需准备时间 2 周" },
            { ko: "영상 무기한 재사용 요청 → 12개월로 제안", en: "Asks for unlimited video reuse → propose 12 months", zh: "要求视频无限期再利用 → 建议 12 个月" },
            null,
            null,
            null,
            null,
          ],
          draft: {
            status: "fix",
            title: { ko: "Bamkkot Living 홈프래그런스 캠페인 제안서 v0 (수정 필요)", en: "Bamkkot Living home fragrance proposal v0 (needs fixing)", zh: "Bamkkot Living 家居香氛提案 v0（需修改）" },
            lines: [
              { k: { ko: "기간", en: "Period", zh: "周期" }, v: { ko: "요청 1주 → 제안 2주", en: "Requested 1 week → propose 2 weeks", zh: "要求 1 周 → 建议 2 周" } },
              { k: { ko: "크리에이터", en: "Creators", zh: "创作者" }, v: { ko: "민지아 · 하리안 · 유하린 (교집합 1팀)", en: "Min Jia · Han Harian · Yoo Harin (one overlap)", zh: "闵智雅 · 河莉安 · 柳河潾（重合 1 位）" } },
              { k: { ko: "예산", en: "Budget", zh: "预算" }, v: { ko: "요청 400만원 → 최소 900만원으로 다시 제안", en: "Asked ₩4M → re-propose at the ₩9M minimum", zh: "需求 400 万 → 按最低 900 万重新提案" } },
              { k: { ko: "추가 조건", en: "Extra terms", zh: "附加条件" }, v: { ko: "무기한 재사용 → 12개월로 조정 제안", en: "Unlimited reuse → propose adjusting to 12 months", zh: "无限期再利用 → 建议调整为 12 个月" } },
              { k: { ko: "보완 항목", en: "To fix", zh: "待补充" }, v: { ko: "카테고리 · 예산 · 납기 · 활용 범위 4건", en: "Category, budget, deadline, usage — four items", zh: "品类 · 预算 · 交期 · 使用范围 四项" } },
            ],
          },
        },
        {
          name: { ko: "고액 승인", en: "Large-amount approval", zh: "大额审批" },
          hint: { ko: "멈춤 2건 · 사람 확인 필요", en: "2 stops · needs a human check", zh: "2 项暂停 · 需人工确认" },
          request: {
            ko: "“Yeoul Color 색조 라인 런칭인데 크리에이터 4명, 6주로 진행하고 싶어요. 예산은 2,400만원이고 선정산 30% + 성과형(CPA)으로 정산하겠습니다. 계약금은 다음 주까지 확정 부탁드려요.”",
            en: "“Yeoul Color is launching a color makeup line: four creators over six weeks. Budget is ₩24M, settled as 30% advance plus performance (CPA). Please confirm the contract amount by next week.”",
            zh: "“Yeoul Color 要上市彩妆线，想找四位创作者、为期六周。预算 2,400 万韩元，按 30% 预付 + 效果（CPA）结算。合同金额请在下周前确认。”",
          },
          extracted: [
            { ko: "뷰티 · 색조", en: "Beauty · Color makeup", zh: "美妆 · 彩妆" },
            { ko: "2,400만원 · 성과 연동", en: "₩24,000,000 · tied to performance", zh: "2,400 万韩元 · 与效果挂钩" },
            { ko: "20대 여성", en: "Women in their 20s", zh: "20 多岁女性" },
            { ko: "6주", en: "6 weeks", zh: "6 周" },
          ],
          warnFields: [1],
          rules: ["pass", "pass", "pass", "pass", "pass", "pass", "pass", "warn", "pass", "halt", "pass", "halt"],
          notes: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            { ko: "영상 재사용 6개월 요청 → 12개월로 협의", en: "Asked for 6 months of video reuse → negotiating 12", zh: "要求视频再利用 6 个月 → 协商 12 个月" },
            null,
            { ko: "선금 30% + 성과에 따른 지급(CPA) — 자동 확정 불가", en: "30% upfront + pay by performance (CPA) — can't be finalized automatically", zh: "预付 30% + 按效果付款（CPA）— 不能自动定案" },
            null,
            { ko: "2,400만원 ≥ 사람 확인 기준 2,000만원", en: "₩24M ≥ ₩20M human-check threshold", zh: "2,400 万 ≥ 人工确认标准 2,000 万" },
          ],
          draft: {
            status: "hold",
            title: { ko: "Yeoul Color 색조 라인 캠페인 제안서 v1 (보류)", en: "Yeoul Color color line proposal v1 (on hold)", zh: "Yeoul Color 彩妆线提案 v1（暂缓）" },
            lines: [
              { k: { ko: "기간", en: "Period", zh: "周期" }, v: { ko: "6주", en: "6 weeks", zh: "6 周" } },
              { k: { ko: "크리에이터", en: "Creators", zh: "创作者" }, v: { ko: "루나킴 · 이소민 · 김단아 · 서하윤", en: "Luna Kim · Lee Somin · Kim Dana · Seo Hayun", zh: "Luna Kim · 李昭旻 · 金丹雅 · 徐河允" } },
              { k: { ko: "예산", en: "Budget", zh: "预算" }, v: { ko: "2,400만원 · 선금 30% + 성과 연동", en: "₩24M · 30% upfront + performance-based", zh: "2,400 万 · 预付 30% + 与效果挂钩" } },
              { k: { ko: "추가 조건", en: "Extra terms", zh: "附加条件" }, v: { ko: "영상 재사용 12개월 · 성과 측정 링크 4종", en: "12-month video reuse · four tracking links", zh: "视频再利用 12 个月 · 4 个效果追踪链接" } },
              { k: { ko: "승인 필요", en: "Needs approval", zh: "需审批" }, v: { ko: "2,000만원 초과 금액 · 성과 연동 지급", en: "Amount over ₩20M · performance-based payment", zh: "超过 2,000 万的金额 · 按效果付款" } },
            ],
          },
        },
      ],
    },

    dashboard: {
      tab: { ko: "운영 대시보드", en: "Ops dashboard", zh: "运营看板" },
      focus: {
        ko: "'승인 대기'인 건은 AI가 보내지 않고 사람에게 넘깁니다. 상단 숫자는 목록에서 자동으로 다시 셉니다.",
        en: "Anything 'awaiting approval' is handed to a person instead of being sent. The counts at the top are recalculated from the list.",
        zh: "处于“待审批”的活动，AI 不会发送，而是交给人。顶部数字会根据列表自动重新统计。",
      },
      title: {
        ko: "광고 건별 실시간 운영 대시보드",
        en: "Per-campaign real-time operations dashboard",
        zh: "各广告实时运营看板",
      },
      lead: {
        ko: "광고 7건이 지금 어느 단계인지 한 화면에서 봅니다. 단계 버튼으로 걸러 보고, 건을 누르면 요약과 다음 할 일이 열립니다. 상단 숫자는 목록이 바뀌면 바로 다시 계산됩니다.",
        en: "See where each of the seven campaigns stands on one screen. Filter with the stage buttons; click a campaign to open its summary and next step. The counts at the top recalculate as the list changes.",
        zh: "一屏看清 7 个广告各自走到哪一步。用阶段按钮筛选，点一个广告就能打开摘要和下一步。列表一变，顶部数字立刻重算。",
      },
      filterAll: { ko: "전체", en: "All", zh: "全部" },
      kpiTotal: { ko: "전체 캠페인", en: "Campaigns", zh: "全部活动" },
      kpiApprove: { ko: "사람 확인 대기", en: "Awaiting human check", zh: "待人工确认" },
      kpiSoon: { ko: "3일 안에 마감", en: "Due in 3 days", zh: "3 天内截止" },
      listHead: { ko: "캠페인", en: "Campaigns", zh: "活动" },
      selectHint: {
        ko: "건을 누르면 요약과 다음 할 일이 여기에 열립니다.",
        en: "Click a campaign to open its summary and next step here.",
        zh: "点一个广告，摘要和下一步会显示在这里。",
      },
      nextLabel: { ko: "다음 할 일", en: "Next step", zh: "下一步" },
      historyLabel: { ko: "최근 기록", en: "Recent history", zh: "最近记录" },
      amountLabel: { ko: "금액", en: "Amount", zh: "金额" },
      dueLabel: { ko: "마감", en: "Due", zh: "截止" },
      creatorLabel: { ko: "크리에이터", en: "Creator", zh: "创作者" },
      dueNone: { ko: "종료", en: "Closed", zh: "已结束" },
      statuses: [
        { id: "new", tone: "info", label: { ko: "신규 문의", en: "New inquiry", zh: "新咨询" } },
        { id: "rate", tone: "warn", label: { ko: "금액 협의", en: "Amount talks", zh: "金额协商" } },
        { id: "fit", tone: "info", label: { ko: "맞는지 검토", en: "Fit check", zh: "确认是否合适" } },
        { id: "approve", tone: "halt", label: { ko: "승인 대기", en: "Awaiting approval", zh: "待审批" } },
        { id: "contract", tone: "pass", label: { ko: "계약 진행", en: "Contracting", zh: "签约中" } },
        { id: "settle", tone: "warn", label: { ko: "대금 지급 대기", en: "Awaiting payment", zh: "待付款" } },
        { id: "done", tone: "mute", label: { ko: "완료", en: "Closed", zh: "已完成" } },
      ],
      campaigns: [
        {
          id: "c1", brand: "Dalmuri Seoul", creator: { ko: "서하윤", en: "Seo Hayun", zh: "徐河允" },
          status: "new", dday: 1,
          amount: { ko: "1,800만원", en: "₩18,000,000", zh: "1,800 万韩元" },
          summary: { ko: "세럼 런칭 · 뷰티 3팀 · 4주", en: "Serum launch · 3 beauty creators · 4 weeks", zh: "精华上市 · 3 位美妆创作者 · 4 周" },
          next: { ko: "문의에서 조건 뽑기 → 초안 1차 검토", en: "Pull terms from the inquiry → first review of the draft", zh: "从咨询中抽取条件 → 初稿第一次审阅" },
          history: [
            { ko: "11.21 요청 메일 수신", en: "11.21 request received", zh: "11.21 收到需求邮件" },
            { ko: "11.21 자동 확인: 12개 통과", en: "11.21 auto-check: 12 pass", zh: "11.21 自动检查：12 项通过" },
            { ko: "11.21 초안 v1 생성", en: "11.21 draft v1 generated", zh: "11.21 生成初稿 v1" },
          ],
        },
        {
          id: "c2", brand: "Bamkkot Living", creator: { ko: "민지아", en: "Min Jia", zh: "闵智雅" },
          status: "rate", dday: 2,
          amount: { ko: "400만원", en: "₩4,000,000", zh: "400 万韩元" },
          summary: { ko: "방향제 · 예산 부족 · 경고 4건", en: "Air freshener · budget too low · 4 warnings", zh: "香氛 · 预算不足 · 4 条警告" },
          next: { ko: "최소 금액 기준으로 다시 제안해 회신", en: "Reply with a new offer based on the minimum amount", zh: "按最低金额重新提案并回复" },
          history: [
            { ko: "11.20 요청 수신", en: "11.20 request received", zh: "11.20 收到需求" },
            { ko: "11.20 예산 부족 등 경고 4건", en: "11.20 four warnings, incl. budget too low", zh: "11.20 预算不足等 4 条警告" },
            { ko: "11.21 다시 제안할 초안 작성 중", en: "11.21 writing the re-proposal draft", zh: "11.21 正在撰写重新提案的初稿" },
          ],
        },
        {
          id: "c3", brand: "Yeoul Color", creator: { ko: "루나킴", en: "Luna Kim", zh: "Luna Kim" },
          status: "fit", dday: 3,
          amount: { ko: "2,400만원", en: "₩24,000,000", zh: "2,400 万韩元" },
          summary: { ko: "색조 화장품 · 4팀 · 6주 · 성과 연동", en: "Color makeup · 4 creators · 6 weeks · performance-based", zh: "彩妆 · 4 位创作者 · 6 周 · 与效果挂钩" },
          next: { ko: "최근 90일 안에 경쟁 브랜드 광고를 했는지 확인", en: "Check whether they advertised a competing brand in the last 90 days", zh: "确认近 90 天内是否为竞品做过广告" },
          history: [
            { ko: "11.19 요청 수신", en: "11.19 request received", zh: "11.19 收到需求" },
            { ko: "11.19 후보 6팀 추림", en: "11.19 shortlisted 6 creators", zh: "11.19 筛出 6 位候选" },
            { ko: "11.20 경쟁 브랜드 광고 이력 확인 중", en: "11.20 checking competing-brand ad history", zh: "11.20 正在核对竞品广告记录" },
          ],
        },
        {
          id: "c4", brand: "Saeum Body", creator: { ko: "하리안", en: "Han Harian", zh: "河莉安" },
          status: "approve", dday: 1,
          amount: { ko: "950만원", en: "₩9,500,000", zh: "950 万韩元" },
          summary: { ko: "바디케어 · 2팀 · 추가 조건 1건", en: "Body care · 2 creators · 1 extra term", zh: "身体护理 · 2 位创作者 · 1 项附加条件" },
          next: { ko: "금액이 커서 사람 승인을 받은 뒤 발송", en: "Large amount — send only after human approval", zh: "金额较大 — 经人工批准后再发送" },
          history: [
            { ko: "11.18 초안 v2 확정", en: "11.18 draft v2 finalized", zh: "11.18 初稿 v2 定稿" },
            { ko: "11.19 고액이라 사람 확인으로 넘어감", en: "11.19 large amount, passed to a human check", zh: "11.19 金额较大，转为人工确认" },
            { ko: "11.20 승인자 지정", en: "11.20 approver assigned", zh: "11.20 指定审批人" },
          ],
        },
        {
          id: "c5", brand: "Munu Atelier", creator: { ko: "유하린", en: "Yoo Harin", zh: "柳河潾" },
          status: "contract", dday: 4,
          amount: { ko: "1,200만원", en: "₩12,000,000", zh: "1,200 万韩元" },
          summary: { ko: "액세서리 · 1팀 · 5주", en: "Accessories · 1 creator · 5 weeks", zh: "配饰 · 1 位创作者 · 5 周" },
          next: { ko: "영상 재사용 6개월 조건 확정", en: "Confirm the 6-month video reuse term", zh: "确认视频再利用 6 个月的条件" },
          history: [
            { ko: "11.15 조건 합의", en: "11.15 terms agreed", zh: "11.15 条件达成一致" },
            { ko: "11.17 계약서 초안 발송", en: "11.17 contract draft sent", zh: "11.17 发出合同初稿" },
            { ko: "11.20 추가 조건 1건 조정", en: "11.20 one extra term adjusted", zh: "11.20 调整 1 项附加条件" },
          ],
        },
        {
          id: "c6", brand: "Garam Lab", creator: { ko: "이소민", en: "Lee Somin", zh: "李昭旻" },
          status: "settle", dday: 6,
          amount: { ko: "780만원", en: "₩7,800,000", zh: "780 万韩元" },
          summary: { ko: "스킨케어 · 1팀 · 종료 후 대금 지급", en: "Skincare · 1 creator · paid after wrap", zh: "护肤 · 1 位创作者 · 结束后付款" },
          next: { ko: "세금계산서와 지급 내역 대조", en: "Match the tax invoice against the payment record", zh: "核对税务发票与付款明细" },
          history: [
            { ko: "11.08 캠페인 종료", en: "11.08 campaign wrapped", zh: "11.08 活动结束" },
            { ko: "11.12 결과 리포트 제출", en: "11.12 results report delivered", zh: "11.12 提交结果报告" },
            { ko: "11.20 지급 내역 받음", en: "11.20 payment record received", zh: "11.20 收到付款明细" },
          ],
        },
        {
          id: "c7", brand: "Kkotdam Atelier", creator: { ko: "김단아", en: "Kim Dana", zh: "金丹雅" },
          status: "done", dday: null,
          amount: { ko: "620만원", en: "₩6,200,000", zh: "620 万韩元" },
          summary: { ko: "플라워 · 1팀 · 3주", en: "Flowers · 1 creator · 3 weeks", zh: "花艺 · 1 位创作者 · 3 周" },
          next: { ko: "결과 보고서 보관 후 종료", en: "Archive the results report and close", zh: "归档结果报告并结束" },
          history: [
            { ko: "10.30 캠페인 종료", en: "10.30 campaign wrapped", zh: "10.30 活动结束" },
            { ko: "11.04 보고서 보관", en: "11.04 report archived", zh: "11.04 报告归档" },
            { ko: "11.04 종료 처리", en: "11.04 marked closed", zh: "11.04 关闭处理" },
          ],
        },
      ],
    },

    outreach: {
      tab: { ko: "글로벌 아웃리치", en: "Global outreach", zh: "全球外联" },
      focus: {
        ko: "같은 제안 메일을 KO · EN · ZH로 바로 바꿔 볼 수 있습니다. 진행 막대는 파트너마다 어디까지 왔는지 보여 줍니다.",
        en: "Switch the same outreach mail between KO, EN and ZH. Each progress bar shows how far that partner has come.",
        zh: "同一封合作邮件可以直接在 KO · EN · ZH 之间切换。进度条显示每个合作方走到了哪一步。",
      },
      title: {
        ko: "글로벌 파트너 아웃리치 관리판",
        en: "Global partner outreach board",
        zh: "全球合作伙伴外联看板",
      },
      lead: {
        ko: "해외 파트너 5곳에 보낸 협업 제안 메일이 각각 어디까지 왔는지 보고, 같은 메일이 한국어·영어·중국어로 어떻게 나가는지 바꿔 볼 수 있습니다. 발송과 팔로업이 손이 아니라 워크플로우로 돌아가는 구조입니다.",
        en: "See how far the partnership mail to each of five overseas partners has come, and switch the same mail between Korean, English and Chinese. Sending and follow-up run as a workflow, not by hand.",
        zh: "查看发给 5 家海外合作方的合作提案邮件各自走到哪一步，并可在韩语、英语、中文之间切换同一封邮件。发送与跟进靠工作流运转，不靠手工。",
      },
      partnerHead: { ko: "파트너별 진행 상황", en: "Progress by partner", zh: "各合作方进度" },
      templateHead: { ko: "제안 메일 미리보기", en: "Partnership mail preview", zh: "合作提案邮件预览" },
      templateNote: {
        ko: "언어를 바꾸면 같은 메일이 그 언어로 어떻게 나가는지 그대로 보입니다.",
        en: "Switch the language to see exactly how this same mail goes out.",
        zh: "切换语言，即可看到同一封邮件在该语言下的样子。",
      },
      kpiSent: { ko: "발송 완료", en: "Sent", zh: "已发送" },
      kpiReplied: { ko: "회신", en: "Replied", zh: "已回复" },
      kpiMeeting: { ko: "미팅 조율", en: "Meeting set", zh: "约会议中" },
      regionLabel: { ko: "지역", en: "Region", zh: "地区" },
      stageLabel: { ko: "단계", en: "Stage", zh: "阶段" },
      nextLabel: { ko: "다음 할 일", en: "Next step", zh: "下一步" },
      subjectLabel: { ko: "제목", en: "Subject", zh: "主题" },
      stages: [
        { id: "idle", label: { ko: "미발송", en: "Not sent", zh: "未发送" } },
        { id: "sent", label: { ko: "첫 메일 발송", en: "First mail sent", zh: "已发首封邮件" } },
        { id: "followup", label: { ko: "후속 메일 대기", en: "Waiting for follow-up mail", zh: "待发跟进邮件" } },
        { id: "replied", label: { ko: "회신 수신", en: "Reply received", zh: "已回复" } },
        { id: "meeting", label: { ko: "미팅 조율", en: "Scheduling a call", zh: "约会议" } },
      ],
      partners: [
        {
          id: "p1", name: "Northlight Creators", stage: "replied",
          region: { ko: "미국 · 북미 뷰티 40팀", en: "US · 40 beauty creators", zh: "美国 · 40 位美妆创作者" },
          next: { ko: "12월 시범 프로젝트 1건 조건 회신", en: "Reply with terms for one December trial project", zh: "回复 12 月 1 个试点项目的条件" },
        },
        {
          id: "p2", name: "Halcyon Loop Media", stage: "meeting",
          region: { ko: "영국 · 캠페인 운영 대행", en: "UK · campaign operations", zh: "英国 · 活动运营代理" },
          next: { ko: "화요일 20:00 온라인 미팅 확정", en: "Confirm Tuesday 20:00 online call", zh: "确认周二 20:00 线上会议" },
        },
        {
          id: "p3", name: "Tidewater Talents", stage: "followup",
          region: { ko: "싱가포르 · 아시아 크리에이터 다수 보유", en: "Singapore · many Asian creators on the roster", zh: "新加坡 · 拥有众多亚洲创作者" },
          next: { ko: "첫 메일 후 5일 지남 · 후속 메일 발송", en: "5 days since the first mail · send a follow-up", zh: "首封邮件已过 5 天 · 发送跟进邮件" },
        },
        {
          id: "p4", name: "Maple Quill Studio", stage: "sent",
          region: { ko: "캐나다 · 라이프스타일 제작사", en: "Canada · lifestyle studio", zh: "加拿大 · 生活方式制作公司" },
          next: { ko: "첫 메일 보냄 · 3일 뒤 후속 메일 예약", en: "First mail sent · follow-up scheduled in 3 days", zh: "已发首封邮件 · 3 天后发送跟进邮件" },
        },
        {
          id: "p5", name: "Orchid Brick Agency", stage: "idle",
          region: { ko: "대만 · 뷰티 온라인 쇼핑몰", en: "Taiwan · beauty online store", zh: "台湾 · 美妆网店" },
          next: { ko: "담당자 확인 후 중국어 메일로 발송", en: "Confirm the contact, then send the Chinese mail", zh: "确认对接人后发送中文邮件" },
        },
      ],
      templates: {
        ko: {
          subject: "[협업 제안] 크리에이터 마케팅 운영 병목을 규칙으로 정리한 사례 — 윤채은",
          body: "안녕하세요, [파트너명] 담당자님.\n\n저는 크리에이터 마케팅 운영을 4년 넘게 해 온 사람입니다. 반복되는 운영 병목을 규칙과 자동화로 정리하는 일을 주로 해 왔고, 최근에는 요청 접수부터 적합도 판정·제안서 초안까지 1시간 걸리던 일을 3~5분 검토로 줄이는 워크플로우를 만들어, 판단 기준을 문서로 남겼습니다.\n\n해외 파트너사와는 아래 두 가지부터 맞춰 보면 좋겠습니다.\n1. 크리에이터 풀과 캠페인 조건을 문서로 주고받는 기준\n2. 한국어·영어·중국어 아웃리치 템플릿과 팔로업 스케줄 운영\n\n20분 정도 통화 가능하실까요? 다음 주 화요일 오전이나 목요일 오후면 좋습니다.\n\n감사합니다.\n윤채은 드림 | chaeeunyoon@gmail.com",
        },
        en: {
          subject: "[Partnership] Turning creator-marketing bottlenecks into rules — Chaeeun Yun",
          body: "Hello [Partner] team,\n\nI have spent more than four years running creator marketing, mostly turning recurring operational bottlenecks into rules and automation. Recently I built a workflow that cuts a one-hour request-to-proposal cycle into a three-to-five minute review, with the criteria written down so the process no longer lives in one person's memory.\n\nWith an overseas partner, two things seem worth aligning first:\n1. A written standard for exchanging creator-pool and campaign conditions\n2. Outreach templates and follow-up schedules in Korean, English and Chinese\n\nWould 20 minutes on a call work? Tuesday morning or Thursday afternoon next week suits me.\n\nBest regards,\nChaeeun Yun | chaeeunyoon@gmail.com",
        },
        zh: {
          subject: "【合作提案】把创作者营销运营瓶颈写成规则的实践 — Chaeeun Yun",
          body: "您好，[合作方] 的负责同事：\n\n我在创作者营销运营一线做了四年多，主要把反复出现的运营瓶颈整理成规则和自动化。最近我搭了一套工作流，把从需求接收到适配判定、提案初稿原本要一小时的工作，压缩到 3~5 分钟的审阅，并把判断标准写进文档，不再只留在某个人的记忆里。\n\n与海外合作方，我想先对齐两件事：\n1. 用文档互换创作者资源与活动条件的标准\n2. 韩语、英语、中文三语外联模板与跟进节奏的运营\n\n能否约 20 分钟通话？下周二上午或周四下午都可以。\n\n谢谢！\nChaeeun Yun | chaeeunyoon@gmail.com",
        },
      },
    },

    evidence: {
      title: {
        ko: "실제로 측정한 숫자: 별도 테스트 기록",
        en: "Numbers actually measured: a separate test record",
        zh: "实际测量的数字：单独的测试记录",
      },
      lead: {
        ko: "위 화면은 흐름을 보여 주기 위한 것이고, 성능은 따로 측정했습니다. 아래는 가상 대화 10건으로 AI 도우미를 테스트해 실제로 나온 결과입니다.",
        en: "The screens above show the flow; performance was measured separately. Below are real results from testing the AI assistant on ten fictional conversations.",
        zh: "上面的界面用来展示流程，性能另行测量。下面是用 10 段虚构对话测试 AI 助手得到的实际结果。",
      },
      stats: [
        {
          value: "9/10",
          label: { ko: "세 가지를 모두 맞힘", en: "Got all three right", zh: "三项全部答对" },
          sub: { ko: "누구 차례인지 · 언제까지인지 · 사람 판단이 필요한지", en: "Whose turn it is · by when · whether a person must judge", zh: "轮到谁 · 截止何时 · 是否需要人来判断" },
        },
        {
          value: "3/3",
          human: true,
          label: { ko: "멈춰야 할 때 멈춤", en: "Stopped when it should", zh: "该停时停下" },
          sub: { ko: "멈추지 않아도 될 때 멈춘 경우 0/1", en: "Stopped when it didn't need to: 0/1", zh: "不必停却停了：0/1" },
        },
        {
          value: "8–10",
          label: { ko: "같은 조건으로 두 번 돌린 점수 범위", en: "Score range across two runs with the same settings", zh: "同条件运行两次的得分范围" },
          sub: { ko: "10점 만점 · 매번 조금씩 달라짐", en: "Out of 10 · varies a little each time", zh: "满分 10 · 每次略有不同" },
        },
      ],
      note: {
        ko: "한 번 측정한 결과는 대략적인 방향만 알려 줍니다. '멈출지 말지'는 여섯 번 측정에서 모두 3/3이었지만, 정확도는 매번 조금씩 달라지므로 범위로 봐야 한다고 기록해 두었습니다.",
        en: "A single measurement only points a rough direction. The 'stop or not' call was 3/3 in all six measurements, but accuracy varies a little each time, so I noted that it should be read as a range.",
        zh: "只测一次的结果只能指出大致方向。“该不该停”在六次测量中都是 3/3，但准确度每次略有不同，所以我记录下来：应当按范围来看。",
      },
    },
  },

  /* ---------- JUDGMENT LAYERS ---------- */
  layers: [
    {
      tag: "01 · MODEL",
      title: { ko: "AI 에이전트가 판단", en: "An AI agent judges", zh: "AI 代理判断" },
      desc: {
        ko: "규칙으로 다 적을 수 없는 일. 형식이 제각각인 글을 읽고, 초안을 쓰고, 애매한 것을 분류합니다. 프롬프트와 도구로 업무 흐름 안에 붙여 둡니다.",
        en: "The work rules can't fully capture: reading text in every format, writing drafts, sorting out what's ambiguous — wired into the workflow through prompts and tools.",
        zh: "规则无法完全写下的工作：读懂格式各异的文字、写初稿、给模糊内容分类——再用提示词与工具接进业务流程。",
      },
      example: {
        ko: "문의 의도 파악 · 초안 작성 · 숫자 해석",
        en: "Reading the inquiry's intent · drafting · interpreting numbers",
        zh: "理解咨询意图 · 撰写初稿 · 解读数字",
      },
    },
    {
      tag: "02 · RULES",
      title: { ko: "운영 기준으로 고정", en: "Operating rules hold it", zh: "用运营规则固化" },
      desc: {
        ko: "같은 판단을 두 번 하지 않도록 운영 기준을 문서와 코드에 박아 둡니다. 사람이 기억하지 않아도 되고, 팀 공용 표준이 되는 지점입니다.",
        en: "Judgments I should never make twice get fixed in documents and code as operating rules — no one has to remember them, and they become the team-wide standard.",
        zh: "同一种判断不做第二次，把运营标准写进文档与代码，让人不必靠记忆，也成为团队共用标准。",
      },
      example: {
        ko: "판단 기준 12개 · 운영 체크리스트 · 금지 사항 자동 검사",
        en: "12 criteria · operating checklists · automatic checks for what's off-limits",
        zh: "12 条判断标准 · 运营清单 · 禁止事项自动检查",
      },
    },
    {
      tag: "03 · HUMAN",
      title: { ko: "사람이 승인", en: "A human approves", zh: "人来审批" },
      desc: {
        ko: "돈, 사람, 회사 밖으로 나가는 일은 자동으로 확정하지 않습니다. 사람이 확인하도록 멈추는 지점을 처음부터 넣어 둡니다.",
        en: "Money, people and anything leaving the company are never finalized automatically. Stopping points for a human check are built in from the start.",
        zh: "涉及钱、人和对外的事不会自动定案。从一开始就设好由人确认的暂停点。",
      },
      example: {
        ko: "금액 확정 · 외부 발송 · 계약 종료",
        en: "Amounts · outbound sends · closures",
        zh: "确定金额 · 对外发送 · 结束合约",
      },
    },
  ],

  /* ---------- PRINCIPLES ---------- */
  principles: [
    {
      no: "P1",
      title: { ko: "판단을 세 층으로 나눈다", en: "Split judgment into three layers", zh: "把判断分成三层" },
      body: {
        ko: "AI 에이전트가 할 일, 운영 기준으로 정해 둘 일, 사람이 승인할 일을 처음부터 나눠 둡니다. AS-IS를 뜯을 때 이 셋으로 분해해야 TO-BE가 어디서 달라지는지 분명해집니다.",
        en: "What an AI agent does, what becomes an operating rule and what a person approves are separated from the start. Taking the AS-IS apart into these three is what makes the TO-BE change clear.",
        zh: "AI 代理要做的、定成运营标准的、由人审批的，从一开始就分开。拆解 AS-IS 时按这三层分解，TO-BE 到底改在哪里才清楚。",
      },
    },
    {
      no: "P2",
      title: {
        ko: "측정 전 숫자는 채우지 않는다",
        en: "Never fill in a number you have not measured",
        zh: "没测量的数字不要填",
      },
      body: {
        ko: "모르는 값은 0이 아니라 '미확인'으로 둡니다. 한 번 채워 넣은 숫자는 나중에 진짜 숫자가 나와도 아무도 믿지 않습니다.",
        en: "An unknown value is 'unverified', never zero. A number filled in once makes even the real one untrustworthy later.",
        zh: "不知道的值写成“未确认”，而不是 0。填过一次的数字，以后即使出了真数字也没人再信。",
      },
    },
    {
      no: "P3",
      title: { ko: "입력을 늘리지 않는다", en: "Do not add input fields", zh: "不增加新的输入" },
      body: {
        ko: "새로 입력할 칸을 늘리는 자동화는 결국 아무도 쓰지 않습니다. 사람들이 이미 쓰는 메일·메신저·시트에서 읽어 오고, 입력이 새 업무가 되지 않게 만듭니다.",
        en: "Automation that adds new fields to fill in ends up unused. It reads from the mail, messenger and sheets people already use, so entering data never becomes a new job.",
        zh: "增加填写栏位的自动化最终没人会用。从大家本来就在用的邮件、聊天工具和表格中读取，不让填写变成新的工作。",
      },
    },
    {
      no: "P4",
      title: {
        ko: "사람이 기억하지 않아도 되게 만든다",
        en: "Build it so nobody has to remember",
        zh: "让人不必靠记忆",
      },
      body: {
        ko: "하면 안 되는 것과 예외는 운영 기준 문서와 자동 검사로 옮깁니다. 담당자가 바뀌어도 기준은 그대로 남고, 팀 공용 표준으로 이어집니다.",
        en: "What's off-limits and the exceptions move into operating documents and automatic checks, so the standard stays when the owner changes and carries on as a team-wide standard.",
        zh: "禁止事项和例外写进运营文档与自动检查。换了负责人，标准依然留在原地，并延续为团队共用标准。",
      },
    },
    {
      no: "P5",
      title: { ko: "최종본과 대조해서 검증한다", en: "Validate against the final draft", zh: "与最终版本对照验证" },
      body: {
        ko: "AI 결과는 제가 낸 실제 결과물과 반복해서 대조한 뒤에 신뢰합니다. 그 전까지는 후보일 뿐입니다.",
        en: "AI output is trusted only after repeated comparison with the real deliverables I produced. Until then it is a candidate.",
        zh: "AI 的结果要和我实际产出的东西反复对照之后才信任。在那之前它只是候选。",
      },
    },
    {
      no: "P6",
      title: {
        ko: "내 문제에서 끝내지 않는다",
        en: "Never stop at my own problem",
        zh: "不止解决自己的问题",
      },
      body: {
        ko: "제 병목을 푼 도구는 동료에게 넘기고, 운영 기준으로 문서화해 조직 단위 실행 속도로 확장합니다. 혼자 쓰는 도구는 성과로 치지 않습니다.",
        en: "A tool that solved my bottleneck gets handed to the team and documented as an operating standard, so it scales into the organization's execution speed. A tool only I use doesn't count as a result.",
        zh: "解决我瓶颈的工具交给同事，并整理成运营标准，扩展到组织层面的执行速度。只有我一个人用的工具不算成果。",
      },
    },
  ],

  /* ---------- STACK ---------- */
  stack: [
    {
      group: { ko: "AI · LLM", en: "AI · LLM", zh: "AI · LLM" },
      items: [
        "Claude API",
        "Claude Code",
        "Kiro Crew",
        "Prompt Design",
        { ko: "LLM 파이프라인 설계", en: "LLM pipeline design", zh: "LLM 流水线设计" },
        { ko: "Eval · 대조 검증", en: "Eval · comparison", zh: "Eval · 对照验证" },
      ],
    },
    {
      group: { ko: "데이터 · 개발", en: "Data · Build", zh: "数据 · 开发" },
      items: ["Python", "YouTube Data API v3", "HTML / CSS / JS", "GitHub"],
    },
    {
      group: { ko: "인프라", en: "Infrastructure", zh: "基础设施" },
      items: [
        "AWS S3 · CloudFront",
        { ko: "정적 사이트 배포", en: "Static site deploy", zh: "静态站点部署" },
        "GitHub Pages",
      ],
    },
    {
      group: { ko: "운영", en: "Operations", zh: "运营" },
      items: [
        "Google Workspace",
        { ko: "스프레드시트 운영 자동화", en: "Spreadsheet ops automation", zh: "表格运营自动化" },
        { ko: "스케줄 · 배치 작업", en: "Scheduled & batch jobs", zh: "定时 · 批处理任务" },
      ],
    },
  ],

  /* ---------- CAREER ---------- */
  timeline: [
    {
      period: { ko: "2026.02 – 현재", en: "Feb 2026 – Present", zh: "2026.02 – 至今" },
      org: { ko: "온더룩", en: "Onthelook", zh: "Onthelook" },
      role: { ko: "MCN팀 · 매니저", en: "MCN Team · Manager", zh: "MCN 团队 · 经理" },
      bullets: [
        {
          ko: "뷰티·패션 크리에이터 최대 30팀 매니지먼트 · 광고 문의 대응 AI 워크플로우 구축",
          en: "Managing up to 30 beauty and fashion creator teams · built the AI workflow for ad inquiries",
          zh: "管理最多 30 个美妆、时尚创作者团队 · 搭建广告咨询 AI 工作流",
        },
      ],
    },
    {
      period: { ko: "2024.11 – 2026.01", en: "Nov 2024 – Jan 2026", zh: "2024.11 – 2026.01" },
      org: { ko: "아이스크리에이티브", en: "Ice Creative", zh: "Ice Creative" },
      role: { ko: "크리에이터광고사업팀", en: "Creator Ads Team", zh: "创作者广告团队" },
      bullets: [
        {
          ko: "크리에이터 광고 캠페인 기획·운영 · 크리에이터·광고주·제작사 협업 프로젝트 진행",
          en: "Planned and ran creator ad campaigns · led projects across creators, advertisers and production partners",
          zh: "企划并运营创作者广告活动 · 推进创作者、广告主与制作方的协作项目",
        },
      ],
    },
    {
      period: { ko: "2024.06 – 2024.11", en: "Jun 2024 – Nov 2024", zh: "2024.06 – 2024.11" },
      org: { ko: "올투원", en: "Alltoone", zh: "Alltoone" },
      role: { ko: "프리랜서", en: "Freelance", zh: "自由职业" },
      bullets: [
        {
          ko: "서울경제신문 AI 뉴스 영상 제작 워크플로우 구축 · 운영 기준 문서화 후 5명에게 인수인계",
          en: "Built the AI news-video production workflow for Seoul Economic Daily · documented it and handed it to five people",
          zh: "为首尔经济新闻搭建 AI 新闻视频制作工作流 · 文档化后交接给 5 人",
        },
      ],
    },
    {
      period: { ko: "2022.05 – 2024.06", en: "May 2022 – Jun 2024", zh: "2022.05 – 2024.06" },
      org: { ko: "샌드박스네트워크", en: "Sandbox Network", zh: "Sandbox Network" },
      role: { ko: "크리에이터 매니지먼트", en: "Creator Management", zh: "创作者经纪" },
      bullets: [
        {
          ko: "크리에이터 12팀 매니지먼트 · 캠페인 운영",
          en: "Managed 12 creator teams and their campaigns",
          zh: "负责 12 个创作者团队与广告活动的运营",
        },
      ],
    },
  ],

  /* ---------- CONTACT ---------- */
  contact: [
    { key: "Email", value: "chaeeunyoon@gmail.com", href: "mailto:chaeeunyoon@gmail.com" },
    { key: "LinkedIn", value: "in/chaeeun-yun", href: "https://www.linkedin.com/in/chaeeun-yun-8a4510239/" },
    { key: "GitHub", value: "@chaeeunyoon-boop", href: "https://github.com/chaeeunyoon-boop" },
  ],
};

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
      ko: "윤채은 — AX Builder / Problem Solver",
      en: "Chaeeun Yun — AX Builder / Problem Solver",
      zh: "Chaeeun Yun — AX 构建者 / 问题解决者",
    },
    desc: {
      ko: "현업의 반복 병목을 찾아, 규칙화하고, 작동하는 AI 워크플로우로 푸는 AX 빌더 윤채은의 포트폴리오.",
      en: "The portfolio of Chaeeun Yun, an AX builder who finds recurring bottlenecks, turns them into rules, and ships AI workflows that run.",
      zh: "AX 构建者 Chaeeun Yun 的作品集：找出反复出现的瓶颈，把它写成规则，再用能跑起来的 AI 工作流解决。",
    },
    skip: { ko: "본문으로 건너뛰기", en: "Skip to content", zh: "跳到正文" },
    brandRole: { ko: "AX Builder · Problem Solver", en: "AX Builder · Problem Solver", zh: "AX 构建者 · 问题解决者" },
    navCases: { ko: "케이스", en: "Cases", zh: "案例" },
    navDemos: { ko: "라이브 데모", en: "Live demos", zh: "实时演示" },
    demosTitle: {
      ko: "직접 눌러보는 데모 3종",
      en: "Three demos you can click through",
      zh: "三个可以亲手点击的演示",
    },
    demosLead: {
      ko: "케이스에서 말한 구조를 화면으로 옮겼습니다. 같은 판단을 세 번 반복하지 않으려고 만든 것들을, 지금 바로 만져볼 수 있게 두었습니다.",
      en: "The structures described in the cases, rebuilt as screens you can operate right here. What I built so the same judgment never has to be repeated three times.",
      zh: "把案例里说的结构搬成了界面，现在就能上手。这些是我为了不再把同一个判断重复三遍而做的东西。",
    },
    demosFootnote: {
      ko: "모든 브랜드·크리에이터·금액·파트너명은 가상이며, 실제 회사·캠페인·단가와 무관합니다. 서버 호출·저장·실제 발송은 없습니다.",
      en: "Every brand, creator, amount and partner name is fictional — unrelated to any real company, campaign or rate. No server calls, no storage, nothing actually sent.",
      zh: "所有品牌、创作者、金额和合作方名称均为虚构，与真实公司、广告活动和报价无关。不调用服务器、不保存、也不会真正发送。",
    },
    navPrinciples: { ko: "원칙", en: "Principles", zh: "原则" },
    navCareer: { ko: "경력", en: "Career", zh: "履历" },
    navContact: { ko: "연락", en: "Contact", zh: "联系" },

    heroStatus: {
      ko: "현재 온더룩 MCN팀에서 일하며, 그 옆에서 AI 워크플로우를 만듭니다",
      en: "Currently on the MCN team at Onthelook, building AI workflows beside the work",
      zh: "目前在 Onthelook 的 MCN 团队工作，同时在旁边搭建 AI 工作流",
    },
    heroLine1: { ko: "반복되는 병목을 찾아", en: "Find the bottleneck that keeps coming back.", zh: "找出反复卡住的瓶颈" },
    heroLine2: { ko: "규칙으로 바꾸고", en: "Turn it into a rule.", zh: "把它写成规则" },
    heroLine3: {
      ko: "작동하는 워크플로우로 풉니다.",
      en: "Then solve it with a workflow that actually runs.",
      zh: "再用能跑起来的工作流解决。",
    },
    heroSub: {
      ko: "마케터로 4년 넘게 현장을 운영해 왔고, 그 현장에서 막히던 일을 직접 AI 에이전트와 파이프라인으로 만들어 왔습니다. 기획서로 끝내지 않고, 실제로 돌아가고 남이 이어받을 수 있는 형태까지 갑니다.",
      en: "I spent more than four years running creator marketing on the ground, and built the AI agents and pipelines for whatever got stuck there. I don't stop at a proposal — I take it to something that runs and that someone else can take over.",
      zh: "我在创作者营销一线做了四年多运营，也亲手把现场卡住的事做成 AI 智能体和数据管道。不止停在方案，而是一路做到真正运行、别人也能接手。",
    },
    heroCta1: { ko: "케이스 4건 보기", en: "See the four cases", zh: "查看 4 个案例" },
    heroCta2: { ko: "연락하기", en: "Get in touch", zh: "联系我" },

    metricHead: { ko: "IMPACT · BEFORE / AFTER", en: "IMPACT · BEFORE / AFTER", zh: "IMPACT · 之前 / 之后" },
    metricBadge: { ko: "실무 적용", en: "In production", zh: "实战应用" },
    metricFoot: {
      ko: "* 모두 실제 업무에서 운영한 결과입니다.",
      en: "* Every figure comes from work actually run in production.",
      zh: "* 全部来自实际工作中的运营结果。",
    },

    casesTitle: { ko: "문제 → 규칙 → 임팩트", en: "Problem → Rules → Impact", zh: "问题 → 规则 → 效果" },
    casesLead: {
      ko: "각 케이스는 같은 순서로 읽힙니다. 무엇이 막혔는지, 어떤 판단을 규칙으로 옮겼는지, 그래서 무엇이 달라졌는지.",
      en: "Each case reads in the same order: what was stuck, which judgments became rules, and what changed because of it.",
      zh: "每个案例都按同一顺序读：哪里卡住了，哪些判断被写成规则，因此什么发生了变化。",
    },
    step1: { ko: "01 · 문제 (BEFORE)", en: "01 · Problem (BEFORE)", zh: "01 · 问题（BEFORE）" },
    step2: { ko: "02 · 규칙과 아키텍처", en: "02 · Rules & Architecture", zh: "02 · 规则与架构" },
    step3: { ko: "03 · 임팩트 (AFTER)", en: "03 · Impact (AFTER)", zh: "03 · 效果（AFTER）" },

    principlesTitle: {
      ko: "AI에게 맡길 것과 맡기지 않을 것을 먼저 나눕니다.",
      en: "First, I decide what AI should not be trusted with.",
      zh: "先把哪些交给 AI、哪些不交，分清楚。",
    },
    principlesLead: {
      ko: "판단을 세 층으로 분리하는 것이 제 모든 워크플로우의 출발점입니다.",
      en: "Splitting judgment into three layers is where every one of my workflows starts.",
      zh: "把判断分成三层，是我所有工作流的起点。",
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
      ko: "총 경력 4년 4개월 · 크리에이터 마케팅 운영 → AI 워크플로우 설계",
      en: "4 years 4 months · from creator marketing operations to AI workflow design",
      zh: "总经历 4 年 4 个月 · 从创作者营销运营到 AI 工作流设计",
    },

    contactTitle: {
      ko: "막힌 현장이 있다면, 그 이야기부터 듣고 싶습니다.",
      en: "If something is stuck where you work, I want to hear about that first.",
      zh: "如果你有卡住的地方，我想先听那段故事。",
    },
    contactLead: {
      ko: "반복되는 일을 규칙으로 옮기고, 사람이 승인해야 할 지점을 남겨 두는 일. 그 구조를 같이 만들 사람을 찾고 있습니다.",
      en: "Moving repeated work into rules while keeping the points a human must approve. I'm looking for people to build that structure with.",
      zh: "把反复发生的事写成规则，同时保留必须由人审批的节点。我在找愿意一起做这件事的人。",
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
      label: { ko: "캠페인 제안서 초안", en: "Campaign proposal draft", zh: "广告提案初稿" },
    },
    {
      before: { ko: "2주", en: "2 weeks", zh: "2 周" },
      after: { ko: "2일", en: "2 days", zh: "2 天" },
      label: { ko: "채널 성장 분석", en: "Channel growth analysis", zh: "频道增长分析" },
    },
    {
      before: { ko: "4주", en: "4 weeks", zh: "4 周" },
      after: { ko: "2일", en: "2 days", zh: "2 天" },
      label: { ko: "AI 립싱크 · 글로벌 론칭", en: "AI lipsync · global launch", zh: "AI 对口型 · 全球上线" },
    },
  ],

  /* ---------- CASE STUDIES ---------- */
  cases: [
    {
      id: "work-agent",
      no: "01",
      tag: {
        ko: "업무 자동화 · Human-in-the-loop",
        en: "Workflow automation · Human-in-the-loop",
        zh: "工作流自动化 · 人工介入",
      },
      title: {
        ko: "비정형 요청을 처리하는 AI 업무 에이전트",
        en: "An AI work agent for unstructured requests",
        zh: "处理非结构化请求的 AI 工作智能体",
      },
      org: { ko: "온더룩 · MCN팀", en: "Onthelook · MCN Team", zh: "Onthelook · MCN 团队" },
      role: { ko: "설계 · 구축 · 검증 (단독)", en: "Design, build, validation (solo)", zh: "设计 · 搭建 · 验证（独立完成）" },
      period: { ko: "2026.02 – 현재", en: "Feb 2026 – Present", zh: "2026.02 – 至今" },
      oneLiner: {
        ko: "제각각인 요청을 8개 기능으로 나누고, 제 머릿속에만 있던 판단 12개를 규칙으로 옮겨, 1건에 1시간 걸리던 일을 3~5분 검토로 줄였습니다.",
        en: "I split ad-hoc requests into eight functions and turned the twelve judgments that only lived in my head into rules — cutting a one-hour task to a three-to-five minute review.",
        zh: "我把形态各异的请求拆成 8 个功能，把只存在于我脑中的 12 条判断写成规则，让一件要 1 小时的事变成 3~5 分钟的审阅。",
      },
      problem: {
        lead: {
          ko: "뷰티·패션 크리에이터 최대 30팀을 혼자 운영했습니다. 요청은 매번 모양이 달랐고, 판단 기준은 어디에도 적혀 있지 않았습니다.",
          en: "I ran up to 30 beauty and fashion creator teams on my own. Every request arrived in a different shape, and the criteria for handling it were written down nowhere.",
          zh: "我独自运营最多 30 个美妆、时尚创作者团队。每次请求的形态都不一样，而判断标准没有任何地方写下来。",
        },
        bullets: [
          {
            ko: "요청마다 처음부터 다시 고민 — 같은 판단을 하루에도 여러 번 반복",
            en: "Every request started from zero — the same judgment repeated several times a day",
            zh: "每个请求都从零开始想——同一种判断一天要重复好几次",
          },
          {
            ko: "캠페인 제안서 한 건에 초안 작성 1시간, 그 뒤 수정이 또 한 번",
            en: "One campaign proposal took an hour to draft, then another pass to fix",
            zh: "一份广告提案初稿要写 1 小时，之后还要再改一遍",
          },
          {
            ko: "AI에 그대로 맡기면 같은 지점에서 계속 틀림 — 기준이 없었기 때문",
            en: "Handed straight to an AI, it failed at the same spots — because the criteria existed nowhere",
            zh: "直接交给 AI，它总在同样的地方出错——因为没有标准",
          },
          {
            ko: "일이 한 사람의 기억에 묶여 있어 다른 팀원이 대신하기 어려움",
            en: "The work lived in one person's memory, so no teammate could pick it up",
            zh: "工作绑在一个人的记忆里，其他同事很难接手",
          },
        ],
      },
      rules: {
        lead: {
          ko: "요청을 기능 단위로 쪼개고, 판단을 세 층으로 나눠 각각 다른 곳에 두었습니다.",
          en: "I cut the work into functional units, then split judgment into three layers and put each layer somewhere different.",
          zh: "我把请求拆成功能单元，再把判断分成三层，分别放在不同的地方。",
        },
        flow: [
          {
            label: { ko: "요청 수신", en: "Intake", zh: "请求进入" },
            sub: { ko: "메신저 · 메일 · 시트", en: "Messenger, mail, sheets", zh: "消息 · 邮件 · 表格" },
          },
          {
            label: { ko: "8개 기능 분류", en: "8 functions", zh: "8 个功能分类" },
            sub: { ko: "제안서 · 정산 · 섭외 · 리포트", en: "Proposal, billing, casting, report", zh: "提案 · 结算 · 邀约 · 报告" },
          },
          {
            label: { ko: "판단 규칙 12개", en: "12 rules", zh: "12 条判断规则" },
            sub: { ko: "문서 + 코드", en: "Document + code", zh: "文档 + 代码" },
          },
          {
            label: { ko: "스케줄 5개", en: "5 schedules", zh: "5 个定时任务" },
            sub: { ko: "정해진 시각 반복 실행", en: "Repeat at fixed times", zh: "按固定时间反复执行" },
          },
          {
            label: { ko: "초안 생성", en: "Drafting", zh: "生成初稿" },
            sub: { ko: "모델 판단", en: "Model judgment", zh: "模型判断" },
          },
          {
            label: { ko: "인간 승인 게이트", en: "Human gate", zh: "人工审批关卡" },
            sub: { ko: "금액 · 외부 발송", en: "Money, outbound", zh: "金额 · 对外发送" },
            gate: true,
          },
          {
            label: { ko: "발송 · 기록", en: "Send & log", zh: "发送 · 记录" },
            sub: { ko: "이력 자동 축적", en: "Automatic history", zh: "自动积累历史" },
          },
        ],
        notes: [
          { ko: "8개 기능 단위로 분해", en: "Broken into 8 functions", zh: "拆成 8 个功能单元" },
          { ko: "판단 규칙 12개 문서화", en: "12 judgment rules documented", zh: "12 条判断规则文档化" },
          { ko: "스케줄 5개로 반복 실행", en: "5 scheduled runs", zh: "5 个定时任务自动执行" },
          {
            ko: "모델 판단 / 규칙 고정 / 인간 승인 3층 분리",
            en: "Model / rules / human split",
            zh: "模型判断 / 规则固化 / 人工审批 三层分离",
          },
          {
            ko: "금액 관련 인간 승인 게이트 제안 (설계)",
            en: "Human approval gate for money — proposed and designed",
            zh: "提出并设计金额类人工审批关卡",
          },
          { ko: "제 최종본과 4회 대조 검증", en: "Validated against my own final drafts 4 times", zh: "与我的最终版本对照验证 4 次" },
        ],
      },
      impact: {
        lead: {
          ko: "세 번째 초안은 고치지 않고 실제 광고주에게 나갔습니다. 지금은 팀 공용 워크플로우로 이관되어 다른 담당자도 같은 구조로 일합니다.",
          en: "The third draft went to a real advertiser without edits. It has since been handed over as a shared team workflow, so other owners work in the same structure.",
          zh: "第三版初稿未经修改就发给了真实广告主。现在它已成为团队共用的工作流，其他负责人也按同一结构工作。",
        },
        metrics: [
          {
            before: { ko: "1시간", en: "1 hr", zh: "1 小时" },
            after: { ko: "3~5분", en: "3–5 min", zh: "3~5 分钟" },
            label: { ko: "제안서 초안 1건", en: "One proposal draft", zh: "一份提案初稿" },
          },
          {
            before: { ko: "개인 업무", en: "Personal", zh: "个人工作" },
            after: { ko: "팀 공용", en: "Team-wide", zh: "团队共用" },
            label: { ko: "워크플로우 소유", en: "Workflow ownership", zh: "工作流归属" },
          },
          {
            before: { ko: "담당자 기억", en: "In my head", zh: "负责人记忆" },
            after: { ko: "문서 · 규칙", en: "Documented rules", zh: "文档 · 规则" },
            label: { ko: "판단 기준의 위치", en: "Where the criteria live", zh: "判断标准所在" },
          },
        ],
        note: {
          ko: "초기 운영 단계라 사람이 낸 결과와 계속 대조하며 정확도를 판단하고 있습니다.",
          en: "Still early in operation, so accuracy is being judged against human-made output side by side.",
          zh: "目前仍在早期运营阶段，持续与人工产出对照来判断准确度。",
        },
      },
    },

    {
      id: "channel-pipeline",
      no: "02",
      tag: { ko: "데이터 파이프라인 · LLM 분석", en: "Data pipeline · LLM analysis", zh: "数据管道 · LLM 分析" },
      title: {
        ko: "YouTube Data API + LLM 채널 성장 분석 파이프라인",
        en: "YouTube Data API + LLM channel growth pipeline",
        zh: "YouTube Data API + LLM 频道增长分析管道",
      },
      org: {
        ko: "아이스크리에이티브 · 크리에이터광고사업팀",
        en: "Ice Creative · Creator Ads Team",
        zh: "Ice Creative · 创作者广告团队",
      },
      role: { ko: "기획 · 구축", en: "Design & build", zh: "规划 · 搭建" },
      period: { ko: "2024.11 – 2026.01", en: "Nov 2024 – Jan 2026", zh: "2024.11 – 2026.01" },
      oneLiner: {
        ko: "영상별 지표를 손으로 모아 해석하던 2주짜리 채널 분석을, API 수집과 LLM 해석을 이어 붙여 2일로 줄였습니다. 70만 구독자 규모 채널의 성장 전략에 사용했습니다.",
        en: "A two-week channel analysis that meant collecting metrics by hand became a two-day pipeline of API collection plus LLM interpretation, used for growth strategy on a channel with 700K subscribers.",
        zh: "原本要花两周、靠手工汇总指标并解读的频道分析，我把 API 采集和 LLM 解读接在一起，缩短到两天。这套结果用在了 70 万订阅规模频道的增长策略上。",
      },
      problem: {
        lead: {
          ko: "채널 분석이 의사결정 속도를 따라가지 못했습니다.",
          en: "Channel analysis could not keep up with the speed of decisions.",
          zh: "频道分析跟不上决策的速度。",
        },
        bullets: [
          {
            ko: "영상별 조회·노출·체류 지표를 손으로 옮겨 붙이는 데만 2주",
            en: "Two weeks just moving per-video views, impressions and retention by hand",
            zh: "仅是把每条视频的播放、曝光、留存指标手工搬运合并就要两周",
          },
          {
            ko: "분석이 끝날 때면 이미 다음 기획이 진행된 뒤 — 인사이트가 늦게 도착",
            en: "By the time it finished, the next plan was already in motion — insight arrived late",
            zh: "分析结束时下一个企划已经在推进——洞察来晚了",
          },
          {
            ko: "해석이 사람마다 달라 같은 지표에서 다른 결론",
            en: "Interpretation varied by person, so the same numbers produced different conclusions",
            zh: "不同人解读不同，同一组数字得出不同结论",
          },
          {
            ko: "무엇이 먹혔는지(주제·후킹·길이)가 숫자로 남지 않음",
            en: "What worked — topic, hook, length — was never recorded as numbers",
            zh: "什么内容有效（主题、开场钩子、时长）没有留下数字",
          },
        ],
      },
      rules: {
        lead: {
          ko: "수집은 API에, 해석은 LLM에, 판단 기준은 분류 규칙에 맡기는 구조로 나눴습니다.",
          en: "Collection went to the API, interpretation to the LLM, and the criteria to fixed classification rules.",
          zh: "采集交给 API，解读交给 LLM，判断标准交给固定的分类规则。",
        },
        flow: [
          {
            label: { ko: "YouTube Data API v3", en: "YouTube Data API v3", zh: "YouTube Data API v3" },
            sub: { ko: "채널 · 영상 · 지표 수집", en: "Channels, videos, metrics", zh: "采集频道 · 视频 · 指标" },
          },
          {
            label: { ko: "정규화 · 집계", en: "Normalize", zh: "标准化 · 汇总" },
            sub: { ko: "비교 가능한 형태로", en: "Comparable shape", zh: "变成可比较的形式" },
          },
          {
            label: { ko: "LLM 해석", en: "LLM reading", zh: "LLM 解读" },
            sub: { ko: "주제 · 후킹 · 길이별 성과", en: "Topic, hook, length", zh: "按主题 · 钩子 · 时长看表现" },
          },
          {
            label: { ko: "성장 전략 리포트", en: "Growth report", zh: "增长策略报告" },
            sub: { ko: "다음 기획안으로 연결", en: "Into the next plan", zh: "接到下一个企划" },
          },
          {
            label: { ko: "기획 반영", en: "Apply", zh: "落到企划" },
            sub: { ko: "다음 콘텐츠 사이클", en: "Next content cycle", zh: "下一个内容周期" },
          },
        ],
        notes: [
          { ko: "YouTube Data API v3 수집", en: "YouTube Data API v3 collection", zh: "YouTube Data API v3 采集" },
          { ko: "지표 정규화 스크립트", en: "Metric normalization script", zh: "指标标准化脚本" },
          {
            ko: "콘텐츠 유형 분류 기준 고정",
            en: "Fixed content-type classification",
            zh: "内容类型分类标准固定",
          },
          { ko: "리포트 템플릿 표준화", en: "Standard report template", zh: "报告模板标准化" },
        ],
      },
      impact: {
        lead: {
          ko: "분석이 빨라진 것보다, 같은 지표를 팀이 같은 기준으로 읽게 된 것이 실제 변화였습니다.",
          en: "The bigger change was less speed than this: the team now reads the same metrics with the same criteria.",
          zh: "比速度更大的变化是：团队现在用同一套标准读同一组指标。",
        },
        metrics: [
          {
            before: { ko: "2주", en: "2 weeks", zh: "2 周" },
            after: { ko: "2일", en: "2 days", zh: "2 天" },
            label: { ko: "분석 1사이클", en: "One analysis cycle", zh: "一个分析周期" },
          },
          {
            before: { ko: "수작업 정리", en: "Manual", zh: "手工整理" },
            after: { ko: "자동 파이프라인", en: "Automated pipeline", zh: "自动管道" },
            label: { ko: "수집 · 집계", en: "Collect & aggregate", zh: "采集 · 汇总" },
          },
          {
            before: { ko: "감", en: "Gut feel", zh: "凭感觉" },
            after: { ko: "지표 근거", en: "Metric evidence", zh: "指标依据" },
            label: { ko: "기획 판단", en: "Planning decision", zh: "企划判断" },
          },
        ],
        note: {
          ko: "70만 구독자 규모 채널의 성장 전략 수립에 이 리포트를 사용했습니다.",
          en: "These reports fed the growth strategy for a channel in the 700K-subscriber range.",
          zh: "这些报告被用于 70 万订阅规模频道的增长策略制定。",
        },
      },
    },

    {
      id: "lipsync-launch",
      no: "03",
      tag: { ko: "프로젝트 리드 · 글로벌 론칭", en: "Project lead · Global launch", zh: "项目负责 · 全球上线" },
      title: {
        ko: "3사 협업 AI 립싱크 글로벌 서브채널 론칭 PM",
        en: "Launch PM for a three-party AI lipsync subchannel",
        zh: "三方协作的 AI 对口型全球子频道上线 PM",
      },
      org: {
        ko: "아이스크리에이티브 · 크리에이터광고사업팀",
        en: "Ice Creative · Creator Ads Team",
        zh: "Ice Creative · 创作者广告团队",
      },
      role: {
        ko: "PM · 크리에이터 · 광고주 · AI 솔루션사 조율",
        en: "PM · creator, advertiser, AI vendor",
        zh: "PM · 协调创作者、广告主与 AI 方案商",
      },
      period: { ko: "2025.10", en: "Oct 2025", zh: "2025.10" },
      oneLiner: {
        ko: "크리에이터·광고주·AI 솔루션사 세 곳이 맞물린 다국어 립싱크 제작을, 검수 기준을 먼저 정하는 방식으로 4주에서 2일로 당겼습니다.",
        en: "Lipsync work spanning a creator, an advertiser and an AI vendor — shortened from four weeks to two days by defining the review criteria first.",
        zh: "涉及创作者、广告主和 AI 方案商三方的多语种对口型制作，我用先定验收标准的方式，把四周压缩到两天。",
      },
      problem: {
        lead: {
          ko: "세 회사가 각자 다른 기준으로 움직이면 일정은 매번 처음부터 다시 잡아야 합니다.",
          en: "When three companies move on three different standards, the schedule restarts from scratch every time.",
          zh: "三家公司各按各的标准走，进度每次都得从头再排。",
        },
        bullets: [
          {
            ko: "다국어 더빙·립싱크는 통상 4주 — 검수 기준이 없어 수정이 반복",
            en: "Multilingual dubbing and lipsync usually take four weeks — with no review standard, revisions repeat",
            zh: "多语种配音与对口型通常要四周——没有验收标准，修改反复",
          },
          {
            ko: "립싱크 품질을 '느낌'으로 판단해 누가 봐도 같은 결론이 나오지 않음",
            en: "Quality judged by feel meant two reviewers reached two conclusions",
            zh: "对口型质量靠“感觉”判断，两个人看会得出两个结论",
          },
          {
            ko: "역할·산출물·마감이 구두로만 오가 일정이 흔들림",
            en: "Roles, deliverables and dates moved verbally, so the schedule moved too",
            zh: "角色、交付物、截止时间只在口头流转，日程一直晃",
          },
          {
            ko: "글로벌 채널은 첫인상이 전부라 기준 없이 양산할 수 없음",
            en: "A global channel is judged on first impressions, so nothing could be mass-produced without a standard",
            zh: "全球频道第一印象决定一切，没有标准不能批量生产",
          },
        ],
      },
      rules: {
        lead: {
          ko: "만들기 전에 '무엇을 통과라고 부를지'를 세 회사가 같은 문장으로 합의했습니다.",
          en: "Before producing anything, all three companies agreed in the same words on what counts as a pass.",
          zh: "在开始制作之前，三家公司先用同一句话确认“什么算通过”。",
        },
        flow: [
          {
            label: { ko: "3사 역할 정의", en: "Define roles", zh: "定义三方角色" },
            sub: { ko: "크리에이터 · 광고주 · 솔루션사", en: "Creator, advertiser, vendor", zh: "创作者 · 广告主 · 方案商" },
          },
          {
            label: { ko: "검수 기준 설정", en: "Review criteria", zh: "设定验收标准" },
            sub: { ko: "입모양 · 표정 · 자막 톤", en: "Lip sync, expression, tone", zh: "口型 · 表情 · 字幕语气" },
          },
          {
            label: { ko: "샘플 선검수", en: "Sample pass", zh: "样片预验收" },
            sub: { ko: "1편으로 기준 합의", en: "Agree on one clip", zh: "用一条片子达成共识" },
          },
          {
            label: { ko: "양산", en: "Produce", zh: "批量制作" },
            sub: { ko: "같은 기준으로 반복", en: "Repeat on one standard", zh: "按同一标准重复" },
          },
          {
            label: { ko: "QC · 승인", en: "QC & sign-off", zh: "QC · 签核" },
            sub: { ko: "기준 대비 확인", en: "Check against criteria", zh: "对照标准确认" },
          },
          {
            label: { ko: "글로벌 업로드", en: "Global upload", zh: "全球上传" },
            sub: { ko: "@haenibeautyEN", en: "@haenibeautyEN", zh: "@haenibeautyEN" },
          },
        ],
        notes: [
          { ko: "역할 · 산출물 · 마감 문서화", en: "Roles, deliverables, dates in writing", zh: "角色 · 交付物 · 截止时间文档化" },
          {
            ko: "립싱크 · 자막 · 톤 검수 체크리스트",
            en: "Lipsync, subtitle, tone checklist",
            zh: "对口型 · 字幕 · 语气验收清单",
          },
          { ko: "샘플 선검수 후 양산", en: "Sample first, then volume", zh: "样片先验收再量产" },
          { ko: "일정 역산으로 3사 마감 고정", en: "Dates fixed backwards from launch", zh: "从上线日倒排，固定三方节点" },
        ],
      },
      impact: {
        lead: {
          ko: "2025년 10월 영어 서브채널 @haenibeautyEN을 열고 첫 시즌 운영을 시작했습니다.",
          en: "In October 2025 the English subchannel @haenibeautyEN opened and its first season began.",
          zh: "2025 年 10 月开设英文子频道 @haenibeautyEN，并开始第一个季度的运营。",
        },
        metrics: [
          {
            before: { ko: "4주", en: "4 weeks", zh: "4 周" },
            after: { ko: "2일", en: "2 days", zh: "2 天" },
            label: { ko: "제작 → 론칭", en: "Production to launch", zh: "从制作到上线" },
          },
          {
            before: { ko: "구두 조율", en: "Verbal", zh: "口头协调" },
            after: { ko: "문서화된 기준", en: "Written criteria", zh: "书面标准" },
            label: { ko: "3사 커뮤니케이션", en: "Cross-company comms", zh: "三方沟通" },
          },
          {
            before: { ko: "국내 채널", en: "Domestic", zh: "国内频道" },
            after: { ko: "영어 서브채널", en: "English subchannel", zh: "英文子频道" },
            label: { ko: "채널 확장", en: "Channel footprint", zh: "频道拓展" },
          },
        ],
        note: {
          ko: "기준을 먼저 정하는 방식은 이후 다른 협업 프로젝트에도 같은 순서로 적용했습니다.",
          en: "The criteria-first order became the default for later collaborations too.",
          zh: "先定标准的做法之后也被按同样顺序用到了其他协作项目上。",
        },
      },
    },

    {
      id: "news-video",
      no: "04",
      tag: { ko: "콘텐츠 자동화 · 인에이블먼트", en: "Content automation · Enablement", zh: "内容自动化 · 赋能" },
      title: {
        ko: "서울경제신문 AI 영상 제작 자동화 & 5인 이관",
        en: "AI news-video production automation & five-person handover",
        zh: "首尔经济新闻 AI 视频制作自动化与 5 人交接",
      },
      org: { ko: "올투원 · 프리랜서", en: "Alltoone · Freelance", zh: "Alltoone · 自由职业" },
      role: {
        ko: "제작 체계 구축 · 운영 이관",
        en: "Build the system, hand over operations",
        zh: "搭建制作体系 · 移交运营",
      },
      period: { ko: "2024.06 – 2024.11", en: "Jun 2024 – Nov 2024", zh: "2024.06 – 2024.11" },
      oneLiner: {
        ko: "기사 한 건을 영상으로 만드는 과정을 템플릿과 체크리스트로 고정해, 1일 1건을 30분 1건으로 만들고 그 체계를 5명이 이어받게 했습니다.",
        en: "I fixed the article-to-video process into templates and checklists — one video a day became one every 30 minutes, and five people took the system over.",
        zh: "我把“一篇报道变成一条视频”的过程固化成模板和清单，让一天一条变成 30 分钟一条，并交给 5 个人接手。",
      },
      problem: {
        lead: {
          ko: "사람 손이 매번 필요한 제작 방식은 늘릴 수 없습니다.",
          en: "A process that needs hands every time cannot scale.",
          zh: "每次都靠人工的制作方式，没法扩大。",
        },
        bullets: [
          {
            ko: "기사 1건 → 영상 1건에 하루 — 하루 한 건이 한계",
            en: "One article to one video took a day — one a day was the ceiling",
            zh: "一篇报道 → 一条视频要一整天——一天一条就是上限",
          },
          {
            ko: "주 1건 수준의 발행량, 월 조회수 1~3만 구간에 머묾",
            en: "About one publish a week, stuck at 10–30K monthly views",
            zh: "一周一条左右的发布量，月播放量停在 1~3 万",
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
          ko: "기사에서 발행까지의 단계를 나누고, 각 단계의 산출물과 통과 기준을 정해 문서로 남겼습니다.",
          en: "I split the path from article to publish, then fixed the output and pass criteria of each step in writing.",
          zh: "我把从报道到发布的步骤拆开，把每一步的产出和通过标准写进文档。",
        },
        flow: [
          {
            label: { ko: "기사 수집", en: "Article in", zh: "报道输入" },
            sub: { ko: "주제 · 팩트 확인", en: "Topic, facts", zh: "选题 · 事实核对" },
          },
          {
            label: { ko: "스크립트", en: "Script", zh: "脚本" },
            sub: { ko: "프롬프트 템플릿", en: "Prompt template", zh: "提示词模板" },
          },
          {
            label: { ko: "장면 구성", en: "Scene plan", zh: "分镜" },
            sub: { ko: "이미지 · 자막 규칙", en: "Image, caption rules", zh: "图像 · 字幕规则" },
          },
          {
            label: { ko: "음성 · 렌더", en: "Voice & render", zh: "配音 · 渲染" },
            sub: { ko: "TTS · 타임라인", en: "TTS, timeline", zh: "TTS · 时间轴" },
          },
          {
            label: { ko: "저작권 체크", en: "Rights check", zh: "版权检查" },
            sub: { ko: "가이드라인", en: "Guideline", zh: "指南" },
            gate: true,
          },
          {
            label: { ko: "검수 · 발행", en: "Review & publish", zh: "审核 · 发布" },
            sub: { ko: "체크리스트", en: "Checklist", zh: "清单" },
          },
          {
            label: { ko: "5인 이관", en: "Handover ×5", zh: "交接 5 人" },
            sub: { ko: "교육 · 문서", en: "Training, docs", zh: "培训 · 文档" },
          },
        ],
        notes: [
          { ko: "프롬프트 · 장면 템플릿", en: "Prompt and scene templates", zh: "提示词 · 分镜模板" },
          { ko: "저작권 가이드라인 수립", en: "Rights guideline", zh: "制定版权指南" },
          { ko: "검수 체크리스트", en: "Review checklist", zh: "审核清单" },
          { ko: "5인 교육 · 이관 문서", en: "Training and handover docs", zh: "5 人培训与交接文档" },
        ],
      },
      impact: {
        lead: {
          ko: "제가 손을 떼도 같은 품질이 나오도록 기준을 문서로 남기고 팀에 넘겼습니다.",
          en: "I left the standard in writing and handed it to the team, so the output held without me.",
          zh: "把标准留在文档里交给团队，我抽手之后产出质量依然稳定。",
        },
        metrics: [
          {
            before: { ko: "1일 1건", en: "1 per day", zh: "一天一条" },
            after: { ko: "30분 1건", en: "1 per 30 min", zh: "30 分钟一条" },
            label: { ko: "제작 시간", en: "Production time", zh: "制作时间" },
          },
          {
            before: { ko: "주 1건", en: "1 per week", zh: "一周一条" },
            after: { ko: "일 5건", en: "5 per day", zh: "一天五条" },
            label: { ko: "발행량", en: "Publishing volume", zh: "发布量" },
          },
          {
            before: { ko: "월 1~3만", en: "10–30K", zh: "月 1~3 万" },
            after: { ko: "월 10만", en: "100K", zh: "月 10 万" },
            label: { ko: "월 조회수", en: "Monthly views", zh: "月播放量" },
          },
        ],
        note: {
          ko: "이관 이후에도 같은 기준으로 운영되도록 저작권 가이드라인과 체크리스트를 함께 넘겼습니다.",
          en: "The rights guideline and checklist went with the handover so operations kept the same standard.",
          zh: "交接时一并交付了版权指南和检查清单，让运营维持同一标准。",
        },
      },
    },
  ],

  /* ---------- LIVE DEMOS — 100% 가상 데이터 ---------- */
  demos: {
    fictitious: { ko: "가상 데이터", en: "Fictional data", zh: "虚构数据" },
    hint: {
      ko: "버튼을 눌러 직접 확인하세요. 서버 호출·저장·실제 발송은 없습니다.",
      en: "Click through it yourself. No server calls, no storage, nothing actually sent.",
      zh: "点一下自己试试。不调用服务器、不保存、也不会真正发送。",
    },

    simulator: {
      title: {
        ko: "비정형 요청 → 12개 규칙 판정 → 제안서 초안",
        en: "Unstructured request → 12 rule checks → proposal draft",
        zh: "非结构化需求 → 12 条规则判定 → 提案初稿",
      },
      lead: {
        ko: "광고주 요청 원문에서 조건을 뽑고, 12개 규칙으로 판정한 뒤 초안까지 만듭니다. 금액이 걸리면 자동으로 확정하지 않고 멈춥니다.",
        en: "Terms are pulled out of a raw advertiser message, twelve rules judge it, and a draft comes out. When money is involved it stops instead of auto-committing.",
        zh: "从广告主的原始消息里抽出条件，用 12 条规则判定，再生成初稿。涉及金额时不自动定案，而是停下来。",
      },
      presetsLabel: { ko: "요청 프리셋", en: "Request presets", zh: "需求预设" },
      requestHead: { ko: "광고주 요청 원문", en: "Advertiser request, as received", zh: "广告主原始需求" },
      extractHead: { ko: "01 · 조건 추출", en: "01 · Extracted terms", zh: "01 · 条件抽取" },
      rulesHead: { ko: "02 · 12개 규칙 판정", en: "02 · Twelve rule checks", zh: "02 · 12 条规则判定" },
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
        halt: { ko: "정지", en: "Stop", zh: "卡住" },
      },
      draftStatus: {
        ok: { ko: "검토 후 발송", en: "Ready to review", zh: "待审后发送" },
        fix: { ko: "수정 필요", en: "Needs fixing", zh: "需要修改" },
        hold: { ko: "정지 · 사람 승인", en: "Stopped · human approval", zh: "卡住 · 需人工审批" },
      },
      gateNote: {
        ko: "금액과 정산 조건은 자동으로 확정하지 않습니다. 승인 게이트에서 사람이 확인한 뒤에만 다음 단계로 갑니다.",
        en: "Amounts and settlement terms are never auto-committed. They move on only after a person clears the approval gate.",
        zh: "金额和结算条件从不自动定案。只有人工通过审批关卡后才进入下一步。",
      },
      rules: [
        { id: "R01", name: { ko: "카테고리 적합성", en: "Category fit", zh: "品类匹配" } },
        { id: "R02", name: { ko: "예산 범위", en: "Budget range", zh: "预算范围" } },
        { id: "R03", name: { ko: "최소 단가", en: "Minimum rate", zh: "最低报价" } },
        { id: "R04", name: { ko: "타깃 오디언스", en: "Target audience", zh: "目标受众" } },
        { id: "R05", name: { ko: "경쟁 브랜드 노출", en: "Brand conflict", zh: "竞品露出" } },
        { id: "R06", name: { ko: "콘텐츠 포맷", en: "Content format", zh: "内容形式" } },
        { id: "R07", name: { ko: "납기 리드타임", en: "Lead time", zh: "交付周期" } },
        { id: "R08", name: { ko: "2차 활용 범위", en: "Usage rights", zh: "二次使用范围" } },
        { id: "R09", name: { ko: "협찬 표기", en: "Disclosure", zh: "赞助标注" } },
        { id: "R10", name: { ko: "정산 조건", en: "Settlement terms", zh: "结算条件" } },
        { id: "R11", name: { ko: "초상권·동의", en: "Consent", zh: "肖像权与同意" } },
        { id: "R12", name: { ko: "금액 승인 게이트", en: "Amount gate", zh: "金额审批关卡" } },
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
              { k: { ko: "산출물", en: "Deliverables", zh: "交付物" }, v: { ko: "릴스 3편 · 피드 1편 (1인당)", en: "3 reels + 1 feed post per creator", zh: "每人 3 条 Reels + 1 条图文" } },
              { k: { ko: "특약", en: "Terms", zh: "特别条款" }, v: { ko: "2차 활용 3개월 · 정산 익월 15일", en: "3-month usage · paid by the 15th of the next month", zh: "二次使用 3 个月 · 次月 15 日结算" } },
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
            { ko: "리빙 브랜드 ↔ 뷰티 풀: 교집합 1팀", en: "Living brand vs. beauty pool: one overlap", zh: "家居品牌与美妆池：仅 1 位重合" },
            { ko: "요청 400만원 / 최소 900만원", en: "Requested ₩4M vs. ₩9M minimum", zh: "需求 400 万 / 最低 900 万" },
            null,
            null,
            null,
            null,
            { ko: "납기 1주 < 리드타임 2주", en: "1-week deadline vs. 2-week lead time", zh: "交期 1 周 < 交付周期 2 周" },
            { ko: "2차 활용 무제한 → 12개월 제안", en: "Unlimited usage → propose 12 months", zh: "无限期使用 → 建议 12 个月" },
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
              { k: { ko: "예산", en: "Budget", zh: "预算" }, v: { ko: "요청 400만원 → 최소 900만원 역제안", en: "Requested ₩4M → counter at ₩9M minimum", zh: "需求 400 万 → 反提案最低 900 万" } },
              { k: { ko: "특약", en: "Terms", zh: "特别条款" }, v: { ko: "2차 활용 무제한 → 12개월로 조정 제안", en: "Unlimited usage → propose 12 months", zh: "无限期使用 → 建议改为 12 个月" } },
              { k: { ko: "보완 항목", en: "To fix", zh: "待补充" }, v: { ko: "카테고리 · 예산 · 납기 · 활용 범위 4건", en: "Category, budget, deadline, usage — four items", zh: "品类 · 预算 · 交期 · 使用范围 四项" } },
            ],
          },
        },
        {
          name: { ko: "금액 승인 게이트", en: "Amount approval gate", zh: "金额审批关卡" },
          hint: { ko: "정지 2건 · 사람 승인", en: "2 stops · human approval", zh: "2 条卡住 · 需人工审批" },
          request: {
            ko: "“Yeoul Color 색조 라인 런칭인데 크리에이터 4명, 6주로 진행하고 싶어요. 예산은 2,400만원이고 선정산 30% + 성과형(CPA)으로 정산하겠습니다. 계약금은 다음 주까지 확정 부탁드려요.”",
            en: "“Yeoul Color is launching a color makeup line: four creators over six weeks. Budget is ₩24M, settled as 30% advance plus performance (CPA). Please confirm the contract amount by next week.”",
            zh: "“Yeoul Color 要上市彩妆线，想找四位创作者、为期六周。预算 2,400 万韩元，按 30% 预付 + 效果（CPA）结算。合同金额请在下周前确认。”",
          },
          extracted: [
            { ko: "뷰티 · 색조", en: "Beauty · Color makeup", zh: "美妆 · 彩妆" },
            { ko: "2,400만원 · 성과형", en: "₩24,000,000 · performance-based", zh: "2,400 万韩元 · 效果型" },
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
            { ko: "2차 활용 6개월 요청 → 12개월 협의", en: "6-month ask → negotiating 12 months", zh: "要求 6 个月 → 协商 12 个月" },
            null,
            { ko: "선정산 30% + 성과형 CPA — 자동 확정 불가", en: "30% advance + CPA — cannot auto-commit", zh: "30% 预付 + CPA — 不能自动定案" },
            null,
            { ko: "2,400만원 ≥ 게이트 기준 2,000만원", en: "₩24M ≥ ₩20M gate threshold", zh: "2,400 万 ≥ 2,000 万阈值" },
          ],
          draft: {
            status: "hold",
            title: { ko: "Yeoul Color 색조 라인 캠페인 제안서 v1 (보류)", en: "Yeoul Color color line proposal v1 (on hold)", zh: "Yeoul Color 彩妆线提案 v1（暂缓）" },
            lines: [
              { k: { ko: "기간", en: "Period", zh: "周期" }, v: { ko: "6주", en: "6 weeks", zh: "6 周" } },
              { k: { ko: "크리에이터", en: "Creators", zh: "创作者" }, v: { ko: "루나킴 · 이소민 · 김단아 · 서하윤", en: "Luna Kim · Lee Somin · Kim Dana · Seo Hayun", zh: "Luna Kim · 李昭旻 · 金丹雅 · 徐河允" } },
              { k: { ko: "예산", en: "Budget", zh: "预算" }, v: { ko: "2,400만원 · 선정산 30% + CPA", en: "₩24M · 30% advance + CPA", zh: "2,400 万 · 30% 预付 + CPA" } },
              { k: { ko: "특약", en: "Terms", zh: "特别条款" }, v: { ko: "2차 활용 12개월 · 성과 측정 링크 4종", en: "12-month usage · four tracking links", zh: "二次使用 12 个月 · 4 个效果链接" } },
              { k: { ko: "승인 필요", en: "Needs approval", zh: "需审批" }, v: { ko: "금액 게이트(2,000만원 초과) · 성과형 정산", en: "Amount gate (over ₩20M) · performance settlement", zh: "金额关卡（超 2,000 万）· 效果型结算" } },
            ],
          },
        },
      ],
    },

    dashboard: {
      title: {
        ko: "광고주 응대 실시간 트래킹 보드",
        en: "Live advertiser-response tracking board",
        zh: "广告主跟进实时看板",
      },
      lead: {
        ko: "상태 버튼을 누르면 목록이 바로 걸러지고, 행을 누르면 그 건의 요약과 다음 액션이 열립니다.",
        en: "Filter by stage and the list re-sorts immediately; open a row to see its summary and next action.",
        zh: "点状态按钮就立刻筛选，点一行就展开该活动的摘要和下一步。",
      },
      filterAll: { ko: "전체", en: "All", zh: "全部" },
      kpiTotal: { ko: "전체 캠페인", en: "Campaigns", zh: "全部活动" },
      kpiApprove: { ko: "사람 승인 대기", en: "Awaiting approval", zh: "待人工审批" },
      kpiSoon: { ko: "D-3 이내 마감", en: "Due within 3 days", zh: "3 天内到期" },
      listHead: { ko: "캠페인", en: "Campaigns", zh: "活动" },
      selectHint: {
        ko: "행을 누르면 요약과 다음 액션이 여기에 열립니다.",
        en: "Open a row to see its summary and next action here.",
        zh: "点开一行，摘要和下一步会显示在这里。",
      },
      nextLabel: { ko: "다음 액션", en: "Next action", zh: "下一步" },
      historyLabel: { ko: "최근 기록", en: "Recent history", zh: "最近记录" },
      amountLabel: { ko: "금액", en: "Amount", zh: "金额" },
      dueLabel: { ko: "마감", en: "Due", zh: "截止" },
      creatorLabel: { ko: "크리에이터", en: "Creator", zh: "创作者" },
      dueNone: { ko: "종료", en: "Closed", zh: "已结束" },
      statuses: [
        { id: "new", tone: "info", label: { ko: "신규 문의", en: "New inquiry", zh: "新咨询" } },
        { id: "rate", tone: "warn", label: { ko: "단가 협의", en: "Rate talk", zh: "报价协商" } },
        { id: "fit", tone: "info", label: { ko: "적합도 검토", en: "Fit review", zh: "适配审查" } },
        { id: "approve", tone: "halt", label: { ko: "승인 대기", en: "Awaiting approval", zh: "待审批" } },
        { id: "contract", tone: "pass", label: { ko: "계약 진행", en: "Contracting", zh: "签约中" } },
        { id: "settle", tone: "warn", label: { ko: "정산 대기", en: "Awaiting payment", zh: "待结算" } },
        { id: "done", tone: "mute", label: { ko: "완료", en: "Closed", zh: "已完成" } },
      ],
      campaigns: [
        {
          id: "c1", brand: "Dalmuri Seoul", creator: { ko: "서하윤", en: "Seo Hayun", zh: "徐河允" },
          status: "new", dday: 1,
          amount: { ko: "1,800만원", en: "₩18,000,000", zh: "1,800 万韩元" },
          summary: { ko: "세럼 런칭 · 뷰티 3팀 · 4주", en: "Serum launch · 3 beauty creators · 4 weeks", zh: "精华上市 · 3 位美妆创作者 · 4 周" },
          next: { ko: "요청 원문에서 조건 추출 → 초안 v1 검토", en: "Extract terms from the message → review draft v1", zh: "从原始需求抽取条件 → 审阅初稿 v1" },
          history: [
            { ko: "11.21 요청 메일 수신", en: "11.21 request received", zh: "11.21 收到需求邮件" },
            { ko: "11.21 자동 판정: 12개 통과", en: "11.21 auto-check: 12 pass", zh: "11.21 自动判定：12 条通过" },
            { ko: "11.21 초안 v1 생성", en: "11.21 draft v1 generated", zh: "11.21 生成初稿 v1" },
          ],
        },
        {
          id: "c2", brand: "Bamkkot Living", creator: { ko: "민지아", en: "Min Jia", zh: "闵智雅" },
          status: "rate", dday: 2,
          amount: { ko: "400만원", en: "₩4,000,000", zh: "400 万韩元" },
          summary: { ko: "홈프래그런스 · 예산 미달 · 경고 4건", en: "Home fragrance · under budget · 4 warnings", zh: "家居香氛 · 预算不足 · 4 条警告" },
          next: { ko: "최소 단가 기준으로 역제안 회신", en: "Reply with a counter-offer at the minimum rate", zh: "按最低报价回复反提案" },
          history: [
            { ko: "11.20 요청 수신", en: "11.20 request received", zh: "11.20 收到需求" },
            { ko: "11.20 예산 미달 경고 4건", en: "11.20 four budget warnings raised", zh: "11.20 提出 4 条预算警告" },
            { ko: "11.21 역제안 초안 작성 중", en: "11.21 counter-offer draft in progress", zh: "11.21 反提案初稿编写中" },
          ],
        },
        {
          id: "c3", brand: "Yeoul Color", creator: { ko: "루나킴", en: "Luna Kim", zh: "Luna Kim" },
          status: "fit", dday: 3,
          amount: { ko: "2,400만원", en: "₩24,000,000", zh: "2,400 万韩元" },
          summary: { ko: "색조 라인 · 4팀 · 6주 · 성과형", en: "Color line · 4 creators · 6 weeks · CPA", zh: "彩妆线 · 4 位创作者 · 6 周 · CPA" },
          next: { ko: "최근 90일 경쟁 브랜드 노출 확인", en: "Check competing-brand exposure in the last 90 days", zh: "核查近 90 天竞品露出" },
          history: [
            { ko: "11.19 요청 수신", en: "11.19 request received", zh: "11.19 收到需求" },
            { ko: "11.19 후보 6팀 추림", en: "11.19 shortlisted 6 creators", zh: "11.19 筛出 6 位候选" },
            { ko: "11.20 노출 이력 대조 중", en: "11.20 cross-checking exposure history", zh: "11.20 正在核对露出记录" },
          ],
        },
        {
          id: "c4", brand: "Saeum Body", creator: { ko: "하리안", en: "Han Harian", zh: "河莉安" },
          status: "approve", dday: 1,
          amount: { ko: "950만원", en: "₩9,500,000", zh: "950 万韩元" },
          summary: { ko: "바디케어 · 2팀 · 특약 1건", en: "Body care · 2 creators · 1 special term", zh: "身体护理 · 2 位创作者 · 1 项特约" },
          next: { ko: "금액 게이트 — 사람 승인 요청 후 발송", en: "Amount gate — request human approval, then send", zh: "金额关卡 — 请人工审批后发送" },
          history: [
            { ko: "11.18 초안 v2 확정", en: "11.18 draft v2 finalized", zh: "11.18 初稿 v2 定稿" },
            { ko: "11.19 금액 게이트 발동", en: "11.19 amount gate triggered", zh: "11.19 触发金额关卡" },
            { ko: "11.20 승인자 지정", en: "11.20 approver assigned", zh: "11.20 指定审批人" },
          ],
        },
        {
          id: "c5", brand: "Munu Atelier", creator: { ko: "유하린", en: "Yoo Harin", zh: "柳河潾" },
          status: "contract", dday: 4,
          amount: { ko: "1,200만원", en: "₩12,000,000", zh: "1,200 万韩元" },
          summary: { ko: "액세서리 · 1팀 · 5주", en: "Accessories · 1 creator · 5 weeks", zh: "配饰 · 1 位创作者 · 5 周" },
          next: { ko: "2차 활용 6개월 특약 확정", en: "Confirm the 6-month usage clause", zh: "确认 6 个月二次使用条款" },
          history: [
            { ko: "11.15 조건 합의", en: "11.15 terms agreed", zh: "11.15 条件达成一致" },
            { ko: "11.17 계약서 초안 발송", en: "11.17 contract draft sent", zh: "11.17 发出合同初稿" },
            { ko: "11.20 특약 1건 조정", en: "11.20 one clause adjusted", zh: "11.20 调整 1 项条款" },
          ],
        },
        {
          id: "c6", brand: "Garam Lab", creator: { ko: "이소민", en: "Lee Somin", zh: "李昭旻" },
          status: "settle", dday: 6,
          amount: { ko: "780만원", en: "₩7,800,000", zh: "780 万韩元" },
          summary: { ko: "스킨케어 · 1팀 · 종료 후 정산", en: "Skincare · 1 creator · settlement after wrap", zh: "护肤 · 1 位创作者 · 结束后结算" },
          next: { ko: "세금계산서 · 정산 명세 대조", en: "Reconcile the invoice and the settlement statement", zh: "核对发票与结算明细" },
          history: [
            { ko: "11.08 캠페인 종료", en: "11.08 campaign wrapped", zh: "11.08 活动结束" },
            { ko: "11.12 결과 리포트 제출", en: "11.12 results report delivered", zh: "11.12 提交结果报告" },
            { ko: "11.20 정산 명세 수신", en: "11.20 settlement statement received", zh: "11.20 收到结算明细" },
          ],
        },
        {
          id: "c7", brand: "Kkotdam Atelier", creator: { ko: "김단아", en: "Kim Dana", zh: "金丹雅" },
          status: "done", dday: null,
          amount: { ko: "620만원", en: "₩6,200,000", zh: "620 万韩元" },
          summary: { ko: "플라워 · 1팀 · 3주", en: "Flowers · 1 creator · 3 weeks", zh: "花艺 · 1 位创作者 · 3 周" },
          next: { ko: "결과 리포트 아카이브 후 종료 처리", en: "Archive the results report and close", zh: "归档结果报告并关闭" },
          history: [
            { ko: "10.30 캠페인 종료", en: "10.30 campaign wrapped", zh: "10.30 活动结束" },
            { ko: "11.04 리포트 아카이브", en: "11.04 report archived", zh: "11.04 报告归档" },
            { ko: "11.04 종료 처리", en: "11.04 marked closed", zh: "11.04 关闭处理" },
          ],
        },
      ],
    },

    outreach: {
      title: {
        ko: "해외 파트너 아웃리치 & 메일 자동화 트래커",
        en: "Global partner outreach & mail automation tracker",
        zh: "海外合作方外联与邮件自动化跟踪",
      },
      lead: {
        ko: "파트너 5곳의 발송 단계를 한 화면에서 보고, 같은 메일이 KO/EN/ZH로 어떻게 나가는지 바로 바꿔 확인합니다.",
        en: "Five partners and where each mail stands, plus the same outreach mail switched between KO, EN and ZH.",
        zh: "一屏看清 5 家合作方目前走到哪一步，并可在 KO / EN / ZH 之间切换同一封外联邮件。",
      },
      partnerHead: { ko: "파트너 발송 현황", en: "Partner status", zh: "合作方发送状态" },
      templateHead: { ko: "아웃리치 템플릿 미리보기", en: "Outreach template preview", zh: "外联模板预览" },
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
      nextLabel: { ko: "다음 액션", en: "Next action", zh: "下一步" },
      subjectLabel: { ko: "제목", en: "Subject", zh: "主题" },
      stages: [
        { id: "idle", label: { ko: "미발송", en: "Not sent", zh: "未发送" } },
        { id: "sent", label: { ko: "1차 발송", en: "First mail sent", zh: "首封已发" } },
        { id: "followup", label: { ko: "팔로업 대기", en: "Follow-up queued", zh: "待跟进" } },
        { id: "replied", label: { ko: "회신 수신", en: "Reply received", zh: "已回复" } },
        { id: "meeting", label: { ko: "미팅 조율", en: "Scheduling a call", zh: "约会议" } },
      ],
      partners: [
        {
          id: "p1", name: "Northlight Creators", stage: "replied",
          region: { ko: "미국 · 북미 뷰티 40팀", en: "US · 40 beauty creators", zh: "美国 · 40 位美妆创作者" },
          next: { ko: "12월 파일럿 1건 조건 회신", en: "Reply with terms for one December pilot", zh: "回复 12 月 1 个试点项目的条件" },
        },
        {
          id: "p2", name: "Halcyon Loop Media", stage: "meeting",
          region: { ko: "영국 · 캠페인 운영 대행", en: "UK · campaign operations", zh: "英国 · 活动运营代理" },
          next: { ko: "화요일 20:00 온라인 미팅 확정", en: "Confirm Tuesday 20:00 online call", zh: "确认周二 20:00 线上会议" },
        },
        {
          id: "p3", name: "Tidewater Talents", stage: "followup",
          region: { ko: "싱가포르 · 아시아 크리에이터 풀", en: "Singapore · Asia creator pool", zh: "新加坡 · 亚洲创作者池" },
          next: { ko: "1차 발송 5일 경과 · 팔로업 발송", en: "Five days since first mail · send follow-up", zh: "首封已过 5 天 · 发送跟进" },
        },
        {
          id: "p4", name: "Maple Quill Studio", stage: "sent",
          region: { ko: "캐나다 · 라이프스타일 제작사", en: "Canada · lifestyle studio", zh: "加拿大 · 生活方式制作公司" },
          next: { ko: "1차 발송 완료 · 3일 뒤 팔로업 예약", en: "First mail sent · follow-up in three days", zh: "首封已发 · 3 天后跟进" },
        },
        {
          id: "p5", name: "Orchid Brick Agency", stage: "idle",
          region: { ko: "대만 · 뷰티 커머스", en: "Taiwan · beauty commerce", zh: "台湾 · 美妆电商" },
          next: { ko: "담당자 확인 후 ZH 템플릿으로 발송", en: "Confirm the contact, then send the ZH template", zh: "确认对接人后用中文模板发送" },
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
          subject: "【合作提案】把创作者营销运营瓶颈写成规则的实践 — 尹彩恩",
          body: "您好，[合作方] 的负责同事：\n\n我在创作者营销运营一线做了四年多，主要把反复出现的运营瓶颈整理成规则和自动化。最近我搭了一套工作流，把从需求接收到适配判定、提案初稿原本要一小时的工作，压缩到 3~5 分钟的审阅，并把判断标准写进文档，不再只留在某个人的记忆里。\n\n与海外合作方，我想先对齐两件事：\n1. 用文档互换创作者资源与活动条件的标准\n2. 韩语、英语、中文三语外联模板与跟进节奏的运营\n\n能否约 20 分钟通话？下周二上午或周四下午都可以。\n\n谢谢！\n尹彩恩 | chaeeunyoon@gmail.com",
        },
      },
    },

    evidence: {
      title: {
        ko: "같은 구조를 따로 만든 평가 데모의 기록",
        en: "Records from a separate evaluation demo on the same idea",
        zh: "另一个同思路评测演示的记录",
      },
      lead: {
        ko: "화면 데모는 흐름을 보여주고, 숫자는 따로 잽니다. 아래는 가상 대화 10건으로 만든 에이전트 평가 데모에서 실제로 측정한 값입니다.",
        en: "The screens show the flow; the numbers are measured separately. These come from an agent evaluation demo built on ten fictional conversations.",
        zh: "界面演示流程，数字另行测量。下面是在 10 段虚构对话构成的智能体评测演示中实测的值。",
      },
      stats: [
        {
          value: "9/10",
          label: { ko: "세 칸 동시 일치", en: "All three fields correct", zh: "三项同时正确" },
          sub: { ko: "누구 차례 · 언제까지 · 판단 필요", en: "Whose turn · due date · needs judgment", zh: "轮到谁 · 截止时间 · 需判断" },
        },
        {
          value: "3/3",
          label: { ko: "멈춰야 할 때 멈춤", en: "Stopped when it should", zh: "该停时停下" },
          sub: { ko: "잘못 멈춤 0/1", en: "False stops 0/1", zh: "误停 0/1" },
        },
        {
          value: "8–10",
          label: { ko: "같은 설정 두 번 실행의 폭", en: "Spread across two runs", zh: "同设置两次运行的波动" },
          sub: { ko: "10점 만점 · 흔들린 자리", en: "Out of 10 · it moves", zh: "满分 10 · 会晃动" },
        },
      ],
      note: {
        ko: "한 번 잰 비교는 방향만 가리킵니다. 그래서 '멈출지 말지'는 여섯 번 측정 모두 3/3이었지만, 정확도는 폭과 함께 읽어야 한다고 적어 두었습니다.",
        en: "A single comparison only points a direction. The stop decision held at 3/3 across six measurements, but accuracy has to be read with its spread.",
        zh: "只跑一次的比较只能指方向。因此“该不该停”六次测量都是 3/3，而准确度必须连同波动一起读。",
      },
    },
  },

  /* ---------- JUDGMENT LAYERS ---------- */
  layers: [
    {
      tag: "01 · MODEL",
      title: { ko: "모델이 판단", en: "The model judges", zh: "模型判断" },
      desc: {
        ko: "규칙으로 다 적을 수 없는 영역. 비정형 텍스트를 읽고, 초안을 만들고, 애매한 것을 분류합니다.",
        en: "What cannot be fully written as rules: reading unstructured text, drafting, classifying the ambiguous.",
        zh: "无法完全写成规则的领域：读懂非结构化文本、生成初稿、对模糊的内容分类。",
      },
      example: {
        ko: "요청 의도 파악 · 초안 작성 · 지표 해석",
        en: "Intent reading · drafting · metric interpretation",
        zh: "理解需求意图 · 撰写初稿 · 解读指标",
      },
    },
    {
      tag: "02 · RULES",
      title: { ko: "규칙으로 고정", en: "Rules hold it", zh: "用规则固化" },
      desc: {
        ko: "같은 판단을 두 번 하지 않도록 문서와 코드에 박아 둡니다. 사람이 기억하지 않아도 되게 만드는 일입니다.",
        en: "Judgments I should never make twice get fixed in documents and code, so no one has to remember them.",
        zh: "同一种判断不做第二次，把它写进文档和代码，让人不必靠记忆。",
      },
      example: {
        ko: "판단 규칙 12개 · 검수 체크리스트 · 금지선 검사기",
        en: "12 rules · review checklists · guard checks",
        zh: "12 条判断规则 · 验收清单 · 底线检查器",
      },
    },
    {
      tag: "03 · HUMAN",
      title: { ko: "사람이 승인", en: "A human approves", zh: "人来审批" },
      desc: {
        ko: "돈, 사람, 외부로 나가는 일은 자동으로 확정하지 않습니다. 멈추는 지점을 설계에 넣습니다.",
        en: "Money, people and anything leaving the building never auto-commits. The stop is part of the design.",
        zh: "涉及钱、人和对外的事不自动定案。把“停下来”的点写进设计里。",
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
        ko: "모델이 할 일, 규칙으로 고정할 일, 사람이 승인할 일을 구조로 분리합니다. 그래야 틀렸을 때 어디를 고쳐야 하는지가 명확합니다.",
        en: "Model work, fixed rules and human approval are separated in the structure itself, so when something is wrong it is obvious where to fix it.",
        zh: "把模型要做的、规则要固化的、人要审批的分在结构里。这样出问题时，改哪里一目了然。",
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
        ko: "새 입력칸을 요구하는 자동화는 아무도 쓰지 않습니다. 사람이 이미 쓰는 흐름에서 읽고, 적는 일이 되지 않게 만듭니다.",
        en: "Automation that demands a new field goes unused. Read from the flow people already use, and keep writing from becoming the job.",
        zh: "要求人填新字段的自动化没人会用。从人们本来就在用的流程里读取，别让填写本身变成工作。",
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
        ko: "금지선과 예외는 문서와 검사기로 옮깁니다. 담당자가 바뀌어도 기준이 그 자리에 남습니다.",
        en: "Prohibitions and exceptions move into documents and guards, so the standard stays put when the owner changes.",
        zh: "底线和例外移进文档和检查器。换人之后标准仍留在原地。",
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
          ko: "뷰티·패션 크리에이터 최대 30팀 운영",
          en: "Running up to 30 beauty and fashion creator teams",
          zh: "独自运营最多 30 个美妆、时尚创作者团队",
        },
        {
          ko: "비정형 요청을 처리하는 업무 AI 에이전트 설계·운영, 판단 규칙 12개 문서화, 팀 공용 이관",
          en: "Designing and running a work AI agent for unstructured requests; 12 rules documented and handed to the team",
          zh: "设计并运营处理非结构化请求的 AI 工作智能体，12 条判断规则文档化并移交团队共用",
        },
      ],
    },
    {
      period: { ko: "2024.11 – 2026.01", en: "Nov 2024 – Jan 2026", zh: "2024.11 – 2026.01" },
      org: { ko: "아이스크리에이티브", en: "Ice Creative", zh: "Ice Creative" },
      role: { ko: "크리에이터광고사업팀", en: "Creator Ads Team", zh: "创作者广告团队" },
      bullets: [
        {
          ko: "YouTube Data API + LLM 채널 성장 분석 파이프라인 구축 (2주 → 2일)",
          en: "Built a YouTube Data API + LLM channel growth pipeline (2 weeks to 2 days)",
          zh: "搭建 YouTube Data API + LLM 频道增长分析管道（两周 → 两天）",
        },
        {
          ko: "3사 협업 AI 립싱크 글로벌 서브채널 @haenibeautyEN 론칭 PM (4주 → 2일)",
          en: "Launch PM for the 3-party AI lipsync subchannel @haenibeautyEN (4 weeks to 2 days)",
          zh: "三方协作的 AI 对口型全球子频道 @haenibeautyEN 上线 PM（四周 → 两天）",
        },
      ],
    },
    {
      period: { ko: "2024.06 – 2024.11", en: "Jun 2024 – Nov 2024", zh: "2024.06 – 2024.11" },
      org: { ko: "올투원", en: "Alltoone", zh: "Alltoone" },
      role: { ko: "프리랜서", en: "Freelance", zh: "自由职业" },
      bullets: [
        {
          ko: "서울경제신문 AI 영상 제작 자동화 — 1일 1건 → 30분 1건, 팀원 5인 이관",
          en: "AI video production automation for Seoul Economic Daily — 1 a day to 1 per 30 min, handed to 5 people",
          zh: "首尔经济新闻 AI 视频制作自动化——一天一条 → 30 分钟一条，交接给 5 位团队成员",
        },
        {
          ko: "저작권 가이드라인과 검수 체크리스트 수립",
          en: "Set rights guidelines and a review checklist",
          zh: "制定版权指南与审核清单",
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
        {
          ko: "현장에서 반복되는 병목을 처음 숫자로 보기 시작한 시기",
          en: "Where I first started measuring the bottlenecks that repeat on the ground",
          zh: "第一次开始用数字去看现场反复出现的瓶颈——我的起点",
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

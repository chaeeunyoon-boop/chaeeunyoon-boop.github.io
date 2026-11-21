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
            ko: "금액 관련 인간 승인 게이트 제안 → 팀 채택",
            en: "Proposed human approval gate for money — adopted by the team",
            zh: "提出金额类人工审批关卡 → 团队采纳",
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

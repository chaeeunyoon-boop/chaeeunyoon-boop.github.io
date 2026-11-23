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
      ko: "반복 병목을 발굴해 AS-IS를 TO-BE로 재설계하고 AI 워크플로우·내부 도구로 구축해 온 윤채은의 포트폴리오.",
      en: "Chaeeun Yun's portfolio: finding repeated bottlenecks, redesigning AS-IS into TO-BE, building AI workflows and internal tools.",
      zh: "Chaeeun Yun 的作品集：识别重复瓶颈，把 AS-IS 重构为 TO-BE，用 AI 工作流与内部工具搭起来。",
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
      ko: "케이스의 구조를 직접 눌러보는 화면으로. 데이터는 모두 가상.",
      en: "The cases, as screens you can click. All data is made up.",
      zh: "把案例的结构做成可点击的界面。数据全部虚构。",
    },
    demosFootnote: {
      ko: "모든 이름·금액은 가상 · 서버 저장·실제 발송 없음",
      en: "All names and amounts fictional · no storage, nothing sent",
      zh: "所有名称与金额均为虚构 · 不保存、不实际发送",
    },
    navPrinciples: { ko: "원칙", en: "Principles", zh: "原则" },
    navCareer: { ko: "경력", en: "Career", zh: "履历" },
    navContact: { ko: "연락", en: "Contact", zh: "联系" },

    heroStatus: {
      ko: "온더룩 MCN팀 · 반복 병목을 AI 워크플로우로",
      en: "MCN team at Onthelook · repeated bottlenecks into AI workflows",
      zh: "Onthelook MCN 团队 · 把重复瓶颈变成 AI 工作流",
    },
    heroLine1: { ko: "반복 병목을 발굴해", en: "Find the repeated bottlenecks.", zh: "识别重复出现的瓶颈" },
    heroLine2: { ko: "AS-IS를 TO-BE로 재설계하고", en: "Redesign AS-IS into TO-BE.", zh: "把 AS-IS 重构为 TO-BE" },
    heroLine3: {
      ko: "작동하는 AI 워크플로우로 만듭니다.",
      en: "Build it into AI workflows that actually run.",
      zh: "做成真正运行的 AI 工作流。",
    },
    heroSub: {
      ko: "4년 4개월 · 지그재그·무신사·올리브영·MAC 협업 · AS-IS → TO-BE 재설계 · 팀 공용 표준까지",
      en: "4 years 4 months · Zigzag, Musinsa, Olive Young, MAC · AS-IS → TO-BE · down to a team-wide standard",
      zh: "4 年 4 个月 · Zigzag、Musinsa、Olive Young、MAC 合作 · AS-IS → TO-BE 重构 · 直到团队共用标准",
    },
    heroCta1: { ko: "케이스 3건 보기", en: "See the three cases", zh: "查看 3 个案例" },
    heroCta2: { ko: "연락하기", en: "Get in touch", zh: "联系我" },

    metricHead: { ko: "임팩트 · AS-IS → TO-BE", en: "IMPACT · AS-IS → TO-BE", zh: "成效 · AS-IS → TO-BE" },
    metricBadge: { ko: "현업 적용 결과", en: "Applied in live work", zh: "业务落地成果" },
    metricFoot: {
      ko: "* 실제 업무에서 운영한 결과입니다.",
      en: "* Figures from work actually run in production.",
      zh: "* 来自实际工作中的运营结果。",
    },

    casesTitle: { ko: "AS-IS 병목 → 재설계 → 임팩트", en: "AS-IS bottleneck → redesign → impact", zh: "AS-IS 瓶颈 → 重构 → 成效" },
    casesLead: {
      ko: "세 건 모두 AS-IS 병목 → 재설계 → 결과 순서.",
      en: "All three: AS-IS bottleneck → redesign → result.",
      zh: "三件都按 AS-IS 瓶颈 → 重构 → 结果 的顺序。",
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
      ko: "AI 판단 · 운영 기준 · 사람 승인 — 셋으로 나누는 것이 모든 재설계의 출발점.",
      en: "AI judgment, operating rules, human approval — splitting these three is where every redesign starts.",
      zh: "AI 判断、运营标准、人工审批 —— 把这三者分开，是每次重构的起点。",
    },
    stackTitle: { ko: "Stack", en: "Stack", zh: "Stack" },
    stackNote: {
      ko: "실제로 업무에 쓰는 것들",
      en: "What I actually use at work",
      zh: "真正在工作中使用的东西",
    },

    domainTitle: {
      ko: "인플루언서 마케팅 도메인",
      en: "The influencer-marketing domain",
      zh: "网红营销领域",
    },
    domainNote: {
      ko: "4년 4개월 · 뷰티·패션",
      en: "4 yr 4 mo · beauty & fashion",
      zh: "4 年 4 个月 · 美妆·时尚",
    },
    careerTitle: {
      ko: "현장에서 배운 것을, 다음 현장의 구조로.",
      en: "What I learned on the ground, turned into structure for the next one.",
      zh: "把现场学到的东西，变成下一个现场的结构。",
    },
    careerLead: {
      ko: "총 4년 4개월 · 크리에이터 마케팅 운영 → AS-IS 재설계 · AI 워크플로우 구축",
      en: "4 years 4 months · creator marketing operations → AS-IS redesign, AI workflow building",
      zh: "总经历 4 年 4 个月 · 创作者营销运营 → AS-IS 重构与 AI 工作流搭建",
    },

    contactTitle: {
      ko: "막힌 현장이 있다면, 그 이야기부터.",
      en: "If something is stuck where you work, start there.",
      zh: "如果你有卡住的地方，先讲那段。",
    },
    contactLead: {
      ko: "반복 병목 발굴 · AS-IS → TO-BE 재설계 · AI 워크플로우 구축 · 운영 기준 문서화. 함께할 팀을 찾습니다.",
      en: "Finding the bottleneck · AS-IS → TO-BE redesign · building AI workflows · documenting the standard. Looking for a team to do it with.",
      zh: "找出瓶颈 · AS-IS → TO-BE 重构 · 搭建 AI 工作流 · 写成运营标准。正在寻找一起做的团队。",
    },
    footerNote: { ko: "정적 HTML/CSS/JS · 빌드 없음", en: "Static HTML/CSS/JS · no build step", zh: "静态 HTML/CSS/JS · 无需构建" },
    footerMeta: {
      ko: "모든 수치는 실제 업무 기록 기준 · 회사 내부 자료·비공개 데이터 없음",
      en: "All figures from actual work records · no company-internal or private data",
      zh: "所有数字基于实际工作记录 · 不含公司内部与非公开数据",
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
      before: { ko: "카톡·메일", en: "chat & mail", zh: "聊天·邮件" },
      after: { ko: "한 화면", en: "one screen", zh: "一屏" },
      label: { ko: "광고 운영 현황 · 실시간 운영 대시보드", en: "Campaign status · live ops dashboard", zh: "广告运营进度 · 实时看板" },
    },
  ],

  /* ---------- CASE STUDIES ---------- */
  cases: [
    {
      id: "ops-dashboard",
      no: "01",
      tag: {
        ko: "내부 도구 구축 · 동료·TF 협업",
        en: "Internal tool · team collaboration",
        zh: "内部工具 · 同事·TF 协作",
      },
      title: {
        ko: "광고 건별 실시간 운영 대시보드",
        en: "Real-time operations dashboard, per campaign",
        zh: "每个广告的实时运营看板",
      },
      org: { ko: "온더룩 · MCN팀", en: "Onthelook · MCN Team", zh: "Onthelook · MCN 团队" },
      role: { ko: "설계 · 구축 · 팀 적용", en: "Design, build, rollout", zh: "设计 · 搭建 · 团队落地" },
      period: { ko: "2026.02 – 현재", en: "Feb 2026 – Present", zh: "2026.02 – 至今" },
      oneLiner: {
        ko: "카톡·메일·메모에 흩어진 응대 현황 → 7단계 한 화면. 팀과 TF가 같은 화면을 봅니다.",
        en: "Status scattered across chat, mail and notes → seven stages on one screen. Team and task force see the same view.",
        zh: "散落在聊天、邮件、备忘里的进度 → 七个阶段收进一屏。团队与 TF 看同一屏。",
      },
      problem: {
        bullets: [
          {
            ko: "응대 내역이 카톡·메일·개인 메모에 분산 — 담당자만 앎",
            en: "Notes scattered across chat, mail and memos — only the owner knows",
            zh: "记录散落在聊天、邮件、备忘里 — 只有负责人知道",
          },
          {
            ko: "회의마다 같은 확인 반복 · 마감·승인 대기 안 보임",
            en: "The same check every meeting; deadlines and approvals invisible",
            zh: "每次会议都在重复确认，截止与待审批看不见",
          },
          {
            ko: "담당자가 바뀌면 처음부터 다시 설명",
            en: "When the owner changes, explaining from scratch",
            zh: "负责人一换就要从头再讲",
          },
        ],
      },
      rules: {
        flow: [
          {
            label: { ko: "신규 문의", en: "New inquiry", zh: "新咨询" },
            sub: { ko: "접수 시점 기록", en: "Logged on arrival", zh: "接收时记录" },
          },
          {
            label: { ko: "금액 협의", en: "Amount talks", zh: "金额协商" },
            sub: { ko: "예산·조건 조율", en: "Budget, terms", zh: "预算 · 条件" },
          },
          {
            label: { ko: "적합성 검토", en: "Fit check", zh: "匹配审核" },
            sub: { ko: "12개 기준 확인", en: "12 criteria checked", zh: "12 条标准确认" },
          },
          {
            label: { ko: "사람 승인", en: "Human approval", zh: "人工审批" },
            sub: { ko: "고액·예외만", en: "High value, exceptions", zh: "仅大额与例外" },
            gate: true,
          },
          {
            label: { ko: "계약 진행", en: "Contracting", zh: "签约中" },
            sub: { ko: "일정·권리 확정", en: "Dates, rights", zh: "排期 · 权利" },
          },
          {
            label: { ko: "대금 지급 대기", en: "Awaiting payment", zh: "待付款" },
            sub: { ko: "정산 확인", en: "Settlement check", zh: "结算确认" },
          },
          {
            label: { ko: "완료", en: "Closed", zh: "已完成" },
            sub: { ko: "결과 보고서 보관", en: "Report archived", zh: "归档结果报告" },
          },
        ],
        notes: [
          { ko: "상단 숫자 자동 집계", en: "Counts auto-summed", zh: "顶部数字自动统计" },
          { ko: "담당자 변경 시 링크 1개 인수인계", en: "Owner change = one link", zh: "换负责人时一个链接交接" },
          { ko: "새 입력 칸 없음", en: "No new fields", zh: "不新增填写栏" },
        ],
      },
      impact: {
        metrics: [
          {
            before: { ko: "카카오톡·메일", en: "Chat & mail", zh: "聊天·邮件" },
            after: { ko: "한 화면", en: "One screen", zh: "一屏" },
            label: { ko: "응대 현황", en: "Campaign status", zh: "沟通进度" },
          },
          {
            before: { ko: "회의마다 확인", en: "Checked every meeting", zh: "每次会议都确认" },
            after: { ko: "보고 판단", en: "Decided on sight", zh: "看到就判断" },
            label: { ko: "진행 판단", en: "Status checks", zh: "进度判断" },
          },
          {
            before: { ko: "구두 인수인계", en: "Verbal handover", zh: "口头交接" },
            after: { ko: "링크 하나", en: "One link", zh: "一个链接" },
            label: { ko: "담당자 변경", en: "Owner change", zh: "换负责人" },
          },
        ],
      },
    },

    {
      id: "global-outreach",
      no: "02",
      tag: {
        ko: "글로벌 확장 · 아웃리치",
        en: "Global expansion · outreach",
        zh: "海外拓展 · 外联",
      },
      title: {
        ko: "글로벌 파트너 아웃리치 자동화 — KO·EN·ZH + 발송 전 검토",
        en: "Global partner outreach — KO/EN/ZH with a check before sending",
        zh: "全球合作伙伴外联自动化 — KO·EN·ZH 切换 + 发送前确认",
      },
      org: { ko: "온더룩 · MCN팀", en: "Onthelook · MCN Team", zh: "Onthelook · MCN 团队" },
      role: { ko: "설계 · 구축 · 운영", en: "Design, build, run", zh: "设计 · 搭建 · 运营" },
      period: { ko: "2026.02 – 현재", en: "Feb 2026 – Present", zh: "2026.02 – 至今" },
      oneLiner: {
        ko: "언어마다 새로 쓰던 해외 메일 → KO·EN·ZH 한 벌 + 발송 전 검토. 컨택·팔로업이 흐름으로.",
        en: "Mails rewritten per language → one set in KO/EN/ZH with a review before sending. Outreach runs as a flow.",
        zh: "每种语言都要重写的海外邮件 → KO·EN·ZH 一套 + 发送前确认。联络与跟进靠流程运转。",
      },
      problem: {
        bullets: [
          {
            ko: "언어마다 메일 새로 작성 — 톤도 매번 다름",
            en: "Mails rewritten per language — tone drifted each time",
            zh: "每种语言都要重写邮件 — 语气每次不同",
          },
          {
            ko: "회신·팔로업을 기억에 의존 → 누락",
            en: "Replies and follow-ups left to memory — some missed",
            zh: "回复与跟进靠记忆 — 出现遗漏",
          },
          {
            ko: "검토 없이 발송 → 조건·톤 실수가 그대로",
            en: "Sent without review — term and tone slips went out",
            zh: "未经确认直接发送 — 条件与语气失误原样传达",
          },
        ],
      },
      rules: {
        flow: [
          {
            label: { ko: "파트너 목록", en: "Partner list", zh: "合作方名单" },
            sub: { ko: "지역·담당자 확인", en: "Region, contact", zh: "地区 · 对接人" },
          },
          {
            label: { ko: "KO·EN·ZH 템플릿", en: "KO · EN · ZH template", zh: "KO·EN·ZH 模板" },
            sub: { ko: "같은 메일 한 벌", en: "One mail, three languages", zh: "同一封邮件三种语言" },
          },
          {
            label: { ko: "발송 전 검토", en: "Review before sending", zh: "发送前确认" },
            sub: { ko: "조건·톤 확인", en: "Terms and tone", zh: "条件 · 语气" },
            gate: true,
          },
          {
            label: { ko: "첫 메일 발송", en: "First mail sent", zh: "发出首封邮件" },
            sub: { ko: "언어별 발송", en: "Sent per language", zh: "按语言发送" },
          },
          {
            label: { ko: "후속 메일", en: "Follow-up", zh: "跟进邮件" },
            sub: { ko: "일정대로 재발송", en: "Scheduled resend", zh: "按计划再次发送" },
          },
          {
            label: { ko: "회신 수신", en: "Reply received", zh: "收到回复" },
            sub: { ko: "조건 회신", en: "Terms answered", zh: "条件回复" },
          },
          {
            label: { ko: "미팅 조율", en: "Meeting set", zh: "约会议" },
            sub: { ko: "다음 단계 연결", en: "Next step linked", zh: "接上下一步" },
          },
        ],
        notes: [
          { ko: "3개 언어 템플릿 한 벌", en: "One template, three languages", zh: "三种语言一套模板" },
          { ko: "발송 전 검토 단계", en: "Review before sending", zh: "发送前确认环节" },
          { ko: "파트너별 다음 할 일", en: "Next step per partner", zh: "各合作方下一步" },
        ],
      },
      impact: {
        metrics: [
          {
            before: { ko: "3개 언어 손작업", en: "Three languages by hand", zh: "三种语言手工处理" },
            after: { ko: "템플릿 한 벌", en: "One template set", zh: "一套模板" },
            label: { ko: "메일 작성", en: "Writing the mail", zh: "撰写邮件" },
          },
          {
            before: { ko: "바로 발송", en: "Sent straight away", zh: "直接发送" },
            after: { ko: "검토 후 발송", en: "Reviewed, then sent", zh: "确认后发送" },
            label: { ko: "발송", en: "Sending", zh: "发送" },
          },
          {
            before: { ko: "기억에 의존", en: "Left to memory", zh: "靠记忆" },
            after: { ko: "단계별 다음 할 일", en: "Next step per stage", zh: "按阶段看下一步" },
            label: { ko: "팔로업", en: "Follow-up", zh: "跟进" },
          },
        ],
      },
    },

    {
      id: "work-agent",
      no: "03",
      tag: {
        ko: "AI 워크플로우 구축 · 반복 병목",
        en: "AI workflow built · repeated bottleneck",
        zh: "搭建 AI 工作流 · 重复瓶颈",
      },
      title: {
        ko: "제각각인 광고 문의를 처리하는 AI 업무 에이전트 (AS-IS → TO-BE)",
        en: "An AI work agent for ad inquiries in every shape (AS-IS → TO-BE)",
        zh: "处理各种形式广告咨询的 AI 工作代理（AS-IS → TO-BE）",
      },
      org: { ko: "온더룩 · MCN팀", en: "Onthelook · MCN Team", zh: "Onthelook · MCN 团队" },
      role: { ko: "설계 · 구축 · 검증 (단독)", en: "Design, build, validation (solo)", zh: "设计 · 搭建 · 验证（独立完成）" },
      period: { ko: "2026.02 – 현재", en: "Feb 2026 – Present", zh: "2026.02 – 至今" },
      oneLiner: {
        ko: "제안서 1건 1시간 · 기준은 머릿속 → 12개 기준을 규칙으로 → AI 초안 → 제 확인 3~5분.",
        en: "An hour per proposal, criteria in my head → twelve rules → AI draft → a three-to-five-minute check.",
        zh: "一份提案要 1 小时、标准只在脑子里 → 12 条规则 → AI 初稿 → 我只需 3~5 分钟审阅。",
      },
      problem: {
        bullets: [
          {
            ko: "같은 판단을 하루에도 몇 번 — 기준·기록 없음",
            en: "The same call several times a day — no criteria, no record",
            zh: "同一种判断一天重复几次 — 无标准、无记录",
          },
          {
            ko: "제안서 1건 1시간 + 고치는 데 한 번 더",
            en: "One proposal = an hour, plus another pass to fix it",
            zh: "一份提案 1 小时，还要再改一轮",
          },
          {
            ko: "판단이 한 사람 기억에 묶여 대신 못 함",
            en: "Judgment stuck in one person's memory — nobody could take over",
            zh: "判断绑在一个人的记忆里 — 别人接不了",
          },
        ],
      },
      rules: {
        flow: [
          {
            label: { ko: "요청 수신", en: "Intake", zh: "请求进入" },
            sub: { ko: "메신저 · 메일 · 시트", en: "Messenger, mail, sheets", zh: "消息 · 邮件 · 表格" },
          },
          {
            label: { ko: "8가지 업무로 분류", en: "Sort into 8 kinds", zh: "分成 8 类工作" },
            sub: { ko: "제안서 · 정산 · 섭외 · 리포트", en: "Proposal, payments, casting, report", zh: "提案 · 结算 · 邀约 · 报告" },
          },
          {
            label: { ko: "운영 기준 12개", en: "12 operating rules", zh: "12 条运营规则" },
            sub: { ko: "문서·프롬프트·코드로 고정", en: "In docs, prompts and code", zh: "固化到文档 · 提示词 · 代码" },
          },
          {
            label: { ko: "자동 실행 5개", en: "5 automatic runs", zh: "5 个自动任务" },
            sub: { ko: "정해진 시간마다", en: "At fixed times", zh: "按固定时间" },
          },
          {
            label: { ko: "AI 판정 · 초안", en: "AI judges & drafts", zh: "AI 判定 · 起草" },
            sub: { ko: "LLM 연계", en: "Wired to the LLM", zh: "对接 LLM" },
          },
          {
            label: { ko: "사람 최종 승인", en: "Final human approval", zh: "人工最终审批" },
            sub: { ko: "돈 · 외부 발송은 꼭", en: "Always for money and outbound", zh: "金额 · 对外发送必经" },
            gate: true,
          },
          {
            label: { ko: "발송 · 기록", en: "Send & log", zh: "发送 · 记录" },
            sub: { ko: "기록 자동 축적", en: "Logged automatically", zh: "记录自动累积" },
          },
        ],
        notes: [
          { ko: "업무 8종 · 판단 기준 12개", en: "8 work types, 12 criteria", zh: "工作 8 类 · 标准 12 条" },
          { ko: "5개 작업 자동 실행", en: "5 tasks run on schedule", zh: "5 个任务按时自动执行" },
          { ko: "돈·외부 발송은 사람 승인", en: "Money and outbound need a person", zh: "金额·对外发送需人工审批" },
        ],
      },
      impact: {
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
            after: { ko: "문서화된 기준", en: "Documented rules", zh: "写进文档的标准" },
            label: { ko: "판단 기준", en: "Where criteria live", zh: "判断标准在哪" },
          },
        ],
        note: {
          ko: "도입 초기 — 사람이 쓴 결과와 계속 대조 중입니다.",
          en: "Still early — I keep comparing it with human-made results.",
          zh: "仍处导入初期 — 持续与人工结果对照。",
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
        ko: "규칙으로 다 못 적는 일 — 읽고, 쓰고, 모호한 것을 나눕니다.",
        en: "What rules can't capture — read it, draft it, sort what's ambiguous.",
        zh: "规则写不全的事 — 读懂、起草、把模糊的分离出来。",
      },
      example: {
        ko: "의도 파악 · 초안 · 숫자 해석",
        en: "Intent · drafts · numbers",
        zh: "意图 · 初稿 · 数字",
      },
    },
    {
      tag: "02 · RULES",
      title: { ko: "운영 기준으로 고정", en: "Operating rules hold it", zh: "用运营规则固化" },
      desc: {
        ko: "같은 판단은 문서·코드로 — 아무도 기억하지 않아도 됩니다.",
        en: "The same judgment goes into docs and code — nobody has to remember.",
        zh: "同一种判断写进文档与代码 — 不必靠记忆。",
      },
      example: {
        ko: "판단 기준 12개 · 금지 사항 자동 검사",
        en: "12 criteria · automatic checks",
        zh: "12 条标准 · 禁止事项自动检查",
      },
    },
    {
      tag: "03 · HUMAN",
      title: { ko: "사람이 승인", en: "A human approves", zh: "人来审批" },
      desc: {
        ko: "돈 · 사람 · 외부 발송은 자동으로 확정하지 않습니다.",
        en: "Money, people and anything outbound are never auto-finalised.",
        zh: "钱、人、对外的事不会自动定案。",
      },
      example: {
        ko: "금액 확정 · 외부 발송 · 계약 종료",
        en: "Amounts · outbound · closures",
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
        ko: "AI 판단 · 운영 기준 · 사람 승인을 먼저 가릅니다.",
        en: "AI judgment, operating rules, human approval — separated first.",
        zh: "先分清 AI 判断、运营标准、人工审批。",
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
        ko: "모르는 값은 0이 아니라 '미확인'.",
        en: "An unknown value is 'unverified', never zero.",
        zh: "不知道的值写“未确认”，不是 0。",
      },
    },
    {
      no: "P3",
      title: { ko: "입력을 늘리지 않는다", en: "Do not add input fields", zh: "不增加新的输入" },
      body: {
        ko: "이미 쓰는 메일·메신저·시트에서 읽습니다.",
        en: "It reads from the mail, messenger and sheets already in use.",
        zh: "从本来就在用的邮件、聊天、表格中读取。",
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
        ko: "예외·금지 사항은 문서와 자동 검사로. 담당자가 바뀌어도 남습니다.",
        en: "Exceptions and no-gos live in docs and checks; they stay when the owner changes.",
        zh: "例外与禁止事项写进文档与自动检查，换人也留下。",
      },
    },
    {
      no: "P5",
      title: { ko: "최종본과 대조해서 검증한다", en: "Validate against the final draft", zh: "与最终版本对照验证" },
      body: {
        ko: "AI 결과는 내 최종본과 반복 대조한 뒤에만 신뢰합니다.",
        en: "AI output is trusted only after repeated comparison with my own finals.",
        zh: "AI 结果要与我亲手写的最终版反复对照后才信任。",
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
        ko: "혼자 쓰는 도구는 성과가 아닙니다 — 팀 공용 기준으로 넘깁니다.",
        en: "A tool only I use isn't a result — it becomes a team-wide standard.",
        zh: "只有我用的工具不算成果 — 要交成团队共用标准。",
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

  /* ---------- DOMAIN EXPERTISE ---------- */
  domain: [
    {
      tag: "01 · VERTICAL",
      title: { ko: "2035 여성 뷰티·패션 버티컬", en: "Beauty & fashion vertical, women 20s–30s", zh: "20~30 岁女性美妆·时尚垂直领域" },
      desc: {
        ko: "지그재그 · 무신사 · 올리브영 · MAC 협업 다수.",
        en: "Many campaigns with Zigzag, Musinsa, Olive Young and MAC.",
        zh: "与 Zigzag、Musinsa、Olive Young、MAC 合作多起。",
      },
    },
    {
      tag: "02 · DEAL",
      title: { ko: "딜 조건 · 권리 판단", en: "Deal terms and rights", zh: "交易条件 · 权利判断" },
      desc: {
        ko: "예산 · 타깃 · 2차 활용 권리 · 성과 연동 — 12개 기준.",
        en: "Budget, target, secondary rights, performance pay — 12 criteria.",
        zh: "预算 · 受众 · 二次使用权利 · 按效果付款 — 12 条标准。",
      },
    },
    {
      tag: "03 · OPERATION",
      title: { ko: "캠페인 7단계 · 전속 크리에이터", en: "7-stage campaigns · exclusive creators", zh: "活动七阶段 · 专属网红" },
      desc: {
        ko: "문의 → 제안 → 계약 → 제작 → 정산, 최대 30팀 동시 운영.",
        en: "Inquiry → proposal → contract → production → settlement, up to 30 teams at once.",
        zh: "咨询 → 提案 → 签约 → 制作 → 结算，最多同时运营 30 个团队。",
      },
    },
  ],
  domainLink: {
    ko: "딜 조건과 리스크를 현장에서 겪어 알기에 — AI 범위와 사람이 멈출 지점을 정확히 설계합니다.",
    en: "I know the deal terms and risks from the field — so I can place exactly where AI acts and where a person stops.",
    zh: "因为亲身经历过交易条件与风险 — 能准确设计 AI 做到哪里、人在哪里停下。",
  },

  /* ---------- CAREER ---------- */
  timeline: [
    {
      period: { ko: "2026.02 – 현재", en: "Feb 2026 – Present", zh: "2026.02 – 至今" },
      org: { ko: "온더룩", en: "Onthelook", zh: "Onthelook" },
      role: { ko: "패션 중심 AI 에이전트 회사 · MCN팀", en: "Fashion-led AI agent company · MCN Team", zh: "以时尚为主的 AI 智能体公司 · MCN 团队" },
      bullets: [
        {
          ko: "뷰티·패션 크리에이터 최대 30팀 · 광고 문의 AI 워크플로우 구축",
          en: "Up to 30 beauty and fashion creator teams · built the ad-inquiry AI workflow",
          zh: "最多 30 个美妆、时尚创作者团队 · 搭建广告咨询 AI 工作流",
        },
        {
          ko: "2035 여성 타깃 협업 — 지그재그 · 무신사 · 올리브영 · MAC",
          en: "Campaigns for women in their 20s–30s — Zigzag, Musinsa, Olive Young, MAC",
          zh: "面向 20~30 岁女性的合作 — Zigzag · Musinsa · Olive Young · MAC",
        },
      ],
    },
    {
      period: { ko: "2024.11 – 2026.01", en: "Nov 2024 – Jan 2026", zh: "2024.11 – 2026.01" },
      org: { ko: "아이스크리에이티브", en: "Ice Creative", zh: "Ice Creative" },
      role: { ko: "뷰티 특화 MCN · 광고사업팀", en: "Beauty-specialist MCN · Ads Team", zh: "美妆专门 MCN · 广告团队" },
      bullets: [
        {
          ko: "크리에이터 광고 캠페인 기획·운영",
          en: "Planned and ran creator ad campaigns",
          zh: "企划并运营创作者广告活动",
        },
      ],
    },
    {
      period: { ko: "2024.06 – 2024.11", en: "Jun 2024 – Nov 2024", zh: "2024.06 – 2024.11" },
      org: { ko: "올투원", en: "Alltoone", zh: "Alltoone" },
      role: { ko: "AI 콘텐츠 자동화 프로젝트 · 프리랜서", en: "AI content automation project · Freelance", zh: "AI 内容自动化项目 · 自由职业" },
      bullets: [
        {
          ko: "AI 콘텐츠 제작 자동화 프로젝트",
          en: "AI content-production automation projects",
          zh: "AI 内容制作自动化项目",
        },
      ],
    },
    {
      period: { ko: "2022.05 – 2024.06", en: "May 2022 – Jun 2024", zh: "2022.05 – 2024.06" },
      org: { ko: "샌드박스네트워크", en: "Sandbox Network", zh: "Sandbox Network" },
      role: { ko: "종합 MCN · 크리에이터 매니지먼트", en: "General MCN · Creator management", zh: "综合 MCN · 创作者经纪" },
      bullets: [
        {
          ko: "크리에이터 12팀 매니지먼트 · 캠페인 운영",
          en: "Managed 12 creator teams and their campaigns",
          zh: "负责 12 个创作者团队与广告活动运营",
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

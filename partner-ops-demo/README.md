# Cross-Border Partner Operations — portfolio demo (EN)

A static, English-language demo built as a small **workspace with a left sidebar**: two operating
pipelines I built from zero, each with its own views, and the same human approval gate in both.

The shell is a sidebar workspace (sidebar navigation, one workspace per pipeline, view-level
switching, counts on the items), built here with sample data only.

## The 30-second clip

The partner Overview opens on the **30-second AI-workflow clip**
(`media/ai-workflow-visual-30s.mp4`, poster `media/ai-workflow-poster.jpg`) **inline on the first
screen**, in a two-column hero — 16:9 player on the left, the `What this view is` summary on the
right. There is no modal and no click needed before it moves: the element is
`controls autoplay muted loop playsinline preload="metadata" poster=…`, so it plays silently on a
loop from the moment the page loads (desktop and iOS Safari).

- **`🔊 Play with Narration`** in the player header restarts it at 0 s with `muted = false` and
  `loop = false`, plays once through with the English voice-over, and reads `Narration On` while the
  sound is on; tapping it again returns to the silent loop. The native control bar's mute button
  keeps the label in step.
- **`Hide video` / `Show video`** collapses the player to its header without hiding the summary.

## Sidebar structure

```
Cross-Border Ops                     (workspace)
Pipelines
  Overseas Partner Pipeline  [34]
    Overview
    Workflow & rules
    Approval gate            [1]
    Partner list
  Advertiser GTM & Sales     [3]
    Overview
    Approval gate            [3]
    Brand list
Demo
  Why this exists
  Demo environment · local state only
```

Counts on the pipeline items are read from the sample set (active partners, drafts waiting at the
gate) and update when a draft is approved. Every view is addressable: `#partners/overview`,
`#partners/roster`, `#beauty/gate`, and so on; `#beauty` alone opens that pipeline's overview.

## Views

| View | Partner pipeline | Advertiser GTM pipeline |
|---|---|---|
| **Overview** | Inline 30 s workflow video beside the intro, outreach funnel (5 stages), partner onboarding after the first yes, region funnels (Japan·China / Southeast Asia / US), active-partner counts, contact coverage by country. | Intro, four KPIs (sends vs goal, stage mix, reply rate, conversations), blocked-now line, reply reading by brand type and reply class. |
| **Workflow & rules** | 5-step automated/human ladder with per-step output and failure case, send guardrails, and the "does / never does" rule book. | (none: the stage flow sits on the Overview) |
| **Approval gate** | Drafts waiting for a named owner (1 in the sample set) with the checklist the owner runs, plus the 10 drafts already approved and sent. | Interactive gate: 3 drafts with their checklists; *Review draft* opens the full draft, *Approve & queue* or *Request changes* moves the row. |
| **Partner list / Brand list** | Partner roster with 7 filters, expandable draft plans, rate-card extraction. | Brand board with 5 filters grouped by stage, expandable log + AI meeting recap and next action. |

Only the advertiser approval gate changes anything, and only in the browser: approving a draft
moves the row from *pending approval* to *approved · queued*. No email is sent and no external
system is called. On the partner side the send happens in the mail tool, so that gate is shown as
a state, not as a send button.

## Mobile

At ≤980 px the sidebar becomes an off-canvas drawer (hamburger in the header, scrim, closes on
selection or Escape). Tables and the wide rate-card panels scroll inside their own box, so the page
never scrolls sideways: 0 px horizontal overflow at 390 px in all seven views.

## Data policy

Everything on the page is **illustrative sample data**:

- Partner and brand names are invented; links point to `example.com`; emails use the reserved
  `.example` domain.
- No real partner list, advertiser list, contact address, message body, rate card, revenue figure
  or campaign result is reproduced.
- Counts (sends, replies, rate cards) come from the sample set, not from a live campaign.
- The published page is English-only.

## Files

```
index.html                 single-page build (CSS inlined, no build step needed to serve)
data/partners.js           sample dataset — overseas partner roster (window.DEMO_PARTNERS)
data/beauty.js             sample dataset — advertiser pipeline (window.DEMO_BEAUTY)
media/ai-workflow-visual-30s.mp4   30 s AI-workflow clip (English voice-over)
media/ai-workflow-poster.jpg       poster frame for the clip
scripts/base.css           layout system
scripts/demo.css           demo components + the sidebar workspace shell
scripts/template.html      page markup, views and the sidebar router
scripts/gen_data.py        regenerates data/*.js (deterministic sample data)
scripts/build.py           inlines both stylesheets, strips Korean, guards the build
scripts/verify.py          headless Chromium checks + screenshots
scripts/shots.py           one screenshot per sidebar view
screenshots/               verification and review captures
```

## Rebuild / verify

```bash
python3 scripts/gen_data.py     # only if the sample data changes
python3 scripts/build.py
LD_LIBRARY_PATH=<chromium deps> python3 scripts/verify.py
```

`verify.py` walks the sidebar through all seven views, checks hashes and active states, the badge
counts, the roster filters, the draft-plan jump from the partner gate, the rule click that filters
the board, the approval gate (dialog → approve → queue shrinks → badge moves → stage count moves), the
"request changes" return path, the deep links, the 390 px drawer and horizontal overflow in every
view, and console errors.

Last run against the current build: **51 checks, 0 failed** (see `screenshots/verify-report.json`).

## Colour

The published page uses a neutral B2B SaaS palette: white surfaces, slate `#0F172A` ink, and one
cobalt accent `#2563EB` for primary actions, bar fills and positive metrics (`#1D4ED8` where white
numerals sit on top). Anything waiting on a person reads calm amber (`#B45309` fill, `#D97706`
hairline); information notes are slate (`#475569` on `#F1F5F9`); a hard error or a missing contact
route is `#B42318`. No teal/rose brand pairing is used. The tokens live at the top of the page
stylesheet (`--ink`, `--accent`, `--have`, `--haveText`, `--warn`, `--note*`, `--danger*`, `--steel*`)
and the rail rules follow them.

## Live

`https://chaeeunyun.dev/partner-ops-demo/` — GitHub Pages, HTTP 200.

The page is served from the `partner-ops-demo/` folder of the `chaeeunyoon-boop.github.io`
repository (branch `main`, legacy Pages from `/`), which yields the same URL a standalone
`partner-ops-demo` repository would. Moving it to its own repository later needs no change to the
URL or to the page.

The published tree is only what the page needs:

```
index.html  data/partners.js  data/beauty.js  media/ai-workflow-visual-30s.mp4
media/ai-workflow-poster.jpg  README.md
```

Build scripts and verification captures stay local. To redeploy:

```bash
python3 scripts/build.py                    # rebuild index.html from the sources
git clone https://github.com/chaeeunyoon-boop/chaeeunyoon-boop.github.io /tmp/site
cp index.html README.md /tmp/site/partner-ops-demo/ && cp data/*.js /tmp/site/partner-ops-demo/data/
cp media/* /tmp/site/partner-ops-demo/media/
cd /tmp/site && git add partner-ops-demo && git commit -m "update demo" && git push
```

All asset paths are relative, so the page works from the project path without changes.

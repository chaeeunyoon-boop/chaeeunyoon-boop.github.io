# Cross-Border Partner Operations — portfolio demo (EN)

A static, English-language demo built as a small **workspace with a left sidebar**: two operating
pipelines I built from zero, each with its own views, and the same human approval gate in both.

The shell follows the layout of the internal sales dashboard (sidebar navigation, one workspace
per pipeline, view-level switching, counts on the items), rebuilt here with sample data only.

## Sidebar structure

```
Cross-Border Ops                     (workspace)
Pipelines
  Overseas Partner Pipeline  [34]
    Overview
    Workflow & rules
    Approval gate            [1]
    Rosters & logs
  Advertiser GTM & Sales     [3]
    Overview
    Workflow & rules
    Approval gate            [3]
    Rosters & logs
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
| **Overview** | Intro, outreach funnel (5 stages), region funnels (Japan·China / Southeast Asia / US), active-partner counts, contact coverage by country. | Intro, four KPIs (sends vs goal, stage mix, reply rate, conversations), blocked-now line, reply reading by brand type and reply class. |
| **Workflow & rules** | 5-step automated/human ladder with per-step output and failure case, send guardrails, and the "does / never does" rule book. | 8 numbered stage rules (click one to filter the board), stage flow with live counts. |
| **Approval gate** | Drafts waiting for a named owner (1 in the sample set) with the checklist the owner runs, plus the 10 drafts already approved and sent. | Interactive gate: 3 drafts with their checklists; *Review draft* opens the full draft, *Approve & queue* or *Request changes* moves the row. |
| **Rosters & logs** | Partner roster with 7 filters, expandable draft plans, rate-card extraction, onboarding handover. | Brand board with 5 filters grouped by stage, expandable log + AI meeting recap and next action. |

Only the advertiser approval gate changes anything, and only in the browser: approving a draft
moves the row from *pending approval* to *approved · queued*. No email is sent and no external
system is called. On the partner side the send happens in the mail tool, so that gate is shown as
a state, not as a send button.

## Mobile

At ≤980 px the sidebar becomes an off-canvas drawer (hamburger in the header, scrim, closes on
selection or Escape). Tables and the wide rate-card panels scroll inside their own box, so the page
never scrolls sideways: 0 px horizontal overflow at 390 px in all eight views.

## Data policy

Everything on the page is **illustrative sample data**:

- Partner and brand names are invented; links point to `example.com`; emails use the reserved
  `.example` domain.
- No real partner list, advertiser list, contact address, message body, rate card, revenue figure
  or campaign result is reproduced.
- Counts (sends, replies, rate cards) come from the sample set, not from a live campaign.
- Korean design notes from the internal stylesheet are stripped at build time, and the build fails
  if any Korean character survives: the published page is English-only.

## Files

```
index.html                 single-page build (CSS inlined, no build step needed to serve)
data/partners.js           sample dataset — overseas partner roster (window.DEMO_PARTNERS)
data/beauty.js             sample dataset — advertiser pipeline (window.DEMO_BEAUTY)
scripts/base.css           layout system reused from the internal roster dashboard
scripts/demo.css           demo components + the sidebar workspace shell
scripts/template.html      page markup, views and the sidebar router
scripts/gen_data.py        regenerates data/*.js (deterministic sample data)
scripts/build.py           inlines both stylesheets, strips Korean, guards the build
scripts/verify.py          headless Chromium checks + screenshots
scripts/shots.py           one screenshot per sidebar view
scripts/preview.py         writes the preview images into downloads/
screenshots/               verification and review captures
```

## Rebuild / verify

```bash
python3 scripts/gen_data.py     # only if the sample data changes
python3 scripts/build.py
LD_LIBRARY_PATH=<chromium deps> python3 scripts/verify.py
```

`verify.py` walks the sidebar through all eight views, checks hashes and active states, the badge
counts, the roster filters, the draft-plan jump from the partner gate, the rule click that filters
the board, the approval gate (dialog → approve → queue shrinks → badge moves → stage count moves), the
"request changes" return path, the deep links, the 390 px drawer and horizontal overflow in every
view, and console errors.

Last run against the Clean Business build: **51 checks, 0 failed** (see `screenshots/verify-report.json`).

## Colour

The published page uses the **Clean Business** palette: white surfaces, charcoal `#161823` ink,
teal `#00726E` / `#009E9A` for data, and rose `#E11D48` only for what is waiting on a person
(the approval-gate cards, the gate badges, the demo badge). The tokens live at the top of
`scripts/base.css` (`--ink`, `--green`, `--have`, `--haveText`, `--rose*`) and the rail rules at
the top of `scripts/demo.css`.

## Live

`https://chaeeunyoon-boop.github.io/partner-ops-demo/` — GitHub Pages, branch `main`, root.

The published tree is only what the page needs:

```
index.html  data/partners.js  data/beauty.js  README.md
```

Build scripts, preview variants and verification captures stay local. To redeploy:

```bash
python3 scripts/build.py                    # rebuild index.html from the sources
rsync -a index.html data README.md ../partner-ops-demo-dist/
cd ../partner-ops-demo-dist && git add -A && git commit -m "update demo" && git push
```

All asset paths are relative, so the page works from the project path without changes.

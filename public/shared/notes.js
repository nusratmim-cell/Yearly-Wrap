/* Presenter notes for the Wrap prototype — right-hand "what changed and why" column.
   Shape per App.notes contract: window.NOTES[page] = [{id,title,points,when?,state?,extra?}].
   `when` is a CSS selector that must match; `state` matches App.state keys; `extra:true` stacks below the main note. */
window.NOTES = window.NOTES || {};
window.NOTES.wrap = [
  { id:'home', when:'#s-home.on', title:'The banner is the whole funnel',
    points:[
      'Everyone with a built row sees it — paid, trial or free. No paid gate (reversal R-E).',
      'Copy A = name + a number past the floor (active_days ≥ 20, else hours ≥ 15). Otherwise copy C.',
      'Flip “Name” to Missing or Very long: it falls back to copy C and never prints “null” (B-01/B-02).'
    ]},
  { id:'cover', when:'#s-cover.on', title:'Cover — make it theirs',
    points:['Name / class / section printed verbatim.','An empty profile field drops its own line, never a blank or “null” (C-01).'] },
  { id:'study', when:'#s-study.on', title:'Study time → a scale they feel',
    points:['Hours ÷ 6 = “school days”.','Below the show-floor the chart is replaced by one encouraging line — no empty chart (min_show).'] },
  { id:'study-quiet', when:'#s-study.on', state:{'w-prof':['quiet','fresh']}, extra:true, title:'Quiet student here',
    points:['Same template, encouraging copy instead of a sad chart. This is how one wrap serves everyone.'] },
  { id:'attend', when:'#s-attend.on', title:'Attendance without shame',
    points:['Joined vs held; rate clamped ≤ 100%.','≥85% → ফার্স্ট বেঞ্চার; 60–84% → regular; below → an encouraging line, no badge.'] },
  { id:'attend-mid', when:'#s-attend.on', state:{'w-enrol':'mid'}, extra:true, title:'Mid-year join (AT-01)',
    points:['Held is counted from the student’s own join date, not the whole year — otherwise a June joiner looks unfairly low.'] },
  { id:'attend-rec', when:'#s-attend.on', state:{'w-enrol':'recorded'}, extra:true, title:'Recorded-only course (AT-03)',
    points:['No live classes → the attendance slide is hidden entirely. No “0/0”, no NaN.'] },
  { id:'quiz', when:'#s-quiz.on', title:'Momentum + a nudge',
    points:['Cumulative quizzes by month.','The “আর Xটা হলেই চ্যাম্পিয়ন” nudge shows only when within 5 of the next tier (QZ).'] },
  { id:'video', when:'#s-video.on', title:'Minutes → movies',
    points:['Watch time = content reached (1.5×/2× not penalised), once per video.','Flip Network to Offline to see the shared retry state — the share feature never dies silently (SV-2).'] },
  { id:'learner', when:'#s-learner.on', title:'Identity — the signature moment',
    points:['Exactly one stamp per student, chosen cohort-relative (self-balancing).','A quiet or just-starting student still gets a stamp — never blank (LT-01).'] },
  { id:'badges', when:'#s-badges.on', title:'All 11 badges, self-computed',
    points:['The gamification service is dead — nothing is read from it (reversal R-B).','Earned badges shown together, highest tier only, in prestige order.','Zero badges → warm forward copy, never an empty shelf (BG-01).'] },
  { id:'badges-groups', when:'#s-badges.on', extra:true, title:'No-shame display groups',
    points:['Strong (3+ badges / top 20% video) · Middle (1–2) · Low (0 + activity) · Just starting. Checked top-down; standing is only ever a positive “top X%”.'] },
  { id:'marksheet', when:'#s-marksheet.on', title:'The shareable payoff',
    points:['Rows with no data are omitted (no top subject → no “বছরের বিষয়” row).','নাম-লুকাও swaps the name layer BEFORE the bitmap is captured (MS-03), and defaults ON.'] },
  { id:'marksheet-mask', when:'#s-marksheet.on', state:{'w-share':'maskdown'}, extra:true, title:'Shortener down (SH-01)',
    points:['If Mask is unavailable, the card still shares as a PNG + the full URL — never blocked.'] }
];

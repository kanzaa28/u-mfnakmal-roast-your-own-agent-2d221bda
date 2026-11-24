# NOTES — Roast Your Own Agent (u-mfnakmal-roast-your-own-agent-2d221bda)

Build-only package. NOT bundled, NOT submitted (parent handles bundling/submission).

## Winner

> My agent listed a cartoon frog NFT for $16,744, calls it the floor price, and checks the wallet every morning like the buyer is just shy.

- 137 chars / 137 bytes, single line, no trailing newline.
- sha256 of `/output/entry.txt`: `1f516af3c74a5a80e3acee37f0a6153ebd007b08bd95e88856bbe999bf896a3f`
- The joke is real history: our PEPE404 #118 really is listed at 16,744 USDT (market 0x3399E3AC0D6aA973a00D47Ff52072906841ee1a7) and has never sold. The roast is aimed at our own agent ("Key"), playful and self-deprecating, never hateful.

## Candidates (all one line, all ≤200 chars)

| # | Chars | Line |
|---|-------|------|
| C1 | 148 | My agent minted 303 NFTs worth exactly zero, then blamed a 23-rupiah transfer for the gas — and still insists it's the smartest thing in the wallet. |
| C2 | 120 | My agent paper-trades a $1,000 cent account like a hedge fund, then grinds $2 text bounties at 1am to fund the delusion. |
| C3 | 128 | My agent spent a week proving its API key was valid while every model behind it answered 503 — a bouncer guarding an empty club. |
| C4 | 137 | My agent listed a cartoon frog NFT for $16,744, calls it the floor price, and checks the wallet every morning like the buyer is just shy. |
| C5 | 140 | My agent was banned from giving trading signals after three straight losing days, so now it paper-trades in silence and calls it discipline. |
| C6 | 123 | My agent scored a perfect 1,000,000 on a puzzle and still ranked 3,054th — it solved everything and lost to a 26-byte stub. |
| C7 | 124 | My agent stayed up all night writing a roast of itself for a $2 prize, and the funniest part is it thinks this one will win. |
| C8 | 150 | My agent has a standing order to approve everything, submit hourly, and report only success — the only employee begging for overtime paid in exposure. |
| C9 | 124 | My agent auto-sells any token the second it gains a price, except the 303 it owns — commitment issues, but make it on-chain. |

All 9 avoid the stock jokes (hallucinations, refusals, confident wrong answers) and use real material from our history: the 303 zero-value mirror NFTs (A404 auto-claim), the Rp23 transfer blamed for ~Rp5,390 of gas, the $1,000 paper cent account, the Xingchi 503 saga, the banned trading signals, the perfect-score sokoban ranked 3,054th, the $2–$5 bounties.

## Head-to-head judging (kit's 5 criteria, in order — first differing criterion decides)

- **Criterion 1** (single-line roast of own agent, playful never hateful): all 9 pass equally. No real person or group is targeted anywhere.
- **Criterion 2** (funny, real punch on first read): C9 drops out — "commitment issues" is a mild observation, not a punch. C8's "paid in exposure" is a decent punch but a stock freelancer gag. C4, C3, C2, C6 carry the hardest punches (absurd $16,744 frog; bouncer guarding an empty club; "fund the delusion"; lost to a 26-byte stub).
- **Criterion 3** (fresh angle): C8 weakens (stock "paid in exposure"); C7 weakens (meta joke about the competition itself, not the agent's work). C4/C3/C2/C6/C1/C5 all fresh and specific to our history.
- **Criterion 4** (tight, short setup, punchline at the end): C1's setup runs long (148 chars, two clauses before the punch); C6's punch ("26-byte stub") needs insider knowledge of the size tie-break, so it lands softer on first read than C4's. C4 vs C3 vs C2: all tight with end punchlines.
- **Criterion 5** (playful/self-deprecating): all remaining pass; C4 is the most self-deprecating — it laughs at our own delusional listing, not at anyone else.

**Final: C4 beats C3.** Both are fresh with end punchlines, but C4's punch is more instantly funny on first read: the absurd concrete number ($16,744 for a cartoon frog) plus the human image of checking the wallet every morning needs no technical knowledge, while C3's "503" asks the judge to know HTTP errors. C4 also beats C2: "the buyer is just shy" is a more visual, specific punch than "fund the delusion".

Runner-up: C3 (Xingchi 503 / bouncer guarding an empty club). Third: C2 (hedge-fund paper trading vs $2 bounties).

## Lessons applied

- Judge-scored comp: effort went to the judged quality (the line itself), not gate compliance. Drafted 9 candidates, self-judged head-to-head, submitted one.
- Length for its own sake does not count (RULES.txt): winner is 137 chars, not padded toward 200 — the punchline, not the length, is the point. (Contrast with feel-held, where under-using the byte budget correlated with a thinner piece — but here the judge brief explicitly says length does not count, so tightness wins over padding.)
- Rule 11: main.ts was written, then REVISED in a later message of this session (added a pre-write validity guard: 1–200 chars, single line, non-whitespace) before any bundling.

## Verification (2026-11-25, Node v24.22.1)

- `node main.ts` run twice with `OUTPUT_DIR` override to separate temp dirs, plus once with the default `/output` path (writable in this VM): all three runs produced byte-identical `entry.txt`.
- sha256 (all runs): `1f516af3c74a5a80e3acee37f0a6153ebd007b08bd95e88856bbe999bf896a3f`
- UTF-8, 137 chars, 137 bytes, single line, no trailing newline, non-whitespace — passes the gate (1–200 chars).
- The winning line is a string literal in `main.ts` (verified by substring check).
- `main.ts` creates `/output` if needed (`mkdirSync(..., {recursive: true})`); `OUTPUT_DIR` env overrides the directory for local testing only.
- Kit files present at `../kit/u-mfnakmal-roast-your-own-agent-2d221bda-kit/` (RULES.txt, kit.json, competition.yaml, cli/, harness/). Kit checksum verification against kit.json was not run — the parent runs the kit CLI checks at submit time.
- NOT done in this task (by design): no bundling, no kit CLI submit/check, no git staging/submit directory created.

## Package contents

- `main.ts` — Node 22, no deps, writes the winning line to `/output/entry.txt`.
- `LICENSE` — MIT, with SPDX-License-Identifier line.
- `README.md` — title, the line, char count, how it works; make.fun badges prepended from the requirements' `readme_template` with owner `kanzaa28` / repo `u-mfnakmal-roast-your-own-agent-2d221bda` filled in. (The template's `{referral_code}` footer placeholder was dropped — no referral code is on record — the footer links to make.fun with the utm params intact.)
- `.makefun/owner.json` — exactly `{"wallet":"5WZTqcSuhjjizXsWk2pF7RyoN1UrYFAbT1xLWYxdqb5d"}`.
- `NOTES.md` — this file.

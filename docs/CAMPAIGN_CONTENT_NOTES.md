# Campaign content and implementation notes

Last reviewed: 2026-10-15

This note sits outside the publicly served `dist` directory. It records source boundaries for the campaign-first portfolio structure.

## Contribution boundary

The public portfolio uses the supported personal contribution wording **“Campaign coordination.”**

Breshna, SEND and PRINT3R metrics describe programme-level scale, budgets, estimated reward value, reported spend or rules. They are not presented as outcomes individually generated, paid, reconciled or fully managed by Olamilekan Alaga.

No source reviewed for this implementation establishes that Olamilekan personally:

- recruited or managed every participant;
- controlled an entire campaign budget;
- distributed every dollar or token;
- designed each incentive model;
- generated every programme outcome; or
- performed payment reconciliation or client reporting.

Those responsibilities are therefore not claimed.

## Breshna

Primary implementation sources:

- Brief values supplied by the portfolio owner
- Read-only historical source: `Ifa-Repo/src/breshnaHistorical.js`
- Read-only display reference: `Ifa-Repo/src/historicalStudio.js`
- Read-only evidence note: `Ifa-Repo/docs/BRESHNA_EVIDENCE.md`

Published figures:

- 1,000 campaign participants — reported
- 100,000 referred users who created a first game — aggregate across participating creators
- $100,000 campaign budget
- $1 reward to the referring creator per qualifying first-game creation
- Four-month campaign duration

Qualifications:

- Registration alone did not qualify.
- The budget is not a verified payment total.
- Campaign-specific payout records were not supplied.
- Founder growth posts describe wider company context, not independent verification of the campaign results.

Known discrepancy:

- `breshnaHistorical.js` records 1,000 participating creators in the report object.
- `BRESHNA_EVIDENCE.md` also states that the creator count was not supplied.
- The owner’s brief and current source record are used publicly as **1,000 campaign participants · reported**.

Role context retained from the existing portfolio:

- Lead Ambassador / Web3 Gaming Community Growth
- January–April 2023
- These role dates are not used as exact campaign dates.

## SEND

Primary implementation sources:

- Brief values supplied by the portfolio owner
- Read-only historical source: `Ifa-Repo/src/sendHistorical.js`
- Read-only evidence note: `Ifa-Repo/docs/SEND_EVIDENCE.md`

Published figures:

- 12-month programme
- Estimated 200–300 programme contributors
- Approximately 5,000 community members
- 20,000 Sendtags
- Approximately $200,000 estimated annual token reward value

Qualifications:

- Rewards varied with activity and team assessment and were denominated in $SEND tokens.
- The valuation price and date were not supplied.
- The estimate is not a verified cash payment total.
- Community participation, contributors and Sendtags are distinct measures and are not summed.

Known discrepancy/history:

- Earlier documentation used a 3,000–5,000 community range.
- The current source/evidence note records the owner clarification of approximately 5,000, which is used publicly.

Role context retained from the existing portfolio:

- Lead Ambassador / KOL Growth
- June 2023–November 2024
- Role tenure is kept separate from the 12-month programme duration.

## PRINT3R

Primary implementation sources:

- Brief values supplied by the portfolio owner
- Read-only historical source: `Ifa-Repo/src/print3rHistorical.js`
- Read-only evidence note: `Ifa-Repo/docs/PRINT3R_EVIDENCE.md`

Published headline figures:

- 150 reported programme participants
- $25,000 reported total campaign spend

Expanded, qualified historical rules:

- Goblin Mode advertised an aggregate payout cap of $5,000.
- The historical record states a 1,000× leverage rule and the associated extreme trading/liquidation risk.

Qualifications:

- The creator programme and Goblin Mode competition are separate.
- A payout cap is not money actually paid.
- Reported spend is not a verified creator-reward distribution total.
- Actual competition rewards, attributable acquired users and participant profitability are not established.
- No campaign duration is invented.
- The work is historical and is not presented as an IFAGRITHM client engagement.

Known discrepancy:

- `print3rHistorical.js` and the owner’s current brief record 150 participants and $25,000 spend.
- `PRINT3R_EVIDENCE.md` contains an older approximately 25-ambassador estimate.
- The current source and owner-supplied value of 150 is used publicly, with supporting documentation marked incomplete.

Role context retained from the existing portfolio:

- Lead Ambassador
- March 2023–January 2024
- Role dates are not treated as campaign duration.

## Other KOL engagements

Mode Network moved from the former large ambassador-card layout into Other KOL Engagements. Its existing context remains:

- Ambassador / KOL Campaign Support
- July–December 2023

The other existing project logos and approved destinations are preserved. Their inclusion does not assert formal employment, payment, full programme management or specific results.

No synthetic campaign catalogue entries from IFAGRITHM were imported.

## Data and product boundaries

- deBridge remains NDA-safe analyst internship work.
- Nansen / AlphaTrail remains API/product-demo work, not an employee claim; the demo is labelled offline.
- Aladdin Research Lab / Terminal and Aladdin Alert Bot remain separate.
- Bot report figures remain observed export outcomes rather than realised returns or win rates.
- IFAGRITHM is a supporting current-build prototype. Historical records remain separated from illustrative product fixtures.

## Community boundaries

Degen Community and The Banters audience values are labelled supplied snapshots because no observation date was provided. They are not summed or presented as guaranteed campaign participation.

## Education discrepancy

The website currently records:

- MSc Data Science and IT Application
- University of Greenwich
- September 2024–July 2026
- Merit

The unchanged technical CV records:

- MSc Data Science and its Applications (Merit)
- 2024–2025

The website value was preserved as instructed. The discrepancy remains unresolved and should be reconciled by the portfolio owner before a future CV update.

## Deployment and link checks

External destinations were checked on 2026-10-15. All portfolio project and community destinations returned HTTP 200 except the owner-supplied LinkedIn profile, which returned LinkedIn's automated-request block (HTTP 999) and was preserved unchanged.

The legacy Notcoin destination `https://x.com/thenotcoin` returned 404. Notcoin's official socials page identifies `@notcoin`; `https://x.com/notcoin` returned 200 and replaced the stale link.

The linked local Vercel metadata identifies project `portfolio` (`prj_ZSGPkM9oeqjh7l0ViibgnTEIFz0q`). The existing custom domain `https://olamilekanalaga.co.uk` served the pre-change production site before implementation. Production content must be checked again after the normal `main` push.

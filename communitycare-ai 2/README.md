# CommunityCare AI

**Bringing Preventive Medicine Beyond the Clinic**

A complete Next.js App Router educational prototype for **Beyond Shadowing: Bringing Preventive Medicine Into the Community**, prepared around AACOM ClinEd Accelerator Track 1: Day-One Clinical Value.

> Educational Prototype — Synthetic Patient Data Only. Not for Clinical Use.

The initiative proposes supervised preventive health encounters in community settings as opportunities for early clinical learning. This app demonstrates documentation, student recognition of example findings, supervisor-review placeholders, preventive education, fictional resource navigation, and impact measurement. It does not represent a confirmed clinical program, endorsement, partnership, or actual patient outcome.

## Included workflows

- Overview with six metrics, Recharts activity and location charts, recent encounters, and follow-up outcomes.
- Validated screening form, structured review, student acknowledgment, simulated supervisor routing and review, and temporary saving.
- Searchable/filterable records, full encounter details, linked patient visit history, print summary, referral completion simulation, and reset.
- Seven fictional resource categories with eligibility and referral examples; add resources to an encounter.
- Interactive student competency checklist and simulated practice metrics.
- Impact dashboards with proposed 80%, 60%, and 100-encounter pilot targets, clearly distinct from actual outcomes.
- About, privacy, and clinical safety information.
- Seven-step guided demo with required acknowledgment, routing, review, resource selection, and a dashboard update.
- Mobile sidebar, accessible labels, keyboard focus styles, reduced-motion handling, and print styles.

## Patient codes and repeat visits

`patientId` is a stable fictional participant code (`CC-…`). `id` is a distinct visit/encounter ID (`ENC-…`). A returning participant selection reuses only the patient code and optional age range; it clears current measurements, notes, consent, review, and referrals. Staff must confirm the selected fictional code before saving a linked visit. Records show that code's visit timeline. Unique people and total screenings are counted separately.

A future approved program might issue a printed participant card or QR code. The prototype prints the code on the visit summary but does not scan codes, verify identity, or recover lost codes. A code alone does not prove identity. A staff-held paper copy alone cannot match an unknown person to a code. Any identity-linked paper register would require institutional approval, appropriate consent, restricted access, secure storage, and retention/deletion policies. No real identity register is implemented here.

## Local setup

Requirements: Node.js 20.9+ (Node 22 or 24 recommended), and pnpm. Dependencies are locked in `pnpm-lock.yaml`. Corepack can enable pnpm where included in your Node distribution; otherwise install pnpm from its official distribution.

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

Native dependency build scripts for esbuild (the TypeScript test runner) and unrs-resolver (lint resolution) are explicitly declared in `pnpm-workspace.yaml`.

Open `http://127.0.0.1:3000`. If a device hits an OS file-watcher limit, use `WATCHPACK_POLLING=true pnpm run dev` or use the production preview below.

```sh
pnpm run typecheck
pnpm run lint
pnpm run test
pnpm run build
pnpm run start
```

`start` serves the production static export from `out/` using a small local Node server. Build first. `next start` is not used because this project explicitly exports static files. Set `PORT=3001 pnpm run start` to choose another local port.

No secrets, paid APIs, database, login, or environment variables are required. Ordinary static hosting requests load application assets; encounter form values are not sent to a backend.

## Vercel deployment

1. Create an empty GitHub repository and upload/push this project. Do not include `node_modules`, `.next`, or `out`.
2. In Vercel, import that repository and select Next.js.
3. If using a monorepo, set Root Directory to the folder containing this `package.json`.
4. Use install command `pnpm install --frozen-lockfile` and build command `pnpm run build`. This app uses `output: 'export'` and `trailingSlash: true`; the generated output is `out`.
5. No environment variables are required. Deploy and verify the nine routes and demo.

This project also supports any static host that serves `out/` and directory `index.html` files. See the official [Next.js static-export guide](https://nextjs.org/docs/app/guides/static-exports).

The tracked `.openai/hosting.json` identifies the registered private Sites project; publication was not completed. It contains no credentials and is not needed by Vercel.

## GitHub preparation

The app is kept in its own directory, with `.gitignore`, a lockfile, and a complete source tree. Connected GitHub tools could inspect repositories but could not create a new repository; none of the unrelated existing projects were modified. A local source commit is included in the working directory. Private Sites publication was blocked by the tool approval policy; no live hosted version is claimed. For your own GitHub remote:

```sh
git remote add github https://github.com/YOUR_ACCOUNT/communitycare-ai.git
git push -u github HEAD:main
```

If the source is obtained as a ZIP without `.git`, initialize and commit it first:

```sh
git init -b main
git add .
git commit -m "Build CommunityCare AI educational prototype"
git remote add origin https://github.com/YOUR_ACCOUNT/communitycare-ai.git
git push -u origin main
```

Use an empty repository. No GitHub repository was created by this delivery.

## Demonstration data and memory

The baseline has 24 fictional encounters, eight fictional students, and seven fictional resource organizations. Metrics derive from the shared React provider, except explicitly labeled fixed educational examples. Unique people use patient codes; events use distinct date + setting; referrals count encounters with at least one resource; completion is manually simulated.

New encounters and checklist changes exist **only in React application memory**. Next.js client navigation preserves them. Reload, opening another tab, or reset returns to the baseline. There is no localStorage, sessionStorage, cookie persistence, API endpoint, or real patient database. Temporary browser memory is not a claim that real patient information could safely be entered. Use synthetic information exclusively.

## Deterministic example rules

Rules live in `lib/data.ts` and return the rule ID and the exact trigger. They are illustrative software thresholds, not clinical decision criteria:

| Rule | Example trigger |
| --- | --- |
| DEMO-BP | Systolic ≥160 or diastolic ≥100 mmHg |
| DEMO-LOW-BP | Systolic <90 mmHg |
| DEMO-HR | Heart rate <50 or >120 bpm |
| DEMO-RR | Respiratory rate <10 or >24/min |
| DEMO-O2 | Oxygen saturation <94% |
| DEMO-TEMP | Temperature <95 or ≥100.4°F |
| DEMO-SYMPTOM | Selected fictional chest discomfort, breathing difficulty, or fainting |

**Demonstration Only — Rules Require Clinical Validation Before Real-World Use.**

No diagnosis, medication recommendation, treatment, autonomous triage, or clinical validation is provided. No flag does not establish safety. Notify the supervising clinician according to the approved outreach protocol; software alerts never substitute for established emergency escalation protocols.

## Privacy boundaries

The competition prototype is synthetic-only and is **not claimed to be HIPAA compliant**. Real clinical implementation requires institutional authorization, applicable HIPAA compliance assessment, clinical oversight, security testing, vendor review, appropriate consent, access control, encryption, audit logging, and approved retention/deletion policies. Pseudonymous data can still be sensitive and potentially identifiable; changing names to codes is not a compliance determination. Reference: [HHS guidance on de-identification](https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html).

The institutional background on the About page is supplied by the project brief. AACOM, OCOM, Shepherd’s Hope, and Hearts for the Homeless are not claimed to endorse the prototype. Hearts for the Homeless is only a potential collaboration to explore.

## Three-minute demonstration outline

- 0:00–0:30: Introduce the educational gap and overview dashboard.
- 0:30–1:40: Use the guided demo: document, recognize, acknowledge, route, review, connect, save.
- 1:40–2:10: Show a visit summary and stable code / separate visit history.
- 2:10–2:40: Show student learning and proposed pilot targets.
- 2:40–3:00: Explain synthetic-only boundaries and future institutional review.

## Source structure

- `app/`: App Router layout, overview route, eight statically generated section routes, and responsive/print styles.
- `components/`: shared provider, shell, forms, records, resources, guided demo, dashboards, information pages, and Recharts visualizations.
- `lib/data.ts`: synthetic fixtures, types, identity helpers, validation, deterministic flags, and metric definitions.
- `tests/`: focused rule boundaries, invalid-input, metric, and repeat-visit tests.
- `scripts/serve.mjs`: local static production preview.

See `QA.md` for checks actually executed and verification limitations.

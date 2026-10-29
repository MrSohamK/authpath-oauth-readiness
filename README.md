# AuthPath — OAuth readiness, minus the guesswork

**Live demo:** https://authpath-oauth-readiness.vercel.app

AuthPath helps developers decide whether to use managed OAuth or create their own provider app, understand common setup steps, surface launch blockers, and distinguish active setup work from uncertain provider-review wait times.

## What it does

- Presents starter guides for GitHub, Slack, Google OAuth, and Notion.
- Lets a user submit a provider name or public HTTPS URL for a lightweight public-page investigation.
- Produces a checklist, likely blockers, source links, an effort estimate, and an explicit confidence/uncertainty statement.
- Points developers to Composio managed auth before recommending a custom OAuth build.
- Lets users copy a checklist or share a generated guide URL.
- Runs without a paid LLM API or API key.

## Important scope and limitations

This is a **free, evidence-first prototype**, not a fully autonomous research agent. For known providers, it uses curated official documentation links plus public-page inspection. For unfamiliar providers, it inspects the submitted public website and returns a conservative starter checklist. It does **not** perform general web search, authenticate to provider consoles, create credentials, submit marketplace reviews, run an OAuth token exchange, or guarantee approval. Provider-specific claims and timing must be verified against the linked current documentation.

Time ranges are planning estimates, not commitments. Provider approval, admin consent, security assessment, and directory/marketplace review are external dependencies.

## Run locally

Requirements: Node.js 20+.

```bash
npm install
npm start
```

Open `http://localhost:3000`. The app uses only Node built-ins and does not require environment variables.

## Deploy to Vercel

Import this repository as a Vercel project. The static frontend is served from `public/` and the API route is `api/investigate.js`. No secrets or paid services are required.

## API

`POST /api/investigate`

```json
{ "input": "https://linear.app" }
```

The API validates public HTTP(S) URLs, rejects localhost/private IP targets, limits redirects and response size, inspects public page titles/text and curated provider documentation, and returns a guide-shaped JSON response.

## Validation performed for the live demo

The deployed API was smoke-tested against Linear and Slack public sites and returned successful responses with steps and source rows. An invalid `.invalid` hostname returned a validation error. Vercel's runtime error scan showed no runtime errors in the inspected 24-hour window. These are API smoke tests—not a claim of full cross-browser end-to-end coverage.

## Source and design notes

- `public/index.html` — responsive, dark UI and guide library.
- `api/investigate.js` — serverless public-page investigator and provider data.
- `test/investigate.test.js` — URL validation tests.
- `docs/PRODUCT_NOTES.md` — product decisions, evidence model, and future work.

## Product thesis

The user’s real question is not just “How do I set up OAuth?” It is “Do I need to build this integration myself, what can block launch, how much work is under my control, and what do I need a human/provider to do?” AuthPath is designed around that decision.

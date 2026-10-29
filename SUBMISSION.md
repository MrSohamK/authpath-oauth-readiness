# Submission notes

**Project:** AuthPath — OAuth setup, minus the guesswork  
**Live demo:** https://authpath-oauth-readiness.vercel.app

## Suggested submission description

AuthPath is an evidence-first OAuth readiness guide for developers building AI agents. It helps answer three questions before implementation: can managed OAuth cover the integration, what setup work is required, and which launch blockers depend on the provider or an administrator? The prototype combines starter guides for common providers with a lightweight public-page investigation flow, source links, setup checklists, and explicit uncertainty around review timelines. It runs without a paid LLM API or API key.

## Honest demo script (60–90 seconds)

1. Open the live demo and select Slack.
2. Point out the managed OAuth recommendation and the difference between setup effort and Marketplace/admin review.
3. Open the linked official OAuth and distribution docs.
4. Investigate `https://linear.app` to demonstrate the public-page flow.
5. Explain that unknown providers get conservative generic guidance rather than invented provider policy.
6. Mention that the prototype does not log into consoles, create credentials, submit reviews, or guarantee approval.

## Important

The live Vercel deployment was tested through API smoke tests. The included repository is a reproducible source package for the product concept; because the original Vercel project was created through inline deployment rather than a linked Git repository, this archive should be treated as the maintainable source handoff. If the application requires a public Git repository URL, create a new GitHub repository and upload this folder/archive before submission.

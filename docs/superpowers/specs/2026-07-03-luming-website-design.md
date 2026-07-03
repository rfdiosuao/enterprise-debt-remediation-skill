# Luming Website Design

Date: 2026-07-03

## Goal

Build a polished marketing website for LOOM / Luming that sells the strongest monetization path: an "AI employee onboarding" offer for real business workflows.

The site should not present Luming as a generic launcher, chatbot, or RPA utility. It should present Luming as a credible execution system that helps a customer bring one repetitive workflow, connect agents and phones, run the workflow, collect evidence, and turn the result into a reusable template.

## Audience

- Small and midsize business owners who feel operational pressure but do not want to manage technical setup.
- Operations, content, ecommerce, local services, customer support, QA, and internal process teams.
- Resellers or delivery partners who need a premium story they can explain to clients.

## Core Offer

Primary offer: "Bring one repetitive workflow. In 30 minutes, we show how an AI employee can run it."

Commercial package structure:

- Workflow diagnosis: identify the first high-frequency workflow worth automating.
- Onboarding pilot: connect model account, desktop control, phone execution, logs, and reusable templates for one real workflow.
- Execution workbench: ongoing subscription for agents, phone devices, model routing, task templates, and evidence logs.

The emotional premium is as important as the functional value. Customers are not only buying saved hours. They are buying relief, control, status, and the feeling that their company now has an AI execution team.

## Positioning

One-line positioning:

Luming gives your team an AI employee that can actually run repetitive workflows.

Hero copy:

Luming

Give your team an AI employee that can execute.

Start with one repetitive workflow: connect models, connect phones, dispatch tasks, collect logs, and turn daily manual work into a reusable execution loop.

Primary CTA:

Bring one workflow. See it run in 30 minutes.

Secondary CTA:

View the execution loop.

## Narrative Arc

1. Repetitive work is not small work. It quietly consumes people, focus, and management attention.
2. Chatbots do not solve the problem if the workflow still needs a person to watch the screen and phone.
3. Luming turns one workflow into an execution loop: task, phone execution, screenshot/log evidence, result return, template reuse.
4. The customer gets an AI employee onboarding experience, not another dashboard to configure.
5. Start with one workflow, prove it with logs, then expand.

## Page Structure

### 1. Hero

Purpose: Create premium trust and emotional pull in the first viewport.

Content:

- Brand: Luming / LOOM
- Headline: Give your team an AI employee that can execute.
- Supporting copy: one workflow, models, phones, logs, reusable loop.
- CTA pair: 30-minute workflow demo and execution loop anchor.
- Visual: cinematic product mockup showing desktop console, phone matrix, task route, and evidence stream.

### 2. Pain

Purpose: Make the customer feel seen.

Content:

- "Your team is not slow. Too much work still needs someone to stare at the process."
- Examples: cross-system copy, repeated replies, phone posting, screenshot checks, report cleanup, task follow-up.
- Visual: restrained editorial grid of repeated manual actions, not a gloomy stock image.

### 3. Execution Loop

Purpose: Explain what Luming does without jargon.

Flow:

Submit task -> phone executes -> screenshot/log evidence -> result returns -> template improves.

Visual: animated loop diagram with a moving task pulse. This can borrow Open Design's flow/step rhythm, but the objects must be Luming-specific.

### 4. AI Employee Onboarding

Purpose: Sell the package, not just the product.

Content:

- 30-minute workflow demo.
- 7-day pilot.
- Monthly execution workbench.

Visual: "employee file" style panel for an AI worker: skills, connected devices, last run, evidence, reusable templates.

### 5. Product Proof

Purpose: Ground the emotion in real product evidence.

Content:

- Desktop console.
- Mobile console.
- Unified model/account settings.
- Local logs and task state.

Visual: use existing launcher-preview pages and available logo/poster assets as product mockups. Do not rely only on generated art.

### 6. Best-Fit Workflows

Purpose: Help buyers self-qualify.

Segments:

- Content operations.
- Ecommerce/customer support.
- Local services.
- Short video teams.
- Software QA.
- Internal process teams.

Rule: Each segment should name a workflow and a visible output, not generic "efficiency improvement."

### 7. Why It Is Hard To Copy

Purpose: Defend premium pricing.

Content:

- Local bridge and install path.
- Phone execution network.
- Model account and routing layer.
- Workflow templates and evidence history.

Visual: layered moat diagram. Keep it calm and factual.

### 8. Closing CTA

Purpose: Convert.

Content:

- "Bring one real workflow."
- "We run it, show evidence, and give you the pilot plan."
- CTA: Book workflow diagnosis.

Visual: warmer brand image, with product evidence still visible.

## Visual Asset Plan

Use a 80/20 mix:

- 80% product proof: real UI mockups, screenshots, execution-loop diagrams, local assets.
- 20% emotional premium: generated hero and brand atmosphere images.

Required assets:

1. Hero execution workbench image
   - A premium desktop control center with phone matrix, task route, logs, and soft light.
   - Must feel like operational trust, not sci-fi fantasy.

2. Execution loop diagram
   - Task dispatch, phone execution, evidence, return, template.
   - Can be animated with CSS rather than generated as a static illustration.

3. Product mockup frames
   - Use `launcher-preview/index.html`, `desktop-console.html`, `mobile-console.html`, and `settings.html`.
   - Present as real interface evidence.

4. Brand atmosphere image
   - Quiet, high-end Luming mood: mountain-valley echo, signal returning, warm operational calm.
   - Use sparingly near About or closing.

Existing source assets to reuse:

- `assets/logos/loom-luming-app-icon-512.png`
- `assets/logos/loom-luming-wordmark-image2-v3-sword-LOOM.png`
- `projects/loom_enterprise_ai_automation_pitch_ppt169_20260701/images/loom-logo.svg`
- `projects/loom_enterprise_ai_automation_pitch_ppt169_20260701/images/loom_business_architecture_poster.png`
- `projects/loom_enterprise_ai_automation_pitch_ppt169_20260701/images/loom_principle_architecture_poster.png`
- `projects/loom_enterprise_ai_automation_pitch_ppt169_20260701/images/loom_promo_value_poster.png`

## Open Design Reference

Use Open Design as a motion and pacing reference, not as a visual clone.

Useful patterns:

- Large product-forward hero.
- Flow sections that show "brief -> direction -> artifact -> memory" style progression.
- Agent/logo grid energy for capability breadth.
- Desktop-first proof: the product appears to be happening on the user's machine.

Avoid copying:

- Open Design's exact brand language, navigation density, or "Claude Design alternative" framing.
- Decorative motion that does not clarify Luming's execution story.

## Motion Direction

Motion should feel like a calm system coming alive.

Use:

- Slow task pulse moving through the execution loop.
- Subtle phone status blips.
- Log lines appearing one by one.
- Product mockups floating slightly on scroll.
- Gentle reveal of layered moat.

Avoid:

- Constant particle fields.
- Overactive parallax.
- Fake hacker dashboards.
- Generic robot animations.

Respect `prefers-reduced-motion`.

## Design System

Style:

- Premium operational interface.
- Warm ivory and deep teal foundation.
- Cyan for task signal.
- Amber only for "human confirmation" or caution.
- Small radii, crisp rules, dense but breathable layouts.

Typography:

- Chinese-first, business-readable.
- Strong display headline, restrained body text.
- No viewport-scaled font sizes.

Layout:

- First screen must show the brand, the offer, CTA, and a strong product/asset signal.
- Leave a hint of the next section visible on desktop and mobile.
- Use cards only for repeated workflow items, product panels, or plan tiers.
- Do not put cards inside cards.

## Content Guardrails

Do not claim:

- Full automation of every workflow.
- Guaranteed cost savings.
- Fully autonomous operation without human approval.
- Security/compliance leadership without evidence.

Prefer:

- "Start with one stable repetitive workflow."
- "Run a pilot and measure baseline vs result."
- "Logs, screenshots, and task state make the result reviewable."
- "Human confirmation stays in the loop where needed."

## Implementation Direction

Build a static marketing site first, with no backend dependency.

Recommended shape:

- A single polished landing page as the first deliverable.
- Local assets copied or referenced from existing project folders.
- CSS animations for the execution loop.
- Responsive desktop and mobile layouts.
- Optional generated bitmap hero/brand images if image generation is available.

If Open Design is used:

- Use it to generate initial visual directions and image assets.
- Bring the selected output back into the repo as ordinary website assets.
- Final code should still be inspectable, editable, and runnable without relying on Open Design at runtime.

## Verification

Before claiming the site is done:

- Run the local dev server or static preview.
- Check desktop and mobile screenshots.
- Confirm hero, product mockups, CTA, and execution loop are visible in the first scroll path.
- Confirm images load from local paths.
- Confirm no text overlaps or overflows on mobile.
- Confirm motion respects reduced-motion.


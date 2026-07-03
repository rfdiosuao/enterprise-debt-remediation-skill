# Luming Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a standalone static preview page for Luming that uses the approved Luming brand assets and sells the "AI employee that can execute" positioning.

**Architecture:** Create an isolated `luming-preview/` static site so the existing root docs and old `index.html` remain untouched. The page will use semantic HTML, one CSS file for visual system and responsive layout, and a small JavaScript file for smooth anchor scrolling, reduced-motion-aware reveals, and a lightweight execution-loop animation.

**Tech Stack:** Static HTML, CSS, and vanilla JavaScript; no backend, no build step, no new npm dependency.

## Global Constraints

- Use only Luming-specific assets for brand presentation.
- Do not present `launcher-preview/*` as Luming material.
- Use `assets/logos/loom-luming-wordmark-black-white.jpg`, `assets/logos/loom-luming-wordmark-image2-v3-sword-LOOM.png`, and `assets/logos/loom-luming-app-icon-512.png`.
- Use existing LOOM poster assets from `projects/loom_enterprise_ai_automation_pitch_ppt169_20260701/images/`.
- Avoid claims of full automation, guaranteed cost savings, fully autonomous operation without human approval, or security/compliance leadership without evidence.
- Respect `prefers-reduced-motion`.
- Build a first version that works by opening `luming-preview/index.html` directly.

---

## File Structure

- Create `luming-preview/index.html`: the complete landing page structure, copy, CTAs, and asset references.
- Create `luming-preview/styles.css`: all layout, typography, color tokens, responsive behavior, and motion.
- Create `luming-preview/script.js`: small interaction layer for anchor scrolling, reveal classes, and loop pulse state.
- Modify none of the existing root docs pages in this first preview.

## Tasks

### Task 1: Static Page Structure

**Files:**
- Create: `luming-preview/index.html`

**Interfaces:**
- Consumes: approved asset paths from the spec.
- Produces: semantic sections with stable IDs: `top`, `loop`, `proof`, `workflows`, `pilot`.

- [ ] **Step 1: Create the HTML shell**

Add a full HTML document with:

- `<link rel="stylesheet" href="./styles.css" />`
- `<script src="./script.js" defer></script>`
- Header nav links to `#loop`, `#proof`, `#workflows`, `#pilot`
- Hero copy: `给你的团队，上岗一名会执行的 AI 员工`
- Primary CTA: `带一个流程来，30 分钟跑给你看`
- Sections for pain, execution loop, onboarding package, product proof, workflow fit, moat, and closing CTA.

- [ ] **Step 2: Verify the file opens**

Run: `Test-Path -LiteralPath 'D:\Axiangmu\U盘启动器\luming-preview\index.html'`

Expected: `True`

### Task 2: Visual System And Responsive Layout

**Files:**
- Create: `luming-preview/styles.css`

**Interfaces:**
- Consumes: class names from `index.html`.
- Produces: a polished static page that renders without JavaScript.

- [ ] **Step 1: Add CSS tokens and base layout**

Define CSS custom properties:

- `--ink: #071b24`
- `--deep: #082a2e`
- `--teal: #0b6a5d`
- `--signal: #20d6c8`
- `--gold: #c99a4a`
- `--paper: #f8f3e6`
- `--paper-2: #efe7d6`

Use a Chinese-first font stack and section spacing that works at 360px and 1440px widths.

- [ ] **Step 2: Add hero, loop, proof, and CTA styles**

Implement:

- Dark editorial hero with black-white wordmark and app icon.
- Workbench visual panel using CSS-built task cards and phone tiles.
- Execution loop with five fixed nodes and a moving pulse.
- Product proof using only Luming posters and brand assets.
- Mobile layout with no horizontal overflow.

- [ ] **Step 3: Verify CSS file exists**

Run: `Test-Path -LiteralPath 'D:\Axiangmu\U盘启动器\luming-preview\styles.css'`

Expected: `True`

### Task 3: Lightweight Interactions

**Files:**
- Create: `luming-preview/script.js`

**Interfaces:**
- Consumes: `[data-reveal]`, `.loop-node`, and `.loop-pulse` elements from HTML.
- Produces: progressive reveal and loop active-state behavior.

- [ ] **Step 1: Add JavaScript interactions**

Implement:

- Smooth scrolling for same-page anchors when reduced motion is not requested.
- IntersectionObserver that adds `.is-visible` to `[data-reveal]`.
- A 5-step loop state that changes the active `.loop-node` every 1600ms unless reduced motion is requested.

- [ ] **Step 2: Verify JS file exists**

Run: `Test-Path -LiteralPath 'D:\Axiangmu\U盘启动器\luming-preview\script.js'`

Expected: `True`

### Task 4: Static Verification

**Files:**
- Verify: `luming-preview/index.html`
- Verify: `luming-preview/styles.css`
- Verify: `luming-preview/script.js`

**Interfaces:**
- Consumes: all preview files.
- Produces: confidence that the page opens locally and references local assets.

- [ ] **Step 1: Check asset references**

Run: `rg -n "launcher-preview|http://|https://|TODO|TBD|全自动|保证|行业领先|革命" luming-preview docs/superpowers/plans/2026-07-03-luming-landing-page.md`

Expected: no hits for forbidden claims or `launcher-preview`; external font links are not used.

- [ ] **Step 2: Check file sizes**

Run: `Get-ChildItem -LiteralPath 'D:\Axiangmu\U盘启动器\luming-preview' | Select-Object Name,Length`

Expected: three files exist and have nonzero sizes.

- [ ] **Step 3: Manual browser check**

Open: `D:\Axiangmu\U盘启动器\luming-preview\index.html`

Expected: first viewport shows Luming brand, offer, CTA, and product workbench visual. The page remains usable with JavaScript disabled.


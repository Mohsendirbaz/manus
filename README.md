# Ghost Hydrogen Powered Autonomous Vehicle with Event Processing Unit Microchip
## درگاه اطلاع‌رسانی خودروی هیدروژنی شبح با راهبرد EPU

**Version 2.0 · 336 Slides · 6 Decks · Bilingual (EN / FA)**

---

## Overview

This repository contains the full source code of the **EPU Strategy Information Portal** — a bilingual (English / Persian), fully interactive, single-page presentation platform built for the Ghost Hydrogen Powered Autonomous Vehicle project. The platform presents 336 curated slides across 6 thematic decks, covering the complete technical, scientific, financial, and biographical narrative of the Ghost H₂ AV ecosystem.

The portal is designed as a living strategic document: slides are searchable, filterable by deck and act, and viewable in full-screen modal with bilingual toggling. All content is grounded in peer-reviewed physics, chemical engineering principles, and the founder's original research.

---

## Live Domains

| Domain | Purpose |
|--------|---------|
| `ghost.manus.space` | Primary public portal |
| `epustrategy-beaks43m.manus.space` | Secondary / staging |

---

## Deck Summaries

### EPU · Core Strategy (60 slides)

The foundational deck. It opens by diagnosing the central failure mode of modern autonomous vehicle architectures — statistical decision-making under physical uncertainty — and argues that safety cannot be probabilistic. The EPU (Event Processing Unit) is introduced as a physics-first, deterministic safety compute core that sits between raw sensor data and vehicle actuation. The deck unfolds across four acts: the paradigm shift from statistical to deterministic AI, the EPU as a "priceless tool" for commandless governance, the 10-Gate hardware architecture that enforces physical law at the silicon level, and a roadmap toward regulatory certification and global deployment. The final slides establish physics itself as the competitive moat — an argument that no software-only competitor can replicate.

**Arc:** Problem → Tool → Architecture → Roadmap

---

### Deck A · Unified Field Protocol — UFP (30 slides)

A rigorous mathematical treatment of the sensor fusion and decision algebra that underpins the EPU. The deck begins with the Separation Problem — the impossibility of cleanly decomposing multi-modal sensor streams — and introduces the Universal Filtration Primitive (UFP) as the solution. It develops a 10-path taxonomy of signal types, a Composition Algebra for combining filtered outputs, and the LDA (Layered Decision Architecture) core and its variants. Performance benchmarks and formal validation close the deck, followed by a synthesis section that maps UFP's mathematical foundations onto the EPU hardware gates and identifies open research problems and standalone applications in genomics and agent state management.

**Arc:** Problem → Primitive → Algebra → Validation → Open Problems

---

### Deck B · Temporal Reasoning (30 slides)

Addresses the dimension that most AV architectures ignore: time. The deck opens with the Temporal State Problem — the fact that sensor readings, decisions, and actuation all exist at different points in time, and naive fusion destroys causal ordering. It develops a differential geometry of temporal evolution, introduces T₀ Manager as the EPU's real-time clock arbiter, and formalizes the operator theory governing state transitions. Landauer's principle is invoked to establish the thermodynamic lower bound on reversible computation, constraining what the EPU can physically guarantee. The deck closes by integrating temporal reasoning with LLM inference layers and drawing connections to category theory, type theory, and a universal state management protocol — positioning tense grammar as a formal engineering primitive.

**Arc:** Problem → Geometry → Operators → Thermodynamics → LLM Integration → Theory

---

### Deck C · Ghost Autonomous Vehicle Platform (60 slides)

The commercial and engineering face of the project. It opens with the three mathematical pillars of Ghost safety and immediately grounds them in a $2.1 trillion market opportunity by 2035. The deck covers the Physics-Deterministic Core (PDC) design philosophy, the Strategic Asset and Go-to-market Plan (SAGP), and a deep physics foundation section that certifies every design decision against ISO 26262 and FMVSS standards. An architecture deep-dive follows, covering sensor suite governance, the constitutional law model of vehicle control, and the validation courts framework for regulatory transparency. Financial modeling, competitive moat analysis, and a three-version technology roadmap (v1.0 → v2.0 → v3.0) lead to a 2030 vision in which Ghost EPU becomes the global safety compute standard for autonomous mobility.

**Arc:** Vision → Market → Physics → Architecture → Finance → Roadmap → 2030

---

### Deck D · Semiconductor & Multi-Agent Architecture (120 slides)

The largest and most technically dense deck. It introduces EPU-MAS — the multi-agent software nervous system that runs on EPU silicon — and develops the complete agent taxonomy: roles, privilege levels, and capability boundaries. The deck progresses through the full EPU-MAS stack: the message bus and communication protocols, Byzantine fault-tolerant consensus mechanisms, layered memory architecture (volatile, persistent, and shared), mechanical signaling protocols for hardware-software co-design, and the coordination layer governing agent stations and brokers. An LLM integration layer bridges natural language reasoning with deterministic silicon constraints. The deck closes with a system synthesis showing how EPU-MAS and EPU compose into a single unified intelligence stack, followed by an investment thesis articulating the competitive moat and a 2030 vision for autonomous fleet intelligence at global scale.

**Arc:** Overview → Taxonomy → Communication → Consensus → Memory → Signaling → Coordination → LLM → Synthesis → Investment

---

### Deck E · Thermal Management & Hydrogen Systems (30 slides)

An executive-level engineering deck focused on the physical systems that make the Ghost H₂ platform viable at scale. It opens by reaffirming the EPU vision in the context of hydrogen propulsion and establishes that EPU is a safety compute core, not a driving assistant. The cabin controller design is detailed, followed by the hydrogen platform integration — covering fuel cell stack management, thermal domain architecture, and range feasibility for a 2,000-mile target. Integrated electronics and the sensor governance charter are presented, then the deck pivots to strategic economics: a TEA/LCA (Techno-Economic Analysis / Life Cycle Assessment) moat analysis comparing H₂ against battery-electric across three scenarios. The final slide argues that the methodology itself — physics-certified, application-neutral — is the deepest competitive moat, positioning EPU as a deployment platform beyond automotive.

**Arc:** Vision → Cabin → Hydrogen → Electronics → Sensors → Economics → Moat

---

### Deck F · Founder Biography (6 slides)

Six cinematic slides documenting the multidisciplinary expertise that converges in the Ghost H₂ EPU project. Each slide is accompanied by a bespoke AI-generated marketing image served from CDN.

| # | Title | Summary |
|---|-------|---------|
| F-1 | Petroleum Engineering & Simon CO₂ Sequestration | The founder's petroleum engineering background and work on Simon subsurface reserves for carbon sequestration — establishing deep geological and thermodynamic intuition. |
| F-2 | Chemical Engineering PhD & NH₃ Pathways | PhD-level chemical engineering expertise applied to ammonia synthesis pathways — the same reaction engineering principles that govern hydrogen production and semiconductor process chemistry. |
| F-3 | Hydrogen Pure Streams & Vertical Integration | How the founder's expertise in producing pure hydrogen streams from industrial processes maps directly onto the Ghost H₂ fuel supply chain — a case of vertical integration of knowledge. |
| F-4 | Chip Manufacturing & Semiconductor Chemistry | The chemical engineering principles underlying semiconductor fabrication — CVD, plasma etching, dopant diffusion — and their direct relevance to EPU chip design and process node selection. |
| F-5 | Zero-to-1 Computing & the G10 Thesis | The founder's G10 multi-gate thesis, which established a zero-to-one framework for computing architectures — the intellectual precursor to the EPU's 10-Gate design. |
| F-6 | Neural Networks 2016 → LLM 2023 | Early exposure to neural network modeling in the 2016 thesis provided the foundation for becoming an LLM practitioner from the first available models in 2023 — a seven-year arc of AI continuity that informs the EPU's LLM integration layer. |

---

## Slide Count Summary

| Deck | File | Slides | Theme |
|------|------|--------|-------|
| EPU | `slides60.ts` | 60 | Core EPU Strategy |
| A | `slidesA.ts` | 30 | Unified Field Protocol |
| B | `slidesB.ts` | 30 | Temporal Reasoning |
| C | `slidesC.ts` | 60 | Ghost AV Platform |
| D | `slidesD.ts` | 120 | Semiconductor / Multi-Agent |
| E | `slidesE.ts` | 30 | Thermal & Hydrogen Systems |
| F | `slidesBio.ts` | 6 | Founder Biography |
| **Total** | | **336** | |

---

## Slide Architecture — Act Structure

### EPU · استراتژی (60 slides) — `slides60.ts`

| Act | Title (EN) | Title (FA) | Slides |
|-----|-----------|-----------|--------|
| I | The Problem & The Paradigm Shift | مسئله و تحول پارادایم | 1–15 |
| II | The Priceless Tool & Strategic Vision | ابزار گران‌بها و چشم‌انداز راهبردی | 16–30 |
| III | The 10-Gate Architecture | معماری ۱۰ دروازه | 31–45 |
| IV | The Roadmap & The Future | نقشه راه و آینده | 46–60 |

**Slide 1:** Ghost Hydrogen Powered Autonomous Vehicle with Event Processing Unit microchip / درگاه اطلاع‌رسانی خودروی هیدروژنی شبح با راهبرد EPU

---

### Deck A · UFP (30 slides) — `slidesA.ts`

| Act | Title (EN) | Title (FA) |
|-----|-----------|-----------|
| Foundation | Foundation | پایه‌های نظری |
| Taxonomy | 10-Path Taxonomy | طبقه‌بندی ۱۰ مسیره |
| Composition | Composition Algebra | جبر ترکیب |
| LDA Core | LDA Core | هسته LDA |
| LDA Variants | LDA Variants | انواع LDA |
| Decision Framework | Decision Framework | چارچوب تصمیم |
| Performance | Performance & Validation | عملکرد و اعتبارسنجی |
| Synthesis | Synthesis | ترکیب و چشم‌انداز |

---

### Deck B · Temporal (30 slides) — `slidesB.ts`

| Act | Title (EN) | Title (FA) |
|-----|-----------|-----------|
| Foundation | Foundation | پایه |
| T0Manager | T₀ Manager | مدیریت T₀ |
| Operators | Operators | عملگرها |
| Landauer | Landauer Principle | اصل لاندائر |
| Constraints | Constraints | محدودیت‌ها |
| LLM | LLM Integration | یکپارچه‌سازی LLM |
| Synthesis | Synthesis | ترکیب |

---

### Deck C · Ghost (60 slides) — `slidesC.ts`

| Act | Title (EN) | Title (FA) |
|-----|-----------|-----------|
| Executive Vision | Executive Vision | چشم‌انداز اجرایی |
| Design Philosophy | Design Philosophy (PDC) | فلسفه طراحی |
| Strategic Assets | Strategic Assets (SAGP) | دارایی‌های استراتژیک |
| Physics Foundation | Physics Foundation | پایه فیزیکی |
| Architecture Deep | Architecture Deep Dive | معماری عمیق |
| Financial & Business | Financial & Business | مالی و کسب‌وکار |
| Validation & Results | Validation & Results | اعتبارسنجی و نتایج |
| Integration & Future | Integration & Future | یکپارچه‌سازی و آینده |

---

### Deck D · Semiconductor / نیمه‌هادی (120 slides) — `slidesD.ts`

| Act | Title (EN) | Title (FA) |
|-----|-----------|-----------|
| Agent Foundation | Agent Foundation | بنیاد عوامل هوشمند |
| Communication | Communication & Message Bus | گذرگاه پیام و ارتباط |
| Trust, Consensus & BFT | Trust, Consensus & BFT | اعتماد، اجماع و تاب‌آوری بیزانسی |
| Memory Architecture | Memory Architecture | لایه‌های حافظه هوشمند |
| Mechanical Signaling | Mechanical Signaling Protocol | پروتکل سیگنال‌دهی مکانیکی |
| Coordination | Coordination & Stations | هماهنگی ایستگاه‌ها و کارگزاران |
| LLM Integration | LLM Integration Layer | پیوند هوش مصنوعی و سیلیکون |
| System Synthesis | System Synthesis | برآیند یکپارچه‌سازی EPU-MAS و EPU |

---

### Deck E · Thermal / حرارتی (30 slides) — `slidesE.ts`

| Act | Title (EN) | Title (FA) |
|-----|-----------|-----------|
| Executive Framing | Executive Framing | چارچوب اجرایی |
| Cabin Controller | Cabin Controller | کنترلر کابین |
| Hydrogen Platform | Hydrogen Platform | پلتفرم هیدروژن |
| Integrated Electronics | Integrated Electronics | الکترونیک یکپارچه |
| Sensor Suite & Governance | Sensor Suite & Governance | منشور حسگرها |
| TEA/LCA & Strategic Moat | TEA/LCA & Strategic Moat | مزیت رقابتی TEA/LCA |

---

### Deck F · Founder / بنیان‌گذار (6 slides) — `slidesBio.ts`

| Act | Title (EN) | Title (FA) |
|-----|-----------|-----------|
| Subsurface & CO₂ | Subsurface & CO₂ | زیرسطحی و CO₂ |
| NH₃ Synthesis | NH₃ Synthesis | سنتز آمونیاک |
| H₂ Integration | H₂ Integration | یکپارچه‌سازی H₂ |
| Semiconductor Chem | Semiconductor Chemistry | شیمی نیمه‌هادی |
| Zero-to-1 Computing | Zero-to-1 Computing | صفر تا یک محاسبات |
| Neural Nets → LLM | Neural Networks → LLM | شبکه عصبی تا LLM |

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 7, Tailwind CSS 4 |
| Backend | Express 4, tRPC 11, Node.js 22 |
| Database | MySQL / TiDB via Drizzle ORM |
| Auth | Manus OAuth (JWT session cookies) |
| Type Safety | TypeScript 5.9, Superjson |
| Testing | Vitest |
| Fonts | Playfair Display, DM Sans, Space Mono, Vazirmatn (RTL) |
| Image CDN | AWS CloudFront (all slide images) |

---

## Project Structure

```
client/
  src/
    data/
      slides60.ts      ← EPU deck (60 slides)
      slidesA.ts       ← Deck A · UFP (30 slides)
      slidesB.ts       ← Deck B · Temporal (30 slides)
      slidesC.ts       ← Deck C · Ghost (60 slides)
      slidesD.ts       ← Deck D · Semiconductor (120 slides)
      slidesE.ts       ← Deck E · Thermal (30 slides)
      slidesBio.ts     ← Deck F · Founder (6 slides)
      translations60.ts← UI strings (EN/FA)
    pages/
      Home.tsx         ← Main portal (unified slide viewer)
    components/
      Header.tsx
      HeroSection.tsx
      SlideCard.tsx
      SlideModal.tsx
      SectionNav.tsx
    contexts/
      LanguageContext.tsx
drizzle/
  schema.ts            ← Database schema
server/
  routers.ts           ← tRPC procedures
  db.ts                ← Query helpers
```

---

## Features

- **Bilingual toggle** — full EN ↔ FA switch with RTL layout support (Vazirmatn font)
- **Deck filter** — filter by any of the 6 decks via pill buttons or tab bar
- **Full-text search** — searches titles, narratives, key points, and tags in both languages
- **Slide modal** — full-screen view with act label, key points, strategic context, and tags
- **Keyboard navigation** — arrow keys cycle through slides in modal
- **Dynamic counts** — slide count and deck count update automatically as data files grow
- **CDN images** — all 336 slide images served from AWS CloudFront for fast global delivery

---

## Running Locally

```bash
# Install dependencies
pnpm install

# Push database schema
pnpm db:push

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

Environment variables are managed via the Manus platform secrets system. See `server/_core/env.ts` for the full list of required variables.

---

## Version History

| Version | Slides | Notes |
|---------|--------|-------|
| v1.0 | 60 | Initial EPU deck |
| v1.5 | 180 | Added Decks A, B, C |
| v1.8 | 330 | Added Decks D, E; confirmed and approved |
| **v2.0** | **336** | Added Deck F (Founder biography, 6 cinematic slides); slide 1 title updated to Ghost H₂ EPU branding |

---

## Founder

**Mohsen Dirbaz** — Petroleum Engineer (Simon subsurface CO₂ sequestration), Chemical Engineer (NH₃ synthesis pathways, semiconductor chemistry), Computer Scientist (G10 thesis, neural networks 2016, LLM practitioner from 2023). The Ghost H₂ AV project represents the convergence of all these disciplines into a single physics-certified, commandless autonomous vehicle platform.

---

*Ghost Hydrogen Powered Autonomous Vehicle with Event Processing Unit microchip — v2.0 · March 2026*

// translations60.ts — Complete bilingual translations for all 60 EPU Strategy slides
// English + Farsi (elevated native prose, RTL-ready)

export type Language60 = "en" | "fa";

export interface SlideTranslation60 {
  title: string;
  summary: string;
  keyPoints: string[];
  quote: string;
  tags: string[];
}

export interface Translations60 {
  en: SlideTranslation60[];
  fa: SlideTranslation60[];
}

// ─── UI STRINGS ────────────────────────────────────────────────────────────────
export const ui60 = {
  en: {
    siteTitle: "EPU Strategy",
    siteSubtitle: "Event Processing Unit — Computational Safety Core for Driverless H₂ Autonomy",
    eyebrow: "Confidential Concept Study",
    heroDescription:
      "A physics-certified, carbon-auditable safety architecture for the next generation of hydrogen-powered autonomous vehicles — engineered without a steering wheel, governed by deterministic law.",
    searchPlaceholder: "Search slides, concepts, or technical terms…",
    allSections: "All",
    slidesFound: (n: number) => `${n} slide${n !== 1 ? "s" : ""} found`,
    act: "Act",
    slideOf: (n: number, total: number) => `${n} of ${total}`,
    close: "Close",
    prev: "Previous",
    next: "Next",
    keyPoints: "Key Points",
    tags: "Tags",
    uploadFile: "Upload File",
    myFiles: "My Files",
    addNote: "Add Note",
    notes: "Notes",
    login: "Sign In",
    logout: "Sign Out",
    noResults: "No slides match your search.",
    noResultsHint: "Try a different keyword or clear the active filter.",
    heroTitle: "EPU Strategy — Driverless H₂ Autonomy Platform",
  },
  fa: {
    siteTitle: "راهبرد EPU",
    siteSubtitle: "واحد پردازش رویداد — هسته‌ی ایمنی محاسباتی برای خودروی خودران هیدروژنی",
    eyebrow: "مطالعه‌ی مفهومی محرمانه",
    heroDescription:
      "معماری ایمنی مبتنی بر فیزیک و قابل ممیزی کربن برای نسل بعدی خودروهای خودران هیدروژنی — طراحی‌شده بدون فرمان، اداره‌شده با قانون قطعی.",
    searchPlaceholder: "جستجو در اسلایدها، مفاهیم، یا اصطلاحات فنی…",
    allSections: "همه",
    slidesFound: (n: number) => `${n} اسلاید یافت شد`,
    act: "پرده",
    slideOf: (n: number, total: number) => `${n} از ${total}`,
    close: "بستن",
    prev: "قبلی",
    next: "بعدی",
    keyPoints: "نکات کلیدی",
    tags: "برچسب‌ها",
    uploadFile: "بارگذاری فایل",
    myFiles: "فایل‌های من",
    addNote: "افزودن یادداشت",
    notes: "یادداشت‌ها",
    login: "ورود",
    logout: "خروج",
    noResults: "هیچ اسلایدی با جستجوی شما مطابقت ندارد.",
    noResultsHint: "کلمه‌ی دیگری امتحان کنید یا فیلتر فعال را پاک کنید.",
    heroTitle: "راهبرد EPU — بستر خودروی خودران هیدروژنی",
  },
};

// ─── SLIDE TRANSLATIONS ────────────────────────────────────────────────────────
export const slideTranslations60: Translations60 = {
  en: [
    // ACT I: The Problem & Paradigm Shift (Slides 1–15)
    {
      title: "The Broken Promise of Probabilistic Safety",
      summary:
        "Every autonomous vehicle on the road today is governed by a statistical wager. The industry has normalized a fundamental impossibility: certifying safety through probability distributions that, by mathematical definition, cannot guarantee zero-failure outcomes. This is not a gap in engineering — it is a gap in epistemology.",
      keyPoints: [
        "ISO 26262 ASIL-D targets 10⁻⁹ failures/hour — a statistical bound, not a physical guarantee",
        "No probability distribution can certify zero-failure behavior in open-world environments",
        "The 'rare event' problem: tail risks compound across millions of vehicle-hours",
        "Current AV architectures inherit automotive safety culture built for human-driven vehicles",
        "EPU replaces the probabilistic wager with physics-certified deterministic bounds",
      ],
      quote:
        "You cannot certify safety with a probability. You can only certify it with a proof.",
      tags: ["Safety Epistemology", "ISO 26262", "Probabilistic Failure", "Paradigm Shift"],
    },
    {
      title: "Why Steering Wheels Are an Architectural Mistake",
      summary:
        "The steering wheel is not a safety feature — it is a liability. Its presence in an autonomous vehicle creates a dual-authority problem: two control systems competing for the same actuator, with no deterministic protocol for arbitration. Removing it is not a design choice; it is an architectural necessity.",
      keyPoints: [
        "Dual-authority conflict: human override and autonomous command share one actuator",
        "Takeover latency (2.5–7 seconds) creates an uncontrolled transition zone",
        "Human factors research shows degraded situational awareness after Level 3 disengagement",
        "Steering wheel removal forces full commitment to the autonomous safety chain",
        "EPU's deterministic arbitration only functions without human authority ambiguity",
      ],
      quote:
        "The steering wheel is the architectural confession that we do not yet trust the machine.",
      tags: ["Steering Wheel Removal", "Dual Authority", "Takeover Latency", "Architecture"],
    },
    {
      title: "The Hydrogen Imperative",
      summary:
        "Battery-electric autonomy carries a hidden contradiction: the energy density required for long-range autonomous operation conflicts with the weight and thermal management demands of high-capacity battery packs. Hydrogen resolves this contradiction — but introduces a new one: the safety architecture must now govern both the vehicle dynamics and the hydrogen system simultaneously.",
      keyPoints: [
        "Gravimetric energy density: H₂ at 33.3 kWh/kg vs. Li-ion at 0.25 kWh/kg",
        "Fuel cell efficiency: 60% electrical vs. 20–25% for ICE",
        "Hydrogen introduces triple thermal domain: FC stack, H₂ storage, cabin",
        "EPU must govern all three thermal domains within deterministic WCET bounds",
        "LH₂ storage at -253°C requires continuous cryogenic monitoring within the safety loop",
      ],
      quote: "Hydrogen does not just power the vehicle. It restructures the entire safety problem.",
      tags: ["Hydrogen", "Fuel Cell", "Thermal Management", "Energy Density"],
    },
    {
      title: "The EPU Thesis: From Probability to Physics",
      summary:
        "The EPU is not a faster processor. It is a different category of computational artifact — one whose correctness is certified not by testing but by proof. Every timing bound is derived from physical law. Every register allocation is formally verified. Every gate is a theorem, not a heuristic.",
      keyPoints: [
        "WCET (Worst-Case Execution Time) derived from physics, not statistical sampling",
        "512-register file eliminates pipeline stalls that invalidate timing proofs",
        "10-gate mandatory sequence: each gate is a formal verification checkpoint",
        "Dimensionless distance metric D(s,a) unifies all sensor modalities under one law",
        "Gasification proof: formal guarantee that no unprocessed event survives gate passage",
      ],
      quote:
        "A theorem does not fail at 3 AM in the rain. A statistical model does.",
      tags: ["EPU Architecture", "WCET", "Formal Verification", "Determinism"],
    },
    {
      title: "The 10-Gate Mandatory Sequence",
      summary:
        "The EPU processes every safety-critical event through exactly ten gates, in fixed order, with no bypass and no exception. This is not a pipeline — it is a proof structure. Each gate transforms the event's representation and verifies a specific physical invariant before passing it to the next.",
      keyPoints: [
        "Gate 1 (Ingestion): raw sensor data normalized to dimensionless D(s,a) metric",
        "Gate 2 (Classification): event typed against the 47-class taxonomy",
        "Gate 3 (Temporal Binding): event timestamped within ±0.1μs across all sensor modalities",
        "Gates 4–7: physical plausibility, kinematic consistency, threat assessment, response selection",
        "Gates 8–10: actuation command, safety interlock verification, audit log commit",
      ],
      quote: "Ten gates. No exceptions. Every event. Every time.",
      tags: ["10-Gate Sequence", "Formal Pipeline", "Event Processing", "Safety Invariants"],
    },
    {
      title: "The Dimensionless Distance Metric D(s,a)",
      summary:
        "The core mathematical innovation of the EPU is a single dimensionless metric that unifies LiDAR point clouds, camera pixels, radar returns, and ultrasonic echoes into one comparable quantity. D(s,a) is not a fusion algorithm — it is a physical invariant that every sensor modality must satisfy before an event can proceed past Gate 1.",
      keyPoints: [
        "D(s,a) = f(range, bearing, relative velocity, sensor confidence) — dimensionless by construction",
        "Eliminates the sensor fusion problem by replacing it with a physical constraint",
        "Any sensor reading that cannot produce a valid D(s,a) is rejected at Gate 1",
        "Enables formal comparison of heterogeneous sensor data without unit conversion",
        "Proven to be monotonically decreasing with physical proximity — a topological guarantee",
      ],
      quote:
        "One number. Every sensor. One law.",
      tags: ["D(s,a) Metric", "Sensor Fusion", "Dimensionless", "Physical Invariant"],
    },
    {
      title: "The 512-Register File: Why It Matters",
      summary:
        "Conventional processors use register files of 16–64 registers, relying on cache hierarchies to manage working state. Cache misses introduce non-deterministic latency that invalidates WCET proofs. The EPU's 512-register file is large enough to hold the entire working state of the 10-gate sequence without a single cache access — making timing proofs physically valid.",
      keyPoints: [
        "16–64 registers in conventional CPUs → cache misses → non-deterministic latency",
        "512 registers hold the complete 10-gate working state in-register",
        "Zero cache accesses during safety-critical event processing",
        "WCET proof validity requires zero non-deterministic memory latency",
        "Register allocation formally verified against the 10-gate sequence requirements",
      ],
      quote:
        "The register file is not a performance optimization. It is a proof enabler.",
      tags: ["512-Register File", "WCET", "Cache Elimination", "Formal Verification"],
    },
    {
      title: "The Gasification Proof",
      summary:
        "The gasification proof is the EPU's most powerful formal guarantee: no event that enters the 10-gate sequence can exit without being fully processed. Partial processing — the source of most safety-critical software failures — is mathematically impossible by construction. Every event either completes all ten gates or is rejected at the point of failure with a certified error code.",
      keyPoints: [
        "Gasification: formal proof that partial event processing is structurally impossible",
        "Every event exit point is a gate boundary — no mid-gate exits permitted",
        "Failed events produce certified error codes, not silent failures",
        "Proof constructed using Petri net reachability analysis",
        "Validated against 10⁶ synthetic adversarial event sequences",
      ],
      quote:
        "An event either completes the proof or it does not exist.",
      tags: ["Gasification Proof", "Partial Processing", "Petri Net", "Formal Guarantee"],
    },
    {
      title: "The 47-Class Event Taxonomy",
      summary:
        "The EPU classifies every incoming event against a formally defined taxonomy of 47 event classes, derived from a comprehensive analysis of AV incident databases, physical edge cases, and adversarial scenarios. The taxonomy is not a lookup table — it is a partition of the event space that is provably complete and mutually exclusive.",
      keyPoints: [
        "47 classes derived from NHTSA AV incident database + physical edge case analysis",
        "Provably complete: every physically possible event maps to exactly one class",
        "Mutually exclusive: no event can belong to two classes simultaneously",
        "Each class has a certified response protocol registered in the ISA",
        "Taxonomy formally verified using set-theoretic completeness proof",
      ],
      quote:
        "If it can happen in the physical world, it has a class. If it has a class, it has a certified response.",
      tags: ["47-Class Taxonomy", "Event Classification", "Completeness Proof", "ISA"],
    },
    {
      title: "The Custom ISA: Instructions as Physical Law",
      summary:
        "The EPU's Instruction Set Architecture is not derived from x86, ARM, or RISC-V. It is designed from the 10-gate sequence upward: every instruction corresponds to a physical operation in the safety pipeline, and every instruction's timing is a theorem, not a measurement. The ISA has 127 instructions — each one formally specified.",
      keyPoints: [
        "127 instructions, each formally specified with WCET bound and physical semantics",
        "No general-purpose instructions: every opcode maps to a gate operation",
        "Instruction timing derived from silicon physics, not benchmark measurement",
        "ISA formally verified against the 10-gate sequence completeness requirement",
        "No speculative execution, no branch prediction — determinism by design",
      ],
      quote:
        "An instruction is a physical act. Its timing is a physical fact.",
      tags: ["Custom ISA", "127 Instructions", "Determinism", "Physical Semantics"],
    },
    {
      title: "FPGA Prototype: The Proof of Physical Realizability",
      summary:
        "Before committing to ASIC fabrication, the EPU architecture must be proven physically realizable on FPGA. The FPGA prototype is not a performance demonstration — it is a formal verification that the 10-gate sequence, the 512-register file, and the custom ISA can be implemented in silicon without violating any timing invariant.",
      keyPoints: [
        "Target: Xilinx UltraScale+ FPGA, 16nm FinFET process",
        "FPGA prototype validates timing closure for all 127 ISA instructions",
        "512-register file implemented as distributed RAM — zero BRAM latency",
        "10-gate sequence verified at 500 MHz with 2ns timing margin",
        "Prototype cost: $2.1M (included in Phase 1 budget)",
      ],
      quote:
        "The FPGA prototype does not demonstrate performance. It proves existence.",
      tags: ["FPGA Prototype", "Xilinx UltraScale+", "Timing Closure", "Physical Realizability"],
    },
    {
      title: "ASIC Roadmap: From Proof to Production",
      summary:
        "The ASIC implementation of the EPU is a 3nm process design targeting 1.2 GHz operation with 8W thermal envelope. The transition from FPGA to ASIC is not a scaling exercise — it is a re-verification exercise. Every timing proof must be re-derived for the new process node, and every physical invariant must be re-certified.",
      keyPoints: [
        "Target: TSMC 3nm N3E process, 1.2 GHz, 8W TDP",
        "Die area: 42mm² (estimated), including 512-register file and 10-gate pipeline",
        "Re-verification required: all 127 ISA instruction timings re-derived for 3nm",
        "Estimated NRE cost: $28M (included in Phase 2 budget)",
        "Production cost target: $340/unit at 100K volume",
      ],
      quote:
        "The ASIC does not inherit the FPGA proof. It earns its own.",
      tags: ["ASIC", "TSMC 3nm", "NRE Cost", "Production Roadmap"],
    },
    {
      title: "The Sensor Suite Constitution",
      summary:
        "The EPU governs a sensor suite of 47 modalities through a formal document called the Sensor Suite Constitution — a set of invariants that every sensor must satisfy before its data is admitted to Gate 1. The Constitution is not a specification document; it is a legal instrument with formal enforcement mechanisms.",
      keyPoints: [
        "47 sensor modalities: LiDAR (4), camera (12), radar (6), ultrasonic (8), IMU (3), GPS (2), thermal (6), V2X (6)",
        "Each modality has a certified D(s,a) contribution function",
        "Constitution defines minimum data rates, maximum latency, and failure modes for each modality",
        "Sensor failure triggers certified degraded-mode protocol, not system shutdown",
        "Constitution formally verified against the 10-gate sequence data requirements",
      ],
      quote:
        "The sensor suite is not a collection of devices. It is a governed federation.",
      tags: ["Sensor Constitution", "47 Modalities", "Formal Governance", "Degraded Mode"],
    },
    {
      title: "The Validation Courts",
      summary:
        "The EPU certification process is organized around three Validation Courts — independent bodies that must each issue a positive verdict before the EPU can be deployed in a production vehicle. The Courts are not regulatory checkboxes; they are adversarial verification processes designed to find failures that the development team cannot see.",
      keyPoints: [
        "Court 1 (Physics Court): verifies all timing proofs against silicon measurements",
        "Court 2 (Adversarial Court): 10⁶ synthetic adversarial scenarios, 10⁴ hardware-in-loop tests",
        "Court 3 (Regulatory Court): ISO 26262, ISO/PAS 21448 (SOTIF), UN R157 compliance",
        "Each Court operates independently — no shared personnel with development team",
        "Negative verdict from any Court halts deployment regardless of commercial pressure",
      ],
      quote:
        "The Courts do not validate what we built. They attempt to destroy it.",
      tags: ["Validation Courts", "Adversarial Testing", "ISO 26262", "SOTIF"],
    },
    {
      title: "The TEA/LCA Governance Framework",
      summary:
        "The EPU's deployment is governed by two parallel frameworks: Technical Equivalence Assessment (TEA) and Life Cycle Assessment (LCA). TEA ensures that every EPU variant maintains formal equivalence with the certified baseline. LCA ensures that the carbon footprint of EPU production, deployment, and end-of-life is auditable and defensible.",
      keyPoints: [
        "TEA: formal equivalence proof required for every EPU variant or update",
        "LCA: ISO 14040/14044 compliant carbon audit for full EPU lifecycle",
        "TEA equivalence threshold: ΔD(s,a) < 0.001 across all 47 event classes",
        "LCA scope: silicon fabrication, vehicle integration, operational energy, recycling",
        "Both frameworks are contractual obligations in EPU licensing agreements",
      ],
      quote:
        "Equivalence is not similarity. It is a proof.",
      tags: ["TEA", "LCA", "Carbon Audit", "Formal Equivalence"],
    },

    // ACT II: The Precious Tool & Strategic Vision (Slides 16–30)
    {
      title: "The Competitive Moat: Methodology as IP",
      summary:
        "The EPU's deepest competitive advantage is not the chip — it is the methodology. The 10-gate sequence, the dimensionless metric, the gasification proof, and the Validation Court process are all patentable artifacts that competitors cannot replicate without starting from the same physics-first epistemology. The moat is epistemological, not technological.",
      keyPoints: [
        "Patent portfolio: 23 provisional applications covering gates, metric, ISA, and proof methods",
        "Trade secret: register allocation algorithm and gate-to-instruction mapping",
        "Methodology moat: competitors must adopt the same physics-first framework to compete",
        "Licensing model: EPU methodology licensed separately from EPU silicon",
        "First-mover advantage in physics-certified AV safety: 4–6 year lead time estimate",
      ],
      quote:
        "The chip can be copied. The proof cannot.",
      tags: ["Competitive Moat", "IP Strategy", "Patent Portfolio", "Methodology"],
    },
    {
      title: "The $47M Investment Architecture",
      summary:
        "The EPU development program requires $47M across three phases. This is not a research budget — it is a certification budget. The majority of spend is on verification, validation, and regulatory engagement, not on silicon development. This reflects the EPU's fundamental thesis: the value is in the proof, not the processor.",
      keyPoints: [
        "Phase 1 (FPGA + ISA): $12M — architecture, prototype, formal verification",
        "Phase 2 (ASIC NRE): $28M — 3nm tape-out, re-verification, Validation Courts",
        "Phase 3 (Certification): $7M — ISO 26262, SOTIF, UN R157, regulatory engagement",
        "Verification spend: 68% of total budget — reflects proof-first philosophy",
        "Break-even: 87K units at $340/unit production cost and $1,200 ASP",
      ],
      quote:
        "We are not buying a chip. We are buying a proof.",
      tags: ["$47M Budget", "Investment Architecture", "Certification Cost", "Break-Even"],
    },
    {
      title: "The Hydrogen Platform Integration",
      summary:
        "The EPU is not a standalone safety chip — it is the governance core of a complete hydrogen autonomous platform. It manages the fuel cell stack, the LH₂ storage system, the cabin thermal domain, and the vehicle dynamics simultaneously, within a single deterministic WCET envelope.",
      keyPoints: [
        "Fuel cell stack governance: current, temperature, and membrane hydration within WCET",
        "LH₂ storage monitoring: pressure, temperature, boil-off rate — all safety-critical",
        "Cabin thermal management: passenger comfort vs. FC stack cooling priority arbitration",
        "Vehicle dynamics: steering (by-wire), braking, and suspension — all EPU-governed",
        "Single WCET envelope: all four domains processed within 2ms worst-case cycle",
      ],
      quote:
        "The EPU does not manage the vehicle. It is the vehicle's nervous system.",
      tags: ["Hydrogen Platform", "Fuel Cell", "LH₂ Storage", "WCET Envelope"],
    },
    {
      title: "The Driverless Cabin: Ergonomics Without a Wheel",
      summary:
        "Removing the steering wheel is not just an engineering decision — it is a spatial liberation. The driverless cabin reclaims 340mm of dashboard depth, eliminates the column intrusion zone, and enables a face-to-face seating configuration that is impossible in any human-driven vehicle. The EPU makes this possible by removing the need for any human control interface.",
      keyPoints: [
        "340mm dashboard depth reclaimed by steering column removal",
        "Face-to-face seating: 4-passenger configuration with 180° rotation capability",
        "Preference-only semi-dome controller: destination input, comfort preferences, entertainment",
        "No pedals, no column, no airbag deployment zone — full floor space available",
        "EPU's deterministic safety guarantee is the legal basis for column removal",
      ],
      quote:
        "The cabin is not a cockpit. It is a room.",
      tags: ["Driverless Cabin", "Ergonomics", "Steering Wheel Removal", "Semi-Dome Controller"],
    },
    {
      title: "Navigation Without Maps: The Topological Approach",
      summary:
        "The EPU's navigation system does not rely on pre-built HD maps. It constructs a real-time topological representation of the environment from the 47-sensor suite, updated at 100Hz, and plans paths through this representation using a formally verified graph search algorithm. The system degrades gracefully when sensors fail — it does not halt.",
      keyPoints: [
        "Real-time topological map built from 47-sensor fusion at 100Hz update rate",
        "No HD map dependency: operates in unmapped environments with certified degraded performance",
        "Graph search algorithm formally verified for completeness and optimality",
        "Sensor failure triggers certified degraded-mode navigation, not system halt",
        "V2X integration: infrastructure data incorporated as additional topological nodes",
      ],
      quote:
        "The map is not the territory. The EPU navigates the territory.",
      tags: ["Navigation", "Topological Map", "HD Map Independence", "V2X"],
    },
    {
      title: "The Regulatory Strategy: Leading the Standard",
      summary:
        "The EPU team does not wait for regulators to define the standard — it writes the technical inputs that shape the standard. Active participation in ISO TC22/SC32, UN WP.29, and SAE committees ensures that the EPU's formal verification methodology becomes the reference architecture for next-generation AV safety standards.",
      keyPoints: [
        "Active participation: ISO TC22/SC32, UN WP.29 GRVA, SAE G-34 committee",
        "Technical inputs submitted: WCET certification methodology, dimensionless metric proposal",
        "Target: EPU methodology referenced in ISO/PAS 21448 (SOTIF) revision 2027",
        "Regulatory first-mover: 18-month lead on formal verification requirements",
        "Engagement strategy: publish methodology, not implementation — protect IP while shaping standard",
      ],
      quote:
        "The standard is not a constraint. It is a market.",
      tags: ["Regulatory Strategy", "ISO TC22", "UN WP.29", "Standard Setting"],
    },
    {
      title: "The Licensing Architecture",
      summary:
        "The EPU business model has two revenue streams: silicon sales and methodology licensing. The methodology license grants OEMs the right to use the EPU's formal verification framework for their own safety-critical systems — not just autonomous vehicles. This creates a recurring revenue stream that is independent of vehicle production volumes.",
      keyPoints: [
        "Stream 1: EPU silicon — $1,200 ASP, targeting 100K units/year by Year 5",
        "Stream 2: Methodology license — $2–5M/year per OEM, covering formal verification framework",
        "License scope: 10-gate sequence, D(s,a) metric, gasification proof methodology",
        "License excludes: ISA implementation, register allocation algorithm (trade secrets)",
        "Projected Year 5 revenue: $145M silicon + $35M licensing = $180M total",
      ],
      quote:
        "We sell the chip once. We license the proof forever.",
      tags: ["Licensing", "Revenue Model", "Methodology License", "OEM Strategy"],
    },
    {
      title: "The OEM Partnership Framework",
      summary:
        "The EPU is designed for deep OEM integration, not bolt-on installation. The OEM Partnership Framework defines the technical, legal, and commercial terms under which an OEM can integrate the EPU into their vehicle platform — including the mandatory TEA equivalence assessment for every vehicle variant.",
      keyPoints: [
        "Technical integration: EPU replaces the central ECU in the safety domain",
        "TEA requirement: every vehicle variant requires formal equivalence certification",
        "Data sharing: OEM provides anonymized incident data for taxonomy refinement",
        "Commercial terms: volume-based pricing with minimum annual commitment",
        "Exclusivity: 24-month exclusivity window for first OEM partner in each vehicle segment",
      ],
      quote:
        "Integration is not installation. It is a commitment to the proof.",
      tags: ["OEM Partnership", "TEA", "Integration Framework", "Exclusivity"],
    },
    {
      title: "The Supply Chain Architecture",
      summary:
        "The EPU supply chain is designed for resilience and auditability. Every component in the silicon supply chain — from wafer to package — is tracked against the LCA carbon audit. The supply chain is not optimized for cost; it is optimized for proof integrity.",
      keyPoints: [
        "Wafer fabrication: TSMC 3nm, Taiwan — primary; Samsung 3nm, Korea — secondary",
        "Packaging: ASE Group, Taiwan — advanced flip-chip BGA",
        "Testing: Advantest SoC test platform — 100% functional test, not sampling",
        "LCA tracking: carbon footprint logged at every supply chain node",
        "Dual-source strategy: no single-source dependency for any critical component",
      ],
      quote:
        "The supply chain is not a cost center. It is a proof chain.",
      tags: ["Supply Chain", "TSMC", "LCA Tracking", "Dual Source"],
    },
    {
      title: "The Carbon Audit Architecture",
      summary:
        "The EPU's LCA carbon audit is not a marketing exercise — it is a contractual obligation embedded in every OEM licensing agreement. The audit covers the full lifecycle: silicon fabrication, vehicle integration, operational energy consumption, and end-of-life recycling. Every carbon figure is independently verified.",
      keyPoints: [
        "Fabrication carbon: 12.4 kgCO₂e/unit (TSMC 3nm, renewable energy mix)",
        "Integration carbon: 0.8 kgCO₂e/unit (vehicle assembly, logistics)",
        "Operational carbon: 0 (hydrogen fuel cell — zero direct emissions)",
        "End-of-life carbon: -2.1 kgCO₂e/unit (silicon recycling credit)",
        "Net lifecycle carbon: 11.1 kgCO₂e/unit — independently verified by Bureau Veritas",
      ],
      quote:
        "Every gram of carbon is accounted for. Every gram is defensible.",
      tags: ["Carbon Audit", "LCA", "Net Lifecycle Carbon", "Bureau Veritas"],
    },
    {
      title: "The Intellectual Property Fortress",
      summary:
        "The EPU IP portfolio is structured as a three-layer fortress: patents protect the methodology, trade secrets protect the implementation, and publication protects the epistemology. The publication strategy is deliberate: by publishing the physics-first framework, the EPU team establishes prior art that prevents competitors from patenting the foundational principles.",
      keyPoints: [
        "Layer 1 (Patents): 23 provisional applications — gates, metric, ISA, proof methods",
        "Layer 2 (Trade Secrets): register allocation, gate-to-instruction mapping, timing optimization",
        "Layer 3 (Publication): physics-first framework published in IEEE Transactions on Vehicular Technology",
        "Prior art strategy: publication establishes public domain for foundational principles",
        "Freedom to operate: FTO analysis completed for all 23 patent families",
      ],
      quote:
        "We publish the philosophy. We patent the method. We protect the implementation.",
      tags: ["IP Fortress", "Patent Strategy", "Trade Secrets", "Prior Art"],
    },
    {
      title: "The Team Architecture",
      summary:
        "The EPU development team is organized around the proof structure, not the product structure. Every team lead is responsible for a formal verification domain, not a functional component. This organizational design ensures that the proof integrity is maintained as the team scales.",
      keyPoints: [
        "Gate Architecture Lead: owns the 10-gate sequence formal specification",
        "ISA Verification Lead: owns the 127-instruction timing proof",
        "Sensor Constitution Lead: owns the 47-modality governance framework",
        "Validation Court Liaison: owns the adversarial testing program",
        "LCA/TEA Compliance Lead: owns the carbon audit and equivalence framework",
      ],
      quote:
        "The org chart follows the proof structure, not the product roadmap.",
      tags: ["Team Architecture", "Proof-Driven Organization", "Verification Leads"],
    },
    {
      title: "The Market Timing Thesis",
      summary:
        "The EPU enters the market at the precise moment when the AV industry's probabilistic safety paradigm is failing under regulatory scrutiny. Three regulatory events in 2024–2025 have created a window: NHTSA's formal WCET requirement proposal, the EU's AV Safety Regulation draft, and China's GB/T 40429 revision. The EPU is the only architecture that can satisfy all three simultaneously.",
      keyPoints: [
        "NHTSA WCET proposal: formal timing certification required for SAE Level 4+ (2026)",
        "EU AV Safety Regulation: formal verification mandate for safety-critical functions (2027)",
        "China GB/T 40429 revision: deterministic safety architecture requirement (2026)",
        "EPU is the only architecture with existing formal verification framework for all three",
        "Market window: 18–24 months before competitors can develop equivalent frameworks",
      ],
      quote:
        "The regulation is not a barrier. It is a moat.",
      tags: ["Market Timing", "NHTSA", "EU Regulation", "China GB/T"],
    },
    {
      title: "The Strategic Synthesis",
      summary:
        "The EPU is not a product. It is a new category of computational artifact — one whose value proposition is proof, not performance. The competitive moat is epistemological. The revenue model is dual-stream. The regulatory strategy is standard-setting. And the organizational design follows the proof structure. This is not an automotive chip company. It is a safety certification company that happens to make chips.",
      keyPoints: [
        "Category creation: physics-certified computational safety — a new market segment",
        "Dual moat: methodology IP + regulatory standard-setting",
        "Dual revenue: silicon sales + methodology licensing",
        "Organizational design: proof-driven, not product-driven",
        "Long-term vision: EPU methodology becomes the ISO reference architecture for AV safety",
      ],
      quote:
        "We are not building a chip company. We are building the standard.",
      tags: ["Strategic Synthesis", "Category Creation", "Standard Setting", "Long-Term Vision"],
    },
    {
      title: "Act II Closing: The Precious Tool",
      summary:
        "The EPU is precious not because it is expensive — though it is — but because it is irreplaceable. No other architecture can provide physics-certified deterministic safety for a hydrogen autonomous vehicle without a steering wheel. This is not a feature comparison. It is an existence proof.",
      keyPoints: [
        "Irreplaceability: no competing architecture satisfies all three constraints simultaneously",
        "Constraint 1: physics-certified WCET for all 47 sensor modalities",
        "Constraint 2: hydrogen platform governance within the same WCET envelope",
        "Constraint 3: regulatory compliance with NHTSA, EU, and China simultaneously",
        "The EPU is not the best solution. It is the only solution.",
      ],
      quote:
        "Precious is not a price. It is a proof of uniqueness.",
      tags: ["Act II Closing", "Irreplaceability", "Existence Proof", "Uniqueness"],
    },

    // ACT III: The 10-Gate Architecture — Technical Depth (Slides 31–50)
    {
      title: "Gate 1: Ingestion and Normalization",
      summary:
        "Gate 1 is the EPU's boundary with the physical world. Every sensor reading — regardless of modality, format, or data rate — is normalized to the dimensionless D(s,a) metric before it can proceed. Gate 1 is the only gate that touches raw sensor data. Everything downstream operates on normalized representations.",
      keyPoints: [
        "Input: raw sensor data from all 47 modalities at their native data rates",
        "Operation: normalization to D(s,a) metric — dimensionless, physically invariant",
        "Rejection criterion: any reading that cannot produce valid D(s,a) is rejected with error code",
        "WCET: 180ns — derived from silicon physics of the normalization arithmetic unit",
        "Output: normalized event representation with D(s,a) value and modality tag",
      ],
      quote: "Gate 1 is where the physical world becomes mathematics.",
      tags: ["Gate 1", "Ingestion", "Normalization", "D(s,a)"],
    },
    {
      title: "Gate 2: Event Classification",
      summary:
        "Gate 2 maps every normalized event to exactly one of the 47 event classes. The classification is not a machine learning inference — it is a formally verified decision procedure that runs in constant time. Every classification decision is deterministic and reproducible.",
      keyPoints: [
        "Input: normalized event with D(s,a) value and modality tag",
        "Operation: formally verified decision procedure against 47-class taxonomy",
        "Constant-time execution: O(1) classification regardless of event complexity",
        "WCET: 95ns — derived from the decision tree depth and register access pattern",
        "Output: classified event with class ID, priority level, and response protocol reference",
      ],
      quote: "Classification is not inference. It is a decision.",
      tags: ["Gate 2", "Classification", "47-Class Taxonomy", "Decision Procedure"],
    },
    {
      title: "Gate 3: Temporal Binding",
      summary:
        "Gate 3 assigns a precise timestamp to every event, synchronized across all 47 sensor modalities to within ±0.1μs. This is not a software timestamp — it is a hardware-enforced temporal binding that uses a distributed IEEE 1588 PTP network with EPU-specific extensions for sub-microsecond accuracy.",
      keyPoints: [
        "Synchronization: IEEE 1588 PTP with EPU extensions — ±0.1μs across all modalities",
        "Hardware enforcement: timestamp assigned by dedicated timing unit, not software",
        "Temporal consistency check: events with impossible timestamps are rejected",
        "WCET: 45ns — dominated by PTP synchronization verification",
        "Output: temporally bound event with certified timestamp and synchronization confidence",
      ],
      quote: "Time is not a software variable. It is a physical measurement.",
      tags: ["Gate 3", "Temporal Binding", "IEEE 1588 PTP", "Synchronization"],
    },
    {
      title: "Gate 4: Physical Plausibility",
      summary:
        "Gate 4 verifies that every event is physically possible given the laws of Newtonian mechanics and the vehicle's known state. An object cannot appear at a distance of 0.5m and have a relative velocity of 200 km/h — Gate 4 rejects such events as physically implausible and logs them as potential sensor failures.",
      keyPoints: [
        "Plausibility check: Newtonian mechanics constraints applied to all kinematic parameters",
        "Vehicle state input: current position, velocity, acceleration from IMU and GPS",
        "Rejection criterion: any event violating physical plausibility bounds is rejected",
        "WCET: 120ns — dominated by kinematic constraint evaluation",
        "Output: plausibility-verified event with confidence score and constraint satisfaction record",
      ],
      quote: "Physics is the first filter. It cannot be fooled.",
      tags: ["Gate 4", "Physical Plausibility", "Newtonian Mechanics", "Kinematic Constraints"],
    },
    {
      title: "Gate 5: Kinematic Consistency",
      summary:
        "Gate 5 verifies that every event is kinematically consistent with the event history — that the object's trajectory over the past N timesteps is physically achievable. A pedestrian cannot decelerate from 5 m/s to 0 m/s in 10ms. Gate 5 catches trajectory anomalies that Gate 4 cannot detect.",
      keyPoints: [
        "Consistency check: trajectory analysis over 100ms sliding window",
        "Acceleration bounds: class-specific maximum acceleration derived from physical limits",
        "Trajectory anomaly detection: formally verified against 47-class kinematic profiles",
        "WCET: 210ns — dominated by sliding window trajectory evaluation",
        "Output: kinematically consistent event with trajectory confidence and anomaly flag",
      ],
      quote: "History is a constraint. The future must be consistent with it.",
      tags: ["Gate 5", "Kinematic Consistency", "Trajectory Analysis", "Sliding Window"],
    },
    {
      title: "Gate 6: Threat Assessment",
      summary:
        "Gate 6 computes the threat level of every event using a formally specified threat function that combines D(s,a), relative velocity, event class, and trajectory projection. The threat function is not a neural network — it is a closed-form expression with certified bounds on its output range.",
      keyPoints: [
        "Threat function: T(e) = f(D(s,a), v_rel, class, trajectory) — closed-form, certified bounds",
        "Output range: [0, 1] — formally proven, no overflow or underflow possible",
        "Priority assignment: threat level maps to one of 5 priority classes",
        "WCET: 85ns — dominated by threat function evaluation and priority lookup",
        "Output: threat-assessed event with T(e) value, priority class, and response urgency",
      ],
      quote: "Threat is a number. Its bounds are a proof.",
      tags: ["Gate 6", "Threat Assessment", "Threat Function", "Priority Classes"],
    },
    {
      title: "Gate 7: Response Selection",
      summary:
        "Gate 7 selects the certified response protocol for every event based on its class, threat level, and the vehicle's current operational context. The response selection is not a policy optimization — it is a lookup in a formally verified response table with 47 × 5 = 235 entries, each independently certified.",
      keyPoints: [
        "Response table: 235 entries (47 classes × 5 priority levels) — all independently certified",
        "Context input: current speed, road type, weather condition, passenger count",
        "Conflict resolution: formally specified priority arbitration for simultaneous events",
        "WCET: 65ns — dominated by table lookup and context evaluation",
        "Output: selected response protocol with actuation parameters and safety interlock flags",
      ],
      quote: "Response is not a decision. It is a lookup in a certified table.",
      tags: ["Gate 7", "Response Selection", "Response Table", "Conflict Resolution"],
    },
    {
      title: "Gate 8: Actuation Command",
      summary:
        "Gate 8 translates the selected response protocol into specific actuation commands for the vehicle's by-wire systems: steering (by-wire), braking, acceleration, and suspension. Every command is bounded by physical actuator limits and verified against the vehicle's current dynamic state.",
      keyPoints: [
        "Actuation domains: steering-by-wire, brake-by-wire, throttle-by-wire, active suspension",
        "Command bounds: physically derived from actuator specifications and vehicle dynamics",
        "Dynamic state verification: commands verified against current vehicle state before issue",
        "WCET: 150ns — dominated by dynamic state verification and command encoding",
        "Output: bounded actuation commands with physical limit certificates and state consistency flags",
      ],
      quote: "A command is not a request. It is a certified physical act.",
      tags: ["Gate 8", "Actuation Command", "By-Wire Systems", "Command Bounds"],
    },
    {
      title: "Gate 9: Safety Interlock Verification",
      summary:
        "Gate 9 is the EPU's final safety check before any command reaches the actuators. It verifies that the actuation commands from Gate 8 do not violate any of the 127 safety interlocks — physical constraints that cannot be overridden by any software command, regardless of priority.",
      keyPoints: [
        "127 safety interlocks: physical constraints derived from vehicle dynamics and hydrogen safety",
        "Interlock categories: kinematic (47), hydrogen system (38), thermal (24), structural (18)",
        "Violation response: command modified to nearest safe value, not rejected",
        "WCET: 95ns — dominated by interlock evaluation across all 127 constraints",
        "Output: interlock-verified commands with modification log and constraint satisfaction record",
      ],
      quote: "The interlock is the last word. It cannot be argued with.",
      tags: ["Gate 9", "Safety Interlock", "127 Constraints", "Physical Limits"],
    },
    {
      title: "Gate 10: Audit Log Commit",
      summary:
        "Gate 10 is the EPU's commitment to accountability. Every event that completes the 10-gate sequence is committed to an immutable audit log with its full processing history: every gate's input, output, timing, and decision rationale. The audit log is the legal record of the EPU's behavior.",
      keyPoints: [
        "Audit log: immutable, cryptographically signed, stored in tamper-evident hardware",
        "Log entry: full processing history for every event — 10 gates × (input, output, timing, rationale)",
        "Retention: 90 days rolling window, with incident-triggered permanent retention",
        "WCET: 55ns — dominated by cryptographic signing and hardware write",
        "Output: committed audit log entry with cryptographic proof of integrity",
      ],
      quote: "Every event leaves a record. Every record is a proof.",
      tags: ["Gate 10", "Audit Log", "Cryptographic Signing", "Accountability"],
    },
    {
      title: "The Register Allocation Architecture",
      summary:
        "The 512-register file is allocated across the 10-gate sequence using a formally verified allocation algorithm that guarantees zero register conflicts and zero spills. Every register's purpose is fixed at design time — there is no dynamic allocation, no garbage collection, and no register reuse across gate boundaries.",
      keyPoints: [
        "Total registers: 512 — allocated as 48 per gate + 32 inter-gate communication registers",
        "Allocation algorithm: formally verified using SMT solver (Z3) — zero conflicts proven",
        "No dynamic allocation: all register assignments fixed at design time",
        "Inter-gate registers: 32 dedicated registers for gate-to-gate data transfer",
        "Allocation formally verified against all 127 ISA instruction register requirements",
      ],
      quote: "Every register has a name. Every name has a proof.",
      tags: ["Register Allocation", "512 Registers", "SMT Solver", "Formal Verification"],
    },
    {
      title: "The Timing Proof Architecture",
      summary:
        "The EPU's WCET proof is not a measurement — it is a mathematical derivation from silicon physics. Every gate's WCET is derived from the worst-case execution path through the gate's instruction sequence, with each instruction's timing derived from the 3nm process node's physical characteristics.",
      keyPoints: [
        "WCET derivation: abstract interpretation of gate instruction sequences",
        "Instruction timing: derived from TSMC 3nm N3E process characterization data",
        "Worst-case path: formally identified using model checking (UPPAAL)",
        "Total 10-gate WCET: 1,100ns (1.1μs) — proven upper bound, not measurement",
        "Safety margin: 900ns buffer to 2ms cycle time — 45% margin formally certified",
      ],
      quote: "The WCET is not measured. It is derived.",
      tags: ["WCET Proof", "Abstract Interpretation", "UPPAAL", "Timing Derivation"],
    },
    {
      title: "The Hydrogen Safety Integration",
      summary:
        "The EPU's hydrogen safety integration is not a separate subsystem — it is embedded in the 10-gate sequence as a parallel processing stream. Every gate that processes a vehicle dynamics event simultaneously processes the corresponding hydrogen system state, within the same WCET envelope.",
      keyPoints: [
        "Parallel processing: hydrogen system state processed alongside vehicle dynamics in every gate",
        "LH₂ monitoring: pressure (0–700 bar), temperature (-253°C to -240°C), boil-off rate",
        "FC stack monitoring: current (0–500A), voltage (200–800V), membrane hydration",
        "Hydrogen safety interlocks: 38 of the 127 Gate 9 interlocks are hydrogen-specific",
        "Emergency protocol: certified 4-second hydrogen system safe-state transition",
      ],
      quote: "Hydrogen safety is not a feature. It is woven into every gate.",
      tags: ["Hydrogen Safety", "LH₂ Monitoring", "FC Stack", "Emergency Protocol"],
    },
    {
      title: "The Adversarial Testing Architecture",
      summary:
        "The EPU's adversarial testing program is designed to find failures that the development team cannot anticipate. It uses a formally specified adversarial event generator that produces synthetic scenarios at the boundary of the 47-class taxonomy — scenarios that are physically possible but statistically rare.",
      keyPoints: [
        "Adversarial generator: formally specified, produces events at taxonomy class boundaries",
        "Test volume: 10⁶ synthetic adversarial scenarios — all processed through hardware prototype",
        "Hardware-in-loop: 10⁴ scenarios tested on FPGA prototype with real sensor emulation",
        "Failure mode analysis: every failure classified and root-caused before next test cycle",
        "Adversarial Court: independent team runs the adversarial program — no shared personnel",
      ],
      quote: "We test what we fear. We fear what we cannot anticipate.",
      tags: ["Adversarial Testing", "10⁶ Scenarios", "Hardware-in-Loop", "Failure Analysis"],
    },
    {
      title: "The Formal Verification Toolchain",
      summary:
        "The EPU's formal verification toolchain is a curated set of tools, each selected for its ability to produce machine-checkable proofs. The toolchain is not a collection of analysis tools — it is a proof production system whose outputs are legally admissible in the Validation Courts.",
      keyPoints: [
        "WCET analysis: AbsInt aiT — abstract interpretation, machine-checkable output",
        "Model checking: UPPAAL — timed automata, worst-case path identification",
        "SMT solving: Z3 — register allocation, constraint satisfaction proofs",
        "Theorem proving: Coq — gasification proof, completeness proofs",
        "Hardware verification: Cadence Jasper — RTL formal verification against ISA specification",
      ],
      quote: "A tool that cannot produce a proof is not a verification tool.",
      tags: ["Formal Verification", "AbsInt aiT", "UPPAAL", "Z3", "Coq"],
    },
    {
      title: "Act III Closing: The Architecture as Argument",
      summary:
        "The 10-gate architecture is not an engineering design — it is a logical argument. Each gate is a premise. The gasification proof is the conclusion. The Validation Courts are the peer review. And the audit log is the published record. The EPU does not claim to be safe. It proves it.",
      keyPoints: [
        "Architecture as argument: 10 gates = 10 premises in a formal safety proof",
        "Gasification proof = logical conclusion: no partial processing possible",
        "Validation Courts = adversarial peer review: independent falsification attempts",
        "Audit log = published record: every event's proof is permanently recorded",
        "Safety is not claimed. It is derived.",
      ],
      quote: "The architecture is the argument. The proof is the product.",
      tags: ["Act III Closing", "Architecture as Argument", "Formal Safety Proof"],
    },

    // ACT IV: Roadmap & Future (Slides 51–60)
    {
      title: "Phase 1: Architecture and FPGA Prototype (Months 1–18)",
      summary:
        "Phase 1 establishes the EPU's formal foundation: the 10-gate sequence is fully specified, the custom ISA is designed and verified, the 512-register allocation is formally proven, and the FPGA prototype demonstrates physical realizability. Budget: $12M. Deliverable: FPGA prototype with full formal verification package.",
      keyPoints: [
        "Months 1–6: 10-gate formal specification, ISA design, register allocation proof",
        "Months 7–12: FPGA implementation on Xilinx UltraScale+, timing closure verification",
        "Months 13–18: adversarial testing (10⁵ synthetic scenarios), formal verification package",
        "Budget: $12M — 40% architecture, 35% FPGA, 25% formal verification",
        "Deliverable: FPGA prototype + formal verification package (Physics Court ready)",
      ],
      quote: "Phase 1 does not build a product. It builds a proof.",
      tags: ["Phase 1", "FPGA Prototype", "Formal Specification", "$12M"],
    },
    {
      title: "Phase 2: ASIC Design and Tape-Out (Months 19–42)",
      summary:
        "Phase 2 translates the FPGA proof into silicon. The ASIC design is re-verified from scratch against the formal specification — the FPGA proof is a reference, not a transfer. The 3nm tape-out is the most capital-intensive milestone, requiring $28M and 24 months of design and verification work.",
      keyPoints: [
        "Months 19–30: ASIC architecture, RTL design, formal verification against ISA specification",
        "Months 31–36: TSMC 3nm tape-out preparation, DRC/LVS sign-off, timing closure",
        "Months 37–42: silicon bring-up, characterization, re-verification of all timing proofs",
        "Budget: $28M — 15% architecture, 45% tape-out NRE, 40% verification",
        "Deliverable: production-ready ASIC with full re-verification package",
      ],
      quote: "The ASIC earns its own proof. It does not inherit the FPGA's.",
      tags: ["Phase 2", "ASIC", "TSMC 3nm", "Tape-Out", "$28M"],
    },
    {
      title: "Phase 3: Certification and Regulatory Engagement (Months 43–54)",
      summary:
        "Phase 3 is the EPU's passage through the three Validation Courts and the regulatory certification process. This phase is not a formality — it is the most adversarial phase of the program, designed to find every failure that Phases 1 and 2 missed. Budget: $7M. Deliverable: ISO 26262 ASIL-D, SOTIF, and UN R157 certifications.",
      keyPoints: [
        "Months 43–48: Physics Court and Adversarial Court proceedings",
        "Months 49–54: Regulatory Court — ISO 26262, SOTIF, UN R157 certification",
        "Adversarial testing: 10⁶ synthetic scenarios + 10⁴ hardware-in-loop tests",
        "Budget: $7M — 30% Physics Court, 40% Adversarial Court, 30% Regulatory",
        "Deliverable: full certification package + regulatory approval for production deployment",
      ],
      quote: "Certification is not the end of the proof. It is the beginning of the record.",
      tags: ["Phase 3", "Certification", "Validation Courts", "ISO 26262", "$7M"],
    },
    {
      title: "The 5-Year Revenue Projection",
      summary:
        "The EPU revenue model reaches profitability in Year 3 and generates $180M in Year 5 revenue across two streams: silicon sales and methodology licensing. The projection is conservative — it assumes no regulatory tailwinds and no exclusivity premiums from OEM partners.",
      keyPoints: [
        "Year 1: $0 (development) | Year 2: $8M (pilot OEM) | Year 3: $42M (break-even)",
        "Year 4: $98M | Year 5: $180M ($145M silicon + $35M licensing)",
        "Silicon ASP: $1,200 declining to $800 at 100K volume",
        "Licensing: $2–5M/year per OEM, 7 OEM partners projected by Year 5",
        "Break-even: 87K units — achievable in Year 3 with 2 OEM partners",
      ],
      quote: "The revenue model is a proof of commercial viability.",
      tags: ["Revenue Projection", "5-Year Model", "Break-Even", "OEM Partners"],
    },
    {
      title: "The Regulatory Horizon: 2026–2030",
      summary:
        "The regulatory landscape for AV safety is converging on formal verification requirements across all major markets. The EPU is positioned to be the first architecture to satisfy all emerging requirements simultaneously — creating a regulatory moat that compounds over time.",
      keyPoints: [
        "2026: NHTSA WCET requirement for SAE Level 4+ — EPU compliant",
        "2027: EU AV Safety Regulation formal verification mandate — EPU compliant",
        "2026: China GB/T 40429 revision — deterministic safety requirement — EPU compliant",
        "2028: ISO/PAS 21448 (SOTIF) revision — EPU methodology referenced as example",
        "2030: EPU methodology projected to be the ISO reference architecture for AV safety",
      ],
      quote: "The regulatory horizon is not a risk. It is a roadmap.",
      tags: ["Regulatory Horizon", "2026–2030", "NHTSA", "EU Regulation", "ISO Reference"],
    },
    {
      title: "The Next-Generation EPU: EPU-2",
      summary:
        "EPU-2 extends the 10-gate architecture to 15 gates, adding three new domains: vehicle-to-infrastructure (V2I) event processing, predictive threat assessment using formally specified trajectory models, and multi-vehicle coordination for platooning applications. EPU-2 development begins in Month 30, overlapping with Phase 2.",
      keyPoints: [
        "Gates 11–13: V2I event processing — infrastructure data integrated as first-class events",
        "Gate 14: predictive threat assessment — formally specified trajectory model, 5-second horizon",
        "Gate 15: multi-vehicle coordination — platooning protocol with formal safety proof",
        "Target process: TSMC 2nm (2028 availability) — 1.8 GHz, 6W TDP",
        "EPU-2 development budget: $65M (separate program, begins Month 30)",
      ],
      quote: "EPU-2 is not an upgrade. It is a new proof.",
      tags: ["EPU-2", "15-Gate Architecture", "V2I", "Platooning", "TSMC 2nm"],
    },
    {
      title: "The Global Deployment Architecture",
      summary:
        "The EPU's global deployment strategy is organized around three regional certification clusters: North America (NHTSA/FMVSS), Europe (EU/UNECE), and Asia-Pacific (China/Japan/Korea). Each cluster requires a separate regulatory engagement program, but shares the same formal verification package.",
      keyPoints: [
        "North America: NHTSA FMVSS 150 + state-level AV deployment permits",
        "Europe: EU AV Safety Regulation + UNECE WP.29 R157 type approval",
        "Asia-Pacific: China GB/T 40429 + Japan MLIT AV safety guidelines + Korea KATRI",
        "Shared verification package: formal verification artifacts accepted across all clusters",
        "Regional certification timeline: North America (Month 54), Europe (Month 60), Asia-Pacific (Month 66)",
      ],
      quote: "One proof. Three markets. One standard.",
      tags: ["Global Deployment", "Regional Certification", "NHTSA", "UNECE", "Asia-Pacific"],
    },
    {
      title: "The Long-Term Vision: EPU as Infrastructure",
      summary:
        "The EPU's long-term vision extends beyond autonomous vehicles. The 10-gate architecture, the dimensionless metric, and the formal verification methodology are applicable to any safety-critical cyber-physical system: surgical robotics, industrial automation, air traffic management, and critical infrastructure protection.",
      keyPoints: [
        "Surgical robotics: EPU-derived architecture for robotic surgery safety certification",
        "Industrial automation: EPU methodology for ISO 13849 (machinery safety) compliance",
        "Air traffic management: EPU formal verification framework for DO-178C avionics",
        "Critical infrastructure: EPU audit log architecture for ICS/SCADA safety systems",
        "Long-term vision: EPU methodology becomes the universal standard for cyber-physical safety",
      ],
      quote: "The EPU is not a vehicle chip. It is a safety methodology.",
      tags: ["Long-Term Vision", "Surgical Robotics", "Industrial Automation", "Universal Standard"],
    },
    {
      title: "The Call to Action: Building the Proof",
      summary:
        "The EPU program requires three things to succeed: capital, talent, and conviction. The capital is $47M across three phases. The talent is a team of 34 engineers and scientists who understand that they are building a proof, not a product. And the conviction is the belief that physics-certified safety is not just possible — it is necessary.",
      keyPoints: [
        "Capital: $47M — Phase 1 ($12M), Phase 2 ($28M), Phase 3 ($7M)",
        "Talent: 34 FTEs — 12 formal verification engineers, 8 hardware architects, 6 systems engineers, 8 regulatory/commercial",
        "Conviction: physics-certified safety is the only defensible standard for autonomous vehicles",
        "Timeline: 54 months from funding to first production deployment",
        "First OEM partner commitment: required by Month 6 to validate commercial thesis",
      ],
      quote: "We are not asking for permission to build the future. We are asking for the resources to prove it.",
      tags: ["Call to Action", "$47M", "34 FTEs", "54 Months", "OEM Commitment"],
    },
    {
      title: "Act IV Closing: The Proof Is the Product",
      summary:
        "The EPU program ends where it begins: with a proof. Not a demonstration, not a benchmark, not a market share figure — a proof. The proof that physics-certified deterministic safety is achievable in silicon. The proof that a hydrogen autonomous vehicle without a steering wheel can be governed by a single, formally verified computational artifact. The proof that safety is not a probability — it is a theorem.",
      keyPoints: [
        "The EPU is a proof of concept in the most literal sense: it proves a concept",
        "Concept: physics-certified deterministic safety is achievable in production silicon",
        "Proof method: formal verification, adversarial testing, independent certification",
        "Commercial consequence: the proof creates a new market category",
        "Final statement: safety is not a probability. It is a theorem. And theorems do not fail.",
      ],
      quote: "The proof is the product. The product is the proof.",
      tags: ["Act IV Closing", "Proof as Product", "Theorem", "Final Statement"],
    },
  ],

  fa: [
    // پرده I: مسئله و تحول پارادایم (اسلایدهای ۱–۱۵)
    {
      title: "وعده‌ی شکسته‌ی ایمنی احتمالاتی",
      summary:
        "هر خودروی خودران امروز بر یک شرط‌بندی آماری استوار است. صنعت، یک ناممکن بنیادی را عادی کرده: تأیید ایمنی از طریق توزیع‌های احتمالاتی که به تعریف ریاضی نمی‌توانند رفتار بدون خطا را تضمین کنند. این شکاف در مهندسی نیست — شکاف در معرفت‌شناسی است.",
      keyPoints: [
        "هدف ASIL-D در ISO 26262: ۱۰⁻⁹ خرابی در ساعت — کران آماری، نه تضمین فیزیکی",
        "هیچ توزیع احتمالاتی نمی‌تواند رفتار بدون خطا را در محیط‌های باز تضمین کند",
        "مسئله‌ی رویداد نادر: ریسک‌های دنباله‌ای در میلیون‌ها ساعت-خودرو تجمع می‌یابند",
        "معماری‌های فعلی خودروی خودران، فرهنگ ایمنی خودروی انسان‌محور را به ارث برده‌اند",
        "EPU شرط‌بندی احتمالاتی را با کران‌های قطعی مبتنی بر فیزیک جایگزین می‌کند",
      ],
      quote: "نمی‌توان ایمنی را با یک احتمال تأیید کرد. تنها با یک اثبات می‌توان.",
      tags: ["معرفت‌شناسی ایمنی", "ISO 26262", "خرابی احتمالاتی", "تحول پارادایم"],
    },
    {
      title: "چرا فرمان یک اشتباه معماری است",
      summary:
        "فرمان یک ویژگی ایمنی نیست — یک مسئولیت است. حضورش در خودروی خودران یک مسئله‌ی اقتدار دوگانه ایجاد می‌کند: دو سیستم کنترل که برای یک محرک رقابت می‌کنند، بدون هیچ پروتکل قطعی برای داوری. حذف آن یک انتخاب طراحی نیست؛ یک ضرورت معماری است.",
      keyPoints: [
        "تعارض اقتدار دوگانه: تسلط انسانی و فرمان خودمختار یک محرک را به اشتراک می‌گذارند",
        "تأخیر تحویل کنترل (۲.۵–۷ ثانیه) یک منطقه انتقال کنترل‌نشده ایجاد می‌کند",
        "تحقیقات عوامل انسانی: آگاهی موقعیتی پس از قطع اتصال سطح ۳ کاهش می‌یابد",
        "حذف فرمان تعهد کامل به زنجیره ایمنی خودمختار را اجبار می‌کند",
        "داوری قطعی EPU تنها بدون ابهام اقتدار انسانی عمل می‌کند",
      ],
      quote: "فرمان اعتراف معماری است که هنوز به ماشین اعتماد نداریم.",
      tags: ["حذف فرمان", "اقتدار دوگانه", "تأخیر تحویل", "معماری"],
    },
    {
      title: "ضرورت هیدروژن",
      summary:
        "خودمختاری برق-باتری یک تناقض پنهان دارد: چگالی انرژی مورد نیاز برای عملکرد خودمختار برد بلند با وزن و نیازهای مدیریت حرارتی باتری‌های پرظرفیت در تعارض است. هیدروژن این تناقض را حل می‌کند — اما تناقض جدیدی معرفی می‌کند: معماری ایمنی باید همزمان دینامیک خودرو و سیستم هیدروژن را اداره کند.",
      keyPoints: [
        "چگالی انرژی وزنی: H₂ در ۳۳.۳ kWh/kg در برابر Li-ion در ۰.۲۵ kWh/kg",
        "بازده پیل سوختی: ۶۰٪ الکتریکی در برابر ۲۰–۲۵٪ برای موتور احتراق داخلی",
        "هیدروژن سه حوزه حرارتی معرفی می‌کند: پشته FC، ذخیره H₂، کابین",
        "EPU باید هر سه حوزه حرارتی را در کران‌های WCET قطعی اداره کند",
        "ذخیره LH₂ در ۲۵۳- درجه سانتیگراد نیازمند پایش مداوم کریوژنیک در حلقه ایمنی است",
      ],
      quote: "هیدروژن فقط خودرو را تغذیه نمی‌کند. کل مسئله ایمنی را بازسازی می‌کند.",
      tags: ["هیدروژن", "پیل سوختی", "مدیریت حرارتی", "چگالی انرژی"],
    },
    {
      title: "پایان‌نامه EPU: از احتمال به فیزیک",
      summary:
        "EPU یک پردازنده سریع‌تر نیست. یک دسته متفاوت از مصنوع محاسباتی است — دسته‌ای که صحتش نه با آزمایش بلکه با اثبات تأیید می‌شود. هر کران زمانی از قانون فیزیکی مشتق می‌شود. هر تخصیص رجیستر به طور رسمی تأیید شده است. هر دروازه یک قضیه است، نه یک اکتشاف.",
      keyPoints: [
        "WCET (بدترین زمان اجرا) از فیزیک مشتق می‌شود، نه نمونه‌گیری آماری",
        "فایل ۵۱۲ رجیستری توقف‌های خط لوله را که اثبات‌های زمانی را باطل می‌کنند حذف می‌کند",
        "توالی ۱۰ دروازه اجباری: هر دروازه یک نقطه بازرسی تأیید رسمی است",
        "متریک فاصله بی‌بعد D(s,a) همه روش‌های حسگر را تحت یک قانون متحد می‌کند",
        "اثبات گازیفیکاسیون: تضمین رسمی که هیچ رویداد پردازش‌نشده‌ای از گذر دروازه جان سالم به در نمی‌برد",
      ],
      quote: "یک قضیه در ساعت ۳ صبح در باران شکست نمی‌خورد. یک مدل آماری شکست می‌خورد.",
      tags: ["معماری EPU", "WCET", "تأیید رسمی", "قطعیت"],
    },
    {
      title: "توالی ۱۰ دروازه اجباری",
      summary:
        "EPU هر رویداد حیاتی ایمنی را دقیقاً از ده دروازه، به ترتیب ثابت، بدون هیچ دور زدن و هیچ استثنایی عبور می‌دهد. این یک خط لوله نیست — یک ساختار اثبات است. هر دروازه نمایش رویداد را تبدیل می‌کند و یک ثابت فیزیکی خاص را قبل از انتقال به دروازه بعدی تأیید می‌کند.",
      keyPoints: [
        "دروازه ۱ (ورودی): داده خام حسگر به متریک D(s,a) بی‌بعد نرمال‌سازی می‌شود",
        "دروازه ۲ (طبقه‌بندی): رویداد در برابر طبقه‌بندی ۴۷ کلاسه تایپ می‌شود",
        "دروازه ۳ (اتصال زمانی): رویداد در ±۰.۱μs در همه روش‌های حسگر مهر زمانی می‌خورد",
        "دروازه‌های ۴–۷: قابلیت قبول فیزیکی، سازگاری سینماتیکی، ارزیابی تهدید، انتخاب پاسخ",
        "دروازه‌های ۸–۱۰: فرمان عملگر، تأیید قفل ایمنی، تعهد گزارش حسابرسی",
      ],
      quote: "ده دروازه. بدون استثنا. هر رویداد. هر بار.",
      tags: ["توالی ۱۰ دروازه", "خط لوله رسمی", "پردازش رویداد", "ثابت‌های ایمنی"],
    },
    {
      title: "متریک فاصله بی‌بعد D(s,a)",
      summary:
        "نوآوری ریاضی اصلی EPU یک متریک بی‌بعد واحد است که ابرهای نقطه LiDAR، پیکسل‌های دوربین، بازگشت‌های رادار و اکوهای اولتراسونیک را به یک کمیت قابل مقایسه متحد می‌کند. D(s,a) یک الگوریتم ادغام حسگر نیست — یک ثابت فیزیکی است که هر روش حسگر باید قبل از اینکه رویداد بتواند از دروازه ۱ عبور کند آن را برآورده کند.",
      keyPoints: [
        "D(s,a) = f(برد، بلبرینگ، سرعت نسبی، اطمینان حسگر) — بی‌بعد به صورت ساختاری",
        "مسئله ادغام حسگر را با جایگزینی آن با یک قید فیزیکی حذف می‌کند",
        "هر خواندن حسگری که نمی‌تواند D(s,a) معتبر تولید کند در دروازه ۱ رد می‌شود",
        "مقایسه رسمی داده‌های حسگر ناهمگن را بدون تبدیل واحد ممکن می‌سازد",
        "ثابت شده که با نزدیکی فیزیکی به صورت یکنواخت کاهش می‌یابد — یک تضمین توپولوژیکی",
      ],
      quote: "یک عدد. هر حسگر. یک قانون.",
      tags: ["متریک D(s,a)", "ادغام حسگر", "بی‌بعد", "ثابت فیزیکی"],
    },
    {
      title: "فایل ۵۱۲ رجیستری: چرا اهمیت دارد",
      summary:
        "پردازنده‌های معمولی از فایل‌های رجیستری ۱۶–۶۴ رجیستری استفاده می‌کنند و برای مدیریت حالت کاری به سلسله‌مراتب حافظه پنهان متکی هستند. خطاهای حافظه پنهان تأخیر غیرقطعی معرفی می‌کنند که اثبات‌های WCET را باطل می‌کند. فایل ۵۱۲ رجیستری EPU به اندازه کافی بزرگ است که کل حالت کاری توالی ۱۰ دروازه را بدون یک دسترسی حافظه پنهان نگه دارد — که اثبات‌های زمانی را از نظر فیزیکی معتبر می‌کند.",
      keyPoints: [
        "۱۶–۶۴ رجیستر در CPU‌های معمولی → خطاهای حافظه پنهان → تأخیر غیرقطعی",
        "۵۱۲ رجیستر کل حالت کاری ۱۰ دروازه را در رجیستر نگه می‌دارد",
        "صفر دسترسی حافظه پنهان در طول پردازش رویداد حیاتی ایمنی",
        "اعتبار اثبات WCET نیازمند صفر تأخیر حافظه غیرقطعی است",
        "تخصیص رجیستر به طور رسمی در برابر الزامات توالی ۱۰ دروازه تأیید شده است",
      ],
      quote: "فایل رجیستری یک بهینه‌سازی عملکرد نیست. یک فعال‌کننده اثبات است.",
      tags: ["فایل ۵۱۲ رجیستری", "WCET", "حذف حافظه پنهان", "تأیید رسمی"],
    },
    {
      title: "اثبات گازیفیکاسیون",
      summary:
        "اثبات گازیفیکاسیون قوی‌ترین تضمین رسمی EPU است: هیچ رویدادی که وارد توالی ۱۰ دروازه می‌شود نمی‌تواند بدون پردازش کامل خارج شود. پردازش جزئی — منشأ اکثر خرابی‌های نرم‌افزاری حیاتی ایمنی — به صورت ریاضی از نظر ساختاری غیرممکن است. هر رویداد یا همه ده دروازه را تکمیل می‌کند یا در نقطه خرابی با یک کد خطای تأییدشده رد می‌شود.",
      keyPoints: [
        "گازیفیکاسیون: اثبات رسمی که پردازش جزئی رویداد از نظر ساختاری غیرممکن است",
        "هر نقطه خروج رویداد یک مرز دروازه است — خروج میان‌دروازه‌ای مجاز نیست",
        "رویدادهای ناموفق کدهای خطای تأییدشده تولید می‌کنند، نه خرابی‌های خاموش",
        "اثبات با استفاده از تحلیل دسترس‌پذیری شبکه پتری ساخته شده است",
        "در برابر ۱۰⁶ توالی رویداد دشمنانه مصنوعی اعتبارسنجی شده است",
      ],
      quote: "یک رویداد یا اثبات را تکمیل می‌کند یا وجود ندارد.",
      tags: ["اثبات گازیفیکاسیون", "پردازش جزئی", "شبکه پتری", "تضمین رسمی"],
    },
    {
      title: "طبقه‌بندی ۴۷ کلاسه رویداد",
      summary:
        "EPU هر رویداد ورودی را در برابر یک طبقه‌بندی رسماً تعریف‌شده از ۴۷ کلاس رویداد طبقه‌بندی می‌کند که از تحلیل جامع پایگاه‌های داده حوادث خودروی خودران، موارد لبه فیزیکی و سناریوهای دشمنانه مشتق شده است. طبقه‌بندی یک جدول جستجو نیست — یک تقسیم‌بندی از فضای رویداد است که به طور قابل اثبات کامل و متقابلاً انحصاری است.",
      keyPoints: [
        "۴۷ کلاس از پایگاه داده حوادث خودروی خودران NHTSA + تحلیل موارد لبه فیزیکی مشتق شده",
        "به طور قابل اثبات کامل: هر رویداد فیزیکاً ممکن دقیقاً به یک کلاس نگاشت می‌شود",
        "متقابلاً انحصاری: هیچ رویدادی نمی‌تواند همزمان به دو کلاس تعلق داشته باشد",
        "هر کلاس یک پروتکل پاسخ تأییدشده در ISA ثبت شده دارد",
        "طبقه‌بندی با استفاده از اثبات کامل بودن نظریه مجموعه‌ها به طور رسمی تأیید شده است",
      ],
      quote: "اگر در دنیای فیزیکی اتفاق بیفتد، یک کلاس دارد. اگر کلاس داشته باشد، یک پاسخ تأییدشده دارد.",
      tags: ["طبقه‌بندی ۴۷ کلاسه", "طبقه‌بندی رویداد", "اثبات کامل بودن", "ISA"],
    },
    {
      title: "ISA سفارشی: دستورالعمل‌ها به عنوان قانون فیزیکی",
      summary:
        "معماری مجموعه دستورالعمل EPU از x86، ARM یا RISC-V مشتق نشده است. از توالی ۱۰ دروازه به سمت بالا طراحی شده است: هر دستورالعمل با یک عملیات فیزیکی در خط لوله ایمنی مطابقت دارد و زمان‌بندی هر دستورالعمل یک قضیه است، نه یک اندازه‌گیری. ISA دارای ۱۲۷ دستورالعمل است — هر کدام به طور رسمی مشخص شده.",
      keyPoints: [
        "۱۲۷ دستورالعمل، هر کدام به طور رسمی با کران WCET و معناشناسی فیزیکی مشخص شده",
        "بدون دستورالعمل‌های عمومی: هر کد عملیاتی به یک عملیات دروازه نگاشت می‌شود",
        "زمان‌بندی دستورالعمل از فیزیک سیلیکون مشتق می‌شود، نه اندازه‌گیری معیار",
        "ISA به طور رسمی در برابر الزام کامل بودن توالی ۱۰ دروازه تأیید شده است",
        "بدون اجرای حدسی، بدون پیش‌بینی شاخه — قطعیت با طراحی",
      ],
      quote: "یک دستورالعمل یک عمل فیزیکی است. زمان‌بندی‌اش یک واقعیت فیزیکی است.",
      tags: ["ISA سفارشی", "۱۲۷ دستورالعمل", "قطعیت", "معناشناسی فیزیکی"],
    },
    {
      title: "نمونه اولیه FPGA: اثبات تحقق‌پذیری فیزیکی",
      summary:
        "قبل از تعهد به ساخت ASIC، معماری EPU باید از نظر فیزیکی قابل تحقق روی FPGA اثبات شود. نمونه اولیه FPGA یک نمایش عملکرد نیست — یک تأیید رسمی است که توالی ۱۰ دروازه، فایل ۵۱۲ رجیستری و ISA سفارشی می‌توانند در سیلیکون بدون نقض هیچ ثابت زمانی پیاده‌سازی شوند.",
      keyPoints: [
        "هدف: Xilinx UltraScale+ FPGA، فرآیند ۱۶nm FinFET",
        "نمونه اولیه FPGA بسته شدن زمانی را برای همه ۱۲۷ دستورالعمل ISA تأیید می‌کند",
        "فایل ۵۱۲ رجیستری به عنوان RAM توزیع‌شده پیاده‌سازی شده — صفر تأخیر BRAM",
        "توالی ۱۰ دروازه در ۵۰۰ MHz با حاشیه زمانی ۲ns تأیید شده",
        "هزینه نمونه اولیه: ۲.۱ میلیون دلار (در بودجه فاز ۱ گنجانده شده)",
      ],
      quote: "نمونه اولیه FPGA عملکرد را نشان نمی‌دهد. وجود را اثبات می‌کند.",
      tags: ["نمونه اولیه FPGA", "Xilinx UltraScale+", "بسته شدن زمانی", "تحقق‌پذیری فیزیکی"],
    },
    {
      title: "نقشه راه ASIC: از اثبات به تولید",
      summary:
        "پیاده‌سازی ASIC از EPU یک طراحی فرآیند ۳nm است که عملکرد ۱.۲ GHz با پوشش حرارتی ۸W را هدف قرار می‌دهد. انتقال از FPGA به ASIC یک تمرین مقیاس‌گذاری نیست — یک تمرین تأیید مجدد است. هر اثبات زمانی باید برای گره فرآیند جدید مجدداً مشتق شود و هر ثابت فیزیکی باید مجدداً تأیید شود.",
      keyPoints: [
        "هدف: فرآیند TSMC 3nm N3E، ۱.۲ GHz، ۸W TDP",
        "مساحت قالب: ۴۲mm² (تخمینی)، شامل فایل ۵۱۲ رجیستری و خط لوله ۱۰ دروازه",
        "تأیید مجدد مورد نیاز: همه ۱۲۷ زمان‌بندی دستورالعمل ISA برای ۳nm مجدداً مشتق شده",
        "هزینه NRE تخمینی: ۲۸ میلیون دلار (در بودجه فاز ۲ گنجانده شده)",
        "هدف هزینه تولید: ۳۴۰ دلار/واحد در حجم ۱۰۰K",
      ],
      quote: "ASIC اثبات FPGA را به ارث نمی‌برد. اثبات خودش را کسب می‌کند.",
      tags: ["ASIC", "TSMC 3nm", "هزینه NRE", "نقشه راه تولید"],
    },
    {
      title: "منشور حسگرها",
      summary:
        "EPU یک مجموعه حسگر ۴۷ روشی را از طریق یک سند رسمی به نام منشور حسگرها اداره می‌کند — مجموعه‌ای از ثابت‌ها که هر حسگر باید قبل از اینکه داده‌اش به دروازه ۱ پذیرفته شود آن‌ها را برآورده کند. منشور یک سند مشخصات نیست؛ یک ابزار قانونی با مکانیزم‌های اجرایی رسمی است.",
      keyPoints: [
        "۴۷ روش حسگر: LiDAR (۴)، دوربین (۱۲)، رادار (۶)، اولتراسونیک (۸)، IMU (۳)، GPS (۲)، حرارتی (۶)، V2X (۶)",
        "هر روش یک تابع مشارکت D(s,a) تأییدشده دارد",
        "منشور حداقل نرخ داده، حداکثر تأخیر و حالت‌های خرابی را برای هر روش تعریف می‌کند",
        "خرابی حسگر پروتکل حالت تخریب‌یافته تأییدشده را فعال می‌کند، نه خاموشی سیستم",
        "منشور به طور رسمی در برابر الزامات داده توالی ۱۰ دروازه تأیید شده است",
      ],
      quote: "مجموعه حسگر یک مجموعه دستگاه نیست. یک فدراسیون اداره‌شده است.",
      tags: ["منشور حسگرها", "۴۷ روش", "حاکمیت رسمی", "حالت تخریب‌یافته"],
    },
    {
      title: "دیوان‌های تأیید",
      summary:
        "فرآیند تأیید EPU حول سه دیوان تأیید سازماندهی شده است — نهادهای مستقلی که هر کدام باید یک حکم مثبت صادر کنند قبل از اینکه EPU بتواند در یک خودروی تولیدی مستقر شود. دیوان‌ها چک‌باکس‌های نظارتی نیستند؛ فرآیندهای تأیید دشمنانه‌ای هستند که برای یافتن خرابی‌هایی طراحی شده‌اند که تیم توسعه نمی‌تواند ببیند.",
      keyPoints: [
        "دیوان ۱ (دیوان فیزیک): همه اثبات‌های زمانی را در برابر اندازه‌گیری‌های سیلیکون تأیید می‌کند",
        "دیوان ۲ (دیوان دشمنانه): ۱۰⁶ سناریوی دشمنانه مصنوعی، ۱۰⁴ آزمون سخت‌افزار در حلقه",
        "دیوان ۳ (دیوان نظارتی): انطباق ISO 26262، ISO/PAS 21448 (SOTIF)، UN R157",
        "هر دیوان به طور مستقل عمل می‌کند — بدون پرسنل مشترک با تیم توسعه",
        "حکم منفی از هر دیوان استقرار را صرف نظر از فشار تجاری متوقف می‌کند",
      ],
      quote: "دیوان‌ها آنچه ساختیم را تأیید نمی‌کنند. سعی می‌کنند آن را نابود کنند.",
      tags: ["دیوان‌های تأیید", "آزمون دشمنانه", "ISO 26262", "SOTIF"],
    },
    {
      title: "چارچوب حاکمیتی TEA/LCA",
      summary:
        "استقرار EPU توسط دو چارچوب موازی اداره می‌شود: ارزیابی معادل فنی (TEA) و ارزیابی چرخه عمر (LCA). TEA اطمینان می‌دهد که هر نوع EPU معادل رسمی با خط پایه تأییدشده را حفظ می‌کند. LCA اطمینان می‌دهد که ردپای کربن تولید، استقرار و پایان عمر EPU قابل حسابرسی و قابل دفاع است.",
      keyPoints: [
        "TEA: اثبات معادل رسمی برای هر نوع یا به‌روزرسانی EPU مورد نیاز است",
        "LCA: حسابرسی کربن مطابق ISO 14040/14044 برای چرخه عمر کامل EPU",
        "آستانه معادل TEA: ΔD(s,a) < ۰.۰۰۱ در همه ۴۷ کلاس رویداد",
        "دامنه LCA: ساخت سیلیکون، یکپارچه‌سازی خودرو، انرژی عملیاتی، بازیافت",
        "هر دو چارچوب تعهدات قراردادی در قراردادهای مجوز EPU هستند",
      ],
      quote: "معادل بودن شباهت نیست. یک اثبات است.",
      tags: ["TEA", "LCA", "حسابرسی کربن", "معادل رسمی"],
    },

    // پرده II: ابزار گران‌بها و چشم‌انداز راهبردی (اسلایدهای ۱۶–۳۰)
    {
      title: "خندق رقابتی: روش‌شناسی به عنوان مالکیت فکری",
      summary:
        "عمیق‌ترین مزیت رقابتی EPU چیپ نیست — روش‌شناسی است. توالی ۱۰ دروازه، متریک بی‌بعد، اثبات گازیفیکاسیون و فرآیند دیوان تأیید همگی مصنوعات قابل ثبت اختراع هستند که رقبا نمی‌توانند بدون شروع از همان معرفت‌شناسی فیزیک-محور آن‌ها را تکرار کنند. خندق معرفت‌شناختی است، نه فناوری.",
      keyPoints: [
        "پورتفولیوی ثبت اختراع: ۲۳ درخواست موقت که دروازه‌ها، متریک، ISA و روش‌های اثبات را پوشش می‌دهد",
        "راز تجاری: الگوریتم تخصیص رجیستر و نگاشت دروازه به دستورالعمل",
        "خندق روش‌شناسی: رقبا باید همان چارچوب فیزیک-محور را اتخاذ کنند تا رقابت کنند",
        "مدل مجوز: روش‌شناسی EPU جداگانه از سیلیکون EPU مجوز داده می‌شود",
        "مزیت پیشگام در ایمنی خودروی خودران تأییدشده با فیزیک: تخمین ۴–۶ سال پیشتازی",
      ],
      quote: "چیپ را می‌توان کپی کرد. اثبات را نمی‌توان.",
      tags: ["خندق رقابتی", "استراتژی IP", "پورتفولیوی ثبت اختراع", "روش‌شناسی"],
    },
    {
      title: "معماری سرمایه‌گذاری ۴۷ میلیون دلاری",
      summary:
        "برنامه توسعه EPU نیازمند ۴۷ میلیون دلار در سه فاز است. این یک بودجه تحقیقاتی نیست — یک بودجه تأیید است. اکثر هزینه‌ها برای تأیید، اعتبارسنجی و تعامل نظارتی است، نه توسعه سیلیکون. این پایان‌نامه بنیادی EPU را منعکس می‌کند: ارزش در اثبات است، نه در پردازنده.",
      keyPoints: [
        "فاز ۱ (FPGA + ISA): ۱۲ میلیون دلار — معماری، نمونه اولیه، تأیید رسمی",
        "فاز ۲ (NRE ASIC): ۲۸ میلیون دلار — tape-out 3nm، تأیید مجدد، دیوان‌های تأیید",
        "فاز ۳ (تأیید): ۷ میلیون دلار — ISO 26262، SOTIF، UN R157، تعامل نظارتی",
        "هزینه تأیید: ۶۸٪ از کل بودجه — فلسفه اثبات-محور را منعکس می‌کند",
        "سر به سر: ۸۷K واحد در هزینه تولید ۳۴۰ دلار/واحد و ASP 1,200 دلار",
      ],
      quote: "ما یک چیپ نمی‌خریم. ما یک اثبات می‌خریم.",
      tags: ["بودجه ۴۷ میلیون دلاری", "معماری سرمایه‌گذاری", "هزینه تأیید", "سر به سر"],
    },
    {
      title: "یکپارچه‌سازی بستر هیدروژن",
      summary:
        "EPU یک چیپ ایمنی مستقل نیست — هسته حاکمیتی یک بستر هیدروژنی خودمختار کامل است. پشته پیل سوختی، سیستم ذخیره LH₂، حوزه حرارتی کابین و دینامیک خودرو را همزمان، در یک پوشش WCET قطعی واحد مدیریت می‌کند.",
      keyPoints: [
        "حاکمیت پشته پیل سوختی: جریان، دما و هیدراتاسیون غشا در WCET",
        "پایش ذخیره LH₂: فشار، دما، نرخ تبخیر — همه حیاتی ایمنی",
        "مدیریت حرارتی کابین: داوری اولویت آسایش مسافر در برابر خنک‌کاری پشته FC",
        "دینامیک خودرو: فرمان (by-wire)، ترمز و تعلیق — همه EPU-محور",
        "پوشش WCET واحد: همه چهار حوزه در بدترین چرخه ۲ms پردازش می‌شوند",
      ],
      quote: "EPU خودرو را مدیریت نمی‌کند. سیستم عصبی خودرو است.",
      tags: ["بستر هیدروژن", "پیل سوختی", "ذخیره LH₂", "پوشش WCET"],
    },
    {
      title: "کابین بدون راننده: ارگونومی بدون فرمان",
      summary:
        "حذف فرمان فقط یک تصمیم مهندسی نیست — یک آزادسازی فضایی است. کابین بدون راننده ۳۴۰mm عمق داشبورد را بازپس می‌گیرد، منطقه نفوذ ستون را حذف می‌کند و یک پیکربندی نشستن رو به رو را ممکن می‌سازد که در هر خودروی انسان‌محوری غیرممکن است. EPU این را با حذف نیاز به هر رابط کنترل انسانی ممکن می‌سازد.",
      keyPoints: [
        "۳۴۰mm عمق داشبورد با حذف ستون فرمان بازپس گرفته شده",
        "نشستن رو به رو: پیکربندی ۴ مسافره با قابلیت چرخش ۱۸۰ درجه",
        "کنترلر نیم‌گنبدی ترجیح-محور: ورودی مقصد، ترجیحات آسایش، سرگرمی",
        "بدون پدال، بدون ستون، بدون منطقه استقرار کیسه هوا — فضای کامل کف موجود است",
        "تضمین ایمنی قطعی EPU مبنای قانونی حذف ستون است",
      ],
      quote: "کابین یک کابین خلبان نیست. یک اتاق است.",
      tags: ["کابین بدون راننده", "ارگونومی", "حذف فرمان", "کنترلر نیم‌گنبدی"],
    },
    {
      title: "ناوبری بدون نقشه: رویکرد توپولوژیکی",
      summary:
        "سیستم ناوبری EPU به نقشه‌های HD از پیش ساخته شده متکی نیست. یک نمایش توپولوژیکی بلادرنگ از محیط را از مجموعه ۴۷ حسگر، به‌روزرسانی‌شده در ۱۰۰Hz، می‌سازد و مسیرها را از طریق این نمایش با استفاده از یک الگوریتم جستجوی گراف به طور رسمی تأییدشده برنامه‌ریزی می‌کند. سیستم هنگام خرابی حسگرها به آرامی تخریب می‌شود — متوقف نمی‌شود.",
      keyPoints: [
        "نقشه توپولوژیکی بلادرنگ از ادغام ۴۷ حسگر در نرخ به‌روزرسانی ۱۰۰Hz ساخته شده",
        "بدون وابستگی به نقشه HD: در محیط‌های نقشه‌نشده با عملکرد تخریب‌یافته تأییدشده عمل می‌کند",
        "الگوریتم جستجوی گراف به طور رسمی برای کامل بودن و بهینگی تأیید شده",
        "خرابی حسگر ناوبری حالت تخریب‌یافته تأییدشده را فعال می‌کند، نه توقف سیستم",
        "یکپارچه‌سازی V2X: داده زیرساخت به عنوان گره‌های توپولوژیکی اضافی گنجانده شده",
      ],
      quote: "نقشه قلمرو نیست. EPU قلمرو را ناوبری می‌کند.",
      tags: ["ناوبری", "نقشه توپولوژیکی", "استقلال از نقشه HD", "V2X"],
    },
    {
      title: "استراتژی نظارتی: پیشتازی در استاندارد",
      summary:
        "تیم EPU منتظر نمی‌ماند تا ناظران استاندارد را تعریف کنند — ورودی‌های فنی را می‌نویسد که استاندارد را شکل می‌دهند. مشارکت فعال در ISO TC22/SC32، UN WP.29 و کمیته‌های SAE اطمینان می‌دهد که روش‌شناسی تأیید رسمی EPU به معماری مرجع برای استانداردهای ایمنی خودروی خودران نسل بعدی تبدیل می‌شود.",
      keyPoints: [
        "مشارکت فعال: ISO TC22/SC32، UN WP.29 GRVA، کمیته SAE G-34",
        "ورودی‌های فنی ارائه‌شده: روش‌شناسی تأیید WCET، پیشنهاد متریک بی‌بعد",
        "هدف: روش‌شناسی EPU در بازنگری ISO/PAS 21448 (SOTIF) 2027 ارجاع داده شود",
        "پیشگام نظارتی: ۱۸ ماه پیشتازی در الزامات تأیید رسمی",
        "استراتژی تعامل: روش‌شناسی را منتشر کن، نه پیاده‌سازی — IP را حفظ کن در حالی که استاندارد را شکل می‌دهی",
      ],
      quote: "استاندارد یک محدودیت نیست. یک بازار است.",
      tags: ["استراتژی نظارتی", "ISO TC22", "UN WP.29", "تعیین استاندارد"],
    },
    {
      title: "معماری مجوز",
      summary:
        "مدل کسب‌وکار EPU دو جریان درآمدی دارد: فروش سیلیکون و مجوز روش‌شناسی. مجوز روش‌شناسی به OEM‌ها حق استفاده از چارچوب تأیید رسمی EPU برای سیستم‌های حیاتی ایمنی خودشان را اعطا می‌کند — نه فقط خودروهای خودمختار. این یک جریان درآمد تکراری ایجاد می‌کند که مستقل از حجم تولید خودرو است.",
      keyPoints: [
        "جریان ۱: سیلیکون EPU — ASP 1,200 دلار، هدف ۱۰۰K واحد/سال تا سال ۵",
        "جریان ۲: مجوز روش‌شناسی — ۲–۵ میلیون دلار/سال به ازای هر OEM، پوشش چارچوب تأیید رسمی",
        "دامنه مجوز: توالی ۱۰ دروازه، متریک D(s,a)، روش‌شناسی اثبات گازیفیکاسیون",
        "مجوز شامل نمی‌شود: پیاده‌سازی ISA، الگوریتم تخصیص رجیستر (اسرار تجاری)",
        "درآمد پیش‌بینی‌شده سال ۵: ۱۴۵ میلیون دلار سیلیکون + ۳۵ میلیون دلار مجوز = ۱۸۰ میلیون دلار کل",
      ],
      quote: "چیپ را یک بار می‌فروشیم. اثبات را برای همیشه مجوز می‌دهیم.",
      tags: ["مجوز", "مدل درآمد", "مجوز روش‌شناسی", "استراتژی OEM"],
    },
    {
      title: "چارچوب مشارکت OEM",
      summary:
        "EPU برای یکپارچه‌سازی عمیق OEM طراحی شده، نه نصب افزودنی. چارچوب مشارکت OEM شرایط فنی، قانونی و تجاری را تعریف می‌کند که تحت آن یک OEM می‌تواند EPU را در بستر خودروی خود یکپارچه کند — از جمله ارزیابی معادل TEA اجباری برای هر نوع خودرو.",
      keyPoints: [
        "یکپارچه‌سازی فنی: EPU ECU مرکزی را در حوزه ایمنی جایگزین می‌کند",
        "الزام TEA: هر نوع خودرو نیازمند تأیید معادل رسمی است",
        "اشتراک داده: OEM داده حوادث ناشناس را برای اصلاح طبقه‌بندی ارائه می‌دهد",
        "شرایط تجاری: قیمت‌گذاری مبتنی بر حجم با حداقل تعهد سالانه",
        "انحصار: پنجره انحصار ۲۴ ماهه برای اولین شریک OEM در هر بخش خودرو",
      ],
      quote: "یکپارچه‌سازی نصب نیست. یک تعهد به اثبات است.",
      tags: ["مشارکت OEM", "TEA", "چارچوب یکپارچه‌سازی", "انحصار"],
    },
    {
      title: "معماری زنجیره تأمین",
      summary:
        "زنجیره تأمین EPU برای انعطاف‌پذیری و قابلیت حسابرسی طراحی شده است. هر جزء در زنجیره تأمین سیلیکون — از ویفر تا بسته‌بندی — در برابر حسابرسی کربن LCA ردیابی می‌شود. زنجیره تأمین برای هزینه بهینه‌سازی نشده؛ برای یکپارچگی اثبات بهینه‌سازی شده است.",
      keyPoints: [
        "ساخت ویفر: TSMC 3nm، تایوان — اصلی؛ Samsung 3nm، کره — ثانوی",
        "بسته‌بندی: ASE Group، تایوان — flip-chip BGA پیشرفته",
        "آزمون: پلتفرم آزمون SoC Advantest — آزمون عملکردی ۱۰۰٪، نه نمونه‌گیری",
        "ردیابی LCA: ردپای کربن در هر گره زنجیره تأمین ثبت می‌شود",
        "استراتژی دو منبعه: بدون وابستگی تک منبعه برای هر جزء حیاتی",
      ],
      quote: "زنجیره تأمین یک مرکز هزینه نیست. یک زنجیره اثبات است.",
      tags: ["زنجیره تأمین", "TSMC", "ردیابی LCA", "دو منبع"],
    },
    {
      title: "معماری حسابرسی کربن",
      summary:
        "حسابرسی کربن LCA EPU یک تمرین بازاریابی نیست — یک تعهد قراردادی است که در هر قرارداد مجوز OEM جاسازی شده است. حسابرسی چرخه عمر کامل را پوشش می‌دهد: ساخت سیلیکون، یکپارچه‌سازی خودرو، مصرف انرژی عملیاتی و بازیافت پایان عمر. هر رقم کربن به طور مستقل تأیید شده است.",
      keyPoints: [
        "کربن ساخت: ۱۲.۴ kgCO₂e/واحد (TSMC 3nm، ترکیب انرژی تجدیدپذیر)",
        "کربن یکپارچه‌سازی: ۰.۸ kgCO₂e/واحد (مونتاژ خودرو، لجستیک)",
        "کربن عملیاتی: ۰ (پیل سوختی هیدروژن — صفر انتشار مستقیم)",
        "کربن پایان عمر: ۲.۱- kgCO₂e/واحد (اعتبار بازیافت سیلیکون)",
        "کربن خالص چرخه عمر: ۱۱.۱ kgCO₂e/واحد — به طور مستقل توسط Bureau Veritas تأیید شده",
      ],
      quote: "هر گرم کربن حساب شده است. هر گرم قابل دفاع است.",
      tags: ["حسابرسی کربن", "LCA", "کربن خالص چرخه عمر", "Bureau Veritas"],
    },
    {
      title: "دژ مالکیت فکری",
      summary:
        "پورتفولیوی IP EPU به عنوان یک دژ سه‌لایه ساختار یافته است: ثبت اختراع‌ها از روش‌شناسی محافظت می‌کنند، اسرار تجاری از پیاده‌سازی محافظت می‌کنند و انتشار از معرفت‌شناسی محافظت می‌کند. استراتژی انتشار عمدی است: با انتشار چارچوب فیزیک-محور، تیم EPU سابقه‌ای ایجاد می‌کند که از ثبت اختراع اصول بنیادی توسط رقبا جلوگیری می‌کند.",
      keyPoints: [
        "لایه ۱ (ثبت اختراع‌ها): ۲۳ درخواست موقت — دروازه‌ها، متریک، ISA، روش‌های اثبات",
        "لایه ۲ (اسرار تجاری): تخصیص رجیستر، نگاشت دروازه به دستورالعمل، بهینه‌سازی زمانی",
        "لایه ۳ (انتشار): چارچوب فیزیک-محور در IEEE Transactions on Vehicular Technology منتشر شده",
        "استراتژی سابقه: انتشار حوزه عمومی را برای اصول بنیادی ایجاد می‌کند",
        "آزادی عمل: تحلیل FTO برای همه ۲۳ خانواده ثبت اختراع تکمیل شده",
      ],
      quote: "فلسفه را منتشر می‌کنیم. روش را ثبت اختراع می‌کنیم. پیاده‌سازی را محافظت می‌کنیم.",
      tags: ["دژ IP", "استراتژی ثبت اختراع", "اسرار تجاری", "سابقه"],
    },
    {
      title: "معماری تیم",
      summary:
        "تیم توسعه EPU حول ساختار اثبات سازماندهی شده، نه ساختار محصول. هر رهبر تیم مسئول یک حوزه تأیید رسمی است، نه یک جزء عملکردی. این طراحی سازمانی اطمینان می‌دهد که یکپارچگی اثبات با مقیاس‌گذاری تیم حفظ می‌شود.",
      keyPoints: [
        "رهبر معماری دروازه: مالک مشخصات رسمی توالی ۱۰ دروازه",
        "رهبر تأیید ISA: مالک اثبات زمانی ۱۲۷ دستورالعمل",
        "رهبر منشور حسگر: مالک چارچوب حاکمیتی ۴۷ روشی",
        "رابط دیوان تأیید: مالک برنامه آزمون دشمنانه",
        "رهبر انطباق LCA/TEA: مالک حسابرسی کربن و چارچوب معادل",
      ],
      quote: "نمودار سازمانی از ساختار اثبات پیروی می‌کند، نه نقشه راه محصول.",
      tags: ["معماری تیم", "سازمان اثبات-محور", "رهبران تأیید"],
    },
    {
      title: "پایان‌نامه زمان‌بندی بازار",
      summary:
        "EPU در لحظه دقیقی وارد بازار می‌شود که پارادایم ایمنی احتمالاتی صنعت خودروی خودران تحت بررسی نظارتی در حال شکست است. سه رویداد نظارتی در ۲۰۲۴–۲۰۲۵ یک پنجره ایجاد کرده‌اند: پیشنهاد الزام رسمی WCET NHTSA، پیش‌نویس مقررات ایمنی خودروی خودران اتحادیه اروپا و بازنگری GB/T 40429 چین. EPU تنها معماری است که می‌تواند هر سه را همزمان برآورده کند.",
      keyPoints: [
        "پیشنهاد WCET NHTSA: تأیید زمانی رسمی برای SAE سطح ۴+ (۲۰۲۶) مورد نیاز است",
        "مقررات ایمنی خودروی خودران اتحادیه اروپا: دستور تأیید رسمی برای توابع حیاتی ایمنی (۲۰۲۷)",
        "بازنگری GB/T 40429 چین: الزام معماری ایمنی قطعی (۲۰۲۶)",
        "EPU تنها معماری با چارچوب تأیید رسمی موجود برای هر سه است",
        "پنجره بازار: ۱۸–۲۴ ماه قبل از اینکه رقبا بتوانند چارچوب‌های معادل توسعه دهند",
      ],
      quote: "مقررات یک مانع نیست. یک خندق است.",
      tags: ["زمان‌بندی بازار", "NHTSA", "مقررات اتحادیه اروپا", "GB/T چین"],
    },
    {
      title: "ترکیب راهبردی",
      summary:
        "EPU یک محصول نیست. یک دسته جدید از مصنوع محاسباتی است — دسته‌ای که پیشنهاد ارزشش اثبات است، نه عملکرد. خندق رقابتی معرفت‌شناختی است. مدل درآمد دو جریانه است. استراتژی نظارتی تعیین استاندارد است. و طراحی سازمانی از ساختار اثبات پیروی می‌کند. این یک شرکت چیپ خودروی نیست. یک شرکت تأیید ایمنی است که اتفاقاً چیپ می‌سازد.",
      keyPoints: [
        "ایجاد دسته: ایمنی محاسباتی تأییدشده با فیزیک — یک بخش بازار جدید",
        "خندق دوگانه: IP روش‌شناسی + تعیین استاندارد نظارتی",
        "درآمد دوگانه: فروش سیلیکون + مجوز روش‌شناسی",
        "طراحی سازمانی: اثبات-محور، نه محصول-محور",
        "چشم‌انداز بلندمدت: روش‌شناسی EPU به معماری مرجع ISO برای ایمنی خودروی خودران تبدیل می‌شود",
      ],
      quote: "ما یک شرکت چیپ نمی‌سازیم. ما استاندارد را می‌سازیم.",
      tags: ["ترکیب راهبردی", "ایجاد دسته", "تعیین استاندارد", "چشم‌انداز بلندمدت"],
    },
    {
      title: "پایان پرده II: ابزار گران‌بها",
      summary: "EPU گران‌بها است نه به این دلیل که گران است — هرچند هست — بلکه به این دلیل که جایگزین‌ناپذیر است. هیچ معماری دیگری نمی‌تواند ایمنی قطعی تأییدشده با فیزیک را برای یک خودروی خودران هیدروژنی بدون فرمان فراهم کند. این یک مقایسه ویژگی نیست. یک اثبات وجود است.",
      keyPoints: [
        "جایگزین‌ناپذیری: هیچ معماری دیگری این ترکیب را ارائه نمی‌دهد",
        "ارزش‌گذاری: EPU در برابر هزینه تصادف، نه هزینه رقیب قیمت‌گذاری می‌شود",
        "بازار: هر OEM که ادعای ایمنی خودروی خودران دارد به EPU نیاز دارد",
        "دفاع: گواهی‌نامه فیزیکی یک خندق است که پول نمی‌تواند آن را بخرد",
        "پرده بعدی: معماری ۱۰ دروازه — نحوه کار EPU",
      ],
      quote: "ابزار گران‌بها آن نیست که قیمتش بالاست. آن است که بدون آن نمی‌توانی ادامه دهی.",
      tags: ["ابزار گران‌بها", "جایگزین‌ناپذیری", "ارزش‌گذاری", "پایان پرده II"],
    },
  ],
};

export type Language = "en" | "fa";

export interface SlideTranslation {
  title: string;
  summary: string;
  keyPoints: string[];
  quote?: string;
  tags: string[];
}

export interface UITranslation {
  siteTitle: string;
  siteSubtitle: string;
  heroEyebrow: string;
  heroDescription: string;
  heroStats: {
    slides: string;
    sections: string;
    courts: string;
    range: string;
    slidesLabel: string;
    sectionsLabel: string;
    courtsLabel: string;
    rangeLabel: string;
  };
  searchPlaceholder: string;
  allFilter: string;
  slidesCount: string;
  keyPoints: string;
  tags: string;
  slideOf: string;
  prevSlide: string;
  nextSlide: string;
  navigate: string;
  escClose: string;
  noResults: string;
  noResultsHint: string;
  sections: {
    "Executive Framing": string;
    "Cabin Controller": string;
    "Hydrogen Platform": string;
    "Integrated Electronics": string;
    "Sensor Suite & Governance": string;
    "TEA/LCA & Strategic Moat": string;
  };
}

export const ui: Record<Language, UITranslation> = {
  en: {
    siteTitle: "EPU Strategy",
    siteSubtitle: "Driverless H2 Autonomy Platform",
    heroEyebrow: "STRATEGY CONCEPT · CONCEPT DOCUMENT",
    heroDescription:
      "EPU Strategy combines a physics-certified safety compute core, hydrogen driverless platform architecture, sensor suite constitutionalism, and TEA/LCA governance into a single, defensible methodology.",
    heroStats: {
      slides: "30",
      sections: "6",
      courts: "4",
      range: "2,000mi",
      slidesLabel: "Concept Slides",
      sectionsLabel: "Strategy Sections",
      courtsLabel: "Validation Courts",
      rangeLabel: "Range Concept Target",
    },
    searchPlaceholder: "Search slides, topics, tags…",
    allFilter: "All",
    slidesCount: "Slides",
    keyPoints: "KEY POINTS",
    tags: "Tags",
    slideOf: "Slide",
    prevSlide: "Previous",
    nextSlide: "Next",
    navigate: "← → to navigate",
    escClose: "Esc to close",
    noResults: "No slides match your search.",
    noResultsHint: "Try a different keyword or clear the search.",
    sections: {
      "Executive Framing": "Executive Framing",
      "Cabin Controller": "Cabin Controller",
      "Hydrogen Platform": "Hydrogen Platform",
      "Integrated Electronics": "Integrated Electronics",
      "Sensor Suite & Governance": "Sensor Suite & Governance",
      "TEA/LCA & Strategic Moat": "TEA/LCA & Strategic Moat",
    },
  },
  fa: {
    siteTitle: "استراتژی EPU",
    siteSubtitle: "پلتفرم خودمختار هیدروژنی بدون راننده",
    heroEyebrow: "مفهوم استراتژیک · سند مفهومی",
    heroDescription:
      "استراتژی EPU یک هسته محاسباتی ایمنی مبتنی بر فیزیک، معماری پلتفرم هیدروژنی بدون راننده، قانون اساسی مجموعه حسگرها و حاکمیت TEA/LCA را در یک روش‌شناسی منسجم و قابل دفاع ادغام می‌کند.",
    heroStats: {
      slides: "۳۰",
      sections: "۶",
      courts: "۴",
      range: "۳٬۲۰۰ کیلومتر",
      slidesLabel: "اسلاید مفهومی",
      sectionsLabel: "بخش استراتژیک",
      courtsLabel: "دادگاه اعتبارسنجی",
      rangeLabel: "هدف برد مفهومی",
    },
    searchPlaceholder: "جستجوی اسلایدها، موضوعات، برچسب‌ها…",
    allFilter: "همه",
    slidesCount: "اسلاید",
    keyPoints: "نکات کلیدی",
    tags: "برچسب‌ها",
    slideOf: "اسلاید",
    prevSlide: "قبلی",
    nextSlide: "بعدی",
    navigate: "← → برای پیمایش",
    escClose: "Esc برای بستن",
    noResults: "هیچ اسلایدی با جستجوی شما مطابقت ندارد.",
    noResultsHint: "کلمه کلیدی دیگری امتحان کنید یا جستجو را پاک کنید.",
    sections: {
      "Executive Framing": "چارچوب اجرایی",
      "Cabin Controller": "کنترلر کابین",
      "Hydrogen Platform": "پلتفرم هیدروژنی",
      "Integrated Electronics": "الکترونیک یکپارچه",
      "Sensor Suite & Governance": "مجموعه حسگر و حاکمیت",
      "TEA/LCA & Strategic Moat": "TEA/LCA و مزیت استراتژیک",
    },
  },
};

export const slideTranslations: Record<Language, SlideTranslation[]> = {
  en: [
    {
      title: "Physics-Certified, Carbon-Auditable Autonomy: The EPU Vision",
      summary:
        "The EPU (Environment Processing Unit) represents a paradigm shift in autonomous vehicle architecture — a physics-certified, carbon-auditable safety compute core that is fuel-agnostic and application-agnostic.",
      keyPoints: [
        "EPU is the safety compute core — the constitutional foundation, not a feature or module",
        "Physics-certified: every decision pathway is formally provable, not statistically inferred",
        "Carbon-auditable: lifecycle emissions tracked at subsystem level, not estimated at fleet level",
        "Application-agnostic: same EPU core serves BEV, hydrogen, hybrid, and autonomous fleet pods",
        "The moat is the methodology: transparent governance creates defensible competitive advantage",
      ],
      quote: "Safety is not a layer added on top. It is the physics-governed foundation everything else is built upon.",
      tags: ["EPU", "autonomy", "safety", "carbon", "vision", "thesis"],
    },
    {
      title: "EPU Is a Safety Compute Core, Not a Driving Assistant",
      summary:
        "EPU is not an ADAS feature set. It is a sensor-to-decision safety pipeline governed by physics constraints, operating independently of any specific powertrain, HMI, or application domain.",
      keyPoints: [
        "Sensor inputs → physics-governed fusion → validated actuation outputs: the EPU pipeline",
        "Fuel-agnostic: EPU does not care whether the vehicle is hydrogen, battery, or hybrid",
        "Application-agnostic: HMI, UI, and user preference systems are above EPU, not inside it",
        "Deterministic timing: every computation path has a worst-case execution time (WCET) bound",
        "Formal separation enables independent certification of safety core vs. application features",
      ],
      quote: "EPU is the constitutional safety layer. Applications are built on top of it — not embedded within it.",
      tags: ["EPU", "ADAS", "pipeline", "WCET", "certification", "architecture"],
    },
    {
      title: "Scope Discipline — Core Roadmap vs. Application Notes",
      summary:
        "Strategic clarity demands explicit scope boundaries. The EPU Core Roadmap encompasses physics proofs, sensor constitution design, certification evidence packages, and TEA/LCA governance integration.",
      keyPoints: [
        "EPU Core: physics proofs, sensor constitution, certification artifacts, TEA/LCA governance",
        "Application Notes: H2 packaging, HMI/controller design, fleet deployment, E/E migration",
        '"Enabled by" is not the same as "part of" — the boundary is architectural and contractual',
        "Scope discipline is a competitive advantage: focused certification is faster and more defensible",
        "Application notes can evolve independently without touching the certified core",
      ],
      tags: ["scope", "roadmap", "discipline", "certification", "H2", "HMI"],
    },
    {
      title: "Four-Phase Integration Strategy — From TEA/LCA to Full Deployment",
      summary:
        "The phased integration roadmap translates EPU strategy into executable milestones across an 8-week horizon and beyond, with four distinct phases and decision gates.",
      keyPoints: [
        "Phase 1 (Wk 1–2): TEA/LCA governance + sensor constitution — the non-negotiable foundation",
        "Phase 2 (Wk 3–4): H2 application integration — conditional on Phase 1 physics review completion",
        "Phase 3 (Wk 5–6): Transparency enhancements — TCO dashboards, LCA reports, partner materials",
        "Phase 4 (Wk 7+): Scope filtering — continuous governance to prevent application creep into core",
        "Decision gates between phases ensure no phase begins without prior phase artifacts validated",
      ],
      tags: ["roadmap", "phases", "TEA", "LCA", "integration", "milestones"],
    },
    {
      title: "The Driverless Cabin — Preference-Only Interaction, Zero Override Authority",
      summary:
        "The driverless cabin eliminates the steering wheel, pedal cluster, and driver-facing instrument panel entirely. The occupant interacts through a console-integrated semi-dome controller that expresses preferences, not commands.",
      keyPoints: [
        "No steering wheel, no pedals, no driver-facing controls — full occupant posture freedom",
        "Semi-dome controller is a preference interface, not a control override mechanism",
        "EPU retains constitutional authority over all safety-critical actuation",
        "Ergonomic design priority: natural hand rest, minimal fatigue, zero cognitive load for safety",
        "Cabin volume and packaging freed by elimination of conventional driver architecture",
      ],
      tags: ["cabin", "HMI", "driverless", "ergonomics", "no steering wheel", "preference"],
    },
    {
      title: "Controller Semantics — Direction and Intensity as Separate Channels",
      summary:
        "The semi-dome controller resolves the fundamental ambiguity of single-axis joystick interfaces by separating direction and intensity into independent physical channels.",
      keyPoints: [
        "Angular position = directional preference (lane/path/accel-decel category)",
        "Compression/force/depth = intensity of preference (independent of direction)",
        "Anti-ambiguity design: same direction + different intensity produces distinct, unambiguous signals",
        "Interpretable inputs enable EPU to validate preference against physics bounds before execution",
        "Auditability: every preference signal is logged, timestamped, and traceable",
      ],
      tags: ["controller", "semantics", "direction", "intensity", "HMI", "interpretability"],
    },
    {
      title: "Three Interaction Modes — Low-Fatigue Default to Expressive Bounded Preference",
      summary:
        "The controller supports three distinct interaction modes calibrated to occupant engagement level: two-finger default, five-finger engaged, and hoisted expressive mode.",
      keyPoints: [
        "Two-finger mode: minimal fatigue, gesture-based, default for most journeys",
        "Five-finger mode: continuous preference shaping within bounded envelope",
        "Hoisted mode: expanded expressive envelope, controller raised from console",
        "All modes are preference-only — EPU retains safety authority in every mode",
        "Mode transitions are smooth and non-disruptive to the autonomy stack",
      ],
      tags: ["interaction modes", "two-finger", "five-finger", "hoisted", "preference", "HMI"],
    },
    {
      title: "Hydrogen Driverless Platform — Full Systems Architecture",
      summary:
        "The hydrogen driverless platform integrates LH2 storage, a fuel-cell stack, a buffer battery, centralized compute modules, a full sensor suite, and multi-domain thermal management into a single coherent architecture.",
      keyPoints: [
        "LH2 storage: structurally integrated, crash-zoned, thermally isolated from cabin and compute",
        "Fuel-cell stack: primary power source, with buffer battery for transient demand and regeneration",
        "Centralized compute: EPU module at electronic center of gravity for minimum sensor latency",
        "Full sensor suite: cameras, radar, optional lidar, ultrasonic — all on constitutional power/bandwidth budgets",
        "Thermal loops: three separate domains (cryo, fuel-cell, compute) with isolation and control logic",
      ],
      tags: ["hydrogen", "LH2", "fuel cell", "platform", "architecture", "cutaway"],
    },
    {
      title: "Packaging Opportunity — What Removing the Driver Architecture Actually Frees",
      summary:
        "Eliminating the conventional driver architecture creates measurable volume and mass opportunities, but these gains must be assessed honestly — safety validation still applies to all freed zones.",
      keyPoints: [
        "Freed zones: steering column space, pedal box, instrument cluster depth, driver airbag volume",
        "Conceptual cabin volume gain: significant but requires structural and safety revalidation",
        "Floor flatness opportunity: enables new seating configurations and accessibility improvements",
        "Forward-zone utilization: potential for expanded storage, HVAC optimization, or sensor integration",
        "Honest framing: packaging gains are real but not 'free' — safety validation cost must be included in TEA",
      ],
      tags: ["packaging", "cabin volume", "steering wheel removal", "safety", "TEA", "honest framing"],
    },
    {
      title: "LH2 Tank and Cryogenic Safety — Engineering Complexity Without Drama",
      summary:
        "Liquid hydrogen storage at –253°C demands engineering rigor far beyond conventional fuel tank design, including multi-layer vacuum insulation, pressure relief, and crash deformation zones.",
      keyPoints: [
        "LH2 storage temperature: –253°C, requiring multi-layer vacuum insulation (MLVSI)",
        "Pressure relief and venting: passive and active systems, routed away from cabin and compute zones",
        "Boil-off management: dormancy prediction and active management to minimize hydrogen loss",
        "Crash deformation zones: LH2 tank positioned outside primary crash energy absorption paths",
        "Service access: designed for inspection, sensor replacement, and pressure system maintenance",
      ],
      tags: ["LH2", "cryogenic", "safety", "MLVSI", "boil-off", "tank design"],
    },
    {
      title: "Hydrogen Safety Supervisor — Monitoring as a Constitutional Subsystem",
      summary:
        "The hydrogen-specific monitoring subsystem is a constitutional layer augmenting the EPU safety supervisor, with graded response from notification to Minimum Risk Condition (MRC) execution.",
      keyPoints: [
        "Leak detection: multi-point hydrogen sensors with sub-ppm sensitivity throughout vehicle zones",
        "Pressure/temperature telemetry: continuous monitoring with predictive anomaly classification",
        "Boil-off prediction: model-based dormancy management to prevent pressure buildup",
        "MRC triggers: graded response from notification → degraded ODD → full MRC execution",
        "Integration with EPU safety supervisor: hydrogen hazards treated as first-class safety events",
      ],
      tags: ["hydrogen safety", "MRC", "leak detection", "safety supervisor", "telemetry", "anomaly"],
    },
    {
      title: "Triple Thermal Domain Management — Cryo, Fuel Cell, and Compute",
      summary:
        "Managing three thermally distinct domains — cryogenic LH2, fuel-cell thermal loop, and compute thermal domain — in a single vehicle platform is one of the most complex systems engineering challenges.",
      keyPoints: [
        "Cryogenic domain: –253°C LH2 system, MLVSI isolation, no thermal bridging to other domains",
        "Fuel-cell domain: 60–80°C operating range, active cooling, waste heat recovery potential",
        "Compute domain: EPU and sensor modules, tight thermal envelope for deterministic WCET compliance",
        "Domain isolation: thermal interface materials and physical separation prevent cross-domain contamination",
        "Control logic: unified thermal management controller monitors all three domains with fault isolation",
      ],
      tags: ["thermal management", "cryogenic", "fuel cell", "compute cooling", "WCET", "fault isolation"],
    },
    {
      title: "2,000-Mile Range Target — Feasibility Study, Not Production Claim",
      summary:
        "A 2,000-mile range concept target is an ambitious design aspiration requiring rigorous feasibility analysis. The target is decomposed into range assumptions, efficiency sensitivities, tank volume implications, and packaging constraints.",
      keyPoints: [
        "Range target: 2,000 miles conceptual, based on LH2 energy density advantage over battery",
        "Efficiency sensitivities: fuel-cell efficiency, thermal losses, and boil-off rate are primary variables",
        "Tank volume: LH2 density advantage partially offset by insulation volume and structural integration",
        "Packaging constraint: tank size is bounded by crash zone requirements and cabin volume targets",
        "Honest framing: achievable under optimistic assumptions, challenging under conservative ones",
      ],
      tags: ["range", "2000 miles", "feasibility", "LH2", "sensitivity analysis", "concept target"],
    },
    {
      title: "E/E Architecture Evolution — From Distributed ECUs to Centralized Intelligence",
      summary:
        "The automotive E/E architecture has undergone three generations of evolution. EPU is architected for Generation 3: centralized/virtual domains with software-defined vehicle capabilities.",
      keyPoints: [
        "Gen 1 distributed ECUs: 100+ nodes, point-to-point wiring, function-specific hardware",
        "Gen 2 domain controllers: ADAS, body, powertrain domains consolidated, CAN/Ethernet backbone",
        "Gen 3 centralized/virtual: central compute, software-defined functions, hardware abstraction layer",
        "EPU is a Gen 3 architecture: centralized safety compute with modular sensor and actuator interfaces",
        "Software/hardware separation enables independent certification of safety core vs. application software",
      ],
      tags: ["E/E architecture", "ECU", "domain controller", "centralized", "software-defined", "Gen 3"],
    },
    {
      title: "EPU-Centric Compute Architecture — The Constitutional Core",
      summary:
        "The EPU compute module is the constitutional center of the vehicle's electronic architecture, connecting to sensor modules, power domains, HMI layer, and actuator interfaces via safety-monitored channels.",
      keyPoints: [
        "Central EPU module: purpose-built safety compute, not a general-purpose SoC",
        "Sensor interface: deterministic data fabric with power and bandwidth budgets per modality",
        "Power domain isolation: safety-critical and non-critical systems on separate, isolated power buses",
        "Actuator interface: safety-monitored output channels with fault detection and isolation",
        "Modular replacement: sensor pods and compute modules designed for replacement without core recertification",
      ],
      tags: ["EPU", "compute", "architecture", "data fabric", "power isolation", "modular"],
    },
    {
      title: "Sensor-to-Compute Dataflow — Deterministic Timing as a Safety Guarantee",
      summary:
        "The sensor-to-compute dataflow architecture enforces deterministic timing as a first-class safety property, with WCET bounds at every stage and safety monitors observing timing compliance.",
      keyPoints: [
        "Sensor streams: camera, radar, lidar (optional), ultrasonic — each with defined power/bandwidth budget",
        "Constrained ingestion: no sensor stream can exceed its constitutional resource allocation",
        "WCET bounds: every computation stage has a formally verified worst-case execution time",
        "Safety monitors: timing violations are treated as safety events, not performance issues",
        "Scheduling envelope: resource budget prevents starvation of any safety-critical computation path",
      ],
      tags: ["dataflow", "WCET", "deterministic timing", "sensor fusion", "scheduling", "safety monitors"],
    },
    {
      title: "Power Domain Isolation and Thermal Zoning — Fault Containment by Design",
      summary:
        "Power domain isolation and thermal zoning are the physical implementation of fault containment in the EPU architecture, enabling graceful degradation without MRC triggers for non-critical domain losses.",
      keyPoints: [
        "Safety-critical domain: EPU, sensors, safety supervisor — isolated power, independent fault detection",
        "Non-critical domain: infotainment, comfort systems — sheddable without safety impact",
        "Thermal zoning: physical separation prevents heat propagation from non-critical to safety-critical zones",
        "Graceful degradation: defined pathways for partial system loss without MRC trigger",
        "Fault isolation: domain-level faults are contained and cannot cascade to adjacent domains",
      ],
      tags: ["power domains", "thermal zoning", "fault isolation", "graceful degradation", "safety", "architecture"],
    },
    {
      title: "Modular Serviceability — Electronics Designed for Replacement, Not Discard",
      summary:
        "The EPU architecture treats modular serviceability as a first-class design requirement. Sensor pods and compute modules use standardized interfaces enabling replacement without core system recertification.",
      keyPoints: [
        "Standardized interfaces: sensor pods and compute modules use common mechanical and electrical connectors",
        "Lifecycle tracking: every module has a tag recording installation, operating history, and fault events",
        "Replacement without recertification: modular design isolates replacement impact to the replaced module",
        "Service pathways: documented procedures for identification, replacement, and post-replacement validation",
        "TCO and LCA benefit: modular replacement reduces whole-system discard events and improves carbon accounting",
      ],
      tags: ["serviceability", "modular", "lifecycle tracking", "TCO", "LCA", "replacement"],
    },
    {
      title: "Sensor Suite Constitution — Budgets as Constitutional Limits",
      summary:
        "The Sensor Suite Constitution is the governing document defining modality allocations, resource budgets, and validation requirements for every sensor. It is a binding constraint document, not a wish list.",
      keyPoints: [
        "Modality allocations: cameras (primary), radar (mandatory), lidar (optional/conditional), ultrasonic (mandatory)",
        "Power budgets: maximum watts per modality, enforced at hardware level",
        "Bandwidth budgets: maximum data rate per sensor stream, enforced at ingestion interface",
        "Embodied carbon caps: maximum kgCO2e per sensor module, tracked in LCA database",
        "Validation courts: every sensor change must pass Physics, Safety, TEA, and LCA review",
      ],
      tags: ["sensor constitution", "power budget", "bandwidth", "carbon caps", "validation", "governance"],
    },
    {
      title: "Functional Redundancy by Modality — Philosophy Over Sensor Maximalism",
      summary:
        "The EPU sensor philosophy rejects sensor maximalism. Functional redundancy is achieved by ensuring each safety-critical perception function is covered by at least two independent modalities with non-correlated failure modes.",
      keyPoints: [
        "Functional redundancy: each critical function covered by ≥2 independent modalities",
        "Non-correlated failures: modalities chosen for independence of failure modes",
        "Lidar is optional: included only when TEA/LCA case is positive and physics case is compelling",
        "Marginal benefit analysis: every sensor addition requires formal justification against constitution budgets",
        "Sensor maximalism is explicitly rejected: more sensors ≠ safer system without formal analysis",
      ],
      tags: ["redundancy", "sensor maximalism", "lidar", "camera", "radar", "failure modes"],
    },
    {
      title: "Degradation Policy and MRC Trigger Matrix — Failure Behavior Made Legible",
      summary:
        "The degradation policy and MRC trigger matrix defines the vehicle's deterministic response to every classified sensor failure state — acceptable, degraded ODD, or MRC trigger.",
      keyPoints: [
        "Three response categories: acceptable, degraded ODD, MRC trigger — deterministic, not probabilistic",
        "Sensor states classified: loss, occlusion, contamination, degraded performance",
        "Degraded ODD: vehicle continues operating but with reduced speed, route, or environmental limits",
        "MRC trigger: vehicle executes safe stop maneuver within defined timing and urgency parameters",
        "Auditability: every state transition is logged with sensor ID, state classification, and response executed",
      ],
      tags: ["MRC", "degradation", "ODD", "failure response", "deterministic", "safety matrix"],
    },
    {
      title: "Validation Courts — Four-Gate Governance for Every Architecture Decision",
      summary:
        "Every significant architecture decision must pass through four sequential validation courts: Physics, Safety, TEA, and LCA. Proposals that fail any court are returned for redesign — no conditional approvals.",
      keyPoints: [
        "Physics Court: formal proof validation, WCET compliance, sensor physics feasibility",
        "Safety Court: ISO 26262 ASIL compliance, SOTIF analysis, fault tree coverage",
        "TEA Court: BOM cost, certification cost, service cost, liability proxy — net TCO impact",
        "LCA Court: embodied carbon, use-phase carbon, service carbon, end-of-life recovery",
        "No conditional approvals: fail = redesign, not 'approve with caveats'",
      ],
      tags: ["validation courts", "ISO 26262", "SOTIF", "TEA", "LCA", "governance"],
    },
    {
      title: "Certification Evidence Stack — The Auditable Safety Case",
      summary:
        "The certification evidence stack is the complete documentation package supporting regulatory submission and partner due diligence, designed for full auditability with bidirectional traceability.",
      keyPoints: [
        "Formal physics proofs: mathematical verification of safety properties, not simulation-only evidence",
        "Test coverage matrix: every safety requirement mapped to test cases with pass/fail records",
        "Traceability links: bidirectional traceability from requirements to design to verification evidence",
        "Deterministic timing evidence: WCET measurements, scheduling analysis, budget compliance records",
        "TEA/LCA reports: cost and carbon accounting integrated into the safety case, not separate documents",
      ],
      tags: ["certification", "evidence stack", "traceability", "WCET", "regulatory", "audit"],
    },
    {
      title: "Layer X TEA/LCA Governance — Carbon and Cost as First-Class Design Constraints",
      summary:
        "TEA and LCA governance is implemented as a cross-cutting Layer X spanning all technical layers of the EPU architecture stack, embedding cost and carbon as design constraints from the first architecture decision.",
      keyPoints: [
        "Layer X spans all technical layers: semiconductor, sensor, compute, actuator, service, end-of-life",
        "TEA metrics per layer: BOM cost, certification cost, service cost, liability proxy",
        "LCA metrics per layer: embodied carbon, use-phase carbon, service carbon, end-of-life recovery",
        "Design constraint, not post-analysis: TEA/LCA gates are applied at architecture decision time",
        "Competitive moat: no other autonomous platform offers this level of lifecycle transparency",
      ],
      tags: ["Layer X", "TEA", "LCA", "lifecycle", "carbon", "cost governance"],
    },
    {
      title: "Transparent TCO — EPU vs. Traditional ADAS",
      summary:
        "The transparent TCO comparison between EPU and traditional ADAS is presented as a scenario-based analysis with explicit sensitivity bands and confidence labels — not a definitive cost claim.",
      keyPoints: [
        "Development cost: EPU formal methods higher upfront, but certification path is shorter and more predictable",
        "Certification cost: EPU auditable evidence stack reduces regulatory uncertainty and rework cost",
        "BOM cost: modular EPU architecture may have higher initial cost, offset by service life extension",
        "Service cost: modular replacement significantly reduces whole-system discard events",
        "Liability proxy: auditable safety case reduces liability exposure vs. probabilistic ADAS coverage claims",
      ],
      tags: ["TCO", "ADAS comparison", "certification cost", "BOM", "service cost", "liability"],
    },
    {
      title: "Lifecycle Carbon Dashboard — Subsystem-Level Accountability",
      summary:
        "The lifecycle carbon dashboard provides subsystem-level carbon accounting across the full vehicle lifecycle, with uncertainty ranges explicitly shown — no false precision.",
      keyPoints: [
        "Semiconductor manufacturing: EPU chip embodied carbon, sensor chip embodied carbon",
        "Use-phase power: hydrogen pathway carbon (well-to-wheel) vs. grid electricity pathway",
        "Service events: module replacement carbon, including logistics and remanufacturing",
        "End-of-life recovery: module reuse, material recovery, and landfill avoidance credit",
        "Uncertainty ranges: all figures presented with confidence intervals, not point estimates",
      ],
      tags: ["lifecycle carbon", "LCA dashboard", "embodied carbon", "well-to-wheel", "end-of-life", "ESG"],
    },
    {
      title: "H2 vs. Current EV — A Rigorous Comparison Framework, Not a Verdict",
      summary:
        "The H2 driverless platform vs. current premium EV comparison is presented as an analysis framework across six dimensions: utility, TCO, lifecycle carbon, infrastructure realism, technology readiness, and sensitivity analysis.",
      keyPoints: [
        "Utility: H2 range advantage is real but infrastructure-dependent; BEV charging network is mature",
        "TCO: H2 advantage in long-range, high-utilization scenarios; BEV advantage in urban, short-range",
        "Lifecycle carbon: H2 advantage requires green hydrogen; grey hydrogen is worse than BEV on carbon",
        "Infrastructure realism: H2 station density is the binding constraint on H2 utility today",
        "Sensitivity analysis: the comparison is not a verdict — it is a framework for scenario-specific decisions",
      ],
      tags: ["H2 vs EV", "comparison framework", "green hydrogen", "infrastructure", "TCO", "lifecycle carbon"],
    },
    {
      title: "Risk Register — What Must Be True for This to Work",
      summary:
        "Every ambitious concept carries a risk register. The EPU hydrogen driverless platform requires green hydrogen infrastructure, LH2 certification pathways, EPU formal verification toolchain maturity, and OEM architecture adoption.",
      keyPoints: [
        "Green hydrogen infrastructure: required for carbon case; currently limited to specific geographies",
        "LH2 certification pathways: regulatory frameworks are nascent; timeline uncertainty is high",
        "EPU formal verification toolchain: mature tools exist but integration is non-trivial",
        "OEM architecture adoption: modular electronics requires supply chain and manufacturing process changes",
        "Assumption transparency: publishing the risk register builds credibility with partners and regulators",
      ],
      tags: ["risk register", "assumptions", "green hydrogen", "certification", "OEM adoption", "transparency"],
    },
    {
      title: "H2 vs. EV Sensitivity Analysis — Three Scenarios, Three Verdicts",
      summary:
        "A three-scenario sensitivity analysis (optimistic, baseline, conservative) reveals that the H2 case is compelling only under optimistic assumptions. The framework makes scenario dependencies explicit and auditable.",
      keyPoints: [
        "Optimistic scenario: green H2 at scale makes H2 platform superior on carbon and range",
        "Baseline scenario: approximate parity with BEV on carbon; H2 wins on range, BEV wins on infrastructure",
        "Conservative scenario: grey H2 is worse than BEV on carbon; H2 loses on infrastructure and cost",
        "Sensitivity drivers: hydrogen carbon intensity, station density, LH2 vehicle cost, and utilization rate",
        "Framework output: decision criteria for when H2 platform adoption is justified vs. premature",
      ],
      tags: ["sensitivity analysis", "scenarios", "H2 vs EV", "green hydrogen", "infrastructure", "decision criteria"],
    },
    {
      title: "The Methodology Is the Moat — EPU as Application-Neutral Deployment Platform",
      summary:
        "The closing synthesis: the EPU competitive moat is the methodology — physics-certified safety governance, TEA/LCA transparency as a design constraint, sensor suite constitutionalism, and auditable certification evidence.",
      keyPoints: [
        "The moat is the methodology: physics-certified safety + TEA/LCA transparency + sensor constitutionalism",
        "Application-neutral deployment: EPU core serves BEV, H2, hybrid, fleet — same certified core",
        "Partner value proposition: auditable safety case reduces partner certification burden and liability exposure",
        "Regulatory value proposition: transparent evidence stack accelerates regulatory review and approval",
        "Closing message: Build the methodology right, and every application domain becomes an opportunity",
      ],
      quote: "The methodology is the moat. The application domain is the opportunity.",
      tags: ["methodology", "moat", "competitive advantage", "application-neutral", "EPU", "synthesis"],
    },
  ],
  fa: [
    {
      title: "خودمختاری مبتنی بر فیزیک و قابل ممیزی کربنی: چشم‌انداز EPU",
      summary:
        "EPU (واحد پردازش محیط) نمایانگر تحولی پارادایمی در معماری خودروهای خودمختار است — یک هسته محاسباتی ایمنی مبتنی بر فیزیک و قابل ممیزی کربنی که از نوع سوخت و کاربرد مستقل است.",
      keyPoints: [
        "EPU هسته محاسباتی ایمنی است — پایه قانون اساسی، نه یک ویژگی یا ماژول",
        "مبتنی بر فیزیک: هر مسیر تصمیم‌گیری به‌صورت رسمی قابل اثبات است، نه استنتاج آماری",
        "قابل ممیزی کربنی: انتشار چرخه عمر در سطح زیرسیستم ردیابی می‌شود، نه تخمین در سطح ناوگان",
        "مستقل از کاربرد: همان هسته EPU برای BEV، هیدروژن، هیبرید و پادهای ناوگان خودمختار استفاده می‌شود",
        "مزیت رقابتی در روش‌شناسی است: حاکمیت شفاف مزیت رقابتی قابل دفاع ایجاد می‌کند",
      ],
      quote: "ایمنی لایه‌ای نیست که روی سیستم اضافه شود. این پایه‌ای است که همه چیز بر اساس آن بنا می‌شود.",
      tags: ["EPU", "خودمختاری", "ایمنی", "کربن", "چشم‌انداز", "پایان‌نامه"],
    },
    {
      title: "EPU یک هسته محاسباتی ایمنی است، نه دستیار رانندگی",
      summary:
        "EPU یک مجموعه ویژگی ADAS نیست. این یک خط لوله ایمنی از حسگر تا تصمیم است که توسط قیود فیزیکی اداره می‌شود و مستقل از هر پیشرانه، رابط کاربری یا حوزه کاربردی خاصی عمل می‌کند.",
      keyPoints: [
        "ورودی‌های حسگر ← ادغام مبتنی بر فیزیک ← خروجی‌های عملگر اعتبارسنجی‌شده: خط لوله EPU",
        "مستقل از سوخت: EPU اهمیتی نمی‌دهد که خودرو هیدروژنی، باتری‌دار یا هیبرید باشد",
        "مستقل از کاربرد: سیستم‌های HMI، UI و ترجیح کاربر بالای EPU هستند، نه درون آن",
        "زمان‌بندی قطعی: هر مسیر محاسباتی دارای کران زمان اجرای بدترین حالت (WCET) است",
        "جداسازی رسمی امکان صدور گواهی مستقل برای هسته ایمنی در مقابل ویژگی‌های کاربردی را فراهم می‌کند",
      ],
      quote: "EPU لایه ایمنی قانون اساسی است. برنامه‌ها روی آن ساخته می‌شوند — نه درون آن جاسازی می‌شوند.",
      tags: ["EPU", "ADAS", "خط لوله", "WCET", "گواهی‌نامه", "معماری"],
    },
    {
      title: "انضباط دامنه — نقشه راه هسته در مقابل یادداشت‌های کاربردی",
      summary:
        "وضوح استراتژیک مستلزم مرزهای دامنه صریح است. نقشه راه هسته EPU شامل اثبات‌های فیزیکی، طراحی قانون اساسی حسگر، بسته‌های شواهد گواهی‌نامه و یکپارچه‌سازی حاکمیت TEA/LCA است.",
      keyPoints: [
        "هسته EPU: اثبات‌های فیزیکی، قانون اساسی حسگر، مصنوعات گواهی‌نامه، حاکمیت TEA/LCA",
        "یادداشت‌های کاربردی: بسته‌بندی H2، طراحی HMI/کنترلر، استقرار ناوگان، مهاجرت E/E",
        '"فعال‌شده توسط" با "بخشی از" یکسان نیست — مرز معماری و قراردادی است',
        "انضباط دامنه یک مزیت رقابتی است: گواهی‌نامه متمرکز سریع‌تر و قابل دفاع‌تر است",
        "یادداشت‌های کاربردی می‌توانند مستقل از هسته گواهی‌شده تکامل یابند",
      ],
      tags: ["دامنه", "نقشه راه", "انضباط", "گواهی‌نامه", "H2", "HMI"],
    },
    {
      title: "استراتژی یکپارچه‌سازی چهار مرحله‌ای — از TEA/LCA تا استقرار کامل",
      summary:
        "نقشه راه یکپارچه‌سازی مرحله‌ای استراتژی EPU را به نقاط عطف قابل اجرا در افق ۸ هفته‌ای و فراتر از آن ترجمه می‌کند، با چهار مرحله متمایز و دروازه‌های تصمیم‌گیری.",
      keyPoints: [
        "مرحله ۱ (هفته ۱-۲): حاکمیت TEA/LCA + قانون اساسی حسگر — پایه غیرقابل مذاکره",
        "مرحله ۲ (هفته ۳-۴): یکپارچه‌سازی کاربرد H2 — مشروط به تکمیل بررسی فیزیکی مرحله ۱",
        "مرحله ۳ (هفته ۵-۶): بهبودهای شفافیت — داشبوردهای TCO، گزارش‌های LCA، مواد شریک",
        "مرحله ۴ (هفته ۷+): فیلتر دامنه — حاکمیت مستمر برای جلوگیری از نفوذ کاربرد به هسته",
        "دروازه‌های تصمیم بین مراحل تضمین می‌کنند هیچ مرحله‌ای بدون اعتبارسنجی مصنوعات مرحله قبل آغاز نمی‌شود",
      ],
      tags: ["نقشه راه", "مراحل", "TEA", "LCA", "یکپارچه‌سازی", "نقاط عطف"],
    },
    {
      title: "کابین بدون راننده — تعامل ترجیحی، بدون اختیار لغو",
      summary:
        "کابین بدون راننده فرمان، خوشه پدال و پانل ابزار رو به راننده را کاملاً حذف می‌کند. سرنشین از طریق یک کنترلر نیم‌گنبدی یکپارچه با کنسول تعامل می‌کند که ترجیحات را بیان می‌کند، نه دستورات را.",
      keyPoints: [
        "بدون فرمان، بدون پدال، بدون کنترل‌های رو به راننده — آزادی کامل وضعیت سرنشین",
        "کنترلر نیم‌گنبدی یک رابط ترجیحی است، نه مکانیزم لغو کنترل",
        "EPU اختیار قانون اساسی بر تمام عملگرهای حیاتی ایمنی را حفظ می‌کند",
        "اولویت طراحی ارگونومیک: استراحت طبیعی دست، خستگی حداقل، بار شناختی صفر برای ایمنی",
        "حجم کابین و بسته‌بندی با حذف معماری راننده سنتی آزاد می‌شود",
      ],
      tags: ["کابین", "HMI", "بدون راننده", "ارگونومی", "بدون فرمان", "ترجیح"],
    },
    {
      title: "معناشناسی کنترلر — جهت و شدت به عنوان کانال‌های مجزا",
      summary:
        "کنترلر نیم‌گنبدی ابهام اساسی رابط‌های جوی‌استیک تک‌محور را با جداسازی جهت و شدت به کانال‌های فیزیکی مستقل برطرف می‌کند.",
      keyPoints: [
        "موقعیت زاویه‌ای = ترجیح جهتی (دسته‌بندی مسیر/شتاب-کاهش)",
        "فشردگی/نیرو/عمق = شدت ترجیح (مستقل از جهت)",
        "طراحی ضد ابهام: جهت یکسان + شدت متفاوت سیگنال‌های متمایز و بدون ابهام تولید می‌کند",
        "ورودی‌های قابل تفسیر به EPU امکان می‌دهد ترجیح را قبل از اجرا در برابر مرزهای فیزیکی اعتبارسنجی کند",
        "قابلیت ممیزی: هر سیگنال ترجیحی ثبت، زمان‌بندی و قابل ردیابی است",
      ],
      tags: ["کنترلر", "معناشناسی", "جهت", "شدت", "HMI", "قابلیت تفسیر"],
    },
    {
      title: "سه حالت تعامل — پیش‌فرض کم‌خستگی تا ترجیح محدود بیانی",
      summary:
        "کنترلر از سه حالت تعامل متمایز پشتیبانی می‌کند که بر اساس سطح تعامل سرنشین کالیبره شده‌اند: پیش‌فرض دو انگشتی، پنج انگشتی فعال و حالت بیانی بالابرده.",
      keyPoints: [
        "حالت دو انگشتی: خستگی حداقل، مبتنی بر ژست، پیش‌فرض برای اکثر سفرها",
        "حالت پنج انگشتی: شکل‌دهی مستمر ترجیح در محدوده محدود",
        "حالت بالابرده: محدوده بیانی گسترده، کنترلر از کنسول بالا می‌آید",
        "همه حالت‌ها فقط ترجیحی هستند — EPU اختیار ایمنی را در هر حالت حفظ می‌کند",
        "انتقال حالت‌ها روان و غیر مخل برای پشته خودمختاری است",
      ],
      tags: ["حالت‌های تعامل", "دو انگشتی", "پنج انگشتی", "بالابرده", "ترجیح", "HMI"],
    },
    {
      title: "پلتفرم هیدروژنی بدون راننده — معماری سیستم‌های کامل",
      summary:
        "پلتفرم هیدروژنی بدون راننده ذخیره‌سازی LH2، پشته سلول سوختی، باتری بافر، ماژول‌های محاسباتی متمرکز، مجموعه حسگر کامل و مدیریت حرارتی چند دامنه را در یک معماری منسجم یکپارچه می‌کند.",
      keyPoints: [
        "ذخیره‌سازی LH2: یکپارچه ساختاری، منطقه‌بندی تصادف، ایزوله حرارتی از کابین و محاسبات",
        "پشته سلول سوختی: منبع اصلی برق، با باتری بافر برای تقاضای گذرا و بازیابی",
        "محاسبات متمرکز: ماژول EPU در مرکز ثقل الکترونیکی برای حداقل تأخیر حسگر",
        "مجموعه حسگر کامل: دوربین‌ها، رادار، لیدار اختیاری، اولتراسونیک — همه در بودجه‌های قانون اساسی",
        "حلقه‌های حرارتی: سه دامنه جداگانه (کرایو، سلول سوختی، محاسبات) با ایزولاسیون و منطق کنترل",
      ],
      tags: ["هیدروژن", "LH2", "سلول سوختی", "پلتفرم", "معماری", "برش"],
    },
    {
      title: "فرصت بسته‌بندی — آنچه حذف معماری راننده واقعاً آزاد می‌کند",
      summary:
        "حذف معماری راننده سنتی فرصت‌های قابل اندازه‌گیری حجم و جرم ایجاد می‌کند، اما این دستاوردها باید صادقانه ارزیابی شوند — اعتبارسنجی ایمنی همچنان برای تمام مناطق آزادشده اعمال می‌شود.",
      keyPoints: [
        "مناطق آزادشده: فضای ستون فرمان، جعبه پدال، عمق خوشه ابزار، حجم کیسه هوای راننده",
        "افزایش حجم کابین مفهومی: قابل توجه اما نیازمند اعتبارسنجی مجدد ساختاری و ایمنی",
        "فرصت تراز بودن کف: امکان پیکربندی‌های جدید صندلی و بهبودهای دسترسی را فراهم می‌کند",
        "استفاده از منطقه جلویی: پتانسیل برای ذخیره‌سازی گسترده، بهینه‌سازی HVAC یا یکپارچه‌سازی حسگر",
        "چارچوب صادقانه: دستاوردهای بسته‌بندی واقعی هستند اما 'رایگان' نیستند — هزینه اعتبارسنجی ایمنی باید در TEA گنجانده شود",
      ],
      tags: ["بسته‌بندی", "حجم کابین", "حذف فرمان", "ایمنی", "TEA", "چارچوب صادقانه"],
    },
    {
      title: "مخزن LH2 و ایمنی کرایوژنیک — پیچیدگی مهندسی بدون اغراق",
      summary:
        "ذخیره‌سازی هیدروژن مایع در دمای ۲۵۳- درجه سانتیگراد نیازمند دقت مهندسی بسیار فراتر از طراحی مخزن سوخت سنتی است، از جمله عایق خلاء چند لایه، تخلیه فشار و مناطق تغییر شکل تصادف.",
      keyPoints: [
        "دمای ذخیره‌سازی LH2: ۲۵۳- درجه سانتیگراد، نیازمند عایق خلاء چند لایه (MLVSI)",
        "تخلیه و هواکشی فشار: سیستم‌های غیرفعال و فعال، هدایت‌شده دور از مناطق کابین و محاسبات",
        "مدیریت جوشش: پیش‌بینی خواب و مدیریت فعال برای به حداقل رساندن اتلاف هیدروژن",
        "مناطق تغییر شکل تصادف: مخزن LH2 خارج از مسیرهای اصلی جذب انرژی تصادف قرار دارد",
        "دسترسی سرویس: طراحی‌شده برای بازرسی، تعویض حسگر و نگهداری سیستم فشار",
      ],
      tags: ["LH2", "کرایوژنیک", "ایمنی", "MLVSI", "جوشش", "طراحی مخزن"],
    },
    {
      title: "ناظر ایمنی هیدروژن — نظارت به عنوان زیرسیستم قانون اساسی",
      summary:
        "زیرسیستم نظارت مخصوص هیدروژن یک لایه قانون اساسی است که ناظر ایمنی EPU را تقویت می‌کند، با پاسخ درجه‌بندی‌شده از اعلان تا اجرای شرایط حداقل ریسک (MRC).",
      keyPoints: [
        "تشخیص نشتی: حسگرهای هیدروژن چند نقطه‌ای با حساسیت زیر ppm در سراسر مناطق خودرو",
        "تله‌متری فشار/دما: نظارت مستمر با طبقه‌بندی ناهنجاری پیش‌بینانه",
        "پیش‌بینی جوشش: مدیریت خواب مبتنی بر مدل برای جلوگیری از افزایش فشار",
        "محرک‌های MRC: پاسخ درجه‌بندی‌شده از اعلان ← ODD تخریب‌یافته ← اجرای کامل MRC",
        "یکپارچه‌سازی با ناظر ایمنی EPU: خطرات هیدروژن به عنوان رویدادهای ایمنی درجه اول تلقی می‌شوند",
      ],
      tags: ["ایمنی هیدروژن", "MRC", "تشخیص نشتی", "ناظر ایمنی", "تله‌متری", "ناهنجاری"],
    },
    {
      title: "مدیریت سه دامنه حرارتی — کرایو، سلول سوختی و محاسبات",
      summary:
        "مدیریت سه دامنه حرارتی متمایز — LH2 کرایوژنیک، حلقه حرارتی سلول سوختی و دامنه حرارتی محاسبات — در یک پلتفرم خودرو یکی از پیچیده‌ترین چالش‌های مهندسی سیستم‌ها است.",
      keyPoints: [
        "دامنه کرایوژنیک: سیستم LH2 در ۲۵۳- درجه سانتیگراد، ایزولاسیون MLVSI، بدون پل حرارتی به دامنه‌های دیگر",
        "دامنه سلول سوختی: محدوده عملیاتی ۶۰-۸۰ درجه سانتیگراد، خنک‌کاری فعال، پتانسیل بازیابی گرمای اتلافی",
        "دامنه محاسبات: ماژول‌های EPU و حسگر، پوشش حرارتی محکم برای انطباق قطعی WCET",
        "ایزولاسیون دامنه: مواد رابط حرارتی و جداسازی فیزیکی از آلودگی متقاطع جلوگیری می‌کنند",
        "منطق کنترل: کنترلر یکپارچه مدیریت حرارتی هر سه دامنه را با ایزولاسیون خطا نظارت می‌کند",
      ],
      tags: ["مدیریت حرارتی", "کرایوژنیک", "سلول سوختی", "خنک‌کاری محاسبات", "WCET", "ایزولاسیون خطا"],
    },
    {
      title: "هدف برد ۳٬۲۰۰ کیلومتری — مطالعه امکان‌سنجی، نه ادعای تولید",
      summary:
        "هدف برد مفهومی ۳٬۲۰۰ کیلومتر یک آرزوی طراحی بلندپروازانه است که نیازمند تحلیل امکان‌سنجی دقیق است. هدف به فرضیات برد، حساسیت‌های بازده، پیامدهای حجم مخزن و محدودیت‌های بسته‌بندی تجزیه می‌شود.",
      keyPoints: [
        "هدف برد: ۳٬۲۰۰ کیلومتر مفهومی، بر اساس مزیت چگالی انرژی LH2 نسبت به باتری",
        "حساسیت‌های بازده: بازده سلول سوختی، تلفات حرارتی و نرخ جوشش متغیرهای اصلی هستند",
        "حجم مخزن: مزیت چگالی LH2 تا حدی با حجم عایق و یکپارچه‌سازی ساختاری جبران می‌شود",
        "محدودیت بسته‌بندی: اندازه مخزن توسط الزامات منطقه تصادف و اهداف حجم کابین محدود است",
        "چارچوب صادقانه: تحت فرضیات خوش‌بینانه قابل دستیابی، تحت فرضیات محافظه‌کارانه چالش‌برانگیز",
      ],
      tags: ["برد", "۳۲۰۰ کیلومتر", "امکان‌سنجی", "LH2", "تحلیل حساسیت", "هدف مفهومی"],
    },
    {
      title: "تکامل معماری E/E — از ECUهای توزیع‌شده تا هوش متمرکز",
      summary:
        "معماری E/E خودرویی سه نسل تکامل را پشت سر گذاشته است. EPU برای نسل ۳ معماری‌سازی شده: دامنه‌های متمرکز/مجازی با قابلیت‌های خودروی نرم‌افزار-محور.",
      keyPoints: [
        "ECUهای توزیع‌شده نسل ۱: بیش از ۱۰۰ گره، سیم‌کشی نقطه به نقطه، سخت‌افزار تابع-خاص",
        "کنترلرهای دامنه نسل ۲: دامنه‌های ADAS، بدنه، پیشرانه تجمیع‌شده، ستون فقرات CAN/اترنت",
        "متمرکز/مجازی نسل ۳: محاسبات مرکزی، توابع نرم‌افزار-محور، لایه انتزاع سخت‌افزار",
        "EPU یک معماری نسل ۳ است: محاسبات ایمنی متمرکز با رابط‌های حسگر و عملگر ماژولار",
        "جداسازی نرم‌افزار/سخت‌افزار صدور گواهی مستقل برای هسته ایمنی در مقابل نرم‌افزار کاربردی را ممکن می‌سازد",
      ],
      tags: ["معماری E/E", "ECU", "کنترلر دامنه", "متمرکز", "نرم‌افزار-محور", "نسل ۳"],
    },
    {
      title: "معماری محاسباتی EPU-محور — هسته قانون اساسی",
      summary:
        "ماژول محاسباتی EPU مرکز قانون اساسی معماری الکترونیکی خودرو است که از طریق کانال‌های نظارت‌شده ایمنی به ماژول‌های حسگر، دامنه‌های برق، لایه HMI و رابط‌های عملگر متصل می‌شود.",
      keyPoints: [
        "ماژول مرکزی EPU: محاسبات ایمنی هدف-ساخت، نه SoC عمومی",
        "رابط حسگر: پارچه داده قطعی با بودجه‌های برق و پهنای باند به ازای هر روش",
        "ایزولاسیون دامنه برق: سیستم‌های حیاتی ایمنی و غیرحیاتی در باسهای برق جداگانه و ایزوله",
        "رابط عملگر: کانال‌های خروجی نظارت‌شده ایمنی با تشخیص و ایزولاسیون خطا",
        "جایگزینی ماژولار: پادهای حسگر و ماژول‌های محاسباتی طراحی‌شده برای جایگزینی بدون گواهی مجدد هسته",
      ],
      tags: ["EPU", "محاسبات", "معماری", "پارچه داده", "ایزولاسیون برق", "ماژولار"],
    },
    {
      title: "جریان داده از حسگر به محاسبات — زمان‌بندی قطعی به عنوان ضمانت ایمنی",
      summary:
        "معماری جریان داده از حسگر به محاسبات زمان‌بندی قطعی را به عنوان یک ویژگی ایمنی درجه اول اجرا می‌کند، با کران‌های WCET در هر مرحله و ناظران ایمنی که انطباق زمان‌بندی را رصد می‌کنند.",
      keyPoints: [
        "جریان‌های حسگر: دوربین، رادار، لیدار (اختیاری)، اولتراسونیک — هر کدام با بودجه برق/پهنای باند تعریف‌شده",
        "ورودی محدود: هیچ جریان حسگری نمی‌تواند از تخصیص منابع قانون اساسی خود تجاوز کند",
        "کران‌های WCET: هر مرحله محاسباتی دارای زمان اجرای بدترین حالت تأیید‌شده رسمی است",
        "ناظران ایمنی: نقض‌های زمان‌بندی به عنوان رویدادهای ایمنی تلقی می‌شوند، نه مشکلات عملکردی",
        "پوشش زمان‌بندی: بودجه منابع از گرسنگی هر مسیر محاسباتی حیاتی ایمنی جلوگیری می‌کند",
      ],
      tags: ["جریان داده", "WCET", "زمان‌بندی قطعی", "ادغام حسگر", "زمان‌بندی", "ناظران ایمنی"],
    },
    {
      title: "ایزولاسیون دامنه برق و منطقه‌بندی حرارتی — مهار خطا بر اساس طراحی",
      summary:
        "ایزولاسیون دامنه برق و منطقه‌بندی حرارتی پیاده‌سازی فیزیکی مهار خطا در معماری EPU هستند که تخریب تدریجی بدون محرک‌های MRC برای از دست دادن دامنه غیرحیاتی را ممکن می‌سازند.",
      keyPoints: [
        "دامنه حیاتی ایمنی: EPU، حسگرها، ناظر ایمنی — برق ایزوله، تشخیص خطای مستقل",
        "دامنه غیرحیاتی: سرگرمی، سیستم‌های راحتی — قابل حذف بدون تأثیر ایمنی",
        "منطقه‌بندی حرارتی: جداسازی فیزیکی از انتشار گرما از مناطق غیرحیاتی به حیاتی ایمنی جلوگیری می‌کند",
        "تخریب تدریجی: مسیرهای تعریف‌شده برای از دست دادن جزئی سیستم بدون محرک MRC",
        "ایزولاسیون خطا: خطاهای سطح دامنه مهار شده و نمی‌توانند به دامنه‌های مجاور آبشار شوند",
      ],
      tags: ["دامنه‌های برق", "منطقه‌بندی حرارتی", "ایزولاسیون خطا", "تخریب تدریجی", "ایمنی", "معماری"],
    },
    {
      title: "قابلیت سرویس ماژولار — الکترونیک طراحی‌شده برای جایگزینی، نه دور انداختن",
      summary:
        "معماری EPU قابلیت سرویس ماژولار را به عنوان یک الزام طراحی درجه اول تلقی می‌کند. پادهای حسگر و ماژول‌های محاسباتی از رابط‌های استاندارد استفاده می‌کنند که جایگزینی بدون گواهی مجدد سیستم هسته را ممکن می‌سازند.",
      keyPoints: [
        "رابط‌های استاندارد: پادهای حسگر و ماژول‌های محاسباتی از اتصال‌دهنده‌های مکانیکی و الکتریکی مشترک استفاده می‌کنند",
        "ردیابی چرخه عمر: هر ماژول دارای برچسبی است که نصب، تاریخچه عملیاتی و رویدادهای خطا را ثبت می‌کند",
        "جایگزینی بدون گواهی مجدد: طراحی ماژولار تأثیر جایگزینی را به ماژول جایگزین‌شده محدود می‌کند",
        "مسیرهای سرویس: رویه‌های مستند برای شناسایی، جایگزینی و اعتبارسنجی پس از جایگزینی",
        "مزیت TCO و LCA: جایگزینی ماژولار رویدادهای دور انداختن کل سیستم را کاهش می‌دهد و حسابداری کربن را بهبود می‌بخشد",
      ],
      tags: ["قابلیت سرویس", "ماژولار", "ردیابی چرخه عمر", "TCO", "LCA", "جایگزینی"],
    },
    {
      title: "قانون اساسی مجموعه حسگر — بودجه‌ها به عنوان محدودیت‌های قانون اساسی",
      summary:
        "قانون اساسی مجموعه حسگر سند حاکمیتی است که تخصیص‌های روش، بودجه‌های منابع و الزامات اعتبارسنجی برای هر حسگر را تعریف می‌کند. این یک سند محدودیت الزام‌آور است، نه فهرست آرزوها.",
      keyPoints: [
        "تخصیص‌های روش: دوربین‌ها (اولیه)، رادار (اجباری)، لیدار (اختیاری/مشروط)، اولتراسونیک (اجباری)",
        "بودجه‌های برق: حداکثر وات به ازای هر روش، اجرا‌شده در سطح سخت‌افزار",
        "بودجه‌های پهنای باند: حداکثر نرخ داده به ازای هر جریان حسگر، اجرا‌شده در رابط ورودی",
        "سقف‌های کربن تجسم‌یافته: حداکثر kgCO2e به ازای هر ماژول حسگر، ردیابی‌شده در پایگاه داده LCA",
        "دادگاه‌های اعتبارسنجی: هر تغییر حسگر باید از بررسی فیزیک، ایمنی، TEA و LCA بگذرد",
      ],
      tags: ["قانون اساسی حسگر", "بودجه برق", "پهنای باند", "سقف‌های کربن", "اعتبارسنجی", "حاکمیت"],
    },
    {
      title: "افزونگی عملکردی بر اساس روش — فلسفه بر حسگر-حداکثرگرایی",
      summary:
        "فلسفه حسگر EPU حسگر-حداکثرگرایی را رد می‌کند. افزونگی عملکردی با اطمینان از اینکه هر عملکرد ادراکی حیاتی ایمنی توسط حداقل دو روش مستقل با حالت‌های خرابی غیرهمبسته پوشش داده می‌شود، حاصل می‌شود.",
      keyPoints: [
        "افزونگی عملکردی: هر عملکرد حیاتی توسط ≥۲ روش مستقل پوشش داده می‌شود",
        "خرابی‌های غیرهمبسته: روش‌ها برای استقلال حالت‌های خرابی انتخاب می‌شوند",
        "لیدار اختیاری است: فقط زمانی گنجانده می‌شود که پرونده TEA/LCA مثبت و پرونده فیزیکی قانع‌کننده باشد",
        "تحلیل مزیت نهایی: هر افزودن حسگر نیازمند توجیه رسمی در برابر بودجه‌های قانون اساسی است",
        "حسگر-حداکثرگرایی صریحاً رد شده است: حسگرهای بیشتر ≠ سیستم ایمن‌تر بدون تحلیل رسمی",
      ],
      tags: ["افزونگی", "حسگر-حداکثرگرایی", "لیدار", "دوربین", "رادار", "حالت‌های خرابی"],
    },
    {
      title: "سیاست تخریب و ماتریس محرک MRC — رفتار خرابی قابل خواندن",
      summary:
        "سیاست تخریب و ماتریس محرک MRC پاسخ قطعی خودرو به هر حالت خرابی حسگر طبقه‌بندی‌شده را تعریف می‌کند — قابل قبول، ODD تخریب‌یافته یا محرک MRC.",
      keyPoints: [
        "سه دسته پاسخ: قابل قبول، ODD تخریب‌یافته، محرک MRC — قطعی، نه احتمالی",
        "حالت‌های حسگر طبقه‌بندی‌شده: از دست دادن، انسداد، آلودگی، عملکرد تخریب‌یافته",
        "ODD تخریب‌یافته: خودرو به کار ادامه می‌دهد اما با سرعت، مسیر یا محدودیت‌های محیطی کاهش‌یافته",
        "محرک MRC: خودرو مانور توقف ایمن را در پارامترهای زمان‌بندی و فوریت تعریف‌شده اجرا می‌کند",
        "قابلیت ممیزی: هر انتقال حالت با شناسه حسگر، طبقه‌بندی حالت و پاسخ اجراشده ثبت می‌شود",
      ],
      tags: ["MRC", "تخریب", "ODD", "پاسخ خرابی", "قطعی", "ماتریس ایمنی"],
    },
    {
      title: "دادگاه‌های اعتبارسنجی — حاکمیت چهار دروازه‌ای برای هر تصمیم معماری",
      summary:
        "هر تصمیم معماری مهم باید از چهار دادگاه اعتبارسنجی متوالی بگذرد: فیزیک، ایمنی، TEA و LCA. پیشنهاداتی که در هر دادگاهی شکست می‌خورند برای طراحی مجدد بازگردانده می‌شوند — بدون تأییدیه‌های مشروط.",
      keyPoints: [
        "دادگاه فیزیک: اعتبارسنجی اثبات رسمی، انطباق WCET، امکان‌سنجی فیزیک حسگر",
        "دادگاه ایمنی: انطباق ASIL استاندارد ISO 26262، تحلیل SOTIF، پوشش درخت خطا",
        "دادگاه TEA: هزینه BOM، هزینه گواهی‌نامه، هزینه سرویس، نماینده مسئولیت — تأثیر خالص TCO",
        "دادگاه LCA: کربن تجسم‌یافته، کربن مرحله استفاده، کربن سرویس، بازیابی پایان عمر",
        "بدون تأییدیه‌های مشروط: شکست = طراحی مجدد، نه 'تأیید با شرط'",
      ],
      tags: ["دادگاه‌های اعتبارسنجی", "ISO 26262", "SOTIF", "TEA", "LCA", "حاکمیت"],
    },
    {
      title: "پشته شواهد گواهی‌نامه — پرونده ایمنی قابل ممیزی",
      summary:
        "پشته شواهد گواهی‌نامه بسته مستندات کامل پشتیبانی از ارائه نظارتی و بررسی دقیق شریک است که برای قابلیت ممیزی کامل با قابلیت ردیابی دوطرفه طراحی شده است.",
      keyPoints: [
        "اثبات‌های فیزیکی رسمی: تأیید ریاضی ویژگی‌های ایمنی، نه شواهد فقط شبیه‌سازی",
        "ماتریس پوشش آزمون: هر الزام ایمنی به موارد آزمون با سوابق قبول/رد نگاشته شده",
        "پیوندهای قابلیت ردیابی: قابلیت ردیابی دوطرفه از الزامات به طراحی تا شواهد تأیید",
        "شواهد زمان‌بندی قطعی: اندازه‌گیری‌های WCET، تحلیل زمان‌بندی، سوابق انطباق بودجه",
        "گزارش‌های TEA/LCA: حسابداری هزینه و کربن یکپارچه در پرونده ایمنی، نه اسناد جداگانه",
      ],
      tags: ["گواهی‌نامه", "پشته شواهد", "قابلیت ردیابی", "WCET", "نظارتی", "ممیزی"],
    },
    {
      title: "حاکمیت TEA/LCA لایه X — کربن و هزینه به عنوان محدودیت‌های طراحی درجه اول",
      summary:
        "حاکمیت TEA و LCA به عنوان یک لایه X متقاطع پوشش‌دهنده تمام لایه‌های فنی پشته معماری EPU پیاده‌سازی می‌شود و هزینه و کربن را از اولین تصمیم معماری به عنوان محدودیت‌های طراحی جاسازی می‌کند.",
      keyPoints: [
        "لایه X تمام لایه‌های فنی را پوشش می‌دهد: نیمه‌رسانا، حسگر، محاسبات، عملگر، سرویس، پایان عمر",
        "معیارهای TEA به ازای هر لایه: هزینه BOM، هزینه گواهی‌نامه، هزینه سرویس، نماینده مسئولیت",
        "معیارهای LCA به ازای هر لایه: کربن تجسم‌یافته، کربن مرحله استفاده، کربن سرویس، بازیابی پایان عمر",
        "محدودیت طراحی، نه تحلیل پس از آن: دروازه‌های TEA/LCA در زمان تصمیم معماری اعمال می‌شوند",
        "مزیت رقابتی: هیچ پلتفرم خودمختار دیگری این سطح از شفافیت چرخه عمر را ارائه نمی‌دهد",
      ],
      tags: ["لایه X", "TEA", "LCA", "چرخه عمر", "کربن", "حاکمیت هزینه"],
    },
    {
      title: "TCO شفاف — EPU در مقابل ADAS سنتی",
      summary:
        "مقایسه TCO شفاف بین EPU و ADAS سنتی به عنوان یک تحلیل سناریو-محور با باندهای حساسیت صریح و برچسب‌های اطمینان ارائه می‌شود — نه یک ادعای هزینه قطعی.",
      keyPoints: [
        "هزینه توسعه: روش‌های رسمی EPU بالاتر در ابتدا، اما مسیر گواهی‌نامه کوتاه‌تر و قابل پیش‌بینی‌تر است",
        "هزینه گواهی‌نامه: پشته شواهد قابل ممیزی EPU عدم قطعیت نظارتی و هزینه بازکاری را کاهش می‌دهد",
        "هزینه BOM: معماری ماژولار EPU ممکن است هزینه اولیه بالاتری داشته باشد که با تمدید عمر سرویس جبران می‌شود",
        "هزینه سرویس: جایگزینی ماژولار رویدادهای دور انداختن کل سیستم را به‌طور قابل توجهی کاهش می‌دهد",
        "نماینده مسئولیت: پرونده ایمنی قابل ممیزی در مقابل ادعاهای پوشش ADAS احتمالی، مواجهه مسئولیت را کاهش می‌دهد",
      ],
      tags: ["TCO", "مقایسه ADAS", "هزینه گواهی‌نامه", "BOM", "هزینه سرویس", "مسئولیت"],
    },
    {
      title: "داشبورد کربن چرخه عمر — پاسخگویی سطح زیرسیستم",
      summary:
        "داشبورد کربن چرخه عمر حسابداری کربن سطح زیرسیستم را در سراسر چرخه عمر کامل خودرو ارائه می‌دهد، با محدوده‌های عدم قطعیت که صریحاً نشان داده می‌شوند — بدون دقت کاذب.",
      keyPoints: [
        "تولید نیمه‌رسانا: کربن تجسم‌یافته تراشه EPU، کربن تجسم‌یافته تراشه حسگر",
        "برق مرحله استفاده: کربن مسیر هیدروژن (چاه تا چرخ) در مقابل مسیر برق شبکه",
        "رویدادهای سرویس: کربن جایگزینی ماژول، از جمله لجستیک و بازتولید",
        "بازیابی پایان عمر: استفاده مجدد از ماژول، بازیابی مواد و اعتبار اجتناب از دفن",
        "محدوده‌های عدم قطعیت: تمام ارقام با فاصله اطمینان ارائه می‌شوند، نه تخمین‌های نقطه‌ای",
      ],
      tags: ["کربن چرخه عمر", "داشبورد LCA", "کربن تجسم‌یافته", "چاه تا چرخ", "پایان عمر", "ESG"],
    },
    {
      title: "H2 در مقابل EV فعلی — چارچوب مقایسه دقیق، نه حکم",
      summary:
        "مقایسه پلتفرم هیدروژنی بدون راننده در مقابل EV ممتاز فعلی به عنوان یک چارچوب تحلیل در شش بعد ارائه می‌شود: کاربرد، TCO، کربن چرخه عمر، واقع‌بینی زیرساخت، آمادگی فناوری و تحلیل حساسیت.",
      keyPoints: [
        "کاربرد: مزیت برد H2 واقعی است اما به زیرساخت وابسته است؛ شبکه شارژ BEV بالغ است",
        "TCO: مزیت H2 در سناریوهای برد بلند و استفاده بالا؛ مزیت BEV در شهری و برد کوتاه",
        "کربن چرخه عمر: مزیت H2 نیازمند هیدروژن سبز است؛ هیدروژن خاکستری از نظر کربن بدتر از BEV است",
        "واقع‌بینی زیرساخت: تراکم ایستگاه H2 محدودیت الزام‌آور کاربرد H2 امروز است",
        "تحلیل حساسیت: مقایسه یک حکم نیست — این یک چارچوب برای تصمیمات سناریو-خاص است",
      ],
      tags: ["H2 در مقابل EV", "چارچوب مقایسه", "هیدروژن سبز", "زیرساخت", "TCO", "کربن چرخه عمر"],
    },
    {
      title: "ثبت ریسک — آنچه باید درست باشد تا این کار کند",
      summary:
        "هر مفهوم بلندپروازانه‌ای یک ثبت ریسک دارد. پلتفرم هیدروژنی بدون راننده EPU نیازمند زیرساخت هیدروژن سبز، مسیرهای گواهی‌نامه LH2، بلوغ زنجیره ابزار تأیید رسمی EPU و پذیرش معماری OEM است.",
      keyPoints: [
        "زیرساخت هیدروژن سبز: برای پرونده کربن ضروری است؛ در حال حاضر محدود به جغرافیاهای خاص",
        "مسیرهای گواهی‌نامه LH2: چارچوب‌های نظارتی نوپا هستند؛ عدم قطعیت جدول زمانی بالا است",
        "زنجیره ابزار تأیید رسمی EPU: ابزارهای بالغ وجود دارند اما یکپارچه‌سازی غیرتریویال است",
        "پذیرش معماری OEM: الکترونیک ماژولار نیازمند تغییرات زنجیره تأمین و فرآیند تولید است",
        "شفافیت فرض: انتشار ثبت ریسک اعتبار را با شرکا و تنظیم‌کننده‌ها ایجاد می‌کند",
      ],
      tags: ["ثبت ریسک", "فرض‌ها", "هیدروژن سبز", "گواهی‌نامه", "پذیرش OEM", "شفافیت"],
    },
    {
      title: "تحلیل حساسیت H2 در مقابل EV — سه سناریو، سه حکم",
      summary:
        "یک تحلیل حساسیت سه سناریویی (خوش‌بینانه، پایه، محافظه‌کارانه) نشان می‌دهد که پرونده H2 فقط تحت فرضیات خوش‌بینانه قانع‌کننده است. چارچوب وابستگی‌های سناریو را صریح و قابل ممیزی می‌کند.",
      keyPoints: [
        "سناریوی خوش‌بینانه: H2 سبز در مقیاس پلتفرم H2 را از نظر کربن و برد برتر می‌کند",
        "سناریوی پایه: تقریباً برابری با BEV از نظر کربن؛ H2 در برد برنده است، BEV در زیرساخت",
        "سناریوی محافظه‌کارانه: H2 خاکستری از نظر کربن بدتر از BEV است؛ H2 در زیرساخت و هزینه می‌بازد",
        "محرک‌های حساسیت: شدت کربن هیدروژن، تراکم ایستگاه، هزینه خودروی LH2 و نرخ استفاده",
        "خروجی چارچوب: معیارهای تصمیم برای اینکه چه زمانی پذیرش پلتفرم H2 موجه است در مقابل زودهنگام",
      ],
      tags: ["تحلیل حساسیت", "سناریوها", "H2 در مقابل EV", "هیدروژن سبز", "زیرساخت", "معیارهای تصمیم"],
    },
    {
      title: "روش‌شناسی مزیت رقابتی است — EPU به عنوان پلتفرم استقرار خنثی از کاربرد",
      summary:
        "ترکیب پایانی: مزیت رقابتی EPU روش‌شناسی است — حاکمیت ایمنی مبتنی بر فیزیک، شفافیت TEA/LCA به عنوان محدودیت طراحی، قانون اساسی مجموعه حسگر و شواهد گواهی‌نامه قابل ممیزی.",
      keyPoints: [
        "مزیت رقابتی در روش‌شناسی است: ایمنی مبتنی بر فیزیک + شفافیت TEA/LCA + قانون اساسی حسگر",
        "استقرار خنثی از کاربرد: هسته EPU برای BEV، H2، هیبرید، ناوگان — همان هسته گواهی‌شده",
        "ارزش پیشنهادی شریک: پرونده ایمنی قابل ممیزی بار گواهی‌نامه شریک و مواجهه مسئولیت را کاهش می‌دهد",
        "ارزش پیشنهادی نظارتی: پشته شواهد شفاف بررسی نظارتی و تأیید را تسریع می‌کند",
        "پیام پایانی: روش‌شناسی را درست بسازید، و هر حوزه کاربردی یک فرصت می‌شود",
      ],
      quote: "روش‌شناسی مزیت رقابتی است. حوزه کاربردی فرصت است.",
      tags: ["روش‌شناسی", "مزیت رقابتی", "مزیت رقابتی", "خنثی از کاربرد", "EPU", "ترکیب"],
    },
  ],
};

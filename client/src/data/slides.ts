export type Section =
  | "Executive Framing"
  | "Cabin Controller"
  | "Hydrogen Platform"
  | "Integrated Electronics"
  | "Sensor Suite & Governance"
  | "TEA/LCA & Strategic Moat";

export interface Slide {
  id: number;
  title: string;
  section: Section;
  sectionColor: string;
  image: string;
  summary: string;
  keyPoints: string[];
  quote?: string;
  tags: string[];
}

const BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K";

export const slides: Slide[] = [
  {
    id: 1,
    title: "Physics-Certified, Carbon-Auditable Autonomy: The EPU Vision",
    section: "Executive Framing",
    sectionColor: "#2D7D6F",
    image: `${BASE}/img_01_bf4c830f.png`,
    summary:
      "The EPU (Event Processing Unit) represents a paradigm shift in autonomous vehicle architecture — a physics-certified, carbon-auditable safety compute core that is fuel-agnostic and application-agnostic.",
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
    id: 2,
    title: "EPU Is a Safety Compute Core, Not a Driving Assistant",
    section: "Executive Framing",
    sectionColor: "#2D7D6F",
    image: `${BASE}/img_02_22eb201b.png`,
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
    id: 3,
    title: "Scope Discipline — Core Roadmap vs. Application Notes",
    section: "Executive Framing",
    sectionColor: "#2D7D6F",
    image: `${BASE}/img_03_cb722903.png`,
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
    id: 4,
    title: "Four-Phase Integration Strategy — From TEA/LCA to Full Deployment",
    section: "Executive Framing",
    sectionColor: "#2D7D6F",
    image: `${BASE}/img_04_864db6d6.png`,
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
    id: 5,
    title: "The Driverless Cabin — Preference-Only Interaction, Zero Override Authority",
    section: "Cabin Controller",
    sectionColor: "#7C3AED",
    image: `${BASE}/img_05_91548433.png`,
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
    id: 6,
    title: "Controller Semantics — Direction and Intensity as Separate Channels",
    section: "Cabin Controller",
    sectionColor: "#7C3AED",
    image: `${BASE}/img_06_3465c6f7.png`,
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
    id: 7,
    title: "Three Interaction Modes — Low-Fatigue Default to Expressive Bounded Preference",
    section: "Cabin Controller",
    sectionColor: "#7C3AED",
    image: `${BASE}/img_07_3cde0775.png`,
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
    id: 8,
    title: "Hydrogen Driverless Platform — Full Systems Architecture",
    section: "Hydrogen Platform",
    sectionColor: "#0891B2",
    image: `${BASE}/img_08_0c6fc407.png`,
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
    id: 9,
    title: "Packaging Opportunity — What Removing the Driver Architecture Actually Frees",
    section: "Hydrogen Platform",
    sectionColor: "#0891B2",
    image: `${BASE}/img_09_b894256b.png`,
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
    id: 10,
    title: "LH2 Tank and Cryogenic Safety — Engineering Complexity Without Drama",
    section: "Hydrogen Platform",
    sectionColor: "#0891B2",
    image: `${BASE}/img_10_0c35a05b.png`,
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
    id: 11,
    title: "Hydrogen Safety Supervisor — Monitoring as a Constitutional Subsystem",
    section: "Hydrogen Platform",
    sectionColor: "#0891B2",
    image: `${BASE}/img_11_d94543c0.png`,
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
    id: 12,
    title: "Triple Thermal Domain Management — Cryo, Fuel Cell, and Compute",
    section: "Hydrogen Platform",
    sectionColor: "#0891B2",
    image: `${BASE}/img_12_7b1632ac.png`,
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
    id: 13,
    title: "2,000-Mile Range Target — Feasibility Study, Not Production Claim",
    section: "Hydrogen Platform",
    sectionColor: "#0891B2",
    image: `${BASE}/img_13_675367ec.png`,
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
    id: 14,
    title: "E/E Architecture Evolution — From Distributed ECUs to Centralized Intelligence",
    section: "Integrated Electronics",
    sectionColor: "#B45309",
    image: `${BASE}/img_14_2b895a39.png`,
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
    id: 15,
    title: "EPU-Centric Compute Architecture — The Constitutional Core",
    section: "Integrated Electronics",
    sectionColor: "#B45309",
    image: `${BASE}/img_15_56e9188b.png`,
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
    id: 16,
    title: "Sensor-to-Compute Dataflow — Deterministic Timing as a Safety Guarantee",
    section: "Integrated Electronics",
    sectionColor: "#B45309",
    image: `${BASE}/img_16_cb533da0.png`,
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
    id: 17,
    title: "Power Domain Isolation and Thermal Zoning — Fault Containment by Design",
    section: "Integrated Electronics",
    sectionColor: "#B45309",
    image: `${BASE}/img_17_19556e80.png`,
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
    id: 18,
    title: "Modular Serviceability — Electronics Designed for Replacement, Not Discard",
    section: "Integrated Electronics",
    sectionColor: "#B45309",
    image: `${BASE}/img_18_33e48176.png`,
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
    id: 19,
    title: "Sensor Suite Constitution — Budgets as Constitutional Limits",
    section: "Sensor Suite & Governance",
    sectionColor: "#047857",
    image: `${BASE}/img_19_c361d41d.png`,
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
    id: 20,
    title: "Functional Redundancy by Modality — Philosophy Over Sensor Maximalism",
    section: "Sensor Suite & Governance",
    sectionColor: "#047857",
    image: `${BASE}/img_20_7df01cbf.png`,
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
    id: 21,
    title: "Degradation Policy and MRC Trigger Matrix — Failure Behavior Made Legible",
    section: "Sensor Suite & Governance",
    sectionColor: "#047857",
    image: `${BASE}/img_21_fc89fe8f.png`,
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
    id: 22,
    title: "Validation Courts — Four-Gate Governance for Every Architecture Decision",
    section: "Sensor Suite & Governance",
    sectionColor: "#047857",
    image: `${BASE}/img_22_cdb877f2.png`,
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
    id: 23,
    title: "Certification Evidence Stack — The Auditable Safety Case",
    section: "Sensor Suite & Governance",
    sectionColor: "#047857",
    image: `${BASE}/img_23_66f9db3d.png`,
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
    id: 24,
    title: "Layer X TEA/LCA Governance — Carbon and Cost as First-Class Design Constraints",
    section: "TEA/LCA & Strategic Moat",
    sectionColor: "#9D174D",
    image: `${BASE}/img_24_b0d4baba.png`,
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
    id: 25,
    title: "Transparent TCO — EPU vs. Traditional ADAS",
    section: "TEA/LCA & Strategic Moat",
    sectionColor: "#9D174D",
    image: `${BASE}/img_25_438593a5.png`,
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
    id: 26,
    title: "Lifecycle Carbon Dashboard — Subsystem-Level Accountability",
    section: "TEA/LCA & Strategic Moat",
    sectionColor: "#9D174D",
    image: `${BASE}/img_26_fb6b6237.png`,
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
    id: 27,
    title: "H2 vs. Current EV — A Rigorous Comparison Framework, Not a Verdict",
    section: "TEA/LCA & Strategic Moat",
    sectionColor: "#9D174D",
    image: `${BASE}/img_27_347bbb51.png`,
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
    id: 28,
    title: "Risk Register — What Must Be True for This to Work",
    section: "TEA/LCA & Strategic Moat",
    sectionColor: "#9D174D",
    image: `${BASE}/img_28_2956b8c7.png`,
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
    id: 29,
    title: "H2 vs. EV Sensitivity Analysis — Three Scenarios, Three Verdicts",
    section: "TEA/LCA & Strategic Moat",
    sectionColor: "#9D174D",
    image: `${BASE}/img_29_75b817b7.png`,
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
    id: 30,
    title: "The Methodology Is the Moat — EPU as Application-Neutral Deployment Platform",
    section: "TEA/LCA & Strategic Moat",
    sectionColor: "#9D174D",
    image: `${BASE}/img_30_4be75609.png`,
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
];

export const sections: Section[] = [
  "Executive Framing",
  "Cabin Controller",
  "Hydrogen Platform",
  "Integrated Electronics",
  "Sensor Suite & Governance",
  "TEA/LCA & Strategic Moat",
];

export const sectionColors: Record<Section, string> = {
  "Executive Framing": "#2D7D6F",
  "Cabin Controller": "#7C3AED",
  "Hydrogen Platform": "#0891B2",
  "Integrated Electronics": "#B45309",
  "Sensor Suite & Governance": "#047857",
  "TEA/LCA & Strategic Moat": "#9D174D",
};

export const sectionSlideRanges: Record<Section, [number, number]> = {
  "Executive Framing": [1, 4],
  "Cabin Controller": [5, 7],
  "Hydrogen Platform": [8, 13],
  "Integrated Electronics": [14, 18],
  "Sensor Suite & Governance": [19, 23],
  "TEA/LCA & Strategic Moat": [24, 30],
};

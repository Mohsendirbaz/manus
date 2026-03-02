# Future Work: Two Complementary 30-Slide Presentation Decks

**Project:** EPU Strategy — Driverless H₂ Autonomy Platform  
**Document Type:** Future Work Specification  
**Date:** March 2026  
**Status:** Planned — Content Sourced, Slides Not Yet Built

---

## Overview

This document specifies two additional 30-slide presentation decks that extend the existing 60-slide EPU Strategy deck. Each deck is designed to stand alone as an independent presentation for a distinct technical audience, while sharing a common architectural vocabulary with the primary deck. Overlapping content with the main EPU deck is introduced only where it provides essential context or where the treatment in the new deck is materially different (deeper, more formal, or from a different theoretical angle). In all other cases, the two new decks develop their subjects in their own right.

| Deck | Source Document | Primary Audience | Standalone Theme |
|------|----------------|-----------------|-----------------|
| **Deck A** | *Universal Filtration Primitive ↔ Discriminant Analysis* (Feb 28, 2026) | ML engineers, signal-processing architects, agent-system designers | A unified algebraic framework for all separation mechanisms, with LDA as the canonical instantiation of Path 6 |
| **Deck B** | *Tense Grammar as State Management for Temporal Evolution* (Feb 18, 2026) | Formal-methods researchers, language-agent architects, control theorists | Tense grammar as a rigorous temporal state-management protocol, extended to kinetic memory, constraint mechanics, and constitutional truth governance |

---

## Deck A: Universal Filtration Primitive — 30 Slides

### Thematic Arc

The deck opens by establishing the central thesis — that every separation mechanism in computing, signal processing, and machine learning is an instantiation of a single five-component primitive — and then systematically maps this primitive onto a 10-path taxonomy. The middle section develops Linear Discriminant Analysis as the canonical Path 6 instantiation, deriving all major variants from a single set of knob adjustments. The deck closes with a decision framework, performance metrics, and a synthesis that positions the Universal Filtration Primitive as a unifying meta-theory for agent-facing separation tasks.

### Slide-by-Slide Outline

| # | Title | Key Content | Act |
|---|-------|-------------|-----|
| A-01 | **The Separation Problem** | Every intelligent system must separate signal from noise, relevant from irrelevant, class from class. The central claim: all such operations share a common five-component structure — Domain, Criterion, Partition, Substrate, Separation Mode. | Foundation |
| A-02 | **The Universal Filtration Primitive** | Formal definition of the UFP: `(Domain, Criterion Φ, Partition Rule Γ, Substrate, Mode)`. Two modes: DirectSelection (Φ operates natively) vs. DecompositionBased (explicit representation stage R precedes Φ). Canonical form for each mode. | Foundation |
| A-03 | **The Universal Staged Interface** | Four mandatory stages: Stage 0 Represent `z = R(x)`, Stage 1 Discriminate `s = Φ(z)`, Stage 2 Select/Partition `y = Γ(s)`, Stage 3 Compose/Reconstruct `x̂ = C(y,z)` (optional). Every filter must declare its mode and name R (Identity is valid). | Foundation |
| A-04 | **Atom-Resolved Separation for Agent Workflows** | Jotai interpretation: decomposition produces an atom-addressed space `R(X) = {(aᵢ, zᵢ)}`. Atom Patch Set `∆ = {(aᵢ, δᵢ) : yᵢ = accept}`. Atom-Scoped Precision Invariant: a filter output is completely precise iff it modifies only addressed atoms. | Foundation |
| A-05 | **10-Path Taxonomy: Direct Selection Paths (1–3, 5, 7, 10)** | Table A entries for Stencil (Path 1), Sieve (Path 2), Grid Mask (Path 3), Temporal Gate (Path 5), Probabilistic Sampler (Path 7), Field Gradient Selector (Path 10). Separation mode, core Φ, output type, primary failure mode for each. | Taxonomy |
| A-06 | **10-Path Taxonomy: Decomposition-Based Paths (4, 6, 8, 9)** | Table A entries for Spectral Filter (Path 4: FFT/wavelet), Phase Space Classifier (Path 6: LDA), Hierarchical Aggregator (Path 8: pyramid), Topological Sorter (Path 9: Laplacian eigenspace). Representation operator R and reconstruction operator C for each. | Taxonomy |
| A-07 | **Separation Mechanisms Table** | Table B: geometry, selectivity signal proxy, fidelity proxy, computational footprint, and stage form for all 10 paths. Emphasis on how the selectivity signal differs across paths (transition width for Path 4, Mahalanobis distance for Path 6, modularity for Path 9). | Taxonomy |
| A-08 | **Agent Selection Defaults** | Table C: best-fit regime, prefer-when conditions, avoid-when conditions, and minimal verification test for each of the 10 paths. Practical guidance for an agent choosing among paths given problem characteristics. | Taxonomy |
| A-09 | **Composition Algebra: Serial Pipelines** | Serial composition `F₂ ∘ F₁`. Requirements: order sensitivity declaration, interface type matching, accumulated loss tracking `loss_total = loss_F1 + loss_F2`, constraint propagation (pipeline latency ≤ τ₁ + τ₂). Atom scope boundary between stages is mandatory. | Composition |
| A-10 | **Composition Algebra: Parallel Ensembles and Gating** | Parallel composition: combination rule (union, intersection, weighted voting, stacking), diversity requirement. Gating (conditional composition): routing condition, fallback path, gating overhead. Traceability requirements for all composition types. | Composition |
| A-11 | **Agent Traceability Framework** | Mandatory traceability report structure: Context (objective, input type, constraints, hazards), Candidate Set, Separation Mode Declaration, Decision Path, Selected Filter Specification, Verification & Diagnostics, Reproducibility, Atom Scope. Decision Log Table schema. | Traceability |
| A-12 | **LDA as Path 6: The Canonical Instantiation** | Mapping 5.1: UFP → LDA. Domain `ℝᵖ` with labeled observations. DecompositionBased mode. Representation R: Mahalanobis whitening `z = Σ⁻¹/²x`. Criterion Φ: Fisher ratio or log-posterior `δₖ(x)`. Partition Γ: `ŷ = argmax δₖ(x)`. Substrate: MLE parameters `{µₖ, Σ, πₖ}`. | LDA Core |
| A-13 | **Four-Stage Decomposition of LDA** | Stage 0: `z = Σ⁻¹/²x` (whitening). Stage 1: `δₖ(x) = zᵀΣ⁻¹/²µₖ − ½µₖᵀΣ⁻¹µₖ + log πₖ`. Stage 2: `ŷ = argmax_k δₖ(x)`. Stage 3 (optional): reduce to d dimensions `z_red = WᵀX`. Training cost O(np² + p³), prediction cost O(Kp). | LDA Core |
| A-14 | **Fisher's Criterion and Scatter Matrices** | Between-class scatter `S_B = Σ nₖ(µₖ − µ)(µₖ − µ)ᵀ`. Within-class scatter `S_W = Σ Σ (xᵢ − µₖ)(xᵢ − µₖ)ᵀ`. Generalized eigenvalue problem `S_W⁻¹S_B w = λw`. Maximum discriminant directions `d_max = min(K−1, p)`. Connection to t-test for binary case. | LDA Core |
| A-15 | **Generative View and Criterion Equivalence** | Class-conditional Gaussianity `x|y=k ~ N(µₖ, Σ)`. Log-posterior `δₖ(x) = xᵀΣ⁻¹µₖ − ½µₖᵀΣ⁻¹µₖ + log πₖ`. Criterion Equivalence Theorem: Fisher geometric approach ≡ Bayesian probabilistic approach under Gaussian assumptions. Analogy to Lagrangian/Hamiltonian duality. | LDA Core |
| A-16 | **Partition Geometry and Decision Boundaries** | Decision boundary between classes k and j: hyperplane `{x : (µₖ − µⱼ)ᵀΣ⁻¹x = ½(µₖᵀΣ⁻¹µₖ − µⱼᵀΣ⁻¹µⱼ) − log(πₖ/πⱼ)}`. Perpendicular to Mahalanobis direction `Σ⁻¹(µₖ − µⱼ)`. Prior adjustment shifts boundary toward less likely class. Total boundaries: K(K−1)/2. | LDA Core |
| A-17 | **Substrate Specification and Computational Cost** | MLE parameter estimation: closed-form expressions for `µ̂ₖ`, `Σ̂`, `π̂ₖ`. Discriminant coefficients `wₖ = Σ̂⁻¹µ̂ₖ`, `bₖ = −½µ̂ₖᵀΣ̂⁻¹µ̂ₖ + log π̂ₖ`. Complexity table: training O(np² + p³), covariance O(np²), inversion O(p³), prediction O(Kp), memory O(Kp + p²). | LDA Core |
| A-18 | **LDA Variants as Path 6 Configurations** | Table 5: all 8 variants (Classical, QDA, Ridge, Shrinkage, Diagonal, Sparse, Robust, Kernel) as different knob settings within Path 6. Columns: configuration, boundary type, regime. Key insight: variants differ only in instantiation choices, not in the underlying primitive structure. | Variants |
| A-19 | **Regularized Variants: Ridge, Shrinkage, Diagonal** | Ridge LDA: `Σ_λ = Σ + λI`. Shrinkage LDA (Ledoit-Wolf): `(1−α)Σ + αT`, automatic tuning. Diagonal LDA: `Σ_diag = diag(σ̂₁², ...)`, equivalent to Naive Bayes. Regime guidance: Ridge/Shrinkage for p ≈ n, Diagonal for p ≫ n. | Variants |
| A-20 | **Robust and Nonlinear Extensions: Robust LDA, KLDA, QDA** | Robust LDA: M-estimator or MCD for outlier resistance. Kernel LDA: feature map `ϕ: ℝᵖ → H`, kernel eigenvalue problem `K_B α = λ(K_W + εI)α`. QDA: class-specific `Σₖ`, quadratic boundaries, LDA vs. QDA trade-off table (parameters, flexibility, variance, sample size). | Variants |
| A-21 | **Mathematical Connections: Fisher ↔ Generative ↔ CCA ↔ Regression** | Fisher ↔ Generative: identical boundaries under Gaussian assumptions. LDA ↔ CCA: first K−1 canonical variates of (X,Y) are LDA discriminant directions; `ρᵢ² = λᵢ/(1+λᵢ)`. LDA ↔ Linear Regression: indicator matrix regression `min‖Y − XB‖²_F` gives same predictions for balanced classes. | Connections |
| A-22 | **Variant Selection: Dimensionality and Distributional Assessment** | Level 1 (dimensionality): Classical regime n/p > 5, High-dimensional 0.5 < n/p < 5, Ultra-high n/p < 0.5. Level 2 (distribution): Gaussianity tests (Mardia, Henze-Zirkler), Box's M-test for homoscedasticity, Mahalanobis outlier detection. Decision tree branching. | Decision Framework |
| A-23 | **Variant Selection: Regularization and Sparsity** | Level 3 (regularization): Ledoit-Wolf for automatic tuning, Ridge/RDA for CV-based tuning, Ridge alone for limited budget. Level 4 (sparsity): Sparse LDA for interpretability, Diagonal LDA for p > 10,000, Group Sparse LDA for known feature groups. Practical decision table (Table 9). | Decision Framework |
| A-24 | **Universal Performance Vector P = (F, S, T, E)** | Fidelity F: classification accuracy, reconstruction error, calibration. Selectivity S: Fisher ratio `J(w)`, Mahalanobis distances `d²_kj`, discriminant eigenvalues `λᵢ`. Throughput T: elements per unit time. Efficiency E: FLOPs, memory, energy per element. Complexity table (Table 6) for all 10 paths. | Performance |
| A-25 | **Validation Framework: Five Verification Tests** | (1) Selectivity monotonicity test. (2) Fidelity/reconstruction check `C ∘ R ≈ Id`. (3) Stability/robustness test under perturbation. (4) Regime adequacy check (Gaussianity, homoscedasticity). (5) Calibration test (reliability diagram, ECE). LDA-specific additions: Box's M-test, cross-validated accuracy, calibration curve. | Performance |
| A-26 | **Uncertainty Quantification** | Posterior probabilities `p(y=k|x) = exp(δₖ(x)) / Σ exp(δⱼ(x))`. Prediction entropy `H(y|x) = −Σ p(y=k|x) log p(y=k|x)`. Maximum posterior probability as confidence. Parametric bootstrap for parameter uncertainty: generate samples from `N(µ̂ₖ, Σ̂)`, re-fit LDA, quantify variability of discriminant coefficients. | Performance |
| A-27 | **Separation Mechanism Inventory: One-Page Design Axes** | Table 10: five design axes (partition geometry, metric/induced geometry, covariance substrate, constraint family, decision/outputs) with options/knobs and typical use regime. All LDA variants share common Domain/Criterion/Partition/Substrate/Optimization structure; variants differ only in instantiation choices. | Synthesis |
| A-28 | **Position in the Machine Learning Landscape** | UFP as meta-theory: PCA (unsupervised, maximize variance) vs. LDA (supervised, maximize correlation with labels) vs. CCA (maximize inter-set correlation). LDA as the supervised analog of PCA. The power of abstraction: same primitive, different instantiations, radically different applications (spatial stencils to statistical classifiers). | Synthesis |
| A-29 | **Agent-Facing Synthesis: From Primitive to Deliverable** | End-to-end agent workflow: (1) declare mode, (2) choose path from 10-path taxonomy, (3) set knobs, (4) compose if needed, (5) produce Atom Patch Set ∆, (6) file traceability report. The UFP as a contractual interface between agent reasoning and physical/statistical separation. | Synthesis |
| A-30 | **Research Frontiers and Open Problems** | (1) Adaptive path selection under distribution shift. (2) Compositional traceability for deep pipelines. (3) Non-Euclidean substrates (Riemannian, symplectic). (4) Quantum instantiations of Path 6. (5) Formal verification of Atom-Scoped Precision Invariant in concurrent agent systems. | Synthesis |

---

## Deck B: Tense Grammar as State Management — 30 Slides

### Thematic Arc

The deck opens with the surprising claim that natural-language tense grammar is a complete state-management protocol for temporal evolution, then formalises this through a mapping between tense-aspect features and differential-equation representations. The middle section expands into three non-linguistic domains that share the same underlying temporal structure: kinetic-theory memory erasure, continuum-aware sensing, and constraint satisfaction as stress mechanics (with the EPU as a concrete hardware instantiation). The deck closes with a constitutional framework for truth governance in LLM agent systems, positioning the entire arc as a unified theory of how intelligent systems manage, erase, and certify knowledge across time.

### Slide-by-Slide Outline

| # | Title | Key Content | Act |
|---|-------|-------------|-----|
| B-01 | **The Temporal State Problem** | Every agent — linguistic or physical — must track what is happening now, what has happened, what will happen, and how certain each claim is. The central thesis: the T° head in tense grammar is a complete temporal state manager, and its feature matrix maps exactly onto differential-equation representations. | Foundation |
| B-02 | **T° as Temporal State Manager** | Definition 1.1: Temporal state space `T = {(t, y(t)) : t ∈ ℝ, y : ℝ → ℝⁿ}`. Flow map `Φ^t_t₀(y₀) = y(t)` with identity, composition, and reversibility properties. T° assigns temporal reference coordinates to differential evolution processes, establishing t₀ as deictic anchor. | Foundation |
| B-03 | **Two Representational Modes** | Flow-based: uses flow map Φ and state endpoints y(t). Integral-based: uses accumulated infinitesimal changes `∫(dy/dt)dt`. Mathematical Equivalence Theorem: `y(t) = Φ^t_t₀(y₀) ⟺ y(t) = y₀ + ∫(dy/ds)ds`. Different tense-aspect combinations privilege different representations based on semantic focus. | Foundation |
| B-04 | **Simple Tenses: Present, Past, Future** | Present → instantaneous rate `dy/dt|_{t=t₀}`. Past → achieved state `y(t₀) = Φ^t₀_t_init(y_init)` or integral form. Future → first-order Taylor projection `y(t₀ + ∆t) ≈ y(t₀) + (dy/dt)|_{t₀} · ∆t`. T° feature values: [±past, ±present, ±future] × [–perfect, –progressive]. | Tense Mappings |
| B-05 | **Perfect Aspects: Present, Past, Future Perfect** | Present Perfect → cumulative displacement `∆y(t₀) = y(t₀) − y(0)` or integral form. Past Perfect → prior achieved state `y(t_ref) = Φ^t_ref_t₀(y₀)`, t_ref < t₀ (past-in-past). Future Perfect → anticipated endpoint `y(t₁) = Φ^t₁_t₀(y(t₀))`, t₁ > t₀. Current relevance vs. temporal precedence vs. prospective completion. | Tense Mappings |
| B-06 | **Progressive Aspects: Present, Past, Future Progressive** | Present Progressive → rate field over infinitesimal neighborhood `{dy/dt|_τ : τ ∈ [t₀−ε, t₀+ε]}`. Past Progressive → historical rate field over completed interval `[t₁, t₂]`, t₂ < t₀. Future Progressive → projected rate field over future interval `[t₁, t₂]`, t₀ < t₁. Field-based representation; no alternative for progressive. | Tense Mappings |
| B-07 | **Feature Structure for T°** | Complete feature specification: `T° ≡ {tense, aspect, modality, temporal-anchor t₀, EPP, φ-features}`. Agree operation: T° probes dy/dt to value (1) temporal location t₀, (2) aspectual viewpoint (rate/state/displacement/flow/field), (3) modal status (realis P=1 vs. irrealis P<1). | Feature Structure |
| B-08 | **Architectural Schema and Summary Tables** | Complete architecture: `[TP T°[tense,aspect,modality] [EvolutionP [StateP y(t)]]]`. Table 2: complete tense-aspect mapping with preferred representations. Table 3: representational preference by aspect (Simple→Flow/State, Perfect→Displacement, Progressive→Rate Field). | Feature Structure |
| B-09 | **T° as Temporal Coordinate System** | Threefold function: (1) reference frame selector (t₀ as deictic center), (2) aspectual lens (rate/state/displacement/flow/field), (3) modal qualifier (realis/irrealis). State management protocol: nominative licensing → t₀, aspectual licensing → representational mode, modal licensing → epistemic status, temporal anchoring → coordinate system. | Theoretical Implications |
| B-10 | **Tense Grammar as Complete State Management Language** | Synthesis: tense grammar provides agents with a full rule set for tracking missions, storing past events, and delineating any real-life scenario expressible in temporal terms. The equivalences between flow-based and integral-based representations demonstrate mathematical isomorphism, with aspectual features determining which mode is foregrounded. | Theoretical Implications |
| B-11 | **Memory Erasure: Fundamental Criteria** | Correlation-based criterion: `|C_A(t)| < ε ∀t > t_erase`. Information-theoretic criterion: `I(ρ₀; ρₜ) → 0` (stronger — demands full statistical independence). Phase space criterion (ergodicity): `lim_{t→∞} ρ(q,p,t) = δ(H−E)/Ω(E)`. Three criteria form a hierarchy of increasing strength. | Kinetic Memory |
| B-12 | **Memory Erasure: Entropy Production and Landauer's Principle** | Irreversible entropy generation: `σ(t) = dS_total/dt > 0` until equilibration. Landauer's Principle: erasing n bits requires `Q_min = nk_BT ln2`. KL divergence criterion: `D_KL(ρₜ ‖ ρ_eq) < k_B ln(1+δ)`. Operational criterion: heat dissipated `Q ≥ k_BT ln(N_initial_states)`. | Kinetic Memory |
| B-13 | **Timescale Hierarchy and Multi-Scale Erasure** | Hierarchy of relaxation times `τ₁ < τ₂ < ... < τₙ`. Selective erasure: mode i erased when t ≫ τᵢ. Complete erasure requires `t > α · max(τᵢ)`, α ≈ 3–5. Multi-scale dynamics: `C(t) = A_f e^{−t/τ_f} + A_s e^{−t/τ_s}`. Temperature measurement implications: fast vs. slow mode equilibration. | Kinetic Memory |
| B-14 | **Physical Mechanisms of Erasure** | Collisional relaxation (gases): `C_v(t) ~ e^{−t/τ_coll}`, N_coll ≥ 5–10 for hard spheres. Diffusive erasure: `t_erase = L²/(π²D_thermal)`. Chaos-driven erasure: Lyapunov exponent λ > 0, `t_erase ~ (1/λ) ln(L_system/δx₀)`. Each mechanism maps to a distinct EPU operational regime. | Kinetic Memory |
| B-15 | **Failure Modes: When Memory Persists** | Broken ergodicity: energy barriers `∆E ≫ k_BT`, topological constraints, symmetry-breaking order → `τ_relax > τ_universe`. Quantum coherence protection: decoherence-free subspaces `[H_system-bath, |ψ⟩] = 0`. Conservation laws: `dQ/dt = 0` → perfect memory. Integrable systems: N constants of motion confine trajectories. | Kinetic Memory |
| B-16 | **Continuum-Aware Sensing** | Sensing as closed-loop mapping: measurement function `h: X → Z`. Characteristics and medium dependence: propagation speed, attenuation, scattering. Occlusion and regime leadership. Link to kinetic memory: sensor measurements are subject to the same erasure criteria — a sensor reading is only valid while the measured quantity retains memory of the state that produced it. | Sensing |
| B-17 | **Quantum Sensing Dynamics and Redshifts** | Proposed structure: quantum measurement as a special case of the UFP (Path 6 in Hilbert space). Anchor relations: gravitational redshift, Doppler shift, and cosmological redshift as temporal coordinate transformations under T°. Connection to the flow map: redshift as a modification of `Φ^t_t₀` under curved spacetime. | Sensing |
| B-18 | **Constraint Satisfaction as Stress Fields: Theoretical Foundation** | Constraint stress tensor `σ_C`. Decomposition into hydrostatic (uniform resource pressure) and deviatoric (directional conflict) components. Three-tier constraint hierarchy: primary (infinite stress at violation), secondary (finite stress with threshold cascades), tertiary (smooth stress potentials). | Constraint Mechanics |
| B-19 | **Stress Fields for Three-Tier Constraint Hierarchy** | Primary constraints: `σ_primary → ∞` at violation boundary (hard gate in EPU hardware). Secondary constraints: finite stress with threshold cascades. Tertiary constraints: smooth potential `σ_tertiary = k(g(x) − g_threshold)²`. Multicomponent systems: stress concentration at interfaces, Saint-Venant decay `σ(x) ~ σ₀ e^{−|x−x₀|/λ}`. | Constraint Mechanics |
| B-20 | **Stress Invariants and Failure Criteria** | Von Mises stress `σ_vM = √(3/2 σ_dev:σ_dev)`: distortional energy, directional conflict. Maximum principal stress `σ₁ = maxeig(σ_C)`: brittle failure, single-constraint dominance. Tresca criterion `τ_max = (σ₁−σ₃)/2`: differential stress, load imbalance. PICAPD interpretation for each criterion. | Constraint Mechanics |
| B-21 | **Stress Evolution: Transport, Diffusion, and Source Terms** | Advection-diffusion equation `∂σ_C/∂t + ∇·(uσ_C) = D∇²σ_C + S_σ`. Advective transport: stress waves propagate at context-flow velocity (EPU sub-100 cycle latency). Diffusive equilibration: lateral load sharing among Managers. Source terms: `S_σ ∝ dµ/dt = B(µ) − D(µ)` (AGM-based closure). | Constraint Mechanics |
| B-22 | **Elastic-Plastic Response and Stress-Based Control** | Elastic regime: reversible violations `σ = Eε`. Plastic regime: irreversible degradation, threshold decay `threshold_new = threshold_old − ∫f(σ−σ_yield)dτ`. Stress-based control: `u(x,t) = −α∇σ_total(x,t)`. Multi-objective resolution via stress superposition `σ_total = Σ wᵢσᵢ`. Constraint activation functions: sparse stress computation. | Constraint Mechanics |
| B-23 | **EPU as Stress Computer** | Binary constraint registers as stress bits. Event propagation network as stress wave propagation. Hardware constraint gates as infinite stress barriers (`output_valid = input_valid && realizable`). Parallel stress reduction: O(log N) aggregation for 1024 constraints in ~10 cycles. Practical advantage: 10²–10⁴× speedup, 100–1000× power efficiency. | Constraint Mechanics |
| B-24 | **Failure Modes as Phase Transitions** | Order parameter `ψ = N_satisfied/N_total ∈ [0,1]`. Phase transition at critical stress σ_c: `ψ(σ) = 1 − α(σ−σ_c)^β` for σ > σ_c (second-order transition). Hierarchical graphs have high σ_c (robust). Renormalization group: Worker-Manager-Queen as 3-level renormalization. Non-local stress: global broadcast channels create mean-field stress. | Constraint Mechanics |
| B-25 | **Constitutional Governance of Truth: Sovereignty and Supremacy** | Article I: Ground Truth is the supreme object — the durable set of warranted assertions. Article II: Definitions of claim, warrant, Ground Truth, adaptation. Article III: Supremacy over all subordinate instruments. Article IV: Scope covers all knowledge-producing functions (perception, retrieval, inference, summarization, planning, execution, memory, communication). | Constitutional Truth |
| B-26 | **Epistemic Rights and Duties** | Article V Rights: Contestability, Provenance, Correction, Scope, Non-Deception. Article VI Duties: Restraint (insufficient warrant → no canonization), Fidelity (canon governs over internal preference), Repair (address claim and causal pathway), Non-Contamination (hypotheses may not silently enter Ground Truth). Article VII: Degrees of reliance (hypothesis → provisional → warranted canon → retraction). | Constitutional Truth |
| B-27 | **Separation of Epistemic Powers** | Article VIII: Epistemic power shall not concentrate. Four constitutional functions: Archive (custody of canon), Proposers (hypothesis generation, no inherent canonization authority), Verifiers (warrant and admissibility testing, structurally capable of disagreeing), Adjudicators (conflict resolution by admissible evidence), Auditor-General (integrity oversight). Article XIV: No single pathway may be both sole proposer and sole judge. | Constitutional Truth |
| B-28 | **Constitutional Law of Evidence and Anti-Drift** | Article XV: Admissibility requires traceable origin, legible transformation, revisability, scoped meaning. Article XVI: Burden of warrant proportional to consequence. Article XVII: Anti-Amplification — no unwarranted claim may be presented with the posture of warranted truth. Article XIX: Anti-Silent-Drift — model updates, tool changes, retrieval changes may not silently revise Ground Truth. | Constitutional Truth |
| B-29 | **Adaptation Under Constitutional Constraint** | Article XX: Adaptation is a duty of capability, never a license to dilute warrant. Article XXI: Non-Regression of Integrity — no adaptation reduces correctability, provenance, contestability, or auditability. Article XXII: Continuity of memory, correction, and independence across versions. Article XXIII: Emergency powers narrow and reviewable. Constitutional blind-spot discovery protocol. | Constitutional Truth |
| B-30 | **Unified Vision: From Tense to Truth** | Synthesis: the six parts of this deck (tense grammar, kinetic memory, continuum sensing, constraint mechanics, EPU hardware, constitutional governance) are all instances of the same meta-problem — how does an intelligent system manage, erase, certify, and act on knowledge across time? The T° head, Landauer's principle, the stress tensor, and the Constitution of Truth are all answers to the same question at different levels of abstraction. | Synthesis |

---

## Overlap Analysis with the Existing 60-Slide EPU Deck

The following table identifies slides in the existing EPU deck where content from the two new decks is directly relevant. Overlap is introduced in the new decks only where it provides essential grounding; in all other cases, the new decks develop their subjects independently.

| New Deck | New Slide(s) | Overlapping EPU Slide(s) | Nature of Overlap | Treatment in New Deck |
|----------|-------------|--------------------------|-------------------|----------------------|
| Deck A | A-12 to A-17 (LDA as Path 6) | EPU-49 (Register Allocation), EPU-50 (Calibration) | Phase Space Classifier is the mathematical foundation for EPU's sensor-fusion discriminant | Deck A develops the full LDA formalism; EPU deck applies it to specific hardware registers |
| Deck A | A-04 (Atom-Resolved Separation) | EPU-38 (WAL Architecture), EPU-39 (Byzantine Fault Tolerance) | Atom Patch Set ∆ maps directly to WAL write-ahead log entries and Byzantine consensus patches | Deck A provides the abstract algebraic framework; EPU deck shows the hardware instantiation |
| Deck A | A-09 to A-10 (Composition Algebra) | EPU-44 (Fibonacci Scheduling), EPU-45 (Lyapunov Stability) | Serial and parallel filter compositions correspond to EPU's multi-stage pipeline scheduling | Deck A treats composition algebraically; EPU deck treats it as a real-time scheduling problem |
| Deck B | B-12 (Landauer's Principle) | EPU-37 (Pythagorean Closure), EPU-43 (Landauer Limit) | Landauer's minimum heat dissipation `Q = nk_BT ln2` appears in both decks | Deck B derives it from kinetic theory; EPU deck applies it as a hardware energy budget |
| Deck B | B-18 to B-24 (Constraint Stress Fields) | EPU-40 (ASIC Gate Count), EPU-41 (Power Budget), EPU-51 (WCET Bounds) | EPU hardware implements constraint stress computation natively | Deck B develops the continuum mechanics theory; EPU deck provides the circuit-level implementation |
| Deck B | B-23 (EPU as Stress Computer) | EPU-49 (Register Allocation), EPU-52 (Passivity Condition) | Binary constraint registers, O(log N) stress aggregation, hardware gates as infinite stress barriers | Deck B provides the mechanical analogy; EPU deck provides the register-level specification |
| Deck B | B-25 to B-29 (Constitutional Truth) | EPU-57 (Agent Hierarchy), EPU-58 (Byzantine Fault Tolerance) | Constitutional separation of epistemic powers maps to EPU's Worker-Manager-Queen hierarchy | Deck B develops the governance framework; EPU deck implements it as a hardware fault-tolerance protocol |
| Deck A | A-11 (Traceability Framework) | EPU-60 (Roadmap) | Agent traceability reports are a prerequisite for EPU's certification and audit trail | Deck A specifies the report schema; EPU deck references it as a deployment requirement |

---

## Implementation Guidance

### Shared Visual Language

Both new decks should adopt the same dark-navy-and-gold visual language as the existing EPU deck to signal that they belong to the same intellectual family, while using distinct accent colours to mark their independent identity:

- **Deck A** accent: `#4FC3F7` (signal blue) — evoking spectral filters, phase space, and information flow.
- **Deck B** accent: `#A5D6A7` (temporal green) — evoking growth, evolution, and state change over time.

### Content Priorities

For Deck A, the highest-priority slides are A-02 (UFP definition), A-05 to A-06 (10-path taxonomy tables), A-12 to A-13 (LDA as Path 6), and A-27 (one-page design axes). These four slides constitute the minimum viable standalone presentation.

For Deck B, the highest-priority slides are B-02 to B-03 (T° framework), B-11 to B-12 (Landauer and erasure criteria), B-18 to B-19 (constraint stress tensor), and B-25 to B-27 (constitutional governance). These five slides constitute the minimum viable standalone presentation.

### Standalone vs. Integrated Use

Each deck is designed to be presented independently without reference to the EPU deck. When presented as part of the full three-deck series, a brief bridging slide (not counted in the 30) should be added at the start of each new deck to orient the audience within the larger project. The bridging slide should reference the overlap table above and indicate which EPU slides provide the hardware context for the theoretical frameworks developed in the new deck.

### Data Integrity

All numerical values in both decks must be sourced directly from the corresponding PDF documents. No values should be fabricated or interpolated. Where the source documents provide ranges (e.g., `α ≈ 3–5` for practical erasure), the range must be preserved in the slide content. Where the source documents provide exact equations, the equations must be typeset exactly as written.

---

## Summary

| Property | Deck A | Deck B |
|----------|--------|--------|
| Source | *Universal Filtration Primitive ↔ Discriminant Analysis* | *Tense Grammar as State Management* |
| Slides | 30 | 30 |
| Standalone | Yes | Yes |
| Primary audience | ML engineers, agent-system designers | Formal-methods researchers, control theorists |
| Core thesis | All separation mechanisms are instantiations of a single five-component primitive | Tense grammar is a complete state-management protocol for temporal evolution |
| Deepest technical content | LDA four-stage decomposition, 10-path taxonomy, composition algebra | Landauer's principle, constraint stress tensor, constitutional truth governance |
| EPU overlap points | 8 slides (algebraic foundations for hardware) | 7 slides (mechanical and governance theory for hardware) |
| Minimum viable deck | 4 slides (A-02, A-05–06, A-12–13, A-27) | 5 slides (B-02–03, B-11–12, B-18–19, B-25–27) |

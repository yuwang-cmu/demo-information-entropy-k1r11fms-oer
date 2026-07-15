# Assessment Support — Reliable Codes

> **Demonstration only:** this AI-generated assessment support is not intended for direct use in actual teaching.

## Source and format

These guides instantiate the six objectives in `concepts/reliable-codes.md`. They emphasize reasoning about small binary block codes and evidence-calibrated engineering claims, not implementation of a production communications stack.

## General assessment priorities

- Require the codeword set or parity constraints to be explicit.
- Keep code rate separate from minimum distance.
- Reward the distinction among detection, correction, erasure, and retransmission.
- State the decoder and error model before interpreting a syndrome.
- Test Hamming versus extended-Hamming boundaries.
- Ask what a reliability percentage counts and over which denominator.

## Objective 1: Explain redundancy and code rate

### Target understanding

Learners calculate $R=k/n$ and explain that redundancy restricts valid strings rather than reducing physical noise.

### Question guides

#### Guide A — Rate calculation

Provide $k$ and $n$; ask for rate, redundancy fraction, and expansion factor.

#### Guide B — Design comparison

Compare a high-rate low-distance code with a low-rate repetition code. Require a trade-off statement, not a universal ranking.

## Objective 2: Use Hamming distance

### Target understanding

Learners compute pairwise distance, identify $d_{\min}$, and apply detection and correction bounds.

### Question guides

#### Guide A — Codebook audit

Give four short codewords. Ask for all pairwise distances, $d_{\min}$, and guaranteed error capabilities.

#### Guide B — Decoder ambiguity

Place a received word equally close to two codewords. Ask whether correction, erasure, or another rule is justified.

## Objective 3: Interpret parity checks and syndromes

### Target understanding

Learners distinguish a constraint check from historical certainty and use a simple Hamming matrix consistently.

### Question guides

#### Guide A — Syndrome calculation

Use the displayed three parity-check equations and a one-bit corruption. Require the learner to state check/bit-order convention.

#### Guide B — Zero-syndrome claim

Ask whether zero syndrome proves no transmission error and request a counterexample principle.

## Objective 4: Bound Hamming-code claims

### Target understanding

Learners state standard Hamming $d_{\min}=3$ as single-error-correcting and extended Hamming $d_{\min}=4$ as supporting common SECDED use.

### Question guides

#### Guide A — Two-error miscorrection

Ask why the XOR of two Hamming-matrix columns can imitate a third column.

#### Guide B — SECDED language

Repair “extended Hamming corrects every double error.”

## Objective 5: Compare reliability mechanisms

### Target understanding

Learners assign roles to coding, interleaving, erasure, feedback, and retransmission.

### Question guides

#### Guide A — Burst channel

Ask how interleaving changes a burst's placement and which component actually corrects.

#### Guide B — Feedback trade-off

Compare forward error correction with detection plus retransmission under different latency and energy constraints.

## Objective 6: Audit a reliability claim

### Target understanding

Learners demand an event definition, denominator, channel model, code, decoder, block length, test design, and uncertainty statement.

### Question guides

#### Guide A — Dashboard critique

Give “99.999% reliable” without a denominator. Ask for at least five missing fields.

#### Guide B — Evidence ladder

Order algebraic verification, injected-error enumeration, stochastic simulation, mismatch stress test, physical-link testing, and operations monitoring.

## Assessment purpose table

| Evidence | Best use | Common invalid inference |
|---|---|---|
| Correct rate | Transmission overhead | Rate determines distance |
| Correct $d_{\min}$ | Worst-case symbol-error bounds | Gives average error probability |
| Nonzero syndrome | Constraint violation evidence | Identifies history without a model |
| SEC demonstration | One-error boundary | All larger patterns are detected |
| Interleaving analysis | Burst redistribution | Interleaver corrects errors |
| Field error rate | Operational average | Proves worst-case robustness |

## Rubric themes

| Dimension | Strong evidence | Developing evidence | Major concern |
|---|---|---|---|
| Code structure | States codewords or parity constraints and rate | Structure partly implicit | Treats arbitrary strings as codewords |
| Distance | Correct pairwise count and bound | Small counting error | Confuses detection with correction |
| Decoder model | Names assumed errors and decision rule | Rule implied | Treats syndrome as certainty |
| Reliability claim | Names event, denominator, model, evidence, and residual risk | Several fields present | Reports “reliable” without a measurable outcome |

## Attribution

Adapted and reorganized from the revision-bound Wikipedia sources in `metadata/SOURCE_RECORD.json`, by Wikipedia contributors, CC BY-SA 4.0.

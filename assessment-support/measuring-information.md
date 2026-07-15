# Assessment Support — Measuring Information

> **Demonstration only:** this AI-generated assessment support is not intended for direct use in actual teaching.

## Source and format

These guides instantiate the six objectives in `concepts/measuring-information.md`. They are assessment-design prompts, not a secure question bank. Numerical items use finite discrete models and require assumptions and units to remain visible.

## General assessment priorities

- Reward model identification before calculation.
- Require learners to distinguish self-information from entropy.
- Treat semantic interpretation and causal language as claim-boundary issues.
- Make logarithm base and units explicit.
- Separate asymptotic existence results from finite-code performance.
- Accept alternative correct representations when reasoning is shown.

## Objective 1: Separate statistical information from meaning

### Target understanding

Learners identify what Shannon quantities measure and refuse unsupported inferences about value, truth, or semantics.

### Question guides

#### Guide A — Claim repair

Present a claim such as “The rare message is more important because it contains more information.” Ask learners to preserve the valid statistical statement and remove the semantic inference.

#### Guide B — Model support

Give an observed outcome that the model assigned probability zero. Ask what conclusion concerns the event and what conclusion concerns model adequacy.

## Objective 2: Calculate self-information and entropy

### Target understanding

Learners use $I(x)=-\log_2p(x)$ and $H(X)=\sum p(x)I(x)$, retain units, and distinguish one outcome from an expectation.

### Question guides

#### Guide A — Small distribution

Use probabilities that are powers of two so arithmetic exposes the structure rather than calculator use.

#### Guide B — Distribution comparison

Compare uniform and concentrated distributions on the same alphabet. Ask for calculation plus a prediction before calculation.

## Objective 3: Relate conditional entropy and mutual information

### Target understanding

Learners interpret $H(X|Y)$ as remaining uncertainty and $I(X;Y)$ as average uncertainty reduction.

### Question guides

#### Guide A — Endpoints

Compare an exact copy, an independent observation, and a partially noisy observation.

#### Guide B — Causation audit

Give high mutual information caused by a common driver. Ask what is supported and what causal evidence is missing.

## Objective 4: Interpret a channel model

### Target understanding

Learners read $P(Y|X)$, distinguish an input distribution from channel transitions, and calculate a simple binary symmetric example.

### Question guides

#### Guide A — Transition table

Provide a $2\times2$ conditional-probability table and ask which paths preserve or change symbols.

#### Guide B — Mismatch critique

Contrast independent flips with a bursty trace. Ask whether the binary memoryless model is defensible.

## Objective 5: Explain channel capacity

### Target understanding

Learners define capacity as a maximum of mutual information over permitted input distributions for a specified channel.

### Question guides

#### Guide A — Optimization language

Ask why one measured $I(X;Y)$ for a chosen source need not equal capacity.

#### Guide B — Units

Require learners to distinguish bits per channel use from bits per second.

## Objective 6: Bound the noisy-channel theorem

### Target understanding

Learners state achievability and converse without promising zero finite error or a practical code construction.

### Question guides

#### Guide A — Rate classification

Give $R<C$, $R=C$, and $R>C$ claims. Ask which conclusions are supported by the simplified theorem statement and which require care.

#### Guide B — Finite-system report

Give only $R<C$. Ask for the additional code, block-length, decoder, channel-validation, and error evidence needed for deployment.

## Assessment purpose table

| Evidence | Best use | Common invalid inference |
|---|---|---|
| Correct self-information | Formula and unit fluency | Outcome value equals entropy |
| Correct entropy | Distribution-level reasoning | Entropy measures meaning |
| Conditional-entropy comparison | Observation value | Association proves cause |
| Channel-table reading | Model interpretation | Real errors are independent |
| Capacity calculation | Bound under a model | Every code attains capacity |
| Theorem critique | Claim calibration | Below capacity means zero error |

## Rubric themes

| Dimension | Strong evidence | Developing evidence | Major concern |
|---|---|---|---|
| Model | Names variables, distribution, channel, and assumptions | Some assumptions implicit | Calculates without defining the model |
| Mathematics | Correct formula, weighting, logarithm, and unit | Minor arithmetic issue with sound setup | Confuses self-information, entropy, or capacity |
| Interpretation | Matches claim scope to quantity | Mostly bounded but vague | Infers meaning, causation, or finite certainty |
| Communication | Shows steps and labels units | Reasoning recoverable | Answer is an unsupported number |

## Attribution

Adapted and reorganized from the revision-bound Wikipedia sources in `metadata/SOURCE_RECORD.json`, by Wikipedia contributors, CC BY-SA 4.0.

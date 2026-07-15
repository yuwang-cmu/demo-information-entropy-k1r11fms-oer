<!-- deck
title: Chapter 1: Measuring Information
theme: architect
ratio: 16:9
author: Yu Wang
footer: Coursewerk demonstration · Not for actual teaching · CC BY-SA 4.0
-->

<!-- slide template=title v=4 -->
# Measuring Information
## Surprise, entropy, and channel capacity

**AI-generated Coursewerk demonstration—not intended for actual teaching**

<!-- slide 2col -->
## Learning objectives
<!-- @left -->
- {{sp[info] 1.1}} Separate statistical information from meaning
- {{sp[info] 1.2}} Calculate self-information and entropy
- {{sp[info] 1.3}} Relate conditional entropy and mutual information
<!-- @right -->
- {{sp[info] 1.3}} Read a channel as $P(Y|X)$
- {{sp[info] 1.4}} Explain capacity as an optimization
- {{sp[info] 1.4}} Bound the noisy-channel theorem

:::warning
Finite discrete models; no claim that information measures semantic value.
:::

<!-- slide template=outline v=4 -->
# Chapter route
- Outcome probability → self-information
- Distribution → entropy
- Observation → conditional uncertainty
- Input and output → mutual information
- Channel model → capacity
- Rate versus capacity → bounded reliability claim

<!-- slide main-side 3/2 -->
## A physical signal, an abstract question
<!-- @main -->
![A NASA Deep Space Network antenna at Goldstone against an evening sky.](../assets/goldstone-antenna.jpg)
<!-- @side -->
The antenna receives physical electromagnetic signals.

Information theory asks:

> Under a stated probabilistic model, how much uncertainty can the output resolve about the input?

*NASA/JPL · public domain*

<!-- slide template=section v=2 -->
# 1.1 Probability and surprise
## Rare under the model → more self-information

<!-- slide main-side 3/2 -->
## The logarithmic scale
<!-- @main -->
![Probabilities one half, one quarter, and one eighth correspond to one, two, and three bits; entropy averages across outcomes.](../assets/surprise-entropy.svg)
<!-- @side -->
$$
I(x)=-\log_2p(x)
$$

- $p=1/2\Rightarrow1$ bit
- $p=1/4\Rightarrow2$ bits
- $p=1/8\Rightarrow3$ bits

<!-- slide 2col -->
## Why a logarithm?
<!-- @left -->
For independent outcomes:

$$
p(x,y)=p(x)p(y)
$$

<!-- @right -->
Information adds:

$$
-\log[p(x)p(y)]
=-\log p(x)-\log p(y)
$$

:::info
Base 2 gives bits; base $e$ gives nats.
:::

<!-- slide quad -->
## Information is not four other quantities
<!-- @tl -->
### Meaning
A statistically common message can be profound.
<!-- @tr -->
### Truth
A false statement can have high self-information.
<!-- @bl -->
### Usefulness
Utility belongs to a task and decision.
<!-- @br -->
### Storage
One information bit is not always one physical device.

<!-- slide step -->
## Model failure is information about the model
1. A model assigns $p(x)=0$.
2. Outcome $x$ is observed.
3. The formula has no finite value.
4. Do not claim “infinite usable information.”
5. Reconsider the support, measurement, or model.

<!-- slide template=section v=3 -->
# 1.2 Entropy
## Expected self-information before the outcome is known

<!-- slide 2col -->
## One outcome versus the average
<!-- @left -->
### Self-information

$$
I(x)=-\log_2p(x)
$$

Attached to one possible outcome.
<!-- @right -->
### Entropy

$$
H(X)=\sum_x p(x)I(x)
$$

Average over the distribution.

<!-- slide 2col -->
## Fair and skewed coins
<!-- @left -->
### Fair

$$
H=-2\left(\tfrac12\log_2\tfrac12\right)=1
$$

bit per outcome.
<!-- @right -->
### $0.75/0.25$

$$
H\approx0.811
$$

bit per outcome.

==More predictable → lower entropy.==

<!-- slide 3col -->
## Ask three questions before quoting entropy
<!-- @left -->
### Variable
What outcomes can $X$ take?
<!-- @mid -->
### Distribution
How were probabilities assigned or estimated?
<!-- @right -->
### Unit
Which logarithm base is used?

<!-- slide step -->
## Compression connection—with boundaries
1. Entropy sets an ideal average scale.
2. Coding across long sequences exploits frequency.
3. Average length can approach the bound.
4. One symbol need not occupy a fractional physical bit.
5. Entropy does not specify a practical compressor.

<!-- slide template=section v=4 -->
# 1.3 What does the output reveal?
## Conditional entropy and mutual information

<!-- slide main-side 3/2 -->
## Shared and remaining uncertainty
<!-- @main -->
![Overlapping entropy regions show mutual information as shared uncertainty reduction and conditional entropy as what remains.](../assets/mutual-information.svg)
<!-- @side -->
$$
I(X;Y)=H(X)-H(X|Y)
$$

Also:

$$
I(X;Y)=I(Y;X)
$$

Conceptual bookkeeping for discrete entropy.

<!-- slide 2col -->
## Two endpoints
<!-- @left -->
### Perfect copy
$Y=X$, with $X$ a fair bit.

$$H(X|Y)=0,\quad I=1$$
<!-- @right -->
### Independence
$Y$ is an independent fair bit.

$$H(X|Y)=1,\quad I=0$$

:::warning
Association is not causation.
:::

<!-- slide main-side 3/2 -->
## Channel = conditional probability rule
<!-- @main -->
![A binary symmetric channel preserves each bit with probability one minus p and flips it with probability p.](../assets/noisy-channel.svg)
<!-- @side -->
For uniform input:

$$
I(X;Y)=1-h_2(p)
$$

- $p=0$: 1 bit/use
- $p=0.1$: about 0.531
- $p=0.5$: 0

<!-- slide template=section v=5 -->
# 1.4 Capacity
## Optimize what the output can reveal

<!-- slide 2col -->
## A maximum, not a default
<!-- @left -->
$$
C=\max_{p(x)}I(X;Y)
$$

Capacity belongs to a channel model and permitted input choices.
<!-- @right -->
For a binary symmetric channel:

$$
C=1-h_2(p)
$$

The uniform input achieves the maximum.

<!-- slide main-side 3/2 -->
## The asymptotic boundary
<!-- @main -->
![Rates below capacity can achieve arbitrarily small error asymptotically; rates above capacity cannot.](../assets/capacity-boundary.svg)
<!-- @side -->
### Below $C$
Good code families exist as block length grows.

### Above $C$
Arbitrarily reliable communication is impossible.

<!-- slide quad -->
## What capacity does not report
<!-- @tl -->
### A code
It does not construct one.
<!-- @tr -->
### Finite error
It does not promise zero.
<!-- @bl -->
### Latency
Long blocks can be costly.
<!-- @br -->
### Model mismatch
Bursts and drift may violate assumptions.

<!-- slide step -->
## Repair the claim
1. Weak: “Rate below capacity guarantees every message.”
2. Name the channel and units.
3. Name code, block length, and decoder.
4. Give measured or bounded error probability.
5. State which channel mismatches were tested.

<!-- slide template=closing v=4 -->
# The chapter in one line
## Probability measures uncertainty; coding claims remain conditional on a model.

**Next:** How redundancy and distance make some corruptions recoverable.

<!-- slide -->
## Sources and media
- Revision-bound Wikipedia sources: *Information theory*, *Entropy (information theory)*, *Mutual information*, *Channel capacity*, and *Noisy-channel coding theorem*; Wikipedia contributors, CC BY-SA 4.0.
- NASA/JPL Goldstone antenna photograph: public domain.
- Four diagrams: original work by Yu Wang, CC BY-SA 4.0.
- Exact source revisions, rights evidence, and modifications: `metadata/SOURCE_RECORD.json` and `metadata/ATTRIBUTION.md`.

**Demonstration only—not intended for actual teaching.**

# Concept Map — Measuring Information

> **Demonstration only:** this AI-generated Coursewerk material is not intended for direct use in actual teaching.

## Source and scope

This chapter adapts the revision-bound Wikipedia articles **Information theory**, **Entropy (information theory)**, **Mutual information**, **Channel capacity**, and **Noisy-channel coding theorem**. It uses finite discrete examples and simplified memoryless channels. It does not treat information-theoretic quantities as measures of meaning or claim that asymptotic theorems predict every finite system.

## Summary

An outcome with probability $p(x)$ has self-information $-\log_2 p(x)$ bits. The entropy of a discrete source is the expected self-information across its possible outcomes. Conditional entropy measures remaining uncertainty after another variable is observed, and mutual information measures the average reduction in uncertainty. A communication channel supplies a conditional rule $P(Y|X)$. Channel capacity maximizes input–output mutual information over allowed input distributions. The noisy-channel coding theorem identifies a boundary between rates for which arbitrarily small error is asymptotically achievable and rates for which it is not, subject to the model.

## Prerequisites

- Finite probability distributions
- Weighted averages
- Base-2 logarithms
- Conditional probability
- Functions and simple optimization language

## Objectives

1. Separate statistical information from semantic meaning and practical value.
2. Calculate self-information and entropy for small discrete distributions.
3. Relate joint, conditional, and mutual information without treating the quantities as causal claims.
4. Interpret a discrete channel as a conditional probability model.
5. Explain capacity as an optimization over input choices for a specified channel.
6. State the noisy-channel coding theorem with its asymptotic and model-dependent boundaries.

## Concept sequence

1. Assign probabilities to source outcomes.
2. Convert outcome probability into self-information using a chosen logarithm base.
3. Average self-information to obtain source entropy.
4. Introduce a second variable and separate shared from remaining uncertainty.
5. Model transmission using $P(Y|X)$, not by assuming output equals input.
6. Evaluate mutual information for a chosen input distribution.
7. Maximize over permitted input distributions to define channel capacity.
8. Compare communication rate with capacity while keeping block length and error probability visible.

## Misconceptions to surface

- A long, meaningful, or surprising-to-a-person message does not automatically have high Shannon information.
- Entropy is an average over a distribution, not the surprise of one observed outcome.
- A bit is a unit set by a base-2 logarithm, not necessarily one stored physical bit.
- Mutual information is association in a probability model, not proof that one variable causes another.
- Capacity is not achieved by every input distribution or every code.
- “Arbitrarily small error” in an asymptotic theorem does not mean zero error for a finite code.

## Keywords

probability; self-information; bit; entropy; joint entropy; conditional entropy; mutual information; binary symmetric channel; channel capacity; code rate; asymptotic reliability

## Attribution

Adapted and reorganized from **Information theory**, **Entropy (information theory)**, **Mutual information**, **Channel capacity**, and **Noisy-channel coding theorem** by Wikipedia contributors, CC BY-SA 4.0. Exact revisions are recorded in `metadata/SOURCE_RECORD.json`.

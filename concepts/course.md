# Course Concept Map — Information Through Noise

> **Demonstration only:** this AI-generated Coursewerk package is not intended for direct use in actual teaching.

## Organizing question

How can uncertainty be measured, and how can a communication system use structure to make a message recoverable without claiming that noise has disappeared?

## Summary

The course begins with a source that produces symbols according to a probability distribution. Self-information assigns larger values to less probable outcomes, and entropy averages that surprise. A channel adds conditional uncertainty between input and output. Mutual information measures how much observing the output reduces uncertainty about the input, while capacity is the largest mutual information attainable under a channel model and permitted input choices. Coding then adds structured redundancy: valid codewords are separated in Hamming space, parity checks produce evidence about corruption, and a decoder selects or rejects candidate messages under an explicit error model.

## Concept sequence

1. A source distribution makes some outcomes more predictable than others.
2. Self-information and entropy quantify surprise without measuring semantic importance.
3. Conditional entropy and mutual information describe what remains unknown and what is learned.
4. A channel is represented by conditional probabilities linking input and output.
5. Capacity bounds asymptotically reliable rate under a specified model.
6. An encoder maps messages to a restricted, redundant set of codewords.
7. Hamming distance separates valid codewords and constrains detection and correction.
8. A decoder combines received evidence, code structure, and an error model to make a bounded decision.
9. Reliability claims must name rate, block length, decoder, channel assumptions, latency, and residual error.

## Chapter sequence

1. **Measuring Information** develops probability, self-information, entropy, conditional entropy, mutual information, channels, capacity, and theorem boundaries.
2. **Reliable Codes** develops redundancy, code rate, Hamming distance, parity checks, syndromes, correction limits, interleaving, and evidence-calibrated reliability claims.

## Cross-chapter threshold concepts

- Information-theoretic quantity is not the same as meaning, usefulness, truth, or importance.
- Noise is modeled through uncertainty in the input–output relationship; a code exploits structure but does not remove the physical disturbance.
- Capacity is model-relative and asymptotic, not a universal speed limit or a promise of zero finite-length errors.
- Redundancy consumes rate while creating distinguishability among valid messages.
- Detection, correction, erasure declaration, and retransmission are different responses to uncertainty.
- A decoder can be confidently wrong when the actual error pattern lies outside its assumptions.

## Keywords

self-information; bit; entropy; conditional entropy; mutual information; channel; capacity; noisy-channel coding theorem; redundancy; code rate; Hamming distance; parity check; syndrome; error correction; interleaving

## Attribution

Adapted and reorganized from the seven revision-bound Wikipedia sources recorded in `metadata/SOURCE_RECORD.json`, by Wikipedia contributors under CC BY-SA 4.0. Separately licensed media are recorded in `metadata/ATTRIBUTION.md`.

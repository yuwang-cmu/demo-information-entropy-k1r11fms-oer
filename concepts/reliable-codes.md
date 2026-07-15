# Concept Map — Reliable Codes

> **Demonstration only:** this AI-generated Coursewerk material is not intended for direct use in actual teaching.

## Source and scope

This chapter adapts the revision-bound Wikipedia articles **Error correction code**, **Hamming code**, **Information theory**, and **Noisy-channel coding theorem**. It emphasizes conceptual block-code reasoning, simple binary examples, and reliability claims. It does not provide a production decoder, claim that one code is universally best, or assume independent bit flips when discussing every real channel.

## Summary

An encoder maps a smaller set of messages into a larger set of transmitted symbols, creating redundancy and a restricted set of valid codewords. Hamming distance counts positions at which two equal-length words differ. A code's minimum distance determines worst-case detection and correction guarantees under a hard-decision symbol-error model. Parity checks compress consistency evidence into a syndrome; a decoder uses that evidence and an assumed error model to choose, reject, or request a new transmission. Hamming codes illustrate single-error correction, while extended variants can add double-error detection. Interleaving can spread burst errors across codewords but does not itself correct them.

## Prerequisites

- Chapter 1 source and channel models
- Binary strings and exclusive OR
- Sets, vectors, and simple matrix language
- Distinction between probability and guarantee

## Objectives

1. Explain how redundancy trades transmission rate for distinguishability.
2. Calculate Hamming distance and infer detection and correction guarantees from minimum distance.
3. Interpret parity checks and syndromes as evidence about a received word.
4. Distinguish error detection, correction, declared erasure, and retransmission.
5. Compare block coding, interleaving, concatenation, and retransmission as different design layers.
6. Audit a reliability claim against its channel model, decoder, block length, rate, latency, and residual error.

## Concept sequence

1. Map $k$ message symbols to $n$ transmitted symbols, giving code rate $R=k/n$.
2. Restrict transmission to a set of valid codewords.
3. Measure codeword separation with Hamming distance.
4. Observe a received word that may not be valid.
5. Compute parity checks and a syndrome.
6. Use an explicit decoder and error model to correct, reject, or request retransmission.
7. Validate residual error across realistic patterns, including bursts and multiple errors.
8. Compare reliability gain with rate, latency, energy, storage, and complexity costs.

## Misconceptions to surface

- Redundancy does not make the physical channel less noisy.
- A parity bit does not detect every possible multiple-bit error.
- Detecting corruption does not imply knowing the original message.
- A nonzero syndrome identifies an error pattern only relative to a particular code and decoder model.
- A standard Hamming code's single-error correction does not guarantee safe correction of two errors.
- Interleaving rearranges where a burst lands; another code or protocol supplies correction.

## Keywords

redundancy; code rate; block code; codeword; Hamming distance; minimum distance; parity check; syndrome; nearest-neighbor decoding; Hamming code; SECDED; interleaving; retransmission

## Attribution

Adapted and reorganized from **Error correction code**, **Hamming code**, **Information theory**, and **Noisy-channel coding theorem** by Wikipedia contributors, CC BY-SA 4.0. Exact revisions are recorded in `metadata/SOURCE_RECORD.json`.

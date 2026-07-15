<!-- deck
title: Chapter 2: Reliable Codes
theme: architect
ratio: 16:9
author: Yu Wang
footer: Coursewerk demonstration · Not for actual teaching · CC BY-SA 4.0
-->

<!-- slide template=title v=4 -->
# Reliable Codes
## Redundancy, distance, and error correction

**AI-generated Coursewerk demonstration—not intended for actual teaching**

<!-- slide 2col -->
## Learning objectives
<!-- @left -->
- {{sp[info] 2.1}} Calculate rate and explain redundancy
- {{sp[info] 2.2}} Use Hamming distance and $d_{min}$
- {{sp[info] 2.3}} Interpret parity checks and syndromes
<!-- @right -->
- {{sp[info] 2.3}} Bound Hamming-code correction
- {{sp[info] 2.4}} Separate correction and retransmission
- {{sp[info] 2.4}} Audit reliability evidence

<!-- slide template=outline v=4 -->
# Chapter route
- Messages → restricted codeword set
- Redundancy → separation
- Hamming distance → guarantee
- Parity checks → syndrome evidence
- Decoder → correction, erasure, or failure
- Tests → bounded reliability claim

<!-- slide main-side 3/2 -->
## A physical message still needs a code
<!-- @main -->
![A gloved technician holds a Voyager Golden Record during production.](https://alembic.orz.how/d/doc-0yq7y9w9g08d)
<!-- @side -->
Durability is not enough.

A receiver needs conventions for:

- symbols
- timing
- representation
- decoding
- error handling

*NASA/JPL · public domain*

<!-- slide template=section v=2 -->
# 2.1 Redundancy
## Use fewer valid strings to make corruption visible

<!-- slide 2col -->
## Rate names the trade-off
<!-- @left -->
Map $k$ message bits to $n$ transmitted bits.

$$
R=\frac{k}{n}
$$
<!-- @right -->
For a $(7,4)$ block code:

$$
R=\frac47\approx0.571
$$

Three positions carry redundancy.

<!-- slide 2col -->
## Repetition code: visible structure
<!-- @left -->
$$
0\mapsto000
$$

$$
1\mapsto111
$$
<!-- @right -->
- rate $1/3$
- distance 3
- one flip: correctable
- two flips: majority decoder fails

==The label “error-correcting” is not an unlimited guarantee.==

<!-- slide step -->
## One parity bit
1. Append a bit to make the number of ones even.
2. One flip changes parity → detected.
3. Any odd number of flips → detected.
4. An even number may pass.
5. Passing means “no error detected,” not “no error.”

<!-- slide template=section v=3 -->
# 2.2 Hamming distance
## Count positions in which words differ

<!-- slide main-side 3/2 -->
## Distance creates decoding neighborhoods
<!-- @main -->
![Two codewords at distance three have disjoint one-error neighborhoods.](https://alembic.orz.how/d/doc-rnvd5wsk2a50)
<!-- @side -->
$$
d_{min}=3
$$

- detect every 1- or 2-bit error
- correct every 1-bit error
- larger patterns: no universal guarantee

<!-- slide 2col -->
## General distance bounds
<!-- @left -->
Guaranteed detection:

$$
d_{min}-1
$$

errors.
<!-- @right -->
Guaranteed correction:

$$
t=\left\lfloor\frac{d_{min}-1}{2}\right\rfloor
$$

errors.

<!-- slide quad -->
## Four different outcomes
<!-- @tl -->
### Accept
Checks support a valid word.
<!-- @tr -->
### Correct
Select one candidate under a model.
<!-- @bl -->
### Erase
Declare that evidence is insufficient.
<!-- @br -->
### Retransmit
Use feedback for another observation.

<!-- slide 2col -->
## Guarantee versus probability
<!-- @left -->
### Minimum distance
Worst-case combinatorial statement.

Which patterns are guaranteed?
<!-- @right -->
### Error rate
Average under a stochastic model or test.

How often did failure occur?

:::warning
Neither quantity replaces the other.
:::

<!-- slide template=section v=4 -->
# 2.3 Parity checks and syndromes
## Compress constraint violations into evidence

<!-- slide 2col -->
## Linear-code check
<!-- @left -->
Valid codeword:

$$
Hc^T=0\pmod2
$$
<!-- @right -->
Received word:

$$
s=Hr^T\pmod2
$$

The syndrome labels a coset—not certainty about history.

<!-- slide main-side 3/2 -->
## Single-bit decoding workflow
<!-- @main -->
![Received 0111011 has syndrome 100; position four is flipped to candidate 0110011 and checks are repeated.](https://alembic.orz.how/d/doc-l87bjtyhuzz7)
<!-- @side -->
Under the one-error model:

1. compute syndrome
2. match a column
3. flip candidate bit
4. recheck

Multiple errors can imitate another column.

<!-- slide 2col -->
## Hamming $(7,4)$
<!-- @left -->
- 4 message bits
- 7 transmitted bits
- 16 codewords
- minimum distance 3
<!-- @right -->
### Guarantee
Single-error correction.

### Not guaranteed
Safe correction of two errors.

<!-- slide 2col -->
## Extended Hamming
<!-- @left -->
Add an overall parity coordinate.

Typical minimum distance becomes 4.
<!-- @right -->
### SECDED use
- correct one error
- detect two errors
- do not claim two-error correction

<!-- slide step -->
## Why a zero syndrome is bounded evidence
1. The received word satisfies all parity checks.
2. It may equal the transmitted codeword.
3. Or corruption may map one valid codeword to another.
4. Report “no violation detected.”
5. Do not report “the channel was error-free.”

<!-- slide template=section v=5 -->
# 2.4 Reliability as a stack
## Coding, ordering, feedback, and evidence

<!-- slide 3col -->
## Different mechanisms solve different problems
<!-- @left -->
### Code
Adds constraints and distance.
<!-- @mid -->
### Interleaver
Redistributes a burst across blocks.
<!-- @right -->
### Retransmission
Uses detection plus feedback.

<!-- slide 2col -->
## Interleaving does not correct
<!-- @left -->
Write codewords as rows.

Transmit by columns.

A short burst hits adjacent transmitted symbols.
<!-- @right -->
After deinterleaving, errors may be spread one per row.

The component code performs correction.

Cost: delay and memory.

<!-- slide quad -->
## A complete reliability claim names…
<!-- @tl -->
### Event
Bit, block, packet, or service failure?
<!-- @tr -->
### Model
Independent flips, bursts, erasures, drift?
<!-- @bl -->
### Mechanism
Code, rate, length, decoder, protocol?
<!-- @br -->
### Evidence
Proof, simulation, stress test, field data?

<!-- slide step -->
## Evidence ladder
1. Algebraic constraints
2. Exhaustive small-pattern tests
3. Stochastic simulation
4. Mismatch and burst stress tests
5. Physical-link test
6. Operational residual-error monitoring

<!-- slide template=closing v=4 -->
# Reliable does not mean infallible
## It means a named outcome is supported under named assumptions.

**Code + decoder + channel model + evidence → bounded claim**

<!-- slide -->
## Sources and media
- Revision-bound Wikipedia sources: *Error correction code*, *Hamming code*, *Information theory*, and *Noisy-channel coding theorem*; Wikipedia contributors, CC BY-SA 4.0.
- NASA/JPL Voyager Golden Record photograph: public domain.
- Two diagrams: original work by Yu Wang, CC BY-SA 4.0.
- Exact source revisions, rights evidence, and modifications: `metadata/SOURCE_RECORD.json` and `metadata/ATTRIBUTION.md`.

**Demonstration only—not intended for actual teaching.**

# Chapter 2: Reliable Codes—Redundancy, Distance, and Error Correction

:::warning
**Demonstration only:** This chapter shows what an AI agent can produce by following Coursewerk. It is not intended for direct use in actual teaching and has not received classroom or subject-matter validation.
:::

:::info
**Reference:** Seven-article, revision-bound English Wikipedia corpus; exact revisions in `metadata/SOURCE_RECORD.json`  
**Audience:** Introductory undergraduate learners across mathematics, computing, engineering, and information science  
**Package license:** CC BY-SA 4.0  
**Scope boundary:** Conceptual binary block codes and bounded reliability claims; not a production decoder specification
:::

:::success
**Chapter Learning Objectives**

- **2.1a–b:** Explain how redundancy trades rate for distinguishability; calculate code rate.
- **2.2a–b:** Calculate Hamming distance and infer detection and correction guarantees.
- **2.3a–b:** Interpret parity checks and syndromes; distinguish Hamming and extended-Hamming claims.
- **2.4a–b:** Compare correction, erasure, retransmission, and interleaving; audit reliability evidence.
:::

## Chapter Logic

Noise can make a received word differ from the transmitted word. If every possible bit string is a valid message, the receiver has no structural basis for deciding whether anything changed. An error-correcting code deliberately uses only a subset of possible transmitted strings. The unused strings become space between valid messages. A decoder uses that space—and assumptions about likely corruption—to infer, reject, or request another observation.

![Two codewords at Hamming distance three have separate radius-one error neighborhoods.](https://alembic.orz.how/d/doc-rnvd5wsk2a50)

**Visual description:** Valid words `000000` and `111000` differ in three positions. Each is surrounded by strings one bit away. Because those radius-one neighborhoods do not overlap, a received word with at most one flipped bit has a unique nearest valid word in this two-codeword illustration.

:::warning
**Reliability boundary:** A code does not remove noise. It changes the set of valid transmitted patterns so that some corruptions can be detected or corrected under a stated model. Errors outside that model can be undetected or miscorrected.
:::

## 2.1 Redundancy Buys Distinguishability{{attrs[#blk-redundancy21]}}

:::success
**Learning Objectives**

- Calculate code rate from message and codeword lengths.
- Explain why added symbols can create recoverable structure.
:::

A binary block encoder maps $k$ message bits into an $n$-bit codeword. Its **code rate** is

$$
R=\frac{k}{n}.
$$

The extra $n-k$ symbols are redundancy. They reduce the fraction of transmitted symbols that directly represent new message bits, but can separate valid codewords and provide consistency checks.

The threefold repetition code maps

$$
0\mapsto000,\qquad1\mapsto111.
$$

Its rate is $1/3$. If at most one bit flips, nearest-codeword or majority decoding recovers the original bit. With two flips, the same decoder chooses the wrong codeword. The code's behavior follows from distance and the assumed number of errors, not from the label “error-correcting.”

:::: tabs
::: tab Problem
An encoder maps 4 message bits to a 7-bit codeword. What is the rate, redundancy fraction, and expansion factor?
:::
::: tab Work
The rate is

$$
R=\frac47\approx0.571.
$$

Three of seven transmitted positions are redundant, so the redundancy fraction is $3/7\approx0.429$. Each 4-bit message becomes 7 transmitted bits, an expansion factor of $7/4=1.75$.
:::
::: tab Boundary
These ratios do not state how many errors are correctable. That depends on the codeword geometry and decoder, not only on $n-k$.
:::
::::

### One parity bit: useful but limited

An even-parity encoder appends one bit so that the total number of ones is even. If one bit flips, the received word has odd parity and the check fails. More generally, it detects any odd number of bit flips. An even number of flips can preserve even parity and pass undetected.

For data `1011`, which contains three ones, the appended even-parity bit is `1`, producing `10111`. This extra bit provides detection evidence but usually does not identify which position changed.

:::: tabs
::: tab Diagnose
A five-bit even-parity word passes its parity check. May the receiver conclude that no bit changed?
:::
::: tab Answer
No. Passing means only that the received word satisfies the parity constraint. Zero, two, four, or another even number of flips can preserve the check. The conclusion must be “no error detected by this check,” not “no error occurred.”
:::
::::

### A physical message still needs conventions

![A gloved technician holds a gold-plated Voyager record during production.](https://alembic.orz.how/d/doc-0yq7y9w9g08d)

The Voyager Golden Record is a physical message, but its recoverability depends on far more than durable material. A receiver would need to infer symbol conventions, timing, representation, and decoding instructions. Error-correcting codes solve a narrower problem: recovering symbols within a defined representation and channel model. They do not automatically solve interpretation, shared context, or semantics.

*Image credit: NASA/JPL, Voyager Golden Record during production, circa 1977; U.S. federal government work, public domain, via Wikimedia Commons; used without modification.*

## 2.2 Hamming Distance Turns Space into a Guarantee{{attrs[#blk-distance22]}}

:::success
**Learning Objectives**

- Compute Hamming distance between equal-length words.
- Use minimum distance to state worst-case detection and correction guarantees.
:::

The **Hamming distance** $d(x,y)$ between equal-length words is the number of positions in which they differ. For example,

$$
d(101101,100001)=2,
$$

because positions 3 and 4 differ.

For a code $\mathcal C$, the **minimum distance** is the smallest distance between distinct codewords:

$$
d_{\min}=\min_{x\ne y\in\mathcal C} d(x,y).
$$

Under a hard-decision symbol-error model, a code with minimum distance $d_{\min}$:

- detects every pattern of up to $d_{\min}-1$ errors;
- corrects every pattern of up to

$$
t=\left\lfloor\frac{d_{\min}-1}{2}\right\rfloor
$$

errors using an appropriate bounded-distance decoder.

These are worst-case guarantees within the model. A code can sometimes detect or correct larger patterns, but not all of them.

:::: tabs
::: tab Calculate
A code has $d_{\min}=5$. How many errors are guaranteed detectable? How many are guaranteed correctable?
:::
::: tab Answer
It detects all patterns of up to $5-1=4$ errors. It corrects all patterns of up to

$$
\left\lfloor\frac{5-1}{2}\right\rfloor=2
$$

errors.
:::
::: tab Explain
Radius-2 neighborhoods around codewords are disjoint because two such neighborhoods could overlap only if two codewords were at most four positions apart. Distance five prevents that overlap.
:::
::::

### Detection is not correction

If a received word violates a code constraint, corruption has been detected. Correction additionally requires enough evidence to select one original codeword. A protocol can instead declare an **erasure**—“I cannot decide”—or request retransmission. Which response is best depends on feedback availability, latency, energy, and consequence of an undetected error.

### Guarantees and probabilities answer different questions

Minimum distance answers a combinatorial worst-case question. A bit-error probability and decoder simulation answer an average-performance question under a probability model. Neither replaces the other:

- distance alone does not give the probability of each error pattern;
- a low measured average error rate does not prove a worst-case guarantee;
- a decoder matched to independent flips may perform poorly on bursts or structured faults.

## 2.3 Parity Checks Turn Violations into Syndromes{{attrs[#blk-syndrome23]}}

:::success
**Learning Objectives**

- Interpret a parity-check matrix and syndrome conceptually.
- Explain the single-error boundary of a Hamming $(7,4)$ code.
:::

For a binary linear code, valid codewords $c$ satisfy

$$
Hc^T=0\pmod 2,
$$

where $H$ is a parity-check matrix. For a received word $r$, the **syndrome** is

$$
s=Hr^T\pmod 2.
$$

A zero syndrome means the received word satisfies the checks. It does not prove that no error occurred; an error pattern that transforms one valid codeword into another also has zero syndrome.

One common parity-check arrangement for a Hamming $(7,4)$ code assigns positions 1 through 7 the nonzero three-bit labels `001`, `010`, `011`, `100`, `101`, `110`, and `111`. Equivalently, valid bits $c_i$ satisfy three XOR checks:

$$
c_1\oplus c_3\oplus c_5\oplus c_7=0,
$$

$$
c_2\oplus c_3\oplus c_6\oplus c_7=0,
$$

$$
c_4\oplus c_5\oplus c_6\oplus c_7=0.
$$

Each single-bit error produces the three-bit label of its position. Reading the syndrome in high-to-low check order identifies the bit position. This elegant rule depends on the one-error model.

![A seven-bit received word enters parity checks; syndrome 100 identifies candidate position four, which is flipped and rechecked.](https://alembic.orz.how/d/doc-l87bjtyhuzz7)

**Visual description:** Received `0111011` differs from valid codeword `0110011` at position 4. Its syndrome is `100` when written high-order row first, matching position 4. The workflow flips that candidate position and repeats the checks. A warning states that multiple errors can mislead the decoder.

:::: tabs
::: tab Verify
Using the displayed parity equations, verify that `0110011` is a codeword and that flipping position 4 gives syndrome `100` when the third check is written as the high-order syndrome bit.
:::
::: tab Work
For `0110011`, each check contains an even number of ones, so the syndrome is `000`.

Flipping position 4 changes only the third displayed check. Written with that check as the high-order bit, the syndrome is `100`, identifying position 4.
:::
::: tab Boundary
With two flipped bits, the syndrome is the XOR of two columns. That sum can equal a third column, so a single-error decoder may “correct” the wrong position and create another valid or invalid candidate.
:::
::::

### Hamming versus extended Hamming

A standard binary Hamming code has minimum distance 3: it guarantees single-error correction. Adding an overall parity bit can produce an **extended Hamming code** with minimum distance 4. A common SECDED use combines single-error correction with double-error detection under the assumed hard-decision model.

Do not silently transfer the SECDED label to an unextended distance-3 Hamming code. Also, “double-error detected” does not mean the original word can be recovered from every two-error pattern.

## 2.4 Reliability Is a Stack of Decisions{{attrs[#blk-stack24]}}

:::success
**Learning Objectives**

- Compare interleaving, coding, erasure, and retransmission as distinct layers.
- Audit an end-to-end reliability claim.
:::

Real systems combine mechanisms:

- **Block codes** add constraints within finite codewords.
- **Convolutional or modern iterative codes** link decisions across longer structures.
- **Interleaving** reorders symbols so that a physical burst may be distributed across several codewords.
- **Checksums or cyclic redundancy checks** strengthen error detection at another layer.
- **Automatic repeat request** uses feedback to retransmit when detection declares failure.
- **Erasure decoding** uses knowledge that some positions are unreliable or missing.
- **Concatenation** lets an outer and inner code address different patterns or complexity scales.

Interleaving itself adds no correction. If four codewords are written as rows and transmitted column by column, a four-symbol burst may place one corrupted symbol in each row after deinterleaving. A component code can then attempt one-error correction per row. The benefit depends on burst length, interleaver depth, delay, and the component code.

:::: tabs
::: tab Compare
System A uses a strong code with no feedback. System B uses a lighter detection code and retransmission. Which is more reliable?
:::
::: tab Answer
The question is under-specified. Compare channel conditions, feedback reliability, latency limit, energy, allowable retransmissions, decoder behavior, block size, traffic pattern, and the consequence of residual undetected error. Either design can be preferable in a different context.
:::
::::

### A reliability claim needs a denominator

“99.999% reliable” is incomplete. It could mean:

- fraction of blocks decoded without detected failure;
- fraction of information bits correct after decoding;
- probability of no undetected error per hour;
- availability of a service;
- success under a particular simulated channel;
- confidence bound from a limited test sample.

A defensible report identifies the event, denominator, time or block scale, confidence or bound, channel model, decoder, and test conditions.

### Evidence ladder for coded communication

1. **Algebraic check:** codewords satisfy stated constraints.
2. **Injected-pattern test:** all guaranteed error patterns are enumerated for small codes.
3. **Simulation:** performance is estimated under an explicit stochastic channel.
4. **Stress test:** bursts, drift, synchronization faults, and mismatch are added.
5. **Physical-link test:** hardware, timing, energy, and environment enter.
6. **Operational evidence:** end-to-end residual failures are monitored with clear denominators.

No rung automatically proves the next. A correct syndrome table does not establish field reliability; a field average does not establish adversarial robustness.

## Synthesis

Reliable decoding is an inference pipeline:

1. An encoder restricts messages to structured codewords.
2. A channel produces an observation that may violate the structure.
3. Checks summarize that violation as evidence.
4. A decoder interprets evidence under an error model.
5. A protocol accepts, corrects, erases, or retransmits.
6. Validation tests whether the assumptions match deployment.

The central habit is to replace “the code fixes errors” with a bounded statement: **this encoder and decoder, at this rate and block length, under this error model, guarantee or empirically achieve this named outcome.**

## Asset and License Record for This Chapter

- `assets/golden-record.jpg` — NASA/JPL, public domain; used without modification.
- `assets/hamming-space.svg` — original accessible diagram by Yu Wang, CC BY-SA 4.0.
- `assets/syndrome-decoding.svg` — original accessible diagram by Yu Wang, CC BY-SA 4.0.

**Text adaptation:** Adapted and reorganized from the revision-bound Wikipedia sources named at the beginning of this chapter, by Wikipedia contributors under CC BY-SA 4.0. Exact revisions and retrieval hashes are recorded in `metadata/SOURCE_RECORD.json`.

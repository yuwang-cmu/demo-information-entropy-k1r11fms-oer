# Chapter 2 Practice: Reliable Codes

:::warning
**Demonstration only:** This practice set shows what Coursewerk can produce. It is not intended for direct use in actual teaching.
:::

These 15 items cover every chapter objective. Attempt each question before revealing the worked answer.

**(Objective 1 · rate)**

:::: tabs
::: tab Q
A block code maps 6 message bits to 10 transmitted bits. Find its rate, redundancy fraction, and expansion factor.
:::
::: tab Answer
$$
R=6/10=0.6,
$$

the redundancy fraction is $4/10=0.4$, and the expansion factor is $10/6\approx1.67$. These values do not determine minimum distance.
:::
::::

**(Objective 1 · repetition decoding)**

:::: tabs
::: tab Q
Using $0\mapsto000$ and $1\mapsto111$, decode `101` by nearest codeword. State the assumption.
:::
::: tab Answer
`101` is distance 2 from `000` and distance 1 from `111`, so nearest-codeword decoding selects message 1. The correction is guaranteed only if at most one bit was corrupted; with two flips from `000`, the same received word would be misdecoded.
:::
::::

**(Objective 1 · parity boundary)**

:::: tabs
::: tab Q
An even-parity word passes its check. What can and cannot be concluded?
:::
::: tab Answer
The receiver can conclude that no violation was detected by the parity check. It cannot conclude that no error occurred, because any even number of bit flips preserves parity.
:::
::::

**(Objective 2 · distance calculation)**

:::: tabs
::: tab Q
Find $d(101101,100001)$.
:::
::: tab Answer
The words differ at positions 3 and 4, so the Hamming distance is 2.
:::
::::

**(Objective 2 · codebook audit)**

:::: tabs
::: tab Q
For codewords `{0000, 1110, 1001}`, find $d_{\min}$ and the guaranteed detection/correction capability.
:::
::: tab Answer
The pairwise distances are 3, 2, and 3, so $d_{\min}=2$. The code detects every one-bit error. It has no guaranteed correction of even one error because $\lfloor(2-1)/2\rfloor=0$.
:::
::::

**(Objective 2 · general bound)**

:::: tabs
::: tab Q
A code has $d_{\min}=5$. State its guaranteed hard-decision error detection and correction.
:::
::: tab Answer
It detects all patterns of up to 4 symbol errors and corrects all patterns of up to $\lfloor4/2\rfloor=2$ errors with an appropriate bounded-distance decoder.
:::
::::

**(Objectives 2 and 4 · ambiguity)**

:::: tabs
::: tab Q
A received word is equally close to two codewords. Should a nearest-neighbor decoder silently select the first one listed?
:::
::: tab Answer
Not without an explicit tie rule and consequences. The evidence is ambiguous under pure nearest-neighbor distance. Declaring an erasure or using soft information may be more defensible; silently using list order is not a coding guarantee.
:::
::::

**(Objective 3 · valid Hamming word)**

:::: tabs
::: tab Q
Using the chapter's three parity-check equations, verify conceptually why `0110011` has zero syndrome.
:::
::: tab Answer
Each parity-check row overlaps an even number of ones: row 1 checks positions 1,3,5,7; row 2 checks 2,3,6,7; row 3 checks 4,5,6,7. Each XOR is zero, so the syndrome is `000`.
:::
::::

**(Objective 3 · single-error syndrome)**

:::: tabs
::: tab Q
Flip position 4 of `0110011`. What syndrome results under the chapter's convention, and what candidate correction follows?
:::
::: tab Answer
The received word is `0111011`. Its syndrome equals column 4, `[0,0,1]^T`, written as `100` with the third row as the high-order bit. A one-error decoder flips position 4 and rechecks, returning candidate `0110011`.
:::
::::

**(Objectives 3–4 · two-error risk)**

:::: tabs
::: tab Q
Why can two errors mislead a single-error Hamming decoder?
:::
::: tab Answer
The syndrome of two flipped positions is the XOR of their two parity-check columns. In a Hamming matrix, that XOR can equal another nonzero column. A decoder assuming one error then points to a third position and may miscorrect.
:::
::::

**(Objective 4 · Hamming versus extended)**

:::: tabs
::: tab Q
Repair: “Every Hamming code corrects two errors because it can detect them.”
:::
::: tab Answer
“A standard binary Hamming code has minimum distance 3 and guarantees single-error correction. Adding an overall parity bit can form an extended distance-4 code used for single-error correction and double-error detection; detection of two errors does not imply correction of both.”
:::
::::

**(Objective 3 · zero syndrome)**

:::: tabs
::: tab Q
Give the strongest defensible interpretation of a zero syndrome.
:::
::: tab Answer
The received word satisfies the code's parity checks. It may be the transmitted word, or an error pattern may have moved transmission to another valid codeword. Say “no violation detected,” not “no error occurred.”
:::
::::

**(Objective 5 · interleaving)**

:::: tabs
::: tab Q
Four codewords are interleaved column by column. A four-symbol burst occurs. What does the interleaver contribute, and what performs correction?
:::
::: tab Answer
After deinterleaving, the burst may become roughly one corrupted symbol in each codeword rather than four in one. The component code performs any correction. The interleaver only rearranges positions and adds delay and memory costs.
:::
::::

**(Objective 5 · feedback trade-off)**

:::: tabs
::: tab Q
Compare strong forward error correction with light detection plus retransmission for a one-way deep-space link and a low-latency local network.
:::
::: tab Answer
The long feedback delay of a deep-space link can make retransmission costly, favoring stronger forward correction despite overhead and decoding complexity. A local network may exploit rapid feedback and lighter coding. The choice still depends on energy, traffic, channel pattern, and consequence of residual failure.
:::
::::

**(Objective 6 · reliability audit)**

:::: tabs
::: tab Q
A product claims “99.999% reliable error correction.” Name at least six fields needed to evaluate it.
:::
::: tab Answer
Define the failure event and denominator; code and rate; block length; decoder and tie/erasure rule; channel or injected-error model; test size and duration; confidence interval or bound; burst and mismatch tests; latency and retransmission policy; and residual undetected-error rate. “Reliable” alone is not measurable.
:::
::::

**Text adaptation:** Chapter concepts are adapted and reorganized from the revision-bound Wikipedia sources in `metadata/SOURCE_RECORD.json`, CC BY-SA 4.0.

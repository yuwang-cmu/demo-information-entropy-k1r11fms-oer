# Chapter 1 Practice: Measuring Information

:::warning
**Demonstration only:** This practice set shows what Coursewerk can produce. It is not intended for direct use in actual teaching.
:::

These 15 items cover every chapter objective. Attempt each question before revealing the worked answer.

**(Objective 1 · claim repair)**

:::: tabs
::: tab Q
Repair this claim: “Message B has lower probability than message A, so B is more meaningful.”
:::
::: tab Answer
“Under the stated probability model, B has greater self-information because $I(x)=-\log p(x)$. The calculation does not establish that B is more meaningful, useful, true, or important.”
:::
::::

**(Objective 2 · self-information)**

:::: tabs
::: tab Q
Find the self-information of outcomes with probabilities $1/2$, $1/16$, and $1$, using base 2.
:::
::: tab Answer
$$
I(1/2)=1,\qquad I(1/16)=4,\qquad I(1)=0\text{ bits}.
$$

A certain outcome resolves no uncertainty under the model.
:::
::::

**(Objective 2 · additivity)**

:::: tabs
::: tab Q
Independent outcomes have probabilities $1/4$ and $1/8$. Find their joint self-information in two ways.
:::
::: tab Answer
The joint probability is $1/32$, so $I=-\log_2(1/32)=5$ bits. Separately, the outcomes carry 2 and 3 bits, which add to 5 because independence makes probabilities multiply.
:::
::::

**(Objective 2 · fair source entropy)**

:::: tabs
::: tab Q
A source is uniform over eight symbols. What is its entropy?
:::
::: tab Answer
Each symbol has probability $1/8$ and self-information 3 bits. The expected value is therefore $H=3$ bits per source symbol.
:::
::::

**(Objective 2 · weighted entropy)**

:::: tabs
::: tab Q
Calculate the entropy of probabilities $(1/2,1/4,1/8,1/8)$.
:::
::: tab Answer
$$
H=\tfrac12(1)+\tfrac14(2)+\tfrac18(3)+\tfrac18(3)=1.75\text{ bits}.
$$

The entropy is below the 2-bit maximum for four outcomes because the distribution is not uniform.
:::
::::

**(Objective 1 · model support)**

:::: tabs
::: tab Q
A model assigns probability zero to a symbol that is later observed. Should the report call the symbol “infinitely meaningful”?
:::
::: tab Answer
No. The divergence of $-\log p$ indicates that the observed event lay outside the model's stated support. Recheck the model, measurement, or probability assignment; do not convert a model failure into a semantic claim.
:::
::::

**(Objective 3 · perfect observation)**

:::: tabs
::: tab Q
$X$ is a fair bit and $Y=X$. Find $H(X)$, $H(X|Y)$, and $I(X;Y)$.
:::
::: tab Answer
$H(X)=1$ bit. Observing $Y$ determines $X$, so $H(X|Y)=0$. Therefore $I(X;Y)=H(X)-H(X|Y)=1$ bit.
:::
::::

**(Objective 3 · partial observation)**

:::: tabs
::: tab Q
Suppose $H(X)=2.0$ bits and $H(X|Y)=0.6$ bit. What is $I(X;Y)$, and what does it mean?
:::
::: tab Answer
$$
I(X;Y)=2.0-0.6=1.4\text{ bits}.
$$

On average, observing $Y$ reduces uncertainty about $X$ by 1.4 bits under the model. It does not by itself establish a causal direction.
:::
::::

**(Objective 3 · independence and causation)**

:::: tabs
::: tab Q
Two variables have positive mutual information because both respond to temperature. What causal claim is justified?
:::
::: tab Answer
The positive mutual information supports statistical dependence. It does not show that either variable causes the other; temperature is a plausible common cause. Causal claims require additional design and evidence.
:::
::::

**(Objective 4 · channel-table reading)**

:::: tabs
::: tab Q
A binary channel has $P(Y=X|X)=0.8$ and $P(Y\ne X|X)=0.2$ for both inputs. Identify the model and its crossover probability.
:::
::: tab Answer
This is a binary symmetric channel model with crossover probability $p=0.2$. The symmetry statement means the same flip probability is used for input 0 and input 1.
:::
::::

**(Objectives 3–5 · BSC calculation)**

:::: tabs
::: tab Q
For a binary symmetric channel with $p=0.1$ and uniform input, $h_2(0.1)\approx0.469$. Find mutual information and capacity.
:::
::: tab Answer
For the uniform input,

$$
I(X;Y)=1-h_2(0.1)\approx0.531\text{ bit/use}.
$$

The uniform input achieves the capacity of the symmetric channel, so $C\approx0.531$ bit/use.
:::
::::

**(Objectives 4–5 · endpoint)**

:::: tabs
::: tab Q
What happens to the capacity of a binary symmetric channel at $p=1/2$?
:::
::: tab Answer
$h_2(1/2)=1$, so $C=1-1=0$ bit/use. The output is independent of the input under this model. This does not mean the physical device emits nothing; it means the output reveals no information about the input.
:::
::::

**(Objective 5 · optimization)**

:::: tabs
::: tab Q
Why can a measured $I(X;Y)=0.4$ bit/use for one input distribution be smaller than the channel capacity?
:::
::: tab Answer
Capacity is the maximum $I(X;Y)$ over permitted input distributions. The chosen source distribution may not be capacity-achieving. The comparison also requires the same channel model and constraints.
:::
::::

**(Objective 6 · theorem boundary)**

:::: tabs
::: tab Q
Repair: “Because $R<C$, this 128-bit block is guaranteed error-free.”
:::
::: tab Answer
“Because the modeled rate is below capacity, suitable code families can make error probability arbitrarily small as block length grows. Performance of this 128-bit block requires the actual code, decoder, model validity, and a finite-length error bound or measurement.”
:::
::::

**(Objectives 1–6 · synthesis audit)**

:::: tabs
::: tab Q
A report gives “capacity = 2 Mb/s” and “zero errors” but names no channel, constraints, code, block length, decoder, or test duration. List the minimum repairs.
:::
::: tab Answer
Define input/output and the channel model; state bandwidth, timing, power or cost constraints behind the unit; identify the input distribution used for capacity; name code, rate, block length, and decoder; replace “zero errors” with an event and denominator; give test duration or mathematical bound; and state model-mismatch tests and residual uncertainty.
:::
::::

**Text adaptation:** Chapter concepts are adapted and reorganized from the revision-bound Wikipedia sources in `metadata/SOURCE_RECORD.json`, CC BY-SA 4.0.

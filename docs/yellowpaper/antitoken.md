---
sidebar_position: 1
title: Antitoken Yellowpaper
sidebar_label: Antitoken
description: Antitoken Prediction Framework for Continuous Outcomes
---
import { Collider, Equaliser } from '@site/src/components/InteractiveScript'; 

# Antitoken Collider: A Prediction Framework for Continuous Outcomes

Author: [ `sshmatrix` ](https://sshmatrix.ss.codes/) | [ `Antitoken` ](https://stage.antitoken.pro) | `quant/acc` | `q/acc` 

Ping: [dev@antitoken.pro](mailto:dev@antitoken.pro)

> This is a living document and will be updated in real time to match the development of the actual product.

## Abstract

The Antitoken Collider Protocol introduces a quantum-inspired tokenomics framework designed to advance decentralised market-making and decision-making systems. By utilising a pair of entangled tokens, `$ANTI` and `$PRO` , the protocol incorporates the Collider contract, which transforms these inputs into emission ( `$BARYON` ) and radiation ( `$PHOTON` ) tokens. This innovative mechanism integrates deterministic and probabilistic behaviours, allowing markets to reflect both stable and uncertain dynamics. The protocol’s dual-token architecture, rooted in quantum-like operations, is positioned to address challenges in prediction markets, decentralised science (DeSci), and other domains requiring nuanced representations of dualities such as trust vs. uncertainty or risk vs. reward.

## 1. Introduction

Blockchain-based decentralised systems have transformed finance and governance, offering novel mechanisms for automated market-making and resource allocation. However, traditional continuous automated market makers (AMMs) often fall short in applications where dualities, uncertainty, or non-linear outcomes are inherent. For instance, prediction markets and DeSci initiatives require tokenomics models capable of encoding probabilistic outcomes and balancing deterministic stability with dynamic adaptability.

The Antitoken Collider Protocol introduces a groundbreaking approach to these challenges by leveraging a dual-token architecture of `$ANTI` and `$PRO` tokens, which interact within a bespoke Collider contract. Inspired by principles of quantum mechanics, the Collider utilises tunable operations to emit `$BARYON` and `$PHOTON` tokens, representing predictable (deterministic) and uncertain (probabilistic) market dynamics, respectively. These emitted tokens facilitate a range of applications, from incentivising accurate predictions in market ecosystems to supporting decentralised research funding and distributed resource sharing.

This yellow paper presents the theoretical underpinnings, mathematical models, and practical applications of the Antitoken Collider Protocol. By introducing structured uncertainty, entangled token interactions, and reversible operations, this framework reimagines decentralised markets and offers a robust foundation for innovation across a variety of domains. The following sections delve into the protocol's design principles, operational mechanics, and potential use cases, setting the stage for broader adoption and adaptation in decentralised systems.

## 2. Core Mechanics

The protocol operates on a dual-token system where participants can deposit two types of tokens, `$ANTI` and `$PRO` , represented as `𝛼` and `𝛽` respectively. For any given market, the protocol calculates two fundamental values:

1. The `$BARYON` value (`μ`):

<pre>
μ = N<sub>BARYON</sub> = 0, if N<sub>ANTI</sub> + N<sub>PRO</sub> = 𝛼 + 𝛽 < 1

μ = N<sub>BARYON</sub> = |N<sub>ANTI</sub> - N<sub>PRO</sub>| = |𝛼 - 𝛽| otherwise
</pre>

i.e. 

<pre>
μ = 0, if 𝛼 + 𝛽 < 1

μ = |𝛼 - 𝛽| otherwise
</pre>

2. The `$PHOTON` value (`σ`):

<pre>
σ = N<sub>PHOTON</sub> = 0, if N<sub>ANTI</sub> + N<sub>PRO</sub> < 1 or |N<sub>ANTI</sub> - N<sub>PRO</sub>| = N<sub>ANTI</sub> + N<sub>PRO</sub>

σ = N<sub>PHOTON</sub> = N<sub>ANTI</sub> + N<sub>PRO</sub>, if 0 = N<sub>ANTI</sub> + N<sub>PRO</sub> < 1 or |N<sub>ANTI</sub> - N<sub>PRO</sub>| = N<sub>ANTI</sub> + N<sub>PRO</sub>

σ = N<sub>PHOTON</sub> = (N<sub>ANTI</sub> + N<sub>PRO</sub>)/|N<sub>ANTI</sub> - N<sub>PRO</sub>|, otherwise
</pre>

i.e.

<pre>
σ = 0, if 𝛼 + 𝛽 < 1 or |𝛼 - 𝛽| = 𝛼 + 𝛽

σ = 𝛼 + 𝛽, if 0 = 𝛼 + 𝛽 < 1 or |𝛼 - 𝛽| = 𝛼 + 𝛽

σ = (𝛼 + 𝛽)/|𝛼 - 𝛽|, otherwise
</pre>

In this formulation, `μ` captures the magnitude or size, while `σ` captures the confidence or certainty, of a user's prediction. This process is referred to as a 'collision'.

<Collider />

## 3. Closeness to Outcome

The overlap function `𝜪` plays central role in token redistribution following a prediction's finality. The overlap function is a measure of closeness of the prediction to any given truth. The overlap function is derived as follows:

<pre>
𝜪(𝞅<sub>u</sub>, 𝞅<sub>T</sub>) =〈𝞅<sub>u</sub>(𝛾)·𝞅<sub>T</sub>(𝛾)〉
</pre>

where, <code>𝞅<sub>u</sub></code> is a user's prediction and <code>𝞅<sub>T</sub></code> is the truth distribution with mean <code>T<sub>μ</sub></code> and variance <code>T<sub>σ<sup>2</sup></sub></code>; `〈 〉` represents a finite integral over the entire range of possible outcomes. Lastly, the range of `𝜪` satifies `𝜪 ∈ [0, 1]` .

<Equaliser />

### 3.1 Binary Outcomes

If the truth is binary (a strict `Yes` or `No` ), then <code>𝞅<sub>T</sub></code> becomes a dirac-delta function, i.e. <code>𝞅<sub>T</sub> = 𝞭(𝛾<sub>T</sub>)</code>. Consequently, the overlap function reduces to:

<pre>
𝜪<sub>b</sub>(𝞅<sub>u</sub>, 𝞅<sub>T</sub>) =〈𝞅<sub>u</sub>(𝛾)·𝞭(𝛾<sub>T</sub>)d𝛾 = 𝞅<sub>u</sub>(𝛾<sub>T</sub>)〉
</pre>

In explicit form, the overlap calculation for each position to the closest binary outcome (a `Yes` or `No` outcome) is defined as:

<pre>
𝜪<sub>b</sub>(N<sub>BARYON</sub>, N<sub>PHOTON</sub>) = e<sup>-log<sub>10</sub>(S<sub>ANTI</sub> + S<sub>PRO</sub> - N<sub>BARYON</sub>)<sup>2</sup></sup>/2𝞻<sup>2</sup>(N<sub>PHOTON</sub>)
</pre>

i.e.

<pre>
𝜪<sub>b</sub>(μ, σ) = e<sup>-log<sub>10</sub>(2.10<sup>9</sup> - μ)<sup>2</sup></sup>/2𝞻<sup>2</sup>(σ)
</pre>

In order to avoid very small numbers, <code>𝜪<sub>b</sub>(μ, σ)</code> is transformed such that:

<pre>
𝜪(μ, σ) = 0, if 𝜪<sub>b</sub>(μ, σ) = 0, 

𝜪(μ, σ) = 1, if 𝜪<sub>b</sub>(μ, σ) = 1, 

𝜪(μ, σ) = |log<sub>e</sub>(𝜪<sub>b</sub>(μ, σ))|<sup>-1</sup>, if 1 > 𝜪<sub>b</sub>(μ, σ) > 0, and

𝜪(μ, σ) = 1 - |log<sub>e</sub>(𝜪<sub>b</sub>(μ, σ))|<sup>-1</sup>, if 𝜪<sub>b</sub>(μ, σ) < 0.
</pre>

where:

* <code>S<sub>ANTI</sub></code>, <code>S<sub>PRO</sub></code> are the total supplies of `$ANTI` and `$PRO` respectively, 
* <code>𝞻(σ) = 1 + log<sub>10</sub>(σ)</code> for `σ > 1`, and `1` otherwise, and
* `𝞅` are normal distributions. 

## 4. Token Redistribution

The token redistribution process based on the final outcome is called equalisation, using truth distribution with mean <code>T<sub>μ</sub></code> and standard deviation <code>T<sub>σ</sub></code>. The equalisation function utilises a binning mechanism using the values calculated by the overlap function <code>𝜪(𝞅<sub>u</sub>, 𝞅<sub>T</sub>)</code> for each user prediction <code>𝞅<sub>u</sub></code>. For a set of predictions, the entire range of overlap `𝜪` is binned into `N` bins. These bins, indexed by `i` , are then filled with the total tokens in the prediction pool, as some function <code>Τ(𝜪<sub>i</sub>)</code>; in the `alpha` version, this dependence is simply linear in `i` , i.e. 

<pre>
Τ(𝜪<sub>i</sub>)<sub>[𝛼, 𝛽]</sub> = i/N × [𝛼<sub>TOTAL</sub>, 𝛽<sub>TOTAL</sub>]
</pre>

The overlap distribution is then given by:

<pre>
Γ<sub>[𝛼, 𝛽]</sub><sup>IN</sup> = [Τ(𝜪<sub>1</sub>), ..., Τ(𝜪<sub>N</sub>)]<sub>[𝛼, 𝛽]</sub>.
</pre>

Once the bins are filled, each prediction is dropped into its corresponding bin based on its overlap value `𝜪(μ, σ)` . At the end of this process, each `i` bin now additionally contains <code>k<sub>i</sub></code> members among which <code>Τ(𝜪<sub>i</sub>)</code> tokens will be redistributed. If <code>k<sub>i</sub> = 0</code> or `1` , redistribution is trivial. If <code>k<sub>i</sub> > 1</code>, then tokens in that bin are redistributed in the same proportion as they were originally deposited by the user, i.e. <code>𝛼<sub>r</sub>/Σ<sub>k<sub>i</sub></sub>𝛼<sub>r</sub> and 𝛽<sub>r</sub>/Σ<sub>k<sub>i</sub></sub>𝛽<sub>r</sub></code> for <code>r = [1, ..., k<sub>i</sub>]</code>. At the end of this procedure, each user's deposit is rebalanced according to their closeness to the true outcome. The redistributed tokens indexed by `i` are then described by:

<pre>
Γ<sub>[𝛼, 𝛽]</sub><sup>OUT</sup> = [[Γ(𝜪<sub>1, 1</sub>), ..., Γ(𝜪<sub>k<sub>1</sub>, 1</sub>)], ..., [Γ(𝜪<sub>1, i</sub>), ..., Γ(𝜪<sub>k<sub>i</sub>, i</sub>)], ..., [Γ(𝜪<sub>1, N</sub>), ..., Γ(𝜪<sub>k<sub>N</sub>, N</sub>)]]<sub>[𝛼, 𝛽]</sub>.
</pre>

Each element of this vector is given by:

<pre>
Γ(𝜪<sub>r, i</sub>)<sub>[𝛼, 𝛽]</sub> = Τ(𝜪<sub>i</sub>)<sub>[𝛼, 𝛽]</sub> × [𝛼<sub>r</sub>/Σ<sub>k<sub>i</sub></sub>𝛼<sub>r</sub>, 𝛽<sub>r</sub>/Σ<sub>k<sub>i</sub></sub>𝛽<sub>r</sub>]. 
</pre>

where 

<pre>
Τ(𝜪<sub>i</sub>) = i/N, and i = ⌊𝜪(μ, σ)/[𝜪(μ, σ)]<sub>max</sub>.
</pre>

Note that `⌊` is the floor-to-nearest-integer operator.

### 4.1 Binary Case

In the binary case, we simply set <code>𝜪 = 𝜪(μ, σ)</code> as prescribed in section 3.1.

## 5. Reward System

The net gain or loss ( `𝚫` ) is calculated as the difference between the redistributed tokens and the initial deposit:

<pre>
𝚫<sub>[𝛼, 𝛽]</sub> = Γ(𝜪<sub>r, i</sub>)<sub>[𝛼, 𝛽]</sub> - [𝛼, 𝛽] = i/N × [𝛼<sub>r</sub>·𝛼<sub>TOTAL</sub>/Σ<sub>k<sub>i</sub></sub>𝛼<sub>r</sub>, 𝛽<sub>r</sub>·𝛽<sub>TOTAL</sub>/Σ<sub>k<sub>i</sub></sub>𝛽<sub>r</sub>] - [𝛼<sub>r</sub>, 𝛽<sub>r</sub>].
</pre>

In more succinct form, 

<pre>
𝚫<sub>[𝛼, 𝛽]</sub> = Γ(𝜪<sub>r, i</sub>)<sub>[𝛼, 𝛽]</sub> - [𝛼, 𝛽] = i/N × [𝛼·𝛼<sub>TOTAL</sub>/Σ<sub>i</sub>𝛼<sub>i</sub>, 𝛽·𝛽<sub>TOTAL</sub>/Σ<sub>i</sub>𝛽<sub>i</sub>] - [𝛼, 𝛽].
</pre> 

with

<pre>
i = ⌊𝜪(μ, σ)/[𝜪(μ, σ)]<sub>max</sub>.
</pre> 

<!--

## 5. Some Examples

### 5.1 Prediction Markets

Consider a market predicting a binary outcome with the following parameters:

Example:

<pre>

</pre> 

The resulting `$BARYON` - `$PHOTON` pair would be:

<pre>

</pre> 

### 5.3 Prediction Resolution

Upon prediction resolution with truth values `[0.6, 0.4]` , the equalisation function produces normalised returns:

<pre>

</pre> 
-->

## 6. Remarks

The Antitoken Collider Protocol presents a novel approach to binary outcome markets, introducing mathematical rigor through its `$BARYON` - `$PHOTON` mechanics and equalisation function. Future development could explore multi-outcome markets and dynamic truth value adjustment mechanisms.

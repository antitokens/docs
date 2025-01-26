---
sidebar_position: 1
title: Collider
sidebar_label: Collider
description: Antitoken On-Chain Collider Program
---
import { Collider, Equaliser } from '@site/src/components/InteractiveScript'; 

# Collider Smart Contract

Author: [ `sshmatrix` ](https://sshmatrix.ss.codes/) | [ `Antitoken` ](https://stage.antitoken.pro) | `quant/acc` | `q/acc` 

Ping: [dev@antitoken.pro](mailto:dev@antitoken.pro)

> This is a living document and will be updated in real time to match the development of the actual product.

## Overview

This program implements a decentralised prediction market using two competing tokens - `$ANTI` and `$PRO` . The architecture flows from a single program ID down to individual token accounts:

* Program initialises with a state account tracking all created polls
* Each poll is derived as a PDA from the poll counter
* Polls manage paired `$ANTI`/`$PRO` token accounts for market positions
* Users deposit tokens to take market positions
* After poll end, smart contracts handle token settlement

<img src="/img/contracts/overview.png" alt="Overview" />
<div style={{ textAlign: 'center' }}>Figure 1: Overview</div>

## Program Structure

### `StateAccount`  `(40 bytes)` 

* Central authority account managing poll creation
* Tracks total polls and program authority
* Fixed size: `8` bytes for poll counter + `32` bytes for authority pubkey

### `PollAccount`  `(3465 bytes)` 

* Created per prediction market poll
* Derived using PDA seeds: `['poll', pollCount]`
* Contains poll metadata, deposits, and results:
  + String fields: `title` (`256`),  `description` (`1000`), timestamps (`128`)
  + Token tracking: `$ANTI`/`$PRO` balances (`16`)
  + `deposits` vector (`1024`)
  + Optional `equalisationResults` (`1024`)

### Structs

#### 1. `UserDeposit` 

* Tracks individual user deposits
* Records `$ANTI`/`$PRO` amounts, truth values
* Includes `withdrawn` status

#### 2. `EqualisationResult` 

* Stores final poll outcomes
* `$ANTI`/`$PRO` token return amounts
* Truth value distributions
* Settlement timestamp

The <span style={{ color: 'red' }}>red</span>/<span style={{ color: 'limegreen' }}>green</span> color scheme differentiates between `$ANTI` / `$PRO` token flows through the system accounts.

<img src="/img/contracts/core.png" alt="Core" />
<div style={{ textAlign: 'center' }}>Figure 2: Core</div>

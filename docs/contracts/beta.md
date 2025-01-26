---
sidebar_position: 1
title: Collider
sidebar_label: Collider
description: Antitoken On-Chain Collider Program
---
import { Collider, Equaliser } from '@site/src/components/InteractiveScript'; 

# Collider Smart Contract

Author: [ `sshmatrix` ](https://sshmatrix.ss.codes/) | [ `github` ](https://github.com/antitokens/solana-collider) | `quant/acc` | `q/acc` 

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

### State Account

* Central authority account managing poll creation
* Tracks total polls and program authority
* Fixed size: `8` bytes for poll counter + `32` bytes for authority pubkey

### Poll Account

* Created per prediction market poll
* Derived using PDA seeds: `['poll', pollCount]`
* Contains poll metadata, deposits, and results:
  + String fields: 
    - `title` (`256` bytes)  
    - `description` (`1000`) 
    - `startTime` (`64` bytes) 
    - `endTime` (`64` bytes)
  + Token tracking: 
    - Total `$ANTI` in each poll's pool (`16` bytes)
    - Total `$PRO` in each poll's pool (`16` bytes)
  + `deposits` vector (`1024` bytes)
  + Optional `equalisationResults` (`1024` bytes)

### Data Structs

#### `UserDeposit` 

* Tracks individual user deposits
* Records `$ANTI`/`$PRO` amounts, truth values
* Includes `withdrawn` status

#### `EqualisationResult` 

* Stores final poll outcomes
* `$ANTI`/`$PRO` token return amounts
* Truth value distributions
* Settlement timestamp

The <span style={{ color: 'red' }}>red</span>/<span style={{ color: 'limegreen' }}>green</span> color scheme differentiates between `$ANTI` / `$PRO` token flows through the system accounts.

<img src="/img/contracts/core.png" alt="Core" />
<div style={{ textAlign: 'center' }}>Figure 2: Core</div>

## Events

The program emits events at key state transitions for off-chain indexing:

### `PollCreatedEvent` 

```typescript
{
    pollCount: u64,      // Unique identifier
    address: Pubkey,     // Poll creator
    title: String,       // Poll title
    description: String, // Poll description
    startTime: String,   // ISO timestamp
    endTime: String,     // ISO timestamp
    timestamp: i64       // Creation time
}
```

### `DepositEvent` 

```typescript
{
    pollCount: u64,         // Referenced poll
    address: Pubkey,        // Depositor address
    anti: u64,              // $ANTI deposit amount
    pro: u64,               // $PRO deposit amount  
    u: u64,                 // Truth value u
    s: u64,                 // Truth value s
    timestamp: i64          // Deposit time
}
```

### `EqualisationEvent` 

```typescript
{
    pollCount: u64,            // Referenced poll
    truth: Vec<u64>,           // Final truth values
    anti: u64,                 // Total $ANTI pooled
    pro: u64,                  // Total $PRO pooled
    timestamp: i64             // Equalisation time
}
```

### `WithdrawEvent` 

```typescript
{
    pollCount: u64,       // Referenced poll
    address: Pubkey,      // Withdrawer address
    anti: u64,            // $ANTI withdrawn
    pro: u64,             // $PRO withdrawn
    timestamp: i64        // Withdrawal time
}
```

These events enable off-chain indexing for market analytics, user positions tracking, and historical data analysis.

---
title: Pin Functions
description: XW37-BLE module special pin functions
---

# Pin Functions

## Status LED (P01/Pin 13)

| Signal Level | Status      |
| :----------- | :---------- |
| **High**     | Unconnected |
| **Low**      | Connected   |

## MCU Wakeup (P00/Pin 14)

| Signal Level    | Description                   |
| :-------------- | :---------------------------- |
| **Default**     | Low                           |
| **High**        | Receiving data from App       |
| **Returns Low** | After data reception complete |

## Power Control (P23/Pin 15)

| Signal Level         | Mode             |
| :------------------- | :--------------- |
| **Low**              | DEEP SLEEP       |
| **High or Floating** | Normal operation |

::: tip
Pull P23 (Pin 15) low to enter DEEP SLEEP mode, achieving power consumption as low as 0.8µA.
:::

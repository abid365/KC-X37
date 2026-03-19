---
title: Work Modes
description: XW37-BLE module work modes and configuration
---

# Work Modes

## UART Configuration

The BLE and MCU communicate via UART. Default configuration:

- **Baud Rate:** 9600
- **Data Bits:** 8
- **Parity:** None
- **Stop Bits:** 1

## Data Formats

### Transparent Mode

The module forwards MCU data to the App and App data to the MCU without modification. Data passes through directly.

### Instruction Mode (AT Mode)

AT commands can be sent via App or PC serial tools for configuration. Commands must end with `\r\n`.

## Mode Switching

| Action        | Command       | Notes                       |
| :------------ | :------------ | :-------------------------- |
| Enter AT Mode | `+++`         | No `\r\n` required          |
| Exit AT Mode  | `AT+exit\r\n` | Returns to transparent mode |

## Serial Switch (P03/Pin 24)

| Signal Level | Mode             |
| :----------- | :--------------- |
| **High**     | Transparent mode |
| **Low**      | Low power mode   |

::: tip
Use P03 pin to switch between transparent mode and low power mode without sending AT commands.
:::

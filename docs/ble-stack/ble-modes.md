---
title: BLE Modes
description: XW37-BLE module Bluetooth operating modes
---

# BLE Modes

## Supported Modes

The XW37-BLE supports:

- **Bluetooth 4.2 Master mode**
- **Bluetooth 4.2 Slave mode**
- **WeChat AirSync protocol**

## Default Configuration

| Parameter                     | Default Value            |
| :---------------------------- | :----------------------- |
| **Work Mode**                 | Transparent transmission |
| **Bluetooth Name**            | "BleSerialPort"          |
| **Advertising Interval**      | 50ms (max and min)       |
| **Connection Interval (Max)** | 45ms (36 × 1.25ms)       |
| **Connection Interval (Min)** | 30ms (24 × 1.25ms)       |
| **Connection Latency**        | 2                        |
| **Connection Timeout**        | 1000ms                   |

## Status Codes

| Code | Status      |
| :--- | :---------- |
| `00` | Idle        |
| `01` | Advertising |
| `02` | Connected   |
| `03` | Scannable   |
| `04` | Non-scan    |

::: info
The module operates as a BLE slave by default, advertising as "BleSerialPort" and waiting for connections from master devices.
:::

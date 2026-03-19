---
title: UUID
description: XW37-BLE module Bluetooth UUIDs
---

# UUID Configuration

## Service and Characteristics

The XW37-BLE module uses the following BLE UUIDs for communication:

| Type                 | UUID     | Description            |
| :------------------- | :------- | :--------------------- |
| **Service UUID**     | `0xFFB0` | Primary BLE service    |
| **Characteristic 1** | `0xFFB1` | Write Without Response |
| **Characteristic 2** | `0xFFB2` | Read Notify            |

## UUID Details

### Service UUID (0xFFB0)

The primary service UUID that identifies the XW37-BLE module's BLE service.

### Characteristic 0xFFB1 - Write Without Response

Allows the connected device to send data to the module without requiring a response. Used for:

- Sending commands to the module
- Transmitting data from App to MCU

### Characteristic 0xFFB2 - Read Notify

Supports:

- Reading data from the module
- Receiving notifications from the module
- Receiving data from the module (MCU to App)

::: info
These UUIDs are used for BLE communication between the module and connected devices (Apps, master devices, etc.).
:::

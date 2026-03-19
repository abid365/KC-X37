---
title: Power Consumption
description: XW37-BLE module power consumption specifications
---

# Power Consumption

## Current Specifications

| Mode            | Interval       | Current |
| :-------------- | :------------- | :------ |
| **Advertising** | 100ms          | 450µA   |
| **Advertising** | 500ms          | 110µA   |
| **Advertising** | 1000ms         | 59µA    |
| **Deep Sleep**  | No advertising | 0.8µA   |

## Power Supply Requirements

- **Voltage Range:** 1.7V to 3.3V
- **Recommended Voltage:** 3.0V
- **External Supply Current:** >60mA

## Power Optimization Tips

1. **Use Deep Sleep Mode** - 0.8µA minimum power consumption
2. **Adjust Advertising Interval** - Longer intervals reduce power:
   - 1000ms: 59µA
   - 500ms: 110µA
   - 100ms: 450µA

::: tip
The XW37-BLE module achieves ultra-low power consumption of just 0.8µA in deep sleep mode.
:::

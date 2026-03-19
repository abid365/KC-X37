---
title: Pinout
description: XW37-BLE module pin definitions and descriptions
---

# Pin Definitions

The module has **26 interface pins**, including **17 GPIOs**.

## Pinout Table

| Pin No.            | Name         | Function Description                           |
| :----------------- | :----------- | :--------------------------------------------- |
| 1, 3, 4, 9, 18, 26 | **GND**      | Ground                                         |
| 2                  | **EXT_ANT**  | External antenna connection if needed          |
| 5                  | **P20**      | General Purpose IO                             |
| 6                  | **P14**      | GPIO, I2C_SDA                                  |
| 7                  | **P16**      | General Purpose IO                             |
| 8                  | **3V3**      | 3.0V VCC; external supply should provide >60mA |
| 10                 | **RSTN**     | Reset pin, active low                          |
| 11                 | **P21/TXD1** | GPIO, UART_TXD1 (Communication with MCU)       |
| 12                 | **P22/RXD1** | GPIO, UART_RXD1 (Communication with MCU)       |
| 13                 | **P01/TXD0** | GPIO, Download UART_TX0                        |
| 14                 | **P00/RXD0** | GPIO, Download UART_RX0, ADC0                  |
| 15                 | **P23**      | GPIO, PWM3                                     |
| 16                 | **P13**      | GPIO, I2C_SCL                                  |
| 17                 | **P12**      | GPIO, PWM4                                     |
| 19                 | **P10**      | GPIO, PWM3                                     |
| 20                 | **P07**      | GPIO, PWM2, SPI_NSS, JTAG_TMS                  |
| 21                 | **P06**      | GPIO, SPI_MISO, ADC5, PWM1, JTAG_TCK           |
| 22                 | **P05**      | GPIO, SPI_MOSI, ADC4, JTAG_TDO                 |
| 23                 | **P04**      | GPIO, SPI_SCK, ADC3, JTAG_TDI                  |
| 24                 | **P03**      | GPIO, I2C_SDA, ADC2                            |
| 25                 | **P02**      | GPIO, I2C_SCL, ADC1                            |

## Power Requirements

- **Power Supply:** 1.7V to 3.3V (3.0V recommended)
- **Current Requirement:** External supply should provide >60mA

::: info
The module provides 17 GPIO pins with multiple functions including UART, I2C, SPI, PWM, ADC, and JTAG interfaces.
:::

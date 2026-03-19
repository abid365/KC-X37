---
title: Command Reference
description: XW37-BLE module AT command reference
---

# AT Commands

Commands must end with `\r\n`. In serial tools, enable "Send New Line".

## Command List

| Command                             | Description                                              |
| :---------------------------------- | :------------------------------------------------------- |
| `AT+setBR 9600`                     | Set Baud Rate (Manual restart required)                  |
| `AT+getName`                        | Read Bluetooth name                                      |
| `AT+setName=[name]`                 | Set Bluetooth name (Manual restart required)             |
| `AT+getAddr`                        | Read Bluetooth MAC address                               |
| `AT+getStatus`                      | Read status (see status codes)                           |
| `AT+setAdvInt [min] [max]`          | Set Adv Interval (80-16000; 50ms-10000ms); needs restart |
| `AT+setConnInt [max][min][lat][to]` | Set Connection Interval (immediate effect)               |
| `AT+disConnect`                     | Disconnect current connection                            |
| `AT+reStart`                        | Reboot module immediately                                |
| `AT+getPara`                        | Get UART, advertising, and connection parameters         |
| `AT+exit`                           | Exit instruction mode and return to transparent mode     |
| `AT+shutDown`                       | Power off the module                                     |
| `AT+reStore`                        | Restore factory settings                                 |
| `AT+getInfo`                        | Query version information                                |
| `AT+help`                           | Command help list                                        |

## Error Codes

| Code | Description                     |
| :--- | :------------------------------ |
| `06` | Previous operation not finished |
| `07` | Invalid command parameters      |
| `08` | Module not connected            |
| `09` | Module is connected             |
| `10` | Module is advertising           |
| `11` | Operation failed                |

## Usage Examples

```bash
# Set Bluetooth Name
AT+setName=MyDevice

# Set Baud Rate
AT+setBR 115200

# Get Current Status
AT+getStatus

# Disconnect
AT+disConnect

# Restore Factory Settings
AT+reStore
```

::: tip
Most configuration commands require a module restart to take effect. Use `AT+reStart` to reboot after making changes.
:::

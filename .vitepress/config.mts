import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KC-XW-37BLE",
  description:
    "A documentation on XW-37 BLE chip used in kindly Cuddle pumping device",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/microprocessor.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "UART Communication", link: "/docs/uart-coms/pin-functions.md" },
    ],

    sidebar: [
      {
        text: "Project Overview",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/docs/overview/introduction.md" },
          {
            text: "Features",
            link: "/docs/overview/features.md",
          },
          {
            text: "Applications",
            link: "/docs/overview/applications.md",
          },
        ],
      },
      {
        text: "Hardware Specs",
        collapsed: false,
        items: [
          { text: "Pinout", link: "/docs/hardware/pins.md" },
          {
            text: "Package Dimensions",
            link: "/docs/hardware/dimensions.md",
          },
        ],
      },
      {
        text: "BLE Stack",
        collapsed: false,
        items: [
          { text: "BLE Modes", link: "/docs/ble-stack/ble-modes.md" },
          {
            text: "UUID",
            link: "/docs/ble-stack/uuid.md",
          },
        ],
      },
      {
        text: "AT Commands",
        collapsed: false,
        items: [
          {
            text: "Command Reference",
            link: "/docs/at-commands/command-reference.md",
          },
        ],
      },
      {
        text: "UART Communication",
        collapsed: false,
        items: [
          { text: "Work Modes", link: "/docs/uart-coms/work-modes.md" },
          {
            text: "Pin Functions",
            link: "/docs/uart-coms/pin-functions.md",
          },
        ],
      },
      {
        text: "API Reference",
        collapsed: false,
        items: [
          {
            text: "Power Consumption",
            link: "/docs/api-reference/power-consumption.md",
          },
          {
            text: "Reflow Profile",
            link: "/docs/api-reference/reflow-profile.md",
          },
        ],
      },
    ],
    search: {
      provider: "local",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/abid365" }],

    footer: {
      message: "XW37-BLE Module Documentation",
      copyright: "Documented for kindly Cuddle",
    },
  },
});

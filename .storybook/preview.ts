import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "virtual:uno.css";
import "../src/global.css";
import "../src/export.css";

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: "#25252<5" },
      light: { ...themes.normal, appBg: "#E9E9E9" },
      current: "dark",
      stylePreview: true,
      darkClass: ["dark", "bg-dark-500", "text-dark-200"],
      lightClass: ["light", "bg-light-500", "text-light-200"],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

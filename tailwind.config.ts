import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        input: "rgba(255, 255, 255, 0.1)",
        "input-hover": "rgba(255, 255, 255, 0.2)",
        button: "rgba(106, 0, 198, 0.7)",
        "button-hover": "rgba(106, 0, 198, 1)",
      },
      colors: {
        "opacity-not-focus": "rgba(255, 255, 255, 0.8)",
        "opacity-on-focus": "rgba(255, 255, 255, 1.0)",
      },
    },
  },
  plugins: [],
};
export default config;

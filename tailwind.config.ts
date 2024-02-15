import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
      center: true,
      
      screens: {
        sm: '720px',
        md: '960px',
        lg: '1140px',
        xl: '1320px',
      },
    },
    extend: {
      backgroundImage: {
        "gradient-primary":  "linear-gradient(to right, #00B0DC, #2c3842)",
      },
      fontSize: {
        biggest_font_size: "2rem",
        normal_font_size: "1rem",
        small_font_size: "0.813rem",
        smaller_font_size: "0.75rem",
      },
      fontWeight: {
        titleBold: "var(--titleBold)",
        PRegular: "var(--PRegular)",
        Bold: "var(--Bold)",
        medium: "var(--medium)",
        ExtraBold: "(--ExtraBold)",
      },
      fontFamily: {
        pri: ["var(--montserrat)", ...defaultTheme.fontFamily.sans],
        sec: ["var(--inter)", ...defaultTheme.fontFamily.sans],
      },
      
      colors: {
        primary: "#00B0DC",
        sec: "#E5E6E6",
        orange: "#f86425",
        red: "#FF4545",
        yellow: "#eed202",
        green: "#5CB85C",
        gray4: "#333333",
        gray3: "#888888",
        gray2: "#BBBBBB",
        gray1: "#EEEEEE",

      },
    },
  },
  plugins: [],
};
export default config;

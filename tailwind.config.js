/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary': '#5B6CFF',
        primary: "#745C8F",
        secondary: "#B9A7CC",
        tertiary: "#2773A7",
        rounderheadingbg: "#eae1ef",
        primarygradient: "#adf4cb",
        decsriptioncolor: "#747474",
        headerandfooterbg: "#000E29",
        footerparacolor: "#A3A6AE",
      },
      height: {
        bannerheight: "calc(100vh - 124px)",
        bannerheightsm: "calc(100vh - 80px)",
      },
    },
    fontSize: {
      "10xl": [
        "58px",
        {
          fontWeight: "700",
        },
      ],
      "8xl": [
        "50px",
        {
          fontWeight: "700",
        },
      ],
      "2xl": [
        "24px",
        {
          fontWeight: "500",
        },
      ],
      "4xl": [
        "34px",
        {
          fontWeight: "700",
        },
      ],
      "5xl": [
        "43px",
        {
          fontWeight: "500",
        },
      ],
      "7xl": [
        "20px",
        {
          fontWeight: "600",
        },
      ],
    },
  },
  plugins: [],
};

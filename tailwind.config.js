const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontSize: {
        h1: ["3.25rem", "120%"],
        h2: ["2.25rem", "133%"],
        h3: ["1.5rem", "133%"],
        h4: ["1.25rem", "135%"],
      },
      colors: {
        body: {
          DEFAULT: "#1e1e1e",
          light: "#666",
        },
        link: "#00659d",
      },
      screens: {
        xs: "481px",
        "xs-down": { max: "480px" },
        sm: "641px",
        "sm-down": { max: "640px" },
        "sm-up": { max: "680px" },
        md: "769px",
        "md-down": { max: "768px" },
        "md-middle": { max: "820px" },
        "md-up": { max: "992px" },
        lg: "1025px",
        "lg-down": { max: "1024px" },
        xl: "1281px",
        "xl-down": { max: "1280px" },
        "2xl": "1921px",
        "2xl-down": { max: "1920px" },
      },
      fontFamily: {
        playfair: "Playfair Display",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#121815", // was #0E1311
          soft: "#161E1A", // was #111815
          card: "#1B2420", // was #151E1A
        },

        text: {
          primary: "#F5F7F6",
          secondary: "#C7D1CC",
          muted: "#8FA39A",
        },
        border: {
          subtle: "#1F2A25",
        },
        brand: {
          DEFAULT: "#3DD68C",
          dark: "#1FAE6A",
          soft: "#F4EEDC",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.55)",
        glow: "0 0 0 1px rgba(61,214,140,0.35), 0 18px 45px rgba(0,0,0,0.7)",
      },
      spacing: {
        section: "7rem", // 112px
        sectionLg: "9rem", // 144px
        cardGap: "2.25rem", // 36px
        block: "3.5rem", // 56px
        blockLg: "4.5rem", // 72px
      },
      fontWeight: {
        heading: "600",
        subheading: "500",
        body: "300",
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.015em",
      },
      lineHeight: {
  relaxed: "1.75",
  loose: "1.9",
},

    },
  },
  plugins: [],
};

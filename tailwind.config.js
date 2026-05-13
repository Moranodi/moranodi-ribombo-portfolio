export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3585cb",
        secondary: "#08a5d1",
        darkbg: "#282c36",
        lighttext: "#f2f2f2",
        card: "#ffffff",
      },
      boxShadow: {
        soft: "0 4px 10px rgba(0, 0, 0, 0.1)",
        hover: "0 6px 15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

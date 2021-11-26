module.exports = {
  purge: ["./app/**/*.{tsx,ts}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      text: "var(--text)",
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

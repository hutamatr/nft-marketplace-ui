/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-background": "#1B1E2A",
        "gradient-1": "#6763FD",
        "gradient-2": "#B84EF1",
        "sub-background-1": "#262D3A",
        "sub-gradient":
          "linear-gradient(103.85deg, rgba(103, 99, 253, 0.1) 5.47%, rgba(184, 78, 241, 0.1) 96.28%)",
      },
    },
  },
  plugins: [],
};

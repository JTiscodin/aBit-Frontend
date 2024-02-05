/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "nav-background": "url('images/3c90f0a2a0733a37cfae73337e1beb01.jpeg')",
        "banner": "url('images/banner.png') "
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};

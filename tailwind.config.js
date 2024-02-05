/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "nav-background": "url('images/nav-back.png')",
        "banner": "url('images/banner.png') "
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};

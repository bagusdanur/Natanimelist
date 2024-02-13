/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    colors: {
      color: {
        primary: '#eeeeee',
        accent: '#ffc639',
        secondary: '#393e46',
        dark: '#222831',
        score: '#414141',
        comment: '#FF8911',
        danger: '#d9534f',
        navbar: '#343337',
        navbarText: '#ffdd95',
        bgPrimary: '#171717',
        titleColor: '#E5E5E5',
        bgAired: '#e3b5cd',
        bgEps: '#4c4c4e',
        bgMore: '#56565b',
        genres: "#8db3cd",
        darkPrimary: "#000000",
        white: '#ffffff'
      }
    },
  },
  plugins: [],
};

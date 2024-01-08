/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      // usage: eg: text-brand
      colors: {
        brand: '#00CD9B',
        dark: '#565D72 ',
        extraDark: '#0F172A',
        light: '#e6e6e6',
      },
      // usage: eg: text-sectionTitle
      fontSize: {
        sectionTitle: '2.5rem',
        cardHeading: '1.5rem',
        paragraph: '1rem',
      },
    },
  },
  plugins: [],
};

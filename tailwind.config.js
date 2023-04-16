/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xxs: '0.75rem',
      xs: '0.8125rem',
      sm: '0.875rem',
      lg: '1.125rem',
    },
    extend: {},
  },
  plugins: [],
};


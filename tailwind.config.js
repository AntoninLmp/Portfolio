/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#1B5E3F',
        'primary-green-dark': '#0F3A25',
        'sage-green': '#9CAF88',
        'sage-green-light': '#C8D5BE',
        'neutral-dark': '#1A1A1A',
        'neutral-light': '#F5F5F5',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


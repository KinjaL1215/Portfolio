/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#111011',
          900: '#1c1a1f',
          800: '#282629',
          700: '#3c3940',
          600: '#575154',
        },
        gold: {
          400: '#d4c6a3',
          500: '#959650',
          600: '#797b3d',
        },
        yellow: {
          50: '#f9f8f6',
          100: '#f1efe9',
          200: '#e5e1d5',
          300: '#d4c6a3',
          400: '#b8aa84',
          500: '#959650',
          600: '#797b3d',
          700: '#5c5e2e',
          800: '#434422',
          900: '#2d2e17',
          950: '#1e1f0e',
        },
        accent: '#959650',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Soft indigo/violet primary
        brand: {
          50: '#eef1ff',
          100: '#e0e5ff',
          200: '#c7cdff',
          300: '#a4aaff',
          400: '#837dfa',
          500: '#6b5cf0',
          600: '#5b45e0',
          700: '#4c37c4',
          800: '#3f309e',
          900: '#372d7d',
          950: '#221a4a',
        },
        // Warm amber/coral accent
        accent: {
          50: '#fff5ed',
          100: '#ffe8d4',
          200: '#ffcda8',
          300: '#ffab70',
          400: '#ff7d37',
          500: '#fb5c11',
          600: '#ec4207',
          700: '#c42f08',
          800: '#9c270f',
          900: '#7e2310',
          950: '#440e06',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(59, 48, 158, 0.18)',
        'soft-lg': '0 24px 70px -20px rgba(59, 48, 158, 0.28)',
      },
      keyframes: {
        'blob-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(3%, -4%) scale(1.05)' },
          '66%': { transform: 'translate(-3%, 3%) scale(0.97)' },
        },
      },
      animation: {
        blob: 'blob-float 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

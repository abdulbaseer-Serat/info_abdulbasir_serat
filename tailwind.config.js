/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        navy: {
          deep: '#0a1628',
          DEFAULT: '#0f2942',
          light: '#1a3a5c',
        },
        azure: {
          DEFAULT: '#0078d4',
          light: '#2b9fff',
        },
        cyan: {
          bright: '#00bfff',
        },
        gold: '#d4a843',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};

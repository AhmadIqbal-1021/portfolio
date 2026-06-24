/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['Syne', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#080C10',
          2: '#0D1117',
          3: '#111820',
        },
        surface: {
          DEFAULT: '#141C26',
          2: '#1A2433',
        },
        border: {
          DEFAULT: '#1E2D3D',
          2: '#243447',
        },
        accent: {
          DEFAULT: '#00E5FF',
          2: '#7B61FF',
          3: '#FF6B6B',
        },
        text: {
          DEFAULT: '#E8F4F8',
          2: '#8BA7BE',
          3: '#4D6B82',
        },
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
        'scroll-line': 'scrollDown 2s ease-in-out infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        scrollDown: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
    },
  },
  plugins: [],
}

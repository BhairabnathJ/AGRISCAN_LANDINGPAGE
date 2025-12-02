/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f3ed',
          100: '#d1e7db',
          200: '#a3cfb7',
          300: '#75b793',
          400: '#479f6f',
          500: '#1a4d2e', // Main primary color
          600: '#153d25',
          700: '#102e1c',
          800: '#0a1f12',
          900: '#050f09',
        },
        sage: {
          50: '#f7faf8',
          100: '#e8f3ed',
          200: '#d1e7db',
          300: '#badbc9',
          400: '#a3cfb7',
          500: '#8cc3a5',
        },
        earth: {
          50: '#fdf6f0',
          100: '#faede1',
          200: '#f5dbc3',
          300: '#f0c9a5',
          400: '#ebb787',
          500: '#e6a569',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        'hero-mobile': ['48px', { lineHeight: '1.1', fontWeight: '800' }],
        'hero-desktop': ['84px', { lineHeight: '1.05', fontWeight: '800' }],
        'display': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'headline': ['48px', { lineHeight: '1.15', fontWeight: '700' }],
        'title': ['36px', { lineHeight: '1.2', fontWeight: '600' }],
        'subtitle': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 24px rgba(26, 77, 46, 0.15)',
        'glow-lg': '0 0 48px rgba(26, 77, 46, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.4, 0.0, 0.6, 1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

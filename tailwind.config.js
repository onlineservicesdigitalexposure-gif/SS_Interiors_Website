/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#08090C',
          50: '#F4F4F5',
          900: '#0A0C10',
          950: '#050608',
        },
        surface: {
          DEFAULT: '#12151B',
          light: '#181C24',
          border: '#242933',
        },
        bronze: {
          DEFAULT: '#C08A4E',
          light: '#E0B784',
          dark: '#8C6236',
        },
        volt: {
          DEFAULT: '#4C6FFF',
          light: '#7C93FF',
          dark: '#2F49CC',
        },
        bone: {
          DEFAULT: '#E9E6E0',
          muted: '#9B9791',
          faint: '#59564F',
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        display: ['"Cinzel"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(233,230,224,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(233,230,224,0.05) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(76,111,255,0.15), transparent 60%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      animation: {
        'draw-line': 'draw 2.4s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        draw: {
          from: { strokeDashoffset: 1000 },
          to: { strokeDashoffset: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0D111A',
          50: '#F4F4F5',
          900: '#111622',
          950: '#090C13',
        },
        surface: {
          DEFAULT: '#161C28',
          light: '#1E2536',
          border: '#2A3245',
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
          DEFAULT: '#F4F0E8',
          muted: '#A8A49C',
          faint: '#6E6B63',
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
          'linear-gradient(to right, rgba(244,240,232,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,240,232,0.04) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(192,138,78,0.18), rgba(76,111,255,0.08) 50%, transparent 80%)',
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

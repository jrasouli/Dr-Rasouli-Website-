/** @type {import('tailwindcss').Config} */
// Ported 1:1 from the former in-browser CDN config in index.html.
export default {
  content: ['./index.html', './*.{ts,tsx}', './pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Source Serif 4 Variable"', '"Source Serif 4"', 'Georgia', 'serif'],
        serif: ['"Source Serif 4 Variable"', '"Source Serif 4"', 'Georgia', 'serif'],
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.25rem' }],
        sm: ['0.9375rem', { lineHeight: '1.5rem' }],
        base: ['1.0625rem', { lineHeight: '1.75rem' }],
      },
      colors: {
        // One palette: deep navy + a single refined teal accent + warm neutrals.
        navy: { DEFAULT: '#0F2A4A', 950: '#081A30', 900: '#0B213D', 800: '#0F2A4A', 700: '#1B3B63', 600: '#2C4F7C', 100: '#E6ECF3', 50: '#F2F5F9' },
        teal: { DEFAULT: '#0F766E', 800: '#0B5953', 700: '#0F766E', 600: '#138A80', 300: '#7FD1C7', 200: '#B5E6DF', 100: '#DDF3EF', 50: '#EEF8F6' },
        sand: { DEFAULT: '#F6F3EE', 200: '#E9E3D8', 100: '#F6F3EE' },
        ink: '#1C2733',
        // Legacy names kept so any leftover class stays on-palette.
        primary: '#0F2A4A',
        secondary: '#0F766E',
        trust: '#0B213D',
        accent: '#0F766E',
        'neutral-light': '#F6F3EE',
        'cta-orange': '#0F766E',
      },
    },
  },
  plugins: [],
};

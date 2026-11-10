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
        velvet: {
          bg: '#130911',
          surface: '#1A0D17',
          card: '#22111E',
          cardLight: '#2C1727',
          border: 'rgba(225, 142, 126, 0.2)',
          borderHover: 'rgba(225, 142, 126, 0.45)'
        },
        rosegold: {
          DEFAULT: '#E18E7E',
          light: '#F2A99B',
          dark: '#C97262',
          muted: '#8F6660'
        },
        cream: {
          DEFAULT: '#FFF6F2',
          muted: '#D8C6C0',
          dark: '#A6928C'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        poppins: ['"Poppins"', '"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
        display: ['"Oswald"', '"Poppins"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'velvet-glow': '0 0 60px 10px rgba(225, 142, 126, 0.22)',
        'editorial': '0 25px 50px -12px rgba(0, 0, 0, 0.85)'
      }
    },
  },
  plugins: [],
}

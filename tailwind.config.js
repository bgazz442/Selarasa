/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          dark: '#3A2818', // Coklat tanah gelap
          brown: '#6B4423', // Coklat tanah
          sand: '#C5A880', // Pasir
          cream: '#F4EFE6', // Krem lembut (background)
          green: '#4A5D23', // Hijau daun
          lightgreen: '#8C9A5B', // Hijau muda
          black: '#1A1A1A', // Hitam pekat
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

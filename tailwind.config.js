/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        brand: {
          dark: '#101820',
          deeper: '#070b10',
          orange: '#f97316',
          orange2: '#ff8a1f',
          amber: '#ffb347',
          slate: '#1f2937',
          body: '#64748b',
          line: '#e5e7eb',
          soft: '#fff7ed'
        }
      },
      boxShadow: {
        soft: '0 18px 55px rgba(15, 23, 42, 0.10)',
        card: '0 20px 70px rgba(15, 23, 42, 0.12)',
        orange: '0 18px 60px rgba(249, 115, 22, 0.26)'
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(16, 24, 32, .06) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 24, 32, .06) 1px, transparent 1px)'
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        shimmer: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(100%)' } }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp .8s ease forwards',
        fadeIn: 'fadeIn .6s ease forwards',
        shimmer: 'shimmer 2.4s linear infinite'
      }
    }
  },
  plugins: []
}

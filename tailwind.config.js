/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        // Paleta principal (azul) — ver README do projeto
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A'
        },
        // Escala de texto/neutros
        ink: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A'
        },
        surface: '#F8FAFC',
        card: '#FFFFFF',
        border: '#E2E8F0',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)'
      },
      borderRadius: {
        control: '12px',
        card: '20px'
      },
      boxShadow: {
        soft: '0 2px 8px rgba(15, 23, 42, 0.06)',
        elevated: '0 12px 24px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
}

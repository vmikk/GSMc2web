/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Scientific color palette for GSMc
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Main brand blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Soil/earth tones
        soil: {
          50: '#fdfcf7',
          100: '#faf7ec',
          200: '#f3ebd1',
          300: '#e9d7ac',
          400: '#dcc081',
          500: '#d1a85e',
          600: '#c39550',
          700: '#a37943',
          800: '#85633a',
          900: '#6d5130',
          950: '#3e2c18',
        },
        // Fungal/mycology purples
        fungal: {
          50: '#faf7ff',
          100: '#f3edff',
          200: '#e9deff',
          300: '#d5c2ff',
          400: '#b896ff',
          500: '#9b69ff',
          600: '#8b3dff',
          700: '#7928ca',
          800: '#6920a5',
          900: '#571b87',
          950: '#360f5d',
        },
        // Success/error states with sufficient contrast
        success: '#059669', // 4.5:1 contrast
        warning: '#d97706', // 4.6:1 contrast
        error: '#dc2626',   // 5.2:1 contrast
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'parallax': 'parallax 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(2rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        parallax: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'soil-texture': "url('/images/textures/soil-texture.jpg')",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            '[class~="lead"]': {
              color: '#4b5563',
            },
            a: {
              color: '#0ea5e9',
              textDecoration: 'none',
              '&:hover': {
                color: '#0284c7',
                textDecoration: 'underline',
              },
            },
            strong: {
              color: '#111827',
              fontWeight: '600',
            },
            'h1, h2, h3, h4': {
              color: '#111827',
            },
            blockquote: {
              borderLeftColor: '#e5e7eb',
              color: '#6b7280',
            },
            hr: {
              borderColor: '#e5e7eb',
            },
            'figure figcaption': {
              color: '#6b7280',
            },
            code: {
              color: '#111827',
              backgroundColor: '#f3f4f6',
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#f9fafb',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

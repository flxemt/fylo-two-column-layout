/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(243, 87%, 12%)',
        'desaturated-blue': 'hsl(238, 22%, 44%)',
        'bright-blue': 'hsl(224, 93%, 58%)',
        'moderate-cyan': 'hsl(170, 45%, 43%)',
        'moderate-cyan-hover': 'hsl(170, 63%, 66%)',
        'light-grayish-blue': 'hsl(240, 75%, 98.4%)',
        'light-gray': 'hsl(0, 0%, 75%)',
        'blue-hover': 'hsla(221, 100%, 71%, 1)',
        red: 'hsl(343, 84%, 61%)'
      }
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      headings: ['Raleway', 'sans-serif']
    },
    fontSize: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.5rem',
      h4: '1.125rem',
      'body-default': '1rem',
      'body-smaller': '0.875rem'
    },
    lineHeight: {
      h1: '3.75rem',
      h2: '3rem',
      h3: '2.25rem',
      'body-default': '1.5rem',
      'body-smaller': '1.3125rem'
    },
    borderRadius: {
      sm: '2px',
      md: '3px',
      lg: '4px',
      xl: '5px',
      full: '50%'
    },
    boxShadow: {
      card: '0px 0px 8px 4px rgba(56, 56, 56, 0.0458843)',
      'btn-1': '2px 3px 6px rgba(0, 0, 0, 0.15925)',
      'btn-2': '1px 1px 3px rgba(7, 4, 59, 0.157043)',
      'btn-2-desktop': '2px 3px 6px rgba(7, 4, 59, 0.157043)'
    },
    maxWidth: {
      container: '1280px'
    },
    screens: {
      xl: '1110px'
    }
  },
  plugins: []
}

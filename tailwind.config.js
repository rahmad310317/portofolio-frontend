/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      'sans': [
        "Inter var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    extend: {
      screens: {
        'xl': '1024px',
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
      },

      // },
    },
    plugins: [],
  }
}

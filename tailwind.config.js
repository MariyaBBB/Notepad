/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '960': '960px',
        '185': '185px',
        '730': '730px'
      },
      maxHeight: {
        '40': '40px'
      },
      padding: {
        '900': '900px'
      },
      colors: {
        'gray-light': '#F5F5F5',
        'green': '#0FBA53',
        'normal-black': 'rgba(0, 0, 0, 0.7)',
        'black-grey': 'rgba(0, 0, 0, 0.8)',
        'hover-black': 'rgba(0, 0, 0, 0.5)',
        'white-bg-article': '#FFFFFF',
        'gray': 'rgba(155, 155, 155, 1)'
      },
      fontFamily: {
        'sans': 'Roboto'
      },
      fontWeight: {
        '350': '350'
      },
      lineHeight: {
        '18': '18px'
      },
      boxShadow: {
        'black-shadow': '-.5rem 0px 0px 5px rgba(0, 0, 0, 1), .5rem 0px 0px 5px rgba(0, 0, 0, 1)',
        'list-shadow': '-1.74rem 0px 0px 0px rgba(0, 0, 0, 1), 1.74rem 0px 0px 0px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}

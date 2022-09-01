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
      minHeight:{
        '280': '280px'
      },
      left: {
        '204': '204px'
      },
      padding: {
        '900': '900px'
      },
      colors: {
        'gray-light': '#F5F5F5',
        'green': 'rgba(15, 186, 83, 0.8)',
        'green-light': 'rgba(15, 186, 83, 0.6)',
        'green-bright': 'rgba(15, 186, 83, 1)',
        'green-button': 'rgba(12, 153, 68, 1)',
        'normal-black': 'rgba(0, 0, 0, 0.7)',
        'black-grey': 'rgba(0, 0, 0, 0.8)',
        'hover-black': 'rgba(0, 0, 0, 0.5)',
        'white-bg-article': '#FFFFFF',
        'gray': 'rgba(155, 155, 155, 1)',
        'dirt-yellow': 'rgba(212, 169, 17, 1)',
        'dirt-yellow-light': 'rgba(212, 169, 17, 0.8)',
        'dirt-yellow-bright': 'rgba(153, 122, 12, 1)',
        'red': 'rgba(212, 29, 17, 1)',
        'red-light': 'rgba(212, 29, 17, 0.8)',
        'red-bright': 'rgba(153, 21, 12, 1)'
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
      },
      padding: {
        '5b': '5px'
      }
    },
  },
  plugins: [],
}

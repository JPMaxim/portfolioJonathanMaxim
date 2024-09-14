/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Chakra': ['Chakra Petch', 'sans-serif']
    },
    screens: {
      'ltp': '1024px',
      'wide': '1440px',
      '4k': '2560px'
    },
    extend: {
      spacing: {
        '5%': '5%', '10%': '10%', '15%': '15%', '20%': '20%', '25%': '25%', '30%': '30%', '35%': '35%', '40%': '40%', '45%': '45%', '50%': '50%', '55%': '55%', '60%': '60%', '65%': '65%', '70%': '70%', '75%': '75%', '80%': '80%', '85%': '85%', '90%': '90%', '95%': '95%', '100%': '100%',
        '0.5%': '0.5%',
        '4%': '4%',
        '8%': '8%',
        '12.5%': '12.5%',
        '13%': '13%',
        '39%': '39%',
        '61%': '61%',
        '62.5%': '62.5%',
        '8vh': '8vh',
        '24vh': '24vh',
        '76vh': '76vh',
        '100vh': '100vh',
        '100vw': '100vw',
        '1rem': '1rem',
        '2rem': '2rem',
        '3rem': '3rem',
        '15rem': '15rem',
        '30rem': '30rem',
        '39rem': '39rem',
        '50rem': '50rem',
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '5px': '5px',
        '8px': '8px',
        '10px': '10px',
        '20px': '20px'
      },
      colors: {
        'dark-magenta': '#89138A',
        'dark-magenta-paled': 'rgb(137, 59, 138)',
        'sky-magenta': '#CE71AF',
        'sky-magenta-paled': 'rgb(206, 153, 175)',
        'teal': '#018080',
        'teal-paled': 'rgb(71, 128, 128)',
        'gold': '#E6BB18',
        'lightBlue': '#B2D8D8',
        'lightMagenta': 'rgb(252, 161, 253)',
        'lighterMagenta': 'rgb(252, 216, 239)',
        'grey': '#E5E4E2',
        'linkColour': '#FF0000'
      },
      boxShadow: {
        'spineCreaseDarkMagentaLeft': '-8px 0 8px rgb(45, 7, 46), 1px 0 8px rgb(45, 7, 46)',
        'spineCreaseDarkMagentaRight': '-1px 0 8px rgb(64, 28, 65), 8px 0 8px rgb(64, 28, 65)',
        'spineCreaseSkyMagentaLeft': '-8px 0 8px rgb(110, 62, 94), 1px 0 8px rgb(110, 62, 94)',
        'spineCreaseSkyMagentaRight': '-1px 0 8px rgb(110, 82, 94), 8px 0 8px rgb(110, 82, 94)',
        'spineCreaseTealLeft': '-8px 0 8px rgb(0, 63, 63), 1px 0 8px rgb(0, 63, 63)',
        'spineCreaseTealRight': '-1px 0 8px rgb(37, 66, 66), 8px 0 8px rgb(37, 66, 66)',
        'projCardShadow': '-5px -5px rgb(71, 128, 128)',
        'jrnCardShadow': '-5px -5px rgb(159, 90, 136)',
        'readMore': '1px 1px ',
      },
      borderWidth: {
        '15rem': '15rem'
      }
    },
  },
  plugins: [],
}

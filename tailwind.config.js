/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Chakra': ['Chakra Petch', 'sans-serif'],
      'rokkitt': ['Rokkitt', 'serif']
    },
    screens: {
      // galaxyS8+ 360x740
      // galaxyS20Ultra 412x915
      // ipadMini 768x1024
      // ipadPro 1024x1366
      // ltpS 1280x720
      // ltpM 1440x900 or 1600x900
      // ltpL 1920x1080
      
      // mixed opinions from devs on reddit on having this many screens or only going up to about 1440 with a small and large design with tablet in the middle of those, maybe a medium.

      // considering either: 
      // default ( < 412 )
      // 412
      // 768
      // 1024
      // 1440

      // or simply two screens for mobile and desktop design:
      // default
      // 1024
      // making sure to use rem for global values like font, margins, etc.. And em (size relative to parent element). For better scaling

      // leaning toward the 5 screens

      // initial screens
      'ltp': '1024px',
      'wide': '1440px',
      '4k': '2560px',

      // screens after designing journal onwards
      'sm': '412px',
      'med': '768px',
      'lg': '1024px',
      'xl': '1440px'
    },
    extend: {
      spacing: {
        '5%': '5%', '10%': '10%', '15%': '15%', '20%': '20%', '25%': '25%', '30%': '30%', '35%': '35%', '40%': '40%', '45%': '45%', '50%': '50%', '55%': '55%', '60%': '60%', '65%': '65%', '70%': '70%', '75%': '75%', '80%': '80%', '85%': '85%', '90%': '90%', '95%': '95%', '100%': '100%',
        '0.5%': '0.5%',
        '4%': '4%',
        '8%': '8%',
        '12.5%': '12.5%',
        '13%': '13%',
        '32%': '32%',
        '39%': '39%',
        '47.5%': '47.5%',
        '61%': '61%',
        '62.5%': '62.5%',
        '86%': '86%',
        '8vh': '8vh',
        '12vh': '12vh',
        '16vh': '16vh',
        '24vh': '24vh',
        '76vh': '76vh',
        '176vh': '176vh',
        '100vh': '100vh',
        '100vw': '100vw',
        '0.5rem': '0.5rem',
        '1rem': '1rem',
        '2rem': '2rem',
        '3rem': '3rem',
        '5rem': '5rem',
        '10rem': '10rem',
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
        '20px': '20px',
      },
      colors: {
        'dark-magenta': '#89138A',
        'dark-magenta-paled': 'rgb(137, 59, 138)',
        'sky-magenta': '#CE71AF',
        'sky-magenta-paled': 'rgb(206, 153, 175)',
        'teal': '#018080',
        'teal-paled': 'rgb(71, 128, 128)',
        'gold': '#E6BB18',
        'darkerGold': '#987700',
        'lightBlue': '#B2D8D8',
        'lightMagenta': 'rgb(252, 161, 253)',
        'lighterMagenta': 'rgb(252, 216, 239)',
        'grey': '#E5E4E2',
        'linkColour': '#FF0000',
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
        'active': '0px 5px 5px -5px rgb(110, 62, 94)',
        'stickyNav': '-5px 0px rgb(252, 216, 239)'
      },
      borderWidth: {
        '15rem': '15rem'
      },
      borderRadius: {
        '100px': '100px'
      },
      transitionProperty: {
        'display': 'display'
      }
    },
  },
  plugins: [],
}

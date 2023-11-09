/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    content: {
      bluewaves: "url('./assets/BlueWaves.png')",
      sparkles: "url('./assets/Sparkles.png')",
      circles: "url('./assets/Circles.png')",
      arrow: "url(./assest/Arrow.png)",
      swirlyarrow: "url(./assest/SwirlyArrow.png)",
      yellowwaves: "url(./assest/YellowWaves.png)",
    },
    colors: {
      "primary-100": "#56ACE0",
      "primary-200": "#FFC10D",
      "primary-300": "#194F82",
      "secondary-200": "#ffcd3d",
      "secondary-300": "#11375b",
    },
  },
  plugins: [],
}


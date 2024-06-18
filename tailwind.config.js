/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary: 'Poppins, sans-serif'
      },
      backgroundColor:{
        header: '#212529'
      },
      width:{
        desktop: '1920px'
      }
    },
  },
  plugins: [],
}


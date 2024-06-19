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
      colors:{
        light: '#f8f9fa',
        dark: '#212529',
        placeholder: '#6c7570',
        error: '#FF6A6A'
      },
      backgroundColor:{
        backgroundinput: '#E9ECEF',
        dark: '#212529',
        light: '#f8f9fa',
        opacity: '#73767a',
        hoverbutton: '#3B3D3F'
      },
      width:{
        desktop: '1920px'
      },
    },
  },
  plugins: [],
}


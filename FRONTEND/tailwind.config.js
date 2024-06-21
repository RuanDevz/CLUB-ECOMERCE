/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
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
        error: '#FF6A6A',
        success: '#6AFF6A',
        primary: '#fff'
      },
      backgroundColor:{
        backgroundinput: '#E9ECEF',
        dark: '#212529',
        light: '#f8f9fa',
        opacity: '#73767a',
        hoverbutton: '#3B3D3F',
        visible: '#000000'
      },
      width:{
        desktop: '1920px',
        productwidth: '300px',
      },
      height:{
       productheight: '414px'
      },
      maxWidth:{
        default: '1620px'
      }
    },
    
  },
  darkMode: "class",
  plugins: [nextui()],
}


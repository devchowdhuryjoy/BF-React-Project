/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins ', 'sans-serif'],
       
      },
      spacing: {
        'container': '1366px',
      },
      colors: {
        'Primary': '#2c4bff',
      },
      // backgroundImage: {
      //   'Banner': "url('./Banner.png')",
        
      // }
    },
  },
  plugins: [
    
  ],
}
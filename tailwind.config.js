/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#1a1a1a',
      secondary: '#646cff',
      accent: '#747bff',
      light: '#ffffff',
      softLight: '#e4e4e4'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [import('flowbite/plugin')]
}

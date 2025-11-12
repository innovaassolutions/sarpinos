import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tomato-red': '#D32F2F',
        'basil-green': '#388E3C',
        'mozzarella-white': '#FAFAFA',
        'dough-beige': '#F5F5DC',
        'olive-black': '#212121',
        'gray-light': '#F5F5F5',
        'gray-dark': '#333333',
      },
    },
  },
  plugins: [],
}

export default config

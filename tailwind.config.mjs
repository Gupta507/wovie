import scrollbarHide from 'tailwind-scrollbar-hide'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '450px',
      },
      colors: {
        primary: colors.indigo,
      },
    },
  },
  plugins: [scrollbarHide],
}

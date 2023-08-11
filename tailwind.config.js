/** @type {import('tailwindcss').Config} */

const icons = require('@jcamp/tailwindcss-plugin-icons');
export const tailwindContent = [
  './docs/**/*.md',
  './docs/.vitepress/**/*.{js,ts,vue}',
]
export default {
  content: tailwindContent,
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [icons],
}


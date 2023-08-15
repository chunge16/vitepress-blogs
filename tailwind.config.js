// import { tailwindContent } from '@jcamp/vitepress-blog-theme/node'

import {defineTailwindContent} from './vitepress-blogs-theme/config';

const icons = require('@jcamp/tailwindcss-plugin-icons')

export const tailwindContent = [
  './docs/**/*.md',
  './docs/.vitepress/**/*.{js,ts,vue}',
]

module.exports = {
  content: [...tailwindContent],
  darkMode: 'class',
  plugins: [icons()],
}

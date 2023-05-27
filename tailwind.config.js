/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        alt: ['var(--font-nothing-you-could-do)'],
      },
    },

    screens: {
      'tablet-sm': '640px',
      'tablet-md': '768px',
      'laptop-sm': '1024px',
      'desktop-sm': '1280px',
      'desktop-md': '1536px',
      'full-hd': '1920px',
      '2k': '2048px',
      '4k': '3840px',
    },
  },
  plugins: [],
}

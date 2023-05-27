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

      fontSize: {
        '10xl': '10rem',
      },
    },

    screens: {
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      'full-hd': '1920px',
      '2k': '2048px',
      '4k': '2560px',
    },
  },
  plugins: [],
}

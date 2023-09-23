const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundColor: {
        background: "var(--background)",
      },
      colors: {
        'accent-light': 'var(--accent-light)',
        'accent-neutral': 'var(--accent-neutral)',
        'accent-dark': 'var(--accent-dark)',
      }
    },
  },
  plugins: [plugin(function ({ addUtilities }) {
    addUtilities({
      '.safe-top': {
        paddingTop: 'constant(safe-area-inset-top)',
        paddingTop: 'env(safe-area-inset-top)'
      },
      '.safe-bottom': {
        paddingBottom: 'constant(safe-area-inset-bottom)',
        paddingBottom: 'env(safe-area-inset-bottom)'
      },
      '.safe-left': {
        paddingLeft: 'constant(safe-area-inset-left)',
        paddingLeft: 'env(safe-area-inset-left)'
      },
      '.safe-right': {
        paddingRight: 'constant(safe-area-inset-right)',
        paddingRight: 'env(safe-area-inset-right)'
      },
    })
  })],
};

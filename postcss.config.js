// postcss.config.mjs oder postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // ✅ richtig für Tailwind v4
    autoprefixer: {},
  },
}


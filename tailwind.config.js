import { scopedPreflightStyles, isolateInsideOfContainer } from "tailwindcss-scoped-preflight";

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark': '#080808',
        'dark-card': '#141414',
        'accent-primary': '#D13800',
        'accent-secondary': '#00CC8E',
        'accent-orange': '#D66035',
      },

    },
  },
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('.twp', {
        except: '.no-twp'
      }),
    }),
  ],
}

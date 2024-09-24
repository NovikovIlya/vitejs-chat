/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
		preflight: false
	},
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    base: false,
    themes: [], // или другие темы по вашему выбору
},
}
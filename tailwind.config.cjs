/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        openSans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
        raleway: ["Raleway Variable", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
			colors: {
        'rich-black': '#272829',
				'gunmetal': '#2C2F3F',
				'metallic-silver': '#B4B3A8',
				'batter-charged-blue': '#149DDD',
				'ghost-white': '#F5F8FD',
				'indigo': '#173B6C'
      },
		},
	},
	plugins: [],
}

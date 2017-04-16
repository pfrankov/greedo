var banner =
		"   ------------------------------------------------\n"+
		"      👽 Greedo \n"+
		"      Flexbox-based responsive grid system\n"+
		"   ------------------------------------------------\n"+
		"   Author: Pavel Frankov   twitter: @twenty\n"+
		"   Fork me on Github: https://github.com/pfrankov/greedo";

console.log(banner);

module.exports = {
	plugins: {
		autoprefixer: {
			browsers: ["last 2 versions"]
		},
		"css-mqpacker": {},
		"cssnano": {},
		"postcss-banner": {
			banner: banner
		},
		"cssstats": {}
	}
};
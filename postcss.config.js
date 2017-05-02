var banner =
		"   ------------------------------------------------\n"+
		"      👽 Greedo \n"+
		"      Flexbox-based responsive grid system\n"+
		"   ------------------------------------------------\n"+
		"   Author: Pavel Frankov   twitter: @twenty\n"+
		"   Fork me on Github: https://github.com/pfrankov/greedo";

console.log(banner);

module.exports = {
	plugins: [
		require("autoprefixer")({
			browsers: ["last 2 versions", "> 1%"]
		}),
		require("css-mqpacker")({}),
		require("postcss-csso")({
			comments: false
		}),
		require("postcss-banner")({
			banner: banner
		}),
		require("cssnano")({
			mergeRules: false,
			discardComments: false
		}),
		require("postcss-cssstats")(function (stats) {
			console.log("Size: ", stats.size, ", ", "gzip Size", stats.gzipSize);
		})
	]
};
var debug = process.env.NODE_ENV !== "production";

module.exports = {
	// context: __dirname + "/app",
	// devtool: debug ? "inline-sourcemap" : null,
	entry: {
		app: [`${__dirname}/app/index.js`]
	},
	output: {
	    path: `${__dirname}/app`,
	    filename: 'index.bundle.js',
  	},
	module:{
		loaders: [
			{
				test:/\.js?$/,
				exclude: /node_modules/,
				loader:'babel-loader',
				query:{
					presets:[
						'react',
						'es2015',
						// 'statge-0'
					]
				},
			},
		],
	},
	devServer:{
		inline:true,
		port: 80,
		contentBase: './app'
	},

}
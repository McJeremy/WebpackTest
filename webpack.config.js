var webpack = require('webpack');

module.exports = {
	entry:{
		entry1:'./entry.js'
	},
	output:{
		path:'build',
		filename:'[name].entry.js'
	},
	resolve:{
		'extensions':['','js','jsx']
	},
	module: {
        loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}]
    },
}
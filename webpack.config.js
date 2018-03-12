const webpack = require('webpack');
const path = require('path'); // node的path模块一般用于合并路径
const HtmlWebpackPlugin = require('html-webpack-plugin');

const components = ['index', 'color']

let entrys = {} // 入口文件容器
let plugins = []
components.forEach((item, index) => {
	entrys[item] = path.join(__dirname, `src/${item}/${item}.js`)
	plugins.push(new HtmlWebpackPlugin({ // 路径是以上面path中的配置为初始路径
    	title: '样式表',
    	template: `./src/view/${item}.html`, // 模板路径是以当前文件夹的根目录来定义的
    	filename: `./${item}.html`,
    	inject: 'body',
    	chunks: [item]
    }))
})
const base = {
		// 页面多入口文件配置
	entry: entrys,
	  // 输出配置
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name]/[name].js'
	},
 	node: {
        fs: 'empty'
    },
	module: {
		// 加载器配置
		rules: [
			{
				test: /\.js$/, //判断当文件类型为js的时候,进行es6的转义
				exclude: [
					/node_modules/
				], //忽视node_modules下的文件,不进行转义
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
  		},
  		{
  			test: /\.hbs$/, // 配置handlebars
  			use: [
  				'handlebars-loader?helperDirs[]=' + __dirname + '/src/helpers'
  			]
  		},
  		{
  			test: /\.(png|jpg)$/,
  			use: 'url-loader?limit=8192&context=client&name=[path][name].[hash:7].[ext]'
  		}
		]
	},
	resolve: {
		modules: [
			'node_modules',
			path.join(__dirname, '/src'),
			path.join(__dirname, '/dist')
		],
  	extensions: ['.js', '.less']
  },
	watch: true, //实时监听不用手动进行编译
	devServer: {
		contentBase: './dist',
		port: 8888,
		host: '0.0.0.0',
		stats: { color: true }, //终端中输出结果为彩色
    historyApiFallback: true
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...plugins
	]
}

module.exports = base;

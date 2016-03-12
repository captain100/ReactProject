/*
Webpack 配置 React 开发环境

Webpack 是一个前端资源加载和打包工具，只需要相对简单的配置就可以提供前端工程化需要的各种功能

安装 Webpack：`npm install -g webpack`

Webpack 使用一个名为 `webpack.config.js` 的配置文件

假设我们在当前工程目录有一个入口文件 app.js，React 组件放置在一个 components/ 目录下，组件被 app.js 引用，要使用 app.js，我们把这个文件指定输出到 dist/app.min.js，Webpack 配置如下：

*/



var webpack = require('webpack'); 
var path = require('path');
//输出HTML和CSS等等文件到路径的插件
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {  
    entry: [
        "webpack-dev-server/client?http://localhost:3333",
        "webpack/hot/only-dev-server",
        "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: {
                presets: ['es2015', 'stage-0', 'react']
            } },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.png|jpg$/,loader:'url-loader'}

        ]
    },
    plugins: [

        new webpack.NoErrorsPlugin(),
        //热替换插件
        new webpack.HotModuleReplacementPlugin(),
        //输出文件插件,最顶上有引入
        new CopyWebpackPlugin([
            { from: './index.html', to: 'index.html' },
        ]),
        //以下代码为压缩代码插件,在打包的时候用,开发环境下会减慢编译速度
        //new webpack.optimize.UglifyJsPlugin({
        //    这里是去除错误提示的配置,具体看webpack文档
        //    compress: {
        //        warnings: false
        //    }
        //}),

    ],
    resolve:{
        extensions:['','.js','.json']
    },
    //配置热替换服务器,每次改变JS文件都会自动AJAX刷新浏览器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: '.',
        host: '0.0.0.0',
        port:3333
    },
    
};
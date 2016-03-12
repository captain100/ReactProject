// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

// new WebpackDevServer(webpack(config),{
// 		publicPath:config.output.publicPath,
// 		hot:true,
// 		historyApiFallback:true,
// }).listen(3322, 'localhost', function (err, result) {
// 	if ( err ) {
// 		console.log(err);
// 	}
// 	console.log('listening at localhost : 3322');
// })


var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3333, 'localhost', function (err, result) {
  if (err) console.log(err);
  console.log('Listening at localhost:3333');
});
'use strict';

var fs = require('fs');
var webpack = require('webpack');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var clc = require('cli-color');

var webpackConfig = require('./webpack.dev.config');
var config = require('./config');

var app = express();
var port = config.port;
var compiler = webpack(webpackConfig);

var fullPath = __dirname + '/' + config.root + '/';

fs.exists(fullPath + config.distDir + '/' + config.bundle, function (exists) {
	if (exists) {
		fs.unlink(fullPath + config.distDir + '/' + config.bundle, function (){
			fs.rmdir(fullPath + config.distDir + '/');
		});	
	}
});

app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(fullPath));

app.get('/', function (req, res) {
	res.sendFile(fullPath + 'index.html');
});

app.listen(port, function (error) {
	if (error) {
		console.error(clc.red(error))
	} else {
		console.log(clc.green('DevServer: ') + clc.yellow('http://localhost:' + port));
		console.log(clc.green('-------------------------------------------'));
	}
});
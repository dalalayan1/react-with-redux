
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
let app = express();
const config = require('./webpack.config');
const compiler = webpack(config);
app.use('/', express.static(__dirname + '/'));
app.use(webpackDevMiddleware(compiler, {noInfo:true, publicPath: '/'}));
app.use(webpackHotMiddleware(compiler));

app.use('/',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen('3030',() => console.log('listening to 3030'));

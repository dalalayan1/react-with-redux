const path = require('path');
const express = require('express');
let app = express();

//app.use('/',express.static(path.join(__dirname,'/')));

// import { render } from 'react';
// import { renderToString } from 'react-dom/server';
// import { ServerRouter } from 'react-router';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { Router, RouterContext, match } from 'react-router';

//import rootReducer from './src/reducers/index.js';

//import MainComponent from './src/containers/main-container.js';

import document from './template.js';

// const config = require('./webpack.config');
// const compiler = webpack(config);
// app.use(webpackDevMiddleware(compiler, {noInfo:true, publicPath: '/'}));
// app.use(webpackHotMiddleware(compiler));
const  sendResponse = require('./dist/SSR-bundle.js');
// app.use( (req,res,next) => {

//     const store = createStore(rootReducer);

//     match()

// } ); 
//console.log('fun ',sendResponse());
app.get('/',sendResponse.default);

app.listen('3030', () => console.log('listening'));
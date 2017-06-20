import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import configureStore from './store/configureStore';
import Maincomponent from './containers/main-container.js';
import document from '../template';

let state = null;
if ( window && window.$REDUX_STATE ) {

	// 解開 server 預先傳來的資料包，稍後會放入 store 成為 initState
	state = window.$REDUX_STATE;
}

const store=configureStore(state);

const html = renderToString(
							<Provider store={store}>
								<Maincomponent/>
							</Provider>);

const sendResponse = (req,res) => {
    res.send(document({
        title: 'server-side react',
        body: html
    }))
}

export default sendResponse;
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();
const root = document.querySelector('#root');

render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	root
);
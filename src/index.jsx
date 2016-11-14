import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import './styles/test.scss';
import './styles/test.less';

import configureStore from './utils/configureStore';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.querySelector('#app')
);

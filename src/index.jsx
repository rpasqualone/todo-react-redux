/*
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/app.component';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider>
		<MyAwesomeReactComponent />
	</MuiThemeProvider>,
	document.getElementById('app')
);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import './styles/test.scss';
import './styles/test.less';

import configureStore from './utils/configureStore';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<Router history={browserHistory} routes={routes} />
		</MuiThemeProvider>
	</Provider>,
	document.querySelector('#app')
);


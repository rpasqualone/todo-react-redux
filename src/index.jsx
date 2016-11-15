import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/app.component';
var injectTapEventPlugin = require("react-tap-event-plugin");

const App = () => (
	<MuiThemeProvider>
		<MyAwesomeReactComponent />
	</MuiThemeProvider>
);

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import './styles/test.scss';
import './styles/test.less';

import configureStore from './utils/configureStore';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
	<MuiThemeProvider>
		<Provider store={store}>
			<Router history={browserHistory} routes={routes} />
		</Provider>
	</MuiThemeProvider>,
	document.querySelector('#app')
);
*/

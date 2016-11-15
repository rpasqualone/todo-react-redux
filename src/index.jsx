import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// TODO: Determine if we want Material UI for reusable UI components only
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './styles/test.scss';
import './styles/test.less';

import configureStore from './utils/configureStore';
import routes from './routes';

const store = configureStore();

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider>
		<Provider store={store}>
			<Router history={browserHistory} routes={routes} />
		</Provider>
	</MuiThemeProvider>,
	document.querySelector('#app')
);

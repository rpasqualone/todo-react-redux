import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// TODO: Determine if we want Material UI for reusable UI components only
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'bootstrap/dist/css/bootstrap.css';

import './styles/test.scss';
import './styles/test.less';

import configureStore from './utils/configureStore';
import Routes from './routes';

const store = configureStore();

injectTapEventPlugin();

ReactDOM.render(

	<MuiThemeProvider>
		<Provider store={store}>
			<Routes />
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('app')
);

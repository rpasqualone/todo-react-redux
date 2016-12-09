import React from 'react';
import { Route, browserHistory, Router, IndexRoute } from 'react-router';

import App from './components/app.component';
import TodoList from './containers/todoList.container';
import Temp from './components/temp.component';

export default function() {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={TodoList} />
				<Route path="/temp" component={Temp} />
			</Route>
		</Router>
	);
}

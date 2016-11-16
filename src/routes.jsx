import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import App from './components/app.component';
import TodoList from './containers/todoList.container';
import Temp from './components/temp.component';
import ItemsContainer from './containers/items.container';

export default function() {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={TodoList} />
				<Route path="/temp" component={Temp} />
				<Route path="/items" component={ItemsContainer} />
			</Route>
		</Router>
	);
}

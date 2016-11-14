import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.component';
import TodoList from './containers/todoList.container';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={TodoList} />
	</Route>
);

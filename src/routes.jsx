import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.component';
import TodoList from './containers/todoList.container';
import Temp from './components/temp.component';

import ItemCard from './components/item/card';
import ItemCardList from './components/item/cardList';

import StyleGuide from './components/StyleGuide.component';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ItemCard} />
		<Route path="todolist" component={TodoList} />
		<Route path="temp" component={Temp} />
		<Route path="styleguide">
			<IndexRoute component={StyleGuide} />
			<Route path="itemcardlist" component={ItemCardList} />
		</Route>
	</Route>
);

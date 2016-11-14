import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import ui from 'redux-ui-shallow';

import Todo from './todo.component';

@ui({
	state: { selectedTodo: null }
})

@pureRender
export default class TodoList extends Component {
	componentWillMount() {
		this.refresh();
	}

	render() {
		return (
			<div>
				<ul>
					{ this.renderTodos() }
					<li>
						<Todo
							todo={{id: -1}}
							createTodo={ this.props.dispatch.createTodo }
						/>
					</li>
				</ul>
			</div>
		);
	}

	renderTodos = () => {
		const { todos } = this.props;
		return todos.map((todo) => {
			return (
				<li key={ todo.id }>
					<Todo todo={ todo } updateTodo={ this.props.dispatch.updateTodo } deleteTodo={ this.props.dispatch.deleteTodo } />
				</li>
			);
		});
	};

	refresh = () => {
		this.props.dispatch.fetchTodos();
	};
}

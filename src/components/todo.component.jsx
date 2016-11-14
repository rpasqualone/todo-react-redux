import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import ui from 'redux-ui-shallow';

import TodoForm from './forms/todo.form';

import '../styles/todo.css';

@ui()
@pureRender
export default class Todo extends Component {
	render() {
		const todo = this.props.todo;

		if (!todo.id) {
			return (
				<div className="new">
					<span onClick={this.handleSelectEvent}>Add Todo: Click to create a new todo.</span>
				</div>
			);
		} else if (this.props.ui.selectedTodo !== todo.id) {
			return (
				<div className={todo.done ? 'done' : ''}>
					<input type="checkbox" checked={todo.done} onClick={this.handleCheckbox} />
					<span onClick={this.handleSelectEvent}>{`${todo.title}: ${todo.message}`}</span>
				</div>
			);
		} else {
			return (
				<TodoForm onSubmit={this.handleSubmit} todo={todo} />
			);
		}
	}

	handleCheckbox = () => {
		const todo = this.props.todo;

		this.props.updateTodo(todo.id, {done: !todo.done});
	};

	handleSelectEvent = () => {
		this.props.updateUI('selectedTodo', this.props.todo.id);
	};

	handleSubmit = (values) => {
		if (!this.props.pristine) {
			this.props.updateTodo(this.props.todo.id, values).then(() => {
				this.props.updateUI('selectedTodo', null);
			});
		}
	};
}

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

		if (this.props.ui.selectedTodo === todo.id) {
			return (
				<div>
					<TodoForm onSubmit={this.handleSubmit} todo={todo} handleDelete={this.handleDelete}/>
				</div>
			);
		} else if (todo.id === -1) {
			return (
				<div className={'new'}>
					<span onClick={this.handleSelectEvent}>New Todo: Click to create a new todo.</span>
				</div>
			);
		} else {
			return (
				<div className={todo.done ? 'done' : ''}>
					<input type="checkbox" checked={todo.done} onClick={this.handleCheckbox} />
					<span onClick={this.handleSelectEvent}>{`${todo.title}: ${todo.message}`}</span>
				</div>
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

	handleDelete = () => {
		console.log(this.props.todo.id);
		this.props.deleteTodo(this.props.todo.id).then(() => {
			//this.props.updateUI('selectedTodo', null);
		});
	};

	handleSubmit = (values) => {
		const { todo } = this.props;

		if (!this.props.pristine) {
			if (todo.id !== -1) {
				this.props.updateTodo(todo.id, values).then(() => {
					this.props.updateUI('selectedTodo', null);
				});
			} else {
				values.done = false;
				this.props.createTodo(values).then(() => {
					this.props.updateUI('selectedTodo', null);
				});
			}
		}
	};
}

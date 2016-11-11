import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import pureRender from 'pure-render-decorator';

import TodoForm from './forms/todo.form';

import '../styles/todo.css';

@pureRender
export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.updateCompletion = this.updateCompletion.bind(this);
    }

    render() {
        const todo = this.props.todo;

        if (!this.props.selectedTodo) {
            return (
                <div className={todo.done ? 'done' : ''}>
                    <input type="checkbox" checked={todo.done} onClick={this.updateCompletion} />
                    <span onClick={this.props.selectTodo}>{`${todo.title}`}</span>
                </div>
            );
        } else {
            return (
                <TodoForm todo={todo} updateTodo={this.updateCompletion} />
            )
        }
    }

    updateCompletion() {
        const todo = this.props.todo;

        this.props.updateTodo(todo.id, {done: !todo.done});
    }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import pureRender from 'pure-render-decorator';
import ui from 'redux-ui-shallow';

import { fetchTodos, updateTodo } from '../actions/todo.actions';
import Todo from './todo.component';

@ui({
    state: { selectedTodo: null }
})

@pureRender
class TodoList extends Component {
    constructor() {
        super();

        this.renderTodos = this.renderTodos.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentWillMount() {
        this.refresh();
    }

    refresh() {
        this.props.dispatch.fetchTodos();
    }

    render() {
        return (
            <div>
              <ul>
                  { this.props.todos ? this.renderTodos() : '' }
              </ul>
                {this.props.children}
            </div>
        );
    }

    renderTodos() {
        const { todos, ui } = this.props;
        return todos.map((todo, i) => {
            return (
                <li key={todo.id} >
                    <Todo
                        selectTodo={this.handleSelectEvent.bind(this, i)}
                        key={i} todo={todo}
                        selectedTodo={ui.selectedTodo === i}
                        updateTodo={this.props.dispatch.updateTodo}
                    />
                </li>
            );
        });

    }

    handleSelectEvent(i) {
        this.props.updateUI('selectedTodo', i)
    }
}

function mapStateToProps(state) {
    return { todos: state.todos.all, form: state.form.todo };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTodos, updateTodo }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    return { ...ownProps, ...stateProps, dispatch: dispatchProps};
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TodoList);

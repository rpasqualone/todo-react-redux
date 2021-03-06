import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTodos, updateTodo, createTodo, deleteTodo } from '../actions/todo.actions';
import TodoList from '../components/todoList.component';

function mapStateToProps(state) {
	return { todos: state.todos.all };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchTodos, updateTodo, createTodo, deleteTodo }, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
	return { ...ownProps, ...stateProps, dispatch: dispatchProps};
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TodoList);

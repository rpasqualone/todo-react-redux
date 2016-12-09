import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODO = 'FETCH_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

import { _fetchTodos } from '../translations/todo.translation';

export function fetchTodos() {
	const instance = axios.create();

	//call to translation layer
	_fetchTodos(instance);

	//const request = axios.get(`${process.env.API_URI}/todos/`);
	const request = instance.get('thisCanBeAnythingWeWant.com');

	return {
		type: FETCH_TODOS,
		payload: request
	};
}

export function fetchTodo(id) {
	const request = axios.get(`${process.env.API_URI}/todos/${id}`);

	return {
		type: FETCH_TODO,
		payload: request
	};
}

export function createTodo(props) {
	const request = axios.post(`${process.env.API_URI}/todos/`, props);

	return {
		type: CREATE_TODO,
		payload: request
	};
}

export function updateTodo(id, props) {
	const request = axios.patch(`${process.env.API_URI}/todos/${id}`, props);

	return {
		type: UPDATE_TODO,
		payload: request
	};
}

export function deleteTodo(id) {
	const request = axios.delete(`${process.env.API_URI}/todos/${id}`).then(() => {
		return { id };
	});

	return {
		type: DELETE_TODO,
		payload: request
	};
}

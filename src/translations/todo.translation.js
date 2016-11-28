import axios from 'axios';

export function _fetchTodos(axiosInstance) {
	axiosInstance.interceptors.request.use((config) => {
		config.url = `${process.env.API_URI}/todos/`;

		/*function addTodo() {
		 return axios.post(`${process.env.API_URI}/todos/`, {title: 'dynamic test', message: 'this is a dynamic middleware created todo.', done: false});
		 }

		 return axios.all([addTodo(), addTodo()]).then(() => {
		 return config;
		 });
		 //*/return config;
	});
}

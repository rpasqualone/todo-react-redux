import { FETCH_TODOS, FETCH_TODO, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todo.actions';

const INITIAL_STATE = {
	all: []
};

export default function TodoReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case `${FETCH_TODOS}_COMPLETE`:
			return { ...state, all: action.payload.data };
		case `${FETCH_TODO}_COMPLETE`: {
			const todoIndex = state.all.findIndex((todo) => todo.id === action.payload.data.id);
			const all = [...state.all];

			if (todoIndex >= 0) {
				all[todoIndex] = action.payload.data;
			} else {
				all.push(action.payload.data);
			}
			return { ...state, all };
		}
		case `${UPDATE_TODO}_COMPLETE`: {
			const todoIndex = state.all.findIndex((todo) => todo.id === action.payload.data.id);

			if (todoIndex >= 0) {
				const all = [...state.all];

				all[todoIndex] = action.payload.data;
				return { ...state, all };
			}
			return state;
		}
		case `${CREATE_TODO}_COMPLETE`: {
			const all = [...state.all];

			all.push(action.payload.data);
			return { ...state, all };
		}
		case `${DELETE_TODO}_COMPLETE`: {
			const all = [...state.all];
			const todoIndex = state.all.findIndex((todo) => todo.id === action.payload.id);

			if (todoIndex >= 0) {
				all.splice(todoIndex, 1);
			}
			return { ...state, all };
		}
	}
	return state;
}

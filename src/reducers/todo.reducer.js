import { FETCH_TODOS, FETCH_TODO, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todo.actions';

const INITIAL_STATE = {
    all: [],
    ui : null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case `${FETCH_TODOS}_COMPLETE`:
            return { ...state, all: action.payload.data };
        case FETCH_TODO:
            return { ...state, todo: action.payload.data };
        case `${UPDATE_TODO}_COMPLETE`:
            const todoIndex = state.all.findIndex((todo) => {return todo.id == action.payload.data.id});
            const all = [ ...state.all ];

            if (todoIndex < all.length && todoIndex >= 0) {
                all[todoIndex] = action.payload.data;
                return {...state, all }
            }
            return state;
    }
    return state;
}

import { combineReducers } from 'redux';
import TodoReducer from './todo.reducer';
import { reducer as uiReducer } from 'redux-ui-shallow';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    todos: TodoReducer,
    ui: uiReducer,
    form: formReducer
});

export default rootReducer;

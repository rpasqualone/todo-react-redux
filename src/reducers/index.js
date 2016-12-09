import { combineReducers } from 'redux';
import { reducer as uiReducer } from 'redux-ui-shallow';
import { reducer as formReducer } from 'redux-form';

import TodoReducer from './todo.reducer';

const rootReducer = combineReducers({
	todos: TodoReducer,
	ui: uiReducer,
	form: formReducer
});

export default rootReducer;

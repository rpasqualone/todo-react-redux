import { combineReducers } from 'redux';
import { reducer as uiReducer } from 'redux-ui-shallow';
import { reducer as formReducer } from 'redux-form';

import TodoReducer from './todo.reducer';
import ItemsReducer from './items.reducer';

const rootReducer = combineReducers({
	todos: TodoReducer,
	items: ItemsReducer,
	ui: uiReducer,
	form: formReducer
});

export default rootReducer;

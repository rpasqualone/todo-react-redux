import { FETCH_ITEMS } from '../actions/items.actions';

const INITIAL_STATE = {
	all: []
};

export default function ItemsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case `${FETCH_ITEMS}_COMPLETE`:
			return { ...state, all: action.payload };
	}
	return state;
}

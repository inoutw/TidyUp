
import * as todoActions from '../actions/todos';
const DEFAULT_STATE = [{
	id: 1,
	desc: 'what you do next?',
}]

export default function (state = DEFAULT_STATE, action = {}) {
	switch (action.type) {
		case todoActions.ADD_TODO: {
			return { ...state, ...action.payload };
		}
		case todoActions.DELETE_TODO: {
			return state.filter(item => item.id != action.payload);
		}
		case todoActions.	
	}
}
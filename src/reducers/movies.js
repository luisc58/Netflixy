import { handleActions } from 'redux-actions';
import { GET_MOVIES, SET_MOVIES } from '../constants/actionTypes';
// importing handleActions to handle multiple action types

export default handleActions(
	{
		[SET_MOVIES]: (state, action) => action.payload
	},
	{}
);

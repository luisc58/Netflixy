import { handleActions } from 'redux-actions';
import { GET_MOVIES } from '../constants/actionTypes';
// importing handleActions to handle multiple action types

export default handleActions(
	{
		[GET_MOVIES]: (state, action) => state
	},
	{}
);

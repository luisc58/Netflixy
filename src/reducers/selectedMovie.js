import { handleActions } from 'redux-actions';
import { SELECT_MOVIE } from '../constants/actionTypes';
// importing handleActions to handle multiple action types

export default handleActions(
	{
		[SELECT_MOVIE]: (state, action) => state
	},
	{}
);

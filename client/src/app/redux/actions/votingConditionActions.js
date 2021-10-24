import { SET_CLIENT_ID, SET_STATE, VOTE } from '../reducers/votingCondition';

export const setClientId = (clientId) => {
	return {
		type: SET_CLIENT_ID,
		payload: clientId,
	};
};

export const votingState = (newState) => {
	return {
		type: SET_STATE,
		payload: newState,
	};
};

export const vote = (entry) => {
	return {
		meta: { remote: true },
		type: VOTE,
		entry,
	};
};

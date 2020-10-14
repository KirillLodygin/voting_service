import {
    SET_CLIENT_ID,
    SET_STATE,
    RANDOM_COLORS,
    VOTE
} from '../reducers/votingCondition';

export const setClientId = (clientId) => {
    return {
        type: SET_CLIENT_ID,
        payload: clientId
    }
};

export const votingState = (newState) => {
    return {
        type: SET_STATE,
        payload: newState
    }
};

export const randomColors = () => {
    return {
        type: RANDOM_COLORS
    }
};

export const vote = (entry) => {
    return {
        meta: {remote: true},
        type: VOTE,
        entry
    }
};
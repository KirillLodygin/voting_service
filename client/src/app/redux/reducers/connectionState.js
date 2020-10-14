export const SET_CONNECTION_STATE = 'SET_CONNECTION_STATE';

export const connectionState = (state = {}, action) => {
    switch (action.type) {
        case SET_CONNECTION_STATE:
            return {...state, connected: action.payload.connected, state: action.payload.state};

        default:
            return state;
    }
};
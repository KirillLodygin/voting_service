import { SET_CONNECTION_STATE } from "../reducers/connectionState";

export const setConnectionState = (state, connected) => {
    return {
        type: SET_CONNECTION_STATE,
        payload: {
            state,
            connected
        }
    };
};
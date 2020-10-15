import { Map } from 'immutable';

export  const SET_CLIENT_ID = 'SET_CLIENT_ID';
export const SET_STATE = 'SET_STATE';
export const VOTE = 'VOTE';

const setState = (state, newState) => {
    let mergedState = state.merge(newState);
    const votedForRound = mergedState.getIn(['myVote', 'round']);
    const currentRound = mergedState.getIn(['vote', 'round']);
    if(votedForRound !== currentRound){
        return mergedState.remove('myVote');
    } else {
        return mergedState;
    }
};

const vote = (state, entry) => {
    const currentRound = state.getIn(['vote', 'round']);
    const currentPair = state.getIn(['vote', 'pair']);
    if (currentPair && currentPair.includes(entry)){
        return state.set('myVote', Map({
            round: currentRound,
            entry
        }));
    } else {
        return state;
    }
};

export const votingCondition = (state = Map(), action) => {
    switch (action.type) {
        case SET_CLIENT_ID:
            return state.set('clientId', action.payload);

        case SET_STATE:
            return setState(state, action.payload);

        case VOTE:
            return vote(state, action.entry);

        default:
            return state;
    }
};
export const VOTED = 'VOTED';

export const votedState = (state = {voted: false}, action) => {
    return (action.type === VOTED) ? {...state, voted: action.payload} : state;
};
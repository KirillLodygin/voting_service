import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { votingCondition } from './votingCondition';
import { connectionState } from './connectionState';
import { votedState } from './voted';

export default history =>
    combineReducers({
        router: connectRouter(history),
        votingCondition: votingCondition,
        connectionState: connectionState,
        votedState: votedState
    });
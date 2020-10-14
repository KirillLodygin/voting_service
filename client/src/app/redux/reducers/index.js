import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { votingCondition } from './votingCondition';
import { connectionState } from './connectionState';

export default history =>
    combineReducers({
        router: connectRouter(history),
        votingCondition: votingCondition,
        connectionState: connectionState,
    });
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './app/redux/configureStore';
import io from 'socket.io-client';
import './index.css';

import App from './App';

import {
    setClientId,
    votingState
} from './app/redux/actions/votingConditionActions';
import { setConnectionState } from './app/redux/actions/connectionStateActions';
import getClientId from './app/client_id';

const socket = io(`${window.location.protocol}//${window.location.hostname}:8090`);
socket.on('state', state =>
    store.dispatch(votingState(state))
);
[
    'connect',
    'connect_error',
    'connect_timeout',
    'reconnect',
    'reconnecting',
    'reconnect_error',
    'reconnect_failed'
].forEach(ev =>
    socket.on(ev, () => store.dispatch(setConnectionState(ev, socket.connected)))
);

export const store = configureStore(socket);
store.dispatch(setClientId(getClientId()));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);
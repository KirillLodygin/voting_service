import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import remoteActionMiddleware from './remote_action_middleware';
import createrootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(socket) {
    const store = createStore(
        createrootReducer(history),
        compose(
            applyMiddleware(routerMiddleware(history), thunk, logger, remoteActionMiddleware(socket)),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : f => f
        )
    );
    return store;}
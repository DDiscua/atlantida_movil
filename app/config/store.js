import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import devToolsEnhancer from 'remote-redux-devtools';
import { middleware } from '../utilities/redux';
import AppReducer from '../reducers/index';


const enhancer = compose(
    // Middleware you want to use in development:
    composeWithDevTools(
        applyMiddleware(thunkMiddleware, logger, middleware)
    )
)

const store = createStore(
    AppReducer,
    {},
    enhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    devToolsEnhancer({ realtime: true, port: 8081 })
)

export default store
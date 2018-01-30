import { combineReducers } from 'redux';
import auth from './auth';
import connections from './connections';
const rootReducer = combineReducers({
    connections,
    auth
});

export default rootReducer;
import { combineReducers } from 'redux';
import auth from './auth';
import connections from './connections';
import language from './language';


const rootReducer = combineReducers({
    connections,
    auth,
    language
});

export default rootReducer;
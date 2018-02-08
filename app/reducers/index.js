import { combineReducers } from 'redux';
import nav from './nav';
import { NavigationActions } from 'react-navigation';
import connections from './connections';
import auth from './auth';
import language from './language';

const AppReducer = combineReducers({
    nav,
    connections,
    auth,
    language
});

export default AppReducer;
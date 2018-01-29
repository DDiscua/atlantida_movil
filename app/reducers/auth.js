import {LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS,LOGOUT_FAIL } from '../actions/types';

const defaultState = {
    isLoggedIn: false,
    username: '',
    password: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.username
            });
        case LOGIN_FAIL:
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.username        
            });    
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: null
            });
        case LOGOUT_FAIL:
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: ''
            });    
        default:
            return state;
    }
}
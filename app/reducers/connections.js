import { SET_ENDPOINT_SUCCESS, SET_ENDPOINT_FAIL } from '../actions/constants/TYPES';

const defaultState = {
    URL: 'http://150.150.70.89:8080/cb/odata'
};

export default function auth(state = defaultState, action) {
    switch (action.type) {
        case SET_ENDPOINT_SUCCESS:
            return Object.assign({}, state, {
                URL: action.URL
            });
        case SET_ENDPOINT_FAIL:
            return Object.assign({}, state, {
                URL: null
            });

        default:
            return state;
    }
}
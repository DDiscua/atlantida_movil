import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, IMAGE_SUCCESS, IMAGE_FAIL } from '../actions/constants/TYPES';

const initialAuthState = {
    isLoggedIn: false,
    imageId: '',
    secretPhrase: '',
    error: false,
    error_code: '',
};

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true };
        case LOGIN_FAIL:
            return { ...state, isLoggedIn: false };
        case LOGOUT_SUCCESS:
            return { ...state, isLoggedIn: false };
        case LOGOUT_FAIL:
            return { ...state, isLoggedIn: true };
        case IMAGE_SUCCESS:
            return Object.assign({}, state, {
                imageId: action.imageId,
                secretPhrase: action.secretPhrase
            });
        case IMAGE_FAIL:
            return Object.assign({}, state, {
                error: true,
                error_code: 'USER_NOT_EXIST'
            });
        default:
            return state;
    }
}

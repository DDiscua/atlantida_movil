const { SET_LANGUAGE_SUCCESS, SET_LANGUAGE_FAIL } = './constants/TYPES';


const defaultState = {
    currentLanguage: {}
};

export default function auth(state = defaultState, action) {
    switch (action.type) {
        case SET_LANGUAGE_SUCCESS:
            return Object.assign({}, state, {
                currentLanguage: {}
            });
        case SET_LANGUAGE_FAIL:
            return Object.assign({}, state, {
                currentLanguage: null
            });
        default:
            return state;
    }
}
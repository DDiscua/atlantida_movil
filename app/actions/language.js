const { SET_LANGUAGE_SUCCESS, SET_LANGUAGE_FAIL } = './constants/TYPES';

export const setLanguage = (currentLaguage) => {

    return dispatch({
        type: SET_LANGUAGE_SUCCESS,
        currentLaguage: currentLaguage
    })
};
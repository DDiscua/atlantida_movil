const { SET_ENDPOINT_SUCCESS, SET_ENDPOINT_FAIL } = './constants/TYPES';

export const setEnpoint = (URL) => {
    console.log('URL ', URL);
    return dispatch => {
        return dispatch({
            type: SET_ENDPOINT_SUCCESS,
            URL: URL
        })
    }
};
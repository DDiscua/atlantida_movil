import { SET_ENDPOINT_SUCCESS, SET_ENDPOINT_FAIL } from './constants/TYPES';

export default setEnpoint = ({ endPoint }) => {
    console.log('URL ', endPoint);
    return dispatch => {
        return dispatch({
            type: SET_ENDPOINT_SUCCESS,
            URL: endPoint
        })
    }
};
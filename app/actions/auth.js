import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from './types';

export const login = (data) => {

    return dispatch => {
        return axios
            .post('/api/login', data)
            .then(
            (res) => {

                if (res.data.success) {
                    //**IF RESPONSE OK*
                    dispatch({
                        type: LOGIN_SUCCESS,
                        username: ''
                    });
                }
                return res;
            },
            (err) => {
                dispatch({
                    type: LOGIN_FAIL,
                    username: null
                });
            }
            ).catch(error => {
                console.log(error)
            });
    }

};

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

export const signup = (username, password) => {
    return (dispatch) => {
    };
};
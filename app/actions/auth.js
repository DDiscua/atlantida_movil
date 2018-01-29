import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, IMAGE_SUCCESS, IMAGE_FAIL  } from './constants/TYPES';
import { HTTP_SUCCESS } from './constants/HTTP_CODES';
import axios from 'axios';
let instance = axios.create({
    baseURL: 'http://200.3.194.103:8080/cb/odata',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'   
    }
});

export const secretImage = (username) => {
    return dispatch => {
        return instance
            .get('/ns/secretimageservice/SecretImages(UserName=\''+ username +'\')')
            .then(
            (res) => {
                let data = res.data.d;
                if (res.status === HTTP_SUCCESS && data.SecretPhrase.toUpperCase() !== '' && data.ImageId !== '') {
                    //**IF RESPONSE OK*
                    dispatch({
                        type: IMAGE_SUCCESS,
                        imageId: data.ImageId,
                        secretPhrase: data.SecretPhrase
                    });
                }else{
                    dispatch({
                        type: IMAGE_FAIL
                    });
                }
                //return res;
            },
            (err) => {
                dispatch({
                    type: IMAGE_FAIL
                });
            }
            ).catch(error => {
                console.log(error);
                dispatch({
                    type: IMAGE_FAIL
                });
            });
    }

};

export const login = (data) => {
    return dispatch => {
        return instance
            .get('/ns/secretimageservice/SecretImages(UserName=\''+ data.username +'\')')
            .then(
            (res) => {
                console.log(res);
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
import {LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS,LOGOUT_FAIL, IMAGE_SUCCESS, IMAGE_FAIL } from '../actions/constants/TYPES';

const defaultState = {
    imageId: '',
    secretPhrase: '',
    error:false,
    error_code:'',
  };

export default function auth(state = defaultState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                
            });
        case LOGIN_FAIL:
            return Object.assign({}, state, {
                   
            });    
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
              
            });
        case LOGOUT_FAIL:
            return Object.assign({}, state, {
               
            }); 
        case IMAGE_SUCCESS:
            return Object.assign({},state,{
                imageId: action.imageId,
                secretPhrase: action.secretPhrase
            });
        case IMAGE_FAIL:
            return Object.assign({},state,{
                error: true,
                error_code: 'USER_NOT_EXIST'
            });
        default:
            return state;
    }
}
import { userConstants } from '../helpers';
import { userService } from '../helpers';
import { alertActions } from './';
import { history } from '../helpers';
import axios from "axios";

const LOGIN_URL = "https://test1.letstango.com/react/customer/getlogin/";

export const userActions = {
    login,
    logout,
    getAll
};

export function login(username, password){
return function(dispatch) {
        //dispatch(requestAPI());
      let data = JSON.stringify({
                email: username,
                password:password
                
        })
        
        //return axios.get(`${ROOT_URL}`, { params: { url: actualPathName }})
        //console.log(data);
        return axios.post(`${LOGIN_URL}`, data )
            .then(
                response => { 

                    dispatch(success(response.data.info));
                     history.push('/');
                    localStorage.setItem('user', JSON.stringify(response.data.info));
                   console.log(JSON.stringify(response.data.info))
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
        
        };
    
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}




function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
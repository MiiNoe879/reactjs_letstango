import { authHeader } from '../helpers';
import axios from "axios";


export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
  

        let data = JSON.stringify({
                email: username,
                password:password
                
        })


    return axios.post(`https://test1.letstango.com/react/customer/getlogin/`, data)
        .then(handleResponse)
        .then(user => {
            
            // login successful if there's a jwt token in the response

            if (user.token) {

                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {

    console.log(response)
      
    return response.json().then(data => {
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
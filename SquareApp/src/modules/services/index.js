import axios from 'axios';
// import jwt from 'jsonwebtoken';

export const fetchLoginData = (data) => {
    // try {

    var api = "http://localhost:5050";
    var formData = {
        username: data.username,
        password: data.password
    }
    return axios.post(api + '/login', formData)
        .then((res) => {

            var responsedata = res.data;
            console.log(responsedata)
            // const token = responsedata.token;
            // localStorage.setItem('access_token', token.access);
            // localStorage.setItem('refresh_token', token.refresh);
            // setAuthToken(token.access);
            // console.log(jwt.decode(token.access).user_id);
            return responsedata;
        })
        .catch((e) => {
            console.log(e);
            return e.response;
        });
};
import axios from 'axios';

export const fetchLoginData = (data) => {
    // try {
    console.log("data: ", data);
    var formData = {
        email: data.email,
        password: data.password
    }
    console.log(formData)
    return axios.post('http://localhost:5050' + '/login', formData)
        .then((res) => {
            var responsedata = res.data;
            console.log(responsedata)
            return responsedata;
        })
        .catch((e) => {
            console.log(e);
            return e.response;
        });
};

export const fetchUsers = () => {
    return axios.get('http://localhost:5050' + '/users')
        .then(res => {
            const users = res.data;
            return users
        }).catch((e) => {
            console.log("Error:  ", e.response)
        });
}
import axios from 'axios';
// let API_URL = 'http://localhost:5050'
let API_URL = 'http://18.236.67.17:5000'

let getHeaderWithAccessToken = () => {
    return {
        headers: { 'Authorization': "Bearer " + localStorage.getItem("access_token") }
    };
}

export const fetchLoginData = (data) => {

    var formData = {
        email: data.email,
        password: data.password
    }

    return axios.post(API_URL + '/login', formData)
        .then((res) => {
            var responsedata = res.data;

            localStorage.setItem("access_token", responsedata.data.access)
            localStorage.setItem("refresh_token", responsedata.data.refresh)
            localStorage.setItem("id", responsedata.data.id)
            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
};

export const logoutUser = (data) => {

    return axios.post(API_URL + '/logout', data, getHeaderWithAccessToken())
        .then((res) => {
            var responsedata = res.data;

            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
};

export const fetchCheckEmail = (data) => {

    return axios.post(API_URL + '/forget_password/request', data)
        .then((res) => {
            var responsedata = res.data;

            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
}

export const fetchVerifyOTP = (data) => {

    return axios.post(API_URL + '/verify_otp', data)
        .then((res) => {
            var responsedata = res.data;

            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
}

export const updateForgetPassword = (data) => {

    return axios.put(API_URL + '/forget_password/update', data)
        .then((res) => {
            var responsedata = res.data;

            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
}

export const GetAllUsers = () => {
    return axios.get(API_URL + '/users', getHeaderWithAccessToken())
        .then((res) => {
            var responsedata = res.data;

            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
}

export const GetAllVisits = () => {
    return axios.get(API_URL + '/visit', getHeaderWithAccessToken())
        .then((res) => {
            var responsedata = res.data;
            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
}

export const GetSearchVisits = (datas) => {

    return axios.post(API_URL + '/visit/search', datas, getHeaderWithAccessToken())
        .then((res) => {
            var responsedata = res.data;

            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
}

export const RegisterUser = (data) => {
    return axios.post(API_URL + '/register', data, getHeaderWithAccessToken())
        .then((res) => {
            var responsedata = res.data;

            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
}

export const GetSearchUser = (datas) => {

    return axios.post(API_URL + '/user/search', datas, getHeaderWithAccessToken())
        .then((res) => {
            var responsedata = res.data;

            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
}

export const GetOneUser = (id) => {
    return axios.get(API_URL + '/users/' + id, getHeaderWithAccessToken())
        .then((res) => {
            var responsedata = res.data;

            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
}

export const UpdateUserData = (data, id) => {
    return axios.put(API_URL + '/users/update/' + id, data, getHeaderWithAccessToken())
        .then((res) => {
            var responsedata = res.data;

            return responsedata;
        })
        .catch((e) => {
            // console.log(e);
            return e.response;
        });
}

export const ResetPassword = (data) => {

    return axios.put(API_URL + "/reset_password", data, getHeaderWithAccessToken())
        .then((res) => {
            var responsedata = res.data;

            return responsedata
        })
        .catch((e) => {
            // console.log(e);
            return e.response
        });
}
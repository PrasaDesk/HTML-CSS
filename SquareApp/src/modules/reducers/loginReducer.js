import { RESPONSE_LOGIN_DATA } from "../actions/index";


export default (state = {}, { type, data }) => {
    switch (type) {
        case RESPONSE_LOGIN_DATA:
            return data;
        default:
            return state;
    }
};

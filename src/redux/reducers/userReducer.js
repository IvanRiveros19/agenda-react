import {
    START_AUTH ,SUCCESS_AUTH, ERROR_AUTH
} from "../types";

const initialSate = {
    name: "",
    lastName: "",
    token: "",
    loading: false,
    error: ""
}

export default function (state = initialSate, action) {
    switch (action.type) {
        case START_AUTH:
            return {
                ...state,
                loading: true
            }
            break;
        case SUCCESS_AUTH:
            return {
                ...state,
                loading: false,
                error: "",
                name: action.payload.name,
                lastName: action.payload.lastName,
                token: action.payload.token
            }
            break;
        case ERROR_AUTH:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            break;
        default:
            return state;
    }
}
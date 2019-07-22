import loginApi from "../DAL/apiService";
import {statuses} from "../DAL/statuses";
import {setAuth} from "./authReducer";

const CHANGE_VALUE = 'LOGIN/CHANGE_VALUE';
const SET_STATUS = 'LOGIN/SET_STATUS';
const SET_CAPTCHA_URL = 'LOGIN/SET_CAPTCHA_URL';
const SET_CAPTCHA_REQUIRED = 'LOGIN/SET_CAPTCHA_REQUIRED';
const SET_ERROR_MESSAGE = 'LOGIN/SET_ERROR_MESSAGE';
const SET_USER_ID = 'LOGIN/SET_USER_ID';

const initState = {

    email: '',
    password: '',
    rememberMe: false,
    captchaRequired: false,
    captchaUrl: '',
    captcha: '',
    errorMessage: '',
    status: statuses.NOT_INITIALIZED,
    userId: '',

}


let loginReducers = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_VALUE:
            return {...state, [action.fieldName]: action.fieldValue,};
        case SET_STATUS:
            return {...state, status: action.status,};
        case SET_CAPTCHA_URL:
            return {...state, captchaUrl: action.captchaUrl,};
        case SET_CAPTCHA_REQUIRED:
            return {...state, captchaRequired: action.captchaRequired,};
        case SET_ERROR_MESSAGE:
            return {...state, errorMessage: action.errorMessage,};
        case SET_USER_ID:
            return {...state, userId: action.userId,};
        default:
            return state;
    }
};

export const setChangeFieldValue = (fieldValue, fieldName) => ({type: CHANGE_VALUE, fieldValue, fieldName});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl});
export const setCaptchaRequired = (captchaRequired) => ({type: SET_CAPTCHA_REQUIRED, captchaRequired});
export const setErrorMessage = (errorMessage) => ({type: SET_ERROR_MESSAGE, errorMessage});
export const setUserId = (userId) => ({type: SET_USER_ID, userId});


export const login = () => async (dispatch, getState) => {
    dispatch(setStatus(statuses.IN_PROGRESS))
    let {email, password, rememberMe, captcha} = getState().login;
    let response = await loginApi.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        dispatch(setStatus(statuses.SUCCESS));
        dispatch(setUserId(response.data.userId));
        dispatch(setErrorMessage(response.messages));
        dispatch(setCaptchaRequired(false))
        dispatch(setAuth(true))
    }
    if (response.resultCode === 1) {
        dispatch(setStatus(statuses.ERROR));
        dispatch(setErrorMessage(response.messages));
    }
    if (response.resultCode === 10) {
        dispatch(setStatus(statuses.ERROR));
        dispatch(setErrorMessage(response.messages));
        dispatch(getCaptcha());
    }
};

export const getCaptcha = () => async (dispatch) => {
    let response = await loginApi.getCaptcha();
    dispatch(setCaptchaUrl(response.url));
    dispatch(setCaptchaRequired(true))
};

export const logOut = () => async (dispatch) => {
    let response = await loginApi.logOut();
    dispatch(setAuth(false));
};




export default loginReducers;
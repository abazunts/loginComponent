import loginApi from "../DAL/apiService";
import {statuses} from "../DAL/statuses";
import {setUserId} from "./loginReducer";


const SET_AUTH = 'SN/AUTH/SET_AUTH';
const SET_STATUS = 'SN/AUTH/SET_STATUS';
const SET_USER_INFO = 'SN/AUTH/SET_USER_INFO';

const initialState = {
    isAuth: false,
    userInfo: {
        userId: null,
        email: null,
        login: null,
    },
    status: statuses.NOT_INITIALIZED,
}

let AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_AUTH:
            return {...state, isAuth: action.isAuth}
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.userId,
                    login: action.login,
                }
            }
        default:
            return state
    }
}

export const setAuth = (isAuth) => ({type: SET_AUTH, isAuth});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUserInfo = (userId, login) => ({type: SET_USER_INFO, userId, login})



export const authMe = () => async (dispatch) => {
    dispatch(setStatus(statuses.IN_PROGRESS));
    let response = await loginApi.authMe();
        if (response.resultCode === 0) {
            dispatch(setUserInfo(response.data.id, response.data.login))
            dispatch(setUserId(response.data.id, response.data.login))
            dispatch(setAuth(true))
            dispatch(setStatus(statuses.SUCCESS))
        }
        if (response.resultCode === 1) {
            dispatch(setAuth(false))
            dispatch(setStatus(statuses.ERROR))
        }
};


export default AuthReducer;
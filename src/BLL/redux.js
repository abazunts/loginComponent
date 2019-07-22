import React from 'react'
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    login: loginReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk))

export default store;
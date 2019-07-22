import React from 'react'
import {connect} from "react-redux";
import {
    authSelector,
    captchaRequiredSelector, captchaSelector,
    captchaUrlSelector,
    emailSelector, errorMessageSelector,
    passwordSelector,
    rememberMeSelector, statusSelector, userIdSelector
} from "../../BLL/loginSelector";
import {login, setChangeFieldValue} from "../../BLL/loginReducer";
import Login from "./Login";


let mapStateToProps = (state) => {
    return ({
        email: emailSelector(state),
        password: passwordSelector(state),
        rememberMe: rememberMeSelector(state),
        captchaRequired: captchaRequiredSelector(state),
        captchaUrl: captchaUrlSelector(state),
        captcha: captchaSelector(state),
        errorMessage: errorMessageSelector(state),
        status: statusSelector(state),
        userId: userIdSelector(state),
        isAuth: authSelector(state),
    })
}
let mapDispatchToProps = (dispatch) => {
    return ({
        setChangeFieldValue: (fieldValue, fieldName) => {
            dispatch(setChangeFieldValue(fieldValue, fieldName))
        },

        login: () => {
            dispatch(login())
        },


    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React from 'react'
import {Redirect} from "react-router-dom";


let Login = (props) => {

    let {captchaUrl, email, password,
        rememberMe, captcha, captchaRequired,
        status, errorMessage, isAuth} = props;

    let {setChangeFieldValue, login} = props

    let onChangeFieldValue = (e) => {
        e.target.type === 'checkbox'
            ? setChangeFieldValue(e.target.checked, e.target.name)
            : setChangeFieldValue(e.target.value, e.target.name)
    }

    return (
        <div>
            {isAuth && <Redirect to={'/'}/>}
            <div>
                <div>Email</div>
                <input name={'email'} type={'text'} value={email} onChange={onChangeFieldValue}/>
            </div>
            <div>
                <div>Password</div>
                <input name={'password'} type={'password'} value={password} onChange={onChangeFieldValue}/>
            </div>
            <div>
                <input name={'rememberMe'}  type={'checkbox'} checked={rememberMe} onChange={onChangeFieldValue}/>
                <span>rememberMe</span>
            </div>
            {captchaRequired &&
            <div>
                <div>
                    <img src={captchaUrl}/>
                </div>
                <div>
                    <input name={'captcha'} type={'text'} value={captcha} onChange={onChangeFieldValue}/>
                </div>
            </div>
            }
            <div>
                <button onClick={login}>Login</button>
            </div>
            <div>{errorMessage}</div>
            <div>{status}</div>
        </div>
    )
};

export default Login;
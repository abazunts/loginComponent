import React from 'react';
import {NavLink} from "react-router-dom";



let Profile = (props) => {

    let {logOut} = props;
    let {isAuth, login} = props;

    return (
        <div>
            {!isAuth && <NavLink to={'/login'}>Login</NavLink>}

            {isAuth && <div>login: - {login} </div> }

            {isAuth && <button onClick={logOut}>logOut</button>}


        </div>
    )
}

export default Profile;
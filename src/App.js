import React from 'react';
import './App.css';
import LoginContainer from "./UI/Login/LoginContainer";
import {Route} from "react-router-dom";
import ProfileContainer from "./UI/Profile/ProfileContainer";
import HeaderContainer from "./UI/Header/HeaderContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <Route path={'/login'} render={() => <LoginContainer/>}/>
            <Route exact path={'/'} render={() => <ProfileContainer/>}/>
        </div>
    );
}

export default App;

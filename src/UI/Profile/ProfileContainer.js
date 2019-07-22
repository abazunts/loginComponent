import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {logOut} from "../../BLL/loginReducer";
import {authSelector, loginSelector} from "../../BLL/authSelector";
import {authMe} from "../../BLL/authReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }
    render() {
       return  <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return ({
        isAuth: authSelector(state),
        login: loginSelector(state),
    })
};

let mapDispatchToProps = (dispatch) => {
    return ({
        logOut: () => {
            dispatch(logOut())
        },
        authMe: () => {
            dispatch(authMe())
        }
    })
};




export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
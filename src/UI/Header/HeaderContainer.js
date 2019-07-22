import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {authMe} from "../../BLL/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props}/>

    }
};

let mapDispatchToProps = (dispatch) => {
    return ({
        authMe: () => {
            dispatch(authMe())
        }
    })
};

export default connect(null, mapDispatchToProps)(HeaderContainer);
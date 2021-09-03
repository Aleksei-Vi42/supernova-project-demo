import React from 'react'
import Header from "./Header";
import  {logoutUserThunkCreator} from "../Redux/AuthReduser";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logOut: logoutUserThunkCreator})(HeaderContainer)
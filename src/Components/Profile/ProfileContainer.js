import React from "react"
import Profile from "./Profile"
import {connect} from "react-redux";
import {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from "../Redux/Profile-reduser";
import {Redirect, withRouter} from "react-router-dom";
import {authMeThunkCreator} from "../Redux/AuthReduser";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId = 19157}
        this.props.getProfile(userId)
        this.props.authMe()
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})


export default compose(
    connect(mapStateToProps, {
        getProfile: getProfileThunkCreator,
        authMe: authMeThunkCreator,
        getStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator
    }),
    withRouter,
       /* withAuthRedirect*/
)(ProfileContainer)
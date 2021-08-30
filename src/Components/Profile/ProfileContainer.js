import React from "react"
import Profile from "./Profile"
import {connect} from "react-redux";
import {getProfileThunkCreator} from "../Redux/Profile-reduser";
import {withRouter} from "react-router-dom";
import {authMeThunkCreator} from "../Redux/AuthReduser";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
       this.props.getProfile(userId)
        this.props.authMe()

    }

    render ()
    {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile
})

let UrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile: getProfileThunkCreator,
    authMe: authMeThunkCreator}) (UrlDataContainerComponent)
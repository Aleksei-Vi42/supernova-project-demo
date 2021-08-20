import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";
import {isFollowAC, isUnfollowAC, setUsersAC} from "../Redux/UsersReduser";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followed: (userId) => {
            dispatch(isFollowAC(userId))
        },
        unfollowed: (userId) => {
            dispatch(isUnfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps ) (Friends)

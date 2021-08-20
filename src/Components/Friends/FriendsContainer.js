import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {isFollowAC, isUnfollowAC, setCurrentPageAC, setUsersAC} from "../Redux/UsersReduser";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)

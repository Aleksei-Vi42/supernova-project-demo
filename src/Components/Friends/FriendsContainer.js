import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    isFollowAC,
    isUnfollowAC,
    setCurrentPageAC,
    setToggleIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC
} from "../Redux/UsersReduser";
import * as axios from "axios";
import {Loader} from "../Common/Preloader/Preloader";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
             /*    this.props.setTotalUsersCount(response.data.totalCount)*/
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {
     return <>
         {this.props.isFetching ? <Loader/> : null}
        <Friends totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollowed}
                      follow={this.props.followed}
                      onPageChanged={this.onPageChanged}
     />
     </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setToggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetchingAC(isFetching))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)

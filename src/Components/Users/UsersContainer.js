import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentPage,
    setToggleIsFetching,
    toggleIsFollowingProgress, getUsersThunkCreator, unFollowThunkCreator, followThunkCreator
} from "../Redux/UsersReduser";
import {Loader} from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(this.props.pageSize)
        /*  this.props.setToggleIsFetching(true)
          this.props.setCurrentPage(pageNumber)
          usersApi.getUsers(pageNumber, this.props.pageSize)
              .then(data => {
                  this.props.setToggleIsFetching(false)
                  this.props.setUsers(data.items)
              })*/
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unFollowThunkCreator}
                   follow={this.props.followThunkCreator}
                   onPageChanged={this.onPageChanged}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   isDisabled={this.props.isDisabled}
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
        isFetching: state.usersPage.isFetching,
        isDisabled: state.usersPage.isDisabled
    }
}
/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCount(totalCount))
        },
        setToggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetching(isFetching))
        },
        toggleIsFollowingProgress: (isFetching, userId) => {
            dispatch(toggleIsFollowingProgress(isFetching, userId))
        }
    }
}*/

export default connect(mapStateToProps, {
        setCurrentPage,
        setToggleIsFetching,
        toggleIsFollowingProgress,
         unFollowThunkCreator,
         followThunkCreator,
        getUsers: getUsersThunkCreator
    }
)(UsersContainer)

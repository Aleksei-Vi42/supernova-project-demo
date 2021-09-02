import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentPage,
    toggleIsFollowingProgress, getUsersThunkCreator, unFollowThunkCreator, followThunkCreator
} from "../Redux/UsersReduser";
import {Loader} from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(this.props.pageSize)
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
        isDisabled: state.usersPage.isDisabled,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
            setCurrentPage,
            toggleIsFollowingProgress,
            unFollowThunkCreator,
            followThunkCreator,
            getUsers: getUsersThunkCreator
        }
    ),
    withAuthRedirect
)(UsersContainer)


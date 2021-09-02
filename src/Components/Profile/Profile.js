import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from './Profile-info'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer profile={props.profile}/>
        </div>
    )
}

export default Profile
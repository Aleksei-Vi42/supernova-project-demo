import React from "react";
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'
import ProfileInfo from './Profile-info'
import {updateNewPostText} from "../Redux/State";



const Profile = (props) => {



    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <div>
                <MyPosts dispatch={props.dispatch} state={props.state}/>
            </div>

        </div>
    )
}

export default Profile
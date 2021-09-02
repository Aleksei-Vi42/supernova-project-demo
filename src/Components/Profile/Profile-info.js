import React from 'react'
import classes from './Profile-info.module.css'
import {Loader} from "../Common/Preloader/Preloader";
import userPhoto from '../../Assets/images/av2.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader/>
    }

    return (
        <div className={classes.profileInfo}>
            <div>
                <div className={classes.description}>
                    <div>
                        My name: {props.profile.fullName}
                    </div>
                    <div>
                        About me: {props.profile.aboutMe}
                    </div>
                    <div>
                        Loocking for job: {props.profile.profilelookingForAJob ? 'Yes' : 'Not'}
                    </div>
                </div>
                <img  className={classes.ava} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                <div className={classes.profileStatus}>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>


            </div>
        </div>
    )
}
export default ProfileInfo
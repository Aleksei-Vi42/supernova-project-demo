import React from 'react'
import classes from './Profile-info.module.css'
import {Loader} from "../Common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Loader />
    }

    return (
        <div className={classes.profileInfo}>
            <div className={classes.ava}>
                <img src={props.profile.photos.large}/>
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
            </div>
        </div>
    )
}
export default ProfileInfo
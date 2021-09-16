import React from "react"
import classes from "./Users.module.css"
import userPhoto from "../../Assets/images/av2.png"
import {NavLink} from "react-router-dom"

let User = ({user, isDisabled, unfollow,  follow}) => {
    return (
        <div className={classes.user}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={classes.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ? <button disabled={isDisabled.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow
                            </button>
                            : <button disabled={isDisabled.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow
                            </button>
                        }
                    </div>
                </div>
                <div className={classes.description}>
                    <div>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </div>
                    <div>
                        <div>
                            {"user.location.country"}
                        </div>
                        <div>
                            {"user.location.sity"}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default User
import React from "react"
import classes from "./Users.module.css"
import {Paginator} from "../Common/Paginator/Paginator"
import User from "./User"

let Users = (props) => {
    return <div>
        <Paginator totalItemsCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}/>

        {props.users.map(u => <User user={u}
                                    follow={props.follow}
                                    unfollow={props.unfollow}
                                    isDisabled={props.isDisabled}
                                    followed={props.followed}
                                    key={u.id} className={classes.user}/>
        )}
    </div>
}

export default Users
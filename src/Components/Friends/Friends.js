import React from 'react'
import classes from './Friends.module.css'
import userPhoto from '../../Assets/images/av2.png'
import  {Loader} from "../Common/Preloader/Preloader";


let Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id} className={classes.user}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={classes.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>

                    </div>
                    <div className={classes.description}>
                        <div>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </div>
                        <div>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.sity"}
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>

    )
}

export default Friends
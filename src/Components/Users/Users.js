import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../Assets/images/av2.png'
import {NavLink} from "react-router-dom";


/*let clickFollow = (u) =>{

    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
        {
            withCredentials: true,
            headers: {
                'API-KEY': '9a67c6e1-af78-4de5-a37a-dd0a4cf2b48d'
            }
        })
        .then(response => {
            if (response.data.resultCode == 0) {
                state.props.unfollow(u.id)
            }
        })
}*/
let Users = (props) => {
debugger
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
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={classes.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>

                            {u.followed ? <button disabled={props.isDisabled.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                                }}>Unfollow
                                </button>
                                : <button disabled={props.isDisabled.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow
                                </button>
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

export default Users
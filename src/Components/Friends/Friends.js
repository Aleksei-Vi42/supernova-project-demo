import React from 'react'
import classes from './Friends.module.css'
import * as axios from 'axios'
import userPhoto from '../../Assets/images/av2.png'


class Friends extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                     return   <span className={this.props.currentPage === p && classes.selectedPage}
                     onClick={() => { this.onPageChanged(p) }}
                     >{p}</span>
                    }) }
                </div>

                {
                    this.props.users.map(u => <div key={u.id} className={classes.user}>
                        <div>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={classes.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollowed(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.followed(u.id)
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
}

export default Friends
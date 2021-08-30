import React from 'react'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div>
                Logo
            </div>
            <div className={classes.login}>
                {props.isAuth ? props.login
                              : <button>
                                 Login
                                </button>
                }
            </div>
        </div>
    )
}

export default Header
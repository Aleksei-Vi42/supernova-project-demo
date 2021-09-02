import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div>
                Logo
            </div>
            <div className={classes.login}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>
                       <div>
                        Login
                       </div>
                      </NavLink>
                }
            </div>
        </div>
    )
}

export default Header
import React from 'react'
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/setting' activeClassName={classes.active}>Setting</NavLink>
            </div>
            <div className={classes.friends}>
                <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
            </div>
        </nav>
    )
}

export default NavBar
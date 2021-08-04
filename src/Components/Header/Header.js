import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (
     <div className={classes.header}> 
      <div>
       Logo
      </div>
      <div>
        Login
      </div>
     </div> 
    )
}

export default Header
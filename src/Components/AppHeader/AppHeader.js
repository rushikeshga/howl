import React from 'react';
import howl from '../../utils/images/howlLogo.png'
import classes from './AppHeader.module.css';
import menu from '../../utils/images/menu.png'
export const AppHeader = () => {
     return (
    <div className={classes.Header}>
        <img src={howl} alt='Howl' className={classes.logo}></img>
        <img src={menu} alt='menu' className={classes.menu}></img>
    </div>
  )
}

export default AppHeader;
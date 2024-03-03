import React from 'react'
import classes from './Footer.module.css';
const Footer = () => {
  return (
    <div className={classes.Footer}>
        <div>
            <img src={require('../../utils/images/instagram.png')} className = {classes.instagram}alt=''></img>
        </div>
            <button className={classes.FooterButtons}>PRESS</button>
            <button className={classes.FooterButtons}>CAREERS</button>
            <button className={classes.joinThePack}>JOIN THE PACK</button>
            <button className={classes.signUpNewsLetter}>Sign up to our news letter &#10230;</button>
           <span className={classes.rights}>All rights reserved Designed, developed & powered by HOWL Digital Agency</span>
        
    </div>
    
  )
}

export default Footer
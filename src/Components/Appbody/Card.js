import React from 'react'
import classes from './Home.module.css';
const Card = (props) => {
  return (
    <div>
        <img className={classes.car} src={require('../../utils/images/'+props.cardData)} alt=''></img>
    </div>
  )
}

export default Card
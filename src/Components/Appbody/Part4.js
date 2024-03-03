import React from 'react'
import classes from './Home.module.css';

const Part4 = () => {
  return (
    <div>
        <div className={classes.Part4Sentance}>
            <span className={classes.accelerate}>Ready to accelerate your career?</span> <span className={classes.letsTalk}>Lets talk.</span>
        </div>
        <div className={classes.track}>
            <div className={classes.trackSentance}>
                Keep track <br/>of the wolves<br/>
                &#10230;
            </div>
            <div className={classes.trackimage_Container}>
                <img src={require('../../utils/images/track1.png')} className={classes.trackImage} alt=''></img>
                <img src={require('../../utils/images/track2.png')} className={classes.trackImage} alt=''></img>
                <img src={require('../../utils/images/track3.png')} className={classes.trackImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default Part4
import React from 'react'
import  Classes  from './Home.module.css';
import howl1 from '../../utils/images/howl1.jpg';
import howl2 from '../../utils/images/howl2.png'

const Part1 = () => {
  return (<div>
    <div className={Classes.part1}>
            <div>
                <div className={Classes.firstsentance}>
                We exist because we want to help you navigate and harness the potential of this ever changing digital landscape.
                </div>
                <div className={Classes.StyledFont}>
                    <h1><div className={Classes.your}>Your</div> <div className={Classes.Growth}>Growth</div> <div className={Classes.partners}>Partners</div>  </h1>
                </div>
            </div>
            <div>
                <img src={howl2} className={Classes.howl2} alt=''></img>
                <img src={howl1} className={Classes.howl1} alt=''></img>
            </div>
        </div>
        <div className={Classes.secondSentance}>
            It's not a game of guesses, It's a game of numbers where growth is the ultimate goal. We leverage cutting-edge technology and data driven insights to help you answer questions that unlock growth.
        </div>
        </div>
  )
}

export default Part1
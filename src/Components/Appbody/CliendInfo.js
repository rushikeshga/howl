import React from 'react';
import Card from './Card';
import classes from './Home.module.css';

const CliendInfo = () => {
    var cardArr = ['cardImg1.png','cardImg3.png','cardImg4.png','cardImg5.png','cardImg6.png','cardImg1.png','cardImg3.png','cardImg4.png',
    'cardImg5.png','cardImg6.png','cardImg1.png','cardImg3.png','cardImg4.png','cardImg5.png','cardImg6.png','cardImg1.png']
  return (
    <div>
        <div className={classes.Client}>
            Clients We work with
        </div>
        <div className={classes.cards_container}>
            {
                cardArr.map((obj,index)=>{
                    //index not recommended for key
                    return <Card key={index} cardData = {obj}></Card>
                })
            }
        </div>
    </div>
  )
}

export default CliendInfo;
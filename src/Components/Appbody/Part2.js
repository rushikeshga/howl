import React, { useState } from 'react'
import classes from './Home.module.css';
const Part2 = () => {
    const [buttonClick, setButtonClick] = useState(1); 
  return (
    <div className={classes.part2}>
        <div className={classes.buttonWithCharts}>
            <div>
                <button className={buttonClick===1? classes.part2buttons1Click:classes.part2buttons1} onClick={(e)=>{setButtonClick(1)}}>STRATOGY AND CONSULTING</button><br/>
                <button className={buttonClick===2? classes.part2buttonsClick:classes.part2buttons} onClick={(e)=>{setButtonClick(2)}}>ONLINE MARKETING EXPERIANCES</button><br/>
                <button className={buttonClick===3? classes.part2buttonsClick:classes.part2buttons} onClick={(e)=>{setButtonClick(3)}}>COMMERCE SOLUTIONS</button><br/>
                <button className={buttonClick===4? classes.part2buttonsClick:classes.part2buttons} onClick={(e)=>{setButtonClick(4)}}>GROWTH MARKETING</button><br/>
                <button className={buttonClick===5? classes.part2buttonsClick:classes.part2buttons} onClick={(e)=>{setButtonClick(5)}}>ASSET CREATION</button><br/>
                <div className={classes.chartIndicators}>
                    <div className={classes.label1}>Layer 1: stratogic Process steps</div>
                    <div className={classes.label2}>Layer 2: Inputs & Intel Undertaken</div>
                    <div className={classes.label3}>Layer 3: stratogic Output</div>
                    <div className={classes.layer4}>Layer 4: Branding Headers</div>
                    <div className={classes.label2}>Layer 5: Branding Output</div>
                </div>
            </div>
            <div className={classes.chartsStyle}>
                {buttonClick===1 ? <img src={require('../../utils/images/chart1.png')} alt='' className={classes.chart1}/>:buttonClick===2
                ? <h1 className={classes.chart2}>Chart 2</h1>:buttonClick === 3 ? 
                <h1 className={classes.chart2}>Chart 3</h1>: buttonClick ===4 ?
                <h1 className={classes.chart2}>Chart 4</h1>: <h1 className={classes.chart2}>Chart 5</h1>}
            </div>
        </div>
        <div>
            <button className={classes.diveDeeperbtncls}>Dive deeper</button>
        </div>
    </div>
  )
}

export default Part2
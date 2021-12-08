import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {

    let barFillHeight = '0%';
    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
      <div className='chart-bar'>
      <div className='chart-bar__inner'>
      {/* dynamic styling: style wants a js object as a value that's why {{}} where inner braces is a 
           js object. */}
      <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
      </div>
    );
};
export default ChartBar;
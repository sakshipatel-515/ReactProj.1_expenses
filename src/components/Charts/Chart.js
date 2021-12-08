import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    //array of datapoint values
    const dataPointValues = props.dataPoints.map( (dataPoint) => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointValues); //... because datapointvalues is an array & 
                                                        //we want numbers of which max value will be found.

    return (
      <div className='chart'>
      {
        props.dataPoints.map((dataPoint) => (
           <ChartBar 
             key={dataPoint.label}
             value={dataPoint.value} 
             maxValue={totalMaxValue} 
             label={dataPoint.label}
            />
         ))
      }
         
      </div>
    );
};
export default Chart;
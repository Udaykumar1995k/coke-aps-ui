import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const ResultsGraph = ( {labels,pData,props}) => {
    return (
        <div>
        <BarChart
          width={props?.width ||530}
          height={props?.height || 400}
          series={[
            { data: pData, id: 'pvId', color: 'black' }
          ]}
          xAxis={[{ data: labels, scaleType: 'band' }]}
        />
        </div>
      );
}

export default ResultsGraph
import React from 'react';
import { ColumnSeries, Tooltip, Category, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective, DataLabel} from'@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { userStateContext } from '../../context/ContextProvider';
import { Header } from '../../components';

const Bar = () => {
  const { currentMode } = userStateContext(); 

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category="Bar" title="Percentuale"/>
    <ChartComponent
      id='bar-chart'
      height='420px'
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border:{ width: 0 } }}
      tooltip={{ enable: true }}
      background={ currentMode === 'Dark' ? '#33373E' : '#FFF' }
    >
      <Inject services={[ColumnSeries, Category, DataLabel, Tooltip]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => 
        <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
    
    
    </div>
  )
}

export default Bar
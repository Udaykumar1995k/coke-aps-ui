import React from 'react';
import { Tab, Tabs } from '@mui/material';
import CircleIcon from './CircleIcon';

const TabSection = ({label,value,handleChange,...props}) => {
  
  return (
      <div className={props.className}>
       <Tabs
        onChange={handleChange}
        value={value}
        aria-label={props.ariaLabel||"lead time analytics tabs"}
        variant="fullWidth" 
        style={props.style}
      >
        {label.map((item,index)=>(<Tab key={index} label={item} icon={<CircleIcon count={18}/>} iconPosition="end" />))}
      </Tabs>
      </div>
  )
}
export default TabSection

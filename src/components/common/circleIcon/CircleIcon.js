import React from 'react';
import './CircleIcon.css'

const CircleIcon=({count})=>{
    const displayCount= +count > 99 ? '99+' : count;
    return(
        <div className="circle-icon">{displayCount}</div>
    )

};
export default CircleIcon

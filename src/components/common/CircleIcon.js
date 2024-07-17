import React from 'react';
import './CircleIcon.css'

const CircleIcon=({count})=>{
    const fontSize=count.toString().length > 2  ? '10px':'12px';
    return(
        <div className="circle-icon" style={{fontSize}}>{count}</div>
    )

};
export default CircleIcon

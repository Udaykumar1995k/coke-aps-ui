import React from 'react';
import { Slider } from "@mui/material";
function CustomSlider(props) {
  const [value, setValue] = React.useState([20, 80]); // initial value

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: value[0],
      label: `${value[0]}%`,
    },
    {
      value: value[1],
      label: `${value[1]}%`,
    },
  ];

  return (
    <div>
      <Slider sx={{maxWidth:props?.width || 300}}
        className="custom-slider"
        value={value}
        onChange={handleChange}
        marks={marks}
        min={0}
        max={100}
      />
    </div>
  );
}

export default CustomSlider;
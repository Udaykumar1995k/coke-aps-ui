import React, {useState} from 'react';
import { Slider } from "@mui/material";
import './index.css'
function CustomSlider(props) {
  const [value, setValue] = useState([props.intialStartvalue, props.intialEndvalue]); // initial value

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
    <div >
      <Slider sx={{width:props?.width || 400}}
        className="custom-slider"
        value={value}
        onChange={handleChange}
        marks={[
          { value: 0, label: `${value[0]}%`},
          ...Array.from({ length: value[1] - value[0] - 1 }, (i) => ({
            value: value[0] + i + 1,
            label: '',
            style: { borderRadius: 6, border: '1px solid #ccc', backgroundColor: '#fff' },
          })),
          { value: 100, label: `${value[1]}%` },
        ]}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => `${value}%`}
        min={0}
        max={100}
      />
    </div>
  );
}

export default CustomSlider;
import React from "react";
import { FormControl,FormControlLabel,RadioGroup,Radio, FormLabel } from "@mui/material";

const RadioButtonGroup = ({label,options, value, onChange}) =>{
    return (
       <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup row value={value} onChange={onChange}>
            {options.map((option,index) =>(
                <FormControlLabel
                key={`${option.value}-${index}`}
                value={option.value}
                control={<Radio/>}
                label={option.label}
                />
            ))
            }
        </RadioGroup>
       </FormControl>
    );
};
export default RadioButtonGroup;
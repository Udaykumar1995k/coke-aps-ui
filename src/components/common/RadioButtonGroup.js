import React from "react";
import { FormControl,FormControlLabel,RadioGroup,Radio } from "@mui/material";

const RadioButtonGroup = ({value,onChange,props}) =>{
    return (
       <FormControl component="fieldset">
        <RadioGroup row value={value} onChange={onChange}>
            {props?.map((prop,index) =>(
                <FormControlLabel
                key={`${prop?.value}-${index}`}
                value={prop?.value}
                control={<Radio
                        size={prop.size}
                        sx={{color:prop?.uncheckedColor|| 'default',
                        '&.Mui-checked':{
                            color: prop?.checkedColor
                        }
                            }}
                        />}
                label={prop?.label}
                labelPlacement={prop?.labelPlacement}
                />
            ))
            }
        </RadioGroup>
       </FormControl>
    );
};
export default RadioButtonGroup;
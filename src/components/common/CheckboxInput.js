import React from "react";
import { FormControlLabel,Checkbox } from "@mui/material";
const CheckBoxInput = ({props}) =>{
    return (
       <FormControlLabel
       control={
                <Checkbox
                checked={props?.checked || false} 
                onChange={props?.onchange}
                sx={{'& .MuiSvgIcon-root': { fontSize:props.fontSize }|| 28, 
                color:props?.uncheckedColor|| 'default',
                '&.Mui-checked':{
                    color: props?.checkedColor
                }
            }}
                />
            }   
        labelPlacement={props?.labelPlacement}
        label={props?.label}

       />
    );
};

export default CheckBoxInput;

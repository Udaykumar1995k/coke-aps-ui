import React from "react";
import { FormControlLabel,Checkbox } from "@mui/material";
const CheckBoxInput = ({label, checked,onChange}) =>{
    return (
       <FormControlLabel
       control={<Checkbox checked={checked} onChange={onChange}/>}   
       label = {label}    
       />
    );
};

export default CheckBoxInput

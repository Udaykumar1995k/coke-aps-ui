import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({label='',value='',onChange=''}) =>{
    return(
        <TextField
        fullWidth
        label={label}
        value={value}
        onChange={onChange}
        InputLabelProps={{shrink: true}}
        />
    )
}


export default TextInput;
import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({label='',value='',onChange='', name="" }) =>{
    return(
        <TextField
        fullWidth
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        // InputLabelProps={{shrink: true}}
        />
    )
}


export default TextInput;
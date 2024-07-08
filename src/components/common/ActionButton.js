import React from "react";
import { Button } from "@mui/material";

const ActionButton = ({label,color,onclick, ...props}) =>{
    return (
        <Button
        variant="contained"
        color={color}
        fullWidth
        onClick={onclick}
        style={{margin: '0 8px', padding:'10px 20px', fontSize:'16px',fontWeight:'bold'}}
        {...props}
        >
        {label}
        </Button>

    )
}

export default ActionButton
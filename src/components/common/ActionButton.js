import React from "react";
import { Button } from "@mui/material";

const ActionButton = ({label,color,onclick, ...props}) =>{
    return (
        <Button
        variant="contained"
        color={color}
        fullWidth
        onclick={onclick}
        {...props}
        >
        {label}
        </Button>

    )
}

export default ActionButton
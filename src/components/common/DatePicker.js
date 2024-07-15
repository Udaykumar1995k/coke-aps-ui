import React from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider, DatePicker as MUIDatePicker } from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
const DatePicker = ({name,label, value, onChange}) =>{
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MUIDatePicker 
            name={name}
            label = {label}
            value = {value}
            onChange={(newValue) => onChange(newValue)}
            renderInput = {(params) => <TextField  {...params} fullWidth />}
            />
        </LocalizationProvider>
    );
}

export default DatePicker

import React from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider, DatePicker as MUIDatePicker } from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs" 
import dayjs from "./setUpDays";
const DatePicker = ({label, value, onChange}) =>{
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MUIDatePicker 
            label = {label}
            value = {value}
            onChange={(newValue) => onChange(newValue)}
            renderInput = {(params) => <TextField  {...params} fullWidth />}
            />
        </LocalizationProvider>
    );
}

export default DatePicker

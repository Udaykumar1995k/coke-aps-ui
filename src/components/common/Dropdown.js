import React from 'react';
import { FormControl, InputLabel, Select , MenuItem } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';

const Dropdown = ({label,value, options=[], handleChange, ...props }) => {
    const theme = useTheme();
    return (
         <FormControl  fullWidth  sx={{
         width: '100%',
          [theme.breakpoints.down('md')]: {
            width: '40%', 
          },
          [theme.breakpoints.up('md')]: {
            width: '40%',
          },
        }} >
            <InputLabel id={props.inputLabelId || "dropdown-label"}>{label}</InputLabel>
           < Select
                id={props.id ||'dropdown'}
                labelId={props.labelId ||'dropdown-label'}
                value={value}
                onChange={handleChange}
                input={<OutlinedInput label={label} sx={{ height:'48px', minHeight: '48px', 
                 }}/>}
                 
                sx={{
                  height: props.height ||'48px', 
                  minHeight: props.minHeight || '48px', 
                }} 
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                       {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Dropdown;
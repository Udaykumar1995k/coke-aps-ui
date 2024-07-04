import React from 'react';
import { FormControl, InputLabel, Select , MenuItem } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 5;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(options, value, theme) {
    return {
      fontWeight:
      value.indexOf(options) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }


const Dropdown = ({label,value, options=[], handleChange }) => {
    const theme = useTheme();

    return (
         <FormControl sx={{ m: 1, width: 250, height: 'auto', '.MuiInputBase-root': { height: 49 } }}>
            <InputLabel id="dropdown-label">{label}</InputLabel>
           < Select
                id="dropdown"
                labelId="dropdown-label"
                multiple
                value={value}
                onChange={handleChange}
                input={<OutlinedInput label={label} />}
                MenuProps={MenuProps}  
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}  style={getStyles(option, value, theme)}>
                       {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Dropdown;
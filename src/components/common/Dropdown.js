import React from 'react';
import { FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

const Dropdown = ({ label, value, options = [], handleChange, ...props }) => {

    const selectProps = {
        id: props.id || 'dropdown',
        labelId: props.labelId || 'dropdown-label',
        value: value,
        onChange: handleChange,
        input: <OutlinedInput label={label} name={props.name}sx={{ height: props.height || '48px', minHeight: props.height || '48px' }} />,
        sx: {
            height: props.height || '48px',
            minHeight: props.minHeight || '48px',
            maxWidth: props?.maxWidth ||'250px',
            borderRadius: props?.borderRadius ||'6px',
        },
        multiple: props.multiple,
    };

    if (props.multiple) {
        selectProps.renderValue = (selected) => selected.join(', ');
    }

    return (
        <FormControl sx={{ width: props.width || '50%' }}>
            <InputLabel id={props.inputLabelId || "dropdown-label"}>{label}</InputLabel>
            < Select {...selectProps}>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Dropdown;
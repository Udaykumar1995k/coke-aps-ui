import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchWithOptions = ({ data, width, onChange,clearInputValue,onInputChange,handleClear,name }) => {
    const [previousValue, setPreviousValue] = useState('');
    return (
        <div className='searchOption' style={{ width: width || '200px' }}>
            <Autocomplete
                freeSolo
                id="searchfield"
                name={name}
                disableClearable
                {...clearInputValue ? {} : { value: "" }}
                options={data.map((option) => option.ApproverName)}
                onChange={(event, value) =>  onChange(value,name)}
                onInputChange={(event, newValue) => {
                    if (newValue === '') {
                      handleClear(previousValue,name); // call the handleClear function with the previous value
                    } else {
                      setPreviousValue(newValue)
                      onInputChange(newValue);
                    }
                  }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        size='small'
                        // label="Search"
                        InputLabelProps={{ shrink: false }}
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                            endAdornment: (
                                <>
                                    {params.InputProps.endAdornment}
                                    {/* <SearchIcon /> */}
                                </>
                            ),
                        }}
                    />
                )}
            />
        </div>
    )
};
export default SearchWithOptions;



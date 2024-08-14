import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

const SearchWithOptions = ({ data, width, onChange,clearInputValue }) => {
    return (
        <div style={{ width: width || '200px' }}>
            <Autocomplete
                freeSolo
                id="searchfield"
                disableClearable
                {...(clearInputValue ? {} : { value: "" })}
                options={data.map((option) => option.ApproverName)}
                onChange={(event, value) => onChange(value)}
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
                                    <SearchIcon />
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



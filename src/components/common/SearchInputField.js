import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ onChange, placeholder }) => {
    return (
        <div
            style={{ border: '1px solid #c8c8c8', borderRadius: 10, display: 'flex', alignItems: 'center', width: { xs: 150, sm: 300 } }}
        >
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 40, }} orientation="vertical" />
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={placeholder || "Search"}
                inputProps={{ 'aria-label': 'search' }}
                onChange={onChange}
            />
        </div>
    );
}
export default SearchInput
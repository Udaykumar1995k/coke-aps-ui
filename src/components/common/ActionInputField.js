import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';

const ActionInput = ({ onChange, placeholder, icon, position }) => {
    return (
        icon === "search" && position === "left" ?
            <div style={{ border: '1px solid #c8c8c8', borderRadius: 10, display: 'flex', alignItems: 'center', width: { xs: 150, sm: 300 } }}
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
            :
            icon === "search" && position === "right" ?

                <div style={{ border: '1px solid #c8c8c8', borderRadius: 10, display: 'flex', alignItems: 'center', width: { xs: 150, sm: 300 } }}
                >

                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder={placeholder || "Search"}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={onChange}
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </div>
                :
                icon === "edit" && position === "left" ?
                    <div style={{ border: '1px solid #c8c8c8', borderRadius: 10, display: 'flex', alignItems: 'center', width: { xs: 150, sm: 300 } }}
                    >
                        <IconButton>
                            <EditIcon fontSize='small' />
                        </IconButton>
                        <Divider sx={{ height: 40, }} orientation="vertical" />
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder={placeholder || ""}
                            inputProps={{ 'aria-label': 'edit' }}
                            onChange={onChange}
                        />
                    </div> :
                    icon === "edit" && position === "right" ?
                        <div style={{ border: '1px solid #c8c8c8', borderRadius: 10, display: 'flex', alignItems: 'center' }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder={placeholder || ""}
                                inputProps={{ 'aria-label': 'edit' }}
                                onChange={onChange}
                            />
                            <Divider sx={{ height: 40, }} orientation="vertical" />
                            <IconButton>
                                <EditIcon fontSize='small' />
                            </IconButton>
                        </div> :
                        <div></div>

    );
};
export default ActionInput
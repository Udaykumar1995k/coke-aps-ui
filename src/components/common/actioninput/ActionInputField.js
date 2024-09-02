import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import './ActionInput.css'
const ActionInput = ({ onChange, placeholder, icon, position, width,height,props }) => {
    return (
        icon === "search" && position === "left" ?
            <div style={{  height:height ||'35px', border: '1px solid #c8c8c8', borderRadius: 10, display: 'flex', alignItems: 'center', width: width || '200px' }}
            >
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 40, }} orientation="vertical" />
                <InputBase
                    sx={{ ml: 1, flex: 1,fontSize: 14, padding: '4px 8px' }}
                    placeholder={placeholder || "Search"}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={onChange}
                />
            </div>
            :
            icon === "search" && position === "right" ?

                <div style={{ border: '1px solid #c8c8c8', borderRadius: 10, display: 'flex', alignItems: 'center',  width: width ||'200px',height: height ||'35px'}}
                >

                    <InputBase
                        sx={{ ml: 1, flex: 1,fontSize: 14, padding: '4px 8px'}}
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
                    <div style={{ border: '1px solid #c8c8c8', borderRadius: 10, display: 'flex', alignItems: 'center',  width: width ||'200px',height: height ||'35px' }}
                    >
                        <IconButton>
                            <EditIcon fontSize='small' />
                        </IconButton>
                        <Divider sx={{ height: 40, }} orientation="vertical" />
                        <InputBase
                            sx={{ ml: 1, flex: 1,fontSize: 14, padding: '4px 8px' }}
                            placeholder={placeholder || ""}
                            inputProps={{ 'aria-label': 'edit' }}
                            onChange={onChange}
                        />
                        
                    </div> :
                    icon === "edit" && position === "right" ?
                        <div style={{ border: '1px solid #c8c8c8', borderRadius: 10, display: 'flex', alignItems: 'center', width: width ||'200px',height: height ||'35px' }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1,fontSize: 14, padding: '4px 8px' }}
                                placeholder={placeholder || ""}
                                inputProps={{ 'aria-label': 'edit' }}
                                onChange={onChange}
                            />
                            <Divider sx={{ height: 40, }} orientation="vertical" />
                            <IconButton>
                                <EditIcon fontSize='small' />
                            </IconButton>
                        </div> :
                        props?.label?
                            <div className="input-label">
                            <TextField
                            variant="outlined"
                            label = {props?.label || "Enter"}
                            onChange={onChange}
                            InputProps={{style:{
                                         borderRadius: props?.borderRadius || '6px' ,
                                         backgroundColor: props?.backgroundColor || "white",
                                         maxWidth: props?.maxWidth ||'250px', 
                                         width:'100%',
                                         height: props?.height ||'20px',
                                         paddingLeft: 5
                                   }, }}
                                   value={props.value }
                            />
                         </div>
                        : 
                        <div className="input-container">
                            <InputBase className="input-container-items" 
                            inputProps={{ 'aria-label': 'email',
                            style: {
                                paddingLeft: 5
                              },
                             }}
                            onChange={onChange}
                            style={{ border:  props?.border ||'1px solid #c8c8c8', 
                                         borderRadius: props?.borderRadius || '6px' ,
                                         backgroundColor: props?.backgroundColor || "white",
                                         maxWidth: props?.maxWidth ||'250px', 
                                         width:'100%',
                                         height: props?.height ||'30px',
                                        }} 
                            placeholder={placeholder || "Enter"}
                            name={props?.name}
                            value={props?.value}
                            disabled={props.disabled || false}
                                           
                            />
                        </div>
                                

    );
};
export default ActionInput

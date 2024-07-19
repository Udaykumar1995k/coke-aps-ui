import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Outlet } from 'react-router-dom';

import './MainContent.css';

const MainContent = (props) => {
    return (
        <div className='main-content'>
            <div className='sidebar'>
                <List sx={{ marginTop: '15px' }} className='sideBarOptionsList'>
                    {props.menuItems?.map((item, index) => (
                        <ListItem
                            key={item}
                            disablePadding
                            onClick={() => props.handleMenuItemClick(item.path, item.label, index)}
                        >
                            <ListItemButton
                                selected={index === props.selectedIndex}
                                style={{backgroundColor: index === props.selectedIndex?"#717171":"#aaaaaa"}}
                                className='listButtonSection'
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: 3,
                                        justifyContent: "center",
                                    }}
                                    style={{display:'flex',margin:'auto',color:'#fff'}}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.label}
                                    sx={{
                                        opacity: 1,
                                        ".MuiTypography-root": { fontSize: "12px !important" },
                                    }}
                                    style={{color:'#fff'}}
                                />
                            </ListItemButton>
                        </ListItem>
                            

                    ))}
                </List>
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainContent
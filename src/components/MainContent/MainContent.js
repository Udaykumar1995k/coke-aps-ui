import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Outlet } from 'react-router-dom';

import './MainContent.css';

const MainContent = (props) => {
  return (
    <div className='main-content'>
        <div className='sidebar'>
            <List sx={{marginTop: '15px'}}>
                {props.menuItems?.map((item, index) => (
                <ListItem
                    key={item}
                    disablePadding
                    sx={{ display: "block" }}
                    onClick={() => props.handleMenuItemClick(item.path, item.label, index)}
                >
                    <ListItemButton
                    selected={index === props.selectedIndex}
                    sx={{
                        minHeight: 48,
                        justifyContent: "initial",
                        px: 2.5,
                    }}
                    >
                    <ListItemIcon
                        sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                        }}
                    >
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={item.label}
                        sx={{
                        opacity: 1,
                        ".MuiTypography-root": { fontSize: "15px !important" },
                        }}
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
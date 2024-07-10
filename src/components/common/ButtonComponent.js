import React from "react";
import { Button,Box } from "@mui/material";
import { useTheme,styled } from "@mui/material/styles";

const  CustomButton = styled(Button)(({theme,fontSize}) =>({
    padding: '10px 20px',
    fontSize: fontSize || '1rem',
    whiteSpace:'normal',
    wordBreak: 'break-word',
    margin:'10px',  
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        padding: '8px 16px',    
        fontSize: '0.75rem',
        width: '150px'
    },

}));
const ButtonComponent = ({props}) =>{
    const theme = useTheme();
    return (
           <Box display="flex" justifyContent="center" alignItems="center" gap={2} >
            <CustomButton 
                theme={theme} 
                variant={props?.variant || "contained"}  
                color={props?.color}
                onClick={props?.onClick}
                disabled={props?.disabled}
                fontSize= {props?.fontSize}
            >
           {props?.text}
            </CustomButton>
            </Box>
    );
};

export default ButtonComponent;
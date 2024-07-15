import { Button } from "@mui/material";
import './button.css'
const ButtonComponent = (props) =>{
    return (
        <div className="button-container">
            { props?.type === 'success'?
                <Button 
                    style={{ backgroundColor: 'green' ,width:'100%',maxWidth:props?.maxWidth || '200px'} } >
                    {props?.label} 
                </Button>
                :props?.type === 'error'?
                <Button 
                    style={{ backgroundColor: 'red' ,width:'100%',maxWidth:props?.maxWidth || '200px'} }  >
                    {props?.label} 
                </Button>: 
                <Button 
                    variant="contained" style={{  wordBreak:"break-word", backgroundColor: props?.bgColor,width:'100%',maxWidth:props?.maxWidth || '200px'} }  >{props?.label}
                </Button> 
            }
        </div>
    )
}

export default ButtonComponent
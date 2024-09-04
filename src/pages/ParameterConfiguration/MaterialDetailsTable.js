import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';


const MaterialDetailsTable = ({headers,values}) =>{
    return (
        <div>
            <TableContainer sx={{overflowX:"auto",margin:"auto", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
                <Table  sx={{ width: "80%" }} aria-label="simple table">
                    <TableHead sx={{background: '#f2f2f2'}} >
                        <TableRow>
                            {headers.map((header,index) =>(
                                <TableCell align={index === headers.length - 1 ? 'right' : 'left'} >{header}</TableCell>
                            ))}
                            
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MaterialDetailsTable
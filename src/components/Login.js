import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        pass: '',
      });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(formData){
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('data', formData.username);
            navigate('/dashboard')
        } else (
            navigate('/login')
        )
     }

     useEffect(() => {
        if(localStorage.getItem('isLoggedIn')){
            navigate('/dashboard')
        }
     })

  return (
    <Box sx={{mt: 4}}>
      <Typography variant="h4" align="center">Login</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '450px', margin: '0 auto' }} onSubmit={submitHandler} >
        <FormControl>
          <TextField id="username" label="Username" type="username" name="username" variant="outlined" onChange={handleChange} required/>
        </FormControl>
        <FormControl>
          <TextField id="password" label="Password" type="password" name="password" variant="outlined" onChange={handleChange} required/>
        </FormControl>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Login;

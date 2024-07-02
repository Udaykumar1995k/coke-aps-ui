import { Box } from '@mui/material';
import Layout from './components/layout/Layout';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('isLoggedIn')){
        <Outlet />
    } else {
      navigate('/login');
    }
 })
  
  return (
    <Box>
      <Layout />
    </Box>
  );
}

export default App;

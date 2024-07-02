import { Box, Typography } from '@mui/material';
import Counter from '../components/counter';

const Dashboard = () => {
    const getUser = localStorage.getItem('data')

  return (
    <>
      <Box sx={{mt: 4}} align="center">
        <Typography variant="h5">Welcome {getUser}</Typography>
        <Counter />
      </Box>
    </>
  );
}

export default Dashboard
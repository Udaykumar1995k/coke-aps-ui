import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
// import { setTitle } from '../../../redux/actions/dashboardTitle';


export default function BreadcrumbLink() {
  const navigate = useNavigate();
//   const dispatch = useDispatch();
  const tabDetails = useSelector((state) => state?.dashboardDetails.tabDetails);

//   const onClickLink=()=>{
//     dispatch(setTitle(tabDetails))
//     navigate(`${tabDetails.path}`)
//   }

  const breadcrumbs = [
    <Link underline="always" key="1" color="inherit" style={{cursor:'pointer'}} onClick={()=>navigate("/landing-page")}>
      Home
    </Link>,
    <Link
      underline="none"
      key="2"
      color="inherit"
    //   onClick={onClickLink}
    //   style={{cursor:'pointer'}}
    >
      {tabDetails.title}
    </Link>,
    // <Typography key="3" color="text.primary">
    //   Breadcrumb
    // </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
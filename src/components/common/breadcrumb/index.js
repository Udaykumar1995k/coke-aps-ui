import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';

export default function BreadcrumbLink(props) {
  const navigate = useNavigate();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const links = props?.labelList?.map((item, index) =>
      item.path ?
        <Link underline="always" key={index} color="inherit" style={{ cursor: 'pointer' }} onClick={() => navigate(item.path)}>
          {item.title}
        </Link> :
        <Typography key={index} color="text.primary">
          {item.title}
        </Typography>
    );
    setBreadcrumbs(links)
  }, [navigate, props?.labelList])

  return (
    <Stack spacing={2} className={`${props.className}`}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        className={`${props.className}-breadcrumb`}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
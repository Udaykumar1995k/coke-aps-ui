import React, { useEffect } from 'react'
import LeadtTime from './leadtime/LeadTimeAnalyticsForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/actions/apiSlice';
import { CircularProgress } from '@mui/material';

const RunAnalytics = () => {
  // this is an example for fetchData common function by axios and will be deleted once we get actual endpoint. 
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiData.data)
  console.log('data:', data)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
 // the above is an example for fetchData common function by axios and will be deleted once we get actual endpoint. 
  return (
    <>
      {!data ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress sx={{ color: "#000" }} />
        </div>
      ) : (
        <div>
          <LeadtTime />
        </div>
      )}
    </>
  );
}

export default RunAnalytics
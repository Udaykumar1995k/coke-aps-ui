import React, { useEffect } from 'react'
import LeadtTime from './leadtime/LeadTimeAnalyticsForm'
import { useDispatch } from 'react-redux'
import { fetchData } from '../redux/actions/apiSlice';

const RunAnalytics = () => {
  // this is an example for fetchData common function by axios and will be deleted once we get actual endpoint. 
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.apiData.data)
  // console.log('data:', data)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
 // the above is an example for fetchData common function by axios and will be deleted once we get actual endpoint. 
  return (
    <div>RunAnalytics
      <LeadtTime/>
    </div>
    
  )
}

export default RunAnalytics
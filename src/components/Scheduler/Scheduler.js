import React, { useState } from 'react'
import Cron from 'react-js-cron'
import 'react-js-cron/dist/styles.css'

import './Scheduler.css';

const Scheduler = () => {
  const defaultValue = '30 5 * * 1,6'
  const [value, setValue] = useState(defaultValue)
  console.log('value:', value)

  return (
    <Cron
        value={value}
        setValue={setValue}
        className='cron-comp'
    />
  )
}

export default Scheduler
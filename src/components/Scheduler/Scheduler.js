import Cron from 'react-js-cron'
import 'react-js-cron/dist/styles.css'

import './Scheduler.css';

const Scheduler = (props) => {

  return (
    <Cron
        value={props.value}
        setValue={props.setValue}
        className='cron-comp'
        humanizeLabels={true}
        humanizeValue
    />
  )
}

export default Scheduler
import React, { useState } from 'react'
import ActionInput from '../../components/common/actioninput/ActionInputField';
import DeleteIcon from '@mui/icons-material/Delete';
import './ApprovalCard.css'
import SearchWithOptions from '../../components/common/Searchwithoption/Search';

const data = [
  { ApproverName: 'Jerry Mathew', EmailID: 'jerry@cococola.com' },
  { ApproverName: 'Jerry George', EmailID: 'george@cococola.com' },
  { ApproverName: 'Ronald Wesley', EmailID: 'ronald@cococola.com' },
  { ApproverName: 'Adam George', EmailID: 'adam@cococola.com' },
  { ApproverName: 'Sam Arnoid', EmailID: 'sam@cococola.com' },
];

const ApprovalCard = ({ approver }) => {
  const [selectedApprover, setSelectedApprover] = useState({ ApproverName: '', EmailID: '' });

  const handleApproverChange = (approverName) => {
    const approver = data.find(item => item.ApproverName === approverName);
    if (approver) {
      setSelectedApprover(approver);
    }
  };

  return (

    <div className='approver-container'>
      <label className='label-size' style={{ marginTop: '10px' }}>{approver.label}</label>
      <SearchWithOptions data={data} onChange={handleApproverChange} />
      <ActionInput props={{ height: "40px", maxWidth: "200px", value: selectedApprover.EmailID }} placeholder='Email' />
      <span style={{ marginTop: '3px' }}><DeleteIcon /></span>
    </div>



  )
}

export default ApprovalCard
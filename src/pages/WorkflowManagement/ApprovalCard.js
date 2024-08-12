import React, { useState } from 'react'
import ActionInput from '../../components/common/actioninput/ActionInputField';
import DeleteIcon from '@mui/icons-material/Delete';
import './ApprovalCard.css'
import SearchWithOptions from '../../components/common/Searchwithoption/Search';
import './index.css'
import ButtonComponent from '../../components/common/button/Button';
import { IconButton } from '@mui/material';
const data = [
  { ApproverName: 'Jerry Mathew', EmailID: 'jerry@cococola.com' },
  { ApproverName: 'Jerry George', EmailID: 'george@cococola.com' },
  { ApproverName: 'Ronald Wesley', EmailID: 'ronald@cococola.com' },
  { ApproverName: 'Adam George', EmailID: 'adam@cococola.com' },
  { ApproverName: 'Sam Arnoid', EmailID: 'sam@cococola.com' },
];
const ApprovalCard = ({ approver,  props }) => {
  console.log("approver", approver.length)
  var disabled = false
  const styles = approver.length === 1 ? (disabled=true,{ cursor:"not-allowed", opacity:0.5 }) : (disabled=false,{ cursor:"pointer"});
  const [selectedApprover, setSelectedApprover] = useState({ ApproverName: '', EmailID: '' });
  const handleApproverChange = (approverName) => {
    const approver = data.find(item => item.ApproverName === approverName);
    if (approver) {
      setSelectedApprover(approver);
    }
  };

  return (
    <>
    <div className='approval-items-wrapper '>
        <label style={{ marginTop: '8px', fontSize: '14px' }}>No.of Line Items for Approval
        </label><ActionInput   props={{ height: "30px", maxWidth: "70px", value:"5", disabled:true }} />
      </div>
      <div className='approval-wrapper'>
        <div className='approver-header'>
          <label className='label-size'>Level</label>
          <label className='label-size' style={{ marginLeft: '10px' }}>Approver Name</label>
          <label className='label-size' style={{ marginLeft: '85px' }}>Email ID</label>
        </div>
        {approver.map((approver,index) =>(
        <div className='approver-container'>
        <label className='label-size' style={{ marginTop: '10px' }}>{approver.label}</label>
        <SearchWithOptions data={data} onChange={handleApproverChange} />
        <ActionInput props={{ height: "40px", maxWidth: "200px", value: selectedApprover.EmailID }} placeholder='Email' />
        <span style={{ marginTop: '3px', ...styles }}>
          <IconButton disabled={disabled}>
          <DeleteIcon   onClick={()=>props?.deleteApprover(index)} />
          </IconButton>
          </span>
        </div>
      ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '80px' }}>
        <ButtonComponent
          maxWidth="170px"
          label="Add Approver"
          bgColor="white"
          color="black"
          onClick={props?.addApprover}
        /></div>
      <div><label style={{ fontSize: '14px' }}>Comments</label> <ActionInput props={{ height: "65px", maxWidth: "400px" }} placeholder='Kindly check the Lead time and approve.' /></div>
   </>



  )
}

export default ApprovalCard
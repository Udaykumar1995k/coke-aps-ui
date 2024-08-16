import React, { useState, useEffect } from 'react'
import ActionInput from '../../components/common/actioninput/ActionInputField';
import DeleteIcon from '@mui/icons-material/Delete';
import './ApprovalCard.css'
import SearchWithOptions from '../../components/common/Searchwithoption/Search';
import './index.css'
import ButtonComponent from '../../components/common/button/Button';
import { IconButton } from '@mui/material';

const ApprovalCard = ({ approver, checkBoxCount, isClicked,props }) => {
  const data = [
    { ApproverName: 'Jerry Mathew', EmailID: 'jerry@cococola.com' },
    { ApproverName: 'Jerry George', EmailID: 'george@cococola.com' },
    { ApproverName: 'Ronald Wesley', EmailID: 'ronald@cococola.com' },
    { ApproverName: 'Adam George', EmailID: 'adam@cococola.com' },
    { ApproverName: 'Sam Arnoid', EmailID: 'sam@cococola.com' },
  ];
  var disabled = false
  const styles = approver.length === 1 ? (disabled=true,{ cursor:"not-allowed", opacity:0.5 }) : (disabled=false,{ cursor:"pointer"});
  const [selectedApprover, setSelectedApprover] = useState({ ApproverName: '', EmailID: '' });
  const [comment, setComment] = useState("");
  useEffect(()=>{
    if(isClicked){
      setSelectedApprover({ ApproverName: '', EmailID: '' })
      setComment("")
    }
    else{
    }
  },[isClicked])
  const handleApproverChange = (approverName) => {
    const approver = data.find(item => item.ApproverName === approverName);
    if (approver) {
      setSelectedApprover(approver);
    }
  };
  return (
    <>
    <div className='approval-items-wrapper'>
        <p style={{ marginTop: '8px', fontSize: '14px' }}>No.of Line Items for Approval
        </p><ActionInput   props={{ height: "30px", maxWidth: "70px", value:checkBoxCount, disabled:true }} />
      </div>
      <div className='approval-wrapper'>
        <div className='approver-header'>
          <p className='level-width'>Level</p>
          <p className='approver-label-width' >Approver Name </p>
          <p className='email-lable-width'>Email ID </p>
          <p></p>
        </div>
        {approver.map((approver,index) =>(
        <div className='approver-container'>
          <div  style={{paddingTop:"16px", paddingBottom:"10px", paddingLeft:"10px"}} className='level-width'>{approver.label}</div>
          <div  style={{paddingTop:"10px", paddingBottom:"10px", paddingLeft:"10px"}} className='approver-label-width'>
            <SearchWithOptions data={data} width="200px" onChange={handleApproverChange} clearInputValue={isClicked}/>
          </div>
          <div className='email-lable-width'  style={{paddingTop:"10px", paddingBottom:"10px", paddingLeft:"22px"}}>
            <ActionInput props={{ height: "40px", maxWidth: "220px", value: selectedApprover.EmailID }} placeholder='Email' />
          </div>
          <span style={{ paddingTop:"10px", ...styles,  textAlign:"right"}}>
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
      <div><label style={{ fontSize: '14px' }}>Comments</label> <ActionInput  onChange={(e)=>setComment(e.target.value)}props={{ height: "65px", maxWidth: "400px" ,value:comment }} placeholder='Kindly check the Lead time and approve.' /></div>
   </>



  )
}

export default ApprovalCard
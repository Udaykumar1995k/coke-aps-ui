import React, { useState, useEffect } from 'react'
import ActionInput from '../../components/common/actioninput/ActionInputField';
import DeleteIcon from '@mui/icons-material/Delete';
import './ApprovalCard.css'
import SearchWithOptions from '../../components/common/Searchwithoption/Search';
import './index.css'
import ButtonComponent from '../../components/common/button/Button';
import { IconButton } from '@mui/material';

const ApprovalCard = ({ checkBoxCount, isClicked,setApproval }) => {
  var disabled = false;
  const [disableApprover, setDisableApprover] = useState(true);
  const [approvalCardsData, setApprovalCardsData] = useState([
    { name: "Level1", label: "Level 1" },
  ]);
  const [selectedApprover, setSelectedApprover] = useState({ ApproverName: '', EmailID: '' });
  const [comment, setComment] = useState("");
  const data = [
    { ApproverName: 'Jerry Mathew', EmailID: 'jerry@cococola.com' },
    { ApproverName: 'Jerry George', EmailID: 'george@cococola.com' },
    { ApproverName: 'Ronald Wesley', EmailID: 'ronald@cococola.com' },
    { ApproverName: 'Adam George', EmailID: 'adam@cococola.com' },
    { ApproverName: 'Sam Arnoid', EmailID: 'sam@cococola.com' },
  ];
  const addApprover = () => { 
    if (approvalCardsData.length < 5) {
      const newApprover = {
        name: `Level${approvalCardsData.length + 1}`,
        label: `Level ${approvalCardsData.length + 1}`,
      };
      setApprovalCardsData([...approvalCardsData, newApprover]);
    }
  };
  const onHandleDeleteIcon = (index) =>{
    const newData = approvalCardsData.filter((data,i) => i!==index && data)
    setApprovalCardsData(newData);
  };
  const styles = approvalCardsData.length === 1 ? (disabled=true,{ cursor:"not-allowed", opacity:0.5 }) : (disabled=false,{ cursor:"pointer"});
  useEffect(()=>{
    if(isClicked){
      setApprovalCardsData([
        { name: "Level1", label: "Level 1" },
      ])
      setApproval()
      setSelectedApprover({ ApproverName: '', EmailID: '' })
      setComment("")
    }
  },[isClicked])
    const handleApproverChange = (approverName) => {
      const approver = data.find(item => item.ApproverName === approverName);
      if (approver) {
        setSelectedApprover(approver);
        setDisableApprover(false);
      }
  };
  const handleInputChange = (newValue) =>{
    if(!newValue){
      setSelectedApprover({ ApproverName: '', EmailID: '' })
      setDisableApprover(true)
    }
  }
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
        {approvalCardsData.map((approver,index) =>(
        <div className='approver-container'>
          <div  style={{paddingTop:"16px", paddingBottom:"10px", paddingLeft:"10px"}} className='level-width'>{approver.label}</div>
          <div  style={{paddingTop:"10px", paddingBottom:"10px", paddingLeft:"10px"}} className='approver-label-width'>
            <SearchWithOptions data={data} width="200px" onChange={handleApproverChange} onInputChange ={handleInputChange}clearInputValue={isClicked}/>
          </div>
          <div className='email-lable-width'  style={{paddingTop:"10px", paddingBottom:"10px", paddingLeft:"22px"}}>
            <ActionInput props={{ height: "40px", maxWidth: "220px", value: selectedApprover.EmailID }} placeholder='Email' />
          </div>
          <span style={{ paddingTop:"10px", ...styles,  textAlign:"right"}}>
            <IconButton disabled={disabled}>
            <DeleteIcon   onClick={()=>onHandleDeleteIcon(index)} />
            </IconButton>
          </span>
        </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '80px', marginTop:"15px" }}>
        <ButtonComponent
          maxWidth="170px"
          label="Add Approver"
          type="primary"
          disabled={disableApprover}
          onClick={addApprover}
        /></div>
      <div><label style={{ fontSize: '14px' }}>Comments</label> <ActionInput  onChange={(e)=>setComment(e.target.value)}props={{ height: "65px", maxWidth: "400px" ,value:comment }} placeholder='Kindly check the Lead time and approve.' /></div>
   </>



  )
}

export default ApprovalCard
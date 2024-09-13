import ActionInput from '../../components/common/actioninput/ActionInputField';
import DeleteIcon from '@mui/icons-material/Delete';
import './ApprovalCard.css'
import SearchWithOptions from '../../components/common/Searchwithoption/Search';
import './index.css'
import ButtonComponent from '../../components/common/button/Button';
import { IconButton } from '@mui/material';
const WorkFlowApproval = ({ checkBoxCount,formData,disableApprover,data,clear,approvalCardsData,addComment,handleApproverChange,handleClear,addApprover,onHandleDeleteIcon }) => {
  
  return (
    <>
      <div className='approval-items-wrapper'>
        <p style={{ marginTop: '8px', fontSize: '14px' }}>No.of Line Items for Approval</p>
        <ActionInput   
          props={{ height: "30px", maxWidth: "70px", value:checkBoxCount, 
          disabled:true }} 
        />
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
              <SearchWithOptions 
                data={data} 
                width="200px" 
                onChange={handleApproverChange} 
                clearInputValue={clear}
                handleClear={handleClear}
                name={approver.name}
              />
            </div>
            <div className='email-lable-width'  style={{paddingTop:"10px", paddingBottom:"10px", paddingLeft:"22px"}}>
              <ActionInput 
                props={{ height: "40px", maxWidth: "220px", value:approver.EmailID }} 
                placeholder='Email' 
              />
            </div>
            <span style={{ paddingTop:"10px",   textAlign:"right"}}>
            {approvalCardsData.length!==1 && <IconButton>
                <DeleteIcon   onClick={()=>onHandleDeleteIcon(index)} />
              </IconButton>}
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
        />
      </div>
      <div>
        <label style={{ fontSize: '14px' }}>Comments</label> 
        <ActionInput  
          onChange={addComment} 
          props={{ height: "65px", maxWidth: "400px" ,value:formData.Comments, name:"Comments" }} 
          placeholder='Kindly check the Lead time and approve.' 
        />
      </div>
   </>
  )
}

const WorkFlowApprovalFooter = ({clearFormData,onSubmitHandler,disableButton}) => {
  
  return (
    <div className='footer-btn-wrapper'>
      <ButtonComponent
        maxWidth="170px"
        label="Clear All"
        type="primary"
        onClick={clearFormData}
      />
      <ButtonComponent
        maxWidth="170px"
        label="Submit"
        bgColor="black"
        color="white"
        onClick={onSubmitHandler}
        disabled={disableButton}
      />
    </div>
  );
};

export {WorkFlowApproval,WorkFlowApprovalFooter}
import { useState, useEffect } from 'react'

const WorkFlowApprovalFormData = () =>{
const [disableApprover, setDisableApprover] = useState(true);
  const [approvalCardsData, setApprovalCardsData] = useState([
    { name: "Level1", label: "Level 1", EmailID:""},
  ]);
  const [clear, setClear] = useState(false)
  const [formData, setFormData] = useState({
    ApproverData: [],
    Comments: ""
  })
  const [open, setOpen] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
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
        EmailID: ""
      };
      setApprovalCardsData([...approvalCardsData, newApprover]);
      setDisableApprover(true)
      setDisableButton(true)
    } 
  };
  const onHandleDeleteIcon = (index) =>{
    const newData = approvalCardsData.filter((data,i) => i!==index && data)
    setApprovalCardsData(newData);
    const newFormData = formData.ApproverData.filter((data,i) => i!==index && data)
    setFormData({...formData,ApproverData:newFormData})
    setDisableApprover(false)
    if(formData.Comments !==""){
        setDisableButton(false)
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false)
    setApprovalCardsData([{ name: "Level1", label: "Level 1", EmailID:""}])
    setFormData({ApproverData: [],Comments: ""})
    setDisableButton(true)
  };
  useEffect(()=>{
    if(clear){
        setClear(false)
    }
  },[clear])
    const handleApproverChange = (approverName,name) => {
      const approver = data.find(item => item.ApproverName === approverName);
      if (approver) {
        setFormData({...formData,ApproverData:[...formData.ApproverData,approver]})
        approvalCardsData.forEach((item) =>{
          if(item.name === name){
            item.EmailID = approver["EmailID"]
          }
        })
      }
      setDisableApprover(false)
      if(formData.Comments === ""){
        setDisableButton(true)
      }
      else {
        setDisableButton(false)
      }

  };
  const handleClear = (previousValue,name) => {
      let FormData = formData.ApproverData.filter((option) =>option.ApproverName !== previousValue)
      setFormData({...formData,ApproverData: FormData})
      approvalCardsData.forEach((item) =>{
        if(item.name === name){
          item.EmailID = ""
          setDisableApprover(true)
          setDisableButton(true)
        }
      })
  };
  const addComment = (event) =>{
    setFormData({...formData,Comments:event.target.value})
    if(formData.ApproverData.length === approvalCardsData.length && event.target.value !==""){
        setDisableButton(false)
      }
      else{
        setDisableButton(true)

      }
  }

  const clearFormData = () =>{
    setClear(true)
    setApprovalCardsData([{ name: "Level1", label: "Level 1", EmailID:""}])
    setDisableApprover(true)
    setDisableButton(true)
    setFormData({ApproverData: [],Comments: ""})
  }

  const onSubmitHandler = () =>{
    setOpen(false)
    setApprovalCardsData([{ name: "Level1", label: "Level 1", EmailID:""}])
    setFormData({ApproverData: [],Comments: ""})
  }
  return {
    formData,
    disableApprover,
    data,
    approvalCardsData,
    open,
    clear,
    disableButton,
    addComment,
    handleApproverChange,
    handleClear,
    addApprover,
    onHandleDeleteIcon,
    clearFormData,
    handleClickOpen,
    handleClose,
    onSubmitHandler
    }
};
export default WorkFlowApprovalFormData;
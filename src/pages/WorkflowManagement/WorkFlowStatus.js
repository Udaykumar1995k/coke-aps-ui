import ButtonComponent from "../../components/common/button/Button"

const WorkFlowStatus = () => {
    return(
        <div>
            <div>
                <p>Status</p>
                <span><b>Pending with Approver 1</b></span>
            </div>
            <div className="workflow-status-container">
                <div>
                    {/* <p>Hii</p>
                    <p>Hiii</p> */}
                </div>
                <div className="approver-status-card">
                    <div className="workflow-header">
                        <p>Date</p>
                        <p>Process</p>
                        <p>Action Performed by</p>
                        <p>Created by</p>
                        <p>Status</p>
                        <p>Approval/Reject Remarks</p>
                    </div>
                    <div className="workflow-status">
                        <p>15th-July 2024</p>
                        <p>Workflow Initated </p>
                        <p>Sam Arnold</p>
                        <p>15th-July 2024 13:00:00</p>
                        <p>Initated</p>
                        <p> -- </p>
                    </div>
                    </div>
            </div>

        </div>
    )
}


const WorkFlowStatusFooter = () => {
    return(
        <div className='footer-btn-wrapper'>
      <ButtonComponent
        maxWidth="170px"
        label="Back"
        bgColor="white"
        color="black"
      />
      <ButtonComponent
        maxWidth="170px"
        label="Ok"
        bgColor="black"
        color="white"
      />
    </div>
    )
}

export {WorkFlowStatus, WorkFlowStatusFooter}

import './AnalyticsResults.css'
import ActionInput from '../../components/common/actioninput/ActionInputField';
import ButtonComponent from '../../components/common/button/Button';
const AnalyticsResultsTab = (props) =>{
    return (
    <div>
        <div className="analytic-results-tab">
            <div className="analytic-results">
                <div className="result-item">
                    <span className="analytics-text">Period Consider for Analytics</span>
                    <p >{props?.periodOfAnalytics}</p>
                </div>
                <div className="result-item">
                    <span className="analytics-text">Analytics Initiated by</span>
                    <p >{props?.analayticsInitiatedBy}</p>
                </div>
                <div className="result-item">
                    <span className="analytics-text">Analytics Run Unique ID</span>
                    <p >{props?.analyticsRunId}</p>
                </div>
            
            </div>
            <div className="input-details">
                <p>
                    <a style={{color:"black"}} href={props?.link || "#"}>Click Here</a> to View the Complete Input Details
                </p>
            </div >
        </div>
        <div className="analytic-results-tab result-margin">
            <div className="analytic-results">
                <div className="result-item">
                    <span className="analytics-text">Final LT to Be Updated in S4</span>
                    <ActionInput className="text-input" placeholder="Enter the Final LT" props={{ height:"35px", maxWidth:"250px"}} />
                </div>
                <div className="result-item">
                    <span className="analytics-text">Remarks for Acceptance/ Rejection</span>
                    <ActionInput className="text-input" placeholder="Enter the Remarks" props={{ height:"35px", maxWidth:"250px"}} />
                </div>
            </div>
            </div>
            <div className="analytic-results result-margin">
                <div className="analytic-results" style={{width:"30%"}}>
                    <ButtonComponent type="primary" maxWidth="80px" label="Back" />
                </div>
                <div className="analytic-results button-alignment">
                    <ButtonComponent bgColor="lightgrey" color="black"  maxWidth="80px" label="Reject" />
                    <ButtonComponent type="primary" maxWidth="300px" label="Drilldown to Components" />
                    <ButtonComponent type="secondary" maxWidth="180px" label="Send for Approval" />

                </div>
            </div>
        </div>

    );
}

export default AnalyticsResultsTab

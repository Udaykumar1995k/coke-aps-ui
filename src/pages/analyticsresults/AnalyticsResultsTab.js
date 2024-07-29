import './AnalyticsResults.css'

const AnalyticsResultsTab = (props) =>{
    return (
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
                <a style={{color:"black"}}href={props?.link || "#"}>Click Here</a> to View the Complete Input Details
            </p>
        </div >
    </div>

    );
}

export default AnalyticsResultsTab

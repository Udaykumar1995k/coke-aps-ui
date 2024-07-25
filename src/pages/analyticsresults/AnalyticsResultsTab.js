import './AnalyticsResults.css'

const AnalyticsResultsTab = (props) =>{
    return (
        <div className="analytic-results-tab">
      <div className="analytic-results">
      <div className="result-item">
          <p className="analytics-text-color">Period Consider for Analytics</p>
          <p className="text-color">{props?.periodOfResults}</p>
      </div>
      <div className="result-item">
          <p className="analytics-text-color">Analytics Initiated by</p>
          <p className="text-color">{props?.initatedBy}</p>
      </div>
      </div>
      <div className="input-details">
        <p><a style={{color:"black"}}href={props?.link || "#"}>Click Here</a> to View the Complete Input Details</p>
      </div >
    </div>

    );
}

export default AnalyticsResultsTab

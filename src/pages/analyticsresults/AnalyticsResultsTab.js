import './AnalyticsResults.css'
import ActionInput from '../../components/common/actioninput/ActionInputField';
import ButtonComponent from '../../components/common/button/Button';
import TabSection from '../../components/common/TabSection';
import Dropdown from '../../components/common/Dropdown';
import { useState } from 'react';
import {useLocation } from "react-router-dom";
import TopSection from '../TopSection';
const AnalyticsResultsTab = (props) =>{
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const {state} = useLocation();
      console.log("stateData",state)
    const [formData, setFormData] = useState({
        supplier: '',
        material: '',
        shipFrom: '',
        shipTo: ''
    });
    const handleFormData = (event) =>{
        setFormData({...formData,[event.target.name]: event.target.value})

    }
    return (
    <div>
        <TopSection labelList={[{ title: 'Home', path: '/landing-page' }, { title: 'Analytics Results', path: '/analytics-results' }, { title: 'Results' }]} />
        <div className="analytic-results-tab">
            <div className="analytic-results">
                <div className="result-item">
                    <span className="analytics-text">Period Consider for Analytics</span>
                    <p >{state?.periodOfAnalytics}</p>
                </div>
                <div className="result-item">
                    <span className="analytics-text">Analytics Initiated by</span>
                    <p >{state?.analayticsInitiatedBy}</p>
                </div>
                <div className="result-item">
                    <span className="analytics-text">Analytics Run Unique ID</span>
                    <p >{state?.analyticsRunId}</p>
                </div>
            
            </div>
            <div className="input-details">
                <p>
                    <a style={{color:"black"}} href="#">Click Here</a> to View the Complete Input Details
                </p>
            </div >
        </div>
        <div className="analytic-results material-tab-container border-radius-container">
            <div style={{width:"75%"}}>  
                <TabSection  style={{ maxWidth:"450px", marginBottom:"30px", width:"100%"}}  label={["Regular Items", "Advance PO Items"]} value={value} handleChange={handleChange} count={[12, 999]} />
                <div className="analytic-results">
                    <div  className="flex-direction-column">
                        <div className="material-tab-container analytic-results-tab material-items-container">
                            <div  className="result-item material-items">
                                <label>Supplier</label>
                                    <Dropdown 
                                        width="200px"
                                        label="Select Supplier"
                                        value={formData.supplier}
                                        name="supplier"
                                        options={[
                                            {value: 'ireland', label: 'CPS Balina'},
                                            {value: 'india',label:'CPS Hyderabad'}
                                        ]}
                                        handleChange={handleFormData}
                                    />
                                <label>Material</label>
                                    <Dropdown 
                                        width="200px"
                                        label="Select Material"
                                        value={formData.material}
                                        name="material"
                                        options={[
                                            {value: 'Material1', label: 'Material1'},
                                            {value: 'Material2',label:'Material2'}
                                            ]}
                                        handleChange={handleFormData}
                                    />
                                <label>Ship From</label>
                                    <Dropdown 
                                        width="200px"
                                        label="Select Ship From"
                                        value={formData.shipFrom}
                                        name="shipFrom"
                                        options={[
                                            {value: 'Location1', label: 'India'},
                                            {value: 'Location2',label:'Ireland'}
                                            ]}
                                        handleChange={handleFormData}
                                    />
                                <label>Ship To</label>
                                    <Dropdown 
                                        width="200px"
                                        label="Select Ship To"
                                        value={formData.shipTo}
                                        name="shipTo"
                                        options={[
                                            {value: 'Location1', label: 'India'},
                                            {value: 'Location2',label:'Ireland'}
                                            ]}
                                        handleChange={handleFormData}
                                    />
                                <div style={{ display:"flex", justifyContent:"center"}}>
                                    <ButtonComponent type="secondary" label="Ok" maxWidth="80px"/>
                                </div>
                            </div>
                        </div>
                        <div  style={{paddingLeft:"12px"}}className="analytic-results result-margin">
                            <p>Variance (Actual vs</p> 
                            <Dropdown
                                width="230px"
                                options={[
                                    {value: 'Median', label: 'Median'},
                                    {value: 'Mean',label:'Mean'},
                                    {value: 'Quartiles',label:'Quartiles'},
                                    {value: '75th Percentiles',label:'75th Percentiles'},
                                    {value: '80th Percentiles',label:'80th Percentiles'},
                                    {value: '90th Percentiles',label:'95th Percentiles'}
                                    ]}
                            />
                            <p>10%</p>
                        </div>
                    </div>
                       <div>
                            <Dropdown 
                                width="220px"
                                options={[
                                    {value: 'In Last 1 Year', label: 'In Last 1 Year'},
                                    {value: 'In Last 2 Year',label:'In Last 2 Year'}
                                    ]}
                            />
                        </div>
                </div>
            </div>
            <div className="analytic-results-tab result-margin" style={{width:"25%"}}>
                <div className="analytics-text">
                <p>Mean </p>
                <p>Median </p>
                <p>Quartiles </p>
                <p>75th Percentiles </p>
                <p>80th Percentiles </p>
                <p>90th Percentiles </p>
                <p>COV</p>
                </div>
                <h5>Recommondation:</h5>
                <div className="analytic-results recomonded-values-group">
                    <span>Recomonded values:</span>
                    <span className="text-alignment">57-60</span>
                </div>
                <div className="analytic-results recomonded-values-group">
                    <span>Confidence Level:</span>
                    <span className="text-alignment">High Likely(70%)</span>
                </div>
                <div className="analytic-results recomonded-values-group">
                    <span>Reccomondation Based on</span>
                    <span className="text-alignment">Advance Pos (60% of Total Pos)</span>
                </div>

            </div>
            
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

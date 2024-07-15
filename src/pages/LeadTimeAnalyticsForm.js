import React, {useState} from "react";
import  "./LeadTimeAnalyticsForm.css";
import RadioButtonGroup from "../components/common/RadioButtonGroup";
import CheckBoxInput from "../components/common/CheckboxInput";
import TextInput from "../components/common/TextInput";
import Dropdown from "../components/common/Dropdown";
import DatePicker from "../components/common/DatePicker";
import ButtonComponent from "../components/common/button/Button";
const LeadtTime = () =>{
    const [excludeRange,setExcludeRange] = useState(false);
    const [recentContractUpdates,setRecentContractUpdates] = useState('')
    const [supplier,setSupplier] = useState([]);
    const [materialType,setMaterialType] = useState([]);
    const [materialGroup,setMaterialGroup] = useState([]);
    const [material,setMaterial] = useState([]);
    const [hierarchy,setHierarchy] = useState([]);
    const [shipFrom,setShipFrom] = useState([]);
    const [shipTo,setShipTo] = useState([]);
    const [posPlacedInAdvance,setPosPlacedInAdvance] = useState('');
    const [fromDate,setFromDate] = useState(null);
    const [toDate,setToDate] = useState(null);
    const handleExcludeRangeChange  = (event) =>{
        setExcludeRange(event.target.checked)

    }
    return(
        <div className="form-container">
            <h5>Input Data For Lead Time Analytics</h5>
            <form>
                <div className="form-group">
                    <label className="label-position" htmlFor="hierarchy">Hierarchy for LT Analytics</label>
                    <Dropdown 
                        label="Plant/Supplier/Material" 
                        value={hierarchy} 
                        options={[
                            {value: 'Hierarchy1', label: 'Hierarchy1'},
                            {value: 'Hierarchy2',label:'Hierarchy2'}
                        ]}
                        handleChange={(e) =>setHierarchy(e.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="supplier">Supplier</label>
                    <Dropdown
                        label="Supplier" 
                        value={supplier} 
                        options={[
                             {value: 'ireland', label: 'CPS Balina'},
                            {value: 'india',label:'CPS Hyderabad'}
                         ]}
                        handleChange={(e) =>setSupplier(e.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="material-type">Material Type</label>
                    <Dropdown 
                        label="Material Type" 
                        value={materialType} 
                        options={[
                            {value: 'Type1', label: 'Type1'},
                            {value: 'Type2',label:'Type2'}
                        ]}
                        handleChange={(e) =>setMaterialType(e.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="material-group">Material Group</label>
                    <Dropdown 
                        label="Material Group" 
                        value={materialGroup} 
                        options={[
                            {value: 'Group1', label: 'Group1'},
                            {value: 'Group2',label:'Group2'}
                        ]}
                        handleChange={(e) =>setMaterialGroup(e.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="material">Material</label>
                    <Dropdown 
                        label="Material" 
                        value={material} 
                        options={[
                            {value: 'Material1', label: 'Material1'},
                            {value: 'Material2',label:'Material2'}
                        ]}
                        handleChange={(e) =>setMaterial(e.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="material">Ship From & To</label>
                    <div className="flex-container">
                    <Dropdown
                        label="Ship From" 
                        value={shipFrom} 
                        options={[
                            {value: 'Location1', label: 'India'},
                            {value: 'Location2',label:'Ireland'}
                        ]}
                        handleChange={(e) =>setShipFrom(e.target.value)}
                        />
                    <Dropdown 
                        label="Ship To" 
                        value={shipTo} 
                        options={[
                            {value: 'Location1', label: 'India'},
                            {value: 'Location2',label:'Ireland'}
                        ]}
                        handleChange={(e) =>setShipTo(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="period-to-consider">Period To Consider</label>
                    <div className="flex-container">
                        <DatePicker 
                        label="From Date" 
                        value={fromDate} 
                       onChange={(newValue) =>setFromDate(newValue)}
                        />
                       <DatePicker 
                        label="To Date" 
                        value={toDate} 
                       onChange={(newValue) =>setToDate(newValue)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="period-to-consider">Exclusive Range In Period</label>
                    <div className="flex-container">
                    <CheckBoxInput
                         props={{
                            checked: excludeRange,
                            fontSize: 28,
                            onchange: handleExcludeRangeChange,
                         }
                         }
                        />
                       <TextInput/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="period-to-consider">Recent Contract Updates</label>
                    <div className="flex-container">
                    <RadioButtonGroup
                            props={[
                                {label: 'Include', value: 'include',labelPlacement:"end",size:'medium'},
                                {label: 'Exclude',value: 'exclude',labelPlacement:"end",size:'medium'}
                                ]}
                            value={recentContractUpdates}
                            onChange={(e) =>setRecentContractUpdates(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="period-to-consider">Pos Placed in Advance of Opening Period</label>
                    <div className="flex-container">
                    <RadioButtonGroup
                            props={[
                                {label: 'Include', value: 'include',labelPlacement:"end",size:'medium'},
                                {label: 'Exclude',value: 'exclude',labelPlacement:"end",size:'medium'}
                                ]}
                            value={recentContractUpdates}
                            onChange={(e) =>setRecentContractUpdates(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-actions">
                    <ButtonComponent
                    maxWidth="120px"
                    label = "Clear All"
                    className="clear-btn"
                    bgColor="red"
                    />
                    <ButtonComponent
                    maxWidth="300px"
                    label="Schedule Analytics Run"
                    className="schedule-btn"
                    bgColor="red"

                    />
                </div>
            </form>
        </div>
    )
}

export default LeadtTime
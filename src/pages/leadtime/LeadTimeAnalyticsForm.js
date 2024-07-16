import React, {useState} from "react";
import  "./LeadTimeAnalyticsForm.css";
import RadioButtonGroup from "../../components/common/RadioButtonGroup";
import CheckBoxInput from "../../components/common/CheckboxInput";
import TextInput from "../../components/common/TextInput";
import Dropdown from "../../components/common/Dropdown";
import DatePicker from "../../components/common/DatePicker";
import ButtonComponent from "../../components/common/button/Button";
const LeadtTime = () =>{
    const [formData, setFormData] = useState({
        plantSupplier: '',
        supplier: '',
        materialType: '',
        materialGroup: '',
        material: '',
        shipFrom: '',
        shipTo: '',
        excludeRange: false,
        recentContractUpdates: '',
        posPlacedInAdvance: '',
        fromDate: null,
        toDate: null

    });
    const handleChange = (event) =>{
        console.log("event",event, event.target.name, event.target.value)
        setFormData({...formData,[event.target.name]: event.target.type ==="checkbox" ? event.target.checked: event.target.value});
        
    }
    const handleDateChange  = (date,name) =>{
        setFormData({
            ...formData,
            [name]: date
        });

    };
    const clearAll =() =>{
        setFormData('');
    };

    const scheduleAnalyticsRun = (event) =>{
        console.log("Event",event)
    }
    return(
        <div className="form-container">
            <h5>Input Data For Lead Time Analytics</h5>
            <form>
                <div className="form-group">
                    <label className="label-position" htmlFor="hierarchy">Hierarchy for LT Analytics</label>
                    <Dropdown 
                        name="plantSupplier"
                        label="Plant/Supplier/Material" 
                        value={formData.plantSupplier} 
                        options={[
                            {value: 'Hierarchy1', label: 'Hierarchy1'},
                            {value: 'Hierarchy2',label:'Hierarchy2'}
                        ]}
                        handleChange={handleChange}
                        />
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="supplier">Supplier</label>
                    <Dropdown
                        label="Supplier" 
                        name="supplier"
                        value={formData.supplier} 
                        options={[
                             {value: 'ireland', label: 'CPS Balina'},
                            {value: 'india',label:'CPS Hyderabad'}
                         ]}
                        handleChange={handleChange}
                        />
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="material-type">Material Type</label>
                    <Dropdown
                        name="materialType"
                        label="Material Type" 
                        value={formData.materialType} 
                        options={[
                            {value: 'Type1', label: 'Type1'},
                            {value: 'Type2',label:'Type2'}
                        ]}
                        handleChange={handleChange}
                        />
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="material-group">Material Group</label>
                    <Dropdown
                        name="materialGroup"
                        label="Material Group" 
                        value={formData.materialGroup} 
                        options={[
                            {value: 'Group1', label: 'Group1'},
                            {value: 'Group2',label:'Group2'}
                        ]}
                        handleChange={handleChange}
                        />
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="material">Material</label>
                    <Dropdown 
                        name="material"
                        label="Material" 
                        value={formData.material} 
                        options={[
                            {value: 'Material1', label: 'Material1'},
                            {value: 'Material2',label:'Material2'}
                        ]}
                        handleChange={handleChange}
                        />
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="material">Ship From & To</label>
                    <div className="flex-container">
                    <Dropdown
                        name="shipFrom"
                        label="Ship From" 
                        value={formData.shipFrom} 
                        options={[
                            {value: 'Location1', label: 'India'},
                            {value: 'Location2',label:'Ireland'}
                        ]}
                        handleChange={handleChange}
                        />
                    <Dropdown 
                        name="shipTo"
                        label="Ship To" 
                        value={formData.shipTo} 
                        options={[
                            {value: 'Location1', label: 'India'},
                            {value: 'Location2',label:'Ireland'}
                        ]}
                        handleChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="period-to-consider">Period To Consider</label>
                    <div className="flex-container">
                        <DatePicker 
                        name="fromDate"
                        label="From Date" 
                        value={formData.fromDate} 
                       onChange={(e)=> handleDateChange(e,'fromDate')}
                        />
                       <DatePicker 
                        name="toDate"
                        label="To Date" 
                        value={formData.toDate} 
                       onChange={(e) => handleDateChange(e,'toDate')}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="label-position" htmlFor="period-to-consider">Exclusive Range In Period</label>
                    <div className="flex-container">
                    <CheckBoxInput
                         props={{
                            name:"excludeRange",
                            checked: formData.excludeRange,
                            fontSize: 28,
                            onchange: handleChange
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
                            value={formData.recentContractUpdates}
                            onChange={handleChange}
                            name="recentContractUpdates"
                        
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
                            value={formData.posPlacedInAdvance}
                            onChange={handleChange}
                            name="posPlacedInAdvance"
                        />
                    </div>
                </div>
                <div className="form-actions">
                    <ButtonComponent
                    maxWidth="120px"
                    label = "Clear All"
                    className="clear-btn"
                    bgColor="red"
                    onClick={clearAll}
                    />
                    <ButtonComponent
                    maxWidth="300px"
                    label="Schedule Analytics Run"
                    className="schedule-btn"
                    bgColor="red"
                    onClick={scheduleAnalyticsRun}
                    />
                </div>
            </form>
        </div>
    )
}

export default LeadtTime
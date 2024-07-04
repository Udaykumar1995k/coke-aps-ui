import React, {useState} from "react";
import { Grid,FormControl,Select,MenuItem,InputLabel } from "@mui/material";
import RadioButtonGroup from "../components/common/RadioButtonGroup";
import CheckBoxInput from "../components/common/CheckboxInput";
import TextInput from "../components/common/TextInput";
import ActionButton from "../components/common/ActionButton";
const LeadTimeAnalyticsForm = () => {
    const [excludeRange,setExcludeRange] = useState(false);
    const [recentContractUpdates,setRecentContractUpdates] = useState('')
    const handleExcludeRangeChange  = (event) =>{
        setExcludeRange(event.target.checked)

    }
    const handleClear =() =>{
        return ""
    }
    return(
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h2>Input Data For Lead Time Analytics</h2>
                </Grid>
            <Grid>
                <CheckBoxInput
                label = "Exclude range in the period"
                checked = {excludeRange}
                onChange = {handleExcludeRangeChange}
                />
            </Grid>
            <Grid>
                <RadioButtonGroup
                label="Recent Contract Updates"
                options={[
                    {label: 'Include', value: 'include'},
                    {label: 'Exclude',value: 'exclude'}
                ]}
                value={recentContractUpdates}
                onChange={(e) =>setRecentContractUpdates(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextInput
                />
            </Grid>
            <Grid item xs={6}>
                <ActionButton label="Clear all" color="error" onclick={handleClear}/>

            </Grid>
            <Grid item xs={6}>
                <ActionButton label="Schedule Analytics Run" color="error" onclick={handleClear}/>

            </Grid>
            </Grid>
        </form>
            
    );
};

export  default  LeadTimeAnalyticsForm
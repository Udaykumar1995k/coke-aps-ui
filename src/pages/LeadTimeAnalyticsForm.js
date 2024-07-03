import React, {useState} from "react";
import { Grid,FormControl,Select,MenuItem,InputLabel } from "@mui/material";
import RadioButtonGroup from "../components/common/RadioButtonGroup";
import CheckBoxInput from "../components/common/CheckboxInput";
const LeadTimeAnalyticsForm = () => {
    const [excludeRange,setExcludeRange] = useState(false);
    const [recentContractUpdates,setRecentContractUpdates] = useState('')
    const handleExcludeRangeChange  = (event) =>{
        setExcludeRange(event.target.checked)

    }
    return(
        <div>
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
        </div>
            
    );
};

export  default  LeadTimeAnalyticsForm
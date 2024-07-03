import React, {useState} from "react";
import { Grid,FormControl,Select,MenuItem,InputLabel } from "@mui/material";
import CheckBoxInput from "../components/common/CheckboxInput";
const LeadTimeAnalyticsForm = () => {
    const [excludeRange,setExcludeRange] = useState(false);
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
        </div>
            
    )
}

export  default  LeadTimeAnalyticsForm
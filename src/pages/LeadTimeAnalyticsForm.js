import React, {useState} from "react";
import { Grid, Typography,Box } from "@mui/material";
import RadioButtonGroup from "../components/common/RadioButtonGroup";
import CheckBoxInput from "../components/common/CheckboxInput";
import TextInput from "../components/common/TextInput";
import Dropdown from "../components/common/Dropdown";
import DatePicker from "../components/common/DatePicker";
import ButtonComponent from "../components/common/ButtonComponent";
const LeadTimeAnalyticsForm = () => {
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
    const handleClear =() =>{
        console.log("in handle clear");
        setExcludeRange(null);
        setRecentContractUpdates('')
        setSupplier([]);
        setMaterialType([]);
        setMaterialGroup([]);
        setMaterial([]);
        setHierarchy([]);
        setShipFrom([]);
        setShipTo([]);
        setPosPlacedInAdvance('');
        setFromDate(null);
        setToDate(null);
    };
    return(
        <form>
            <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Input Data For Lead Time Analytics</Typography>
                </Grid>
                <Grid  item container xs={12} alignItems="center">
                    <Grid item xs={3}>
                        <Typography>Hierarchy for LT Analytics</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Dropdown 
                        label="Plant/Supplier/Material" 
                        value={hierarchy} 
                        options={[
                            {value: 'Hierarchy1', label: 'Hierarchy1'},
                            {value: 'Hierarchy2',label:'Hierarchy2'}
                        ]}
                        handleChange={(e) =>setHierarchy(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={3}>
                        <Typography>Supplier</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Dropdown 
                        label="Supplier" 
                        value={supplier} 
                        options={[
                             {value: 'ireland', label: 'CPS Balina'},
                            {value: 'india',label:'CPS Hyderabad'}
                         ]}
                        handleChange={(e) =>setSupplier(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={3}>
                        <Typography>Material Type</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Dropdown 
                        label="Material Type" 
                        value={materialType} 
                        options={[
                            {value: 'Type1', label: 'Type1'},
                            {value: 'Type2',label:'Type2'}
                        ]}
                        handleChange={(e) =>setMaterialType(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid  item container xs={12} alignItems="center">
                    <Grid item xs={3}>
                        <Typography>Material Group</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Dropdown 
                        label="Material Group" 
                        value={materialGroup} 
                        options={[
                            {value: 'Group1', label: 'Group1'},
                            {value: 'Group2',label:'Group2'}
                        ]}
                        handleChange={(e) =>setMaterialGroup(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid  item container xs={12} alignItems="center">
                    <Grid item xs={3}>
                        <Typography>Material</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Dropdown 
                        label="Material" 
                        value={material} 
                        options={[
                            {value: 'Material1', label: 'Material1'},
                            {value: 'Material2',label:'Material2'}
                        ]}
                        handleChange={(e) =>setMaterial(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid  item container xs={12} alignItems="center">
                    <Grid item xs={3}>
                        <Typography>Ship From & To</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Dropdown 
                        label="Ship From" 
                        value={shipFrom} 
                        options={[
                            {value: 'Location1', label: 'India'},
                            {value: 'Location2',label:'Ireland'}
                        ]}
                        handleChange={(e) =>setShipFrom(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Dropdown 
                        label="Ship To" 
                        value={shipTo} 
                        options={[
                            {value: 'Location1', label: 'Ireland'},
                            {value: 'Location2',label:'India'}
                            ]}
                        handleChange={(e) =>setShipTo(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid   item container xs={12} alignItems="center">
                    <Grid item xs={3.1}>
                        <Typography>Period To Consider</Typography>
                    </Grid>
                    <Grid item xs={4} >
                        <DatePicker 
                        label="From Date" 
                        value={fromDate} 
                       onChange={(newValue) =>setFromDate(newValue)}
                        />
                    </Grid>
                    <Grid item xs={4} sx={{paddingLeft:3}}>
                        <DatePicker 
                        label="To Date" 
                        value={toDate} 
                       onChange={(newValue) =>setToDate(newValue)}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={3.1}>
                        <Typography>Exclude range in the period</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <CheckBoxInput
                         props={{
                            checked: excludeRange,
                            fontSize: 28,
                            onchange: handleExcludeRangeChange,
                         }
                         }
                        />
                    </Grid>
                    <Grid item xs={6.8}>
                        <TextInput/>
                    </Grid>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={3}>
                        <Typography>Recent Contract Updates</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <RadioButtonGroup
                            props={[
                                {label: 'Include', value: 'include',labelPlacement:"end",size:'medium'},
                                {label: 'Exclude',value: 'exclude',labelPlacement:"end",size:'medium'}
                                ]}
                            value={recentContractUpdates}
                            onChange={(e) =>setRecentContractUpdates(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={3}>
                        <Typography>Pos Placed in Advance of Opening Period</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <RadioButtonGroup
                        props={[
                            {label: 'Include', value: 'include',labelPlacement:"end",size:'medium'},
                            {label: 'Exclude',value: 'exclude',labelPlacement:"end",size:'medium'}
                        ]}
                        value={posPlacedInAdvance}
                        onChange={(e) =>setPosPlacedInAdvance(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid  item  xs={12} >
                    <Grid container alignItems="flex-start" >
                        <Grid  item >
                            <ButtonComponent 
                            props={{
                                    variant: 'contained',
                                    size: 'medium',
                                    color: 'error',
                                    text: 'Clear All',
                                    onClick: handleClear,
                                    fontSize:'1rem'
                            }}
                            />
                        </Grid>
                        <Grid item>
                            <ButtonComponent
                            props={{
                                variant: 'contained',
                                size: 'medium',
                                color: 'error',
                                text: 'Schedule Analytics Run',
                                onClick: handleClear,
                                fontSize:'1rem'
                        }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </form>
            
    );
};

export  default  LeadTimeAnalyticsForm
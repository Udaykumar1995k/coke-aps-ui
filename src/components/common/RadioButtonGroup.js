import React from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const RadioButtonGroup = ({ name, value, onChange, props }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        name={name}
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiFormControlLabel-label": {
            fontSize: "14px",
            color: "#797979",
          },
        }}
      >
        {props?.map((prop, index) => (
          <FormControlLabel
            key={`${prop?.value}-${index}`}
            value={prop?.value}
            control={
              <Radio
                size={prop.size}
                sx={{
                  color: prop?.uncheckedColor || "default",
                  "&.Mui-checked": {
                    color: '#575757',
                  },
                }}
              />
            }
            label={prop?.label}
            labelPlacement={prop?.labelPlacement}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioButtonGroup;

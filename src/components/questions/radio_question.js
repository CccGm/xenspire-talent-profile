import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const RadioQuestion = ({ ans, changeAns, optionsList }) => {
  return (
    <div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="first"
        value={ans}
        onChange={(e) => {
          changeAns(e.target.value);
        }}
        name="radio-buttons-group"
        sx={{ gap: 2, marginTop: 3 }}>
        {optionsList.map((data, index) => {
          return (
            <FormControlLabel
              key={index}
              value={data}
              control={<Radio />}
              label={data}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};

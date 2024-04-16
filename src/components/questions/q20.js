import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const Q20 = () => {
  const [radio, setRadio] = React.useState("");

  return (
    <div className="mt-10 mx-24 grid grid-flow-col">
      <div className="grid grid-flow-row gap-6 mt-8 ">
        <text className="text-app-Teal ">
          • Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </text>
        <text className="text-app-Teal ">
          • Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s,
        </text>
        <text className="text-app-Teal ">
          • when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </text>
        <text className="text-app-Teal ">
          • It has survived not only five centuries, but also the leap into
          electronic typesetting
        </text>
      </div>
      <div>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="first"
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          name="radio-buttons-group"
          sx={{ gap: 3, marginTop: 3 }}>
          <FormControlLabel
            value="first"
            control={<Radio />}
            label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <FormControlLabel
            value="secound"
            control={<Radio />}
            label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <FormControlLabel
            value="third"
            control={<Radio />}
            label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <FormControlLabel
            value="four"
            control={<Radio />}
            label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </RadioGroup>
      </div>
    </div>
  );
};

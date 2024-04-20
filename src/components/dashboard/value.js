import { Divider, Radio } from "@mui/material";
import React from "react";

export const Value = () => {
  const [radio, setRadio] = React.useState({
    first: "",
    secound: "",
    thired: "",
  });

  return (
    <div className="p-10 mt-20 mx-24">
      <div className="p-5 grid grid-cols-3 items-center bg-app-Border rounded-ss-md rounded-se-md text-base font-semibold text-white">
        <div className="flex justify-center">
          <text>Most Like Me</text>
        </div>
        <div className="grid grid-flow-col justify-between gap-8 items-center text-center">
          <Divider orientation="vertical" />
          <text>
            choose one unique option for 'Most Like' and 'Least Lokely'
          </text>
          <Divider orientation="vertical" />
        </div>
        <div className="flex justify-center">
          <text>Least Like Me</text>
        </div>
      </div>
      <div className="p-5 grid grid-cols-3 items-center bg-app-LightTeal">
        <div className="flex justify-center">
          <Radio
            name="most"
            checked={radio.first === "most"}
            onChange={() => setRadio({ ...radio, first: "most" })}
          />
        </div>
        <div className="grid grid-flow-col justify-between gap-8 items-center text-center">
          <Divider orientation="vertical" />
          <text>Flourish autonomously, take full ownership</text>
          <Divider orientation="vertical" />
        </div>
        <div className="flex justify-center">
          <Radio
            name="least"
            checked={radio.first === "least"}
            onChange={() => setRadio({ ...radio, first: "least" })}
          />
        </div>
      </div>
      <div className="p-5 grid grid-cols-3 items-center bg-app-LightTeal">
        <div className="flex justify-center">
          <Radio
            name="most"
            checked={radio.secound === "most"}
            onChange={() => setRadio({ ...radio, secound: "most" })}
          />
        </div>
        <div className="grid grid-flow-col justify-between gap-8 items-center text-center">
          <Divider orientation="vertical" />
          <text>Prioritize professional growth, seek recognition</text>
          <Divider orientation="vertical" />
        </div>
        <div className="flex justify-center">
          <Radio
            name="least"
            checked={radio.secound === "least"}
            onChange={() => setRadio({ ...radio, secound: "least" })}
          />
        </div>
      </div>
      <div className="p-5 pb-8 grid grid-cols-3 items-center bg-app-LightTeal rounded-es-md rounded-ee-md">
        <div className="flex justify-center">
          <Radio
            name="most"
            checked={radio.thired === "most"}
            onChange={() => setRadio({ ...radio, thired: "most" })}
          />
        </div>
        <div className="grid grid-flow-col justify-between gap-8 items-center text-center">
          <Divider orientation="vertical" />
          <text>Value harmony,prioritize group norms</text>
          <Divider orientation="vertical" />
        </div>
        <div className="flex justify-center">
          <Radio
            name="least"
            checked={radio.thired === "least"}
            onChange={() => setRadio({ ...radio, thired: "least" })}
          />
        </div>
      </div>
    </div>
  );
};

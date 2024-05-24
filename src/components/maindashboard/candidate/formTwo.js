import { Button, FormLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import {
  PreferOffice,
  appealings,
  currancys,
  locations,
  salary_Rate,
  shedules,
  travels,
  workShifts,
  work_Comapny,
  yes_No,
} from "./Drop_Data";

export const FormTwo = ({ next, back }) => {
  const [inOffice, setInOffice] = React.useState("");
  const [workShift, setWorkShifts] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [relocation, setRelocation] = React.useState("");
  const [travel, setTravel] = React.useState("");
  const [workingIndependently, setWorkingIndependently] = React.useState("");
  const [salary, setSalary] = React.useState({
    curancy: "",
    amount: "",
    rate: "",
  });
  const [workSchedule, setWorkSchedule] = React.useState("");
  const [appealing, setAppealing] = React.useState("");

  const saveApiData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/saveQuestion/",
        {
          inOffice,
          workShift,
          location,
          relocation,
          travel,
          workingIndependently,
          salary,
          workSchedule,
          appealing,
        }
      );

      if (response.status === 200) {
        console.log("save data succesfully");
      } else {
        console.log("save data not save");
      }
    } catch (error) {
      console.log("save data not save", error);
    }
  };

  return (
    <div className="mx-40 mb-24">
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          Which work setting do you prefer in-office?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={inOffice}
          onChange={(e) => setInOffice(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an Option</text>;
            }
            return selected;
          }}
          className="w-96">
          {PreferOffice.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          What is your preference on work shifts?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={workShift}
          onChange={(e) => setWorkShifts(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an Option</text>;
            }
            return selected;
          }}
          className="w-96">
          {workShifts.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          What are your preferred location for the job?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an Option</text>;
            }
            return selected;
          }}
          className="w-96">
          {locations.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          Are you open to relocation if required for the job?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={relocation}
          onChange={(e) => setRelocation(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an Option</text>;
            }
            return selected;
          }}
          className="w-96">
          {yes_No.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          If your work requires you to travel, how comfortable are you to
          travel?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={travel}
          onChange={(e) => setTravel(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an option</text>;
            }
            return selected;
          }}
          className="w-96">
          {travels.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          Do you prefer working independently or as part of a small team, as a
          part of large team?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={workingIndependently}
          onChange={(e) => setWorkingIndependently(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an option</text>;
            }
            return selected;
          }}
          className="w-96">
          {work_Comapny.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          What are the salary expectation?
        </FormLabel>
        <div className="grid grid-flow-col gap-3">
          <Select
            size="small"
            displayEmpty
            value={salary.curancy}
            onChange={(e) => setSalary({ ...salary, curancy: e.target.value })}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return (
                  <text style={{ color: "#667085" }}>Select an option</text>
                );
              }
              return selected;
            }}
            className="w-40">
            {currancys.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>

          <TextField
            size="small"
            type="number"
            placeholder="Enter your budget"
            value={salary.amount}
            onChange={(e) => setSalary({ ...salary, amount: e.target.value })}
          />
          <Select
            size="small"
            displayEmpty
            value={salary.rate}
            onChange={(e) => setSalary({ ...salary, rate: e.target.value })}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return (
                  <text style={{ color: "#667085" }}>Select an option</text>
                );
              }
              return selected;
            }}
            className="w-40">
            {salary_Rate.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          What is your preferred work schedule?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={workSchedule}
          onChange={(e) => setWorkSchedule(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an option</text>;
            }
            return selected;
          }}
          className="w-96">
          {shedules.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          What is you appealing to you work?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={appealing}
          onChange={(e) => setAppealing(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an option</text>;
            }
            return selected;
          }}
          className="w-96">
          {appealings.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="my-5 flex justify-start">
        <Button
          variant="contained"
          style={{
            color: "#ffffff",
            backgroundColor: "#008080",
            borderColor: "#66B2B2",
            borderWidth: 1,
          }}
          onClick={next}>
          Next
        </Button>
        <Button
          variant="contained"
          style={{
            color: "#ffffff",
            backgroundColor: "#008080",
            borderColor: "#66B2B2",
            borderWidth: 1,
            marginLeft: 10,
          }}
          onClick={back}>
          Back
        </Button>
        <Button
          variant="contained"
          style={{
            color: "#ffffff",
            backgroundColor: "#008080",
            borderColor: "#66B2B2",
            borderWidth: 1,
            marginLeft: 10,
          }}
          onClick={saveApiData}>
          Save
        </Button>
      </div>
    </div>
  );
};

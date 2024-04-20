import React from "react";
import { Box, Chip, FormLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";

export const Form_Of_Basic_Details = () => {
  const [member, setMember] = React.useState("");
  const [industry, setIndustry] = React.useState([]);
  const [skill, setSkill] = React.useState({ name: "", skill: "" });
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const company = ["IT", "Computer", "Banking", "AI", "Business", "Automation"];
  const skills = ["sport", "work", "nodejs", "another", "react"];

  const saveApiData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/saveQuestion/",
        {
          member,
          industry,
          skill,
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
          What is the Size of the team?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={member}
          onChange={(e) => setMember(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <text style={{ color: "#667085" }}>Select team member</text>
              );
            }
            return selected;
          }}
          className="w-96">
          {numbers.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          Does the candidate need to come from specific industry? If yes, then
          specify
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          multiple
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select Industry</text>;
            }
            return (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            );
          }}
          className="w-96">
          {company.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          What is the scope of the role?
        </FormLabel>
        <textarea
          rows={2}
          style={{
            width: 384,
            borderWidth: 1,
            borderColor: "#A7AAAF",
            borderRadius: 4,
            padding: 8,
          }}
        />
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>Type of the Role</FormLabel>
        <input
          style={{
            width: 384,
            borderWidth: 1,
            borderColor: "#A7AAAF",
            borderRadius: 4,
            padding: 8,
          }}
        />
      </div>
      <div className="mt-4">
        <text style={{ color: "#008080" }}>What are the Skillset Needed?</text>
        <div className="mt-4 grid grid-flow-col justify-between items-center">
          <input
            value={skill.name}
            onChange={(e) => setSkill({ ...skill, name: e.target.value })}
            placeholder="Skill Name 1"
            style={{
              width: 384,
              borderWidth: 1,
              borderColor: "#A7AAAF",
              borderRadius: 4,
              padding: 8,
            }}
          />
          <Select
            size="small"
            displayEmpty
            value={skill.skill}
            onChange={(e) => setSkill({ ...skill, skill: e.target.value })}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <text style={{ color: "#667085" }}>Select Skill</text>;
              }
              return selected;
            }}
            className="w-96">
            {skills.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

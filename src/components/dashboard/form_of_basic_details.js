import React from "react";
import { Box, Chip, FormLabel, MenuItem, Select } from "@mui/material";

export const Form_Of_Basic_Details = () => {
  const [member, setMember] = React.useState("");
  const [industry, setIndustry] = React.useState([]);
  const [skill1, setSkill1] = React.useState({ name: "", skill: "" });
  const [skill2, setSkill2] = React.useState({ name: "", skill: "" });

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const company = ["IT", "Computer", "Banking", "AI", "Business", "Automation"];
  const skill = ["sport", "work", "nodejs", "another", "react"];

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
            value={skill1.name}
            onChange={(e) => setSkill1({ ...skill1, name: e.target.value })}
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
            value={skill1.skill}
            onChange={(e) => setSkill1({ ...skill1, skill: e.target.value })}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <text style={{ color: "#667085" }}>Select Skill</text>;
              }
              return selected;
            }}
            className="w-96">
            {skill.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="mt-4 grid grid-flow-col justify-between items-center">
          <input
            value={skill2.name}
            onChange={(e) => setSkill2({ ...skill2, name: e.target.value })}
            placeholder="Skill Name 2"
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
            value={skill2.skill}
            onChange={(e) => setSkill2({ ...skill2, skill: e.target.value })}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <text style={{ color: "#667085" }}>Select Skill</text>;
              }
              return selected;
            }}
            className="w-96">
            {skill.map((name) => (
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

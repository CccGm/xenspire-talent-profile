import {
  Box,
  Button,
  FormLabel,
  MenuItem,
  Select,
  Chip,
  TextField,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { qualifications, skillLevel, skills } from "./Drop_Data";

export const FormOne = ({ next }) => {
  const [qualification, setQualification] = React.useState("");
  const [specialization, setSpecialization] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [primarySkill, setPrimarySkill] = React.useState([
    { skill: "", level: "" },
  ]);
  const [secoundrySkill, setSecoundrySkill] = React.useState([
    { skill: "", level: "" },
  ]);
  const [certifications, setCertifications] = React.useState("");
  const [tools, setTools] = React.useState("");
  const [updatedSkilles, setUpdatedSkills] = React.useState([]);
  const company = ["IT", "Computer", "Banking", "AI", "Business", "Automation"];

  const saveApiData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/saveQuestion/",
        {
          qualification,
          specialization,
          experience,
          primarySkill,
          secoundrySkill,
          certifications,
          tools,
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

  let handleChange = (i, e) => {
    let newFormValues = [...primarySkill];
    newFormValues[i][e.target.name] = e.target.value;

    setPrimarySkill(newFormValues);
  };

  let addSkillFields = () => {
    setPrimarySkill([...primarySkill, { skill: "", level: "" }]);
  };

  let removeSkillFields = (i) => {
    let newFormValues = [...primarySkill];
    newFormValues.splice(i, 1);
    setPrimarySkill(newFormValues);
  };

  let addSecoundrySkill = () => {
    setSecoundrySkill([...secoundrySkill, { skill: "", level: "" }]);
  };

  let removeSecoundrySkill = (i) => {
    let newFormValues = [...secoundrySkill];
    newFormValues.splice(i, 1);
    setSecoundrySkill(newFormValues);
  };

  let handleChangeSecoundry = (i, e) => {
    let newFormValues = [...secoundrySkill];
    newFormValues[i][e.target.name] = e.target.value;
    setSecoundrySkill(newFormValues);
  };

  React.useEffect(() => {
    let add = skills;
    primarySkill.map((value) => {
      add = add.filter((skil) => skil !== value.skill);
    });
    setUpdatedSkills(add);
  }, [primarySkill.length]);

  return (
    <div className="mx-40 mb-24">
      <div className="flex justify-center text-center">
        <p className="py-3 text-2xl font-bold text-app-text">Candidate Form</p>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          What level of academic qualification have you attained?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <text style={{ color: "#667085" }}>Select Qualification</text>
              );
            }
            return selected;
          }}
          className="w-96">
          {qualifications.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          What is your specialization?
        </FormLabel>
        <TextField
          size="small"
          placeholder="specialization "
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="w-96"
        />
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          How many years of experience do you have?
        </FormLabel>
        <TextField
          type="number"
          size="small"
          placeholder="experience "
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="w-96"
        />
      </div>
      {/* Primary Skill */}
      <div div className="mt-4 grid grid-cols-2">
        <div>
          <text style={{ color: "#008080" }}>
            What are the Primary skills necessary to do the job?
          </text>
        </div>
        <div>
          {primarySkill.map((element, index) => (
            <div className="grid grid-flow-row">
              <div className="mt-4 grid grid-flow-col justify-between items-center">
                <Select
                  name="skill"
                  size="small"
                  displayEmpty
                  value={element.skill}
                  onChange={(e) => handleChange(index, e)}
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <text style={{ color: "#667085" }}>Select Skill</text>
                      );
                    }
                    return selected;
                  }}
                  className="w-52">
                  {updatedSkilles.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  name="level"
                  size="small"
                  displayEmpty
                  value={element.level}
                  onChange={(e) => handleChange(index, e)}
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <text style={{ color: "#667085" }}>
                          Select Skill Level
                        </text>
                      );
                    }
                    return selected;
                  }}
                  className="w-52">
                  {skillLevel.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>

                <Button
                  variant="contained"
                  style={{
                    color: "#ffffff",
                    backgroundColor:
                      primarySkill.length === 1 ? "#66B2B2" : "#008080",
                    borderColor: "#66B2B2",
                    borderWidth: 1,
                  }}
                  disabled={primarySkill.length === 1}
                  onClick={() => removeSkillFields(index)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}

          <div className="my-5 flex justify-end">
            <Button
              variant="contained"
              style={{
                color: "#ffffff",
                backgroundColor: "#008080",
                borderColor: "#66B2B2",
                borderWidth: 1,
              }}
              onClick={() => addSkillFields()}>
              Add Skill
            </Button>
          </div>
        </div>
      </div>
      {/* secoundry skill */}
      <div div className="grid grid-cols-2">
        <div>
          <text style={{ color: "#008080" }}>
            What are the Secondary skills necessary to do the job?
          </text>
        </div>

        <div>
          {secoundrySkill.map((element, index) => (
            <div className="grid grid-flow-row">
              <div className="mt-4 grid grid-flow-col justify-between items-center">
                <Select
                  name="skill"
                  size="small"
                  displayEmpty
                  value={element.skill}
                  onChange={(e) => handleChangeSecoundry(index, e)}
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <text style={{ color: "#667085" }}>Select Skill</text>
                      );
                    }
                    return selected;
                  }}
                  className="w-52">
                  {skills.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  name="level"
                  size="small"
                  displayEmpty
                  value={element.level}
                  onChange={(e) => handleChangeSecoundry(index, e)}
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <text style={{ color: "#667085" }}>
                          Select Skill Level
                        </text>
                      );
                    }
                    return selected;
                  }}
                  className="w-52">
                  {skillLevel.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>

                <Button
                  variant="contained"
                  style={{
                    color: "#ffffff",
                    backgroundColor:
                      secoundrySkill.length === 1 ? "#66B2B2" : "#008080",
                    borderColor: "#66B2B2",
                    borderWidth: 1,
                  }}
                  disabled={secoundrySkill.length === 1}
                  onClick={() => removeSecoundrySkill(index)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <div className="my-5 flex justify-end">
            <Button
              variant="contained"
              style={{
                color: "#ffffff",
                backgroundColor: "#008080",
                borderColor: "#66B2B2",
                borderWidth: 1,
              }}
              onClick={() => addSecoundrySkill()}>
              Add Skill
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          Do you possess any specific certifications or licenses ?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={certifications}
          onChange={(e) => setCertifications(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <text style={{ color: "#667085" }}>
                  Select Certificate or Licenses
                </text>
              );
            }
            return selected;
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
          Please add the tools or software applicaton you have used in the past?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={tools}
          onChange={(e) => setTools(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <text style={{ color: "#667085" }}>
                  Select Tools or Software
                </text>
              );
            }
            return selected;
          }}
          className="w-96">
          {company.map((name) => (
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
          onClick={saveApiData}>
          Save
        </Button>
      </div>
    </div>
  );
};

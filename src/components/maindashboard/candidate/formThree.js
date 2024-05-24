import { Button, FormLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  currancys,
  envonments,
  experiances,
  job_Interests,
  salary_Rate,
  skillLevel,
  skills,
  visa_status,
  yes_No,
} from "./Drop_Data";

export const FormThree = ({ back }) => {
  const navigate = useNavigate();
  const [environment, setEnvironment] = React.useState("");
  const [companyOutlook, setCompanyOutlook] = React.useState("");
  const [stakeholder, setStakeholder] = React.useState("");
  const [noticePeriod, setNoticePeriod] = React.useState("");
  const [jobIntrested, setJobIntrested] = React.useState("");
  const [teamHandling, setTeamHandling] = React.useState("");
  const [expectedCompensation, setExpectedCompensation] = React.useState({
    curancy: "",
    amount: "",
    rate: "",
  });
  const [visaStatus, setVisaStatus] = React.useState("");
  const [experience, setExperience] = React.useState([
    {
      level: "",
      industry: "",
    },
  ]);
  const [updatedSkilles, setUpdatedSkills] = React.useState([]);

  const saveApiData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/saveQuestion/",
        {
          environment,
          companyOutlook,
          stakeholder,
          noticePeriod,
          jobIntrested,
          teamHandling,
          expectedCompensation,
          visaStatus,
          experience,
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
    navigate("/candidatequestion");
  };

  let handleChange = (i, e) => {
    let newFormValues = [...experience];
    newFormValues[i][e.target.name] = e.target.value;

    setExperience(newFormValues);
  };

  let addSkillFields = () => {
    setExperience([...experience, { level: "", industry: "" }]);
  };

  let removeSkillFields = (i) => {
    let newFormValues = [...experience];
    newFormValues.splice(i, 1);
    setExperience(newFormValues);
  };

  React.useEffect(() => {
    let add = skills;
    experience.map((value) => {
      add = add.filter((skil) => skil !== value.industry);
    });
    setUpdatedSkills(add);
  }, [experience.length]);

  return (
    <div className="mx-40 mb-24">
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          What kind of work environment are you looking for?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={environment}
          onChange={(e) => setEnvironment(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an Option</text>;
            }
            return selected;
          }}
          className="w-96">
          {envonments.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          Is the company outlook on environment important? Like sustainability
          initiatives, being carbon nuetral etc.
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={companyOutlook}
          onChange={(e) => setCompanyOutlook(e.target.value)}
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
          Have you worked with different stakeholders before to delivery
          business objectives?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={stakeholder}
          onChange={(e) => setStakeholder(e.target.value)}
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
          What is your notice period in current organisation?
        </FormLabel>
        <TextField
          type="number"
          size="small"
          placeholder="Enter Your Notice Period"
          value={noticePeriod}
          onChange={(e) => setNoticePeriod(e.target.value)}
          className="w-96"
        />
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          What is the expected compensation range?
        </FormLabel>
        <div className="grid grid-flow-col gap-3">
          <Select
            size="small"
            displayEmpty
            value={expectedCompensation.curancy}
            onChange={(e) =>
              setExpectedCompensation({
                ...expectedCompensation,
                curancy: e.target.value,
              })
            }
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
            value={expectedCompensation.amount}
            onChange={(e) =>
              setExpectedCompensation({
                ...expectedCompensation,
                amount: e.target.value,
              })
            }
          />
          <Select
            size="small"
            displayEmpty
            value={expectedCompensation.rate}
            onChange={(e) =>
              setExpectedCompensation({
                ...expectedCompensation,
                rate: e.target.value,
              })
            }
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
          What is the type of job openings are you interested in ?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={jobIntrested}
          onChange={(e) => setJobIntrested(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an option</text>;
            }
            return selected;
          }}
          className="w-96">
          {job_Interests.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          Do you have team handling experience?(If yes, please select the team
          size)
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={teamHandling}
          onChange={(e) => setTeamHandling(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an option</text>;
            }
            return selected;
          }}
          className="w-96">
          {experiances.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      {/* expireance */}
      <div div className="mt-4 grid grid-cols-2">
        <div>
          <text style={{ color: "#008080" }}>
            Please select the industry and specify the industry experience?
          </text>
        </div>
        <div>
          {experience.map((element, index) => (
            <div className="grid grid-flow-row">
              <div className="mt-4 grid grid-flow-col justify-between items-center gap-3">
                <Select
                  name="industry"
                  size="small"
                  displayEmpty
                  value={element.industry}
                  onChange={(e) => handleChange(index, e)}
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <text style={{ color: "#667085" }}>
                          Select Industry
                        </text>
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
                      experience.length === 1 ? "#66B2B2" : "#008080",
                    borderColor: "#66B2B2",
                    borderWidth: 1,
                  }}
                  disabled={experience.length === 1}
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
              Add Industry
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-flow-col justify-between items-center">
        <FormLabel style={{ color: "#008080" }}>
          What is your current Visa or Work status ?
        </FormLabel>
        <Select
          size="small"
          displayEmpty
          value={visaStatus}
          onChange={(e) => setVisaStatus(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>Select an option</text>;
            }
            return selected;
          }}
          className="w-96">
          {visa_status.map((name) => (
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
          Submit
        </Button>
      </div>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormLabel, MenuItem, Select, TextField } from "@mui/material";
import {
  qualifications,
  skillLevel,
  skills,
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
  envonments,
  experiances,
  job_Interests,
  visa_status,
} from "./Drop_Data";
import { NavBar } from "../../widgets/navbar";
import { Footer } from "../../widgets/footer";
import axios from "axios";
import { CandidateSideNav } from "../../widgets/candidateSideNav";

export const Candidate = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);

  // form one
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

  // form two
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

  // form three
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
  const [experienceThree, setExperienceThree] = React.useState([
    {
      level: "",
      industry: "",
    },
  ]);
  const [updatedSkillesThree, setUpdatedSkillsThree] = React.useState([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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

  let handleChangeThree = (i, e) => {
    let newFormValues = [...experienceThree];
    newFormValues[i][e.target.name] = e.target.value;

    setExperienceThree(newFormValues);
  };

  let addSkillFieldsThree = () => {
    setExperienceThree([...experienceThree, { level: "", industry: "" }]);
  };

  let removeSkillFieldsThree = (i) => {
    let newFormValues = [...experienceThree];
    newFormValues.splice(i, 1);
    setExperienceThree(newFormValues);
  };

  React.useEffect(() => {
    let add = skills;
    experienceThree.map((value) => {
      add = add.filter((skil) => skil !== value.industry);
    });
    setUpdatedSkillsThree(add);
  }, [experienceThree.length]);

  const handleSubmit = async () => {
    console.log(
      qualification,
      specialization,
      experience,
      primarySkill,
      secoundrySkill,
      certifications,
      tools,
      inOffice,
      workShift,
      location,
      relocation,
      travel,
      workingIndependently,
      salary,
      workSchedule,
      appealing,
      environment,
      companyOutlook,
      stakeholder,
      noticePeriod,
      jobIntrested,
      teamHandling,
      expectedCompensation,
      visaStatus,
      experienceThree
    );
    try {
      const response = await axios.post(
        "http://localhost:3000/api/savecandidate/",
        {
          qualification,
          specialization,
          experience,
          primarySkill,
          secoundrySkill,
          certifications,
          tools,
          inOffice,
          workShift,
          location,
          relocation,
          travel,
          workingIndependently,
          salary,
          workSchedule,
          appealing,
          environment,
          companyOutlook,
          stakeholder,
          noticePeriod,
          jobIntrested,
          teamHandling,
          expectedCompensation,
          visaStatus,
          experienceThree,
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
    <div className="flex">
      <CandidateSideNav />
      <div className="mt-24 w-full">
        {activeStep === 0 && (
          <div className="mx-40 mb-24">
            <div className="flex justify-center text-center">
              <p className="py-3 text-2xl font-bold text-app-text">
                Candidate Form
              </p>
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
                      <text style={{ color: "#667085" }}>
                        Select Qualification
                      </text>
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
                              <text style={{ color: "#667085" }}>
                                Select Skill
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
                              <text style={{ color: "#667085" }}>
                                Select Skill
                              </text>
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
                Please add the tools or software applicaton you have used in the
                past?
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
                  marginLeft: 10,
                }}
                onClick={handleNext}>
                Next
              </Button>
            </div>
          </div>
        )}
        {activeStep === 1 && (
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
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
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
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
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
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
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
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
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
                    return (
                      <text style={{ color: "#667085" }}>Select an option</text>
                    );
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
                Do you prefer working independently or as part of a small team,
                as a part of large team?
              </FormLabel>
              <Select
                size="small"
                displayEmpty
                value={workingIndependently}
                onChange={(e) => setWorkingIndependently(e.target.value)}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <text style={{ color: "#667085" }}>Select an option</text>
                    );
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
                  onChange={(e) =>
                    setSalary({ ...salary, curancy: e.target.value })
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <text style={{ color: "#667085" }}>
                          Select an option
                        </text>
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
                  onChange={(e) =>
                    setSalary({ ...salary, amount: e.target.value })
                  }
                />
                <Select
                  size="small"
                  displayEmpty
                  value={salary.rate}
                  onChange={(e) =>
                    setSalary({ ...salary, rate: e.target.value })
                  }
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <text style={{ color: "#667085" }}>
                          Select an option
                        </text>
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
                    return (
                      <text style={{ color: "#667085" }}>Select an option</text>
                    );
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
                    return (
                      <text style={{ color: "#667085" }}>Select an option</text>
                    );
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
                onClick={handleBack}>
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
                onClick={handleNext}>
                Next
              </Button>
            </div>
          </div>
        )}
        {activeStep === 2 && (
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
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
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
                Is the company outlook on environment important? Like
                sustainability initiatives, being carbon nuetral etc.
              </FormLabel>
              <Select
                size="small"
                displayEmpty
                value={companyOutlook}
                onChange={(e) => setCompanyOutlook(e.target.value)}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
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
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
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
                        <text style={{ color: "#667085" }}>
                          Select an option
                        </text>
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
                        <text style={{ color: "#667085" }}>
                          Select an option
                        </text>
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
                    return (
                      <text style={{ color: "#667085" }}>Select an option</text>
                    );
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
                Do you have team handling experience?(If yes, please select the
                team size)
              </FormLabel>
              <Select
                size="small"
                displayEmpty
                value={teamHandling}
                onChange={(e) => setTeamHandling(e.target.value)}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <text style={{ color: "#667085" }}>Select an option</text>
                    );
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
                  Please select the industry and specify the industry
                  experience?
                </text>
              </div>
              <div>
                {experienceThree.map((element, index) => (
                  <div className="grid grid-flow-row">
                    <div className="mt-4 grid grid-flow-col justify-between items-center gap-3">
                      <Select
                        name="industry"
                        size="small"
                        displayEmpty
                        value={element.industry}
                        onChange={(e) => handleChangeThree(index, e)}
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
                        {updatedSkillesThree.map((name) => (
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
                        onChange={(e) => handleChangeThree(index, e)}
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
                            experienceThree.length === 1
                              ? "#66B2B2"
                              : "#008080",
                          borderColor: "#66B2B2",
                          borderWidth: 1,
                        }}
                        disabled={experienceThree.length === 1}
                        onClick={() => removeSkillFieldsThree(index)}>
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
                    onClick={() => addSkillFieldsThree()}>
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
                    return (
                      <text style={{ color: "#667085" }}>Select an option</text>
                    );
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
                onClick={handleBack}>
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
                onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>
      <NavBar show={true} />
      <Footer />
    </div>
  );
};

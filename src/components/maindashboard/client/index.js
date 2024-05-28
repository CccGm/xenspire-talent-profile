import React from "react";
import {
  Box,
  Button,
  Chip,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../widgets/navbar";
import { Footer } from "../../widgets/footer";
import {
  certifications,
  companyPhase,
  companySize,
  currency,
  domainOptions,
  oneAnswered,
  particularSoftwares,
  qualification,
  roleSettings,
  roleTimings,
  roleTravel,
  roleType,
  skillLevel,
  skills,
  teamLocation,
  teamSize,
  visa,
} from "./Drop_Data";
import { ClientSideNav } from "../../widgets/clientSideNav";

export const Client = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);

  //form one
  const [formOne, setFormOne] = React.useState({
    companyDomain: "",
    companyOperations: "",
    companySize: "",
    companyPhase: "",
    drugTest: "",
    drugTestList: [],
    backgroundCheck: "",
  });

  //from two
  const [formTwo, setFormTwo] = React.useState({
    teamSize: "",
    locationOfTeam: "",
    project: "",
    crossFunctionality: "",
    domainRole: "",
    teamMemberContribution: "",
  });

  //from three
  const [formThree, setFormThree] = React.useState({
    jobDescription: "",
    specificExp: "",
    specificIndustry: "",
    candidateDepthKnowledge: "",
    roleType: "",
    roleTimings: "",
    roleWorkSettings: "",
    roleWorkingLocation: "",
    relocationBudget: "",
    relocationExpenses: "",
    relocationCurrency: "",
    roleTravel: "",
    roleCompensation: "",
    compensationCurrency: "",
    visa: "",
    minAcedamicQualification: "",
    regulatoryReq: "",
    candidateAcademicBackground: "",
    specificCertifications: "",
    particularSoftwares: "",
    envision: "",
  });

  const [primeSkills, setPrimeSkills] = React.useState([
    { skill: "", experience: "" },
  ]);
  const [secondSkills, setSecondSkills] = React.useState([
    { skill: "", expereince: "" },
  ]);
  const [updatedSkilles, setUpdatedSkills] = React.useState([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChangeFormOne = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const pageData = { ...formOne, [name]: value };
    setFormOne(pageData);
  };

  const handleChangeFormTwo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const pageData = { ...formTwo, [name]: value };
    setFormTwo(pageData);
  };

  const handleChangeFormThree = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const pageData = { ...formThree, [name]: value };
    setFormThree(pageData);
  };

  let handleChangePrimary = (i, e) => {
    let newFormValues = [...primeSkills];
    newFormValues[i][e.target.name] = e.target.value;
    setPrimeSkills(newFormValues);
  };

  let handleChangeSecoundry = (i, e) => {
    let newFormValues = [...secondSkills];
    newFormValues[i][e.target.name] = e.target.value;
    setSecondSkills(newFormValues);
  };

  const handleAddSkill = (skillType) => {
    if (skillType === "primary") {
      setPrimeSkills((prevInputs) => [
        ...prevInputs,
        { skill: "", experience: "" },
      ]);
    } else {
      setSecondSkills((prevInputs) => [
        ...prevInputs,
        { skill: "", experience: "" },
      ]);
    }
  };

  const handleRemoveSkill = (index, skillType) => {
    if (skillType === "primary") {
      setPrimeSkills((prevInputs) => prevInputs.filter((_, i) => i !== index));
    } else {
      setSecondSkills((prevInputs) => prevInputs.filter((_, i) => i !== index));
    }
  };

  React.useEffect(() => {
    let add = skills;
    primeSkills.map((value) => {
      add = add.filter((skil) => skil.value !== value.skill);
    });
    setUpdatedSkills(add);
  }, [primeSkills.length]);

  const handleSubmit = async () => {
    console.log(formOne, "---form11");
    console.log(formTwo, "---form22");
    console.log(formThree, "---form33");
    console.log(primeSkills, "---PrimarySkills");
    console.log(secondSkills, "---SecoundrySkills");

    try {
      const response = await axios.post("http://localhost:3000/api/data/", {
        formOne,
        formTwo,
        formThree,
        primeSkills,
        secondSkills,
      });

      if (response.status === 200) {
        console.log("save data succesfully");
      } else {
        console.log("save data not save");
      }
    } catch (error) {
      console.log("save data not save", error);
    }
    navigate("/clientquestion");
  };

  return (
    <div className="flex">
      <ClientSideNav />
      <div className="my-24 w-full">
        {activeStep === 0 && (
          <div className="mx-40">
            <div className="flex justify-center text-center">
              <p className="py-3 text-2xl font-bold text-app-text">
                Client Form
              </p>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Domain of the Company?
              </FormLabel>
              <Select
                name="companyDomain"
                size="small"
                displayEmpty
                value={formOne.companyDomain}
                onChange={handleChangeFormOne}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {domainOptions.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Please provide details on nature of the company's operations?
              </FormLabel>
              <textarea
                name="companyOperations"
                value={formOne.companyOperations}
                onChange={handleChangeFormOne}
                rows={2}
                style={{
                  borderColor: "#c4c4c4",
                  minHeight: 30,
                  width: 384,
                  paddingTop: 5,
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderRadius: 5,
                  color: "#212121",
                }}
              />
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                What is the size of Company?
              </FormLabel>
              <Select
                name="companySize"
                size="small"
                displayEmpty
                value={formOne.companySize}
                onChange={handleChangeFormOne}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {companySize.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                What phase is the company is in
              </FormLabel>
              <Select
                name="companyPhase"
                size="small"
                displayEmpty
                value={formOne.companyPhase}
                onChange={handleChangeFormOne}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {companyPhase.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Do you need Drug test?
              </FormLabel>
              <div className="grid grid-flow-col gap-4">
                <Select
                  name="drugTest"
                  size="small"
                  displayEmpty
                  value={formOne.drugTest}
                  onChange={handleChangeFormOne}
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <text style={{ color: "#667085" }}>
                          Select an Option
                        </text>
                      );
                    }
                    return selected;
                  }}
                  className={`${
                    formOne.drugTest === "Yes" ? "w-28" : "w-96"
                  } h-fit`}>
                  {oneAnswered.map((name) => (
                    <MenuItem key={name.value} value={name.value}>
                      {name.label}
                    </MenuItem>
                  ))}
                </Select>
                {formOne.drugTest === "Yes" && (
                  <Select
                    multiple
                    displayEmpty
                    name="drugTestList"
                    size="small"
                    value={formOne.drugTestList}
                    onChange={handleChangeFormOne}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return (
                          <text style={{ color: "#667085" }}>
                            Select an Option
                          </text>
                        );
                      }
                      return (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      );
                    }}
                    className="w-64">
                    {companyPhase.map((name) => (
                      <MenuItem key={name.value} value={name.value}>
                        {name.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </div>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Do you need background check?
              </FormLabel>
              <Select
                name="backgroundCheck"
                size="small"
                displayEmpty
                value={formOne.backgroundCheck}
                onChange={handleChangeFormOne}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {oneAnswered.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
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
                onClick={handleNext}>
                Next
              </Button>
            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div className="mx-40">
            <div className="flex justify-center text-center">
              <p className="py-3 text-2xl font-bold text-app-text">Team</p>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                What is the team size?
              </FormLabel>
              <Select
                name="teamSize"
                size="small"
                displayEmpty
                value={formTwo.teamSize}
                onChange={handleChangeFormTwo}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {teamSize.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                What is the location of team, where it works from?
              </FormLabel>
              <Select
                name="locationOfTeam"
                size="small"
                displayEmpty
                value={formTwo.locationOfTeam}
                onChange={handleChangeFormTwo}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {teamLocation.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                What problem/project is the team working on which the candidate
                will be joininng?
              </FormLabel>
              <TextField
                size="small"
                name="project"
                value={formTwo.project}
                onChange={handleChangeFormTwo}
                className="w-96"
              />
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Does the role have to work cross functionally?
              </FormLabel>
              <Select
                name="crossFunctionality"
                size="small"
                displayEmpty
                value={formTwo.crossFunctionality}
                onChange={handleChangeFormTwo}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {oneAnswered.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Please specify the domain or teams the role will interact with?
              </FormLabel>
              <Select
                name="domainRole"
                size="small"
                displayEmpty
                value={formTwo.domainRole}
                onChange={handleChangeFormTwo}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {domainOptions.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Could you describe the contributions of a particularly
                successful team member in a similar role and how they've
                impacted the team's success?
              </FormLabel>
              <textarea
                name="teamMemberContribution"
                value={formTwo.teamMemberContribution}
                onChange={handleChangeFormTwo}
                rows={2}
                style={{
                  borderColor: "#c4c4c4",
                  minHeight: 50,
                  width: 384,
                  paddingTop: 5,
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderRadius: 5,
                  color: "#212121",
                }}
              />
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
          <div className="mx-40">
            <div className="flex justify-center text-center">
              <p className="py-3 text-2xl font-bold text-app-text">
                Preferences
              </p>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Could you please provide a job description if available?
              </FormLabel>
              <textarea
                name="jobDescription"
                value={formThree.jobDescription}
                onChange={handleChangeFormThree}
                rows={2}
                style={{
                  borderColor: "#c4c4c4",
                  minHeight: 50,
                  width: 384,
                  paddingTop: 5,
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderRadius: 5,
                  color: "#212121",
                }}
              />
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Is it essential for the candidate to have experience in a
                specific industry?
              </FormLabel>
              <Select
                name="specificIndustry"
                size="small"
                displayEmpty
                value={formThree.specificIndustry}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {oneAnswered.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            {formThree.specificIndustry === "Yes" && (
              <div className="mt-4 grid grid-flow-col justify-between items-center">
                <FormLabel style={{ color: "#008080" }}>
                  Could you specify which industry and why that experience is
                  critical?
                </FormLabel>
                <textarea
                  name="candidateDepthKnowledge"
                  value={formThree.candidateDepthKnowledge}
                  onChange={handleChangeFormThree}
                  rows={2}
                  style={{
                    borderColor: "#c4c4c4",
                    minHeight: 50,
                    width: 384,
                    paddingTop: 5,
                    paddingLeft: 10,
                    borderWidth: 1,
                    borderRadius: 5,
                    color: "#212121",
                  }}
                />
              </div>
            )}
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Would a candidate's in-depth knowledge of the industry be
                considered valuable even if they lack direct experience in the
                field?
              </FormLabel>
              <Select
                name="specificExp"
                size="small"
                displayEmpty
                value={formThree.specificExp}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {oneAnswered.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>Type of role</FormLabel>
              <Select
                name="roleType"
                size="small"
                displayEmpty
                value={formThree.roleType}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {roleType.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                What are timings of role
              </FormLabel>
              <Select
                name="roleTimings"
                size="small"
                displayEmpty
                value={formThree.roleTimings}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {roleTimings.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                What is the work settings of role?
              </FormLabel>
              <Select
                name="roleWorkSettings"
                size="small"
                displayEmpty
                value={formThree.roleWorkSettings}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {roleSettings.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                What is the location, where role will be working?
              </FormLabel>
              <Select
                name="roleWorkingLocation"
                size="small"
                displayEmpty
                value={formThree.roleWorkingLocation}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {teamLocation.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Are you providing any relocation budget?
              </FormLabel>
              <Select
                name="relocationBudget"
                size="small"
                displayEmpty
                value={formThree.relocationBudget}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {oneAnswered.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            {formThree.relocationBudget === "Yes" && (
              <div className="mt-4 grid grid-flow-col justify-between items-center">
                <FormLabel style={{ color: "#008080" }}>
                  Please provide the budget?
                </FormLabel>
                <div className="grid grid-flow-col gap-4">
                  <Select
                    size="small"
                    name="relocationCurrency"
                    displayEmpty
                    value={formThree.relocationCurrency}
                    onChange={handleChangeFormThree}
                    renderValue={(selected) => {
                      if (!selected) {
                        return (
                          <text style={{ color: "#667085" }}>
                            Select an Option
                          </text>
                        );
                      }
                      return selected;
                    }}
                    className="w-44">
                    {currency.map((name) => (
                      <MenuItem key={name.value} value={name.value}>
                        {name.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <TextField
                    size="small"
                    name="relocationExpenses"
                    value={formThree.relocationExpenses}
                    onChange={handleChangeFormThree}
                    className="w-48"
                  />
                </div>
              </div>
            )}
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                How frequest does the role require to travel?
              </FormLabel>
              <Select
                name="roleTravel"
                size="small"
                displayEmpty
                value={formThree.roleTravel}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {roleTravel.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                What is the compensation for the Job?
              </FormLabel>
              <div className="grid grid-flow-col gap-4">
                <Select
                  size="small"
                  name="compensationCurrency"
                  displayEmpty
                  value={formThree.compensationCurrency}
                  onChange={handleChangeFormThree}
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <text style={{ color: "#667085" }}>
                          Select an Option
                        </text>
                      );
                    }
                    return selected;
                  }}
                  className="w-44">
                  {currency.map((name) => (
                    <MenuItem key={name.value} value={name.value}>
                      {name.label}
                    </MenuItem>
                  ))}
                </Select>
                <TextField
                  size="small"
                  name="roleCompensation"
                  value={formThree.roleCompensation}
                  onChange={handleChangeFormThree}
                  className="w-48"
                />
              </div>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                What kind of visa you are looking for?
              </FormLabel>
              <Select
                name="visa"
                size="small"
                displayEmpty
                value={formThree.visa}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {visa.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            {/* Primary Skill */}
            <div className="mt-4 grid grid-cols-2">
              <div>
                <text style={{ color: "#008080" }}>
                  What are the Primary skills necessary to do the job?
                </text>
              </div>
              <div>
                {primeSkills.map((element, index) => (
                  <div className="grid grid-flow-col justify-between items-center gap-3 mb-2">
                    <Select
                      name="skill"
                      size="small"
                      displayEmpty
                      value={element.skill}
                      onChange={(e) => handleChangePrimary(index, e)}
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
                        <MenuItem key={name.value} value={name.value}>
                          {name.label}
                        </MenuItem>
                      ))}
                    </Select>
                    <Select
                      name="experience"
                      size="small"
                      displayEmpty
                      value={element.experience}
                      onChange={(e) => handleChangePrimary(index, e)}
                      renderValue={(selected) => {
                        if (!selected) {
                          return (
                            <text style={{ color: "#667085" }}>
                              Select Expereince
                            </text>
                          );
                        }
                        return selected;
                      }}
                      className="w-52">
                      {skillLevel.map((name) => (
                        <MenuItem key={name.value} value={name.value}>
                          {name.label}
                        </MenuItem>
                      ))}
                    </Select>

                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        color: "#ffffff",
                        backgroundColor:
                          primeSkills.length === 1 ? "#66B2B2" : "#008080",
                        borderColor: "#66B2B2",
                        borderWidth: 1,
                      }}
                      disabled={primeSkills.length === 1}
                      onClick={() => handleRemoveSkill(index, "primary")}>
                      Remove
                    </Button>
                  </div>
                ))}

                <div className="mb-3 flex justify-end">
                  <Button
                    variant="contained"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#008080",
                      borderColor: "#66B2B2",
                      borderWidth: 1,
                    }}
                    onClick={() => handleAddSkill("primary")}>
                    Add Skill
                  </Button>
                </div>
              </div>
            </div>
            {/* secoundry skill */}
            <div className="mt-2 grid grid-cols-2">
              <div>
                <text style={{ color: "#008080" }}>
                  What are the Secondary skills necessary to do the job?
                </text>
              </div>

              <div>
                {secondSkills.map((element, index) => (
                  <div className="grid grid-flow-col justify-between items-center gap-3 mb-2">
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
                        <MenuItem key={name.value} value={name.value}>
                          {name.label}
                        </MenuItem>
                      ))}
                    </Select>
                    <Select
                      name="expereince"
                      size="small"
                      displayEmpty
                      value={element.expereince}
                      onChange={(e) => handleChangeSecoundry(index, e)}
                      renderValue={(selected) => {
                        if (!selected) {
                          return (
                            <text style={{ color: "#667085" }}>
                              Select Skill Expereince
                            </text>
                          );
                        }
                        return selected;
                      }}
                      className="w-52">
                      {skillLevel.map((name) => (
                        <MenuItem key={name.value} value={name.value}>
                          {name.label}
                        </MenuItem>
                      ))}
                    </Select>

                    <Button
                      variant="contained"
                      style={{
                        color: "#ffffff",
                        backgroundColor:
                          secondSkills.length === 1 ? "#66B2B2" : "#008080",
                        borderColor: "#66B2B2",
                        borderWidth: 1,
                      }}
                      disabled={secondSkills.length === 1}
                      onClick={() => handleRemoveSkill(index, "")}>
                      Remove
                    </Button>
                  </div>
                ))}
                <div className="mb-3 flex justify-end">
                  <Button
                    variant="contained"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#008080",
                      borderColor: "#66B2B2",
                      borderWidth: 1,
                    }}
                    onClick={() => handleAddSkill("")}>
                    Add Skill
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                What is the minimum level of academic qualification do you seek
                in potential candidates?
              </FormLabel>
              <Select
                name="minAcedamicQualification"
                size="small"
                displayEmpty
                value={formThree.minAcedamicQualification}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {qualification.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Is there a regulatory/compliance requirement regarding the
                academic qualifications of candidates?
              </FormLabel>
              <Select
                name="regulatoryReq"
                size="small"
                displayEmpty
                value={formThree.regulatoryReq}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {oneAnswered.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Would you be open to candidate with different academic
                background but match the professional skills?
              </FormLabel>
              <Select
                name="candidateAcademicBackground"
                size="small"
                displayEmpty
                value={formThree.candidateAcademicBackground}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {oneAnswered.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Are there any specific certifications or licenses that
                candidates must hold?
              </FormLabel>
              <Select
                name="specificCertifications"
                size="small"
                displayEmpty
                value={formThree.specificCertifications}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {certifications.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Are there any particular tools or software applications
                candidates should be adept with?
              </FormLabel>
              <Select
                name="particularSoftwares"
                size="small"
                displayEmpty
                value={formThree.particularSoftwares}
                onChange={handleChangeFormThree}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <text style={{ color: "#667085" }}>Select an Option</text>
                    );
                  }
                  return selected;
                }}
                className="w-96">
                {particularSoftwares.map((name) => (
                  <MenuItem key={name.value} value={name.value}>
                    {name.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="mt-4 grid grid-flow-col justify-between items-center">
              <FormLabel style={{ color: "#008080" }}>
                Can you outline what you envision a successful candidate
                achieving in this role over the next three years?
              </FormLabel>
              <textarea
                name="envision"
                value={formThree.envision}
                onChange={handleChangeFormThree}
                rows={2}
                style={{
                  borderColor: "#c4c4c4",
                  minHeight: 50,
                  width: 384,
                  paddingTop: 5,
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderRadius: 5,
                  color: "#212121",
                }}
              />
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
      <Footer />
      <NavBar show={true} />
    </div>
  );
};

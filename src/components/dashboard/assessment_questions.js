import { Button, MobileStepper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Question } from "../questions";
import { QUESTIONS } from "../questions/qustions.data";

export const Assessment_Questions = ({}) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [qustions, setQuestions] = React.useState(QUESTIONS);

  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === 19) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      navigate("/report");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleSaveQuestion = (ans) => {
    const updatedQuestions = [...qustions];
    updatedQuestions[activeStep].selectedOption = ans;
    // if (
    //   qustions[activeStep].questionOptionType.toLocaleUpperCase() === "RANKING"
    // ) {
    //   updatedQuestions[activeStep].selectedOrder = ans;
    // }
    setQuestions(updatedQuestions);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      {/* stepper */}
      <div className="w-full  items-center fixed  top-24">
        <div className="flex items-center justify-center pl-36">
          <text className="text-app-Teal">Q{activeStep + 1} / 20 </text>
          <MobileStepper
            variant="progress"
            steps={21}
            position="static"
            activeStep={activeStep + 1}
            sx={{
              maxWidth: 400,
              flexGrow: 1,
              ".MuiMobileStepper-progress ": {
                color: "#008080",
              },
            }}
          />
        </div>
      </div>
      {/* button */}
      <div className="justify-end flex mr-14">
        <Button
          variant="contained"
          style={{
            color: "#ffffff",
            backgroundColor: activeStep === 0 ? "#66B2B2" : "#008080",
            borderColor: "#66B2B2",
            borderWidth: 1,
          }}
          onClick={handleBack}
          disabled={activeStep === 0}>
          Previous
        </Button>
        <Button
          variant="contained"
          style={{
            color: "#ffffff",
            backgroundColor: "#008080",
            borderColor: "#66B2B2",
            borderWidth: 1,
            marginLeft: 15,
          }}
          onClick={handleNext}>
          Next
        </Button>
      </div>
      <div>
        <Question qustion={qustions[activeStep]} save={handleSaveQuestion} />
      </div>
    </div>
  );
};

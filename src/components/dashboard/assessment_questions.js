import { Button, MobileStepper } from "@mui/material";
import React from "react";
import { Q1 } from "../questions/q1";
import { Q20 } from "../questions/q20";
import { useNavigate } from "react-router-dom";

export const Assessment_Questions = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === 20) {
      navigate("/report");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const Show_Fragment = () => {
    switch (activeStep) {
      case 0:
        setActiveStep(1);
        break;
      case 1:
        return <Q1 />;
      case 2:
        setActiveStep(20);
        break;
      case 3:
        setActiveStep(20);
        break;
      case 20:
        return <Q20 />;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="justify-end flex mr-14">
        <Button
          variant="contained"
          style={{
            color: "#ffffff",
            backgroundColor: activeStep === 1 ? "#66B2B2" : "#008080",
            borderColor: "#66B2B2",
            borderWidth: 1,
          }}
          onClick={handleBack}
          disabled={activeStep === 1}>
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
        <Show_Fragment />
      </div>
      {/* stepper */}
      <div className="w-full  items-center fixed  top-24">
        <div className="flex items-center justify-center pl-36">
          <text className="text-app-Teal">Q{activeStep} / 20 </text>
          <MobileStepper
            variant="progress"
            steps={21}
            position="static"
            activeStep={activeStep}
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
    </div>
  );
};

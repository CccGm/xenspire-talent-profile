import React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import { Form_Of_Basic_Details } from "./form_of_basic_details";
import { Intermediate_Sesction } from "./intermediate_sesction";
import { Assessment_Questions } from "./assessment_questions";
import { NavBar } from "../widgets/navbar";
import { Footer } from "../widgets/footer";

export const Basic_Details = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const Show_Fragment = () => {
    switch (activeStep) {
      case 0:
        setActiveStep(1);
        break;
      case 1:
        return <Form_Of_Basic_Details />;
      case 2:
        return <Intermediate_Sesction />;
      case 3:
        return <Assessment_Questions />;
      default:
        break;
    }
  };

  return (
    <div className="mt-24">
      {/* stepper */}
      <div className="w-full items-center fixed  bottom-16">
        <div className="flex items-center justify-center pl-36">
          <text className="text-app-Teal">Section {activeStep} / 3 </text>
          <MobileStepper
            variant="progress"
            steps={4}
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

      {activeStep === 3 ? (
        <></>
      ) : (
        <div className="justify-end flex mr-14">
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
      )}

      <div>
        <Show_Fragment />
      </div>

      <NavBar />
      <Footer />
    </div>
  );
};

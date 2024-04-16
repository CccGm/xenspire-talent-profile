import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CheckCircle, RadioButtonChecked } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { StepConnector, stepConnectorClasses } from "@mui/material";
import { NavBar } from "../widgets/navbar";
import { Footer } from "../widgets/footer";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Your details",
    description: `Please provide your name and email`,
  },
];

export const Report_Assesment = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#008080",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#008080",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#B2D8D8",
      borderRadius: 1,
    },
  }));

  const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#B2D8D8",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#008080",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#008080",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <CheckCircle sx={{ color: "#008080" }} />
        ) : (
          <RadioButtonChecked />
        )}
      </QontoStepIconRoot>
    );
  }

  return (
    <div className="mt-36 ml-32">
      <text className="text-app-Teal font-bold text-2xl">
        Report Card Ideal Persona
      </text>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          connector={<QontoConnector />}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel StepIconComponent={QontoStepIcon}>
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography sx={{ color: "#008080" }}>
                  {step.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        mt: 1,
                        mr: 1,
                        color: "white",
                        backgroundColor: "#008080",
                      }}>
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      variant="contained"
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{
                        mt: 1,
                        mr: 1,
                        color: "white",
                        backgroundColor: "#66B2B2",
                      }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button
              variant="contained"
              onClick={handleReset}
              sx={{ mt: 1, mr: 1, color: "white", backgroundColor: "#008080" }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
      <NavBar />
      <Footer />
    </div>
  );
};

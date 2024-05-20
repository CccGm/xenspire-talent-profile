import React from "react";
import { NavBar } from "../widgets/navbar";
import { Footer } from "../widgets/footer";
import { FormOne } from "./formOne";
import { FormTwo } from "./formTwo";
import { FormThree } from "./formThree";

export const Basic_Details = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const ShowFragment = () => {
    switch (activeStep) {
      case 0:
        setActiveStep(1);
        break;
      case 1:
        return <FormOne next={handleNext} />;
      case 2:
        return <FormTwo next={handleNext} back={handleBack} />;
      case 3:
        return <FormThree back={handleBack} />;
      default:
        setActiveStep(1);
        break;
    }
  };

  return (
    <div className="mt-24">
      <ShowFragment />
      <NavBar show={true} />
      <Footer />
    </div>
  );
};

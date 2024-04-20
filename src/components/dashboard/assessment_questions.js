import { MobileStepper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Question } from "../questions";
import axios from "axios";
import { useAppContext } from "../../context";

export const Assessment_Questions = ({}) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const { qustions, setQuestions, timeStart, timeStop } = useAppContext();

  const navigate = useNavigate();

  React.useEffect(() => {
    timeStart();
  }, []);

  const handleNext = () => {
    if (activeStep === 19) {
      timeStop();
      saveApiData();
      navigate("/report");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const saveApiData = async () => {
    console.log(qustions);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/saveQuestion/",
        {
          qustions,
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

  const handleSaveQuestion = (ans) => {
    const updatedQuestions = [...qustions];
    updatedQuestions[activeStep].selectedOption = ans;
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

      <div>
        <Question
          qustion={qustions[activeStep]}
          save={handleSaveQuestion}
          next={handleNext}
          back={handleBack}
        />
      </div>
    </div>
  );
};

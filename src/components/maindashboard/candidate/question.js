import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MobileStepper } from "@mui/material";
import { useAppContext } from "../../../context";
import { Question } from "../../questions";
import { NavBar } from "../../widgets/navbar";
import { Footer } from "../../widgets/footer";
import { CandidateSideNav } from "../../widgets/candidateSideNav";

export const CandidateQuestions = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const { qustions, setQuestions, timeStart, timeStop, seconds } =
    useAppContext();

  const navigate = useNavigate();

  React.useEffect(() => {
    timeStart();
    getQuestion();
  }, []);

  const handleNext = () => {
    if (qustions?.length === activeStep + 1) {
      timeStop();
      saveApiData();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  // setQuestions for candidateAssesment
  const getQuestion = async () => {
    axios
      .get("localhost:3000")
      .then((data) => {
        setQuestions(data.data);
      })
      .catch((e) => console.log(e));
  };

  const saveApiData = async () => {
    console.log(qustions, "Save Data");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/saveQuestion/",
        {
          qustions,
          seconds,
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
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <div className="flex">
      <CandidateSideNav />
      <div className="my-24 w-full">
        {/* stepper */}
        <div className="w-full  items-center fixed ">
          <div className="flex items-center justify-center pl-36">
            <text className="text-app-Teal">
              Q{activeStep + 1} / {qustions?.length}
            </text>
            <MobileStepper
              variant="progress"
              steps={qustions?.length + 1}
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
            length={qustions?.length}
            activeStep={activeStep + 1}
          />
        </div>
      </div>
      <NavBar />
      <Footer />
    </div>
  );
};

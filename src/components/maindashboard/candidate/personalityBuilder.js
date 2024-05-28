import React from "react";
import { LogoutOutlined } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Card,
  Checkbox,
  IconButton,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo2 from "../../../assets/images/xenspire-logo 1.png";
import { QuestionValue } from "./DummyData";
import { CandidateSideNav } from "../../widgets/candidateSideNav";

export const PersonalityBuilder = () => {
  const navigation = useNavigate();
  const [questionList, setQuestionList] = React.useState(QuestionValue);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [mostLikelyOption, setMostLikelyOption] = React.useState({});
  const [leastLikelyOption, setLeastLikelyOption] = React.useState({});

  const handleLeastlike = (question, option) => {
    setLeastLikelyOption({
      ...leastLikelyOption,
      [question.questionNo]: option,
    });
    question.leastLikely = option;
    if (mostLikelyOption[question.questionNo] === option) {
      setMostLikelyOption({
        ...mostLikelyOption,
        [question.questionNo]: "",
      });
      question.mostLikely = "";
    }
  };

  const handleMostlike = (question, option) => {
    setMostLikelyOption({
      ...mostLikelyOption,
      [question.questionNo]: option,
    });
    question.mostLikely = option;
    if (leastLikelyOption[question.questionNo] === option) {
      setLeastLikelyOption({
        ...leastLikelyOption,
        [question.questionNo]: "",
      });
      question.leastLikely = "";
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrev = (event) => {
    event.preventDefault();
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleValueSave = async () => {
    console.log("questionsData ", questionList);

    await axios
      .post("http://localhost/3000", questionList)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  const question = questionList[currentQuestion];

  return (
    <div className="flex">
      <CandidateSideNav />
      <div className="bg-app-lightBlue w-full h-screen px-16 pb-10">
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            bgcolor: "#ffffff",
            px: 3,
            py: 1,
          }}>
          <div className="flex justify-between items-center">
            <div className="items-center flex gap-2">
              <img src={logo2} alt="logo" />
              <p style={{ color: "#1470A1", fontWeight: 800, fontSize: 16 }}>
                Xenspire Talent
              </p>
            </div>

            <div className="mr-3">
              <div className="grid grid-flow-col gap-2 justify-between">
                <div className="mr-1 w-6 rounded-full">
                  <img
                    src={"https://picsum.photos/200/300.webp"}
                    className="rounded-full"
                    alt="avtar"
                  />
                </div>
                <div className="grid grid-flow-row ">
                  <p style={{ fontSize: 12, color: "#000000" }}>testUser</p>
                  <p style={{ fontSize: 12, color: "#6C737F" }}>test@123</p>
                </div>
                <IconButton onClick={() => console.log("logout")}>
                  <LogoutOutlined sx={{ color: "#9AA1B4" }} />
                </IconButton>
              </div>
            </div>
          </div>
        </AppBar>
        <div className="grid grid-flow-row justify-center">
          <div className="flex justify-center text-center py-10 pt-24">
            <p style={{ color: "#1A1A1A", fontWeight: 700, fontSize: 24 }}>
              In a Work Setting, which attribute best describes you
            </p>
          </div>
          <div>
            <Card sx={{ borderRadius: 5, py: 1 }}>
              <div className="flex justify-center text-center py-2">
                <p style={{ color: "#7F7F7F", fontWeight: 600, fontSize: 20 }}>
                  In a Work Setting, which attribute best describes you
                </p>
              </div>
              <div className="grid grid-cols-4 border-t-2 py-1 border-app-tableBorder mt-2">
                <div className="flex justify-center items-center text-center">
                  <p
                    style={{ color: "#2A2A2A", fontWeight: 600, fontSize: 20 }}>
                    Most Like Me
                  </p>
                </div>
                <div className="col-span-2 flex justify-center items-center text-center py-1 border-l-2 border-r-2 border-app-tableBorder">
                  <p
                    style={{ color: "#2A2A2A", fontWeight: 600, fontSize: 20 }}>
                    Choose one unique option for
                    <br /> 'Most Likely' and 'Least Likely'
                  </p>
                </div>
                <div className="flex justify-center items-center text-center py-1">
                  <p
                    style={{ color: "#2A2A2A", fontWeight: 600, fontSize: 20 }}>
                    Least Like Me
                  </p>
                </div>
              </div>
              {question.options.map((value, index) => {
                return (
                  <div
                    className="grid grid-cols-4 border-t-2 py-1 border-app-tableBorder mt-2"
                    key={index}>
                    <div className="flex justify-center items-center text-center">
                      <Checkbox
                        checked={
                          mostLikelyOption[question.questionNo] === value
                        }
                        onChange={() => handleMostlike(question, value)}
                      />
                    </div>
                    <div className="col-span-2 flex justify-center items-center text-center py-1 px-3 border-l-2 border-r-2 border-app-tableBorder">
                      <p
                        style={{
                          color: "#3B3B3B",
                          fontWeight: 500,
                          fontSize: 18,
                        }}>
                        {value}
                      </p>
                    </div>
                    <div className="flex justify-center items-center text-center py-1">
                      <Checkbox
                        checked={
                          leastLikelyOption[question.questionNo] === value
                        }
                        onChange={() => handleLeastlike(question, value)}
                      />
                    </div>
                  </div>
                );
              })}
            </Card>
          </div>
          <div className="flex justify-end px-5 p-2 gap-4 mt-5">
            {!(currentQuestion === 0) && (
              <Button
                variant="contained"
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                sx={{ bgcolor: "#729434" }}>
                Back
              </Button>
            )}
            {!(currentQuestion === questionList.length - 1) && (
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ bgcolor: "#729434" }}>
                Next
              </Button>
            )}
            {currentQuestion === questionList.length - 1 && (
              <Button
                variant="contained"
                onClick={handleValueSave}
                sx={{ bgcolor: "#729434" }}>
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

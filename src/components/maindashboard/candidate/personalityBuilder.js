import React from "react";
import { LogoutOutlined } from "@mui/icons-material";
import { AppBar, Button, Card, IconButton, Radio } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo2 from "../../../assets/images/xenspire-logo 1.png";
import { Questions } from "./DummyData";

export const PersonalityBuilder = () => {
  const navigation = useNavigate();
  const [question, setQuestions] = React.useState(Questions);
  const [showQuestion, setShowQuestion] = React.useState(0);

  const handleChnageRadio = (value, i) => {
    let newArray = [...question];
    let index = newArray.findIndex((data) => data.id === i);

    newArray[index].ans = value;
    setQuestions(newArray);
  };

  function stableSort(array) {
    const stabilizedThis = array.map((el, index) => [el, index]);

    return stabilizedThis.map((el) => el[0]);
  }

  const visibleRows = React.useMemo(
    () => stableSort(question).slice(showQuestion * 3, showQuestion * 3 + 3),
    [showQuestion]
  );
  const nextClick = () => {
    setShowQuestion(showQuestion + 1);
  };
  const nextBack = () => {
    setShowQuestion(showQuestion - 1);
  };

  const onSubmit = () => {
    console.log(question);
  };

  return (
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
                <text style={{ fontSize: 12, color: "#000000" }}>testUser</text>
                <text style={{ fontSize: 12, color: "#6C737F" }}>test@123</text>
              </div>
              <IconButton onClick={() => console.log("logout")}>
                <LogoutOutlined sx={{ color: "#9AA1B4" }} />
              </IconButton>
            </div>
          </div>
        </div>
      </AppBar>
      <div>
        <div className="flex justify-center text-center py-10 pt-24">
          <p style={{ color: "#1A1A1A", fontWeight: 700, fontSize: 24 }}>
            In a Work Setting, which attribute best describes you
          </p>
        </div>
        <Card sx={{ borderRadius: 5, py: 1 }}>
          <div className="flex justify-center text-center py-2">
            <p style={{ color: "#7F7F7F", fontWeight: 600, fontSize: 20 }}>
              In a Work Setting, which attribute best describes you
            </p>
          </div>
          <div className="grid grid-cols-4 border-t-2 py-1 border-app-tableBorder mt-2">
            <div className="flex justify-center items-center text-center">
              <p style={{ color: "#2A2A2A", fontWeight: 600, fontSize: 20 }}>
                Most Like Me
              </p>
            </div>
            <div className="col-span-2 flex justify-center items-center text-center py-1 border-l-2 border-r-2 border-app-tableBorder">
              <p style={{ color: "#2A2A2A", fontWeight: 600, fontSize: 20 }}>
                Choose one unique option for
                <br /> 'Most Likely' and 'Least Likely'
              </p>
            </div>
            <div className="flex justify-center items-center text-center py-1">
              <p style={{ color: "#2A2A2A", fontWeight: 600, fontSize: 20 }}>
                Least Like Me
              </p>
            </div>
          </div>
          {visibleRows.map((value, index) => {
            return (
              <div
                className="grid grid-cols-4 border-t-2 py-1 border-app-tableBorder mt-2"
                key={index}>
                <div className="flex justify-center items-center text-center">
                  <Radio
                    name="most like"
                    checked={value.ans === "most like"}
                    onChange={() => handleChnageRadio("most like", value.id)}
                  />
                </div>
                <div className="col-span-2 flex justify-center items-center text-center py-1 border-l-2 border-r-2 border-app-tableBorder">
                  <p
                    style={{ color: "#3B3B3B", fontWeight: 500, fontSize: 18 }}>
                    {value.question}
                  </p>
                </div>
                <div className="flex justify-center items-center text-center py-1">
                  <Radio
                    name="least like"
                    checked={value.ans === "least like"}
                    onChange={() => handleChnageRadio("least like", value.id)}
                  />
                </div>
              </div>
            );
          })}
        </Card>
        <div className="flex justify-end px-5 p-2 gap-4">
          <Button
            variant="contained"
            onClick={nextBack}
            disabled={showQuestion === 0}>
            Back
          </Button>
          {Math.floor(question.length / 3) === showQuestion ? (
            <Button variant="contained" onClick={onSubmit}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" onClick={nextClick}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

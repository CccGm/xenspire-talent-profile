import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { RadioQuestion } from "./radio_question";
import { ArrangeQuestion } from "./arrange_question";

export const Question = ({ qustion, save, next, back }) => {
  const [answer, setAnswer] = React.useState(null);

  useEffect(() => {
    if (qustion?.selectedOption !== null) {
      setAnswer(qustion?.selectedOption);
    }
  }, [qustion]);

  return (
    <div>
      {/* button */}
      <div className="justify-end flex mr-14">
        <Button
          variant="contained"
          style={{
            color: "#ffffff",
            backgroundColor:
              qustion.questionnaireNo === 1 ? "#66B2B2" : "#008080",
            borderColor: "#66B2B2",
            borderWidth: 1,
          }}
          onClick={back}
          disabled={qustion.questionnaireNo === 1}>
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
          onClick={() => {
            next();
            save(answer);
          }}>
          {qustion.questionnaireNo === 20 ? "Submit" : "Save & Next"}
        </Button>
      </div>
      <div className="mt-10 mx-24">
        <text className="text-app-Teal font-bold text-2xl">
          Question : {qustion.questionNo}
        </text>
        <div className="grid grid-flow-row gap-2 mt-8">
          <text className="text-app-Teal ">• {qustion.question}</text>
        </div>
        {qustion ? (
          <div className="my-10 ">
            {qustion?.questionType?.toLocaleUpperCase() === "RANKING" ? (
              <ArrangeQuestion
                changeAns={setAnswer}
                optionsList={qustion.options}
                no={qustion.questionNo}
              />
            ) : (
              <RadioQuestion
                ans={answer}
                changeAns={setAnswer}
                optionsList={qustion.options}
                no={qustion.questionNo}
              />
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

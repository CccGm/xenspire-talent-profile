import React from "react";
import { RadioQuestion } from "./radio_question";
import { Button } from "@mui/material";
import { ArrangeQuestion } from "./arrange_question";

export const Question = ({ qustion, save }) => {
  const [answer, setAnswer] = React.useState(qustion.selectedOption);

  return (
    <div className="mt-10 mx-24">
      <text className="text-app-Teal font-bold text-2xl">
        Question : {qustion.questionnaireNo}
      </text>
      <div className="grid grid-flow-row gap-2 mt-8">
        <text className="text-app-Teal ">• {qustion.question}</text>
      </div>
      <div className="my-10 ">
        {qustion.questionOptionType.toLocaleUpperCase() === "RANKING" ? (
          <ArrangeQuestion
            ans={answer}
            changeAns={setAnswer}
            optionsList={qustion.optionsList}
            no={qustion.questionnaireNo}
          />
        ) : (
          <RadioQuestion
            ans={answer}
            changeAns={setAnswer}
            optionsList={qustion.optionsList}
          />
        )}
      </div>
      <div className="justify-end flex mb-28">
        <Button
          onClick={() => save(answer)}
          variant="outlined"
          style={{
            color: "#ffffff",
            backgroundColor: "#008080",
            borderColor: "#66B2B2",
            borderWidth: 1,
          }}>
          Save
        </Button>
      </div>
    </div>
  );
};

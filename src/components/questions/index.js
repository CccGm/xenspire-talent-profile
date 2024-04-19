import React from "react";
import { RadioQuestion } from "./radio_question";
import { Button } from "@mui/material";

export const Question = ({ qustion, save }) => {
  const [radio, setRadio] = React.useState(qustion.selectedOption);

  return (
    <div className="mt-10 mx-24">
      <text className="text-app-Teal font-bold text-2xl">
        Question : {qustion.questionnaireNo}
      </text>
      <div className="grid grid-flow-row gap-2 mt-8">
        <text className="text-app-Teal ">• {qustion.question}</text>
      </div>
      <div className="my-10 ">
        <RadioQuestion
          ans={radio}
          changeAns={setRadio}
          optionsList={qustion.optionsList}
        />
      </div>
      <div className="justify-end flex mb-28">
        <Button
          onClick={() => save(radio)}
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

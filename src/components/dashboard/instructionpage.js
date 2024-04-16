import React from "react";
import { Footer } from "../widgets/footer";
import { NavBar } from "../widgets/navbar";

export const InstructionPage = () => {
  return (
    <div className="mt-32">
      <div className="grid grid-flow-row gap-2  text-center  px-20">
        <text className="text-app-Teal  font-bold text-3xl">
          Welcome to Neuro Hiring
        </text>
        <text className="text-app-Teal ">
          Thanks for the interest in this position. Please provide your email
          address and we will send you <br /> more information by email with
          link to the assessment
        </text>
      </div>
      <div className="grid grid-flow-col px-28 gap-4">
        <div>
          <text className="text-app-Teal  font-bold text-3xl">
            Instructions
          </text>
          <div className="grid grid-flow-row gap-3 mt-8">
            <text className="text-app-Teal ">
              • Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </text>
            <text className="text-app-Teal ">
              • Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s,
            </text>
            <text className="text-app-Teal ">
              • when an unknown printer took a galley of type and scrambled it
              to make a type specimen book.
            </text>
            <text className="text-app-Teal ">
              • It has survived not only five centuries, but also the leap into
              electronic typesetting
            </text>
          </div>
        </div>
        <div className="flext justify-center content-center ">
          <a
            href="/basicdetails"
            style={{
              backgroundColor: "#008080",
              color: "white",
              padding: 5,
              paddingLeft: 18,
              paddingRight: 18,
              borderRadius: 4,
            }}>
            Start
          </a>
        </div>
      </div>
      <NavBar />
      <Footer />
    </div>
  );
};

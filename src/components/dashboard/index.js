import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./landingpage";
import { InstructionPage } from "./instructionpage";
import { Basic_Details } from "./basic_details";
import { Report_Assesment } from "./report_assesment";

export const DashBoard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="landing" replace />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="instruction" element={<InstructionPage />} />
        <Route path="basicdetails" element={<Basic_Details />} />
        <Route path="report" element={<Report_Assesment />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./landingpage";
import { InstructionPage } from "./instructionpage";
import { Basic_Details } from "./basic_details";
import { Report_Assesment } from "./report_assesment";
import { Selection_Screen } from "./selection_screen";
import { Auth } from "../auth";
import { ContextProvider } from "../../context";
import { Value } from "./value";

export const DashBoard = () => {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="landing" replace />} />
          <Route path="landing" element={<LandingPage />} />
          <Route path="instruction" element={<InstructionPage />} />
          <Route path="basicdetails" element={<Basic_Details />} />
          <Route path="report" element={<Report_Assesment />} />
          <Route path="selection" element={<Selection_Screen />} />
          <Route path="value" element={<Value />} />
          <Route path="auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ContextProvider>
    </>
  );
};
